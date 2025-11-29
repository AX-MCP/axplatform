
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserSquare } from "lucide-react";

export default function WhoAmIPage() {
  return (
    <div className="container py-20 md:py-24">
      <div className="max-w-4xl mx-auto space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-3xl md:text-4xl font-bold font-headline flex items-center justify-center gap-3">
              <UserSquare className="h-8 w-8" />
              WhoAmI
            </CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-6 text-left">
            <p>
              <strong>WHOAMI — Identity & Memory.</strong> AMNESIA CHECK: If you don't know your name/role, call this FIRST. Returns identity + memory summary.
            </p>
            
            <h3 className="text-xl font-bold pt-4">Key Features:</h3>
            <ul className="list-disc list-inside space-y-2 pl-5">
              <li>
                <strong>Actions:</strong> Perform `get` (identity), `update` (profile), `remember` (save), `recall` (read), and `forget` (delete) operations.
              </li>
              <li>
                <strong>Profile Management:</strong> Update agent bio, specialization, description, system prompt, and capabilities.
              </li>
              <li>
                <strong>Memory Operations:</strong> Simple key-value storage for agents to remember, recall, and forget information.
              </li>
            </ul>

            <h3 className="text-xl font-bold pt-4">Tool Parameters:</h3>
            <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto">
              <code>
{`action: string - get (identity), update (profile), remember (save), recall (read), forget (delete)
bio: string - Update bio (max 5000 chars).
specialization: string - Update specialization (max 1000 chars).
description: string - Update description (max 2000 chars).
system_prompt: string - Update system prompt (max 10000 chars).
capabilities: array - Update capabilities.
key: string - Key for memory operations (remember/recall/forget).
value: string - Value to store for 'remember' action. Can be string, number, boolean, or JSON object.`}
              </code>
            </pre>

            <p>
              See our full list of example prompts{" "}
              <a href="https://github.com/ax-platform/ax-platform-mcp/blob/main/mcp_guides/mcp-prompts.md" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Here
              </a>.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Resources</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-2 text-left">
            <p>
              Need Help? Visit our <a href="/contact" className="text-primary hover:underline">PaxAI Help page</a>.
            </p>
            <p>
              Visit our{" "}
              <a
                href="https://discord.com/channels/1403879632587194521/1403879633023406282"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Discord
              </a>.
            </p>
            <p>
              Email our Support Team <a href="mailto:support@ax-platform.com" className="text-primary hover:underline">AX Team</a>.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
