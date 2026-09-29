import os
import requests
from dotenv import load_dotenv

load_dotenv()

HINDSIGHT_BASE_URL = os.getenv(
    "HINDSIGHT_BASE_URL",
    "https://api.hindsight.vectorize.io"
)

HINDSIGHT_API_KEY = os.getenv("HINDSIGHT_API_KEY")
HINDSIGHT_BANK_ID = os.getenv("HINDSIGHT_BANK_ID", "meetingmind")


def _headers():
    if not HINDSIGHT_API_KEY:
        raise RuntimeError("HINDSIGHT_API_KEY is not configured.")

    return {
        "Authorization": f"Bearer {HINDSIGHT_API_KEY}",
        "Content-Type": "application/json"
    }


def retain_memory(content: str, document_id: str | None = None):
    """
    Store meeting knowledge in Hindsight persistent memory.
    """

    item = {
        "content": content,
        "context": "Professional meeting history for MeetingMind"
    }

    if document_id:
        item["document_id"] = document_id

    response = requests.post(
        f"{HINDSIGHT_BASE_URL}/v1/default/banks/"
        f"{HINDSIGHT_BANK_ID.strip()}/memories",
        headers=_headers(),
        json={
            "items": [item]
        },
        timeout=30
    )

    response.raise_for_status()

    return response.json() if response.content else {}


def recall_memory(query: str):
    """
    Search Hindsight for relevant historical meeting memory.
    """

    response = requests.post(
        f"{HINDSIGHT_BASE_URL}/v1/default/banks/"
        f"{HINDSIGHT_BANK_ID.strip()}/memories/recall",
        headers=_headers(),
        json={
            "query": query
        },
        timeout=30
    )

    response.raise_for_status()

    return response.json()