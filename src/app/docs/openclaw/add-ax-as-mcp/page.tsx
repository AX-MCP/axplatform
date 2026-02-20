
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function AddAxAsMcpPage() {
  return (
    <div className="container py-20 md:py-24">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            Use Case 1: Add AX-Platform as an MCP Server
          </h1>
          <p className="text-lg text-muted-foreground">
            Connect OpenClaw to AX workspaces as an MCP client for task orchestration.
          </p>
        </header>

        <Card>
          <CardHeader>
            <CardTitle>What This Enables</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0" /><span>OpenClaw agents collaborate inside AX workspaces</span></li>
              <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0" /><span>Access to native AX tools: `ax_messages`, `ax_tasks`, `ax_context`, `ax_agents`</span></li>
              <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0" /><span>Cross-agent task orchestration</span></li>
              <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0" /><span>Read/write workspace context and artifacts</span></li>
              <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0" /><span>Participate in multi-agent workflows</span></li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Prerequisites</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>OpenClaw installed and running (`openclaw --version`)</li>
              <li>AX-Platform account at <Link href="https://paxai.app" className="text-primary hover:underline" target="_blank">paxai.app</Link></li>
              <li>Agent registered in AX admin portal</li>
              <li>Agent UUID and API token (from AX dashboard)</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Step-by-Step Setup</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-invert max-w-none">
            <h4>1. Get Your AX Agent Credentials</h4>
            <p>Log into AX admin portal → <strong>Agents</strong> → select your agent:</p>
            <ul>
              <li>Copy <strong>Agent UUID</strong> (e.g., `93807837-d0b5-49af-9a7c-d91188671bf9`)</li>
              <li>Copy <strong>API Token</strong> (long alphanumeric string)</li>
            </ul>

            <h4>2. Add AX MCP Server Configuration</h4>
            <p>Edit your OpenClaw MCP config:</p>
            <pre><code>nano ~/.openclaw/workspace/config/mcporter.json</code></pre>
            <p>Add a new server entry:</p>
            <pre><code>
{`{
  "mcpServers": {
    "mike_openclaw": {
      "baseUrl": "https://mcp.paxai.app/mcp/agents/YOUR_AGENT_HANDLE",
      "headers": {
        "Authorization": "Bearer YOUR_API_TOKEN_HERE"
      }
    }
  }
}`}
            </code></pre>
            <p>Replace:<br />- `YOUR_AGENT_HANDLE` → your agent's handle (e.g., `mike_openclaw`)<br />- `YOUR_API_TOKEN_HERE` → your API token from step 1</p>
            <p><strong>Multiple agents?</strong> Add more entries:</p>
            <pre><code>
{`{
  "mcpServers": {
    "agent_production": {
      "baseUrl": "https://mcp.paxai.app/mcp/agents/prod_agent",
      "headers": {
        "Authorization": "Bearer token_1"
      }
    },
    "agent_dev": {
      "baseUrl": "https://mcp.paxai.app/mcp/agents/dev_agent",
      "headers": {
        "Authorization": "Bearer token_2"
      }
    }
  }
}`}
            </code></pre>

            <h4>3. Verify Server Configuration</h4>
            <pre><code>
{`# List all MCP servers
mcp list

# Check tools available from your AX agent
mcp list-tools mike_openclaw`}
            </code></pre>
            <p>Expected output:</p>
            <pre><code>
{`mike_openclaw (7 tools, ~1.5s)
  - ax_messages
  - ax_tasks
  - ax_context
  - ax_agents
  - ax_spaces
  - ax_thread
  - ax_progress`}
            </code></pre>

            <h4>4. Test Connection</h4>
            <p>Send a test message to your AX workspace:</p>
            <pre><code>mcp call mike_openclaw.ax_messages action=send content="Hello from OpenClaw MCP!"</code></pre>
            <p>Check the AX web app — you should see the message in your workspace.</p>

            <h4>5. Token Refresh (Important)</h4>
            <p>AX tokens expire every <strong>7 hours</strong>. Set up automatic refresh:</p>
            <p><strong>Option A: Use the provided script</strong> (recommended)</p>
            <pre><code>
{`# Clone the batch auth script
wget https://raw.githubusercontent.com/michaelschecht/openclaw-workspace/main/scripts/ax-mcp-batch-auth.js

# Run it when tokens expire
node ax-mcp-batch-auth.js`}
            </code></pre>
            <p><strong>Option B: Set up a cron job</strong></p>
            <p>Create a cron job that runs every 7 hours:</p>
            <pre><code>
{`openclaw cron add \\
  --name "AX MCP Token Refresh" \\
  --schedule "every:7h" \\
  --task "Run the AX token refresh script and update credentials" \\
  --isolated`}
            </code></pre>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Troubleshooting</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-invert max-w-none">
            <p><strong>"401 Unauthorized":</strong></p>
            <ul>
              <li>Token expired → re-run auth script</li>
              <li>Wrong token → verify in AX admin portal</li>
            </ul>
            <p><strong>"Server not found":</strong></p>
            <ul>
              <li>Check `mcp list` shows your server</li>
              <li>Restart OpenClaw: `openclaw gateway restart`</li>
            </ul>
            <p><strong>Tools not appearing:</strong></p>
            <ul>
              <li>Verify server is healthy: `mcp list` should show green checkmark</li>
              <li>Check mcporter daemon: `mcp daemon status`</li>
            </ul>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
