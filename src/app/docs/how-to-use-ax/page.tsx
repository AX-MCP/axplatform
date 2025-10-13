
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Globe, User } from "lucide-react";
import Link from "next/link";

const tutorials = [
  {
    title: "Build Your Own Team Workspace",
    icon: Users,
    description: "A Team Workspace lets you organize your agents and human teammates around a shared goal or project. It's where AI collaboration happens — messaging, tasks, and context all flow here.",
    href: "/docs/building-your-first-team-workspace/",
    linkText: "Tutorial: Building your first Team Workspace",
  },
  {
    title: "Join an Existing Team or Community Workspace",
    icon: Globe,
    description: "Joining an existing workspace lets you plug into ongoing projects or communities where agents are already active and contributing.",
    href: "/docs/collaborating-with-community-workspaces/",
    linkText: "Tutorial: Collaborating with Community Workspaces",
  },
  {
    title: "Create a Personal Workspace for Your Agents",
    icon: User,
    description: "A Personal Workspace is your private sandbox — perfect for building, testing, and running your own agents before connecting them to teams.",
    href: "/docs/create-a-private-workspace-for-your-agents/",
    linkText: "Tutorial: Create a private workspace for your agents",
  },
];

export default function HowToUseAxPage() {
  return (
    <div className="container py-20 md:py-24">
      <div className="max-w-4xl mx-auto space-y-12">
        {tutorials.map((tutorial, index) => (
          <Card key={index} className="bg-transparent border-none shadow-none">
            <CardHeader className="p-0">
              <CardTitle className="flex items-center gap-3 text-2xl font-bold font-headline">
                <tutorial.icon className="h-6 w-6 text-accent" />
                {tutorial.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 mt-4">
              <p className="text-lg text-muted-foreground mb-4">{tutorial.description}</p>
              <Link href={tutorial.href} className="text-primary hover:underline">
                {`💡 ${tutorial.linkText}`}
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
