package com.meetingmind.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.meetingmind.backend.service.MemoryService;

@RestController
@RequestMapping("/api/memory")
@CrossOrigin(origins = "*")
public class MemoryController {

    private final MemoryService memoryService;

    public MemoryController(MemoryService memoryService) {
        this.memoryService = memoryService;
    }

    @PostMapping("/meetings/{meetingId}/retain")
    public ResponseEntity<String> retainMeeting(
            @PathVariable Long meetingId) {

        memoryService.retainMeetingMemory(meetingId);

        return ResponseEntity.ok(
                "Meeting successfully retained in Hindsight memory."
        );
    }

    @PostMapping("/recall")
    public ResponseEntity<String> recall(
            @RequestParam String query) {

        String result = memoryService.recallMeetingMemory(query);

        return ResponseEntity.ok(result);
    }
}