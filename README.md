
# MeetingMind 

### AI Meeting Intelligence Agent with Persistent Memory

MeetingMind is an AI-powered meeting intelligence agent that remembers what happened in previous meetings and uses that context to help prepare users for future meetings.

Instead of treating every meeting as a completely new conversation, MeetingMind stores important meeting knowledge such as decisions, commitments, unresolved issues, participant concerns, and client requests using Hindsight persistent memory.


## Problem

In recurring professional meetings, important information is often scattered across notes, documents, and previous conversations.

Traditional AI meeting assistants can summarize a single meeting, but they often lack persistent memory across meetings.

This can lead to:

- Repeating previously discussed topics
- Forgetting commitments
- Missing unresolved issues
- Losing track of stakeholder concerns
- Spending time reviewing old meeting notes

MeetingMind addresses this by giving an AI agent persistent memory of previous meetings.



##  Solution

MeetingMind follows a simple workflow:


Meeting Notes
      ↓
AI Analysis
      ↓
Extract Decisions, Commitments,
Issues & Participant Context
      ↓
Hindsight Persistent Memory
      ↓
Recall Relevant History
      ↓
Gemini AI
      ↓
Personalized Meeting Brief


The key idea is:

> AI should not only remember what was said. It should remember what happened and use that information when it matters later.

---

##  Key Features

###  Meeting Memory

MeetingMind extracts useful information from meeting notes, including:

* Decisions
* Commitments
* Unresolved issues
* Participant preferences and concerns
* Important discussion points
* Client requests

###  Persistent Memory with Hindsight

Meeting information is stored in Hindsight, allowing the system to recall relevant information from previous meetings.

###  Contextual Recall

Users can ask questions such as:

> "What did Rahul commit to regarding API performance?"

or:

> "Why should I discuss API performance with Rahul?"

MeetingMind retrieves relevant historical context instead of generating a generic response.

###  Meeting Preparation

The recalled information can be used to create a personalized meeting brief containing:

* Meeting objective
* Previous decisions
* Open issues
* Commitments
* Participant concerns
* Client requests
* Recommended discussion points



##  Architecture


                    ┌─────────────────┐
                    │   Meeting User  │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │  MeetingMind AI │
                    │      Agent      │
                    └────────┬────────┘
                             │
                  ┌──────────┴──────────┐
                  ▼                     ▼
          ┌──────────────┐       ┌──────────────┐
          │    Gemini    │       │   Hindsight  │
          │     AI       │       │    Memory    │
          └──────────────┘       └──────┬───────┘
                                        │
                                        ▼
                              Persistent Meeting
                                   Knowledge
                                        │
                                        ▼
                              ┌─────────────────┐
                              │ Meeting Brief   │
                              └─────────────────┘




##  Tech Stack

| Technology   | Purpose                                 |
| ------------ | --------------------------------------- |
| Python       | AI agent and meeting analysis           |
| Gemini       | AI reasoning and structured output      |
| Hindsight    | Persistent memory and contextual recall |
| Java         | Backend development                     |
| Spring Boot  | REST API backend                        |
| MySQL        | Meeting data storage                    |
| React        | Frontend interface                      |
| Vite         | Frontend development                    |
| Postman      | API testing                             |
| Git & GitHub | Version control                         |



##  Project Structure


meetingmind/
│
├── agent/                  # Python AI agent
│   ├── agent.py
│   ├── prompts.py
│   ├── schemas.py
│   ├── tools.py
│   └── requirements.txt
│
├── backend/                # Spring Boot backend
│
├── frontend/               # React frontend
│
├── hindsight/              # Hindsight-related resources
│
├── data/                   # Demo/sample data
│
├── tests/                  # Testing resources
│
├── docs/                   # Documentation
│
├── screenshots/            # Project screenshots
│
├── .env.example            # Environment variable template
├── .gitignore
├── DEVELOPMENT_CONTRACT.md
└── README.md




