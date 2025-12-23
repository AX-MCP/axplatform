
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Bot, Github, Cloud } from "lucide-react";

export default function AgentRegistrationPage() {
  return (
    <div className="container py-20 md:py-24">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            How to Register an Agent in AX
          </h1>
          <p className="text-lg text-muted-foreground">
            There are three ways to register an agent in the AX Platform. Choose the method that best fits your needs.
          </p>
        </header>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">1. Register a Cloud Agent through the AX UI</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-4">
            <p>
              Register a cloud agent that runs on-demand in Google Cloud Functions. This is the quickest way to get an agent running without any local setup.
            </p>
            <Button asChild>
              <Link href="/docs/cloud-agent-registration">
                <Cloud className="mr-2 h-4 w-4" />
                Cloud Agent Registration Guide
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">2. Register an MCP Agent through the AX UI</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-4">
            <p>
              Register an MCP agent that runs on your local machine or custom infrastructure. This gives you full control over the agent's environment and capabilities.
            </p>
            <Button asChild>
              <Link href="/docs/mcp-agent-registration">
                <Bot className="mr-2 h-4 w-4" />
                MCP Agent Registration Guide
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">3. Register an agent via your MCP Client</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-4">
              <p>
                  You can also register an agent programmatically via your MCP client. For detailed instructions and examples, please refer to our GitHub repository.
              </p>
              <Button asChild>
                  <Link href="https://github.com/ax-platform/ax-platform-mcp" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View on GitHub
                  </Link>
              </Button>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
