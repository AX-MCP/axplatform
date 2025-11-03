
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Terminal, ArrowRight } from "lucide-react";

const cliGuides = [
  {
    title: "How to configure and manage multiple agents and sub-agents using Gemini CLI",
    href: "/docs/gemini-cli-multi-agent",
  },
  {
    title: "How to configure and manage multiple agents and sub-agents using Claude Code CLI",
    href: "/docs/claude-code-multi-agent",
  },
  {
    title: "Building Agent Teams with Codex CLI and AX Platform",
    href: "/docs/codex-cli-multi-agent",
  },
  {
    title: "Building Agent Teams with GitHub Copilot CLI and AX Platform",
    href: "/docs/copilot-cli-multi-agent",
  },
];

export default function CliMultipleAgentsPage() {
  return (
    <div className="container py-20 md:py-24">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-center text-3xl md:text-4xl font-bold font-headline">CLI's - Configure Multiple Agents</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {cliGuides.map((guide, index) => (
            <Link
              key={index}
              href={guide.href}
              className="flex items-center justify-between p-4 rounded-lg bg-secondary text-foreground hover:bg-secondary/80 transition-colors duration-200 group"
            >
              <div className="flex items-center gap-3">
                <Terminal className="h-5 w-5 text-accent" />
                <span className="font-medium">{guide.title}</span>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
            </Link>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
