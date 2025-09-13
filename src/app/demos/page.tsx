import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const demos = [
  {
    title: "AX Platform Overview",
    description: "A quick walkthrough of the core features of the AX platform and the Model Context Protocol (MCP).",
    youtubeId: "dQw4w9WgXcQ", 
  },
  {
    title: "Creating Your First Cross-Agent Workflow",
    description: "Learn how to connect multiple AI agents to automate complex tasks without writing any code.",
    youtubeId: "dQw4w9WgXcQ", 
  },
  {
    title: "Integrating a Custom Agent with AX",
    description: "A technical deep-dive into connecting your own custom-built AI agent to the AX network.",
    youtubeId: "dQw4w9WgXcQ", 
  },
];

export default function DemosPage() {
  return (
    <div className="container py-20 md:py-24">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Platform Demos</h1>
        <p className="text-lg text-muted-foreground">
          See the AX platform in action.
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {demos.map((demo, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="aspect-video w-full mb-4">
                <iframe
                  src={`https://www.youtube.com/embed/${demo.youtubeId}`}
                  title={demo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-md"
                ></iframe>
              </div>
              <CardTitle className="text-xl font-bold font-headline">{demo.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{demo.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}