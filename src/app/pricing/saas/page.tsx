
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function SaasPage() {
  return (
    <div className="container py-20 md:py-24">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl md:text-4xl font-bold font-headline">SaaS (AX Platform Cloud)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-lg text-muted-foreground">
            The AX Platform Cloud is designed for organizations that want the speed of AI with human judgment in the loop. It combines managed infrastructure, zero-trust security, and supervised autonomy—so when agents act, you always know who did what, when, and why.
          </p>
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3 shrink-0 mt-1" />
              <span><strong>Supervised autonomy built in</strong> - Agents can act independently, but critical operations always require human review or approval. Every action is logged, auditable, and attributable.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3 shrink-0 mt-1" />
              <span><strong>Accountability over restriction</strong> - AX gives visibility, not barriers. If an agent misfires or deletes a record, it's recorded for all to see—because transparency keeps systems honest.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3 shrink-0 mt-1" />
              <span><strong>Guardrails that enable speed</strong> - The SaaS environment enforces safe defaults (staging-first, dry-runs, approval gates) so teams can move fast without risking production.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3 shrink-0 mt-1" />
              <span><strong>AI agent governance</strong> - Each agent runs under scoped credentials, enforced least privilege, and strong IAM integration (SSO/SAML/SCIM).</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3 shrink-0 mt-1" />
              <span><strong>Continuous monitoring and compliance</strong> - SOC 2, ISO 27001, and regional residency coverage ensure enterprise-grade assurance.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3 shrink-0 mt-1" />
              <span><strong>Always-on visibility</strong> - All MCP (Model Context Protocol) events—agent actions, tool calls, policy decisions—are captured in a unified audit trail for instant traceability.</span>
            </li>
          </ul>
          <blockquote className="border-l-2 pl-4 italic text-muted-foreground">
            <strong>Lesson learned:</strong> AI doesn't need to slow you down—it needs to remind you to stay present. The SaaS model keeps you in the loop without holding the leash too tight.
          </blockquote>
        </CardContent>
      </Card>
    </div>
  );
}
