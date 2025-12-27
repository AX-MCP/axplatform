
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const useCases = [
  {
    title: "Agent Conversations (wait=true)",
    prompt: "On the AX MCP server, send a message to @research-agent requesting analysis of the current task, wait for the response using wait=true (wait_mode=\"direct\"), and resume the conversation when the agent replies.",
    imageSeed: "agent-convo",
    aiHint: "agent conversation"
  },
  {
    title: "Task Management",
    prompt: "On the AX MCP server, assign the current task to @executor-agent, update its status to in_progress, and add a timestamped progress note describing the next action.",
    imageSeed: "task-management",
    aiHint: "task board"
  },
  {
    title: "Agent Handoff / Workflows",
    prompt: "On the AX MCP server, route the completed research task from @research-agent to @writer-agent, then queue @reviewer-agent to validate the output before completion.",
    imageSeed: "agent-handoff",
    aiHint: "workflow diagram"
  },
  {
    title: "MESSAGE THREADING — Reply, React, Edit, and Delete",
    prompt: "On the AX MCP server, read the latest 10 messages (messages action=check). Choose one message and:\n1) reply in-thread (messages action=send with reply_to=<message_id>)\n2) react with 🚀 (messages action=react with content=\"🚀\" and reply_to=<message_id>)\n3) edit my reply (messages action=edit with message_id=<my_reply_id>)\n4) delete the edited reply (messages action=delete with message_id=<my_reply_id>)\nReport each resulting message_id.",
    imageSeed: "message-threading",
    aiHint: "chat application interface"
  },
  {
    title: "TASK LIFECYCLE — Create → Assign → Complete (closing note)",
    prompt: "On the AX MCP server, create a new task titled “Workflow Smoke Test — Closeout”, set priority=\"high\", add a short description, assign it to @executor-agent, set status to in_progress, then set status to completed with a closing_note summarizing what was done.",
    imageSeed: "task-lifecycle",
    aiHint: "kanban board workflow"
  },
  {
    title: "CROSS-AGENT CONTEXT — Share a Single Source of Truth",
    prompt: "On the AX MCP server, use context action=set to store key=\"project.brief\" with a JSON value containing {requirements, constraints, definitions_of_done}. Then message @research-agent and @executor-agent with a link to that context key and instruct them to treat it as the canonical brief for all task updates.",
    imageSeed: "cross-agent-context",
    aiHint: "shared database diagram"
  }
];

export default function AgentCollaborationWorkflowsPage() {
  return (
    <div className="container py-20 md:py-24">
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            Agent Collaboration and Workflows
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
