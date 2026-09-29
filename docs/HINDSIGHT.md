# MeetingMind Hindsight Memory

## Purpose

Hindsight is the persistent memory layer for MeetingMind. It stores important information from previous meetings and retrieves relevant historical context when the user prepares for a future meeting.

## Core flow

    Meeting notes
        |
    AI extraction
        |
    Hindsight RETAIN
        |
    Persistent memory
        |
    Future meeting preparation
        |
    Hindsight RECALL
        |
    AI meeting brief

## Configuration

Set these environment variables at runtime:

    HINDSIGHT_API_KEY=<real Hindsight API key>
    HINDSIGHT_API_URL=https://api.hindsight.vectorize.io
    HINDSIGHT_BANK_ID=meetingmind

Never commit the real API key or a populated .env file.

## RETAIN

retain_meeting() converts one meeting into searchable text containing:

- meeting ID
- project/client
- date
- participants
- decisions
- commitments
- unresolved issues
- participant preferences
- important discussion points
- notes

It calls Hindsight's memory endpoint:

    POST /v1/default/banks/{bank_id}/memories

A stable document ID is used so a meeting can be updated through Hindsight's document upsert behavior.

## RECALL

recall_for_preparation() builds a focused query using the project, participants, and current meeting context.

It calls:

    POST /v1/default/banks/{bank_id}/memories/recall

The result is returned to the AI agent as historical context. If Hindsight returns no results, the integration returns an empty result rather than inventing information.

## Integration example

Member 1 can use:

    from hindsight import recall_for_preparation

    history = recall_for_preparation(
        project="NovaTech Solutions",
        participants=["Sarah", "Rahul"],
        current_context="Prepare for launch readiness.",
    )

After extracting a meeting's important information, the agent/backend can use:

    from hindsight import retain_meeting

    retain_meeting({
        "meeting_id": "meeting-001",
        "project": "NovaTech Solutions",
        "date": "2026-09-28",
        "participants": ["Sarah", "Rahul"],
        "decisions": ["September launch"],
        "commitments": ["Performance testing by Friday"],
        "unresolved_issues": ["API performance"],
        "participant_preferences": [],
        "important_points": ["Client requested dark mode"],
        "notes": "Launch readiness discussion",
    })

## Demo scenario

Meeting 1 records that Sarah wants a September launch and the client requested dark mode.

Meeting 2 records Rahul's API performance concern and the commitment to complete performance testing by Friday.

Later, the user asks:

    Prepare me for the NovaTech meeting with Sarah and Rahul.

RECALL should return relevant historical context so the AI agent can include those items in the meeting brief.

## Testing

No Hindsight API key is required for unit tests:

    python -m unittest discover -s tests -v

Live connectivity requires a valid Hindsight API key and a reachable Hindsight Cloud endpoint.
