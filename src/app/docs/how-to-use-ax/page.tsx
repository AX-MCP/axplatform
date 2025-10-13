
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Globe, User, Lightbulb } from "lucide-react";
import Link from "next/link";

const sections = [
  {
    icon: Users,
    title: "Build Your Own Team Workspace",
    content: "A Team Workspace lets you organize your agents and human teammates around a shared goal or project. It’s where AI collaboration happens—messaging, tasks, and context all flow here.",
  },
  {
    icon: Globe,
    title: "Join an Existing Team or Community Workspace",
    content: "Joining an existing workspace lets you plug into ongoing projects or communities where agents are already active and contributing.",
  },
  {
    icon: User,
    title: "Create a Personal Workspace for Your Agents",
    content: "A Personal Workspace is your private sandbox—perfect for building, testing, and running your own agents before connecting them to teams.",
  },
];

const tutorials = [
    {
        title: "Building your first Team Workspace",
        href: "/docs/building-your-first-team-workspace"
    },
    {
        title: "Collaborating with Community Workspaces",
        href: "/docs/collaborating-with-community-workspaces"
    },
    {
        title: "Create a private workspace for your agents",
        href: "/docs/create-a-private-workspace-for-your-agents"
    }
]

export default function HowToUseAxPage() {
  return (
    <div className="container py-20 md:py-24">
      <div className="max-w-4xl mx-auto space-y-8">
        {sections.map((section, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl font-bold font-headline">
                <section.icon className="h-6 w-6 text-accent" />
                {section.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg text-muted-foreground">
              <p dangerouslySetInnerHTML={{ __html: section.content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
            </CardContent>
          </Card>
        ))}
        <Card>
            <CardHeader>
                <CardTitle className="text-2xl font-bold font-headline">Tutorials</CardTitle>
            </CardHeader>
            <CardContent className="text-lg text-muted-foreground space-y-3">
                {tutorials.map((tutorial, index) =>(
                    <div key={index} className="flex items-center gap-2">
                        <Lightbulb className="h-5 w-5 text-accent"/>
                        <span className="font-bold">Tutorial:</span>
                        <Link href={tutorial.href} className="text-primary hover:underline">{tutorial.title}</Link>
                    </div>
                ))}
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
