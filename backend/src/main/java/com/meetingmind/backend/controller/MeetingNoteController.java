package com.meetingmind.backend.controller;

import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import com.meetingmind.backend.entity.MeetingNote;
import com.meetingmind.backend.service.MeetingNoteService;

@RestController
@RequestMapping("/api/meetings")
@CrossOrigin(origins = "*")
public class MeetingNoteController {

    private final MeetingNoteService meetingNoteService;

    public MeetingNoteController(MeetingNoteService meetingNoteService) {
        this.meetingNoteService = meetingNoteService;
    }

    // CREATE NOTE
    @PostMapping("/{meetingId}/notes")
    @ResponseStatus(HttpStatus.CREATED)
    public MeetingNote createNote(
            @PathVariable Long meetingId,
            @RequestBody Map<String, String> request) {

        String content = request.get("content");
        System.out.println("RECEIVED CONTENT = " + content);

        return meetingNoteService.createNote(meetingId, content);
    }

    // GET NOTES FOR A MEETING
    @GetMapping("/{meetingId}/notes")
    public List<MeetingNote> getNotesByMeeting(
            @PathVariable Long meetingId) {

        return meetingNoteService.getNotesByMeeting(meetingId);
    }
}