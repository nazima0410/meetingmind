package com.meetingmind.backend.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.meetingmind.backend.dto.MeetingPreparationResponse;

@Service
public class AIServiceImpl implements AIService {

    @Value("${gemini.api.key}")
    private String apiKey;

    @Value("${gemini.api.url}")
    private String apiUrl;

    private final ObjectMapper objectMapper = new ObjectMapper();

    @Override
    public MeetingPreparationResponse generateMeetingPreparation(
            String meetingContext) {

        RestClient client = RestClient.builder()
                .baseUrl(apiUrl)
                .defaultHeader(
                        "x-goog-api-key",
                        apiKey)
                .defaultHeader(
                        "Content-Type",
                        MediaType.APPLICATION_JSON_VALUE)
                .build();

        String prompt = """
                You are MeetingMind, an AI meeting preparation agent.

                Analyze the historical meeting memory and create a
                concise preparation brief for the upcoming meeting.

                IMPORTANT:
                - Use ONLY information supported by the meeting context.
                - Do NOT invent people, decisions, deadlines,
                  commitments, client requests, or issues.
                - If information is unavailable, return an empty list.
                - Keep each item concise and useful.
                - Return ONLY valid JSON.

                Required JSON structure:

                {
                  "meetingTitle": "string",
                  "objective": "string",
                  "previousDecisions": ["string"],
                  "openIssues": ["string"],
                  "commitments": ["string"],
                  "clientRequests": ["string"],
                  "discussionPoints": ["string"]
                }

                Historical meeting context:

                """ + meetingContext;

        Map<String, Object> userMessage = Map.of(
                "role", "user",
                "parts", List.of(
                        Map.of(
                                "text", prompt
                        )
                )
        );

        Map<String, Object> responseSchema = Map.of(
                "type", "OBJECT",

                "properties", Map.of(

                        "meetingTitle",
                        Map.of("type", "STRING"),

                        "objective",
                        Map.of("type", "STRING"),

                        "previousDecisions",
                        Map.of(
                                "type", "ARRAY",
                                "items", Map.of(
                                        "type", "STRING"
                                )
                        ),

                        "openIssues",
                        Map.of(
                                "type", "ARRAY",
                                "items", Map.of(
                                        "type", "STRING"
                                )
                        ),

                        "commitments",
                        Map.of(
                                "type", "ARRAY",
                                "items", Map.of(
                                        "type", "STRING"
                                )
                        ),

                        "clientRequests",
                        Map.of(
                                "type", "ARRAY",
                                "items", Map.of(
                                        "type", "STRING"
                                )
                        ),

                        "discussionPoints",
                        Map.of(
                                "type", "ARRAY",
                                "items", Map.of(
                                        "type", "STRING"
                                )
                        )
                ),

                "required", List.of(
                        "meetingTitle",
                        "objective",
                        "previousDecisions",
                        "openIssues",
                        "commitments",
                        "clientRequests",
                        "discussionPoints"
                )
        );

        Map<String, Object> generationConfig = Map.of(
                "responseMimeType", "application/json",
                "responseSchema", responseSchema
        );

        Map<String, Object> requestBody = Map.of(
                "contents", List.of(userMessage),
                "generationConfig", generationConfig
        );

        Map<?, ?> response = client.post()
                .contentType(MediaType.APPLICATION_JSON)
                .body(requestBody)
                .retrieve()
                .body(Map.class);

        try {

            JsonNode root =
                    objectMapper.valueToTree(response);

            String content =
                    root.path("candidates")
                            .get(0)
                            .path("content")
                            .path("parts")
                            .get(0)
                            .path("text")
                            .asText();

            return objectMapper.readValue(
                    content,
                    MeetingPreparationResponse.class
            );

        } catch (Exception e) {

            throw new RuntimeException(
                    "Failed to parse Gemini meeting preparation response.",
                    e
            );
        }
    }
}