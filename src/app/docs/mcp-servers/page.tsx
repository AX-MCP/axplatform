
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, Info, Server as ServerIcon } from "lucide-react";

const resources = [
  { href: "https://modelcontextprotocol.io/docs", text: "📘 Model Context Protocol Docs", description: "Core documentation for understanding MCP architecture." },
  { href: "https://modelcontextprotocol.io/servers", text: "🧠 Example Servers", description: "Official list of known MCP server implementations." },
  { href: "https://github.com/modelcontextprotocol/python-sdk", text: "💻 Python SDK", description: "Full SDK with both server and client implementations." },
  { href: "https://github.com/modelcontextprotocol/typescript-sdk", text: "💻 TypeScript SDK", description: "Official TypeScript SDK for building MCP servers." },
  { href: "https://github.com/modelcontextprotocol/java-sdk", text: "☕ Java SDK", description: "Java implementation of the MCP server interface." },
  { href: "https://github.com/modelcontextprotocol/go-sdk", text: "⚙️ Go SDK", description: "Go SDK supporting MCP server implementation." },
  { href: "https://github.com/punkpeye/awesome-mcp-servers", text: "🧩 Community MCP Servers", description: "Curated community list of open-source servers." },
  { href: "https://docs.anthropic.com/en/docs/mcp", text: "📖 Anthropic Docs (Server Integration)", description: "Official integration guide and examples from Anthropic." },
];

export default function McpServersPage() {
  return (
    <div className="container py-20 md:py-24">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            🖥️ MCP Servers
          </h1>
        </header>
        
        <Card className="bg-blue-900/20 border-blue-500/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl font-bold font-headline">
              <Info className="h-6 w-6 text-blue-400" />
              Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-4 text-left">
            <p>
              MCP servers are <strong>backend services that expose tools, APIs, or data sources</strong> using the Model Context Protocol.
            </p>
            <p>They:</p>
            <ul className="list-disc list-inside space-y-2 pl-5">
              <li>Register <strong>capabilities, schemas, and permissions</strong> for discovery by clients.</li>
              <li>Handle <strong>tool execution and data retrieval</strong> securely.</li>
              <li>Enforce <strong>access control, filtering, and policy enforcement</strong> for AI systems.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">
              ✅ Key Points
            </CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-4 text-left">
            <ul className="space-y-3">
              <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 shrink-0 mt-1" />
                  <span>Servers define which tools are available and how they can be used.</span>
              </li>
              <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 shrink-0 mt-1" />
                  <span>They communicate responses using <strong>standardized JSON structures</strong>.</span>
              </li>
              <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 shrink-0 mt-1" />
                  <span>Servers can back multiple clients and integrate with enterprise systems.</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">
             🔗 MCP Server Resources
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Resource</TableHead>
                  <TableHead>Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {resources.map((resource) => (
                  <TableRow key={resource.href}>
                    <TableCell className="font-medium">
                      <a href={resource.href} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        {resource.text}
                      </a>
                    </TableCell>
                    <TableCell>{resource.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
