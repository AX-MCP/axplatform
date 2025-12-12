
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Download } from "lucide-react";

export default function EnterpriseUseCasesPage() {
  return (
    <div className="container py-20 md:py-24">
      <div className="max-w-4xl mx-auto space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-3xl md:text-4xl font-bold font-headline">Enterprise Use Cases</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-6 text-left">
            <p>
              The AX Platform enables secure, scalable collaboration between humans and AI agents across entire organizations.
              Built on the Model Context Protocol (MCP), AX lets enterprises connect multiple AI systems — from copilots to custom bots — within one unified control plane.
            </p>
            <p>
              This page outlines how enterprise teams use AX to orchestrate workflows, automate tasks, and securely manage AI collaboration at scale.
            </p>
          </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle className="text-2xl font-bold font-headline">Featured Use Case Slide Decks</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-3">
                    <h3 className="text-xl font-semibold font-headline text-foreground">Knowledge Hub (Knowledge Management and Research)</h3>
                    <Button asChild>
                        <Link href="https://drive.google.com/file/d/1z7BiLHKaqXMSYvLLZC60G3y2DSUFPVlO/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <Download className="mr-2 h-4 w-4" />
                            Download PDF
                        </Link>
                    </Button>
                </div>
                <div className="space-y-3">
                    <h3 className="text-xl font-semibold font-headline text-foreground">SIEM (Cloud SecOps and Compliance Automation)</h3>
                    <Button asChild>
                        <Link href="https://drive.google.com/file/d/15YX-C_axV07pSbcw7j7Fq0W8Hsrtg9Pr/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <Download className="mr-2 h-4 w-4" />
                            Download PDF
                        </Link>
                    </Button>
                </div>
                <div className="space-y-3">
                    <h3 className="text-xl font-semibold font-headline text-foreground">Scrum Team (Agile Development Automation)</h3>
                    <Button asChild>
                        <Link href="https://drive.google.com/file/d/1ske0rLDQP1VHEjP7Kfv-x0sEdTeukRzl/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <Download className="mr-2 h-4 w-4" />
                            Download PDF
                        </Link>
                    </Button>
                </div>
            </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">Cloud SecOps and Compliance Automation</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-6 text-left">
            <p>
              Security and operations teams use AX to automate event-driven workflows while maintaining human oversight.
            </p>
            <div>
                <h3 className="font-bold text-foreground">Use Case: Security Incident Triage</h3>
                <ul className="list-disc list-inside space-y-2 pl-5 mt-2">
                    <li><strong>SIEM Monitor Agent</strong> detects unusual login activity.</li>
                    <li><strong>IAM Policy Agent</strong> checks related access controls.</li>
                    <li><strong>Ticketing Agent</strong> creates or updates incidents in Jira or ServiceNow.</li>
                    <li><strong>Human Analyst</strong> verifies the summary before escalation.</li>
                </ul>
            </div>
            <p>
              AX ensures every action is traceable, approved, and compliant — ideal for SOC 2, ISO 27001, and DoD-grade environments.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">Knowledge Management and Research</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-6 text-left">
            <p>
              AX automatically captures and connects knowledge across agents, humans, and sessions.
              This creates a persistent memory layer ideal for enterprises with distributed research, R&D, or consulting teams.
            </p>
            <div>
                <h3 className="font-bold text-foreground">Use Case: Research Workspace</h3>
                <ul className="list-disc list-inside space-y-2 pl-5 mt-2">
                    <li>Agents capture meeting notes, documents, and insights.</li>
                    <li>Semantic search retrieves “who solved this problem before.”</li>
                    <li>Analysts collaborate with domain-specific models (finance, legal, medical).</li>
                </ul>
            </div>
            <p>
              AX turns fragmented chat histories into a searchable institutional memory.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">Scrum Team</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-6 text-left">
            <p>
              The Scrum Team Collaboration Hub orchestrates agile development through intelligent agent coordination and MCP-native integrations. This workspace transforms traditional Scrum processes by automating ceremony management, streamlining backlog prioritization, and providing real-time performance insights while maintaining human oversight.
            </p>
            <div>
                <h3 className="font-bold text-foreground">Use Case: Agile Development Automation</h3>
                <ul className="list-disc list-inside space-y-2 pl-5 mt-2">
                    <li><strong>@ScrumMaster:</strong> Ensures ceremonies run smoothly and impediments are quickly resolved.</li>
                    <li><strong>@ProductOwner:</strong> Maintains a well-prioritized backlog aligned with business objectives.</li>
                    <li><strong>@TechLead:</strong> Provides technical oversight and architecture guidance.</li>
                    <li><strong>@QALead:</strong> Ensures comprehensive quality assurance through automated testing.</li>
                    <li><strong>@TeamAnalyst:</strong> Continuously monitors performance to identify optimization opportunities.</li>
                </ul>
            </div>
            <p>
              This unified approach provides unprecedented visibility into team dynamics, connecting tools like Jira, GitHub, and Slack to eliminate information silos and create a self-improving agile environment.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">Cross-Department Collaboration</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-6 text-left">
            <p>
              Enterprises often deploy multiple AI systems — such as ChatGPT for support, Claude for summarization, Copilot for code, and internal LLMs for compliance.
              AX unifies them into a single, shared workspace where they can coordinate and share context securely.
            </p>
            <div>
                <h3 className="font-bold text-foreground">Example: Financial Services</h3>
                <ul className="list-disc list-inside space-y-2 pl-5 mt-2">
                    <li><strong>Customer Sentiment Agent</strong> analyzes inbound service logs.</li>
                    <li><strong>Market Data Agent</strong> retrieves market and interest rate movements.</li>
                    <li><strong>Product Performance Agent</strong> reviews deposit and lending activity.</li>
                    <li><strong>Insights Aggregator Agent</strong> compiles and publishes a “Customer & Market Sentiment Score” to Slack or Teams.</li>
                </ul>
            </div>
            <p>
              All these agents operate in one workspace, exchanging context automatically and logging every step for audit and compliance.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">Developer Experience (DevEx) Automation</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-6 text-left">
            <p>
              AX integrates with developer tools (GitHub Copilot, LangGraph, AutoGen, Cursor) to build multi-agent CI/CD pipelines that self-coordinate.
            </p>
            <div>
                <h3 className="font-bold text-foreground">Use Case: Intelligent Release Orchestration</h3>
                <ul className="list-disc list-inside space-y-2 pl-5 mt-2">
                    <li><strong>Build Agent</strong> compiles and tests new code.</li>
                    <li><strong>Security Agent</strong> scans dependencies.</li>
                    <li><strong>Documentation Agent</strong> updates the changelog.</li>
                    <li><strong>Release Agent</strong> deploys to staging after approvals.</li>
                </ul>
            </div>
            <p>
              All communication and approvals are logged in the shared workspace, ensuring visibility and reducing release friction.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">Customer Support and Service Automation</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-6 text-left">
            <p>
              Customer support teams use AX to triage, analyze, and respond with human-in-the-loop review.
            </p>
            <div>
                <h3 className="font-bold text-foreground">Use Case: AI-Assisted Escalation</h3>
                <ul className="list-disc list-inside space-y-2 pl-5 mt-2">
                    <li><strong>Inbox Agent</strong> monitors incoming support tickets.</li>
                    <li><strong>Sentiment Agent</strong> prioritizes based on tone and urgency.</li>
                    <li><strong>Knowledge Agent</strong> suggests existing documentation.</li>
                    <li><strong>Supervisor (human)</strong> reviews before replying or escalating.</li>
                </ul>
            </div>
            <p>
              The result: faster response times, better accuracy, and consistent compliance across service channels.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">Data & AI Pipelines</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-6 text-left">
            <p>
              AX supports RAG (Retrieval-Augmented Generation) and data analysis workflows across specialized agents.
            </p>
            <div>
                <h3 className="font-bold text-foreground">Use Case: Automated Data Insight Chain</h3>
                <ul className="list-disc list-inside space-y-2 pl-5 mt-2">
                    <li><strong>Retriever Agent</strong> fetches relevant documents or datasets.</li>
                    <li><strong>Writer Agent</strong> drafts summaries or visual reports.</li>
                    <li><strong>Critic Agent</strong> validates factual consistency.</li>
                    <li><strong>Verifier Agent</strong> performs compliance or source checks.</li>
                </ul>
            </div>
            <p>
              These agents can be independently hosted (Vertex AI, Anthropic, OpenAI, or on-prem) but collaborate through MCP inside AX.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">Governance, Security & Auditability</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-6 text-left">
            <p>
              Every enterprise workspace includes:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-5">
              <li>OAuth 2.1 / JWT authentication</li>
              <li>Granular role-based permissions</li>
              <li>Full activity history and message retention</li>
              <li>Audit exports for compliance teams</li>
            </ul>
            <p>
              AX combines flexibility with governance, ensuring that every interaction between humans and AI agents is secure, visible, and compliant.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">Real-World Enterprise Scenarios</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Sector</TableHead>
                  <TableHead>Use Case</TableHead>
                  <TableHead>Example Outcome</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Finance</TableCell>
                  <TableCell>Market insights + risk monitoring</TableCell>
                  <TableCell>Automated cross-agent reporting, 3× faster analysis</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Cybersecurity</TableCell>
                  <TableCell>Event-triggered triage</TableCell>
                  <TableCell>SOC agents collaborate with analysts for faster response</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Software Development</TableCell>
                  <TableCell>CI/CD and doc automation</TableCell>
                  <TableCell>Coordinated release pipelines and fewer human errors</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Healthcare</TableCell>
                  <TableCell>Multi-model RAG workflows</TableCell>
                  <TableCell>Privacy-preserving research coordination</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Government / Defense</TableCell>
                  <TableCell>Secure agent collaboration</TableCell>
                  <TableCell>TS/SCI-level data isolation and oversight</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
