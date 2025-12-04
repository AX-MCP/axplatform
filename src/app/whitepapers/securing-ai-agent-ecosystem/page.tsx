
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function SecuringAiAgentEcosystemPage() {
  return (
    <div className="container py-20 md:py-24">
      <div className="max-w-4xl mx-auto prose prose-invert">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            SECURING THE AI AGENT ECOSYSTEM
          </h1>
          <p className="text-xl text-muted-foreground">
            How AX-Platform Becomes the Enterprise Control Plane for Agents
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            Version 1.0 | Publication Date: December 2025
          </p>
          <p className="text-sm text-muted-foreground">
            Author: Michael Schecht, Head of Security Architecture
          </p>
          <a href="mailto:michael.schecht@ax-platform.com" className="text-sm text-primary hover:underline">
            michael.schecht@ax-platform.com
          </a>
        </header>

        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Table of Contents</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-2">
              <li><a href="#executive-summary" className="hover:underline">Executive Summary</a></li>
              <li><a href="#problem" className="hover:underline">The Problem: Unmanaged Agent Risk</a></li>
              <li><a href="#requirements" className="hover:underline">Security Requirements for AI Agents</a></li>
              <li><a href="#overview" className="hover:underline">AX-Platform Overview</a></li>
              <li><a href="#identity-access" className="hover:underline">Centralized Agent Identity and Access Tracking</a></li>
              <li><a href="#logging-siem" className="hover:underline">Logging, SIEM Integration, and Actionable Analytics</a></li>
              <li><a href="#trust-reputation" className="hover:underline">Trust, Reputation, and Cross-Agent Security Review</a></li>
              <li><a href="#security-control-center" className="hover:underline">AX as a Security Control Center for Agents</a></li>
              <li><a href="#deployment" className="hover:underline">Deployment & Integration Considerations</a></li>
              <li><a href="#benefits" className="hover:underline">Benefits Summary</a></li>
              <li><a href="#conclusion" className="hover:underline">Conclusion & Next Steps</a></li>
              <li><a href="#about-author" className="hover:underline">About the Author</a></li>
            </ol>
          </CardContent>
        </Card>

        <Separator className="my-12" />

        <section id="executive-summary">
          <h2>1. Executive Summary</h2>
          <p>AI agents are rapidly moving from prototypes to production, becoming a new class of privileged identity. Without a coherent security strategy, enterprises risk untracked access, scattered secrets, lack of accountability, and inability to revoke or quarantine misbehaving agents in real time.</p>
          <p>AX-Platform provides a security-first architecture for managing this new layer of machine identities, acting as a centralized, MCP-native control plane for agents. Key capabilities include:</p>
          <ul>
            <li>Onboarding and governance for agents from any framework</li>
            <li>Centralized management of identities, access, and credentials</li>
            <li>Comprehensive logging and SIEM integration</li>
            <li>Built-in trust and reputation system</li>
            <li>Security control center for continuous monitoring</li>
          </ul>
          <p>AX-Platform transforms an ungoverned collection of agents into a secure, observable, and controllable ecosystem.</p>
        </section>

        <Separator className="my-12" />

        <section id="problem">
          <h2>2. The Problem: Unmanaged Agent Risk</h2>
          <h3>New Power, Old Patterns</h3>
          <p>Modern AI agents can execute workflows, access systems, and orchestrate tools, but are often deployed with:</p>
          <ul>
            <li>Hardcoded secrets</li>
            <li>Ad hoc OAuth clients</li>
            <li>Limited policy enforcement</li>
            <li>Minimal centralized logging</li>
          </ul>
          <h3>Why Traditional Controls Are Not Enough</h3>
          <p>Traditional IAM, PAM, and SIEM controls are designed for human users and static accounts. AI agents multiply quickly, use varied frameworks, and can be influenced by prompts or compromised tools, resulting in machine identities with human-level power but without human-level governance.</p>
        </section>

        <Separator className="my-12" />

        <section id="requirements">
          <h2>3. Security Requirements for AI Agents</h2>
          <p>To secure AI agents at scale, organizations need:</p>
          <ul>
            <li><strong>Agent Identity & Directory:</strong> Unique, auditable identities with explicit ownership</li>
            <li><strong>Access Governance & Credential Management:</strong> Least-privilege permissions, short-lived credentials, clear access mapping</li>
            <li><strong>Central Logging & Auditability:</strong> Action-level logging, SIEM integration</li>
            <li><strong>Real-Time Control & Response:</strong> Immediate revocation, kill switches, incident response integration</li>
            <li><strong>Agent Collaboration & Trust:</strong> Cross-agent reviews, reputation models, defense-in-depth</li>
            <li><strong>Framework-Agnostic Orchestration:</strong> Control plane compatible with any agent framework</li>
          </ul>
        </section>

        <Separator className="my-12" />

        <section id="overview">
            <h2>4. AX-Platform Overview</h2>
            <p>AX-Platform is an MCP-native agent orchestration and security platform that sits between agents and enterprise systems.</p>
            <p>Key Components:</p>
            <ul>
                <li>MCP Gateway</li>
                <li>Centralized Identity & Access Layer</li>
                <li>Activity Logging & Telemetry</li>
                <li>Trust & Reputation Engine</li>
                <li>Security Control Center</li>
            </ul>
        </section>

        <Separator className="my-12" />

        <section id="identity-access">
            <h2>5. Centralized Agent Identity and Access Tracking</h2>
            <ul>
                <li><strong>Onboarding:</strong> Assigns unique agent IDs, metadata, and risk profiles</li>
                <li><strong>Access Policies:</strong> Issues short-lived tokens, enforces least privilege, enables immediate revocation</li>
                <li><strong>Directory:</strong> Answers “what agents exist, who owns them, and what can they access?”</li>
            </ul>
        </section>

        <Separator className="my-12" />

        <section id="logging-siem">
            <h2>6. Logging, SIEM Integration, and Actionable Analytics</h2>
            <ul>
                <li><strong>Rich Activity Logging:</strong> Every agent action is logged with context</li>
                <li><strong>SIEM Integration:</strong> Real-time streaming to Splunk, Elasticsearch, etc.</li>
                <li><strong>Analytics:</strong> Forensics, compliance, anomaly detection, dashboards</li>
            </ul>
        </section>

        <Separator className="my-12" />

        <section id="trust-reputation">
            <h2>7. Trust, Reputation, and Cross-Agent Security Review</h2>
            <ul>
                <li><strong>Review Patterns:</strong> Security, compliance, and data protection agents review actions</li>
                <li><strong>Red Flag Detection:</strong> Structured alerts, action blocking, reputation penalties</li>
                <li><strong>Reputation Model:</strong> Dynamic trust scores influence agent privileges and orchestration</li>
            </ul>
        </section>

        <Separator className="my-12" />

        <section id="security-control-center">
            <h2>8. AX as a Security Control Center for Agents</h2>
            <ul>
                <li><strong>Specialized Security Agents:</strong> SSO/IdP, Crown Jewel App, Threat Hunting agents</li>
                <li><strong>Collaborative Detection & Response:</strong> Automated playbooks, incident management, analyst integration</li>
                <li><strong>NOC/SOC Console:</strong> Centralized control for agent security operations</li>
            </ul>
        </section>

        <Separator className="my-12" />

        <section id="deployment">
            <h2>9. Deployment & Integration Considerations</h2>
            <ul>
                <li><strong>Deployment Models:</strong> Self-hosted/on-prem, private cloud</li>
                <li><strong>Integration Touchpoints:</strong> Identity & SSO, SIEM & Logging, Agent Frameworks, SecOps Tools</li>
                <li><strong>Security-Centric Design:</strong> Minimizes external dependencies</li>
            </ul>
        </section>

        <Separator className="my-12" />

        <section id="benefits">
            <h2>10. Benefits Summary</h2>
            <ul>
                <li><strong>Visibility:</strong> Unified view of agents and actions</li>
                <li><strong>Control:</strong> Central policy enforcement and credential management</li>
                <li><strong>Security-by-Design:</strong> Built-in review and cross-agent checks</li>
                <li><strong>Resilience:</strong> Dynamic trust and reputation</li>
                <li><strong>Future-Proofing:</strong> Framework-agnostic, ready for new runtimes</li>
            </ul>
        </section>

        <Separator className="my-12" />

        <section id="conclusion">
            <h2>11. Conclusion & Next Steps</h2>
            <p>The AI agent revolution is here. AX-Platform enables organizations to secure agent ecosystems with a centralized control plane, treating agents as first-class security principals.</p>
            <p>Next Steps:</p>
            <ul>
                <li>Assess current agent deployments</li>
                <li>Identify critical systems and data</li>
                <li>Pilot AX-Platform</li>
                <li>Expand coverage</li>
                <li>Integrate with security operations</li>
            </ul>
        </section>

        <Separator className="my-12" />

        <section id="about-author">
          <h2>12. About the Author</h2>
          <p>Michael Schecht is Head of Security Architecture at AX-Platform, with over 15 years in cybersecurity and enterprise architecture. Michael specializes in zero-trust, privileged access management, and AI agent security frameworks, and is a frequent industry speaker.</p>
        </section>
      </div>
    </div>
  );
}
