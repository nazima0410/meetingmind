import json
import unittest
from unittest.mock import patch

from hindsight.client import HindsightClient, HindsightError
from hindsight.memory_schema import build_meeting_memory, build_recall_query
from hindsight.recall import recall_for_preparation
from hindsight.retain import retain_meeting


class FakeResponse:
    def __init__(self, payload):
        self.payload = payload

    def __enter__(self):
        return self

    def __exit__(self, exc_type, exc, tb):
        return False

    def read(self):
        return json.dumps(self.payload).encode("utf-8")


class HindsightTests(unittest.TestCase):
    def setUp(self):
        self.client = HindsightClient(
            api_key="hsk_test",
            api_url="https://example.test",
            bank_id="meetingmind",
        )

    def test_memory_format_contains_required_fields(self):
        text = build_meeting_memory({
            "meeting_id": "m1",
            "project": "NovaTech",
            "date": "2026-09-28",
            "participants": ["Sarah", "Rahul"],
            "decisions": ["September launch"],
            "commitments": ["Performance testing by Friday"],
            "unresolved_issues": ["API performance"],
            "participant_preferences": ["Sarah prefers concise updates"],
            "important_points": ["Dark mode requested"],
            "notes": "Launch readiness discussion",
        })
        self.assertIn("Project/Client: NovaTech", text)
        self.assertIn("Decisions: September launch", text)
        self.assertIn("Commitments: Performance testing by Friday", text)
        self.assertIn("Unresolved issues: API performance", text)

    def test_recall_query_is_project_and_participant_specific(self):
        query = build_recall_query(
            project="NovaTech",
            participants=["Sarah", "Rahul"],
            current_context="Prepare for launch readiness.",
        )
        self.assertIn("NovaTech", query)
        self.assertIn("Sarah, Rahul", query)
        self.assertIn("launch readiness", query)
        self.assertIn("previous decisions", query)

    @patch("hindsight.client.urlopen")
    def test_retain_uses_hindsight_endpoint_and_payload(self, mock_urlopen):
        mock_urlopen.return_value = FakeResponse({"success": True})
        response = self.client.retain(
            "Meeting ID: m1\nProject/Client: NovaTech",
            context="meeting context",
            document_id="meetingmind:m1",
        )
        self.assertTrue(response["success"])
        request = mock_urlopen.call_args.args[0]
        self.assertTrue(request.full_url.endswith(
            "/v1/default/banks/meetingmind/memories"
        ))
        payload = json.loads(request.data.decode("utf-8"))
        self.assertEqual(payload["items"][0]["document_id"], "meetingmind:m1")

    @patch("hindsight.client.urlopen")
    def test_recall_uses_hindsight_endpoint(self, mock_urlopen):
        mock_urlopen.return_value = FakeResponse({
            "results": [{"text": "Sarah wants a September launch."}]
        })
        response = self.client.recall("Prepare me for NovaTech")
        self.assertEqual(response["results"][0]["text"], "Sarah wants a September launch.")
        request = mock_urlopen.call_args.args[0]
        self.assertTrue(request.full_url.endswith(
            "/v1/default/banks/meetingmind/memories/recall"
        ))
        payload = json.loads(request.data.decode("utf-8"))
        self.assertEqual(payload["query"], "Prepare me for NovaTech")

    @patch("hindsight.client.urlopen")
    def test_recall_texts_extracts_memory_text(self, mock_urlopen):
        mock_urlopen.return_value = FakeResponse({
            "results": [
                {"text": "Sarah wants a September launch."},
                {"content": "Rahul is concerned about API performance."},
            ]
        })
        self.assertEqual(
            self.client.recall_texts("NovaTech"),
            [
                "Sarah wants a September launch.",
                "Rahul is concerned about API performance.",
            ],
        )

    def test_missing_api_key_is_rejected(self):
        client = HindsightClient(api_key="")
        with self.assertRaises(HindsightError):
            client.recall("anything")

    def test_empty_content_is_rejected(self):
        with self.assertRaises(ValueError):
            self.client.retain("")

    def test_empty_query_is_rejected(self):
        with self.assertRaises(ValueError):
            self.client.recall(" ")

    def test_invalid_memory_type_is_rejected(self):
        with self.assertRaises(ValueError):
            self.client.recall("query", types=["invalid"])

    @patch("hindsight.client.urlopen")
    def test_http_failure_is_wrapped(self, mock_urlopen):
        from urllib.error import HTTPError
        from io import BytesIO

        mock_urlopen.side_effect = HTTPError(
            "https://example.test", 500, "Server Error", {}, BytesIO(b"failure")
        )
        with self.assertRaises(HindsightError):
            self.client.recall("query")

    @patch("hindsight.client.urlopen")
    def test_no_memory_response_is_empty_not_fabricated(self, mock_urlopen):
        mock_urlopen.return_value = FakeResponse({"results": []})
        self.assertEqual(self.client.recall_texts("unknown project"), [])

    def test_retain_meeting_requires_id(self):
        with self.assertRaises(ValueError):
            retain_meeting({"project": "NovaTech"}, client=self.client)

    @patch("hindsight.recall.HindsightClient")
    def test_preparation_recall_uses_client(self, mock_client_cls):
        mock_client_cls.return_value.recall.return_value = {
            "results": [{"text": "September launch; dark mode."}]
        }
        result = recall_for_preparation(
            project="NovaTech",
            participants=["Sarah", "Rahul"],
        )
        self.assertEqual(result["results"][0]["text"], "September launch; dark mode.")
        mock_client_cls.return_value.recall.assert_called_once()


if __name__ == "__main__":
    unittest.main()
