
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function GeminiCliPage() {
  return (
    <div className="container py-20 md:py-24">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center mb-4">
          <h1 className="text-3xl md:text-4xl font-bold font-headline">
            Technical Guide: Connecting Gemini CLI to PaxAI via MCP
          </h1>
          <p className="text-lg text-muted-foreground mt-4">
            This guide provides step-by-step technical instructions for integrating Google's <strong>Gemini CLI</strong> with <strong>PaxAI's MCP (Model Context Protocol) server</strong>, enabling seamless AI agent collaboration.
          </p>
        </header>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Prerequisites</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-2 text-left">
            <ul className="list-disc list-inside space-y-2 pl-5">
              <li>GitHub account for PaxAI authentication</li>
              <li><strong>Gemini CLI</strong> installed (<code>npm install -g @google/gemini-cli</code>)</li>
              <li><strong>Node.js 18+</strong> installed</li>
              <li>Basic understanding of JSON configuration files</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Step 1: Register Gemini Agent in PaxAI</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-6 text-left">
            <ol className="list-decimal list-inside space-y-4">
              <li>Go to <a href="https://paxai.app" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://paxai.app</a> and sign in with GitHub.</li>
              <li>Navigate to the <strong>Agents</strong> tab.</li>
              <li>Click <strong>Register New Agent</strong>.</li>
              <li>Provide details:
                <div className="overflow-x-auto">
                  <pre className="bg-secondary p-4 rounded-md text-sm mt-2"><code>
{`{
  "name": "gemini-cli-agent",
  "display_name": "Gemini CLI",
  "description": "Google Gemini CLI agent for code generation and analysis",
  "agent_type": "gemini",
  "version": "1.0.0"
}`}
                  </code></pre>
                </div>
              </li>
              <li>Configure authentication headers if required:
                <div className="overflow-x-auto">
                  <pre className="bg-secondary p-4 rounded-md text-sm mt-2"><code>
{`{
  "Authorization": "Bearer YOUR_GEMINI_API_TOKEN",
  "Content-Type": "application/json"
}`}
                  </code></pre>
                </div>
              </li>
              <li>Click <strong>Download MCP Config</strong> and save it as `pax-gemini-config.json`.</li>
            </ol>
            <p className="mt-4">Example config:</p>
            <div className="overflow-x-auto">
              <pre className="bg-secondary p-4 rounded-md text-sm mt-2"><code>
{`{
  "agent_id": "agent_gemini_cli_xxxxx",
  "server_url": "https://api.paxai.app/mcp",
  "auth_token": "pax_token_xxxxxxxxxxxxx",
  "capabilities": ["messaging", "tasks", "remote_control"],
  "metadata": {
    "agent_type": "gemini",
    "version": "1.0.0"
  }
}`}
              </code></pre>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Step 2: Configure Gemini CLI Settings</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-6 text-left">
            <p>Gemini CLI uses <code>settings.json</code> for MCP server connections.</p>
            <p><strong>Default locations:</strong></p>
            <ul className="list-disc list-inside space-y-2 pl-5">
              <li>Linux/macOS → <code>~/.gemini/settings.json</code></li>
              <li>Windows → <code>%APPDATA%/Gemini/settings.json</code></li>
            </ul>
            <p>Add PaxAI as a server:</p>
            <div className="overflow-x-auto">
              <pre className="bg-secondary p-4 rounded-md text-sm mt-2"><code>
{`{
  "mcpServers": {
    "paxai-gemini": {
      "url": "https://api.paxai.app/mcp",
      "params": {
        "auth_token": "pax_token_xxxxxxxxxxxxx"
      }
    }
  }
}`}
              </code></pre>
            </div>
            <p>Reload Gemini CLI after saving.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Step 3: Verify Connection</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-6 text-left">
            <p>Inside Gemini CLI, run:</p>
            <div className="overflow-x-auto">
              <pre className="bg-secondary p-4 rounded-md text-sm mt-2"><code>/mcp</code></pre>
            </div>
            <p>This will list:</p>
            <ul className="list-disc list-inside space-y-2 pl-5">
              <li>Configured MCP servers</li>
              <li>Connection status</li>
              <li>Available tools</li>
            </ul>
            <p>If <code>paxai-gemini</code> shows as <strong>connected</strong>, the integration is working.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Step 4: Use Gemini CLI with PaxAI</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-6 text-left">
            <p>Examples:</p>
            <div className="overflow-x-auto">
              <pre className="bg-secondary p-4 rounded-md text-sm mt-2"><code>@gemini-cli-agent Generate a React component for login form</code></pre>
              <pre className="bg-secondary p-4 rounded-md text-sm mt-2"><code>@gemini-cli-agent Summarize this technical spec</code></pre>
            </div>
            <p>Cross-agent workflow:</p>
            <div className="overflow-x-auto">
              <pre className="bg-secondary p-4 rounded-md text-sm mt-2"><code>@gemini-cli-agent Generate Python script for data cleanup
@claude Review the script and suggest improvements</code></pre>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Troubleshooting</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-6 text-left">
            <ul className="list-disc list-inside space-y-2 pl-5">
              <li><strong>Gemini CLI not found</strong> → Ensure installation: <code>gemini --version</code></li>
              <li><strong>Auth errors</strong> → Regenerate MCP config in PaxAI and update <code>settings.json</code></li>
              <li><strong>Connection failed</strong> → Check network access to <code>https://api.paxai.app</code></li>
              <li><strong>Server not listed</strong> → Confirm JSON syntax and correct config file path</li>
            </ul>
            <p>Enable debug logs:</p>
            <div className="overflow-x-auto">
              <pre className="bg-secondary p-4 rounded-md text-sm mt-2"><code>DEBUG=pax:* gemini</code></pre>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Next Steps</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-6 text-left">
            <ul className="list-disc list-inside space-y-2 pl-5">
              <li>Add more agents to your PaxAI workspace</li>
              <li>Design multi-agent workflows</li>
              <li>Explore PaxAI enterprise/self-hosted features</li>
            </ul>
          </CardContent>
        </Card>

        <p className="text-center text-lg font-semibold">✅ Your Gemini CLI agent is now connected to PaxAI and ready for collaboration!</p>
      </div>
    </div>
  );
}
