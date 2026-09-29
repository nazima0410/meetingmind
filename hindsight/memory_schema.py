"""Meeting memory formatting and recall-query construction."""

from __future__ import annotations

from typing import Any, Iterable, Mapping


def _join(value: Any) -> str:
    if value is None:
        return "Not provided"
    if isinstance(value, str):
        return value.strip() or "Not provided"
    if isinstance(value, Iterable) and not isinstance(value, (bytes, dict)):
        values = [str(item).strip() for item in value if str(item).strip()]
        return ", ".join(values) if values else "Not provided"
    return str(value)


def build_meeting_memory(meeting: Mapping[str, Any]) -> str:
    """Convert meeting data into explicit, searchable memory text."""
    return "\n".join(
        [
            f"Meeting ID: {_join(meeting.get('meeting_id'))}",
            f"Project/Client: {_join(meeting.get('project'))}",
            f"Meeting date: {_join(meeting.get('date'))}",
            f"Participants: {_join(meeting.get('participants'))}",
            f"Decisions: {_join(meeting.get('decisions'))}",
            f"Commitments: {_join(meeting.get('commitments'))}",
            f"Unresolved issues: {_join(meeting.get('unresolved_issues'))}",
            f"Participant preferences: {_join(meeting.get('participant_preferences'))}",
            f"Important discussion points: {_join(meeting.get('important_points'))}",
            f"Meeting notes: {_join(meeting.get('notes'))}",
        ]
    )


def build_recall_query(
    *,
    project: str | None = None,
    participants: Iterable[str] | None = None,
    current_context: str | None = None,
) -> str:
    """Build a focused preparation query for historical meeting context."""
    participant_text = _join(participants)
    project_text = project.strip() if project else "the relevant project"

    return (
        f"Prepare me for an upcoming meeting about {project_text}. "
        f"Relevant participants: {participant_text}. "
        "Recall previous decisions, commitments, unresolved issues, "
        "participant preferences, important discussion points, and meeting history "
        "that are relevant to this meeting."
        + (
            f" Current meeting context: {current_context.strip()}"
            if current_context and current_context.strip()
            else ""
        )
    )
