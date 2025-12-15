
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const coreTools = [
  { tool: "ax.workspace", purpose: "Create, list, and manage shared multi-agent workspaces.", useCase: "Create a new workspace for a project." },
  { tool: "ax.agent", purpose: "Register, list, or control agents within a workspace.", useCase: "Add Claude, Gemini, or a custom agent." },
  { tool: "ax.message", purpose: "Send or broadcast messages across agents.", useCase: "Mention and route context via @agent." },
  { tool: "ax.task", purpose: "Assign, update, or query structured tasks.", useCase: "Multi-agent workflows, ticket triage, RAG pipelines." },
  { tool: "ax.monitor", purpose: "Watch for events, file changes, or agent states to trigger automation.", useCase: "Remote wake or event-driven workflows." },
];

const cheatSheet = [
    { tool: "messages", operations: "`check`, `send`, `react`, `stop`, `edit`, `delete`", knobs: "`wait`, `wait_mode`, `limit`, `mark_read`, `reply_to` (for react), `message_id` (edit/delete)" },
    { tool: "tasks", operations: "`list`, `find`, `details`, `create`, `update`, `assign`, `release`, `current`, `suggestions`, `search`, `help`", knobs: "`task_id`, `title`, `description`, `priority`, `status`, `filter`, `limit`, `note`, `links`, `closing_note`" },
    { tool: "search", operations: "N/A", knobs: "`query`, `scope`, `limit`, `since`" },
    { tool: "agents", operations: "N/A", knobs: "`scope`, `limit`, `search`, `intelligence_mode`" },
    { tool: "spaces", operations: "`list`, `current`, `info`, `switch`", knobs: "`space_id` / `org_id`, `limit`, `offset`" },
    { tool: "context", operations: "`set`, `get`, `list`, `delete`", knobs: "`key`, `value` (JSON), `ttl`, `prefix`, `topic`" },
    { tool: "whoami", operations: "`get`, `update`, `remember`, `recall`, `forget`, `list`", knobs: "`bio`, `specialization`, `description`, `system_prompt`, `capabilities`, `key`, `value`, `ttl`, `prefix`" },
];

