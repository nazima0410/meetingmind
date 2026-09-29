from pydantic import BaseModel, Field
from typing import List


class MeetingKnowledge(BaseModel):
    """
    Structured knowledge extracted from a meeting.
    """

    decisions: List[str] = Field(
        default_factory=list,
        description="Important decisions explicitly made during the meeting."
    )

    commitments: List[str] = Field(
        default_factory=list,
        description="Actions or commitments assigned to participants."
    )

    unresolved_issues: List[str] = Field(
        default_factory=list,
        description="Problems, concerns, or issues that remain unresolved."
    )

    participant_preferences: List[str] = Field(
        default_factory=list,
        description="Participant preferences, priorities, or concerns."
    )

    discussion_points: List[str] = Field(
        default_factory=list,
        description="Important topics discussed during the meeting."
    )


class MeetingBrief(BaseModel):
    """
    AI-generated preparation brief for an upcoming meeting.
    """

    meeting_title: str = Field(
        description="Title of the meeting."
    )

    objective: str = Field(
        description="Main objective of the upcoming meeting."
    )

    previous_decisions: List[str] = Field(
        default_factory=list,
        description="Relevant decisions from previous meetings."
    )

    open_issues: List[str] = Field(
        default_factory=list,
        description="Issues that should be followed up."
    )

    commitments: List[str] = Field(
        default_factory=list,
        description="Relevant commitments made previously."
    )

    participant_preferences: List[str] = Field(
        default_factory=list,
        description="Relevant participant preferences or concerns."
    )

    client_requests: List[str] = Field(
        default_factory=list,
        description="Requests made by the client or stakeholders."
    )

    discussion_points: List[str] = Field(
        default_factory=list,
        description="Recommended topics to discuss."
    )