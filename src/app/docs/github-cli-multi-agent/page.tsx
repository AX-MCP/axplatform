
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

export default function GithubCliMultiAgentPage() {
  return (
    <div className="container py-20 md:py-24">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            Guide: Multi-“Agent” Setups with GitHub Copilot CLI
          </h1>
          <p className="text-lg text-muted-foreground">and per-agent MCP servers</p>
        </header>

        <Card className="bg-destructive/10 border-destructive/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-destructive">
              <AlertTriangle className="h-5 w-5" />
              Reality Check (as of Oct 13, 2025)
            </CardTitle>
          </CardHeader>
          <CardContent className="text-destructive/90">
            <p>
              GitHub Copilot <strong>CLI</strong> does not expose a native “multiple agents” or “sub-agents” feature. You *can* approximate multi-agent workflows by isolating Copilot CLI sessions (per project/terminal) and giving each session its <strong>own MCP server config</strong> and instructions. This guide shows practical patterns to do that safely.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">0. What you’ll need</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-4">
            <ul className="list-disc list-inside space-y-2">
              <li><strong>GitHub Copilot CLI</strong> (Public Preview) installed and enabled for your plan.</li>
              <li>A GitHub account signed in via <code>copilot</code> → <code>/login</code>.</li>
              <li>Optional: <code>tmux</code> or multiple terminal windows for concurrent “agents”.</li>
            </ul>
            <h3 className="font-semibold text-foreground pt-4">References</h3>
            <ul className="list-disc list-inside space-y-2">
                <li>Install & use Copilot CLI; slash commands; MCP config path.</li>
                <li>Extending Copilot with MCP; where configs live and examples.</li>
                <li>Coding agent + MCP limitations (tools only; OAuth caveats).</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">1. Install and start Copilot CLI</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-4">
            <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto"><code>
{`# Install (see official instructions for your OS)
# Then in a repo (or a new empty folder) start Copilot CLI:
copilot
# If prompted, /login and trust the folder for the session`}
            </code></pre>
            <ul className="list-disc list-inside space-y-2">
              <li>Resume a previous session: <code>copilot --resume</code></li>
              <li>Trust & directory management: <code>/add-dir /path/to/dir</code>, change cwd with <code>/cwd /path/to/dir</code>.</li>
              <li>In-session help: <code>?</code> or <code>copilot help</code>.</li>
            </ul>
             <blockquote className="border-l-2 pl-4 italic text-sm">
                📌 The CLI is agentic and can read/modify/execute files; you must approve tools when prompted.
            </blockquote>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">2. Pattern A — Per‑“Agent” via separate working directories</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-4">
            <p>Create a folder for each “agent” and keep its config + instructions inside it.</p>
            <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto"><code>
{`mkdir -p ~/agents/repo-a ~/agents/repo-b
cd ~/agents/repo-a && git init
cd ~/agents/repo-b && git init`}
            </code></pre>
            <p>Start <strong>one Copilot CLI session per folder</strong> (separate terminals). Each session will keep its <strong>own MCP configuration</strong> and instruction files.</p>
            <h3 className="font-semibold text-xl text-foreground pt-4">2.1 Per‑agent instructions</h3>
            <p>Put guidance in the repo so it’s auto-included by the CLI:</p>
            <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto"><code>
{`./.github/copilot-instructions.md
./.github/copilot-instructions/security.instructions.md
AGENTS.md`}
            </code></pre>
            <p>Examples for two different “agents”:</p>
            <strong>Repo A (<code>AGENTS.md</code> excerpt)</strong>
            <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto"><code>
{`# Agent: Release Manager
Scope: versioning, changelog, tagging, GH releases.
Principles: least-privilege; draft PRs; never push to main.`}
            </code></pre>
             <strong>Repo B (<code>AGENTS.md</code> excerpt)</strong>
            <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto"><code>
{`# Agent: Infra Maintainer
Scope: IaC changes, CI/CD updates, dependency bumps.
Principles: propose changes in branches; run tests; require approvals.`}
            </code></pre>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">3. Pattern B — Per‑“Agent” via separate config homes</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-4">
             <p>If you prefer to keep multiple “agents” in the <em>same</em> folder (or want hard separation), run each session with its own <strong>config directory</strong>, so each has an isolated <strong><code>mcp-config.json</code></strong> and <strong><code>config.json</code></strong>:</p>
            <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto"><code>
{`# Agent A
XDG_CONFIG_HOME=~/.config/agentA copilot

# Agent B
XDG_CONFIG_HOME=~/.config/agentB copilot`}
            </code></pre>
            <p>This creates/uses different config files (including MCP). Handy for switching “roles” without changing the repo.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">4. Add different MCP servers to each “agent”</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-4">
            <p>Inside each session, use the slash command to add servers. The CLI stores them in <strong><code>mcp-config.json</code></strong> under the active config home.</p>
            <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto"><code>
{`/mcp add
# Fill in: server name, command or URL (HTTP/SSE if supported), args, env, etc.
# Press Ctrl+S to save.`}
            </code></pre>
            <ul className="list-disc list-inside space-y-2">
                <li>Default path: <strong><code>${XDG_CONFIG_HOME:-~/.config}/mcp-config.json</code></strong>.</li>
                <li>List/inspect via <code>/mcp</code>; remove/update via the same UI.</li>
                <li>The GitHub MCP Server is preconfigured to act on GitHub (PRs, merges) from the CLI.</li>
            </ul>
             <h3 className="font-semibold text-xl text-foreground pt-4">Example: Two “agents” with different toolsets</h3>
            <p><strong>Agent A (Release Manager)</strong> — add GitHub + Fetch</p>
            <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto"><code>
{`/mcp add
name: github
type: builtin (preconfigured)

/mcp add
name: fetch
command: uvx
args: mcp-server-fetch`}
            </code></pre>
            <p><strong>Agent B (Infra Maintainer)</strong> — add Linear + Notion (SSE/HTTP examples; adjust per server docs)</p>
            <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto"><code>
{`/mcp add
name: linear
type: sse
url: https://mcp.linear.app/sse
env: LINEAR_API_KEY=$\{LINEAR_API_KEY}

/mcp add
name: notion
type: http
url: https://mcp.notion.com/mcp
headers: Authorization=Bearer $\{NOTION_TOKEN}`}
            </code></pre>
             <blockquote className="border-l-2 pl-4 italic text-sm">
                Keep secrets in your shell env when you launch the session, e.g.
                <br/>
                <code>LINEAR_API_KEY=lin_xxx NOTION_TOKEN=secret_xxx XDG_CONFIG_HOME=~/.config/agentB copilot</code>
            </blockquote>
             <h3 className="font-semibold text-xl text-foreground pt-4">Where the config lives (CLI‑managed)</h3>
             <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto"><code>
{`// ~/.config/mcp-config.json  (or under your XDG_CONFIG_HOME override)
{
  "servers": {
    "fetch":  { "command": "uvx", "args": ["mcp-server-fetch"] },
    "linear": { "type": "sse", "url": "https://mcp.linear.app/sse" },
    "notion": { "type": "http", "url": "https://mcp.notion.com/mcp" }
  }
}`}
            </code></pre>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">5. Emulating sub‑agents (task‑scoped roles)</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-4">
            <p>Until sub‑agents are available in the CLI, emulate them by splitting responsibilities:</p>
            <ul className="list-disc list-inside space-y-2">
                <li><strong>Shell orchestration:</strong> run multiple terminals (or <code>tmux</code> windows), one per role.</li>
                <li><strong>Prompt files:</strong> keep role prompts in <code>prompts/</code> and paste or reference them.</li>
                <li><strong>Task hand‑offs:</strong> ask Agent A to produce a branch/PR; ask Agent B to review and patch.</li>
                <li><strong>Policy files:</strong> codify rules in <code>.github/copilot-instructions/**/*.instructions.md</code> for least‑privilege workflows.</li>
            </ul>
             <blockquote className="border-l-2 pl-4 italic text-sm">
                Note: The Copilot <strong>coding agent</strong> currently supports <strong>MCP tools</strong> only (no MCP resources/prompts) and has limitations with some <strong>OAuth</strong> remote MCP servers. Choose token‑based or local servers when possible.
            </blockquote>
          </CardContent>
        </Card>

        <Card>
            <CardHeader><CardTitle className="text-2xl font-bold font-headline">6. Security & governance tips</CardTitle></CardHeader>
            <CardContent className="text-lg text-muted-foreground space-y-2">
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>Least‑privilege MCP:</strong> Only add the servers each role truly needs; favor local/stdio servers you control.</li>
                    <li><strong>Human approvals:</strong> Keep command approvals on; avoid blanket approval for destructive tools.</li>
                    <li><strong>Org policy:</strong> Enterprises can allow/deny MCP usage via admin policy.</li>
                    <li><strong>Auditability:</strong> Keep sessions tied to branches and PRs; avoid running as root.</li>
                    <li><strong>Secrets:</strong> Inject per‑session env vars; do not hardcode tokens in <code>mcp-config.json</code>.</li>
                </ul>
            </CardContent>
        </Card>

        <Card>
            <CardHeader><CardTitle className="text-2xl font-bold font-headline">7. Quick recipes</CardTitle></CardHeader>
            <CardContent className="text-lg text-muted-foreground space-y-4">
                <h3 className="font-semibold text-xl text-foreground">7.1 Two isolated agents using config homes</h3>
                <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto"><code>
{`# Terminal 1
export XDG_CONFIG_HOME=~/.config/agentA
export RELEASE_NOTES_TOKEN=...
copilot   # add: github, fetch

# Terminal 2
export XDG_CONFIG_HOME=~/.config/agentB
export LINEAR_API_KEY=... NOTION_TOKEN=...
copilot   # add: linear, notion`}
                </code></pre>
                 <h3 className="font-semibold text-xl text-foreground pt-4">7.2 Repo‑scoped roles with instructions</h3>
                 <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto"><code>
{`repo/
  .github/copilot-instructions.md
  .github/copilot-instructions/release.instructions.md
  .github/copilot-instructions/infra.instructions.md
  AGENTS.md`}
                </code></pre>
            </CardContent>
        </Card>

        <Card>
            <CardHeader><CardTitle className="text-2xl font-bold font-headline">8. Troubleshooting</CardTitle></CardHeader>
            <CardContent className="text-lg text-muted-foreground space-y-2">
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>“Where is my MCP file?”</strong> <code>$\{XDG_CONFIG_HOME:-~/.config}/mcp-config.json</code>.</li>
                    <li><strong>Server won’t start?</strong> Ensure command/URL is reachable and required env vars are set <strong>in the same shell</strong> before launching <code>copilot</code>.</li>
                    <li><strong>OAuth server blocked?</strong> Some remote MCP servers with OAuth aren’t supported by the coding agent—prefer tokens or local servers.</li>
                    <li><strong>Org disabled MCP?</strong> Ask an admin to enable “MCP servers in Copilot” policy.</li>
                </ul>
            </CardContent>
        </Card>

        <Card>
            <CardHeader><CardTitle className="text-2xl font-bold font-headline">9. Handy commands</CardTitle></CardHeader>
            <CardContent className="text-lg text-muted-foreground space-y-2">
                 <ul className="list-disc list-inside space-y-2">
                    <li>Start: <code>copilot</code> (resume: <code>--resume</code>)</li>
                    <li>Add MCP server: <code>/mcp add</code></li>
                    <li>Usage stats: <code>/usage</code></li>
                    <li>Help: <code>?</code>, <code>copilot help</code>, <code>copilot help config</code>, <code>copilot help permissions</code></li>
                </ul>
            </CardContent>
        </Card>
        
        <Card>
            <CardContent className="pt-6 text-sm italic text-muted-foreground">
                 <p>_This guide mirrors the workflow patterns you used for Gemini CLI and Claude Code, adapted to the realities of GitHub Copilot CLI today._</p>
            </CardContent>
        </Card>

      </div>
    </div>
  );
}
