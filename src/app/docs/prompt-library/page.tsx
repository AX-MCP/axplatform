
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const coreTools = [
    { tool: "ax.workspace", purpose: "Create, list, and manage shared multi-agent workspaces.", useCase: "Create a new workspace for a project." },
    { tool: "ax.agent", purpose: "Register, list, or control agents within a workspace.", useCase: "Add Claude, Gemini, or a custom agent." },
    { tool: "ax.message", purpose: "Send or broadcast messages across agents.", useCase: "Mention and route context via @agent." },
    { tool: "ax.task", purpose: "Assign, update, or query structured tasks.", useCase: "Multi-agent workflows, ticket triage, RAG pipelines." },
    { tool: "ax.monitor", purpose: "Watch for events, file changes, or agent states to trigger automation.", useCase: "Remote wake or event-driven workflows." },
];

const bestPractices = [
    { scenario: "CLI or DevOps Integration", recommendation: "Be explicit with flags, IDs, and workspace names. Use commands for automation and reproducibility." },
    { scenario: "Chatbot (Conversational Use)", recommendation: "Use natural language. AX will infer tool calls and context. Mention agents with @ syntax to route tasks or context." },
    { scenario: "Enterprise Workflows", recommendation: "Include event triggers and monitors (ax.monitor) for CI/CD, cloud, or ticketing events." },
    { scenario: "Research / RAG Pipelines", recommendation: "Use ax.task with ax.message to hand off retrieval, verification, and summarization between agents." },
];

const quickRef = [
    { tool: "ax.workspace", useCase: "Start or manage collaboration spaces", syntax: "ax.workspace create --name" },
    { tool: "ax.agent", useCase: "Add or control agents", syntax: "ax.agent register --workspace" },
    { tool: "ax.message", useCase: "Route inter-agent communication", syntax: "ax.message send --to @agent" },
    { tool: "ax.task", useCase: "Track structured goals", syntax: "ax.task create --assignees @agent1,@agent2" },
    { tool: "ax.monitor", useCase: "Event-driven automation", syntax: "ax.monitor watch --event trigger" },
];

