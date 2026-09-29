package com.meetingmind.backend.service;

import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.meetingmind.backend.dto.MeetingPreparationResponse;

@Service
public class MeetingPreparationServiceImpl
        implements MeetingPreparationService {

    private final MemoryService memoryService;
    private final AIService aiService;
    private final ObjectMapper objectMapper;

    public MeetingPreparationServiceImpl(
            MemoryService memoryService,
            AIService aiService) {

        this.memoryService = memoryService;
        this.aiService = aiService;
        this.objectMapper = new ObjectMapper();
    }

    @Override
    public String prepareMeeting(Long meetingId) {

        // 1. Recall historical meeting memory from Hindsight
        String query =
                "Prepare me for meeting " + meetingId
                + ". Recall important previous decisions, "
                + "open issues, concerns, commitments, client requests, "
                + "and discussion points related to this meeting.";

        String meetingContext =
                memoryService.recallMeetingMemory(query);

        // 2. Send recalled memory to Gemini
        MeetingPreparationResponse preparation =
                aiService.generateMeetingPreparation(meetingContext);

        // 3. Return Gemini's structured response as JSON
        try {

            return objectMapper.writeValueAsString(preparation);

        } catch (Exception e) {

            throw new RuntimeException(
                    "Failed to create meeting preparation response.",
                    e
            );
        }
    }
}