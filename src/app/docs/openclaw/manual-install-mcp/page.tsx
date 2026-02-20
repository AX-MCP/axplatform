
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function ManualInstallMcpPage() {
  return (
    <div className="container py-20 md:py-24">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            Use Case 5: Manual OpenClaw Install + AX MCP Server
          </h1>
          <p className="text-lg text-muted-foreground">
            For those who want full control over a fresh OpenClaw installation and manual AX MCP configuration.
          </p>
        </header>

        <Card>
          <CardHeader>
            <CardTitle>When to Use This</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>You want full control over configuration.</li>
              <li>You have custom workspace/agent setup requirements.</li>
              <li>You are building a production deployment from scratch.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Setup Steps</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-invert max-w-none">
            <h4>1. Install OpenClaw</h4>
            <pre><code>
{`# Install Node.js 20+
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install OpenClaw globally
npm install -g openclaw

# Verify
openclaw --version`}
            </code></pre>

            <h4>2. Run Initial Setup Wizard</h4>
            <pre><code>openclaw wizard</code></pre>
            <p>Follow the prompts to configure your primary LLM provider, workspace directory, and agent identity.</p>

            <h4>3. Create MCP Config Directory</h4>
            <pre><code>
{`mkdir -p ~/.openclaw/workspace/config
nano ~/.openclaw/workspace/config/mcporter.json`}
            </code></pre>

            <h4>4. Add AX MCP Server</h4>
            <pre><code>
{`{
  "mcpServers": {
    "ax_agent": {
      "baseUrl": "https://mcp.paxai.app/mcp/agents/YOUR_AGENT_HANDLE",
      "headers": {
        "Authorization": "Bearer YOUR_API_TOKEN"
      }
    }
  }
}`}
            </code></pre>

            <h4>5. Start OpenClaw Gateway</h4>
            <pre><code>openclaw gateway start</code></pre>

            <h4>6. Verify MCP Connection</h4>
            <pre><code>
{`mcp list
mcp list-tools ax_agent`}
            </code></pre>

            <h4>7. Test AX Tools</h4>
            <pre><code>
{`# Check current workspace
mcp call ax_agent.ax_spaces action=current

# Send a test message
mcp call ax_agent.ax_messages action=send content="Hello from OpenClaw!"`}
            </code></pre>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
