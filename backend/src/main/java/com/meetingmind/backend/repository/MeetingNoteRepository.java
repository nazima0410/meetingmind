
package com.meetingmind.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.meetingmind.backend.entity.MeetingNote;

public interface MeetingNoteRepository extends JpaRepository<MeetingNote, Long> {

    List<MeetingNote> findByMeetingId(Long meetingId);
}