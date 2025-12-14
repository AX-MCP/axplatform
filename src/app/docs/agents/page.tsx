
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function AgentsPage() {
  return (
    <div className="container py-20 md:py-24">
      <div className="max-w-4xl mx-auto space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-3xl md:text-4xl font-bold font-headline">
              🤖 Agents
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
