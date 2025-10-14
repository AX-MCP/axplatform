
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Terminal } from "lucide-react";

export default function ClaudeCodeMultiAgentPage() {
  return (
    <div className="container py-20 md:py-24">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            Guide: Setting Up Multiple Agents and Sub-Agents in Claude Code
          </h1>
          <p className="text-lg text-muted-foreground">
            This guide covers how to configure and manage multiple agents and sub-agents using <strong>Claude Code CLI</strong> (Anthropic).
          </p>
        </header>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">Prerequisites</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground">
            <ul className="list-disc list-inside space-y-2">
              <li>Installed <strong>Claude Code CLI</strong></li>
              <li>Anthropic API key configured (<code>CLAUDE_API_KEY</code>)</li>
              <li>Node.js v18+ or Python 3.10+</li>
              <li>Access to your Claude workspace</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">1. Setting Up the Claude CLI</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-lg text-muted-foreground">
            <div>
              <h3 className="font-semibold text-foreground mb-2">1. Install the CLI tool:</h3>
              <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto"><code>npm install -g @anthropic-ai/claude-cli</code></pre>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">2. Authenticate:</h3>
              <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto"><code>claude login</code></pre>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">3. Initialize your project:</h3>
              <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto"><code>claude init multi-agent-demo</code></pre>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">2. Creating Multiple Agents</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-lg text-muted-foreground">
            <p>Claude allows defining multiple agents in a single workspace.</p>
            <div>
              <h3 className="font-semibold text-foreground mb-2">1. Create the main agent:</h3>
              <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto"><code>claude agent create --name main-agent --model claude-3-opus</code></pre>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">2. Add supporting agents:</h3>
              <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto"><code>claude agent create --name assistant-agent --model claude-3-sonnet</code></pre>
            </div>
             <div>
              <h3 className="font-semibold text-foreground mb-2">3. List all agents:</h3>
              <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto"><code>claude agent list</code></pre>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Example configuration (<code>agents.json</code>):</h3>
              <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto"><code>
{`{
  "agents": [
    {
      "name": "main-agent",
      "model": "claude-3-opus",
      "description": "Handles main orchestration"
    },
    {
      "name": "assistant-agent",
      "model": "claude-3-sonnet",
      "description": "Assists with summarization tasks"
    }
  ]
}`}
              </code></pre>
            </div>
          </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle className="text-2xl font-bold font-headline">3. Setting Up Sub-Agents</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-lg text-muted-foreground">
                <p>Sub-agents are child entities under a parent agent.</p>
                 <div>
                  <h3 className="font-semibold text-foreground mb-2">1. Create a sub-agent:</h3>
                  <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto"><code>claude agent create --name summarizer --parent main-agent --model claude-3-haiku</code></pre>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">2. Define hierarchy in configuration:</h3>
                  <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto"><code>
{`{
 "main-agent": {
   "subagents": ["summarizer", "retriever"]
 }
}`}
                  </code></pre>
                </div>
                 <div>
                  <h3 className="font-semibold text-foreground mb-2">3. Invoke sub-agents programmatically:</h3>
                  <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto"><code>claude agent run summarizer --input "Summarize this report"</code></pre>
                </div>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle className="text-2xl font-bold font-headline">4. Managing Multi-Agent Workflows</CardTitle>
            </CardHeader>
            <CardContent className="text-lg text-muted-foreground">
                <p>Claude supports workflow orchestration through the CLI:</p>
                <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto mt-4"><code>
{`claude workflow create --name team-orchestration
claude workflow add-agent main-agent
claude workflow add-agent assistant-agent
claude workflow run --input "Develop a launch plan for Q4."`}
                </code></pre>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle className="text-2xl font-bold font-headline">5. Monitoring and Logs</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-lg text-muted-foreground">
                 <div>
                  <h3 className="font-semibold text-foreground mb-2">To view logs for a specific agent:</h3>
                  <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto"><code>claude logs --agent main-agent</code></pre>
                </div>
                 <div>
                  <h3 className="font-semibold text-foreground mb-2">For real-time monitoring:</h3>
                  <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto"><code>claude watch --agent assistant-agent</code></pre>
                </div>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle className="text-2xl font-bold font-headline">6. Best Practices</CardTitle>
            </CardHeader>
            <CardContent className="text-lg text-muted-foreground">
                 <ul className="list-disc list-inside space-y-2">
                    <li>Use <strong>distinct agent roles</strong> to separate tasks</li>
                    <li>Keep sub-agents lightweight (e.g., summarization, retrieval)</li>
                    <li>Secure API keys using environment variables</li>
                    <li>Regularly sync CLI and dependencies</li>
                </ul>
            </CardContent>
        </Card>

        <Card className="border-green-500/50 bg-green-900/20">
            <CardContent className="pt-6 text-center text-lg font-semibold text-green-400">
                ✅ You now have a multi-agent and sub-agent setup running with Claude Code!
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle className="text-2xl font-bold font-headline">7. Connect Each Agent/Sub-Agent to Its Own MCP Servers</CardTitle>
            </CardHeader>
            <CardContent className="text-lg text-muted-foreground space-y-4">
                <p>Claude Code supports MCP servers at <strong>local</strong>, <strong>project</strong>, and <strong>user</strong> scopes via <code>.mcp.json</code>. To give each agent its own toolset, prefer <strong>project-scoped</strong> <code>.mcp.json</code> kept alongside that agent’s files.</p>
                
                <h3 className="font-semibold text-xl text-foreground pt-4">7.1 Scopes Refresher</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Local scope (per-project, private):</strong> default when you run <code>claude mcp add</code> → stored under your project user settings</li>
                  <li><strong>Project scope (shared):</strong> <code>.mcp.json</code> in the repo root (checked in) — use <code>--scope project</code></li>
                  <li><strong>User scope:</strong> applies across all projects — use <code>--scope user</code></li>
                </ul>

                <h3 className="font-semibold text-xl text-foreground pt-4">7.2 Project A (main agent + its sub-agents)</h3>
                <p>1) Create a project for Agent A and initialize:</p>
                 <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto"><code>mkdir -p ~/agents/agent-a && cd ~/agents/agent-a</code></pre>
                <p>2) Add MCP servers only for this project:</p>
                <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto"><code>{`claude mcp add --scope project --transport http github https://api.githubcopilot.com/mcp/
