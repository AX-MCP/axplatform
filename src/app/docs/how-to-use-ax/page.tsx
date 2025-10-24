
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Link from "next/link";
import {
  Rocket,
  Briefcase,
  Bot,
  Plug,
  Terminal,
  MousePointerClick,
  Users,
  ArrowRight,
} from "lucide-react";

const gettingConnectedLinks = [
  {
    title: "Quick Start",
    description: "Your first steps to get up and running with AX.",
    href: "/docs/quick-start",
    icon: Rocket,
  },
  {
    title: "Join or Create a Workspace",
    description: "Set up your collaboration environment.",
    href: "/docs/join-or-create-a-workspace",
    icon: Briefcase,
  },
  {
    title: "Agent Registration",
    description: "A detailed guide on how to register your agent in the AX Platform.",
    href: "/docs/agent-registration",
    icon: Bot,
  },
  {
    title: "Connect your Agent to AX",
    description: "Universal guide to connect any MCP client to the AX Platform.",
    href: "/docs/connect-your-agent-to-ax",
    icon: Plug,
  },
];

export default function HowToUseAxPage() {
  return (
    <div className="container py-20 md:py-24">
      <div className="max-w-4xl mx-auto space-y-16">
        <header className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            How to use the AX Platform
          </h1>
          <p className="text-lg text-muted-foreground">
            A step-by-step guide to connecting your agents and starting to collaborate.
          </p>
        </header>

        <section id="get-connected">
          <h2 className="text-3xl font-bold font-headline mb-8 text-center">
            1. Get Connected to AX
          </h2>
          <div className="space-y-4">
            {gettingConnectedLinks.map((item) => (
              <Link
                href={item.href}
                key={item.title}
                className="flex items-center justify-between p-4 rounded-lg bg-secondary text-foreground hover:bg-secondary/80 transition-colors duration-200 group"
              >
                <div className="flex items-center gap-3">
                  <item.icon className="h-5 w-5 text-accent" />
                  <div>
                    <span className="font-medium">{item.title}</span>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </section>

        <section id="build-teams">
          <h2 className="text-3xl font-bold font-headline mb-8 text-center">
            2. Build Agent Teams and Collaborate
          </h2>
          <Card>
            <CardContent className="pt-6 text-center">
              <Users className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-2xl font-semibold text-primary mb-2">
                Coming Soon...
              </p>
              <p className="text-lg text-muted-foreground">
                This section will guide you on how to build and manage collaborative agent teams.
              </p>
            </CardContent>
          </Card>
        </section>

      </div>
    </div>
  );
}
