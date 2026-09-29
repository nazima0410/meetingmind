package com.meetingmind.backend.service;

public interface MemoryService {

    void retainMeetingMemory(Long meetingId);

    String recallMeetingMemory(String query);
}