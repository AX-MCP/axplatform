
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, Info } from "lucide-react";

const resources = [
  { href: "https://modelcontextprotocol.io/docs", text: "📘 Model Context Protocol Docs", description: "Official documentation overview of MCP concepts and architecture." },
  { href: "https://modelcontextprotocol.io/clients", text: "🧠 Example Clients", description: "Official list of known MCP client implementations." },
  { href: "https://github.com/modelcontextprotocol/python-sdk", text: "💻 Python SDK", description: "Official Python client/server SDK." },
  { href: "https://github.com/modelcontextprotocol/typescript-sdk", text: "💻 TypeScript SDK", description: "Official TypeScript SDK for Node or web environments." },
  { href: "https://github.com/modelcontextprotocol/go-sdk", text: "⚙️ Go SDK", description: "Go SDK with client/server implementation." },
  { href: "https://github.com/modelcontextprotocol/use-mcp", text: "🧩 use-mcp (React Hook)", description: "Lightweight React client library for front-end apps." },
  { href: "https://github.com/punkpeye/awesome-mcp-clients", text: "📚 Awesome MCP Clients", description: "Community list of MCP client tools and SDKs." },
];

export default function McpClientsPage() {
  return (
    <div className="container py-20 md:py-24">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            🧩 MCP Clients
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
              MCP clients are <strong>applications or SDKs that connect to MCP servers</strong>, allowing AI systems to discover and use external tools or data in a standardized way.
            </p>
            <p>They:</p>
            <ul className="list-disc list-inside space-y-2 pl-5">
              <li>Handle <strong>protocol communication</strong>, authentication, and data exchange with MCP servers.</li>
              <li>Enable <strong>AI models and agents</strong> to access structured, permissioned context.</li>
              <li>Are often embedded into <strong>AI agents, IDE plugins, or automation frameworks</strong>.</li>
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
                  <span>Clients discover which <strong>tools and capabilities</strong> a server offers.</span>
              </li>
              <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 shrink-0 mt-1" />
                  <span>They send <strong>requests and receive structured responses</strong> following the MCP spec.</span>
              </li>
              <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 shrink-0 mt-1" />
                  <span>They <strong>bridge AI models</strong> with APIs, databases, or external systems securely.</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">
             🔗 MCP Client Resources
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
