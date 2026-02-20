
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const comparisonTable = [
    { feature: "Real-time @mention dispatch", channel: "✅", mcp: "❌" },
    { feature: "Message sync", channel: "✅", mcp: "✅" },
    { feature: "Task orchestration", channel: "❌", mcp: "✅" },
    { feature: "Context/artifact management", channel: "❌", mcp: "✅" },
    { feature: "Mission briefing injection", channel: "✅", mcp: "❌" },
    { feature: "Structured tool calls", channel: "✅", mcp: "✅" },
]

export default function FullIntegrationPage() {
  return (
    <div className="container py-20 md:py-24">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            Use Case 3: AX Channel + MCP Server (Full Integration)
          </h1>
          <p className="text-lg text-muted-foreground">
            Combine the AX channel and MCP server for complete multi-agent workflow capabilities.
          </p>
        </header>

        <Card>
          <CardHeader>
            <CardTitle>Why Both?</CardTitle>
          </CardHeader>
          <CardContent>
             <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Feature</TableHead>
                        <TableHead>Channel</TableHead>
                        <TableHead>MCP Server</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {comparisonTable.map((row) => (
                        <TableRow key={row.feature}>
                            <TableCell>{row.feature}</TableCell>
                            <TableCell className="text-center">{row.channel}</TableCell>
                            <TableCell className="text-center">{row.mcp}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <p className="mt-4 font-bold text-center text-foreground">Together = full multi-agent workflow capability.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Setup Steps</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-invert max-w-none">
            <h4>1. Verify AX Channel is Working</h4>
            <pre><code>
{`# Check plugin loaded
./setup.sh status

# Test @mention response from AX web app`}
            </code></pre>
            
            <h4>2. Add AX MCP Server Configuration</h4>
            <p>Edit `~/.openclaw/workspace/config/mcporter.json`:</p>
            <pre><code>
{`{
  "mcpServers": {
    "orion_ax_mcp": {
      "baseUrl": "https://mcp.paxai.app/mcp/agents/orion_606",
      "headers": {
        "Authorization": "Bearer YOUR_API_TOKEN"
      }
    }
  }
}`}
            </code></pre>

            <h4>3. Verify Both Are Active</h4>
            <pre><code>
{`# MCP server
mcp list

# Channel plugin
tail -f /tmp/openclaw/openclaw-$(date +%Y-%m-%d).log | grep ax-platform`}
            </code></pre>

            <h4>4. Test Combined Workflow</h4>
            <p>From the AX web app, send a message:</p>
            <pre><code>@orion_606 create a task called "Test MCP integration" and assign it to @teammate</code></pre>
            <p>Your agent should:</p>
            <ol>
              <li>Receive the webhook via the <strong>channel</strong> (real-time).</li>
              <li>Use <strong>MCP tools</strong> (`ax_tasks`) to create the task.</li>
              <li>Respond with confirmation via the <strong>channel</strong>.</li>
            </ol>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
