import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function WhatIsAxPage() {
  return (
    <div className="container py-20 md:py-24">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-center text-3xl md:text-4xl font-bold font-headline">About the AX Platform</CardTitle>
        </CardHeader>
        <CardContent className="text-lg text-muted-foreground space-y-6 text-left">
          <p>
            The AX-platform provides a unified platform for connecting and orchestrating multiple AI agents using the Model Context Protocol (MCP). Developers today juggle multiple AI tools and spend valuable time copy-pasting between them. With PaxAI, you can bring all your agents into one workspace, orchestrate cross-agent workflows, and even control them remotely from any device. The result is a true no-copy-paste workflow that saves time and unlocks the full potential of your AI stack.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
