package com.meetingmind.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.meetingmind.backend.entity.Meeting;
import com.meetingmind.backend.entity.MeetingNote;
import com.meetingmind.backend.repository.MeetingNoteRepository;
import com.meetingmind.backend.repository.MeetingRepository;

@Service
public class MeetingNoteService {

    private final MeetingNoteRepository meetingNoteRepository;
    private final MeetingRepository meetingRepository;

    public MeetingNoteService(
            MeetingNoteRepository meetingNoteRepository,
            MeetingRepository meetingRepository) {

        this.meetingNoteRepository = meetingNoteRepository;
        this.meetingRepository = meetingRepository;
    }

    public MeetingNote createNote(Long meetingId, String content) {

        Meeting meeting = meetingRepository.findById(meetingId)
                .orElseThrow(() ->
                        new RuntimeException("Meeting not found with id: " + meetingId));

        MeetingNote note = new MeetingNote();
        note.setMeeting(meeting);
        note.setContent(content);

        return meetingNoteRepository.save(note);
    }

    public List<MeetingNote> getNotesByMeeting(Long meetingId) {

        if (!meetingRepository.existsById(meetingId)) {
            throw new RuntimeException(
                    "Meeting not found with id: " + meetingId);
        }

        return meetingNoteRepository.findByMeetingId(meetingId);
    }
}