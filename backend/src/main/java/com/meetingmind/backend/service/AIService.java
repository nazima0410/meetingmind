package com.meetingmind.backend.service;

import com.meetingmind.backend.dto.MeetingPreparationResponse;

public interface AIService {

    MeetingPreparationResponse generateMeetingPreparation(
            String meetingContext);
}