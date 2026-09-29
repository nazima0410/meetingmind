package com.meetingmind.backend.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import com.meetingmind.backend.entity.Meeting;
import com.meetingmind.backend.entity.MeetingNote;
import com.meetingmind.backend.repository.MeetingNoteRepository;
import com.meetingmind.backend.repository.MeetingRepository;

@Service
public class HindsightMemoryService implements MemoryService {

    private final RestClient hindsightRestClient;
    private final MeetingRepository meetingRepository;
    private final MeetingNoteRepository meetingNoteRepository;

    @Value("${hindsight.bank-id}")
    private String bankId;

    public HindsightMemoryService(
            RestClient hindsightRestClient,
            MeetingRepository meetingRepository,
            MeetingNoteRepository meetingNoteRepository) {

        this.hindsightRestClient = hindsightRestClient;
        this.meetingRepository = meetingRepository;
        this.meetingNoteRepository = meetingNoteRepository;
    }

    @Override
    public void retainMeetingMemory(Long meetingId) {

        Meeting meeting = meetingRepository.findById(meetingId)
                .orElseThrow(() ->
                        new RuntimeException("Meeting not found with id: " + meetingId));

        List<MeetingNote> notes =
                meetingNoteRepository.findByMeetingId(meetingId);

        StringBuilder content = new StringBuilder();

        content.append("Meeting: ")
                .append(meeting.getTitle())
                .append("\n");

        content.append("Date: ")
                .append(meeting.getMeetingDate())
                .append("\n");

        content.append("Location: ")
                .append(meeting.getLocation())
                .append("\n");

        content.append("Description: ")
                .append(meeting.getDescription())
                .append("\n\n");

        content.append("Meeting Notes:\n");

        for (MeetingNote note : notes) {
            content.append("- ")
                    .append(note.getContent())
                    .append("\n");
        }

        Map<String, Object> item = Map.of(
                "content", content.toString(),
                "context", "Professional meeting history for MeetingMind",
                "timestamp", LocalDateTime.now().toString(),
                "document_id", "meeting-" + meetingId
        );

        Map<String, Object> requestBody = Map.of(
                "items", List.of(item)
        );

        hindsightRestClient.post()
                .uri("/v1/default/banks/{bankId}/memories", bankId.trim())
                .contentType(MediaType.APPLICATION_JSON)
                .body(requestBody)
                .retrieve()
                .toBodilessEntity();
    }

    @Override
    public String recallMeetingMemory(String query) {

        Map<String, Object> requestBody = Map.of(
                "query", query
        );

        Map<?, ?> response = hindsightRestClient.post()
                .uri("/v1/default/banks/{bankId}/memories/recall", bankId.trim())
                .contentType(MediaType.APPLICATION_JSON)
                .body(requestBody)
                .retrieve()
                .body(Map.class);

        return response != null
                ? response.toString()
                : "";
    }
}