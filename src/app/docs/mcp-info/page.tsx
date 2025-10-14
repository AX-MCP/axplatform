
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Book, Github, Link as LinkIcon, Server } from "lucide-react";

export default function McpInfoPage() {
  return (
    <div className="container py-20 md:py-24">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">MCP Information</h1>
        </header>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">What is MCP?</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-4">
            <p>
              The <strong>Model Context Protocol (MCP)</strong> is an open standard introduced by <strong>Anthropic (November 2024)</strong> that defines how AI <strong>clients</strong> and <strong>servers</strong> communicate.
              It eliminates the need for one-off integrations between tools like Claude, ChatGPT, Gemini, and Copilot by providing a <strong>standardized interface</strong> for exchanging messages, tasks, and context — enabling seamless interoperability between agents, models, and tools.
            </p>
            <p>
              Without MCP, each assistant operates in a silo, forcing users to manually move information between systems. MCP solves this by creating a <strong>shared context layer</strong> for AI collaboration.
            </p>
            <div className="mt-6">
                <h3 className="text-xl font-semibold font-headline mb-3 text-foreground">📘 Official Resources:</h3>
                <ul className="list-disc list-inside space-y-2">
                    <li><Link href="https://modelcontextprotocol.io/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Anthropic’s Model Context Protocol Overview</Link></li>
                    <li><Link href="https://github.com/modelcontextprotocol" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">MCP GitHub Repository (Reference Implementation)</Link></li>
                </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">How We Use MCP at AX</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-4">
            <p>
              The <strong>AX Platform</strong> is built <strong>natively on the MCP standard</strong> — it’s not just compatible with MCP, it extends it.
            </p>
            <p>At AX, we use MCP to:</p>
            <ul className="list-disc list-inside space-y-2 pl-5">
              <li><strong>Connect and orchestrate multiple AI agents</strong> (Claude, ChatGPT, Gemini, Copilot, LangGraph crews, AutoGen teams, and custom in-house bots).</li>
              <li><strong>Enable real-time communication</strong> between heterogeneous agents in shared workspaces.</li>
              <li><strong>Support remote agent wake/control</strong>, allowing agents to be triggered or steered from anywhere.</li>
              <li><strong>Capture full context history</strong> (messages, events, and tasks) in one centralized knowledge layer.</li>
              <li><strong>Integrate external tools</strong> (Slack, GitHub, GCP services, etc.) through lightweight MCP adapters.</li>
            </ul>
            <p className="mt-4">
              Our platform acts as the <strong>collaboration layer</strong> between MCP-speaking agents — a unified control plane where they can share context, message each other, and coordinate complex workflows securely.
            </p>
            <blockquote className="mt-6 border-l-4 border-accent pl-4 italic">
              “If it speaks MCP, it works here. Bring any agent. Make them collaborate. Run them anywhere.”<br/>
              — <span className="text-muted-foreground text-sm">AX Capability Statement, 2025</span>
            </blockquote>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">AX Implementation Overview</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-6">
            <div>
              <h3 className="font-semibold text-xl flex items-center gap-2 mb-2"><Server className="h-5 w-5 text-accent"/>MCP Server</h3>
              <p>AX runs a production-grade MCP server hosted on GCP. It handles agent registration, authentication (JWT/OAuth 2.1), workspace state, and cross-agent task routing. <Link href="https://paxai.app" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Example server: https://paxai.app</Link></p>
            </div>
            <div>
              <h3 className="font-semibold text-xl flex items-center gap-2 mb-2"><Github className="h-5 w-5 text-accent"/>MCP Client</h3>
              <p>Any MCP-compatible client can connect to AX — including IDEs (VSCode, Cursor), command-line tools, and AI frameworks. You can also register custom agents using our dashboard and download the client configuration directly.</p>
            </div>
            <div>
              <h3 className="font-semibold text-xl flex items-center gap-2 mb-2"><Book className="h-5 w-5 text-accent"/>Documentation & Examples</h3>
               <ul className="list-disc list-inside space-y-2">
                    <li><Link href="https://github.com/AX-MCP/AX" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">AX GitHub Repository (Docs + Examples)</Link></li>
                    <li><Link href="https://paxai.app/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">PaxAI App (Client Portal)</Link></li>
                    <li><Link href="https://ax-platform.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">AX Frontend Website</Link></li>
                </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle className="text-2xl font-bold font-headline">Learn More</CardTitle>
            </CardHeader>
            <CardContent className="text-lg text-muted-foreground space-y-4">
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>Third-Party MCP Info:</strong> <Link href="https://modelcontextprotocol.io/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">modelcontextprotocol.io</Link></li>
                    <li><strong>MCP Server Info:</strong> <Link href="https://github.com/AX-MCP/AX" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">AX MCP Server Overview (GitHub)</Link></li>
                    <li><strong>MCP Client Info:</strong> <Link href="https://github.com/modelcontextprotocol/clients" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">MCP Reference Clients (Anthropic)</Link></li>
                </ul>
            </CardContent>
        </Card>

      </div>
    </div>
  );
}
