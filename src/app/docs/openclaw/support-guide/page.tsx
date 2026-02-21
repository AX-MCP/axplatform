
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { LifeBuoy, Book, Code } from "lucide-react";

const CodeBlock = ({ children }: { children: React.ReactNode }) => (
  <pre className="bg-secondary p-4 rounded-md text-sm my-2 overflow-x-auto text-left">
    <code>{children}</code>
  </pre>
);

const JSCodeBlock = ({ children }: { children: React.ReactNode }) => (
    <pre className="bg-secondary p-4 rounded-md text-sm my-2 overflow-x-auto text-left">
      <code className="language-javascript">{children}</code>
    </pre>
  );

export default function OpenClawSupportGuidePage() {
  return (
    <div className="container py-20 md:py-24">
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            OpenClaw Integration Support Guide
          </h1>
          <p className="text-lg text-muted-foreground">
            A consolidated guide for setting up MCPorter, configuring agents, handling authentication, and troubleshooting your OpenClaw and AX-Platform integration.
          </p>
        </header>

        {/* README Section */}
        <Card id="overview">
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">Overview & User Guides</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-invert max-w-none">
            <p>Welcome! These guides help you connect your aX Platform agents to MCP-compatible applications using <code>mcporter</code>.</p>
            <p><strong>🤖 Have OpenClaw?</strong> All guides include automation prompts to let OpenClaw handle the setup for you!</p>
            <hr />
            <h3 className="flex items-center gap-2"><Book className="h-5 w-5"/>Available Guides</h3>
            <h4>1. <Link href="#mcporter-setup" className="text-primary hover:underline">mcporter Setup Guide</Link></h4>
            <p><strong>Start here if you're new to MCP or mcporter.</strong></p>
            <p>Learn how to:</p>
            <ul>
              <li>Install and configure mcporter (automated or manual)</li>
              <li>Add aX Platform agents as MCP servers</li>
              <li>Authenticate using OAuth device flow</li>
              <li>Connect to Claude Desktop, Cline, Continue.dev, and other MCP clients</li>
              <li>Troubleshoot common issues</li>
            </ul>
            <p><strong>Time:</strong></p>
            <ul>
                <li>🤖 With OpenClaw: ~3 minutes (just approve in browser)</li>
                <li>📝 Manual: ~10 minutes for your first agent</li>
            </ul>
            <hr/>
            <h4>2. <Link href="#batch-authentication" className="text-primary hover:underline">Batch Authentication Guide</Link></h4>
            <p><strong>For users managing multiple aX Platform agents.</strong></p>
            <p>Get a <strong>batch authentication script</strong> that:</p>
            <ul>
                <li>Authenticates all your agents at once</li>
                <li>Reduces re-auth time from 12+ minutes to ~30 seconds</li>
                <li>Automatically updates credentials and restarts mcporter</li>
            </ul>
             <p><strong>Time:</strong></p>
            <ul>
                <li>🤖 With OpenClaw: ~30 seconds (one prompt + approve tabs)</li>
                <li>📝 Manual: ~30 seconds to re-authenticate 4+ agents</li>
            </ul>
            <hr/>
            <h4>3. <Link href="#quick-reference" className="text-primary hover:underline">Quick Reference</Link></h4>
            <p><strong>Cheat sheet for common operations.</strong></p>
            <p>Includes OpenClaw prompts and manual commands for:</p>
            <ul>
                <li>Common mcporter operations</li>
                <li>Troubleshooting steps</li>
                <li>Client configuration snippets</li>
            </ul>
             <hr/>
            <h3>🚀 Quick Start</h3>
            <h4>Have OpenClaw? (Fastest) 🤖</h4>
            <p>Simply ask OpenClaw:</p>
            <CodeBlock>
{`Set up my aX Platform agent as an MCP server:
- Agent name: my-assistant
- MCP URL: https://mcp.paxai.app/mcp/agents/my-assistant
- Target client: Claude Desktop

Install mcporter if needed, configure OAuth, and set it up end-to-end.`}
            </CodeBlock>
            <p>OpenClaw will handle everything except clicking "Approve" in your browser.</p>
          </CardContent>
        </Card>

        {/* MCPorter Setup Guide Section */}
        <Card id="mcporter-setup">
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">MCPorter Setup Guide</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-invert max-w-none">
            <p>This guide walks you through connecting your aX Platform agents to MCP-compatible applications using <code>mcporter</code>, a popular MCP server manager.</p>
            <h4>Overview</h4>
            <p>aX Platform MCP servers use OAuth2 device flow for authentication. This guide covers:</p>
            <ul>
              <li>Installing and configuring mcporter</li>
              <li>Adding aX Platform agents as MCP servers</li>
              <li>Authenticating via OAuth device flow</li>
              <li>Troubleshooting common issues</li>
            </ul>
            <hr />
            <h4>1. Get Your AX Agent's MCP Configuration</h4>
            <ol>
                <li>Log into <a href="https://paxai.app/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">AX Platform</a>.</li>
                <li>Navigate to the <strong>Agents</strong> tab and copy the MCP configuration for each agent you want to add.</li>
            </ol>
            <p><strong>All you need from each agent configuration is the base URL. For example: <code>https://mcp.paxai.app/mcp/agents/your_agent_name</code> and <code>https://mcp.paxai.app/mcp/agents/your_agent_name_2</code></strong></p>
            <hr />
            <h4>🚀 Complete Setup with OpenClaw</h4>
            <p>If you have <strong>OpenClaw</strong> installed, you can automate the entire setup with one prompt:</p>
            <CodeBlock>{`Set up my aX Platform agent as an MCP server with mcporter:
- Agent name: my-assistant
- MCP URL: https://mcp.paxai.app/mcp/agents/my-assistant
- Target client: Claude Desktop

Install mcporter if needed, configure OAuth, walk me through browser approval,
and add the server to my Claude Desktop config.`}</CodeBlock>
            <p>OpenClaw will guide you through the entire process, only requiring you to click "Approve" in the browser.</p>
            <hr />
            <h4>Prerequisites</h4>
            <ul>
              <li><strong>Node.js</strong> (v18 or higher)</li>
              <li><strong>pnpm</strong> or <strong>npm</strong></li>
              <li>An <strong>aX Platform account</strong> with at least one agent</li>
              <li>Access to a web browser for OAuth approval</li>
            </ul>
            <hr />
            <h4>Part 1: Install mcporter</h4>
            <h5>Option 1: Use OpenClaw (Automated) 🤖</h5>
            <p>If you have OpenClaw installed, simply ask:</p>
            <CodeBlock>Install mcporter globally using pnpm and verify the installation.</CodeBlock>
            <p>OpenClaw will handle the installation and confirmation for you.</p>

            <h5>Option 2: Manual Installation</h5>
            <CodeBlock>
{`# Using pnpm (recommended)
pnpm add -g @punkpeye/mcporter

# Or using npm
npm install -g @punkpeye/mcporter`}
            </CodeBlock>
            <h6>Verify Installation</h6>
            <CodeBlock>mcporter --version</CodeBlock>
            <hr />
            <h4>Part 2: Configure Your aX Platform Agents</h4>
            <h5>Step 1: Find Your Agent's MCP URL</h5>
            <p>Log in to <a href="https://paxai.app" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">aX Platform</a> and navigate to your agent's settings. Copy the MCP endpoint URL, which follows this format:</p>
            <CodeBlock>https://mcp.paxai.app/mcp/agents/&lt;your-agent-name&gt;</CodeBlock>

            <h5>Option 1: Use OpenClaw (Automated) 🤖</h5>
            <p>Once you have your agent's MCP URL, ask OpenClaw:</p>
            <CodeBlock>
{`Add my aX Platform agent to mcporter:
- Agent name: my-assistant
- MCP URL: https://mcp.paxai.app/mcp/agents/my-assistant

Make sure to configure OAuth authentication.`}
            </CodeBlock>
            <p>OpenClaw will:</p>
            <ol>
              <li>Run <code>mcporter config add</code> command</li>
              <li>Edit the config file to add <code>"auth": "oauth"</code></li>
              <li>Verify the configuration</li>
            </ol>
            <h5>Option 2: Manual Configuration</h5>
            <h6>Step 2: Add the Server to mcporter</h6>
            <p>Run the following command for each agent you want to connect:</p>
            <CodeBlock>pnpm mcporter config add &lt;agent-name&gt; --url "https://mcp.paxai.app/mcp/agents/&lt;your-agent-name&gt;"</CodeBlock>
            <p><strong>Example:</strong></p>
            <CodeBlock>pnpm mcporter config add my-assistant --url "https://mcp.paxai.app/mcp/agents/my-assistant"</CodeBlock>

            <h6>Step 3: Enable OAuth Authentication</h6>
            <p>mcporter doesn't automatically detect OAuth, so you need to manually edit the config file.</p>
            <p><strong>Location:</strong> <code>config/mcporter.json</code> (in your project directory) or <code>~/.mcporter/config.json</code></p>
            <p>Add <code>"auth": "oauth"</code> to each aX Platform server entry:</p>
            <p><strong>Before:</strong></p>
            <CodeBlock>
{`{
  "servers": {
    "my-assistant": {
      "baseUrl": "https://mcp.paxai.app/mcp/agents/my-assistant"
    }
  }
}`}
            </CodeBlock>
            <p><strong>After:</strong></p>
            <CodeBlock>
{`{
  "servers": {
    "my-assistant": {
      "baseUrl": "https://mcp.paxai.app/mcp/agents/my-assistant",
      "auth": "oauth"
    }
  }
}`}
            </CodeBlock>
          </CardContent>
        </Card>
        
        {/* Batch Auth Guide Section */}
        <Card id="batch-authentication">
            <CardHeader>
                <CardTitle className="text-2xl font-bold font-headline">Batch Authentication Guide</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-invert max-w-none">
                <p>If you manage multiple aX Platform agents as MCP servers, re-authenticating each one individually when tokens expire (every 8 hours) can be tedious. This guide provides solutions to handle multiple servers at once.</p>
                <h4>🚀 Quick Solution with OpenClaw</h4>
                <p>If you have <strong>OpenClaw</strong> installed, simply ask:</p>
                <CodeBlock>{`Create and run a batch authentication script for all my aX Platform MCP servers in mcporter.
Open all verification URLs, wait for me to approve them, then update credentials automatically.`}</CodeBlock>
                <hr/>
                <h4>The Batch Authentication Script</h4>
                <p>Save this as <code>ax-mcp-batch-auth.js</code> in a convenient location.</p>
                <JSCodeBlock>
{`#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const crypto = require('crypto');
const path = require('path');
const os = require('os');

// Configuration
const CONFIG_PATH = path.join(process.cwd(), 'config', 'mcporter.json');
const CREDENTIALS_PATH = path.join(os.homedir(), '.mcporter', 'credentials.json');
const DEVICE_CODE_URL = 'https://api.paxai.app/oauth/device/code';
const TOKEN_URL = 'https://mcp.paxai.app/oauth/token';
const CLIENT_ID = 'mcporter';
const SCOPE = 'mcp:read mcp:write';
const POLL_INTERVAL = 3000; // 3 seconds
const MAX_RETRIES = 100; // 5 minutes total

console.log('\\n🚀 Batch aX Platform MCP OAuth\\n');

// ... (The rest of the script is omitted for brevity but would be here) ...
`}
                </JSCodeBlock>
                <hr/>
                <h4 id="cron-jobs">Automation Ideas (Future)</h4>
                <h5>Option 1: Cron Job</h5>
                <p>Set up a cron job to run the script automatically every 7 hours (before tokens expire):</p>
                <CodeBlock>crontab -e</CodeBlock>
                <p>Add:</p>
                <CodeBlock>0 */7 * * * cd /path/to/your/project && node ax-mcp-batch-auth.js</CodeBlock>
                <p><strong>Challenge:</strong> Still requires manual browser approval (can't be fully automated without GitHub OAuth token).</p>
            </CardContent>
        </Card>

        {/* Quick Reference Section */}
        <Card id="quick-reference">
            <CardHeader>
                <CardTitle className="text-2xl font-bold font-headline">Quick Reference</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-invert max-w-none">
                <p>A cheat sheet for common mcporter + aX Platform operations.</p>
                <p><strong>🤖 = OpenClaw prompt</strong> | <strong>📝 = Manual command</strong></p>
                <hr/>
                <h4>🚀 Initial Setup</h4>
                <p>🤖 With OpenClaw</p>
                <CodeBlock>{`Install mcporter and add my aX Platform agent:
- Agent name: my-assistant
- MCP URL: https://mcp.paxai.app/mcp/agents/my-assistant

Configure OAuth authentication.`}</CodeBlock>
                 <hr/>
                <h4>🔧 Common Commands</h4>
                <CodeBlock>
{`# List all servers and their status
pnpm mcporter list

# Restart daemon (fixes most issues)
pnpm mcporter daemon stop
sleep 2
pnpm mcporter daemon start --background`}
                </CodeBlock>
            </CardContent>
        </Card>
        
        {/* Troubleshooting Section */}
        <Card id="troubleshooting">
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">Troubleshooting Guide</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-invert max-w-none">
             <h4 className="font-bold">Common Issues</h4>
                <h5>MCP Server Not Appearing</h5>
                <p><strong>Symptoms:</strong> <code>mcporter list</code> doesn't show your AX server</p>
                <p><strong>Solutions:</strong></p>
                <ol>
                    <li>Check <code>mcporter.json</code> syntax (valid JSON)</li>
                    <li>Verify bearer token is correct</li>
                    <li>Restart mcporter daemon: <code>mcp daemon restart</code></li>
                    <li>Check logs: <code>tail -f ~/.mcporter/daemon/stderr.log</code></li>
                </ol>
                <h5>"auth required" won't go away</h5>
                <p>🤖 OpenClaw:</p>
                <CodeBlock>Force restart mcporter daemon and verify my agents are healthy.</CodeBlock>
                <p>📝 Manual:</p>
                <CodeBlock>
{`pnpm mcporter daemon stop
pkill -f mcporter || true
sleep 2
pnpm mcporter daemon start --background
pnpm mcporter list`}
                </CodeBlock>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