claude mcp add --scope project --transport http sentry https://mcp.sentry.dev/mcp`}</code></pre>
                 <p>This creates/updates <code>./.mcp.json</code>:</p>
                <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto"><code>
{`{
  "mcpServers": {
    "github": { "type": "http", "url": "https://api.githubcopilot.com/mcp/" },
    "sentry": { "type": "http", "url": "https://mcp.sentry.dev/mcp" }
  }
}`}
                </code></pre>
                <p>3) Grant sub-agents specific MCP tools. Create <code>.claude/agents/code-reviewer.md</code>:</p>
                <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto"><code>
{`---
name: code-reviewer
description: Expert reviewer. Use proactively after code changes.
tools: Read, Grep, Glob, Bash, github.list_pull_requests
model: sonnet
---
Focus on review quality and security. Prefer least-privilege MCP calls.`}
                </code></pre>
                <p>If <code>tools</code> is omitted, the sub-agent inherits <strong>all</strong> available tools (including MCP). Specify explicit tools for least-privilege.</p>


                <h3 className="font-semibold text-xl text-foreground pt-4">7.3 Project B (a different agent with different MCP servers)</h3>
                 <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto"><code>{`mkdir -p ~/agents/agent-b && cd ~/agents/agent-b
claude mcp add --scope project --transport http notion https://mcp.notion.com/mcp
claude mcp add --scope project --transport sse linear https://mcp.linear.app/sse`}</code></pre>
                
                <h3 className="font-semibold text-xl text-foreground pt-4">7.4 Lock Down Tool Visibility Per Server</h3>
                 <p>Use allow/deny lists in <code>.mcp.json</code>:</p>
                <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto"><code>
{`{
  "mcpServers": {
    "github": {
      "type": "http",
      "url": "https://api.githubcopilot.com/mcp/",
      "includeTools": ["list_pull_requests", "create_issue"],
      "excludeTools": ["delete_repo"],
      "trust": false
    }
  }
}`}
                </code></pre>
                <p>Keep <code>trust: false</code> for confirmation prompts; raise only for known-safe servers.</p>


                <h3 className="font-semibold text-xl text-foreground pt-4">7.5 Secrets Per Agent</h3>
                <p>Store tokens as env vars loaded by your shell or <code>.env</code> files, and expand in <code>.mcp.json</code>:</p>
                <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto"><code>
{`{
  "mcpServers": {
    "notion": {
      "type": "http",
      "url": "https://mcp.notion.com/mcp",
      "headers": { "Authorization": "Bearer \${NOTION_TOKEN}" }
    }
  }
}`}
                </code></pre>

                <h3 className="font-semibold text-xl text-foreground pt-4">7.6 Authenticate & Inspect</h3>
                <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto"><code>
# Authenticate servers that require OAuth
/mcp  # then pick the server → Authenticate

# See what’s installed (including plugin-provided MCP servers)
/mcp
                </code></pre>

                <h3 className="font-semibold text-xl text-foreground pt-4">7.7 Running Multiple Agents Concurrently</h3>
                <ul className="list-disc list-inside space-y-2">
                    <li>Start each agent from its own project root so it reads that project’s <code>.mcp.json</code> and <code>.claude/agents/</code>.</li>
                    <li>For concurrency, launch separate shells or processes per project so each one keeps its own MCP connections.</li>
                </ul>

                <h3 className="font-semibold text-xl text-foreground pt-4">7.8 Import from Claude Desktop</h3>
                <p>If you already configured MCP in Claude Desktop, you can import those servers into Claude Code via the docs’ import flow. Keep only the servers needed by each agent; remove others to maintain least-privilege.</p>

                <h3 className="font-semibold text-xl text-foreground pt-4">7.9 Output and Resource Limits</h3>
                <p>Claude warns when MCP tool output is large; tune via env (e.g., <code>MAX_MCP_OUTPUT_TOKENS</code>).</p>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
