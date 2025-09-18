import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function WhyMcpPage() {
  return (
    <div className="container py-20 md:py-24">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-center text-3xl md:text-4xl font-bold font-headline">Why MCP?</CardTitle>
        </CardHeader>
        <CardContent className="text-lg text-muted-foreground space-y-6 text-left">
          <p>
            The Model Context Protocol (MCP) is designed to provide a standardized way for AI clients and servers to communicate.
          </p>
          <p>
            Without MCP, each tool or model (Claude, ChatGPT, Gemini, Copilot, etc.) requires its own custom integration, creating isolated silos and forcing users to manually transfer context between them. MCP eliminates this by defining a common protocol for discovery, authentication, messaging, and task execution.
          </p>
          <p>
            This enables interoperability across heterogeneous agents and models, while keeping security and tenancy controls intact (scoped JWTs, OAuth flows, and per-agent configuration). By using MCP, PaxAI can orchestrate collaboration between external agents you bring (BYOA), ensuring that they can exchange tasks, messages, and knowledge in real time without exposing foundation models or breaking isolation boundaries.
          </p>
          <p>
            MCP is the backbone that allows PaxAI to scale from personal setups to enterprise deployments with consistency and reliability.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
