"""MeetingMind RECALL helpers."""

from __future__ import annotations

from typing import Any, Iterable, Optional

from .client import HindsightClient
from .memory_schema import build_recall_query


def recall_for_preparation(
    *,
    project: str | None = None,
    participants: Iterable[str] | None = None,
    current_context: str | None = None,
    client: Optional[HindsightClient] = None,
) -> dict[str, Any]:
    """Retrieve historical meeting context for the AI preparation agent."""
    query = build_recall_query(
        project=project,
        participants=participants,
        current_context=current_context,
    )
    hindsight = client or HindsightClient()
    return hindsight.recall(
        query,
        types=["world", "experience", "observation"],
        prefer_observations=True,
    )
