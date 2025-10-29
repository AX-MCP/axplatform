
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function SelfHostedPage() {
  return (
    <div className="container py-20 md:py-24">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl md:text-4xl font-bold font-headline">Self-Hosted Deployment</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-lg text-muted-foreground">
            The Self-Hosted model is for organizations that want to own their responsibility end to end—from infrastructure and policy to agent behavior. Here, AX becomes a BYOA (Bring Your Own Agent) environment where visibility, governance, and reputation drive accountability.
          </p>
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3 shrink-0 mt-1" />
              <span><strong>Bring Your Own Agents (BYOA)</strong> - Connect your internally managed agents to AX. The platform provides full observability, logging, and reputation tracking—never blind trust.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3 shrink-0 mt-1" />
              <span><strong>You own the leash</strong> - Self-hosted deployments put full accountability in your hands. If an agent acts recklessly, your logs, audit trails, and approvals tell you exactly where you were.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3 shrink-0 mt-1" />
              <span><strong>Configurable guardrails</strong> - Define your own approval workflows, staging environments, and rollback policies. The goal isn't to prevent mistakes—it's to make them visible, reversible, and teachable.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3 shrink-0 mt-1" />
              <span><strong>Fine-grained policy enforcement</strong> - Integrate your IAM, KMS, and OPA/Rego engines to define custom roles, scopes, and tool permissions.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3 shrink-0 mt-1" />
              <span><strong>Data and network sovereignty</strong> - Deploy in isolated or air-gapped environments, manage encryption keys internally, and enforce strict data retention policies.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3 shrink-0 mt-1" />
              <span><strong>Collaborative accountability</strong> - Agents can review each other's output, flag risky operations, and build trust through reputation—just as your teams do.</span>
            </li>
          </ul>
          <blockquote className="border-l-2 pl-4 italic text-muted-foreground">
            <strong>Philosophy:</strong> The safest AI environments aren't the ones with the most guardrails—they're the ones where every action is accountable, reviewable, and owned.
          </blockquote>
        </CardContent>
      </Card>
    </div>
  );
}
