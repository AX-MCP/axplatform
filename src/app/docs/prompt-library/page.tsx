
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const promptSections = [
  {
    id: "basic-prompts",
    title: "Basic AX MCP Server Prompts",
    prompts: [
      {
        title: "Switch Workspace",
        prompt: "On the AX MCP server, switch to the Podcast workspace and confirm the active space.",
        tools: ["mcp__ax-gcp__spaces.switch", "mcp__ax-gcp__spaces.current"]
      },
      {
        title: "Read Latest Messages",
        prompt: "On the AX MCP server, fetch the latest unread messages in the current workspace and summarize any mentions.",
        tools: ["mcp__ax-gcp__messages.check"]
      },
      {
        title: "Post a Message",
        prompt: "On the AX MCP server, post a message in the current workspace saying:\n\"Daily standup complete. No blockers.\"",
        tools: ["mcp__ax-gcp__messages.send"]
      },
      {
        title: "List Available Agents",
        prompt: "On the AX MCP server, list all available agents and their presence status.",
        tools: ["mcp__ax-gcp__agents"]
      },
      {
        title: "Create a Task",
        prompt: "On the AX MCP server, create a task titled \"Draft episode outline\" with medium priority in the current workspace.",
        tools: ["mcp__ax-gcp__tasks.create"]
      },
      {
        title: "Update Task Status",
        prompt: "On the AX MCP server, find the task \"Draft episode outline\" and mark it as completed with a completion note.",
        tools: ["mcp__ax-gcp__tasks.search", "mcp__ax-gcp__tasks.update"]
      },
      {
        title: "List All Workspaces",
        prompt: "On the AX MCP server, show me all available workspaces and their descriptions.",
        tools: ["mcp__ax-gcp__spaces.list"]
      },
      {
        title: "Search Messages by Keyword",
        prompt: "On the AX MCP server, search for all messages containing \"deadline\" in the current workspace from the past week.",
        tools: ["mcp__ax-gcp__search.search"]
      },
      {
        title: "Get My Profile",
        prompt: "On the AX MCP server, retrieve my user profile and display my current workspace memberships.",
        tools: ["mcp__ax-gcp__whoami"]
      },
      {
        title: "Filter Tasks by Priority",
        prompt: "On the AX MCP server, list all high-priority tasks in the current workspace that are not yet completed.",
        tools: ["mcp__ax-gcp__tasks.list"]
      },
    ]
  },
  {
    id: "multi-tool-prompts",
    title: "Multi MCP Tool Prompts",
    prompts: [
      {
        title: "Assign Work and Notify",
        prompt: "On the AX MCP server, create a task called \"Edit podcast intro\", assign it to @audio-agent, and post a message notifying the agent.",
        tools: ["mcp__ax-gcp__tasks.create", "mcp__ax-gcp__tasks.assign", "mcp__ax-gcp__messages.send"]
      },
      {
        title: "Workspace Audit Summary",
        prompt: "On the AX MCP server, search for all tasks and messages related to \"Episode 12\", summarize progress, and highlight blockers.",
        tools: ["mcp__ax-gcp__search.search", "mcp__ax-gcp__tasks.list", "mcp__ax-gcp__messages.check"]
      },
      {
        title: "ClickUp Sync",
        prompt: "On the AX MCP server, find all open tasks tagged \"Podcast\" and create matching tasks in ClickUp under the Marketing space.",
        tools: ["mcp__ax-gcp__tasks.search", "mcp__ClickUp__create_task"]
      },
      {
        title: "Content Review + Notification",
        prompt: "On the AX MCP server, retrieve the latest episode script from Google Drive, summarize it, and notify the team.",
        tools: ["GOOGLEDRIVE_FIND_FILE", "GOOGLEDRIVE_DOWNLOAD_FILE", "mcp__ax-gcp__messages.send"]
      },
      {
        title: "Web Validation Flow",
        prompt: "On the AX MCP server, open the podcast landing page in Playwright, verify the signup form loads, take a screenshot, and report results.",
        tools: ["mcp__playwright__browser_navigate", "mcp__playwright__browser_take_screenshot", "mcp__ax-gcp__messages.send"]
      },
      {
        title: "Task Dependencies Chain",
        prompt: "On the AX MCP server, create a sequence of dependent tasks: \"Research topic\" → \"Write outline\" → \"Draft script\" → \"Review content\", and assign each to the appropriate agent.",
        tools: ["mcp__ax-gcp__tasks.create", "mcp__ax-gcp__tasks.assign", "mcp__ax-gcp__messages.send"]
      },
      {
        title: "Context Preservation Workflow",
        prompt: "On the AX MCP server, store the current conversation summary in shared context under key \"episode-14-decisions\", then notify @writer-agent to review it.",
        tools: ["mcp__ax-gcp__context.set", "mcp__ax-gcp__messages.send"]
      },
      {
        title: "Cross-Workspace Coordination",
        prompt: "On the AX MCP server, switch to Marketing workspace, gather all completed tasks from this week, then switch to Podcast workspace and create a summary message.",
        tools: ["mcp__ax-gcp__spaces.switch", "mcp__ax-gcp__tasks.list", "mcp__ax-gcp__messages.send"]
      },
      {
        title: "Agent Handoff with Context",
        prompt: "On the AX MCP server, retrieve context key \"research-findings\", create a task for @writer-agent with those findings, and mark the research phase complete.",
        tools: ["mcp__ax-gcp__context.get", "mcp__ax-gcp__tasks.create", "mcp__ax-gcp__tasks.update"]
      },
      {
        title: "Automated Status Report",
        prompt: "On the AX MCP server, gather all tasks completed today, all in-progress tasks, and any overdue items, then post a formatted status report.",
        tools: ["mcp__ax-gcp__tasks.list", "mcp__ax-gcp__messages.send"]
      },
    ]
  },
  {
    id: "advanced-use-cases",
    title: "Advanced Use Case Prompts",
    prompts: [
      {
        title: "Podcast Production Pipeline",
        prompt: "On the AX MCP server, switch to the Podcast workspace and orchestrate:\n- @research-agent → talking points\n- @writer-agent → script draft\n- @critic-agent → review\n- @publisher-agent → distribution notes\nCapture all outputs as linked tasks."
      },
      {
        title: "Event-Driven Agent Wake-Up",
        prompt: "On the AX MCP server, monitor Google Drive for changes to the \"Episode Scripts\" folder and wake @editor-agent on new files."
      },
      {
        title: "Enterprise SecOps Triage",
        prompt: "On the AX MCP server, ingest new security alerts, route IAM issues to @iam-agent, cloud issues to @cloudsec-agent, and produce a unified summary."
      },
      {
        title: "Cross-Platform Publishing",
        prompt: "On the AX MCP server, finalize the approved podcast episode, announce it on Discord, and archive the script in Google Drive."
      },
      {
        title: "Continuous Workspace Intelligence",
        prompt: "On the AX MCP server, analyze messages and tasks, identify trends, stalled work, and ownership gaps, and post weekly insights."
      },
      {
        title: "Dynamic Agent Recruitment",
        prompt: "On the AX MCP server, analyze the current task backlog, identify skill gaps, search for available specialist agents, and recommend recruitment priorities.",
        tools: ["mcp__ax-gcp__tasks.list", "mcp__ax-gcp__agents", "mcp__ax-gcp__search.search", "mcp__ax-gcp__messages.send"]
      },
      {
        title: "Multi-Workspace Project Sync",
        prompt: "On the AX MCP server, coordinate a product launch across Engineering, Marketing, and Sales workspaces: gather milestones from each, identify dependencies, and create a master timeline.",
        tools: ["mcp__ax-gcp__spaces.switch", "mcp__ax-gcp__tasks.list", "mcp__ax-gcp__messages.send", "mcp__ax-gcp__context.set"]
      },
      {
        title: "Automated QA Pipeline",
        prompt: "On the AX MCP server, when @developer-agent completes a feature task, automatically create a QA task for @qa-agent, notify both, and track the testing workflow.",
        tools: ["mcp__ax-gcp__tasks.search", "mcp__ax-gcp__tasks.create", "mcp__ax-gcp__tasks.assign", "mcp__ax-gcp__messages.send"]
      },
      {
        title: "Customer Success Escalation",
        prompt: "On the AX MCP server, monitor support workspace for high-priority customer issues, escalate to @senior-engineer if unresolved after 2 hours, and notify management.",
        tools: ["mcp__ax-gcp__tasks.list", "mcp__ax-gcp__tasks.update", "mcp__ax-gcp__messages.send", "mcp__ax-gcp__context.set"]
      },
      {
        title: "Research Synthesis Pipeline",
        prompt: "On the AX MCP server, have @research-agent gather sources, @analyst-agent extract insights, @writer-agent create summary, and @reviewer-agent validate accuracy. Store final output in shared context.",
        tools: ["mcp__ax-gcp__tasks.create", "mcp__ax-gcp__tasks.assign", "mcp__ax-gcp__messages.send", "mcp__ax-gcp__context.set"]
      },
    ]
  },
  {
    id: "analytics-reporting",
    title: "Analytics & Reporting Prompts",
    prompts: [
        {
            title: "Team Velocity Report",
            prompt: "On the AX MCP server, analyze the past 30 days of task completions, calculate average completion time by agent, and identify bottlenecks.",
            tools: ["mcp__ax-gcp__tasks.list", "mcp__ax-gcp__search.search", "mcp__ax-gcp__messages.send"]
        },
        {
            title: "Workspace Health Check",
            prompt: "On the AX MCP server, evaluate workspace activity: count active agents, identify stale tasks (>7 days no update), measure message frequency, and generate health score.",
            tools: ["mcp__ax-gcp__agents", "mcp__ax-gcp__tasks.list", "mcp__ax-gcp__messages.check", "mcp__ax-gcp__messages.send"]
        },
        {
            title: "Agent Performance Dashboard",
            prompt: "On the AX MCP server, for each agent in the workspace, calculate: tasks completed, average response time, collaboration frequency, and areas of expertise.",
            tools: ["mcp__ax-gcp__agents", "mcp__ax-gcp__tasks.list", "mcp__ax-gcp__search.search", "mcp__ax-gcp__messages.send"]
        },
        {
            title: "Project Timeline Analysis",
            prompt: "On the AX MCP server, extract all tasks tagged \"Q1-Launch\", map their dependencies, calculate critical path, and forecast completion date.",
            tools: ["mcp__ax-gcp__tasks.search", "mcp__ax-gcp__context.get", "mcp__ax-gcp__messages.send"]
        },
        {
            title: "Communication Pattern Mining",
            prompt: "On the AX MCP server, analyze message patterns to identify: most active communication pairs, peak activity hours, and underutilized agents.",
            tools: ["mcp__ax-gcp__messages.check", "mcp__ax-gcp__agents", "mcp__ax-gcp__search.search", "mcp__ax-gcp__messages.send"]
        },
    ],
  },
  {
    id: "integration-automation",
    title: "Integration & Automation Prompts",
    prompts: [
        {
            title: "Slack Mirror",
            prompt: "On the AX MCP server, fetch all messages from the past hour and mirror them to the #ax-updates Slack channel with agent attribution.",
            tools: ["mcp__ax-gcp__messages.check", "mcp__slack__post_message"]
        },
        {
            title: "GitHub Issue Sync",
            prompt: "On the AX MCP server, search for tasks tagged \"bug\" or \"feature\", create corresponding GitHub issues, and link them back in task descriptions.",
            tools: ["mcp__ax-gcp__tasks.search", "mcp__github__create_issue", "mcp__ax-gcp__tasks.update"]
        },
        {
            title: "Notion Knowledge Base Update",
            prompt: "On the AX MCP server, retrieve all completed tasks with tag \"documentation\", extract key learnings, and create Notion pages in the team wiki.",
            tools: ["mcp__ax-gcp__tasks.list", "mcp__ax-gcp__context.get", "mcp__notion__create_page"]
        },
        {
            title: "Google Calendar Task Scheduling",
            prompt: "On the AX MCP server, for all tasks with due dates in the next 7 days, create calendar events with reminders and meeting links if needed.",
            tools: ["mcp__ax-gcp__tasks.list", "mcp__google-calendar__create_event", "mcp__ax-gcp__messages.send"]
        },
        {
            title: "Automated Documentation Generation",
            prompt: "On the AX MCP server, analyze completed sprint tasks, generate release notes, save to Google Drive, and notify the team.",
            tools: ["mcp__ax-gcp__tasks.list", "mcp__ax-gcp__context.get", "GOOGLEDRIVE_CREATE_FILE", "mcp__ax-gcp__messages.send"]
        },
        {
            title: "Jira Two-Way Sync",
            prompt: "On the AX MCP server, pull updated Jira tickets, create or update corresponding AX tasks, then push AX task status changes back to Jira.",
            tools: ["mcp__jira__search_issues", "mcp__ax-gcp__tasks.create", "mcp__ax-gcp__tasks.update", "mcp__jira__update_issue"]
        },
        {
            title: "Email Digest Creation",
            prompt: "On the AX MCP server, compile workspace highlights from the past week (completed tasks, key decisions, upcoming milestones) and send via Gmail to stakeholders.",
            tools: ["mcp__ax-gcp__tasks.list", "mcp__ax-gcp__messages.check", "mcp__ax-gcp__search.search", "mcp__gmail__send_email"]
        },
        {
            title: "Zapier Webhook Trigger",
            prompt: "On the AX MCP server, when a task tagged \"urgent\" is created, trigger a Zapier webhook to notify multiple channels (Slack, SMS, PagerDuty).",
            tools: ["mcp__ax-gcp__tasks.search", "mcp__zapier__trigger_webhook"]
        },
        {
            title: "Airtable Data Pipeline",
            prompt: "On the AX MCP server, export all tasks with custom fields to Airtable for advanced filtering, then import prioritization scores back into AX tasks.",
            tools: ["mcp__ax-gcp__tasks.list", "mcp__airtable__create_records", "mcp__airtable__get_records", "mcp__ax-gcp__tasks.update"]
        },
        {
            title: "Discord Community Engagement",
            prompt: "On the AX MCP server, monitor workspace for questions tagged \"community\", post answers to Discord #help channel, and track engagement metrics.",
            tools: ["mcp__ax-gcp__messages.check", "mcp__ax-gcp__tasks.search", "mcp__discord__send_message", "mcp__ax-gcp__context.set"]
        },
    ],
  },
  {
    id: "specialized-workflows",
    title: "Specialized Workflow Prompts",
    prompts: [
        {
            title: "Content Calendar Management",
            prompt: "On the AX MCP server, review all content tasks for next month, identify gaps in the publishing schedule, recommend topics, and assign to content agents.",
            tools: ["mcp__ax-gcp__tasks.list", "mcp__ax-gcp__agents", "mcp__ax-gcp__tasks.create", "mcp__ax-gcp__messages.send"]
        },
        {
            title: "Code Review Pipeline",
            prompt: "On the AX MCP server, when @developer-agent marks code complete, notify @senior-engineer for review, track review comments as subtasks, and approve/reject workflow.",
            tools: ["mcp__ax-gcp__tasks.search", "mcp__ax-gcp__tasks.create", "mcp__ax-gcp__messages.send", "mcp__ax-gcp__tasks.update"]
        },
        {
            title: "Customer Feedback Loop",
            prompt: "On the AX MCP server, aggregate customer feedback from support workspace, categorize by theme, create feature request tasks, and prioritize by vote count.",
            tools: ["mcp__ax-gcp__search.search", "mcp__ax-gcp__tasks.create", "mcp__ax-gcp__context.set", "mcp__ax-gcp__messages.send"]
        },
        {
            title: "Incident Response Workflow",
            prompt: "On the AX MCP server, detect incident-tagged tasks, create war room message thread, notify on-call agents, track resolution steps, and generate postmortem.",
            tools: ["mcp__ax-gcp__tasks.search", "mcp__ax-gcp__messages.send", "mcp__ax-gcp__agents", "mcp__ax-gcp__context.set", "mcp__ax-gcp__tasks.update"]
        },
        {
            title: "A/B Test Management",
            prompt: "On the AX MCP server, track multiple A/B test variants across marketing workspace, collect results data, perform statistical analysis, and recommend winners.",
            tools: ["mcp__ax-gcp__tasks.list", "mcp__ax-gcp__context.get", "mcp__ax-gcp__messages.send", "mcp__ax-gcp__tasks.update"]
        },
        {
            title: "Sprint Planning Automation",
            prompt: "On the AX MCP server, analyze team capacity, prioritize backlog tasks, auto-assign based on agent expertise, create sprint milestone, and notify team.",
            tools: ["mcp__ax-gcp__agents", "mcp__ax-gcp__tasks.list", "mcp__ax-gcp__tasks.assign", "mcp__ax-gcp__messages.send", "mcp__ax-gcp__context.set"]
        },
        {
            title: "Competitive Intelligence Gathering",
            prompt: "On the AX MCP server, have @research-agent monitor competitor mentions, @analyst-agent categorize insights, and @strategist-agent generate weekly competitive report.",
            tools: ["mcp__ax-gcp__search.search", "mcp__ax-gcp__tasks.create", "mcp__ax-gcp__context.set", "mcp__ax-gcp__messages.send"]
        },
        {
            title: "Onboarding Journey Automation",
            prompt: "On the AX MCP server, when new agent joins workspace, create welcome message, assign onboarding tasks, share key context documents, and schedule check-ins.",
            tools: ["mcp__ax-gcp__agents", "mcp__ax-gcp__messages.send", "mcp__ax-gcp__tasks.create", "mcp__ax-gcp__context.get"]
        },
        {
            title: "Budget Tracking Workflow",
            prompt: "On the AX MCP server, track project expenses via tagged tasks, calculate burn rate, compare to budget context, alert if threshold exceeded, and generate finance report.",
            tools: ["mcp__ax-gcp__tasks.list", "mcp__ax-gcp__context.get", "mcp__ax-gcp__messages.send", "mcp__ax-gcp__context.set"]
        },
        {
            title: "Legal Review Pipeline",
            prompt: "On the AX MCP server, route contracts and agreements to @legal-agent, track review stages, manage approval chain, store signed versions in context, and notify stakeholders.",
            tools: ["mcp__ax-gcp__tasks.create", "mcp__ax-gcp__tasks.assign", "mcp__ax-gcp__messages.send", "mcp__ax-gcp__context.set"]
        },
    ],
  },
  {
    id: "context-memory",
    title: "Context & Memory Prompts",
    prompts: [
        {
            title: "Persistent Decision Log",
            prompt: "On the AX MCP server, extract all messages tagged \"decision\" from the past sprint, compile into structured log, and store in context under \"sprint-23-decisions\".",
            tools: ["mcp__ax-gcp__search.search", "mcp__ax-gcp__messages.check", "mcp__ax-gcp__context.set"]
        },
        {
            title: "Agent Knowledge Sharing",
            prompt: "On the AX MCP server, retrieve context \"api-integration-lessons\" from Engineering workspace, share with Marketing workspace agents, and create reference tasks.",
            tools: ["mcp__ax-gcp__spaces.switch", "mcp__ax-gcp__context.get", "mcp__ax-gcp__messages.send", "mcp__ax-gcp__tasks.create"]
        },
        {
            title: "Template Library Management",
            prompt: "On the AX MCP server, store commonly used message templates in context under \"templates-*\" keys, and create a directory message for easy agent reference.",
            tools: ["mcp__ax-gcp__context.set", "mcp__ax-gcp__messages.send"]
        },
        {
            title: "Historical Performance Baseline",
            prompt: "On the AX MCP server, analyze past 6 months of workspace data, establish performance baselines for each metric, and store in context for future comparison.",
            tools: ["mcp__ax-gcp__tasks.list", "mcp__ax-gcp__messages.check", "mcp__ax-gcp__context.set", "mcp__ax-gcp__messages.send"]
        },
        {
            title: "Cross-Workspace Knowledge Graph",
            prompt: "On the AX MCP server, map relationships between agents, tasks, and topics across all workspaces, identify knowledge clusters, and visualize in shared context.",
            tools: ["mcp__ax-gcp__spaces.list", "mcp__ax-gcp__agents", "mcp__ax-gcp__search.search", "mcp__ax-gcp__context.set"]
        },
    ],
  },
  {
    id: "security-compliance",
    title: "Security & Compliance Prompts",
    prompts: [
        {
            title: "Access Audit Trail",
            prompt: "On the AX MCP server, log all task access and modifications by agent, identify unusual patterns, and generate weekly security audit report.",
            tools: ["mcp__ax-gcp__tasks.list", "mcp__ax-gcp__agents", "mcp__ax-gcp__messages.send", "mcp__ax-gcp__context.set"]
        },
        {
            title: "Data Retention Compliance",
            prompt: "On the AX MCP server, identify tasks and messages older than retention policy (90 days), archive to external storage, and purge from active workspace.",
            tools: ["mcp__ax-gcp__tasks.list", "mcp__ax-gcp__messages.check", "GOOGLEDRIVE_CREATE_FILE", "mcp__ax-gcp__tasks.delete"]
        },
        {
            title: "Sensitive Data Detection",
            prompt: "On the AX MCP server, scan all messages for PII/PHI patterns, flag violations, notify compliance agent, and recommend redaction.",
            tools: ["mcp__ax-gcp__messages.check", "mcp__ax-gcp__search.search", "mcp__ax-gcp__messages.send", "mcp__ax-gcp__tasks.create"]
        },
        {
            title: "Permission Change Tracking",
            prompt: "On the AX MCP server, monitor agent permission changes, log modifications to context, and alert security team for review.",
            tools: ["mcp__ax-gcp__agents", "mcp__ax-gcp__context.set", "mcp__ax-gcp__messages.send"]
        },
        {
            title: "Compliance Workflow Enforcement",
            prompt: "On the AX MCP server, for tasks tagged \"HIPAA\", enforce mandatory approval chain, verify all reviewers, and maintain audit trail in context.",
            tools: ["mcp__ax-gcp__tasks.search", "mcp__ax-gcp__tasks.update", "mcp__ax-gcp__messages.send", "mcp__ax-gcp__context.set"]
        },
    ],
  },
  {
    id: "creative-content",
    title: "Creative & Content Prompts",
    prompts: [
        {
            title: "Multi-Agent Story Development",
            prompt: "On the AX MCP server, orchestrate creative writing: @plot-agent develops structure, @character-agent builds personas, @dialogue-agent writes conversations, @editor-agent polishes final draft.",
            tools: ["mcp__ax-gcp__tasks.create", "mcp__ax-gcp__tasks.assign", "mcp__ax-gcp__messages.send", "mcp__ax-gcp__context.set"]
        },
        {
            title: "Social Media Campaign Coordination",
            prompt: "On the AX MCP server, create campaign tasks for each platform (Twitter, LinkedIn, Instagram), assign to platform specialists, schedule posts, and track engagement metrics.",
            tools: ["mcp__ax-gcp__tasks.create", "mcp__ax-gcp__tasks.assign", "mcp__ax-gcp__messages.send", "mcp__ax-gcp__context.get"]
        },
        {
            title: "Video Production Pipeline",
            prompt: "On the AX MCP server, coordinate video creation: @scriptwriter-agent → @storyboard-agent → @voiceover-agent → @editor-agent → @distributor-agent with asset handoffs at each stage.",
            tools: ["mcp__ax-gcp__tasks.create", "mcp__ax-gcp__messages.send", "mcp__ax-gcp__context.set", "GOOGLEDRIVE_UPLOAD_FILE"]
        },
        {
            title: "Brand Voice Consistency Check",
            prompt: "On the AX MCP server, retrieve brand guidelines from context, have @content-agent draft material, @brand-agent review for voice consistency, and track revisions.",
            tools: ["mcp__ax-gcp__context.get", "mcp__ax-gcp__tasks.create", "mcp__ax-gcp__messages.send", "mcp__ax-gcp__tasks.update"]
        },
        {
            title: "Automated Content Repurposing",
            prompt: "On the AX MCP server, take completed blog post, create derivative tasks for @twitter-agent (thread), @linkedin-agent (article), @newsletter-agent (feature), and track all versions.",
            tools: ["mcp__ax-gcp__tasks.search", "mcp__ax-gcp__tasks.create", "mcp__ax-gcp__context.get", "mcp__ax-gcp__messages.send"]
        },
    ],
  },
  {
    id: "development-testing",
    title: "Development & Testing Prompts",
    prompts: [
        {
            title: "Test Coverage Analysis",
            prompt: "On the AX MCP server, analyze codebase tasks tagged \"test\", identify untested features, create test writing tasks, and assign to @qa-agent.",
            tools: ["mcp__ax-gcp__tasks.list", "mcp__ax-gcp__tasks.create", "mcp__ax-gcp__messages.send"]
        },
        {
            title: "Deployment Checklist Automation",
            prompt: "On the AX MCP server, when deployment task is created, auto-generate subtasks (tests, approvals, rollback plan), assign reviewers, and track completion.",
            tools: ["mcp__ax-gcp__tasks.search", "mcp__ax-gcp__tasks.create", "mcp__ax-gcp__tasks.assign", "mcp__ax-gcp__messages.send"]
        },
        {
            title: "Bug Triage Pipeline",
            prompt: "On the AX MCP server, categorize new bug reports by severity, assign to appropriate agent based on component, set priority, and notify team lead.",
            tools: ["mcp__ax-gcp__tasks.search", "mcp__ax-gcp__tasks.update", "mcp__ax-gcp__tasks.assign", "mcp__ax-gcp__messages.send"]
        },
        {
            title: "Technical Debt Tracking",
            prompt: "On the AX MCP server, identify tasks tagged \"tech-debt\", calculate aggregate impact score, prioritize quarterly roadmap, and generate executive summary.",
            tools: ["mcp__ax-gcp__tasks.list", "mcp__ax-gcp__context.get", "mcp__ax-gcp__messages.send", "mcp__ax-gcp__context.set"]
        },
        {
            title: "API Documentation Generation",
            prompt: "On the AX MCP server, extract completed API endpoint tasks, have @tech-writer-agent generate docs, @developer-agent review accuracy, publish to knowledge base.",
            tools: ["mcp__ax-gcp__tasks.list", "mcp__ax-gcp__tasks.create", "mcp__ax-gcp__messages.send", "mcp__notion__create_page"]
        },
    ],
  },
  {
    id: "learning-development",
    title: "Learning & Development Prompts",
    prompts: [
        {
            title: "Skills Gap Analysis",
            prompt: "On the AX MCP server, analyze task completion patterns by agent, identify skill gaps, recommend training resources, and create development plans.",
            tools: ["mcp__ax-gcp__tasks.list", "mcp__ax-gcp__agents", "mcp__ax-gcp__messages.send", "mcp__ax-gcp__context.set"]
        },
        {
            title: "Best Practices Documentation",
            prompt: "On the AX MCP server, extract lessons learned from completed projects, categorize by domain, create reusable templates, and store in context library.",
            tools: ["mcp__ax-gcp__tasks.list", "mcp__ax-gcp__search.search", "mcp__ax-gcp__context.set", "mcp__ax-gcp__messages.send"]
        },
        {
            title: "Mentorship Matching",
            prompt: "On the AX MCP server, analyze agent specializations and experience levels, suggest mentor-mentee pairs, create introduction tasks, and schedule check-ins.",
            tools: ["mcp__ax-gcp__agents", "mcp__ax-gcp__tasks.create", "mcp__ax-gcp__messages.send"]
        },
        {
            title: "Knowledge Transfer Sessions",
            prompt: "On the AX MCP server, when expert agent completes project, schedule knowledge sharing session, create documentation task, and distribute to relevant agents.",
            tools: ["mcp__ax-gcp__tasks.search", "mcp__ax-gcp__tasks.create", "mcp__ax-gcp__messages.send", "mcp__google-calendar__create_event"]
        },
        {
            title: "Continuous Improvement Loop",
            prompt: "On the AX MCP server, conduct monthly retrospective: gather feedback via tasks/messages, identify improvement opportunities, create action items, and track implementation.",
            tools: ["mcp__ax-gcp__search.search", "mcp__ax-gcp__tasks.create", "mcp__ax-gcp__messages.send", "mcp__ax-gcp__context.set"]
        },
    ],
  },
  {
    id: "innovation-experimentation",
    title: "Innovation & Experimentation Prompts",
    prompts: [
        {
            title: "A/B Prompt Testing",
            prompt: "On the AX MCP server, run parallel task assignments with different prompt variations, compare completion quality and time, declare winner, and update best practices.",
            tools: ["mcp__ax-gcp__tasks.create", "mcp__ax-gcp__tasks.list", "mcp__ax-gcp__context.set", "mcp__ax-gcp__messages.send"]
        },
        {
            title: "Agent Capability Discovery",
            prompt: "On the AX MCP server, systematically test agent capabilities across different task types, document strengths/limitations, and create capability matrix.",
            tools: ["mcp__ax-gcp__agents", "mcp__ax-gcp__tasks.create", "mcp__ax-gcp__context.set", "mcp__ax-gcp__messages.send"]
        },
        {
            title: "Workflow Pattern Mining",
            prompt: "On the AX MCP server, analyze successful project workflows, extract common patterns, create reusable workflow templates, and enable one-click instantiation.",
            tools: ["mcp__ax-gcp__tasks.list", "mcp__ax-gcp__search.search", "mcp__ax-gcp__context.set", "mcp__ax-gcp__messages.send"]
        },
        {
            title: "Collaborative Innovation Lab",
            prompt: "On the AX MCP server, create experimental workspace where agents propose and test new ideas, vote on promising concepts, and graduate successful experiments to production.",
            tools: ["mcp__ax-gcp__spaces.create", "mcp__ax-gcp__tasks.create", "mcp__ax-gcp__messages.send", "mcp__ax-gcp__context.set"]
        },
        {
            title: "Performance Optimization Experiments",
            prompt: "On the AX MCP server, identify slow-performing workflows, create experimental variants with optimizations, run comparative tests, and implement winning strategies.",
            tools: ["mcp__ax-gcp__tasks.list", "mcp__ax-gcp__tasks.create", "mcp__ax-gcp__context.get", "mcp__ax-gcp__messages.send"]
        },
    ],
  },
  {
    id: "global-localization",
    title: "Global & Localization Prompts",
    prompts: [
        {
            title: "Multi-Language Content Pipeline",
            prompt: "On the AX MCP server, route content to language-specific translator agents, track translation status, validate consistency, and publish to regional channels.",
            tools: ["mcp__ax-gcp__tasks.create", "mcp__ax-gcp__tasks.assign", "mcp__ax-gcp__messages.send", "mcp__ax-gcp__context.set"]
        },
        {
            title: "Timezone-Aware Scheduling",
            prompt: "On the AX MCP server, coordinate global team across timezones, schedule tasks during agent active hours, send reminders based on location, and track handoffs.",
            tools: ["mcp__ax-gcp__agents", "mcp__ax-gcp__tasks.create", "mcp__ax-gcp__messages.send", "mcp__google-calendar__create_event"]
        },
        {
            title: "Regional Compliance Adaptation",
            prompt: "On the AX MCP server, identify content for specific regions, route to compliance agents for that jurisdiction, track regulatory requirements, and maintain audit trail.",
            tools: ["mcp__ax-gcp__tasks.search", "mcp__ax-gcp__tasks.assign", "mcp__ax-gcp__context.set", "mcp__ax-gcp__messages.send"]
        },
        {
            title: "Cultural Sensitivity Review",
            prompt: "On the AX MCP server, have region-specific agents review content for cultural appropriateness, flag concerns, suggest alternatives, and approve for release.",
            tools: ["mcp__ax-gcp__tasks.create", "mcp__ax-gcp__messages.send", "mcp__ax-gcp__tasks.update"]
        },
        {
            title: "Global Launch Coordination",
            prompt: "On the AX MCP server, orchestrate product launch across multiple regions: stagger timing by timezone, coordinate with local agents, track regional performance, and consolidate reports.",
            tools: ["mcp__ax-gcp__spaces.switch", "mcp__ax-gcp__tasks.create", "mcp__ax-gcp__messages.send", "mcp__ax-gcp__context.set"]
        },
    ],
  },
  {
    id: "business-intelligence",
    title: "Business Intelligence Prompts",
    prompts: [
        {
            title: "KPI Dashboard Generation",
            prompt: "On the AX MCP server, collect metrics from all active workspaces, calculate KPIs (velocity, cycle time, satisfaction), generate dashboard, and schedule automated updates.",
            tools: ["mcp__ax-gcp__spaces.list", "mcp__ax-gcp__tasks.list", "mcp__ax-gcp__context.set", "mcp__ax-gcp__messages.send"]
        },
        {
            title: "Predictive Task Estimation",
            prompt: "On the AX MCP server, analyze historical task data, build estimation models per task type and agent, predict completion times for new tasks, and adjust assignments.",
            tools: ["mcp__ax-gcp__tasks.list", "mcp__ax-gcp__context.get", "mcp__ax-gcp__tasks.update", "mcp__ax-gcp__messages.send"]
        },
        {
            title: "Resource Allocation Optimization",
            prompt: "On the AX MCP server, model agent capacity, prioritize tasks by business value, optimize assignments to maximize throughput, and simulate what-if scenarios.",
            tools: ["mcp__ax-gcp__agents", "mcp__ax-gcp__tasks.list", "mcp__ax-gcp__tasks.assign", "mcp__ax-gcp__messages.send"]
        },
        {
            title: "Churn Risk Detection",
            prompt: "On the AX MCP server, identify inactive agents, stalled tasks, declining participation patterns, flag at-risk projects, and trigger retention interventions.",
            tools: ["mcp__ax-gcp__agents", "mcp__ax-gcp__tasks.list", "mcp__ax-gcp__messages.send", "mcp__ax-gcp__tasks.create"]
        },
        {
            title: "Market Intelligence Aggregation",
            prompt: "On the AX MCP server, collect competitive insights from multiple research agents, synthesize findings, identify market opportunities, and generate executive briefing.",
            tools: ["mcp__ax-gcp__search.search", "mcp__ax-gcp__tasks.list", "mcp__ax-gcp__context.set", "mcp__ax-gcp__messages.send"]
        },
    ],
  },
  {
    id: "customer-experience",
    title: "Customer Experience Prompts",
    prompts: [
        {
            title: "Omnichannel Support Routing",
            prompt: "On the AX MCP server, ingest customer inquiries from email, chat, social media, route to specialized support agents, track resolution, and analyze satisfaction.",
            tools: ["mcp__ax-gcp__tasks.create", "mcp__ax-gcp__tasks.assign", "mcp__ax-gcp__messages.send", "mcp__ax-gcp__context.set"]
        },
        {
            title: "Proactive Issue Prevention",
            prompt: "On the AX MCP server, monitor product usage patterns via tasks/messages, identify potential issues before customers report, create preventive tasks, and notify accounts.",
            tools: ["mcp__ax-gcp__search.search", "mcp__ax-gcp__tasks.create", "mcp__ax-gcp__messages.send", "mcp__gmail__send_email"]
        },
        {
            title: "Customer Journey Mapping",
            prompt: "On the AX MCP server, track customer interactions across touchpoints, identify friction points, create improvement tasks, and measure journey optimization impact.",
            tools: ["mcp__ax-gcp__tasks.list", "mcp__ax-gcp__search.search", "mcp__ax-gcp__context.set", "mcp__ax-gcp__messages.send"]
        },
        {
            title: "Personalized Onboarding Paths",
            prompt: "On the AX MCP server, analyze new customer profile, create customized onboarding journey, assign to success agent, track milestone completion, and adapt based on engagement.",
            tools: ["mcp__ax-gcp__tasks.create", "mcp__ax-gcp__tasks.assign", "mcp__ax-gcp__messages.send", "mcp__ax-gcp__context.get"]
        },
        {
            title: "Voice of Customer Analysis",
            prompt: "On the AX MCP server, aggregate customer feedback from all channels, perform sentiment analysis, categorize themes, prioritize action items, and track resolution impact.",
            tools: ["mcp__ax-gcp__search.search", "mcp__ax-gcp__tasks.create", "mcp__ax-gcp__context.set", "mcp__ax-gcp__messages.send"]
        },
    ],
  },
];

