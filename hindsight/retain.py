"""MeetingMind RETAIN helpers."""

from __future__ import annotations

from typing import Any, Mapping, Optional

from .client import HindsightClient
from .memory_schema import build_meeting_memory


def retain_meeting(
    meeting: Mapping[str, Any],
    *,
    client: Optional[HindsightClient] = None,
) -> dict[str, Any]:
    """Persist important information from one meeting in Hindsight."""
    meeting_id = str(meeting.get("meeting_id") or "").strip()
    content = build_meeting_memory(meeting)

    if not meeting_id:
        raise ValueError("meeting_id is required for meeting memory.")

    hindsight = client or HindsightClient()
    return hindsight.retain(
        content,
        context="MeetingMind meeting memory. Use this for future meeting preparation.",
        timestamp=str(meeting.get("date") or "") or None,
        document_id=f"meetingmind:{meeting_id}",
    )
