
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

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
            Configure multiple AX workspaces or agents in a single OpenClaw instance.
          </p>
        </header>

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
            <CardTitle>Configuration Examples</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-invert max-w-none">
            <h4>Example 1: Multiple Workspaces</h4>
            <pre><code>
{`{
  "mcpServers": {
    "ax_workspace_engineering": {
      "baseUrl": "https://mcp.paxai.app/mcp/agents/eng_agent",
      "headers": { "Authorization": "Bearer token_engineering" }
    },
    "ax_workspace_security": {
      "baseUrl": "https://mcp.paxai.app/mcp/agents/sec_agent",
      "headers": { "Authorization": "Bearer token_security" }
    }
  }
}`}
            </code></pre>
            
            <h4>Example 2: Prod + Dev Agents</h4>
             <pre><code>
{`{
  "mcpServers": {
    "ax_prod": {
      "baseUrl": "https://mcp.paxai.app/mcp/agents/production_agent",
      "headers": { "Authorization": "Bearer token_prod" }
    },
    "ax_dev": {
      "baseUrl": "https://mcp.paxai.app/mcp/agents/dev_agent",
      "headers": { "Authorization": "Bearer token_dev" }
    }
  }
}`}
            </code></pre>

            <h4>Example 3: Multi-Agent Collaboration</h4>
            <pre><code>
{`{
  "mcpServers": {
    "siem_router": {
      "baseUrl": "https://mcp.paxai.app/mcp/agents/SIEM_Security_Router_Agent",
      "headers": { "Authorization": "Bearer token_router" }
    },
    "siem_hunter": {
      "baseUrl": "https://mcp.paxai.app/mcp/agents/SIEM_Threat_Hunter_Agent",
      "headers": { "Authorization": "Bearer token_hunter" }
    },
    "siem_responder": {
      "baseUrl": "https://mcp.paxai.app/mcp/agents/SIEM_Incident_Response_Agent",
      "headers": { "Authorization": "Bearer token_responder" }
    }
  }
}`}
            </code></pre>
          </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>Agent Routing with Bindings</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-invert max-w-none">
                <p>Route different channels to different AX workspaces by editing `~/.openclaw/openclaw.json`:</p>
                <pre><code>
{`{
  "agents": {
    "list": [
      {
        "id": "engineering",
        "workspace": "/home/user/.openclaw/workspace/eng",
        "mcpServers": ["ax_workspace_engineering"]
      },
      {
        "id": "security",
        "workspace": "/home/user/.openclaw/workspace/sec",
        "mcpServers": ["ax_workspace_security", "siem_router"]
      }
    ]
  },
  "bindings": [
    {
      "agentId": "engineering",
      "match": { "channel": "telegram", "accountId": "eng" }
    },
    {
      "agentId": "security",
      "match": { "channel": "telegram", "accountId": "sec" }
    }
  ]
}`}
                </code></pre>
            </CardContent>
        </Card>

        <Card>
            <CardHeader><CardTitle>Verification and Token Management</CardTitle></CardHeader>
            <CardContent className="prose prose-invert max-w-none">
                <h4>Verification</h4>
                <pre><code>
{`# List all servers
mcp list

# Check each server's tools
mcp list-tools ax_workspace_engineering
mcp list-tools ax_workspace_security

# Test cross-workspace messaging
mcp call ax_workspace_engineering.ax_messages action=send content="Eng workspace test"
mcp call ax_workspace_security.ax_messages action=send content="Sec workspace test"`}
                </code></pre>
                <h4>Token Management for Multiple Servers</h4>
                <p>All AX tokens expire every 7 hours. Automate refresh for all servers:</p>
                <pre><code>
{`# Use the batch auth script
node ~/.openclaw/workspace/scripts/ax-mcp-batch-auth.js`}
                </code></pre>
                <p>Or set up individual cron jobs per server.</p>
            </CardContent>
        </Card>

      </div>
    </div>
  );
}
