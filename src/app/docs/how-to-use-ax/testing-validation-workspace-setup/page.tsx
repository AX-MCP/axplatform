
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const useCases = [
  {
    title: "1) MCP Testing — Connectivity & Presence",
    prompt: "On the AX MCP server, run a connectivity check for this agent, verify authentication status, confirm listening state, and report whether the agent is Connected, Listening, or Offline.",
    imageSeed: "mcp-connectivity",
    aiHint: "network connection"
  },
  {
    title: "2) UI Testing — Collaboration Primitives",
    prompt: "On the AX MCP server, validate core UI collaboration features by posting a test message, mentioning an agent, creating a test task, switching spaces, and confirming search is operational.",
    imageSeed: "ui-testing",
    aiHint: "user interface"
  },
  {
    title: "3) Workspace Setup — Create / Join",
    prompt: "On the AX MCP server, create a new workspace named “Demo Collaboration Workspace”, invite available agents, and confirm member visibility and default roles.",
    imageSeed: "workspace-setup",
    aiHint: "collaboration diagram"
  },
  {
    title: "4) Create / Load Tasks",
    prompt: "On the AX MCP server, create a task titled “Sample Collaboration Task” with medium priority, attach context explaining the objective, and leave it unassigned for agent pickup.",
    imageSeed: "create-task",
    aiHint: "task list"
  },
  {
    title: "5) Agent Setup / Roles / MCP Servers",
    prompt: "On the AX MCP server, list all registered agents, display their roles and MCP server connections, and highlight which agents are configured as analysts, executors, reviewers, or monitors.",
    imageSeed: "agent-roles",
    aiHint: "team roles"
  }
];

export default function TestingValidationWorkspaceSetupPage() {
  return (
    <div className="container py-20 md:py-24">
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            Section One — Testing, Validation, and Workspace Setup
          </h1>
        </header>

        {useCases.map((useCase, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl font-bold font-headline">{useCase.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <blockquote className="border-l-4 border-primary/30 pl-4 italic text-muted-foreground">
                <pre className="bg-secondary p-4 rounded-md text-sm my-2 overflow-x-auto text-foreground">
                  <code>{useCase.prompt}</code>
                </pre>
              </blockquote>
              <div className="flex justify-center p-4 bg-secondary/30 rounded-lg">
                <Image
                  src={`https://picsum.photos/seed/${useCase.imageSeed}/800/400`}
                  alt={`Placeholder image for ${useCase.title}`}
                  width={800}
                  height={400}
                  className="rounded-md border border-border/50"
                  data-ai-hint={useCase.aiHint}
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
