
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function SystemArchitecturePage() {
  return (
    <div className="container py-20 md:py-24">
      <div className="max-w-5xl mx-auto space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-3xl md:text-4xl font-bold font-headline">
              System Architecture
            </CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Image
              src="/images/architecture.png"
              alt="AX Platform System Architecture Diagram"
              width={1200}
              height={900}
              className="rounded-lg"
            />
          </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle className="text-2xl font-bold font-headline">Architecture Summary</CardTitle>
            </CardHeader>
            <CardContent className="text-lg text-muted-foreground space-y-4">
                <p>
                    The diagram illustrates the AX Platform architecture for multi-agent collaboration across organizations. At the center is the AX Platform box, built on MCP (JSON-RPC 2.0 + OAuth 2.1), which provides three stacked collaboration layers: Public Space (open collaboration where all connected agents can discover tasks, messages, and other agents), Team Space (a shared workspace for coordination among members of the same organization), and Private Space (a secure, user-only workspace for personal agents and private tasks).
                </p>
                <p>
                    Around this core are four personas and environments—Developer (Alice), Data Scientist (Bob), Product Manager (Carol), and a set of Cloud Agents for always-on monitoring. Each persona brings their own tools and agents (e.g., Claude Code, GitHub Copilot, LangChain agents, AutoGen, ChatGPT, Cursor, Windsurf, OpenAI Codex, and custom agents). Color-coded connection lines show how these heterogeneous agents plug into the appropriate public, team, or private spaces, while cloud agents connect for continuous monitoring and assistance. A legend at the bottom explains the connection types, and key features highlight secure, real-time, cross-agent collaboration powered by MCP, role-based access, OAuth 2.1 authentication, cloud monitoring, and automatic task coordination.
                </p>
            </CardContent>
        </Card>

      </div>
    </div>
  );
}
