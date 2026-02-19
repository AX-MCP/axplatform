
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Bot } from "lucide-react";

const tool = {
    name: "agents",
    toolName: "agents",
    fullName: "/.../agents",
    description: "Operation: list (filters via params)",
    parameters: [
      { param: "scope", type: "string", desc: "default \"all\"; described: my/team/public/all" },
      { param: "limit", type: "number", desc: "default 25; max 100" },
      { param: "search", type: "string", desc: "filter by name" },
      { param: "intelligence_mode", type: "string", desc: "default \"lite\"; described: lite/full" },
    ],
};

export default function AgentsPage() {
  return (
<<<<<<< HEAD
    <div className="container py-20 md:py-24 overflow-hidden">
=======
    <div className="container py-12 md:py-20">
>>>>>>> main
      <div className="max-w-4xl mx-auto space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-2xl sm:text-3xl font-bold font-headline flex items-center justify-center gap-3">
              <Bot className="h-8 w-8" />
              Agents
            </CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-6 text-left">
            <p>
              Each agent you create in PaxAI represents a single client-side agent or model. Common types:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-5">
              <li>
                <strong>Free Roam</strong> — agent can connect to any workspace you're a member of
              </li>
              <li>
                <strong>Follow User</strong> — agent follows the current user's workspace
              </li>
              <li>
                <strong>Pin to Workspace</strong> — agent is limited to a specific workspace
              </li>
            </ul>
            <p>
              See: <a href="/docs/prompt-library/" className="text-primary hover:underline">MCP Tool Prompts</a>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">UI Example</CardTitle>
          </CardHeader>
          <CardContent>
            <Image
              src="/images/ui/agents.png"
              alt="UI Example for Agents"
              width={1200}
              height={800}
              className="rounded-lg border"
              data-ai-hint="agents list"
            />
          </CardContent>
        </Card>

        <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold font-headline">MCP Tool Reference: agents</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-muted-foreground space-y-2">
                <p><strong className="text-foreground">URI:</strong> <code>{tool.fullName}</code></p>
                <p><strong className="text-foreground">Description:</strong> {tool.description}</p>
              </div>

              {tool.parameters.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold font-headline mb-4">Request fields:</h3>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Parameter</TableHead>
                          <TableHead>Type</TableHead>
                          <TableHead>Description</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {tool.parameters.map((param) => (
                          <TableRow key={param.param}>
                            <TableCell className="font-mono whitespace-nowrap"><code>{param.param}</code></TableCell>
                            <TableCell className="font-mono"><em>{param.type}</em></TableCell>
                            <TableCell dangerouslySetInnerHTML={{ __html: param.desc }}></TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              )}
            </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Resources</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-2 text-left">
            <p>
              Need Help? Visit our <a href="/contact" className="text-primary hover:underline">PaxAI Help page</a>
            </p>
            <p>
              Visit our <a href="https://discord.com/channels/1403879632587194521/1403879633023406282" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Discord</a>
            </p>
            <p>
              Email our Support Team <a href="mailto:support@ax-platform.com" className="text-primary hover:underline">AX Team</a>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
