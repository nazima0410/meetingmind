package com.meetingmind.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.meetingmind.backend.service.MeetingPreparationService;

@RestController
@RequestMapping("/api/meetings")
@CrossOrigin(origins = "*")
public class MeetingPreparationController {

    private final MeetingPreparationService meetingPreparationService;

    public MeetingPreparationController(
            MeetingPreparationService meetingPreparationService) {

        this.meetingPreparationService = meetingPreparationService;
    }

    @PostMapping("/{meetingId}/prepare")
    public ResponseEntity<String> prepareMeeting(
            @PathVariable Long meetingId) {

        String preparation =
                meetingPreparationService.prepareMeeting(meetingId);

        return ResponseEntity.ok(preparation);
    }
}