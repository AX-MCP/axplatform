
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Terminal } from "lucide-react";

export default function GeminiCliMultiAgentPage() {
  return (
    <div className="container py-20 md:py-24">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            Guide: Setting Up Multiple Agents and Sub-Agents in Gemini CLI
          </h1>
          <p className="text-lg text-muted-foreground">
            This guide explains how to configure and manage multiple agents and sub-agents using <strong>Gemini CLI</strong>.
          </p>
        </header>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">Prerequisites</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground">
            <ul className="list-disc list-inside space-y-2">
              <li>Installed and configured <strong>Gemini CLI</strong></li>
              <li>Valid API key or authentication credentials</li>
              <li>Node.js v18+ or Python 3.10+ (depending on setup)</li>
              <li>Access to the workspace or project where the agents will run</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">1. Setting Up the Gemini CLI</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-lg text-muted-foreground">
            <div>
              <h3 className="font-semibold text-foreground mb-2">1. Install Gemini CLI:</h3>
              <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto"><code>npm install -g @google/gemini-cli</code></pre>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">2. Authenticate:</h3>
              <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto"><code>gemini auth login</code></pre>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">3. Initialize your project:</h3>
              <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto"><code>gemini init my-multi-agent-project</code></pre>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">2. Creating Multiple Agents</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-lg text-muted-foreground">
            <p>Gemini allows multiple agent definitions within one workspace.</p>
            <div>
              <h3 className="font-semibold text-foreground mb-2">1. Create your first agent:</h3>
              <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto"><code>gemini agent create --name main-agent --model gemini-1.5-pro</code></pre>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">2. Add another agent:</h3>
              <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto"><code>gemini agent create --name assistant-agent --model gemini-1.5-flash</code></pre>
            </div>
             <div>
              <h3 className="font-semibold text-foreground mb-2">3. List all agents:</h3>
              <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto"><code>gemini agent list</code></pre>
            </div>
            <p>Each agent can have unique configuration parameters such as temperature, max tokens, and prompt templates.</p>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Example configuration file (`agents.yaml`):</h3>
              <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto"><code>
{`agents:
  - name: main-agent
    model: gemini-1.5-pro
    description: Primary reasoning agent
  - name: assistant-agent
    model: gemini-1.5-flash
    description: Quick-response helper`}
              </code></pre>
            </div>
          </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle className="text-2xl font-bold font-headline">3. Setting Up Sub-Agents</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-lg text-muted-foreground">
                <p>Sub-agents are child processes or specialized models under a parent agent.</p>
                 <div>
                  <h3 className="font-semibold text-foreground mb-2">1. Create a sub-agent:</h3>
                  <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto"><code>gemini agent create --name summarizer --parent main-agent --model gemini-1.5-mini</code></pre>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">2. Define sub-agent hierarchy in config:</h3>
                  <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto"><code>
{`agents:
     - name: main-agent
       subagents:
         - summarizer
         - retriever`}
                  </code></pre>
                </div>
                 <div>
                  <h3 className="font-semibold text-foreground mb-2">3. Invoke sub-agents programmatically:</h3>
                  <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto"><code>gemini agent run summarizer --input "Summarize this text..."</code></pre>
                </div>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle className="text-2xl font-bold font-headline">4. Managing Multi-Agent Workflows</CardTitle>
            </CardHeader>
            <CardContent className="text-lg text-muted-foreground">
                <p>You can orchestrate multiple agents using <code>gemini workflow</code> commands.</p>
                <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto mt-4"><code>
{`gemini workflow create --name multi-agent-demo
gemini workflow add-agent main-agent
gemini workflow add-agent assistant-agent
gemini workflow run --input "Plan a product launch with detailed steps."`}
                </code></pre>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle className="text-2xl font-bold font-headline">5. Debugging and Logs</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-lg text-muted-foreground">
                 <div>
                  <h3 className="font-semibold text-foreground mb-2">View all logs for your agents:</h3>
                  <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto"><code>gemini logs --agent main-agent</code></pre>
                </div>
                 <div>
                  <h3 className="font-semibold text-foreground mb-2">For real-time monitoring:</h3>
                  <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto"><code>gemini watch --agent assistant-agent</code></pre>
                </div>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
