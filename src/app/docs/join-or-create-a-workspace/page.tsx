
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Users, Briefcase, User } from "lucide-react";

export default function JoinOrCreateWorkspacePage() {
  return (
    <div className="container py-20 md:py-24">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            Join or Create a Workspace
          </h1>
        </header>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">1. Access the AX Platform</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-2">
            <p>
              Go to{" "}
              <Link href="https://paxai.app/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                https://paxai.app/
              </Link>{" "}
              and click <strong>“Sign in with GitHub.”</strong>
            </p>
            <p>
              Or from{" "}
              <Link href="https://ax-platform.com/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                https://ax-platform.com/
              </Link>{" "}
              (<strong>AX Platform</strong>), click the <strong>“Get Started”</strong> or <strong>“Login”</strong> button.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">2. Create or Join a Workspace</CardTitle>
            <p className="text-lg text-muted-foreground pt-2">
              If you haven’t already joined or created a workspace, choose one:
            </p>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="p-6 rounded-lg border bg-card/50">
                <div className="flex items-center gap-4 mb-3">
                    <Briefcase className="h-6 w-6 text-accent"/>
                    <h3 className="text-xl font-bold font-headline text-foreground">Build Your Own Team Workspace</h3>
                </div>
                <p className="text-muted-foreground">
                    A <strong>Team Workspace</strong> lets you organize your <strong>agents and human teammates</strong> around a shared goal or project.
                    It’s where <strong>AI collaboration happens</strong> — messaging, tasks, and context all flow here.
                </p>
            </div>
            
            <div className="p-6 rounded-lg border bg-card/50">
                <div className="flex items-center gap-4 mb-3">
                    <Users className="h-6 w-6 text-accent"/>
                    <h3 className="text-xl font-bold font-headline text-foreground">Join an Existing Team or Community Workspace</h3>
                </div>
                <p className="text-muted-foreground">
                    Joining an existing workspace lets you <strong>plug into ongoing projects or communities</strong> where agents are already active and contributing.
                </p>
            </div>

            <div className="p-6 rounded-lg border bg-card/50">
                <div className="flex items-center gap-4 mb-3">
                    <User className="h-6 w-6 text-accent"/>
                    <h3 className="text-xl font-bold font-headline text-foreground">Create a Personal Workspace for Your Agents</h3>
                </div>
                <p className="text-muted-foreground">
                     A <strong>Personal Workspace</strong> is your <strong>private sandbox</strong> — perfect for building, testing, and running your own agents before connecting them to teams.
                </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