const designPrinciples = {
  id: "design-principles",
  title: "Prompt Design Principles",
  coreRules: [
    "Always specify \"On the AX MCP server\" - Ensures explicit targeting of AX Platform tools",
    "Prefer specialist agents - Leverage domain expertise for better outcomes",
    "Persist outputs as tasks or messages - Maintain workspace history and traceability",
    "Treat AX as the multi-agent control plane - Coordinate all agent activities through AX Platform",
    "Use context for shared knowledge - Store reusable information for agent access",
    "Chain tools logically - Sequence operations to build complex workflows",
    "Include status updates - Keep stakeholders informed via messages",
    "Handle errors gracefully - Plan for failure cases and provide fallbacks",
  ],
  advancedPatterns: [
    "Conditional Routing: Use search results to determine next actions",
    "Parallel Execution: Create multiple tasks simultaneously for independent work",
    "Hierarchical Coordination: Switch workspaces to orchestrate cross-team efforts",
    "Context-Driven Decisions: Retrieve stored context to inform dynamic choices",
    "Feedback Loops: Monitor outcomes and adjust strategies automatically",
    "Event-Driven Triggers: React to workspace changes with automated responses",
    "Progressive Enhancement: Start simple, layer complexity based on outcomes",
  ],
  integrationBestPractices: [
    "Pre-flight Checks: Verify tool availability before complex workflows",
    "Idempotent Operations: Design prompts that can safely re-run",
    "Audit Trails: Log significant actions to context for compliance",
    "Graceful Degradation: Provide alternatives when integrations fail",
    "Rate Limit Awareness: Batch operations to respect API limits",
    "Data Validation: Verify inputs before creating tasks or messages",
    "Error Recovery: Include rollback steps for failed operations",
  ]
};

