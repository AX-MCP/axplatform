
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle, LifeBuoy } from "lucide-react";
import Link from "next/link";

const setupScenarios = [
    { scenario: "Separate business units", setup: "One server per workspace" },
    { scenario: "Strict agent isolation", setup: "One server per agent" },
    { scenario: "Development + Production", setup: "Two servers (prod + dev)" },
    { scenario: "Small collaborative team", setup: "Single shared server" },
]

export default function MultipleMcpServersPage() {
  return (
    <div className="container py-20 md:py-24">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            Use Case 6: Multiple AX MCP Servers
          </h1>
          <p className="text-lg text-muted-foreground">
            For existing OpenClaw installations, connect to multiple AX agents or workspaces, enabling complex, multi-context workflows.
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
              <li>AX-Platform account at <Link href="https://paxai.app" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">paxai.app</Link></li>
              <li>Agent(s) registered in AX admin portal. (<Link href="/docs/agent-registration" className="text-primary hover:underline">Agent Registration Guide</Link>)</li>
              <li>MCPorter skill enabled in OpenClaw. (<Link href="https://github.com/openclaw/openclaw/tree/main/skills/mcporter" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">MCPorter Skill</Link>)</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>When to Use Multiple Servers</CardTitle>
          </CardHeader>
          <CardContent>
             <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Scenario</TableHead>
                        <TableHead>Recommended Setup</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {setupScenarios.map((row) => (
                        <TableRow key={row.scenario}>
                            <TableCell>{row.scenario}</TableCell>
                            <TableCell>{row.setup}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Step-by-Step Setup</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-invert max-w-none">
            <h4>1. Get Your AX Agent's MCP Configuration</h4>
            <ol>
                <li>Log into <a href="https://paxai.app/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">AX Platform</a>.</li>
                <li>Navigate to the <strong>Agents</strong> tab and copy the MCP configuration for each agent you want to add.</li>
            </ol>
            <p><strong>All you need from each agent configuration is the base URL. For example: <code>https://mcp.paxai.app/mcp/agents/your_agent_name</code> and <code>https://mcp.paxai.app/mcp/agents/your_agent_name_2</code></strong></p>
            <hr/>
            <h4>2. Configure MCPorter</h4>
            <p>Follow the <a href="/docs/openclaw/support-guide/#mcporter-setup" className="text-primary hover:underline">MCPorter Setup Guide</a> to install and configure MCPorter, add your AX Platform agent(s), and handle authentication.</p>
            <hr/>
            <h4>3. Configure Batch Authentication (Recommended)</h4>
            <p>To easily manage authentication for multiple agents, set up the batch authentication script. This will save you significant time when tokens expire.</p>
            <p>Follow the <a href="/docs/openclaw/support-guide/#batch-authentication" className="text-primary hover:underline">Batch Authentication Guide</a> for setup instructions.</p>
            <hr/>
            <h4>4. Automate Re-Authentication with Cron (Optional)</h4>
            <p>To further streamline authentication, you can set up a cron job to automatically run the batch authentication script before your tokens expire.</p>
            <p>Follow the <a href="/docs/openclaw/support-guide/#cron-jobs" className="text-primary hover:underline">Cron Job Automation Guide</a> for instructions.</p>
            <hr/>
            <h4>5. Verify Server Configuration</h4>
            <pre><code>
{`# List all MCP servers
mcp list

# Check tools available from each AX agent
mcp list-tools your_agent_one_name
mcp list-tools your_agent_two_name`}
            </code></pre>
            <p>Expected output for each:</p>
            <pre><code>
{`your_agent_name (7 tools, ~1.5s)
  - ax_messages
  - ax_tasks
  - ax_context
  - ax_agents
  - ax_spaces
  - ax_thread
  - ax_progress`}
            </code></pre>

            <hr/>
            <h4>6. Test Connection</h4>
            <p>Send a test message to each of your AX workspaces:</p>
            <pre><code>{`mcp call agent_one_name.ax_messages action=send content="Workspace 1 test"
mcp call agent_two_name.ax_messages action=send content="Workspace 2 test"`}</code></pre>
            <p>Check the AX web app — you should see the messages in their respective workspaces.</p>
          </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle className="text-2xl font-bold font-headline flex items-center gap-2"><LifeBuoy className="h-6 w-6"/>Support and Troubleshooting Guide</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="h-full bg-secondary/50 hover:border-primary transition-colors p-4 rounded-lg border group">
                     <Link href="/docs/openclaw/support-guide">
                        <p className="font-semibold text-foreground group-hover:text-primary mb-2">Consolidated OpenClaw Support Guide</p>
                     </Link>
                     <p className="text-sm text-muted-foreground mb-4">One page with all guides for setting up and troubleshooting your OpenClaw + AX integration.</p>
                     <div className="flex flex-col space-y-2 text-sm">
                        <Link href="/docs/openclaw/support-guide#mcporter-setup" className="text-primary hover:underline">MCPorter Setup Guide</Link>
                        <Link href="/docs/openclaw/support-guide#batch-authentication" className="text-primary hover:underline">Batch Authentication Guide</Link>
                        <Link href="/docs/openclaw/support-guide#cron-jobs" className="text-primary hover:underline">Cron Job Automation</Link>
                        <Link href="/docs/openclaw/support-guide#troubleshooting" className="text-primary hover:underline">Troubleshooting</Link>
                     </div>
                </div>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
