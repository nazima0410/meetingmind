"""Small dependency-free HTTP client for Hindsight Cloud."""

from __future__ import annotations

import json
import os
from typing import Any, Dict, Iterable, Optional
from urllib.error import HTTPError, URLError
from urllib.request import Request, urlopen


class HindsightError(RuntimeError):
    """Raised when a Hindsight operation cannot be completed."""


class HindsightClient:
    """Client for Hindsight Cloud RETAIN and RECALL endpoints."""

    def __init__(
        self,
        api_key: Optional[str] = None,
        api_url: Optional[str] = None,
        bank_id: Optional[str] = None,
        timeout: float = 30.0,
    ) -> None:
        self.api_key = api_key or os.getenv("HINDSIGHT_API_KEY", "")
        self.api_url = (api_url or os.getenv(
            "HINDSIGHT_API_URL", "https://api.hindsight.vectorize.io"
        )).rstrip("/")
        self.bank_id = bank_id or os.getenv("HINDSIGHT_BANK_ID", "meetingmind")
        self.timeout = timeout

    def _validate(self) -> None:
        if not self.api_key:
            raise HindsightError(
                "HINDSIGHT_API_KEY is not configured. Set it in the runtime environment."
            )
        if not self.bank_id.strip():
            raise HindsightError("HINDSIGHT_BANK_ID must not be empty.")

    def _post(self, path: str, payload: Dict[str, Any]) -> Dict[str, Any]:
        self._validate()
        request = Request(
            f"{self.api_url}{path}",
            data=json.dumps(payload).encode("utf-8"),
            headers={
                "Authorization": f"Bearer {self.api_key}",
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            method="POST",
        )
        try:
            with urlopen(request, timeout=self.timeout) as response:
                raw = response.read().decode("utf-8")
        except HTTPError as exc:
            detail = exc.read().decode("utf-8", errors="replace")
            raise HindsightError(
                f"Hindsight HTTP {exc.code}: {detail[:500]}"
            ) from exc
        except URLError as exc:
            raise HindsightError(
                f"Unable to reach Hindsight: {exc.reason}"
            ) from exc
        except OSError as exc:
            raise HindsightError(f"Hindsight connection failed: {exc}") from exc

        if not raw:
            return {}
        try:
            data = json.loads(raw)
        except json.JSONDecodeError as exc:
            raise HindsightError("Hindsight returned invalid JSON.") from exc

        if not isinstance(data, dict):
            raise HindsightError("Hindsight returned an unexpected response shape.")
        return data

    def retain(
        self,
        content: str,
        *,
        context: Optional[str] = None,
        timestamp: Optional[str] = None,
        document_id: Optional[str] = None,
        async_processing: bool = False,
    ) -> Dict[str, Any]:
        if not content or not content.strip():
            raise ValueError("content must not be empty.")

        item: Dict[str, Any] = {"content": content.strip()}
        if context:
            item["context"] = context
        if timestamp:
            item["timestamp"] = timestamp
        if document_id:
            item["document_id"] = document_id

        payload: Dict[str, Any] = {"items": [item]}
        if async_processing:
            payload["async"] = True

        return self._post(
            f"/v1/default/banks/{self.bank_id}/memories",
            payload,
        )

    def recall(
        self,
        query: str,
        *,
        types: Optional[Iterable[str]] = None,
        prefer_observations: Optional[bool] = None,
    ) -> Dict[str, Any]:
        if not query or not query.strip():
            raise ValueError("query must not be empty.")

        payload: Dict[str, Any] = {"query": query.strip()}
        if types is not None:
            values = list(types)
            invalid = set(values) - {"world", "experience", "observation"}
            if invalid:
                raise ValueError(
                    f"Unsupported Hindsight memory types: {sorted(invalid)}"
                )
            payload["types"] = values
        if prefer_observations is not None:
            payload["prefer_observations"] = prefer_observations

        return self._post(
            f"/v1/default/banks/{self.bank_id}/memories/recall",
            payload,
        )

    def recall_texts(self, query: str, **kwargs: Any) -> list[str]:
        response = self.recall(query, **kwargs)
        results = response.get("results", [])
        if not isinstance(results, list):
            return []

        texts: list[str] = []
        for result in results:
            if isinstance(result, dict):
                text = result.get("text") or result.get("content")
                if isinstance(text, str) and text.strip():
                    texts.append(text.strip())
            elif isinstance(result, str) and result.strip():
                texts.append(result.strip())
        return texts
