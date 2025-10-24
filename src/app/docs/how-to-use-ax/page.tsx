
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
  {
    title: "Calling the AX MCP Server",
    description: "Learn how to interact with the AX MCP server.",
    href: "/docs/calling-ax-mcp-server",
    icon: Terminal,
  },
  {
    title: "Navigating the AX Interface",
    description: "A guide to the AX user interface.",
    href: "/docs/navigating-the-ax-interface",
    icon: MousePointerClick,
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {gettingConnectedLinks.map((item) => (
              <Link
                href={item.href}
                key={item.title}
                className="block group h-full"
              >
                <Card className="flex flex-col h-full transition-all duration-300 border-border bg-card/50 hover:border-primary hover:shadow-lg hover:shadow-primary/10 p-6 min-h-[8.1rem]">
                  <CardHeader className="p-0 flex-grow">
                    <div className="flex items-center gap-4 mb-3">
                      <item.icon className="h-7 w-7 text-accent" />
                      <CardTitle className="text-2xl font-semibold font-headline group-hover:text-primary">
                        {item.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-lg">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
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
