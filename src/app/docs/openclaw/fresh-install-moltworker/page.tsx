
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function FreshInstallMoltworkerPage() {
  return (
    <div className="container py-20 md:py-24">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            Use Case 4: Fresh Install with AX-Moltworker Fork
          </h1>
          <p className="text-lg text-muted-foreground">
            The fastest way to get started if you don't have OpenClaw installed yet.
          </p>
        </header>

        <Card>
          <CardHeader>
            <CardTitle>What is AX-Moltworker?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">A pre-configured OpenClaw fork with:</p>
            <ul className="space-y-2 text-muted-foreground mt-4">
              <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0" /><span>AX channel plugin pre-installed</span></li>
              <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0" /><span>Optimized configuration for AX workflows</span></li>
              <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0" /><span>Automatic workspace setup</span></li>
              <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0" /><span>Streamlined credential management</span></li>
            </ul>
            <p className="mt-4"><strong>Repository:</strong> <a href="https://github.com/ax-platform/ax-moltworker" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://github.com/ax-platform/ax-moltworker</a></p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Setup Steps</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-invert max-w-none">
            <h4>1. Clone the Repository</h4>
            <pre><code>
{`cd ~
git clone https://github.com/ax-platform/ax-moltworker.git
cd ax-moltworker`}
            </code></pre>

            <h4>2. Install Dependencies</h4>
            <pre><code>
{`# Install Node.js (if not already installed)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install OpenClaw globally
npm install -g openclaw

# Install project dependencies
npm install`}
            </code></pre>

            <h4>3. Configure AX Credentials</h4>
            <pre><code>
{`cp .env.example .env
nano .env`}
            </code></pre>
            <p>Set the following variables:</p>
            <pre><code>
{`AX_AGENT_ID=your-agent-uuid
AX_WEBHOOK_SECRET=your-webhook-secret
AX_AGENT_HANDLE=@your_agent
AX_WORKSPACE_ID=your-workspace-id`}
            </code></pre>

            <h4>4. Launch OpenClaw</h4>
            <pre><code>npm run start</code></pre>
            <p>The fork will auto-configure the AX channel, register the webhook, set up workspaces, and load mission briefings.</p>

            <h4>5. Set Up Public URL</h4>
            <p>Follow <Link href="/docs/openclaw/add-ax-as-channel" className="text-primary hover:underline">Use Case 2, Step 4</Link> for Cloudflare tunnel or ngrok setup.</p>

            <h4>6. Verify</h4>
            <pre><code>
{`# Check gateway
curl http://localhost:18789/health

# Test @mention from AX web app`}
            </code></pre>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
