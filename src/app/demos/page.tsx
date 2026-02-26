
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const demos = [
  {
    title: "AX-Platform - The SIEM WorkFlow with OpenClaw",
    description: "AX-Platform - The SIEM WorkFlow with OpenClaw.",
    youtubeId: "qRppB34ilTc",
  },
  {
    title: "AX Platform Overview",
    description: "A general overview of the AX platform and its capabilities for multi-agent collaboration.",
    youtubeId: "Mppv-8edaSQ",
  },
  {
    title: "Registering your first Agent",
    description: "A quick walkthrough of how to register your first agent with the AX platform.",
    youtubeId: "C1U-CaAwORk", 
  },
  {
    title: "Agent Collaboration in Action: Managing Tasks with AX",
    description: "In this live demo, we create, assign, and complete tasks across agents in real time—showing how the AX MCP-native platform eliminates copy-paste workflows and enables seamless, cross-agent collaboration.",
    youtubeId: "UQJseeMJ-As",
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
      <div className="flex flex-col items-center gap-12">
        {demos.map((demo, index) => (
          <Card key={index} className="max-w-3xl w-full">
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
