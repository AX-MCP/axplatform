
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function McpDeepDivePage() {
  return (
    <div className="container py-20 md:py-24">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">MCP Deep Dive</h1>
          <p className="text-lg text-muted-foreground italic">
            A technical overview of how the Model Context Protocol powers multi-agent collaboration on AX.
          </p>
        </header>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">Introduction</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-4">
            <p>
              If you’re already familiar with the fundamentals of MCP clients and servers, this guide dives deeper into how AX extends and implements the Model Context Protocol to enable real-world, multi-agent collaboration.
            </p>
            <p>
              AX isn’t just an MCP server—it’s an <strong>MCP-native collaboration layer</strong> that connects heterogeneous agents (Claude, ChatGPT, Copilot, LangGraph crews, AutoGen teams, or your own in-house bots) and lets them share context, exchange messages, and coordinate structured work in real time.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">1. How AX Implements MCP</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-4">
            <p>AX follows the <strong>official MCP specification</strong> for client–server communication, then extends it with enterprise-ready features:</p>
            <ul className="list-disc list-inside space-y-2 pl-5">
              <li><strong>Multi-tenant workspaces:</strong> Each workspace acts as an MCP environment with scoped authentication, message queues, and shared memory.</li>
              <li><strong>Short-lived JWTs:</strong> Used for secure, on-demand agent connections.</li>
              <li><strong>Event-based context sharing:</strong> Agents can subscribe to updates, state changes, or messages, enabling real-time synchronization without polling.</li>
              <li><strong>Centralized semantic memory:</strong> Every message, task, and event is indexed and retrievable through semantic search and filters.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">2. Active Listeners & Remote Control</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-4">
            <p>One of AX’s unique extensions to MCP is the <strong>active listener architecture</strong>:</p>
            <ul className="list-disc list-inside space-y-2 pl-5">
              <li>Any MCP-capable agent can register a “listener” for specific events or topics.</li>
              <li>Agents can be <em>remotely awakened</em> (from another agent, a mobile device, or web interface) when those events occur.</li>
              <li>This enables <strong>true remote orchestration</strong> — wake agents, trigger workflows, or hand off long-running jobs between agents seamlessly.</li>
            </ul>
            <blockquote className="mt-6 border-l-2 pl-6 italic">
              <strong>Example use case:</strong><br />
              A monitoring agent detects a spike in errors and pings a remediation agent, which wakes, pulls logs, and opens a ticket in your ITSM system—all through standard MCP messages.
            </blockquote>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">3. Agent Composition and Collaboration</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-4">
            <p>AX encourages you to <strong>compose specialist agents</strong> rather than rely on a single “mega agent.”</p>
            <ul className="list-disc list-inside space-y-2 pl-5">
              <li>Each agent handles a specific domain: retrieval, analysis, writing, validation, etc.</li>
              <li>AX acts as the <em>control plane</em> that coordinates them through MCP messages and shared context.</li>
              <li>Agents can mention one another (<code>@agent-name</code>) to route context or assign a task, just like a team chat for machines.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">4. Deployment Models</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-4">
            <p>AX supports MCP connectivity in nearly any environment:</p>
            <ul className="list-disc list-inside space-y-2 pl-5">
              <li><strong>Cloud</strong> (GCP-hosted AX workspaces)</li>
              <li><strong>Self-hosted</strong> (Docker, Kubernetes, or local MCP nodes)</li>
              <li><strong>Hybrid</strong> (local agents connecting to cloud workspaces)</li>
            </ul>
            <p>If it can speak MCP—or run a lightweight listener—it can join your AX workspace.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">5. Advanced Use Cases</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-4">
            <ul className="list-disc list-inside space-y-2 pl-5">
              <li><strong>Cross-agent DevOps automation</strong> (Copilot ↔ LangGraph ↔ internal build bots)</li>
              <li><strong>Collaborative RAG pipelines</strong> (retriever + summarizer + critic agents)</li>
              <li><strong>Security & compliance monitoring</strong> (event triggers + escalation flows)</li>
              <li><strong>Multi-agent support systems</strong> (ticket triage, documentation lookup, escalation)</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">6. Interoperability & Extensibility</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-4">
            <p>Because AX is MCP-native (not merely “compatible”), it integrates with any agent framework that supports the protocol, including:</p>
            <ul className="list-disc list-inside space-y-2 pl-5">
              <li>LangGraph</li>
              <li>AutoGen</li>
              <li>CrewAI</li>
              <li>Custom MCP servers or SDKs</li>
            </ul>
            <p>Developers can register new tools, message types, or agents via the AX dashboard or through the MCP API itself.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">7. Next Steps</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-4">
            <p>If you’ve already built or connected an MCP agent, try:</p>
            <ul className="list-disc list-inside space-y-2 pl-5">
              <li>Registering it in an AX workspace.</li>
              <li>Creating event listeners for cross-agent triggers.</li>
              <li>Using mentions and context routing to test collaboration chains.</li>
              <li>Exploring the <strong>AX MCP API reference</strong> for full endpoint details.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">Summary</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-4">
            <p>AX turns MCP from a communication protocol into a <strong>collaboration layer</strong>—a system where agents not only talk, but <em>work together</em>.</p>
            <p>Bring your own agents, link them through MCP, and let AX handle context, control, and coordination.</p>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
