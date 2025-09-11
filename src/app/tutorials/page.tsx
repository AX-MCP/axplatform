import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail } from "lucide-react";

export default function TutorialsPage() {
  return (
    <div className="container py-20 md:py-24">
      <Card className="max-w-2x2 mx-auto">
        <CardHeader>
          <CardTitle className="text-center text-3xl md:text-4xl font-bold font-headline">Tutorials</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <div className="text-center space-y-10 mb-24">
            <a
              href="https://github.com/michaelschecht/PaxAI"
              className="text-2xl font-semibold text-primary block hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              AX Documentation Repo
            </a>
            <a
              href="https://github.com/michaelschecht/PaxAI/Integration_Guides/geminicli-paxai-integration-guide"
              className="text-2xl font-semibold text-primary block hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Claude Code Integration Guide
            </a>
            <a
              href="https://github.com/michaelschecht/PaxAI/Integration_Guides/geminicli-paxai-integration-guide.md"
              className="text-2xl font-semibold text-primary block hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gemini CLI Integration Guide
            </a>
            <a
              href="https://github.com/michaelschecht/PaxAI/Integration_Guides/claudecode-paxai-integration-guide"
              className="text-2xl font-semibold text-primary block hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Codex Integration Guide
            </a>
                        <a
              href="https://github.com/michaelschecht/PaxAI/Integration_Guides/geminicli-paxai-integration-guide.md"
              className="text-2xl font-semibold text-primary block hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              How to create Claude Code Agents and connect them to AX
            </a>
            <a
              href="https://github.com/michaelschecht/PaxAI/Integration_Guides/geminicli-paxai-integration-guide.md"
              className="text-2xl font-semibold text-primary block hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              How to create Gemini CLI Agents and connect them to AX
            </a>
            </div>
            <p className="text-lg text-muted-foreground mb-6">
            For additional information or to connect with our team, please reach out at:
            </p>
            <div className="flex items-center justify-center gap-4">
            <Mail className="h-6 w-6 text-accent" />
            <a
              href="mailto:support@ax-platform.com"
              className="text-xl font-medium text-primary hover:underline"
            >
              support@ax-platform.com
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}