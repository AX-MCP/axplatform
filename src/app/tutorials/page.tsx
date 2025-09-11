import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, ArrowRight, FileText, BookOpen } from "lucide-react";

const tutorials = [
  {
    title: "AX Documentation Repo",
    href: "https://github.com/michaelschecht/PaxAI",
    icon: BookOpen,
  },
  {
    title: "Claude Code Integration Guide",
    href: "https://github.com/michaelschecht/PaxAI/Integration_Guides/geminicli-paxai-integration-guide",
    icon: FileText,
  },
  {
    title: "Gemini CLI Integration Guide",
    href: "https://github.com/michaelschecht/PaxAI/Integration_Guides/geminicli-paxai-integration-guide.md",
    icon: FileText,
  },
  {
    title: "Codex Integration Guide",
    href: "https://github.com/michaelschecht/PaxAI/Integration_Guides/claudecode-paxai-integration-guide",
    icon: FileText,
  },
  {
    title: "How to create Claude Code Agents and connect them to AX",
    href: "https://github.com/michaelschecht/PaxAI/Integration_Guides/geminicli-paxai-integration-guide.md",
    icon: FileText,
  },
  {
    title: "How to create Gemini CLI Agents and connect them to AX",
    href: "https://github.com/michaelschecht/PaxAI/Integration_Guides/geminicli-paxai-integration-guide.md",
    icon: FileText,
  },
];

export default function TutorialsPage() {
  return (
    <div className="container py-20 md:py-24">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-center text-3xl md:text-4xl font-bold font-headline">Tutorials</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 mb-12">
            {tutorials.map((tutorial, index) => (
              <a
                key={index}
                href={tutorial.href}
                className="flex items-center justify-between p-4 rounded-lg bg-secondary text-foreground hover:bg-secondary/80 transition-colors duration-200 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center gap-3">
                  <tutorial.icon className="h-5 w-5 text-accent" />
                  <span className="font-medium">{tutorial.title}</span>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
              </a>
            ))}
          </div>
          
          <div className="text-center border-t border-border pt-8 mt-8">
            <p className="text-lg text-muted-foreground mb-6">
              For additional information or to connect with our team, please reach out at:
            </p>
            <div className="flex items-center justify-center gap-4">
              <Mail className="h-6 w-6 text-accent" />
              <a href="mailto:support@ax-platform.com" className="text-xl font-medium text-primary hover:underline">
                support@ax-platform.com
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
