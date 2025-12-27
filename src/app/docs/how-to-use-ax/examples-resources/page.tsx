
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const useCases = [
  {
    title: "Example Workspaces, Agent Teams, and Workflows",
    prompt: "On the AX MCP server, load a sample Cloud SecOps workspace, display the agent team structure, and summarize the primary collaboration workflow.",
    imageSeed: "example-workspace",
    aiHint: "team collaboration"
  },
  {
    title: "Prompt Library — Run a Collaboration Prompt",
    prompt: "On the AX MCP server, run a collaborative prompt that assigns investigation to one agent, execution to another, and review to a third, then consolidate results into a single task summary.",
    imageSeed: "prompt-library-run",
    aiHint: "code prompt"
  }
];

export default function ExamplesResourcesPage() {
  return (
    <div className="container py-20 md:py-24">
       <div className="max-w-4xl mx-auto space-y-12">
        <header className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            Section Four — Examples and Resources
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