##  How MeetingMind Works

### 1. Meeting Input

Meeting notes are provided to the system.

Example:
Sarah wants the September product launch completed by September 30.
Rahul is concerned about API performance and wants to make sure the system can handle the expected traffic.
The client requested dark mode for the application.
Rahul agreed to run API performance tests before the next meeting.
The team agreed to review the performance test results and discuss the dark mode requirements in the next meeting.


### 2. AI Analysis

Gemini analyzes the meeting and extracts structured knowledge such as:


Commitment:
Rahul will run API performance tests.

Concern:
Rahul is concerned about API performance.

Client Request:
The client requested dark mode.

Priority:
Sarah wants the product launch completed by September 30.


### 3. Memory

The extracted information is stored in Hindsight as persistent memory.

### 4. Recall

Later, the user can ask:


What did Rahul commit to regarding API performance?


MeetingMind retrieves the relevant historical information.

### 5. Meeting Preparation

The recalled information can then be used to prepare a focused meeting brief.



##  Why Persistent Memory Matters

Without persistent memory, an AI assistant may provide generic suggestions:


You should discuss project progress
and any technical issues.


With MeetingMind's persistent memory:


Follow up with Rahul on the API performance
tests he committed to completing before this meeting.

Also discuss the client's dark mode requirement
and progress toward the September 30 launch deadline.


This makes the assistant more context-aware and useful for recurring meetings.



##  Backend API Endpoints

### Get Meetings


GET /api/meetings


### Add Meeting Note


POST /api/meetings/{meetingId}/notes


### Store Meeting Memory


POST /api/memory/meetings/{meetingId}/retain


### Recall Memory


POST /api/memory/recall?query=...


### Prepare Meeting


POST /api/meetings/{meetingId}/prepare




##  Example Memory Queries


What did Rahul commit to regarding API performance?



Why should I discuss API performance with Rahul?


These questions demonstrate how MeetingMind can retrieve context from a previous meeting rather than treating the conversation as new.



##  Environment Variables

Create a `.env` file for local development.


GEMINI_API_KEY=your_gemini_api_key
HINDSIGHT_API_KEY=your_hindsight_api_key
HINDSIGHT_BANK_ID=meetingmind
GEMINI_MODEL=your_gemini_model


**Never commit `.env` or API keys to GitHub.**

Use `.env.example` as a template.



##  Running the AI Agent

Navigate to the agent directory:


cd agent


Create a virtual environment:


python -m venv .venv


Activate it on Windows PowerShell:


.venv\Scripts\Activate.ps1


Install dependencies:


pip install -r requirements.txt


Run the agent:


python agent.py




##  Running the Backend

Open the `backend` project in Eclipse or another Java IDE.

Configure the required environment variables:


GEMINI_API_KEY
HINDSIGHT_API_KEY


Make sure MySQL is running and the required database is configured.

Then start the Spring Boot application.

The backend runs on:


http://localhost:8080




## Current Scope

MeetingMind focuses on one core workflow:

**Remember previous meetings → recall relevant context → prepare for future meetings.**

The project intentionally focuses on persistent meeting memory rather than attempting to become a complete CRM, calendar, transcription, or video-conferencing platform.



##  Future Improvements

Possible future improvements include:

* Calendar integration
* Automatic meeting transcription
* Zoom/Google Meet integration
* Speaker identification
* Automatic action-item tracking
* Personalized preparation based on user preferences
* Follow-up reminders
* Long-term participant profiles
* Multi-meeting analytics



##  Team

Built collaboratively by:

* Nazima Masarath
* Ayesha Faeza
* Chinmayee
* Bindusree



##  Resources

* [Hindsight Documentation](https://hindsight.vectorize.io/)
* [Hindsight GitHub](https://github.com/vectorize-io/hindsight)
* [MeetingMind GitHub](https://github.com/nazima0410/meetingmind)



##  License

This project is developed for educational and demonstration purposes.

