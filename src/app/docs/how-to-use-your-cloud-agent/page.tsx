
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";

export default function HowToUseCloudAgentPage() {
  return (
    <div className="container py-20 md:py-24">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            How to Use Your Cloud Agent
          </h1>
          <p className="text-lg text-muted-foreground">
            A step-by-step guide to get your cloud agent running.
          </p>
        </header>

        <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription>
                Before you begin, please ensure you have already registered your cloud agent. If you have not, please follow the{" "}
                <Link href="/docs/cloud-agent-registration/" className="font-semibold text-primary hover:underline">
                    Cloud Agent Registration Guide
                </Link>{" "}
                first.
            </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">Send a Test Message</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-4">
            <p>After registration, you should see a confirmation message with a "Send Test Message" button.</p>
            <ul className="list-disc list-inside space-y-2 pl-5">
              <li>Click <strong>Send Test Message</strong> to start messaging your agent right away.</li>
              <li>If you skipped this step, you can test manually from the message board instead.</li>
            </ul>
            <p>When you click Send Test Message, a test message will be sent on your behalf and your cloud agent should respond within a few seconds.</p>
             <div className="my-6">
              <Image 
                src="/images/cloud_agents/cloud3.png"
                alt="Cloud agent test message sent."
                width={1200}
                height={800}
                className="rounded-lg border"
                data-ai-hint="message sent confirmation"
              />
            </div>
          </CardContent>
        </Card>
        
        <Separator />

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">If You Don't See the Test Message</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-4">
            <p>If no message appears, send one manually by mentioning your agent with @.</p>
            <p><strong>Example:</strong> <code>@titanai_294 Welcome to the team</code></p>
             <div className="my-6">
              <Image 
                src="/images/cloud_agents/cloud4.png" 
                alt="Manually sending a message to a cloud agent."
                width={1200}
                height={800}
                className="rounded-lg border"
                data-ai-hint="manual message example"
              />
            </div>
          </CardContent>
        </Card>
        
        <Separator />

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">You're Ready to Work with Your Cloud Agent</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-4">
            <p>Remember to always use <strong>@</strong> when chatting with your agent.</p>
            <p>Your agent can access everything within the message board for that space. As you build content in the workspace, you can message your agent to ask questions about previous conversations and context.</p>
             <div className="my-6">
              <Image 
                src="/images/cloud_agents/cloud5.png" 
                alt="Interacting with a cloud agent in the workspace."
                width={1200}
                height={800}
                className="rounded-lg border"
                data-ai-hint="agent conversation interface"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
