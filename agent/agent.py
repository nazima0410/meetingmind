import os

from google import genai

from schemas import MeetingKnowledge, MeetingBrief

from prompts import (
    SYSTEM_PROMPT,
    MEETING_ANALYSIS_PROMPT,
    MEETING_BRIEF_PROMPT,
)

from tools import retain_memory, recall_memory


class MeetingMindAgent:
    """
    Main AI agent for MeetingMind.

    Responsibilities:
    1. Analyze meeting notes.
    2. Convert notes into structured knowledge.
    3. Store knowledge in Hindsight.
    4. Recall historical memory.
    5. Generate personalized meeting briefs.
    """

    def __init__(self):
        self.model = os.getenv(
            "GEMINI_MODEL",
            "gemini-3.8-flash"
        )

        self.client = genai.Client()

    def analyze_meeting_notes(
        self,
        meeting_notes: str,
        meeting_id: str | None = None
    ) -> MeetingKnowledge:

        prompt = (
            SYSTEM_PROMPT
            + "\n\n"
            + MEETING_ANALYSIS_PROMPT.format(
                meeting_notes=meeting_notes
            )
        )

        try:
            interaction = self.client.interactions.create(
                model=self.model,
                input=prompt,
                response_format={
                    "type": "text",
                    "mime_type": "application/json",
                    "schema": MeetingKnowledge.model_json_schema(),
                },
            )

            knowledge = MeetingKnowledge.model_validate_json(
                interaction.output_text
            )

            # Store structured knowledge in Hindsight.
            memory_content = f"""
MeetingMind historical meeting memory.

Meeting ID: {meeting_id}

DECISIONS:
{
    chr(10).join(
        "- " + item for item in knowledge.decisions
    )
    if knowledge.decisions
    else "- None explicitly recorded"
}

COMMITMENTS:
{
    chr(10).join(
        "- " + item for item in knowledge.commitments
    )
    if knowledge.commitments
    else "- None explicitly recorded"
}

UNRESOLVED ISSUES:
{
    chr(10).join(
        "- " + item for item in knowledge.unresolved_issues
    )
    if knowledge.unresolved_issues
    else "- None explicitly recorded"
}

PARTICIPANT PREFERENCES AND CONCERNS:
{
    chr(10).join(
        "- " + item
        for item in knowledge.participant_preferences
    )
    if knowledge.participant_preferences
    else "- None explicitly recorded"
}

IMPORTANT DISCUSSION POINTS:
{
    chr(10).join(
        "- " + item
        for item in knowledge.discussion_points
    )
    if knowledge.discussion_points
    else "- None explicitly recorded"
}
""".strip()

            retain_memory(
                content=memory_content,
                document_id=(
                    f"meeting-{meeting_id}"
                    if meeting_id
                    else None
                )
            )

            return knowledge

        except Exception as e:
            raise RuntimeError(
                f"Meeting analysis failed: {e}"
            ) from e

    def prepare_meeting(
        self,
        meeting_title: str,
        current_context: str = ""
    ) -> MeetingBrief:

        query = (
            f"Prepare me for the upcoming meeting: "
            f"{meeting_title}. "
            f"Find relevant previous decisions, unresolved issues, "
            f"commitments, participant preferences, client requests, "
            f"and important discussion points."
        )

        try:
            # Recall historical information from Hindsight.
            memory_response = recall_memory(query)

            memory_text = str(memory_response)

            prompt = (
                SYSTEM_PROMPT
                + "\n\n"
                + MEETING_BRIEF_PROMPT.format(
                    memory=memory_text,
                    current_context=current_context,
                    meeting_title=meeting_title,
                )
            )

            interaction = self.client.interactions.create(
                model=self.model,
                input=prompt,
                response_format={
                    "type": "text",
                    "mime_type": "application/json",
                    "schema": MeetingBrief.model_json_schema(),
                },
            )

            brief = MeetingBrief.model_validate_json(
                interaction.output_text
            )

            return brief

        except Exception as e:
            raise RuntimeError(
                f"Meeting preparation failed: {e}"
            ) from e

    def answer_memory_question(self, question: str) -> str:
        """
        Answer a question using MeetingMind's persistent Hindsight memory.
        """

        try:
            memory_response = recall_memory(question)

            return str(memory_response)

        except Exception as e:
            raise RuntimeError(
                f"Memory question failed: {e}"
            ) from e

if __name__ == "__main__":

    agent = MeetingMindAgent()

    sample_notes = """
    Sarah wants the September product launch completed this month.

    Rahul is concerned about API performance.

    The client requested dark mode.

    Rahul will run performance tests before the next meeting.
    """

    print("\n--- ANALYZING MEETING ---\n")

    knowledge = agent.analyze_meeting_notes(
        sample_notes,
        meeting_id="demo-001"
    )

    print(
        knowledge.model_dump_json(indent=2)
    )

    print("\n--- PREPARING NEXT MEETING ---\n")

    brief = agent.prepare_meeting(
        meeting_title="September Product Launch Meeting"
    )

    print(
        brief.model_dump_json(indent=2)
    )