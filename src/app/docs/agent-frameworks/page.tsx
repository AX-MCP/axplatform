import Link from "next/link";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Link as LinkIcon, Wrench } from "lucide-react";

const frameworks = [
  {
    title: "LangChain",
    href: "https://github.com/langchain-ai/langchain",
    description: "Popular framework for building context-aware AI agents",
    icon: LinkIcon,
  },
  {
    title: "AutoGen",
    href: "https://github.com/microsoft/autogen",
    description:
      "Microsoft’s framework for multi-agent collaboration and orchestration",
    icon: LinkIcon,
  },
  {
    title: "CrewAI",
    href: "https://github.com/joaomdmoura/crewai",
    description: "Framework for role-based multi-agent systems",
    icon: LinkIcon,
  },
  {
    title: "LangGraph",
    href: "https://github.com/langchain-ai/langgraph",
    description: "Graph-based orchestration of multi-step AI workflows",
    icon: LinkIcon,
  },
  {
    title: "OpenAgents",
    href: "https://github.com/xlang-ai/OpenAgents",
    description: "Open platform for running and sharing AI agents",
    icon: LinkIcon,
  },
];

export default function AgentFrameworksPage() {
  return (
    <div className="container py-20 md:py-24">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            Agent Frameworks
          </h1>
          <p className="text-lg text-muted-foreground">
            Frameworks and toolkits for building autonomous and multi-agent systems.
          </p>
        </header>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {frameworks.map((resource) => (
              <Link
                href={resource.href}
                key={resource.title}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <Card className="h-full transition-all duration-300 border-border hover:border-primary hover:bg-card/80">
                  <CardHeader className="flex-row items-start gap-4">
                    <div className="w-8 pt-1">
                      <resource.icon className="h-6 w-6 text-muted-foreground group-hover:text-accent transition-colors" />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-headline leading-snug group-hover:text-primary">
                        {resource.title}
                      </CardTitle>
                      {resource.description && (
                        <p className="text-sm text-muted-foreground mt-2">
                          {resource.description}
                        </p>
                      )}
                    </div>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
