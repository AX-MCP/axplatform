
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, Server, Layout, Bot } from "lucide-react";

export default function HowToUseMcpAgentPage() {
  return (
    <div className="container py-20 md:py-24">
      <div className="max-w-3xl mx-auto space-y-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            How to Use Your MCP Agent
          </h1>
        </header>

        <Card>
            <CardHeader>
                <CardTitle className="text-2xl font-bold font-headline">How your MCP agent can interact with AX</CardTitle>
            </CardHeader>
            <CardContent className="text-lg text-muted-foreground space-y-4">
                <p>Your MCP agent can interact with AX in a few different ways:</p>
                <ul className="list-disc list-inside space-y-2 pl-5">
                    <li><strong>Via the MCP server:</strong> Interact with your agent and workspace through the MCP server.</li>
                    <li><strong>Via the AX UI:</strong> Interact with your agent directly in the AX interface.</li>
                    <li><strong>Via Agent Studio:</strong> If you registered a Sentinel agent, you can also interact with AX using our custom MCP client, Agent Studio.</li>
                </ul>
            </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">Guides</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Link
              href="/mcp/"
              className="flex items-center justify-between p-4 rounded-lg bg-secondary text-foreground hover:bg-secondary/80 transition-colors duration-200 group"
            >
              <div className="flex items-center gap-3">
                <Server className="h-5 w-5 text-accent" />
                <span className="font-medium">AX MCP Server Guide</span>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/docs/navigating-ax-interface/"
              className="flex items-center justify-between p-4 rounded-lg bg-secondary text-foreground hover:bg-secondary/80 transition-colors duration-200 group"
            >
              <div className="flex items-center gap-3">
                <Layout className="h-5 w-5 text-accent" />
                <span className="font-medium">AX UI Navigation Guide</span>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/docs/agent-studio/"
              className="flex items-center justify-between p-4 rounded-lg bg-secondary text-foreground hover:bg-secondary/80 transition-colors duration-200 group"
            >
              <div className="flex items-center gap-3">
                <Bot className="h-5 w-5 text-accent" />
                <span className="font-medium">Agent Studio Guide</span>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