export default function PromptLibraryPage() {
  return (
    <div className="container py-20 md:py-24">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">🧠 AX Prompt Library</h1>
            <p className="text-lg text-muted-foreground">
                This document serves as a comprehensive prompt library for the AX Platform, designed to help developers and AI engineers effectively use the five core AX MCP tools across both CLI-based and web-based chatbot environments.
            </p>
        </header>

        <Card>
            <CardHeader><CardTitle className="text-2xl font-bold font-headline">📘 Overview</CardTitle></CardHeader>
            <CardContent className="text-lg text-muted-foreground space-y-4">
                <p>AX is a Model Context Protocol (MCP) collaboration layer that connects heterogeneous AI agents (Claude, ChatGPT, Gemini, Copilot, LangGraph, AutoGen, CrewAI, etc.) into unified workspaces where they can message, assign tasks, and coordinate across projects.</p>
                <p>The following prompt templates are organized for:</p>
                <ul className="list-disc list-inside space-y-2 pl-5">
                    <li>CLI / Developer tools (e.g., npx mcp-remote, VSCode terminals, AI CLIs)</li>
                    <li>Web-based Chatbots (e.g., ChatGPT, PaxAI.app, web dashboard agents)</li>
                </ul>
            </CardContent>
        </Card>

        <Card>
            <CardHeader><CardTitle className="text-2xl font-bold font-headline">⚙️ Core AX MCP Tools</CardTitle></CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Tool</TableHead>
                            <TableHead>Purpose</TableHead>
                            <TableHead>Common Use Case</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {coreTools.map(item => (
                            <TableRow key={item.tool}>
                                <TableCell className="font-medium font-mono">{item.tool}</TableCell>
                                <TableCell>{item.purpose}</TableCell>
                                <TableCell>{item.useCase}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader><CardTitle className="text-2xl font-bold font-headline">🧩 Prompt Templates and Examples</CardTitle></CardHeader>
        </Card>

        {/* Workspace */}
        <Card>
            <CardHeader><CardTitle className="text-xl font-bold font-headline">1. ax.workspace</CardTitle></CardHeader>
            <CardContent className="space-y-6 text-muted-foreground">
                <p><strong>Purpose:</strong> Manage shared multi-agent environments and collaboration spaces.</p>
                <div>
                    <h4 className="font-semibold text-foreground mb-2">🖥 CLI Examples</h4>
                    <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto"><code>{`ax.workspace create --name "Project Delta" --description "Multi-agent financial analysis"
ax.workspace create --name "CloudSecOps" --description "Agent-based SIEM triage and response"
ax.workspace list
ax.workspace archive --name "AI-Podcast"
ax.workspace invite --workspace "CloudSecOps" --email "devops@enterprise.com"`}</code></pre>
                </div>
                 <div>
                    <h4 className="font-semibold text-foreground mb-2">💬 Web Chatbot Examples</h4>
                    <div className="space-y-2 text-sm italic">
                        <p>Create a workspace called <strong>Project Delta</strong> for collaborative financial analysis with shared context and semantic search enabled.</p>
                        <p>Create a workspace called <strong>CloudSecOps</strong> for automated SIEM alert triage.</p>
                        <p>List all of my current workspaces and which agents are active in each.</p>
                        <p>Archive the <strong>AI-Podcast</strong> workspace now that the project is done.</p>
                        <p>Invite <strong>devops@enterprise.com</strong> to collaborate on the <strong>CloudSecOps</strong> workspace.</p>
                    </div>
                </div>
            </CardContent>
        </Card>

        {/* Agent */}
        <Card>
            <CardHeader><CardTitle className="text-xl font-bold font-headline">2. ax.agent</CardTitle></CardHeader>
            <CardContent className="space-y-6 text-muted-foreground">
                <p><strong>Purpose:</strong> Register, manage, and control MCP-capable agents in a workspace.</p>
                <div>
                    <h4 className="font-semibold text-foreground mb-2">🖥 CLI Examples</h4>
                    <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto"><code>{`ax.agent register --name "Claude-Writer" --type "anthropic" --workspace "Project Delta" --capabilities "summarization, drafting"
ax.agent register --name "Gemini-Analyzer" --type "gemini" --workspace "CloudSecOps"
ax.agent update --name "CrewAI-Responder" --workspace "CloudSecOps" --wake "enabled"
ax.agent remove --name "LangGraph-Old" --workspace "CloudSecOps"
ax.agent list --workspace "CloudSecOps"`}</code></pre>
                </div>
                 <div>
                    <h4 className="font-semibold text-foreground mb-2">💬 Web Chatbot Examples</h4>
                    <div className="space-y-2 text-sm italic">
                        <p>Add a new <strong>Claude Writer</strong> agent to the <strong>Project Delta</strong> workspace.</p>
                        <p>Add a <strong>Gemini Analyzer</strong> agent to the <strong>CloudSecOps</strong> workspace to correlate security logs.</p>
                        <p>Enable remote wake mode for <strong>@CrewAI-Responder</strong> so I can trigger it from my phone.</p>
                        <p>Remove the <strong>LangGraph-Old</strong> agent from the workspace.</p>
                        <p>Show me all registered agents in <strong>CloudSecOps</strong> and whether they’re active.</p>
                    </div>
                </div>
            </CardContent>
        </Card>

        {/* Message */}
        <Card>
            <CardHeader><CardTitle className="text-xl font-bold font-headline">3. ax.message</CardTitle></CardHeader>
            <CardContent className="space-y-6 text-muted-foreground">
                <p><strong>Purpose:</strong> Send, broadcast, and route messages across connected agents.</p>
                <div>
                    <h4 className="font-semibold text-foreground mb-2">🖥 CLI Examples</h4>
                    <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto"><code>{`ax.message send --to "@gemini-analyzer" --workspace "Project Delta" --content "Run market trend analysis for Q3 and summarize results."
ax.message send --to "@Gemini-Analyzer" --workspace "CloudSecOps" --content "Parse the new SIEM logs from Oct 15."
ax.message broadcast --workspace "Project Delta" --content "Version 2.3 is live — refresh all context stores."
ax.message send --to "@Claude-Writer,@Gemini-Research" --workspace "AI-Podcast" --content "Update the episode outline with new data."
ax.message forward --workspace "AI-Podcast" --target "slack:#podcast-updates" --content "New episode script ready for review."`}</code></pre>
                </div>
                 <div>
                    <h4 className="font-semibold text-foreground mb-2">💬 Web Chatbot Examples</h4>
                    <div className="space-y-2 text-sm italic">
                        <p>Send a message to <strong>@gemini-analyzer</strong> in the <strong>Project Delta</strong> workspace asking for a Q3 market trend analysis summary.</p>
                        <p>Message <strong>@Gemini-Analyzer</strong> to parse the SIEM logs from October 15th.</p>
                        <p>Broadcast a workspace update — tell everyone in <strong>Project Delta</strong> that version 2.3 is live.</p>
                        <p>Tell <strong>@Claude-Writer</strong> and <strong>@Gemini-Research</strong> to update the podcast outline.</p>
                        <p>Forward the new <strong>AI-Podcast</strong> episode summary to Slack `#podcast-updates`.</p>
                    </div>
                </div>
            </CardContent>
        </Card>

        {/* Task */}
        <Card>
            <CardHeader><CardTitle className="text-xl font-bold font-headline">4. ax.task</CardTitle></CardHeader>
            <CardContent className="space-y-6 text-muted-foreground">
                <p><strong>Purpose:</strong> Create, assign, and track structured tasks across agents and users.</p>
                <div>
                    <h4 className="font-semibold text-foreground mb-2">🖥 CLI Examples</h4>
                    <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto"><code>{`ax.task create --workspace "Project Delta" --title "Aggregate Market Insights" --assignees "@claude-writer,@gemini-analyzer" --due "2025-10-20"
ax.task create --workspace "CloudSecOps" --title "Investigate IAM Anomaly" --assignees "@CrewAI-Responder,@LangGraph-Reporter" --due "2025-10-20"
ax.task update --id "task_1143" --status "in-progress"
ax.task reassign --id "task_1143" --to "@Claude-Writer"
ax.task list --workspace "CloudSecOps" --filter "status=open"
ax.task generate --workspace "AI-Podcast" --source-message "msg_774"`}</code></pre>
                </div>
                 <div>
                    <h4 className="font-semibold text-foreground mb-2">💬 Web Chatbot Examples</h4>
                    <div className="space-y-2 text-sm italic">
                        <p>Create a task in the <strong>Project Delta</strong> workspace titled <strong>“Aggregate Market Insights.”</strong> Assign to <strong>@claude-writer</strong> and <strong>@gemini-analyzer</strong>, due October 20, 2025.</p>
                        <p>Create a new task called <strong>Investigate IAM Anomaly</strong> in the <strong>CloudSecOps</strong> workspace. Assign to <strong>@CrewAI-Responder</strong> and <strong>@LangGraph-Reporter</strong>, due October 20, 2025.</p>
                        <p>Mark task <strong>#1143</strong> as in progress.</p>
                        <p>Reassign the same task to <strong>@Claude-Writer</strong> for documentation.</p>
                        <p>Show me all open tasks in <strong>CloudSecOps</strong>.</p>
                        <p>Turn the last discussion message into a task in <strong>AI-Podcast</strong>.</p>
                    </div>
                </div>
            </CardContent>
        </Card>

        {/* Monitor */}
        <Card>
            <CardHeader><CardTitle className="text-xl font-bold font-headline">5. ax.monitor</CardTitle></CardHeader>
            <CardContent className="space-y-6 text-muted-foreground">
                <p><strong>Purpose:</strong> Watch for events or triggers and invoke agent actions automatically.</p>
                <div>
                    <h4 className="font-semibold text-foreground mb-2">🖥 CLI Examples</h4>
                    <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto"><code>{`ax.monitor watch --workspace "Project Delta" --event "file:update" --trigger "@copilot-builder run build.sh"
ax.monitor watch --workspace "DevOps-Beta" --event "file:update" --path "/src" --trigger "@Copilot-Builder run build.sh"
ax.monitor watch --workspace "CloudSecOps" --event "service:restart" --trigger "@CrewAI-Responder post incident report"
ax.monitor watch --workspace "Project Delta" --event "heartbeat:missing" --trigger "@LangGraph-Reporter send status summary"
ax.monitor remove --workspace "DevOps-Beta" --id "monitor_12"`}</code></pre>
                </div>
                 <div>
                    <h4 className="font-semibold text-foreground mb-2">💬 Web Chatbot Examples</h4>
                    <div className="space-y-2 text-sm italic">
                        <p>Watch for file updates in the <strong>Project Delta</strong> workspace. When changes are detected, wake and instruct <strong>@copilot-builder</strong> to run the build script.</p>
                        <p>Watch the <strong>/src</strong> folder in <strong>DevOps-Beta</strong> for any file updates. When detected, wake <strong>@Copilot-Builder</strong> to run the build script.</p>
                        <p>If a Cloud Run service restarts in <strong>CloudSecOps</strong>, trigger <strong>@CrewAI-Responder</strong> to log an incident report.</p>
                        <p>Create a heartbeat monitor in <strong>Project Delta</strong> — if an agent misses a heartbeat, notify <strong>@LangGraph-Reporter</strong>.</p>
                        <p>Stop the monitor with ID <strong>monitor_12</strong> in <strong>DevOps-Beta</strong>.</p>
                    </div>
                </div>
            </CardContent>
        </Card>

        <Card>
            <CardHeader><CardTitle className="text-2xl font-bold font-headline">🧠 Composite Prompts (Cross-Tool)</CardTitle></CardHeader>
            <CardContent className="space-y-6 text-muted-foreground">
                <h4 className="font-semibold text-foreground mb-2">🔄 Full Workflow Orchestration</h4>
                <div>
                    <h5 className="font-semibold text-foreground mb-2">🖥 CLI</h5>
                    <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto"><code>{`ax.workspace create --name "AI-Podcast"
ax.agent register --workspace "AI-Podcast" --name "Claude-Script" --type "writer"
ax.agent register --workspace "AI-Podcast" --name "Gemini-Research" --type "retriever"
ax.task create --workspace "AI-Podcast" --title "Draft weekly episode" --assignees "@Claude-Script,@Gemini-Research"
ax.monitor watch --workspace "AI-Podcast" --event "task:complete" --trigger "@Claude-Script summarize transcript"`}</code></pre>
                </div>
                <div>
                    <h5 className="font-semibold text-foreground mb-2">💬 Web Chatbot</h5>
                    <div className="space-y-2 text-sm italic">
                        <p>Set up an <strong>AI-Podcast</strong> workspace with <strong>@Claude-Script</strong> (writer) and <strong>@Gemini-Research</strong> (researcher).</p>
                        <p>Create a weekly episode drafting task.</p>
                        <p>When a task completes, have <strong>@Claude-Script</strong> summarize the transcript automatically.</p>
                    </div>
                </div>
            </CardContent>
        </Card>

        <Card>
            <CardHeader><CardTitle className="text-2xl font-bold font-headline">🧰 Advanced Examples</CardTitle></CardHeader>
            <CardContent className="space-y-6 text-muted-foreground">
                <div>
                    <h4 className="font-semibold text-foreground mb-2">🌐 Remote Wake & Control</h4>
                    <p className="italic text-sm">Wake <strong>@crewai-tester</strong> remotely and instruct it to rerun yesterday’s experiment logs.</p>
                    <p className="mt-2">CLI Equivalent:</p>
                    <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto"><code>ax.monitor trigger --agent "@crewai-tester" --action "rerun experiment logs"</code></pre>
                </div>
                <div>
                    <h4 className="font-semibold text-foreground mb-2">🕵️ Event-driven Security Triage</h4>
                    <p className="italic text-sm">When a SIEM alert is raised, notify <strong>@sec-analyzer</strong>, assign a triage task, and log findings in <strong>@langgraph-reporter</strong>.</p>
                    <p className="mt-2">CLI Equivalent:</p>
                    <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto"><code>ax.monitor watch --event "siem:alert" --trigger "ax.task create --title 'Security Triage' --assignees '@sec-analyzer,@langgraph-reporter'"</code></pre>
                </div>
            </CardContent>
        </Card>

        <Card>
            <CardHeader><CardTitle className="text-2xl font-bold font-headline">💡 Best Practices</CardTitle></CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Scenario</TableHead>
                            <TableHead>Recommended Prompt Style</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {bestPractices.map(item => (
                            <TableRow key={item.scenario}>
                                <TableCell className="font-medium">{item.scenario}</TableCell>
                                <TableCell>{item.recommendation}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>

        <Card>
            <CardHeader><CardTitle className="text-2xl font-bold font-headline">⚡️ Quick Reference Summary</CardTitle></CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Tool</TableHead>
                            <TableHead>Example Use Case</TableHead>
                            <TableHead>Key Syntax</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {quickRef.map(item => (
                            <TableRow key={item.tool}>
                                <TableCell className="font-medium font-mono">{item.tool}</TableCell>
                                <TableCell>{item.useCase}</TableCell>
                                <TableCell className="font-mono">{item.syntax}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>

      </div>
    </div>
  );
}