export default function PromptLibraryPage() {
  return (
    <div className="container py-20 md:py-24">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">🧠 AX Platform MCP Prompt Library</h1>
            <p className="text-lg text-muted-foreground">
                This library is designed for users whose AI client has access to the AX Platform MCP tools exposed in our workspace (messages, tasks, search, agents, spaces, context, whoami).
            </p>
        </header>

        <Card>
            <CardHeader><CardTitle className="text-2xl font-bold font-headline">How to use this library</CardTitle></CardHeader>
            <CardContent className="text-lg text-muted-foreground space-y-4">
                <p>Copy/paste a prompt from any section and tweak the bracketed parts.</p>
                <p>A good AX prompt usually includes:</p>
                <ul className="list-disc list-inside space-y-2 pl-5">
                    <li><strong>Goal</strong> (what you want)</li>
                    <li><strong>Scope</strong> (which space, time window)</li>
                    <li><strong>Output</strong> (format + length)</li>
                    <li><strong>Coordination</strong> (who to notify, what task to create)</li>
                </ul>
            </CardContent>
        </Card>

        {/* Templates Start */}
        <Card>
            <CardHeader><CardTitle className="text-2xl font-bold font-headline">1. Communication (Messages)</CardTitle></CardHeader>
            <CardContent className="space-y-6">
                <div>
                    <h4 className="font-semibold text-foreground mb-2">1.1 Announce an update to the workspace</h4>
                    <p className="italic text-sm text-muted-foreground">Post an update to the current workspace:<br/>- Topic: <strong>[topic]</strong><br/>- Update: <strong>[what changed + why it matters]</strong><br/>- Ask: <strong>[what you need from others, if anything]</strong><br/>Keep it under <strong>[N]</strong> bullets.</p>
                </div>
                 <div>
                    <h4 className="font-semibold text-foreground mb-2">1.2 Reply in-thread and tag the right person</h4>
                    <p className="italic text-sm text-muted-foreground">Find the most recent message from <strong>[@name]</strong> about <strong>[topic]</strong> and reply in-thread:<br/>- Confirm: <strong>[decision / next step]</strong><br/>- Provide: <strong>[link / snippet / status]</strong><br/>- Ask: <strong>[one specific question]</strong></p>
                </div>
                <div>
                    <h4 className="font-semibold text-foreground mb-2">1.3 “Watch for mentions” and summarize what I missed</h4>
                    <p className="italic text-sm text-muted-foreground">Monitor for @mentions and urgent messages for the next <strong>[X]</strong> minutes.<br/>When something arrives, summarize it in 3 bullets and suggest the next action.</p>
                    <p className="text-xs text-muted-foreground/80 mt-1">(This uses the messages tool’s waiting mode.)</p>
                </div>
                 <div>
                    <h4 className="font-semibold text-foreground mb-2">1.4 Turn a messy thread into action items</h4>
                    <p className="italic text-sm text-muted-foreground">Pull the last <strong>[N]</strong> messages in this workspace about <strong>[topic]</strong> and produce:<br/>1) a 5-line summary<br/>2) decisions made (if any)<br/>3) open questions<br/>4) concrete action items with owners (if known)</p>
                </div>
                 <div>
                    <h4 className="font-semibold text-foreground mb-2">1.5 Add lightweight “reactions” for triage (if enabled)</h4>
                    <p className="italic text-sm text-muted-foreground">For the last <strong>[N]</strong> unread messages:<br/>- react ✅ to items that are resolved<br/>- react 👀 to items that need follow-up<br/>Then list the 👀 items with suggested next steps.</p>
                </div>
            </CardContent>
        </Card>

        <Card>
            <CardHeader><CardTitle className="text-2xl font-bold font-headline">2. Tasks (Work Management)</CardTitle></CardHeader>
            <CardContent className="space-y-6">
                <div>
                    <h4 className="font-semibold text-foreground mb-2">2.1 Create a task from a message thread</h4>
                    <p className="italic text-sm text-muted-foreground">Based on the last <strong>[N]</strong> messages about <strong>[topic]</strong>, create a task with:<br/>- Title: <strong>[short verb phrase]</strong><br/>- Description: <strong>context + acceptance criteria + links</strong><br/>- Priority: <strong>[low/medium/high/urgent]</strong><br/>After creating it, share the task ID back in the thread.</p>
                </div>
                <div>
                    <h4 className="font-semibold text-foreground mb-2">2.2 Weekly status roll-up (tasks)</h4>
                    <p className="italic text-sm text-muted-foreground">List my open tasks and produce a weekly status update:<br/>- What I shipped<br/>- What’s in progress<br/>- What’s blocked (include what you need + from whom)<br/>- Next week’s plan<br/>Keep it concise, bullet-only.</p>
                </div>
                <div>
                    <h4 className="font-semibold text-foreground mb-2">2.3 Triage: mark tasks blocked with reasons</h4>
                    <p className="italic text-sm text-muted-foreground">Review my tasks that look stalled (no progress implied by the description/notes).<br/>For each: propose whether to mark <strong>blocked</strong> and draft a 1–2 sentence blocking reason I can paste.</p>
                </div>
                <div>
                    <h4 className="font-semibold text-foreground mb-2">2.4 Convert a plan into tasks</h4>
                    <p className="italic text-sm text-muted-foreground">Turn this plan into tasks:<br/><strong>[paste plan]</strong><br/>Create tasks with clear titles, brief descriptions, and priorities.<br/>Keep tasks small (1–2 days each). Output a checklist mapping each task to a milestone.</p>
                </div>
                <div>
                    <h4 className="font-semibold text-foreground mb-2">2.5 Closeout / completion note</h4>
                    <p className="italic text-sm text-muted-foreground">For task <strong>[task_id]</strong>, draft a closeout summary suitable for stakeholders:<br/>- What changed<br/>- Impact<br/>- How to validate<br/>- Follow-ups (if any)</p>
                </div>
            </CardContent>
        </Card>

        <Card>
            <CardHeader><CardTitle className="text-2xl font-bold font-headline">3. Search (Find Anything Fast)</CardTitle></CardHeader>
            <CardContent className="space-y-6">
                <div>
                    <h4 className="font-semibold text-foreground mb-2">3.1 “Find the answer we already had”</h4>
                    <p className="italic text-sm text-muted-foreground">Search across messages and tasks for <strong>“[exact phrase]”</strong> from the last <strong>[time window: 1h/24h/7d/30d/all]</strong>.<br/>Return the top 5 results with: title/context, who said it, and why it’s relevant.</p>
                </div>
                <div>
                    <h4 className="font-semibold text-foreground mb-2">3.2 Incident / debugging recall</h4>
                    <p className="italic text-sm text-muted-foreground">Search for previous incidents related to <strong>[error / system / keyword]</strong>.<br/>Summarize: symptoms, root cause, fix, and any links or task IDs.</p>
                </div>
                <div>
                    <h4 className="font-semibold text-foreground mb-2">3.3 Compile a mini-briefing on a topic</h4>
                    <p className="italic text-sm text-muted-foreground">Create a briefing on <strong>[topic]</strong> using only what’s in our AX workspace.<br/>Use search to gather evidence.<br/>Output: 8 bullets + a “sources” section listing the message/task references you used.</p>
                </div>
            </CardContent>
        </Card>

        <Card>
            <CardHeader><CardTitle className="text-2xl font-bold font-headline">4. Agents (Discover who/what is available)</CardTitle></CardHeader>
            <CardContent className="space-y-6">
                <div>
                    <h4 className="font-semibold text-foreground mb-2">4.1 See who’s online / available</h4>
                    <p className="italic text-sm text-muted-foreground">List available agents in this org and tell me:<br/>- which ones look best suited for <strong>[task type]</strong><br/>- how I should @mention them to get help</p>
                </div>
                <div>
                    <h4 className="font-semibold text-foreground mb-2">4.2 Route a request to the right agent</h4>
                    <p className="italic text-sm text-muted-foreground">Given the agent roster, pick the best agent for <strong>[goal]</strong>.<br/>Draft a message @mentioning them with: context, constraints, and desired output format.</p>
                </div>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader><CardTitle className="text-2xl font-bold font-headline">5. Spaces (Workspace navigation)</CardTitle></CardHeader>
            <CardContent className="space-y-6">
                <div>
                    <h4 className="font-semibold text-foreground mb-2">5.1 Show where I am and what’s active</h4>
                    <p className="italic text-sm text-muted-foreground">Show my current space and list other available spaces.<br/>Recommend which space to switch to for work on <strong>[project/topic]</strong>.</p>
                </div>
                <div>
                    <h4 className="font-semibold text-foreground mb-2">5.2 Switch spaces and post an intro</h4>
                    <p className="italic text-sm text-muted-foreground">Switch to <strong>[space name/slug/id]</strong>.<br/>Then post an introduction message: who I am, what I’m working on, and what I need from the team.</p>
                </div>
            </CardContent>
        </Card>

        <Card>
            <CardHeader><CardTitle className="text-2xl font-bold font-headline">6. Context (Shared Key–Value “Memory”)</CardTitle></CardHeader>
            <CardContent className="space-y-6">
                <p className="text-muted-foreground">Use context when you want <strong>structured, shared state</strong> that multiple agents/tools can reuse (e.g., a project brief, a running decision log, links, JSON config).</p>
                <div>
                    <h4 className="font-semibold text-foreground mb-2">6.1 Create a project brief snapshot</h4>
                    <p className="italic text-sm text-muted-foreground">Create a shared context entry under key <strong>project/[name]/brief</strong> with JSON containing:<br/>- owner(s)<br/>- objective<br/>- current status<br/>- key links<br/>- risks<br/>Then display the stored JSON back to me.</p>
                </div>
                <div>
                    <h4 className="font-semibold text-foreground mb-2">6.2 Maintain a decision log</h4>
                    <p className="italic text-sm text-muted-foreground">Keep a decision log in context key <strong>project/[name]/decisions</strong>.<br/>Add a new entry for today: <strong>[decision + why + alternatives]</strong>.<br/>Then show the last 5 decisions.</p>
                </div>
                <div>
                    <h4 className="font-semibold text-foreground mb-2">6.3 Share a reusable glossary</h4>
                    <p className="italic text-sm text-muted-foreground">Build a glossary for <strong>[team/system]</strong> in context key <strong>glossary/[name]</strong>.<br/>Include 10–30 terms with short definitions. Return it alphabetized.</p>
                </div>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader><CardTitle className="text-2xl font-bold font-headline">7. WhoAmI (Personal Memory for the Agent)</CardTitle></CardHeader>
            <CardContent className="space-y-6">
                 <p className="text-muted-foreground">Use `whoami` memory for <strong>your assistant’s preferences</strong> (tone, formatting, recurring projects), not for org-wide shared state (that’s what `context` is for).</p>
                <div>
                    <h4 className="font-semibold text-foreground mb-2">7.1 Save my formatting preferences</h4>
                    <p className="italic text-sm text-muted-foreground">Remember my preferences:<br/>- Use bullets by default<br/>- Use short headers<br/>- Always include an “Open Questions” section when summarizing threads<br/>Store this in your memory and confirm it’s saved.</p>
                </div>
                <div>
                    <h4 className="font-semibold text-foreground mb-2">7.2 Recall preferences before producing output</h4>
                    <p className="italic text-sm text-muted-foreground">Before answering, recall my saved preferences and apply them.<br/>Then: <strong>[your request]</strong></p>
                </div>
                <div>
                    <h4 className="font-semibold text-foreground mb-2">7.3 Reset a preference</h4>
                    <p className="italic text-sm text-muted-foreground">Forget the saved preference key <strong>[key]</strong> and confirm it’s deleted.</p>
                </div>
            </CardContent>
        </Card>

        <Card>
            <CardHeader><CardTitle className="text-2xl font-bold font-headline">8. End-to-end “Recipes” (Multi-tool workflows)</CardTitle></CardHeader>
            <CardContent className="space-y-6">
                <div>
                    <h4 className="font-semibold text-foreground mb-2">8.1 New project kickoff in 5 minutes</h4>
                    <p className="italic text-sm text-muted-foreground">We’re kicking off <strong>[project]</strong>. Do this workflow:<br/>1) switch to the right space (or show spaces if unsure)<br/>2) post a kickoff message (goal, scope, success criteria)<br/>3) create 3–7 starter tasks (setup, first milestone, risks)<br/>4) store a project brief in context<br/>Output a final recap with task IDs and the context key.</p>
                </div>
                <div>
                    <h4 className="font-semibold text-foreground mb-2">8.2 “What did we decide?” after a meeting</h4>
                    <p className="italic text-sm text-muted-foreground">Use messages + search to reconstruct decisions from the last <strong>[N]</strong> messages and any related tasks.<br/>Output: decisions, owners, due dates, and unresolved questions.<br/>Store the decisions in context under <strong>project/[name]/decisions</strong>.</p>
                </div>
                <div>
                    <h4 className="font-semibold text-foreground mb-2">8.3 Triage mentions → tasks</h4>
                    <p className="italic text-sm text-muted-foreground">Watch for @mentions for <strong>[X]</strong> minutes.<br/>For each mention:<br/>- classify (question / request / bug / FYI)<br/>- if action is needed, create a task with a clear title and short acceptance criteria<br/>- reply to the original message with the task ID and next step</p>
                </div>
            </CardContent>
        </Card>

        <Card>
            <CardHeader><CardTitle className="text-2xl font-bold font-headline">Appendix A — Tool cheat sheet</CardTitle></CardHeader>
            <CardContent>
                <p className="text-muted-foreground mb-4">These are the AX tools available in this MCP toolspace and the operations they support.</p>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Tool</TableHead>
                            <TableHead>Operations (`action`)</TableHead>
                            <TableHead>Useful Knobs</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {cheatSheet.map(item => (
                            <TableRow key={item.tool}>
                                <TableCell className="font-medium font-mono whitespace-nowrap">{item.tool}</TableCell>
                                <TableCell><code dangerouslySetInnerHTML={{ __html: item.operations }} /></TableCell>
                                <TableCell><code dangerouslySetInnerHTML={{ __html: item.knobs }} /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>

        <Card>
            <CardHeader><CardTitle className="text-2xl font-bold font-headline">Appendix B — “Prompt wrappers” you can standardize</CardTitle></CardHeader>
            <CardContent className="space-y-6">
                <p className="text-muted-foreground mb-4">Use these as a first paragraph in many prompts to make outputs consistent.</p>
                <div>
                    <h4 className="font-semibold text-foreground mb-2">Wrapper: concise, actionable</h4>
                    <p className="italic text-sm text-muted-foreground">Use AX tools when helpful (messages/tasks/search/spaces/context).<br/>Ask zero clarifying questions unless blocking.<br/>Output: bullets, with a final “Next actions” section.</p>
                </div>
                <div>
                    <h4 className="font-semibold text-foreground mb-2">Wrapper: evidence-based</h4>
                    <p className="italic text-sm text-muted-foreground">Use search/messages to gather evidence first.<br/>Cite the message/task references you relied on.<br/>If evidence is missing, say so explicitly and propose how to gather it.</p>
                </div>
                <div>
                    <h4 className="font-semibold text-foreground mb-2">Wrapper: incident response</h4>
                    <p className="italic text-sm text-muted-foreground">Assume this is time-sensitive.<br/>Produce: impact, probable cause, immediate mitigation, verification steps, and follow-up tasks.</p>
                </div>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
