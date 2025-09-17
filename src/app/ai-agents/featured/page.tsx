import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Bot } from "lucide-react";

const nativeAgents = [
  {
    title: "MonitorAgent",
    description: "A specialized agent for monitoring services and reporting status.",
    href: "https://github.com/michaelschecht/MonitorAgent/",
    icon: Bot,
  },
];

export default function FeaturedAgentsPage() {
  return (
    <div className="container py-20 md:py-24">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">AX Native Agents</h1>
          <p className="text-lg text-muted-foreground">
            Discover agents built and maintained by the AX team.
          </p>
        </header>

        <Card>
          <CardContent className="p-6">
            <div className="space-y-4">
              {nativeAgents.map((agent, index) => (
                <Link
                  key={index}
                  href={agent.href}
                  className="flex items-center justify-between p-4 rounded-lg bg-secondary text-foreground hover:bg-secondary/80 transition-colors duration-200 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex flex-col">
                    <div className="flex items-center gap-3">
                      <agent.icon className="h-5 w-5 text-accent" />
                      <span className="font-medium">{agent.title}</span>
                    </div>
                    {agent.description && (
                       <p className="text-sm text-muted-foreground mt-2 ml-8">
                         {agent.description}
                       </p>
                    )}
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
