package com.meetingmind.backend.dto;

import java.util.List;

public class MeetingPreparationResponse {

    private String meetingTitle;
    private String objective;

    private List<String> previousDecisions;
    private List<String> openIssues;
    private List<String> commitments;
    private List<String> clientRequests;
    private List<String> discussionPoints;

    public String getMeetingTitle() {
        return meetingTitle;
    }

    public void setMeetingTitle(String meetingTitle) {
        this.meetingTitle = meetingTitle;
    }

    public String getObjective() {
        return objective;
    }

    public void setObjective(String objective) {
        this.objective = objective;
    }

    public List<String> getPreviousDecisions() {
        return previousDecisions;
    }

    public void setPreviousDecisions(List<String> previousDecisions) {
        this.previousDecisions = previousDecisions;
    }

    public List<String> getOpenIssues() {
        return openIssues;
    }

    public void setOpenIssues(List<String> openIssues) {
        this.openIssues = openIssues;
    }

    public List<String> getCommitments() {
        return commitments;
    }

    public void setCommitments(List<String> commitments) {
        this.commitments = commitments;
    }

    public List<String> getClientRequests() {
        return clientRequests;
    }

    public void setClientRequests(List<String> clientRequests) {
        this.clientRequests = clientRequests;
    }

    public List<String> getDiscussionPoints() {
        return discussionPoints;
    }

    public void setDiscussionPoints(List<String> discussionPoints) {
        this.discussionPoints = discussionPoints;
    }
}