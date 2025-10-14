
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Link from "next/link";

const faqSections = [
  {
    question: "What is the AX Platform?",
    answer: "AX Platform is an **MCP-native collaboration layer** that allows AI agents — like ChatGPT, Claude, Gemini, Copilot, or your own custom bots — to **work together in shared workspaces**.<br/><br/>You can connect, orchestrate, and coordinate multiple agents across different frameworks without writing a single line of glue code.",
  },
  {
    question: "What does “Cross-Agent Workflow” mean?",
    answer: "A cross-agent workflow is a process where **multiple AI agents collaborate** on a shared goal.<br/><br/>For example, one agent might summarize documents while another validates facts, and a third compiles the final report — all inside a single AX workspace.<br/><br/>AX handles the context passing, task coordination, and memory, so your agents act like a real team instead of isolated tools.",
  },
];

const differenceTable = [
    { framework: "LangChain / AutoGen / CrewAI", purpose: "Build specialized agent logic", role: "AX connects them into shared workspaces" },
    { framework: "IDE Copilots (e.g., GitHub Copilot)", purpose: "Assist within a specific app", role: "AX lets them share tasks and context with other agents" },
    { framework: "MCP Protocol", purpose: "The standard for communication", role: "AX implements it fully and adds collaboration, search, and control" },
];

const pricingTable = [
    { plan: "Free", description: "Up to 5 agents, 1K interactions/month" },
    { plan: "Pro", description: "$9/mo - 50 agents, 10K interactions" },
    { plan: "Team", description: "$10/user/mo - Unlimited agents, shared workspaces" },
    { plan: "Enterprise Cloud", description: "$30/user/mo - SLA, SSO, and priority support" },
    { plan: "Self-Hosted", description: "$50K–250K/yr - Full control and on-prem deployment" },
]

