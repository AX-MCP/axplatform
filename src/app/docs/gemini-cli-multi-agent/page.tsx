
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Terminal } from "lucide-react";

export default function GeminiCliMultiAgentPage() {
  return (
    <div className="container py-20 md:py-24">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            Guide: Setting Up Multiple Agents and Sub-Agents in Gemini CLI
          </h1>
          <p className="text-lg text-muted-foreground">
            This guide explains how to configure and manage multiple agents and sub-agents using <strong>Gemini CLI</strong>.
          </p>
        </header>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">Prerequisites</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground">
            <ul className="list-disc list-inside space-y-2">
              <li>Installed and configured <strong>Gemini CLI</strong></li>
              <li>Valid API key or authentication credentials</li>
              <li>Node.js v18+ or Python 3.10+ (depending on setup)</li>
              <li>Access to the workspace or project where the agents will run</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">1. Setting Up the Gemini CLI</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-lg text-muted-foreground">
            <div>
              <h3 className="font-semibold text-foreground mb-2">1. Install Gemini CLI:</h3>
              <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto"><code>npm install -g @google/gemini-cli</code></pre>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">2. Authenticate:</h3>
              <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto"><code>gemini auth login</code></pre>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">3. Initialize your project:</h3>
              <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto"><code>gemini init my-multi-agent-project</code></pre>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">2. Creating Multiple Agents</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-lg text-muted-foreground">
            <p>Gemini allows multiple agent definitions within one workspace.</p>
            <div>
              <h3 className="font-semibold text-foreground mb-2">1. Create your first agent:</h3>
              <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto"><code>gemini agent create --name main-agent --model gemini-1.5-pro</code></pre>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">2. Add another agent:</h3>
              <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto"><code>gemini agent create --name assistant-agent --model gemini-1.5-flash</code></pre>
            </div>
             <div>
              <h3 className="font-semibold text-foreground mb-2">3. List all agents:</h3>
              <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto"><code>gemini agent list</code></pre>
            </div>
            <p>Each agent can have unique configuration parameters such as temperature, max tokens, and prompt templates.</p>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Example configuration file (`agents.yaml`):</h3>
              <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto"><code>
{`agents:
  - name: main-agent
    model: gemini-1.5-pro
    description: Primary reasoning agent
  - name: assistant-agent
    model: gemini-1.5-flash
    description: Quick-response helper`}
              </code></pre>
            </div>
          </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle className="text-2xl font-bold font-headline">3. Setting Up Sub-Agents</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-lg text-muted-foreground">
                <p>Sub-agents are child processes or specialized models under a parent agent.</p>
                 <div>
                  <h3 className="font-semibold text-foreground mb-2">1. Create a sub-agent:</h3>
                  <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto"><code>gemini agent create --name summarizer --parent main-agent --model gemini-1.5-mini</code></pre>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">2. Define sub-agent hierarchy in config:</h3>
                  <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto"><code>
{`agents:
     - name: main-agent
       subagents:
         - summarizer
         - retriever`}
                  </code></pre>
                </div>
                 <div>
                  <h3 className="font-semibold text-foreground mb-2">3. Invoke sub-agents programmatically:</h3>
                  <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto"><code>gemini agent run summarizer --input "Summarize this text..."</code></pre>
                </div>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle className="text-2xl font-bold font-headline">4. Managing Multi-Agent Workflows</CardTitle>
            </CardHeader>
            <CardContent className="text-lg text-muted-foreground">
                <p>You can orchestrate multiple agents using <code>gemini workflow</code> commands.</p>
                <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto mt-4"><code>
{`gemini workflow create --name multi-agent-demo
gemini workflow add-agent main-agent
gemini workflow add-agent assistant-agent
gemini workflow run --input "Plan a product launch with detailed steps."`}
                </code></pre>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle className="text-2xl font-bold font-headline">5. Debugging and Logs</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-lg text-muted-foreground">
                 <div>
                  <h3 className="font-semibold text-foreground mb-2">View all logs for your agents:</h3>
                  <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto"><code>gemini logs --agent main-agent</code></pre>
                </div>
                 <div>
                  <h3 className="font-semibold text-foreground mb-2">For real-time monitoring:</h3>
                  <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto"><code>gemini watch --agent assistant-agent</code></pre>
                </div>
            </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">6. Best Practices</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground">
            <ul className="list-disc list-inside space-y-2">
              <li>Use <strong>descriptive agent names</strong></li>
              <li>Keep sub-agents lightweight and single-purpose</li>
              <li>Manage credentials securely using environment variables</li>
              <li>Regularly update your CLI and API tokens</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-green-500/50 bg-green-900/20">
          <CardContent className="pt-6 text-center text-lg font-semibold text-green-400">
            ✅ You now have a multi-agent setup running in Gemini CLI!
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">7. Connect Each Agent to Its Own MCP Servers</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-lg text-muted-foreground">
            <p>
              Gemini CLI discovers MCP servers from <strong>settings.json</strong> files at different scopes. To give <em>each agent</em> its own isolated toolset, use <strong>project-scoped</strong> configs so each agent runs from its own project directory.
            </p>

            <div>
              <h3 className="text-xl font-semibold font-headline text-foreground mb-2">7.1 Scopes refresher</h3>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li><strong>User scope:</strong> <code>~/.gemini/settings.json</code> (applies to all projects)</li>
                <li><strong>Project scope:</strong> <code>./.gemini/settings.json</code> (applies only when you run <code>gemini</code> from this folder; <strong>recommended for per‑agent isolation</strong>)</li>
              </ul>
              <blockquote className="mt-2 border-l-2 pl-4 italic text-sm">
                Tools defined at the project scope override/augment user scope. Keep sensitive API keys in env vars, not in JSON.
              </blockquote>
            </div>

            <div>
              <h3 className="text-xl font-semibold font-headline text-foreground mb-2">7.2 Add MCP servers for <em>Agent A</em> (project A)</h3>
              <p>1) Create a project folder for the agent and init Gemini:</p>
              <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto mt-2"><code>mkdir -p ~/agents/agent-a/.gemini && cd ~/agents/agent-a</code></pre>
              <p className="mt-2">2) Add MCP servers to this project only:</p>
              <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto mt-2"><code>{`gemini mcp add --scope project --transport http github https://api.githubcopilot.com/mcp/
