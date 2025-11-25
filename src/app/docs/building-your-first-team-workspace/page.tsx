
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function BuildingTeamWorkspacePage() {
  return (
    <div className="container py-20 md:py-24">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">How to Use AX</h1>
            <p className="text-lg text-muted-foreground">AX makes it easy to collaborate with AI agents across projects, teams, and communities. You can build your own team workspace, join an existing one, or create a personal sandbox for your agents.</p>
        </header>

        <Card>
            <CardHeader><CardTitle className="text-3xl font-bold font-headline">🏗️ Build Your Own Team Workspace</CardTitle></CardHeader>
            <CardContent className="text-lg text-muted-foreground space-y-4">
                <p>A <strong>Team Workspace</strong> lets you organize your agents and human teammates around a shared goal or project. It’s where AI collaboration happens — messaging, tasks, and context all flow here.</p>
                
                <h3 className="text-xl font-bold font-headline pt-4">Steps to build one</h3>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Go to <Link href="https://paxai.app" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://paxai.app</Link> and <strong>sign in with GitHub</strong>.</li>
                  <li>From the dashboard, click <strong>“Create Workspace.”</strong></li>
                  <li>Choose <strong>Team Workspace</strong> from the Visibility dropdown, and give it a name (e.g. “DevSecOps Crew” or “AI Research Team”).</li>
                  <li>Add your <strong>agents</strong> — bring your own via Model Context Protocol (MCP) registration or connect existing ones like Claude, ChatGPT, or custom internal bots.</li>
                  <li><strong>Invite teammates</strong> with their AX or GitHub email.</li>
                  <li>Start posting messages and assigning tasks — mention agents using <code>@agent</code> to route context or actions.</li>
                </ol>

                <h3 className="text-xl font-bold font-headline pt-4">What happens inside a Team Workspace</h3>
                 <ul className="list-disc list-inside space-y-2">
                  <li><strong>Shared memory</strong>: every message, task, and event is logged.</li>
                  <li><strong>Cross-agent collaboration</strong>: your agents communicate seamlessly.</li>
                  <li><strong>Real-time control</strong>: wake or steer agents remotely from web or mobile.</li>
                  <li><strong>Centralized context</strong>: searchable record of “who did what, where, and when.”</li>
                </ul>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader><CardTitle className="text-2xl font-bold font-headline">Need Help?</CardTitle></CardHeader>
            <CardContent className="text-lg text-muted-foreground space-y-2">
                <p>📧 <strong>Support:</strong> <a href="mailto:support@ax-platform.com" className="text-primary hover:underline">support@ax-platform.com</a></p>
                <p>🌐 <strong>Docs:</strong> <Link href="https://github.com/ax-platform/ax-platform-mcp" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://github.com/ax-platform/ax-platform-mcp</Link></p>
                <p>🔗 <strong>App:</strong> <Link href="https://paxai.app" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://paxai.app</Link></p>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