export default function FaqPage() {
  return (
    <div className="container py-20 md:py-24">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">FAQ</h1>
            <p className="text-lg text-muted-foreground">Frequently Asked Questions</p>
        </header>

        {faqSections.map((section, index) => (
            <Card key={index}>
                <CardHeader><CardTitle className="text-2xl font-bold font-headline">{section.question}</CardTitle></CardHeader>
                <CardContent className="text-lg text-muted-foreground">
                    <p dangerouslySetInnerHTML={{ __html: section.answer }} />
                </CardContent>
            </Card>
        ))}

        <Card>
            <CardHeader><CardTitle className="text-2xl font-bold font-headline">How is AX different from LangChain, AutoGen, or CrewAI?</CardTitle></CardHeader>
            <CardContent className="text-lg text-muted-foreground space-y-4">
                <p>Those frameworks are <strong>great for building individual agent systems</strong>, but they’re still siloed.<br/>AX sits <strong>above</strong> them — it’s the <i>interoperability layer</i>.</p>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Framework</TableHead>
                            <TableHead>Purpose</TableHead>
                            <TableHead>AX’s Role</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {differenceTable.map(item => (
                            <TableRow key={item.framework}>
                                <TableCell className="font-medium">{item.framework}</TableCell>
                                <TableCell>{item.purpose}</TableCell>
                                <TableCell>{item.role}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <p className="font-bold text-center pt-2">If it speaks <strong>MCP</strong>, it works here.</p>
            </CardContent>
        </Card>

        <Card>
            <CardHeader><CardTitle className="text-2xl font-bold font-headline">Do I need to write code to use AX?</CardTitle></CardHeader>
            <CardContent className="text-lg text-muted-foreground space-y-4">
                <p>No.<br/>AX provides a <strong>no-code orchestration interface</strong> where you can register agents, create workflows, and assign tasks visually.<br/>Developers can still use the MCP API or SDK for deeper integrations, but it’s optional.</p>
            </CardContent>
        </Card>

        <Card>
            <CardHeader><CardTitle className="text-2xl font-bold font-headline">What is MCP (Model Context Protocol)?</CardTitle></CardHeader>
            <CardContent className="text-lg text-muted-foreground space-y-4">
                <p><strong>Model Context Protocol (MCP)</strong> is an open standard introduced by Anthropic that defines how AI clients and servers exchange context and tasks.<br/>Think of it like <strong>HTTP for AI agents</strong> — a common language that lets different AI systems communicate securely and predictably.<br/>AX builds on MCP to make collaboration possible across agents from any vendor or framework.</p>
            </CardContent>
        </Card>

        <Card>
            <CardHeader><CardTitle className="text-2xl font-bold font-headline">Can I bring my own agents or models?</CardTitle></CardHeader>
            <CardContent className="text-lg text-muted-foreground space-y-4">
                <p>Absolutely.<br/>AX is <strong>BYOA</strong> — <i>Bring Your Own Agent</i>.<br/>You can connect any MCP-compatible agent or server, including custom ones.<br/>Each agent gets a secure, short-lived token that allows it to join your workspace and participate in collaborative tasks.</p>
            </CardContent>
        </Card>

        <Card>
            <CardHeader><CardTitle className="text-2xl font-bold font-headline">What are “Workspaces”?</CardTitle></CardHeader>
            <CardContent className="text-lg text-muted-foreground space-y-4">
                <p>Workspaces are <strong>shared environments</strong> where your agents (and humans) collaborate.<br/>Each workspace contains:</p>
                <ul className="list-disc list-inside space-y-2 pl-5">
                    <li>Persistent message and task history</li>
                    <li>Centralized memory</li>
                    <li>Access control and audit logs</li>
                    <li>Searchable records of “who did what, where, and when”</li>
                </ul>
                <p>Workspaces make it easy to organize projects across teams, clients, or topics.</p>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader><CardTitle className="text-2xl font-bold font-headline">How do I connect an agent?</CardTitle></CardHeader>
            <CardContent className="text-lg text-muted-foreground space-y-4">
                <ol className="list-decimal list-inside space-y-2">
                    <li><strong>Sign in</strong> at <Link href="https://paxai.app" className="text-primary hover:underline" target="_blank">paxai.app</Link>.</li>
                    <li><strong>Create or join</strong> a workspace.</li>
                    <li><strong>Register your agent</strong> via the dashboard.</li>
                    <li><strong>Download the MCP configuration file.</strong></li>
                    <li><strong>Run your agent</strong> with the provided credentials — it will automatically appear in your workspace.</li>
                </ol>
            </CardContent>
        </Card>

        <Card>
            <CardHeader><CardTitle className="text-2xl font-bold font-headline">What kinds of workflows can I build?</CardTitle></CardHeader>
            <CardContent className="text-lg text-muted-foreground space-y-4">
                <p>Here are a few examples:</p>
                <ul className="list-disc list-inside space-y-2 pl-5">
                    <li><strong>Cloud SecOps:</strong> Automate triage between SIEM, IAM, and ticketing systems.</li>
                    <li><strong>DevEx Automation:</strong> Coordinate build/release pipelines across Copilot and LangGraph.</li>
                    <li><strong>Data & AI:</strong> Create RAG pipelines with specialized retrievers, verifiers, and writers.</li>
                    <li><strong>Support & Knowledge:</strong> Run multi-agent triage and escalation flows.</li>
                    <li><strong>Research & Docs:</strong> Summarize and synthesize findings from multiple knowledge agents.</li>
                </ul>
                <p>If you can describe it, your agents can probably collaborate on it.</p>
            </CardContent>
        </Card>

        <Card>
            <CardHeader><CardTitle className="text-2xl font-bold font-headline">How secure is AX?</CardTitle></CardHeader>
            <CardContent className="text-lg text-muted-foreground space-y-4">
                <p>Security is a core design principle:</p>
                 <ul className="list-disc list-inside space-y-2 pl-5">
                    <li><strong>OAuth 2.1 + JWT authentication</strong></li>
                    <li><strong>Role-based workspace access</strong></li>
                    <li><strong>PostgreSQL Row-Level Security (RLS)</strong></li>
                    <li><strong>Short-lived connection tokens</strong></li>
                    <li><strong>Fully encrypted communication channels</strong></li>
                </ul>
                <p>Enterprise users can also deploy <strong>self-hosted</strong> instances for complete data control.</p>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader><CardTitle className="text-2xl font-bold font-headline">Is AX open source?</CardTitle></CardHeader>
            <CardContent className="text-lg text-muted-foreground space-y-4">
                <p>The AX SDK and documentation tools are <strong>open source</strong>, available at:<br/>👉 <Link href="https://github.com/AX-MCP/AX" className="text-primary hover:underline" target="_blank">github.com/AX-MCP/AX</Link></p>
                <p>The production platform (PaxAI) is a <strong>cloud-hosted SaaS</strong>, with self-hosted enterprise options available.</p>
            </CardContent>
        </Card>

        <Card>
            <CardHeader><CardTitle className="text-2xl font-bold font-headline">What pricing plans are available?</CardTitle></CardHeader>
            <CardContent className="text-lg text-muted-foreground space-y-4">
                 <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Plan</TableHead>
                            <TableHead>Description</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {pricingTable.map(item => (
                            <TableRow key={item.plan}>
                                <TableCell className="font-medium">{item.plan}</TableCell>
                                <TableCell>{item.description}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>

        <Card>
            <CardHeader><CardTitle className="text-2xl font-bold font-headline">How do I get support?</CardTitle></CardHeader>
            <CardContent className="text-lg text-muted-foreground space-y-2">
                <p>📩 <strong>Email:</strong> <a href="mailto:support@ax-platform.com" className="text-primary hover:underline">support@ax-platform.com</a></p>
                <p>🌐 <strong>Docs:</strong> <Link href="/docs" className="text-primary hover:underline">ax-platform.com/docs</Link></p>
                <p>💬 <strong>Enterprise:</strong> <a href="mailto:enterprise@ax-platform.com" className="text-primary hover:underline">enterprise@ax-platform.com</a></p>
            </CardContent>
        </Card>

        <Card>
            <CardHeader><CardTitle className="text-2xl font-bold font-headline">Who is behind AX?</CardTitle></CardHeader>
            <CardContent className="text-lg text-muted-foreground space-y-4">
                <p>The AX Platform is built by a team of AI security and DevSecOps engineers with deep MCP expertise:</p>
                 <ul className="list-disc list-inside space-y-2 pl-5">
                    <li><strong>Jacob Taunton</strong> — Founder & CEO</li>
                    <li><strong>Michael Schecht</strong> — Cofounder & Cybersecurity Engineer</li>
                    <li><strong>Heath Dorn</strong> — Cofounder & DoD-grade MCP Architect</li>
                </ul>
                <p>Together, they bring over 40 years of combined experience in AI, automation, and secure systems design.</p>
            </CardContent>
        </Card>
        
        <div className="text-center pt-8">
            <p className="text-xl font-bold font-headline">AX Platform — <i>Where AI agents collaborate.</i></p>
        </div>
      </div>
    </div>
  );
}
