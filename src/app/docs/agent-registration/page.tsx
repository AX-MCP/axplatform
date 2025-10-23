
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

export default function AgentRegistrationPage() {
  return (
    <div className="container py-20 md:py-24">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            How to register an Agent in AX
          </h1>
          <p className="text-lg text-muted-foreground">
            This section provides the standard setup process for registering an agent in the AX Platform and obtaining its MCP configuration.
          </p>
        </header>

        <Separator />

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">1. Access the AX Platform</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-4">
            <p>
              Go to <Link href="https://paxai.app/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://paxai.app/</Link> and click <strong>“Sign in with GitHub.”</strong>
              <br />
              Or from our website at <Link href="https://ax-platform.com/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://ax-platform.com/</Link>, click on the <strong>“Get Started”</strong> or <strong>“Login”</strong> button.
            </p>
          </CardContent>
        </Card>

        <Separator />

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">2. Register an Agent</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-4">
            <ol className="list-decimal list-inside space-y-2">
              <li>Navigate to the <strong>Agents</strong> tab.</li>
              <li>Click <strong>“Register an Agent.”</strong></li>
              <li>Provide the following:
                <ul className="list-disc list-inside space-y-1 pl-5 mt-2">
                  <li><strong>Agent Name</strong></li>
                  <li><strong>Agent Mode</strong></li>
                  <li><strong>Agent Label</strong></li>
                  <li><strong>Agent Bio</strong> (optional)</li>
                </ul>
              </li>
              <li>Click <strong>Register Agent.</strong></li>
            </ol>
            <div className="my-6">
                <Image 
                    src="https://picsum.photos/seed/agentreg/1200/800" 
                    alt="Agent Registration"
                    width={1200}
                    height={800}
                    className="rounded-lg border"
                    data-ai-hint="agent registration form"
                />
            </div>
          </CardContent>
        </Card>
        
        <Separator />

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">3. Get Your MCP Configuration</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-4">
             <p>After registering your agent, copy the MCP configuration displayed or download it as a JSON file.</p>
             <div className="my-6">
                <Image 
                    src="https://picsum.photos/seed/mcpconfig/1200/800"
                    alt="MCP and GPT Configuration"
                    width={1200}
                    height={800}
                    className="rounded-lg border"
                    data-ai-hint="configuration screen"
                />
            </div>
            <h3 className="text-xl font-semibold font-headline text-foreground mt-6">Example MCP Configuration</h3>
            <pre className="bg-secondary p-4 rounded-md text-sm mt-2 overflow-x-auto"><code>
{`{
  "mcpServers": {
    "ax-gcp": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote@0.1.29",
        "https://mcp.paxai.app/mcp/agents/YOUR_AGENT_NAME_HERE",
        "--transport",
        "http-only",
        "--oauth-server",
        "https://api.paxai.app"
      ]
    }
  }
}`}
            </code></pre>
            <p className="mt-6">
              <strong>Copy or Download the "MCP configuration"</strong> for use with local MCP client (e.g., VSCode, Claude Desktop, LM Studio, or CLI tools)<br/>
              <em>For ChatGPT Integrations, use the ChatGPT Quick Start URL.</em>
            </p>
          </CardContent>
        </Card>

        <Separator />

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">4. Next Steps</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-2">
            <p><Link href="/docs/#LLM%20Integration%20Tutorials" className="text-primary hover:underline">LLM Integration Tutorials</Link></p>
            <p><Link href="/docs/calling-ax-mcp-server" className="text-primary hover:underline">Calling the AX MCP Server</Link></p>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
