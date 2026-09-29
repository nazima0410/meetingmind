package com.meetingmind.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.meetingmind.backend.entity.Meeting;

public interface MeetingRepository extends JpaRepository<Meeting, Long> {

}