gemini mcp add --scope project --transport http sentry https://mcp.sentry.dev/mcp`}</code></pre>
              <p className="mt-2">3) Verify:</p>
              <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto mt-2"><code>gemini mcp list</code></pre>
              <p className="mt-2">This writes entries under <code>./.gemini/settings.json` → `{"mcpServers": { ... }}`</code>.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold font-headline text-foreground mb-2">7.3 Add different MCP servers for <em>Agent B</em> (project B)</h3>
              <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto mt-2"><code>{`mkdir -p ~/agents/agent-b/.gemini && cd ~/agents/agent-b
# Different toolset than Agent A
gemini mcp add --scope project --transport sse notion https://mcp.notion.com/mcp
gemini mcp add --scope project --transport http linear https://mcp.linear.app/sse`}</code></pre>
            </div>

            <div>
              <h3 className="text-xl font-semibold font-headline text-foreground mb-2">7.4 Restrict tool visibility per agent (allowlist/denylist)</h3>
              <p>Within each project’s <code>./.gemini/settings.json</code>, you can scope which tools from a server are exposed via <code>includeTools</code>/<code>excludeTools</code>.</p>
              <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto mt-2"><code>
{`{
  "mcpServers": {
    "github": {
      "url": "https://api.githubcopilot.com/mcp/",
      "includeTools": ["list_pull_requests", "create_issue"],
      "excludeTools": ["delete_repo"],
      "trust": false
    }
  }
}`}
              </code></pre>
              <blockquote className="mt-2 border-l-2 pl-4 italic text-sm">
                Use `trust: false` for explicit confirmation on tool calls; set to `true` only for well‑audited servers.
              </blockquote>
            </div>

            <div>
              <h3 className="text-xl font-semibold font-headline text-foreground mb-2">7.5 Per‑agent secrets</h3>
              <p>Set env vars per project so only that agent can use them:</p>
              <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto mt-2"><code>
{`# In ~/agents/agent-a/.env
GITHUB_TOKEN=ghp_xxx
SENTRY_AUTH_TOKEN=sntr_xxx

# In ~/agents/agent-b/.env
NOTION_TOKEN=secret_xxx
LINEAR_API_KEY=lin_xxx`}
              </code></pre>
              <p className="mt-2">Reference them from `settings.json`:</p>
              <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto mt-2"><code>
{`{
  "mcpServers": {
    "github": {
      "headers": { "Authorization": "Bearer \${GITHUB_TOKEN}" }
    }
  }
}`}
              </code></pre>
            </div>

            <div>
              <h3 className="text-xl font-semibold font-headline text-foreground mb-2">7.6 Running agents with isolated MCP toolsets</h3>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li>Start each agent from its own project directory (so it picks up that project’s <code>./.gemini/settings.json</code>).</li>
                <li>If you orchestrate multiple agents, start each in a separate process with its project cwd.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold font-headline text-foreground mb-2">7.7 Sub‑agents and MCP tools</h3>
              <p>Sub‑agents inherit the main process’ discovered tools. To constrain a sub‑agent, keep the parent project’s allowlist tight, or run sub‑agents in their own project/context if you need hard isolation.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold font-headline text-foreground mb-2">7.8 OAuth‑protected servers</h3>
              <p>When adding an HTTP/SSE server that requires OAuth, Gemini will detect 401s and walk you through browser sign‑in. Ensure your machine can open a browser and receive redirects on `http://localhost:7777/oauth/callback`.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold font-headline text-foreground mb-2">Quick commands</h3>
              <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto mt-2"><code>
{`# Add a local stdio server with env
gemini mcp add --scope project my-local python server.py --port 8080 -e API_KEY=$MY_KEY

# Remove a server from the current project
gemini mcp remove my-local`}
              </code></pre>
            </div>

          </CardContent>
        </Card>

      </div>
    </div>
  );
}
