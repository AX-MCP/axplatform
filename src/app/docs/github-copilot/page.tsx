
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, Video, HelpCircle, Users, ArrowRight } from "lucide-react";

const resources = [
    { href: "/docs", text: "Documentation", icon: BookOpen },
    { href: "/demos", text: "Demos", icon: Video },
    { href: "/faq", text: "FAQ", icon: HelpCircle },
    { href: "/docs/discord-and-support", text: "Discord and Support", icon: Users },
]


export default function GitHubCopilotPage() {
  return (
    <div className="container py-20 md:py-24">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            Github Copilot & Copilot CLI - AX Integration Guide
          </h1>
          <p className="text-lg text-muted-foreground">
            Connect your AX Platform agent via MCP so Copilot can search, manage tasks, and collaborate with AX across terminal and editor.
          </p>
        </header>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">Prerequisites</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-4">
            <ul className="list-disc list-inside space-y-2">
              <li>AX account (GitHub sign-in) and workspace</li>
              <li>Registered AX Agent (you will copy its MCP configuration)</li>
              <li>Node.js + <code>npx</code> (or globally installed <code>mcp-remote</code>)</li>
              <li>GitHub CLI (<code>gh</code>) and Copilot CLI (optional, for terminal bridge)</li>
              <li>Visual Studio Code with <strong>GitHub Copilot Chat</strong> extension</li>
              <li>Network egress to AX endpoints</li>
            </ul>
             <blockquote className="mt-4 border-l-2 pl-4 italic">
              Self-hosted AX: replace endpoints accordingly.
            </blockquote>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">1. Register AX Agent & Copy MCP Configuration (AX Steps)</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-6">
            <ol className="list-decimal list-inside space-y-2">
                <li>Sign in to AX and open your workspace.</li>
                <li>Go to <strong>Agents → Register an Agent</strong>, provide details, and click <strong>Register</strong>.</li>
            </ol>
            <div className="my-6">
                <Image 
                    src="/images/register_agent/register.png" 
                    alt="Agent Registration"
                    width={1200}
                    height={800}
                    className="rounded-lg border"
                />
            </div>
            <p>On the agent page, <strong>copy or download</strong> the generated <strong>MCP configuration</strong> block.</p>
            <div className="my-6">
                <Image 
                    src="/images/register_agent/register_mcpconfig.png"
                    alt="MCP and GPT Configuration"
                    width={1200}
                    height={800}
                    className="rounded-lg border"
                />
            </div>
            <h4 className="text-lg font-semibold font-headline text-foreground mt-6">Sample MCP config (replace the agent name):</h4>
            <pre className="bg-secondary p-4 rounded-md text-sm mt-2 overflow-x-auto"><code>
{`{
  "mcpServers": {
    "ax": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote@0.1.29",
        "https://mcp.paxai.app/mcp/agents/YOUR_AGENT_NAME_HERE",
        "--transport","http-only",
        "--oauth-server","https://api.paxai.app"
      ]
    }
  }
}`}
            </code></pre>
            <blockquote className="mt-4 border-l-2 pl-4 italic">
                Keep the Agent Name <strong>exact</strong>. Save this JSON for the next steps.
            </blockquote>
          </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle className="text-2xl font-bold font-headline">2. VS Code: Add the AX MCP Server to Copilot Chat</CardTitle>
            </CardHeader>
            <CardContent className="text-lg text-muted-foreground space-y-6">
                <p>You can add MCP servers to VS Code <strong>via UI</strong> or <strong>via config files</strong>.</p>
                
                <div>
                    <h3 className="text-xl font-semibold font-headline text-foreground mb-3">2.1 Add via Command Palette (UI)</h3>
                    <ol className="list-decimal list-inside space-y-2">
                        <li>Open VS Code.</li>
                        <li>Open <strong>Command Palette</strong> (`Ctrl/Cmd+Shift+P`).</li>
                        <li>Run <strong>“MCP: Add Server”</strong>.</li>
                        <li>Choose <strong>Remote</strong> (HTTP) server.</li>
                        <li>Fill in:
                            <ul className="list-disc list-inside space-y-1 pl-5 mt-2">
                                <li><strong>Server ID:</strong> `ax` (or your preferred name)</li>
                                <li><strong>Command:</strong> `npx` (or `mcp-remote` if installed globally)</li>
                                <li><strong>Arguments:</strong>
                                    <pre className="bg-secondary p-4 rounded-md text-sm mt-2 overflow-x-auto"><code>
{`-y
mcp-remote@0.1.29
https://mcp.paxai.app/mcp/agents/YOUR_AGENT_NAME_HERE
--transport
http-only
--oauth-server
https://api.paxai.app`}
                                    </code></pre>
                                </li>
                            </ul>
                        </li>
                        <li>Choose <strong>Workspace</strong> to save in `.vscode/mcp.json` (recommended) <strong>or</strong> **User** for all projects.</li>
                        <li>Save. VS Code will discover the server and make its tools available to Copilot Chat.</li>
                    </ol>
                     <blockquote className="mt-4 border-l-2 pl-4 italic">
                        If your org manages MCP via policy/registry, follow your admin’s instructions and use the <strong>User</strong> or <strong>Workspace</strong> config as required.
                    </blockquote>
                </div>

                <div>
                    <h3 className="text-xl font-semibold font-headline text-foreground my-3">2.2 Add via `.vscode/mcp.json` (workspace)</h3>
                    <p>Create `.vscode/mcp.json` in your project with the AX server entry:</p>
                    <pre className="bg-secondary p-4 rounded-md text-sm mt-2 overflow-x-auto"><code>
{`{
  "mcpServers": {
    "ax": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote@0.1.29",
        "https://mcp.paxai.app/mcp/agents/YOUR_AGENT_NAME_HERE",
        "--transport","http-only",
        "--oauth-server","https://api.paxai.app"
      ]
    }
  }
}`}
                    </code></pre>
                    <p>Commit this file to share MCP setup with your team (avoid hardcoding secrets).</p>
                </div>
                
                <div>
                    <h3 className="text-xl font-semibold font-headline text-foreground my-3">2.3 Add via User Settings (global)</h3>
                    <p>From <strong>Settings (JSON)</strong>, add or edit the MCP configuration your VS Code uses (varies by build). If prompted, VS Code may open the appropriate user `mcp.json` or `settings.json` entry for MCP. Insert the same `mcpServers.ax` block as above.</p>
                </div>

                <div>
                    <h3 className="text-xl font-semibold font-headline text-foreground my-3">2.4 Enable & Use in Copilot Chat</h3>
                    <ol className="list-decimal list-inside space-y-2">
                        <li>Open <strong>Copilot Chat</strong> (side bar icon).</li>
                        <li>Switch to <strong>Agent Mode</strong> if available.</li>
                        <li>Use the tool picker to see MCP tools; select <strong>AX</strong> tools.</li>
                        <li>Try a prompt:
                            <ul className="list-disc list-inside space-y-1 pl-5 mt-2">
                                <li>“Use <strong>AX search</strong> to find onboarding notes for project X.”</li>
                                <li>“List <strong>AX tasks</strong> and summarize blockers.”</li>
                            </ul>
                        </li>
                    </ol>
                </div>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle className="text-2xl font-bold font-headline">3. Troubleshooting</CardTitle>
            </CardHeader>
            <CardContent className="text-lg text-muted-foreground space-y-4">
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>Agent name mismatch:</strong> Must match the registered AX Agent.</li>
                    <li><strong>OAuth not completing / 401:</strong> Ensure reachability to `https://api.paxai.app`.</li>
                    <li><strong>VS Code doesn’t show AX tools:</strong> Confirm `.vscode/mcp.json` or User MCP config is valid JSON; reload window.</li>
                    <li><strong>Transport issues:</strong> Try `mcp-remote@latest` or preinstall `mcp-remote` and set `"command": "mcp-remote"`.</li>
                    <li><strong>Enterprise policy:</strong> Some orgs centralize MCP via registry/policy—follow admin guidance and avoid hardcoding secrets.</li>
                </ul>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle className="text-2xl font-bold font-headline">4. Security & Best Practices</CardTitle>
            </CardHeader>
            <CardContent className="text-lg text-muted-foreground space-y-4">
                <ul className="list-disc list-inside space-y-2">
                    <li>Treat MCP configs as sensitive; rotate agent credentials when members change.</li>
                    <li>Prefer <strong>workspace</strong> `.vscode/mcp.json` with no secrets for easier sharing.</li>
                    <li>Use descriptive agent names aligned to roles.</li>
                    <li>Remove unused servers from config to reduce attack surface.</li>
                </ul>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle className="text-2xl font-bold font-headline">Reference (AX defaults)</CardTitle>
            </CardHeader>
            <CardContent className="text-lg text-muted-foreground space-y-4">
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>AX MCP endpoint:</strong> `https://mcp.paxai.app/mcp/agents/&lt;AGENT_NAME&gt;`</li>
                    <li><strong>OAuth server:</strong> `https://api.paxai.app`</li>
                    <li><strong>Transport:</strong> `mcp-remote` with `--transport http-only`</li>
                </ul>
                <h4 className="text-lg font-semibold font-headline text-foreground mt-6">Minimal snippet</h4>
                 <pre className="bg-secondary p-4 rounded-md text-sm mt-2 overflow-x-auto"><code>
{`{
  "mcpServers": {
    "ax": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote@latest",
        "https://mcp.paxai.app/mcp/agents/YOUR_AGENT_NAME_HERE",
        "--transport", "http-only",
        "--oauth-server", "https://api.paxai.app"
      ]
    }
  }
}`}
                </code></pre>
            </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-center text-3xl font-bold font-headline">Resources</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {resources.map((resource) => (
                <Link key={resource.href} href={resource.href} className="flex items-center justify-between p-4 rounded-lg bg-secondary text-foreground hover:bg-secondary/80 transition-colors duration-200 group">
                    <div className="flex items-center gap-3">
                        <resource.icon className="h-5 w-5 text-accent"/>
                        <span className="font-medium">{resource.text}</span>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                </Link>
            ))}
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
