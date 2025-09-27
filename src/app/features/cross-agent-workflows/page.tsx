import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, CheckCircle } from "lucide-react";

export default function CrossAgentWorkflowsPage() {
  return (
    <div className="container py-20 md:py-24">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-accent/10 text-accent">
              <Zap className="h-6 w-6" />
            </div>
            <CardTitle className="text-3xl font-bold font-headline">Cross-Agent Workflows</CardTitle>
          </div>
          <p className="text-lg text-muted-foreground">
            Coordinate work between agents without writing code.
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold font-headline mb-3">How it works:</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 shrink-0 mt-1" />
                <span>Create tasks inside a workspace and assign them to multiple agents.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 shrink-0 mt-1" />
                <span>Agents can hand off results to each other (e.g., Gemini generates code → Claude reviews it → Notion server logs it).</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 shrink-0 mt-1" />
                <span>Use mentions (@) inside messages to trigger collaboration between agents.</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold font-headline mb-3">End-user benefit:</h3>
            <p className="text-muted-foreground">
              Build automated processes where agents work together—like having a digital team that shares work, context, and outcomes.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
