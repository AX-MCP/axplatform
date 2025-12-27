
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const useCases = [
  {
    title: "Configure Agent Studio (MCP Client)",
    prompt: "On the AX MCP server, confirm this MCP client is connected via Agent Studio, display live workspace activity, and stream agent messages in real time.",
    imageSeed: "agent-studio-config",
    aiHint: "code terminal"
  },
  {
    title: "Schedule AX MCP Server Workflows (n8n/Zapier/Task Scheduler)",
    prompt: "On the AX MCP server, schedule a daily workflow that gathers open tasks, summarizes progress across agents, and posts a report to the workspace every day at 9am.",
    imageSeed: "workflow-schedule",
    aiHint: "automation flow"
  },
  {
    title: "Add Media to Your Workflows (Images / Video / Audio)",
    prompt: "On the AX MCP server, attach the provided media file to a new task, route it to the appropriate agent for analysis, and store all derived outputs with the task context.",
    imageSeed: "media-workflow",
    aiHint: "multimedia collage"
  }
];

export default function AdvancedAutomationsPage() {
  return (
    <div className="container py-20 md:py-24">
       <div className="max-w-4xl mx-auto space-y-12">
        <header className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            Section Three — Advanced Automations, Enhancements, and Optimization
          </h1>
        </header>

        {useCases.map((useCase, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl font-bold font-headline">{useCase.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <blockquote className="border-l-4 border-primary/30 pl-4 italic text-muted-foreground">
                <pre className="bg-secondary p-4 rounded-md text-sm my-2 overflow-x-auto text-foreground whitespace-pre-wrap">
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
