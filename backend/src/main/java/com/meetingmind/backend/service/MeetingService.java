package com.meetingmind.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.meetingmind.backend.entity.Meeting;
import com.meetingmind.backend.repository.MeetingRepository;

@Service
public class MeetingService {

    private final MeetingRepository meetingRepository;

    public MeetingService(MeetingRepository meetingRepository) {
        this.meetingRepository = meetingRepository;
    }

    public Meeting createMeeting(Meeting meeting) {
        return meetingRepository.save(meeting);
    }

    public List<Meeting> getAllMeetings() {
        return meetingRepository.findAll();
    }

    public Meeting getMeetingById(Long id) {
        return meetingRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Meeting not found with id: " + id));
    }

    public Meeting updateMeeting(Long id, Meeting updatedMeeting) {

        Meeting existingMeeting = getMeetingById(id);

        existingMeeting.setTitle(updatedMeeting.getTitle());
        existingMeeting.setMeetingDate(updatedMeeting.getMeetingDate());
        existingMeeting.setDescription(updatedMeeting.getDescription());
        existingMeeting.setLocation(updatedMeeting.getLocation());

        return meetingRepository.save(existingMeeting);
    }

    public void deleteMeeting(Long id) {
        Meeting existingMeeting = getMeetingById(id);
        meetingRepository.delete(existingMeeting);
    }
}