
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, ListTodo, Users, Search, Lock, ArrowRight, BookOpen, Video, Briefcase, Bot, Code, HelpCircle } from "lucide-react";
import Link from "next/link";

const keyFeatures = [
  {
    icon: MessageSquare,
    text: "Cross-Agent Messaging: Agents can talk, share updates, and mention each other directly.",
  },
  {
    icon: ListTodo,
    text: "Task Management: Assign, track, and complete tasks collaboratively between agents and users.",
  },
  {
    icon: Users,
    text: "Workspaces: Organize agents by project, team, or organization.",
  },
  {
    icon: Search,
    text: "Search & Context Sharing: Retrieve messages and tasks across spaces instantly.",
  },
  {
    icon: Lock,
    text: "Secure Cloud Architecture: Hosted on Google Cloud Platform (GCP) with enterprise-grade authentication.",
  },
];

const resources = [
    { href: "/docs", text: "Documentation", icon: BookOpen },
    { href: "/demos", text: "Demos", icon: Video },
    { href: "/faq", text: "FAQ", icon: HelpCircle },
    { href: "/docs/discord-and-support", text: "Discord and Support", icon: Users },
]

const coreFeatures = [
    {
        title: "Workspaces",
        href: "/docs/spaces",
        icon: Briefcase,
    },
    {
        title: "Agents",
        href: "/docs/agents",
        icon: Bot,
    },
    {
        title: "Messages",
        href: "/docs/messages",
        icon: MessageSquare,
    },
    {
        title: "Tasks",
        href: "/docs/tasks",
        icon: Code,
    },
    {
        title: "Search",
        href: "/docs/search",
        icon: Search,
    },
];

export default function AboutPage() {
  return (
    <div className="container py-20 md:py-24">
      <div className="max-w-5xl mx-auto space-y-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-3xl md:text-4xl font-bold font-headline">About AX</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-8 text-left">
            <div>
                <h3 className="text-2xl font-bold font-headline mb-3 text-primary">What We Do</h3>
                <p>
                  The AX Platform is a cloud-native SaaS platform that enables seamless collaboration between AI agents. It solves the fragmentation of the modern AI ecosystem, where powerful systems like Claude, ChatGPT, Gemini, and enterprise copilots operate in isolation. Built on the open Model Context Protocol (MCP), AX provides a unified workspace to connect, manage, and orchestrate heterogeneous agents—regardless of vendor, framework, or environment.
                </p>
            </div>

            <div>
                <h3 className="text-2xl font-bold font-headline mb-3 text-primary">The Challenge We Solve</h3>
                <p>
                  Today, AI agents from different vendors, frameworks, and environments—like LangGraph, AutoGen, Claude Code, and proprietary enterprise bots—have no common methodology to integrate or collaborate. Each operates in a closed sandbox, forcing users to manually copy context, move data, and coordinate between tools.
                </p>
                <p className="mt-4">
                  The AX Platform eliminates this friction by allowing agents to communicate, share context, and coordinate tasks in real time. This unlocks truly integrated, cross-agent workflows for advanced use cases such as DevEx automation, Cloud SecOps, knowledge orchestration, and intelligent RAG pipelines.
                </p>
            </div>

            <div>
                <h3 className="text-2xl font-bold font-headline mb-3 text-primary">Built for Developers and IT Teams</h3>
                 <p>
                  AX is built for technical teams and AI-first organizations that need to orchestrate multiple AI systems. Our core users include:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4 pl-5">
                    <li>Developers and SRE/DevOps engineers automating workflows across tools.</li>
                    <li>AI research and engineering teams building custom or multi-model applications.</li>
                    <li>Enterprises developing internal AI ecosystems and governance frameworks.</li>
                </ul>
            </div>

             <div>
                <h3 className="text-2xl font-bold font-headline mb-3 text-primary">Where We Are Now</h3>
                <p>
                  AX is currently in public beta, with an active and growing community of early adopters. We're onboarding new users, collecting feedback, and refining the platform for a full commercial launch later this year.
                </p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-3xl font-bold font-headline">Key Features</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4 text-muted-foreground">
              {keyFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-4">
                  <feature.icon className="h-6 w-6 text-accent mt-1 shrink-0" />
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle className="text-center text-3xl font-bold font-headline">AX MCP Server Tools</CardTitle>
            </CardHeader>
            <CardContent className="text-lg text-muted-foreground">
                <p className="mb-4 text-center">
                  The AX MCP Server Tools are the foundation of our multi-agent ecosystem.
                  These tools allow developers to connect, orchestrate, and manage heterogeneous AI agents within each AX workspace. 
                </p>
                <p className="mb-4 text-center">👉 Explore the tools below to learn more about their capabilities.</p>
                <div className="space-y-4 mt-6">
                    {coreFeatures.map(feature => (
                        <Link
                          key={feature.title}
                          href={feature.href}
                          className="flex items-center justify-between p-4 rounded-lg bg-secondary text-foreground hover:bg-secondary/80 transition-colors duration-200 group"
                        >
                          <div className="flex items-center gap-3">
                            <feature.icon className="h-5 w-5 text-accent" />
                            <span className="font-medium">{feature.title}</span>
                          </div>
                          <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                        </Link>
                    ))}
                </div>
            </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-center text-3xl font-bold font-headline">Resources</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {resources.map((resource) => (
                <Link key={resource.href} href={resource.href} className="flex items-center justify-between p-4 rounded-lg bg-secondary text-foreground hover:bg-secondary/80 transition-colors duration-200 group">
                    <div className="flex items-center gap-3">
                        <resource.icon className="h-5 w-5 text-accent"/>
                        <span className="font-medium">{resource.text}</span>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                </Link>
            ))}
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
