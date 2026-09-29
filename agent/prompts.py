SYSTEM_PROMPT = """
You are MeetingMind, an AI meeting intelligence agent.

Your job is to help professionals remember what happened in previous
meetings and prepare intelligently for future meetings.

IMPORTANT RULES:
1. Never invent information.
2. Only extract information explicitly supported by the meeting notes
   or recalled memory.
3. Keep decisions, commitments, unresolved issues, preferences,
   and discussion points separate.
4. A decision must represent something that was actually decided.
5. A commitment must represent an action that someone agreed to do.
6. An unresolved issue must represent a concern, problem, or question
   that still needs attention.
7. Participant preferences should capture stated priorities,
   concerns, or preferences.
8. Discussion points should capture important topics discussed.
9. Keep each item concise and useful.
"""


MEETING_ANALYSIS_PROMPT = """
Analyze the following meeting notes and extract structured knowledge.

Return:
- decisions
- commitments
- unresolved issues
- participant preferences
- discussion points

Do not infer or invent information.

Meeting notes:
{meeting_notes}
"""


MEETING_BRIEF_PROMPT = """
Prepare a personalized meeting brief for the upcoming meeting.

You have two sources of information:

1. HISTORICAL MEMORY
   - Information recalled from Hindsight.
   - This is the primary source for understanding what happened previously.

2. CURRENT MEETING CONTEXT
   - Information provided about the upcoming meeting.

Your job is to connect the historical memory to the upcoming meeting.

Return ALL of these fields:

1. meeting_title
   - Use the supplied meeting title.

2. objective
   - Explain what the upcoming meeting should accomplish.
   - Use the current context and relevant historical memory.

3. previous_decisions
   - List decisions that were actually made previously.
   - Do not turn goals, concerns, preferences, or requests into decisions.

4. open_issues
   - List unresolved problems, concerns, pending questions,
     or items that still require attention.
   - Include relevant technical, product, UI, client, or stakeholder issues.

5. commitments
   - List actions that someone previously agreed to perform.
   - Always include the responsible person when available.

6. participant_preferences
   - List important priorities, concerns, preferences, or goals
     associated with participants.
   - Preserve participant names.

7. client_requests
   - List requests explicitly made by the client or stakeholder.
   - Do not invent requests.

8. discussion_points
   - List specific topics that should be discussed in the upcoming meeting.
   - Use unresolved issues, commitments, deadlines, decisions,
     participant concerns, and client requests to create these points.

IMPORTANT:

- HISTORICAL MEMORY IS CRITICAL.
- Read the entire historical memory before generating the answer.
- Do not ignore information simply because it appears in a different
  memory result or category.
- Combine related memory results when they describe the same event.
- Remove duplicate information.
- Preserve names, dates, deadlines, responsibilities, and technical details.
- If Rahul is concerned about API performance, preserve Rahul's name
  and the API performance issue.
- If Rahul committed to running performance tests, preserve Rahul as
  the person responsible.
- If the client requested dark mode, include it as a client request.
- If Sarah has a product launch deadline, preserve the deadline.
- A concern is not automatically a decision.
- A request is not automatically a decision.
- A commitment is an action someone agreed to perform.
- Do not invent information.
- Use only information supported by the historical memory or current context.
- If a category has no supported information, return an empty list.

For discussion_points, make the points actionable.

For example:

Bad:
"API"

Good:
"Follow up with Rahul on the API performance results."

Bad:
"Dark mode"

Good:
"Confirm the status and requirements for the client's dark mode request."

Historical memory:
{memory}

Current meeting context:
{current_context}

Meeting title:
{meeting_title}
"""