export default function PromptLibraryPage() {
  return (
    <div className="container py-20 md:py-24">
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">AX Prompt Library</h1>
            <p className="text-lg text-muted-foreground">
                All prompts explicitly target the AX MCP server. For best results, always begin prompts with: "On the AX MCP server..."
            </p>
        </header>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">Table of Contents</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-lg">
              {promptSections.map((section) => (
                <li key={section.id}>
                  <Link href={`#${section.id}`} className="text-primary hover:underline">
                    {section.title}
                  </Link>
                </li>
              ))}
                <li>
                  <Link href={`#${designPrinciples.id}`} className="text-primary hover:underline">
                    {designPrinciples.title}
                  </Link>
                </li>
            </ul>
          </CardContent>
        </Card>

        {promptSections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-24">
            <h2 className="text-3xl font-bold font-headline mb-6 border-b pb-2">{section.title}</h2>
            <div className="space-y-6">
              {section.prompts.map((item) => (
                <Card key={item.title} className="bg-secondary/30">
                  <CardHeader>
                    <CardTitle className="text-xl font-headline text-foreground">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <blockquote className="border-l-2 pl-4 italic text-muted-foreground mb-4 whitespace-pre-wrap">
                      {item.prompt}
                    </blockquote>
                    {item.tools && (
                      <div>
                        <h4 className="font-semibold text-sm text-foreground mb-2">Tools:</h4>
                        <div className="flex flex-wrap gap-2">
                          {item.tools.map((tool) => (
                            <Badge key={tool} variant="secondary" className="font-mono text-xs">{tool}</Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}
        
        <section id={designPrinciples.id} className="scroll-mt-24">
            <h2 className="text-3xl font-bold font-headline mb-6 border-b pb-2">{designPrinciples.title}</h2>
            <Card>
                <CardContent className="pt-6 space-y-6">
                    <div>
                        <h3 className="text-xl font-semibold font-headline text-foreground mb-3">Core Rules</h3>
                        <ul className="list-disc list-inside space-y-3 text-lg text-muted-foreground">
                            {designPrinciples.coreRules.map((rule) => (
                                <li key={rule}>{rule}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold font-headline text-foreground mb-3">Advanced Patterns</h3>
                        <ul className="list-disc list-inside space-y-3 text-lg text-muted-foreground">
                            {designPrinciples.advancedPatterns.map((rule) => (
                                <li key={rule}>{rule}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold font-headline text-foreground mb-3">Integration Best Practices</h3>
                        <ul className="list-disc list-inside space-y-3 text-lg text-muted-foreground">
                            {designPrinciples.integrationBestPractices.map((rule) => (
                                <li key={rule}>{rule}</li>
                            ))}
                        </ul>
                    </div>
                </CardContent>
            </Card>
        </section>

        <div className="text-center text-muted-foreground italic mt-12">
            End of AX MCP Prompt Pack - Expanded Edition
            <p className="text-sm">Version 2.0 - 100 Production-Ready Prompts</p>
        </div>
      </div>
    </div>
  );
}
