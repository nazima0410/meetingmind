package com.meetingmind.backend.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import com.meetingmind.backend.entity.Meeting;
import com.meetingmind.backend.service.MeetingService;

@RestController
@RequestMapping("/api/meetings")
@CrossOrigin(origins = "*")
public class MeetingController {

    private final MeetingService meetingService;

    public MeetingController(MeetingService meetingService) {
        this.meetingService = meetingService;
    }

    // CREATE
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Meeting createMeeting(@RequestBody Meeting meeting) {
        return meetingService.createMeeting(meeting);
    }

    // GET ALL
    @GetMapping
    public List<Meeting> getAllMeetings() {
        return meetingService.getAllMeetings();
    }

    // GET BY ID
    @GetMapping("/{id}")
    public Meeting getMeetingById(@PathVariable Long id) {
        return meetingService.getMeetingById(id);
    }

    // UPDATE
    @PutMapping("/{id}")
    public Meeting updateMeeting(
            @PathVariable Long id,
            @RequestBody Meeting meeting) {

        return meetingService.updateMeeting(id, meeting);
    }

    // DELETE
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteMeeting(@PathVariable Long id) {
        meetingService.deleteMeeting(id);
    }
}