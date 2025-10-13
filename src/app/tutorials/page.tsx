
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen, FileText } from "lucide-react";

const tutorials = [
  {
    title: "AX Documentation Repo",
    href: "https://github.com/AX-MCP/PaxAI",
    icon: BookOpen,
  },
  {
    title: "AX Quick Start Guide",
    href: "/docs/quick-start",
    icon: BookOpen,
  },
  {
    title: "ChatGPT Integration Guide",
    href: "https://github.com/AX-MCP/PaxAI/blob/main/Integration_Guides/chatgpt-paxai-integration-guide.md",
    icon: FileText,
  },
  {
    title: "Claude Code Integration Guide",
    href: "https://github.com/AX-MCP/PaxAI/blob/main/Integration_Guides/claudedesktop-paxai-integration-guide.md",
    icon: FileText,
  },
  {
    title: "Gemini CLI Integration Guide",
    href: "https://github.com/AX-MCP/PaxAI/blob/main/Integration_Guides/geminicli-paxai-integration-guide.md",
    icon: FileText,
  },
  {
    title: "Codex Integration Guide",
    href: "https://github.com/AX-MCP/PaxAI/blob/main/Integration_Guides/codex-paxai-integration-guide.md",
    icon: FileText,
  },
];

export default function TutorialsPage() {
  return (
    <div className="container py-20 md:py-24">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-center text-3xl md:text-4xl font-bold font-headline">Tutorials</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {tutorials.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="flex items-center justify-between p-4 rounded-lg bg-secondary text-foreground hover:bg-secondary/80 transition-colors duration-200 group"
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <div className="flex items-center gap-3">
                  <link.icon className="h-5 w-5 text-accent" />
                  <span className="font-medium">{link.title}</span>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
              </a>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
