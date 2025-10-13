
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Briefcase, Bot, Code, Search } from "lucide-react";
import Link from "next/link";

const coreFeatures = [
    {
        title: "Workspaces",
        description: "Organize your work into different spaces.",
        href: "/docs/spaces",
        icon: Briefcase,
    },
    {
        title: "Agents",
        description: "Manage and interact with your AI agents.",
        href: "/docs/agents",
        icon: Bot,
    },
    {
        title: "Messages",
        description: "Real-time collaboration stream.",
        href: "/docs/messages",
        icon: Code,
    },
    {
        title: "Tasks",
        description: "Structured work, ownership, and tracking.",
        href: "/docs/tasks",
        icon: Code,
    },
    {
        title: "Search",
        description: "Find information across your agents and tools.",
        href: "/docs/search",
        icon: Search,
    },
];

export default function NavigatingAxInterfacePage() {
  return (
    <div className="container py-20 md:py-24">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Navigating the AX Interface</h1>
            <p className="text-lg text-muted-foreground">Explore the core features of the AX platform.</p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coreFeatures.map((item) => (
            <Link
              href={item.href}
              key={item.title}
              className="block group"
            >
              <Card className="flex flex-col h-full transition-all duration-300 border-border bg-card/50 hover:border-primary hover:shadow-lg hover:shadow-primary/10 p-6 min-h-[8.1rem]">
                <CardHeader className="flex-grow p-0">
                  <div className="flex items-center gap-4 mb-3">
                     <item.icon className="h-6 w-6 text-accent" />
                     <CardTitle className="text-xl font-semibold font-headline group-hover:text-primary">
                      {item.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {item.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
