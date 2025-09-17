import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Book,
  Code,
  Link as LinkIcon,
  Bot,
  Globe,
  Rocket,
  Wrench,
  BookCopy,
} from "lucide-react";

const resourceSections = [
  {
    title: "General Collections",
    icon: BookCopy,
    resources: [
      {
        title: "500+ AI Agent Projects",
        href: "https://github.com/ashishpatel26/500-AI-Agents-Projects",
        description: "Massive list of AI agent projects across domains",
        icon: Globe,
      },
      {
        title: "awesome-llm-apps",
        href: "https://github.com/hollobit/awesome-llm-apps",
        description: "Curated list of applications built on top of LLMs",
        icon: Globe,
      },
      {
        title: "awesome-ai-agents",
        href: "https://github.com/e2b-dev/awesome-ai-agents",
        description: "Collection of AI agent frameworks, demos, and resources",
        icon: Globe,
      },
      {
        title: "awesome-llm-agents",
        href: "https://github.com/kyrolabs/awesome-llm-agents",
        description:
          "Curated list of LLM-powered agent frameworks and examples",
        icon: Globe,
      },
      {
        title: "awesome-autonomous-agents",
        href: "https://github.com/transitive-bullshit/awesome-autonomous-agents",
        description: "Focused list of self-directed, autonomous AI agents",
        icon: Globe,
      },
    ],
  },
  {
    title: "Frameworks & Toolkits",
    icon: Wrench,
    resources: [
      {
        title: "LangChain",
        href: "https://github.com/langchain-ai/langchain",
        description: "Popular framework for building context-aware AI agents",
        icon: LinkIcon,
      },
      {
        title: "AutoGen",
        href: "https://github.com/microsoft/autogen",
        description:
          "Microsoft’s framework for multi-agent collaboration and orchestration",
        icon: LinkIcon,
      },
      {
        title: "CrewAI",
        href: "https://github.com/joaomdmoura/crewai",
        description: "Framework for role-based multi-agent systems",
        icon: LinkIcon,
      },
      {
        title: "LangGraph",
        href: "https://github.com/langchain-ai/langgraph",
        description: "Graph-based orchestration of multi-step AI workflows",
        icon: LinkIcon,
      },
      {
        title: "OpenAgents",
        href: "https://github.com/xlang-ai/OpenAgents",
        description: "Open platform for running and sharing AI agents",
        icon: LinkIcon,
      },
    ],
  },
  {
    title: "Specialized Agents",
    icon: Bot,
    resources: [
      {
        title: "BabyAGI",
        href: "https://github.com/yoheinakajima/babyagi",
        description: "Autonomous task management agent using GPT",
        icon: Rocket,
      },
      {
        title: "SuperAGI",
        href: "https://github.com/TransformerOptimus/SuperAGI",
        description:
          "Infrastructure for building and deploying autonomous agents",
        icon: Rocket,
      },
      {
        title: "AgentGPT",
        href: "https://github.com/reworkd/AgentGPT",
        description: "Browser-based platform for running AI agents in real time",
        icon: Rocket,
      },
      {
        title: "MetaGPT",
        href: "https://github.com/geekan/MetaGPT",
        description: "Multi-agent framework for collaborative software engineering",
        icon: Rocket,
      },
      {
        title: "Camel-AI",
        href: "https://github.com/camel-ai/camel",
        description:
          "Role-playing agents that collaborate to complete complex tasks",
        icon: Rocket,
      },
      {
        title: "ChatDev",
        href: "https://github.com/OpenBMB/ChatDev",
        description:
          "Agents simulating a virtual software company to build applications",
        icon: Rocket,
      },
      {
        title: "Aider",
        href: "https://github.com/paul-gauthier/aider",
        description:
          "AI pair programming directly in your terminal with Git integration",
        icon: Rocket,
      },
    ],
  },
  {
    title: "MCP (Model Context Protocol) Ecosystem",
    icon: Code,
    resources: [
      {
        title: "Model Context Protocol Servers",
        href: "https://github.com/modelcontextprotocol/servers",
        description: "",
        icon: Book,
      },
      {
        title: "mcpservers.org",
        href: "https://mcpservers.org/",
        description: "",
        icon: Book,
      },
      {
        title: "mcp.so",
        href: "https://mcp.so/",
        description: "",
        icon: Book,
      },
      {
        title: "Notion MCP Server",
        href: "https://github.com/makenotion/notion-mcp-server",
        description: "",
        icon: Book,
      },
      {
        title: "Browser MCP Server",
        href: "https://docs.browsermcp.io/welcome",
        description: "",
        icon: Book,
      },
      {
        title: "DuckDuckGo MCP Server",
        href: "https://github.com/nickclyde/duckduckgo-mcp-server",
        description: "",
        icon: Book,
      },
      {
        title: "Playwright MCP",
        href: "https://github.com/microsoft/playwright-mcp",
        description: "",
        icon: Book,
      },
      {
        title: "ClickUp MCP Server",
        href: "https://github.com/taazkareem/clickup-mcp-server",
        description: "",
        icon: Book,
      },
    ],
  },
];

export default function AIResourcesPage() {
  return (
    <div className="container py-20 md:py-24">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            AI Agent Resources
          </h1>
          <p className="text-lg text-muted-foreground">
            A curated list of frameworks, projects, and tools for building with AI agents.
          </p>
        </header>

        <div className="space-y-12">
          {resourceSections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-bold font-headline flex items-center gap-3 mb-6">
                <section.icon className="h-6 w-6 text-accent" />
                {section.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {section.resources.map((resource) => (
                  <Link
                    href={resource.href}
                    key={resource.title}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <Card className="h-full transition-all duration-300 border-border hover:border-primary hover:bg-card/80">
                      <CardHeader className="flex-row items-start gap-4">
                        <div className="w-8 pt-1">
                          <resource.icon className="h-6 w-6 text-muted-foreground group-hover:text-accent transition-colors" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-headline leading-snug group-hover:text-primary">
                            {resource.title}
                          </CardTitle>
                          {resource.description && (
                            <p className="text-sm text-muted-foreground mt-2">
                              {resource.description}
                            </p>
                          )}
                        </div>
                      </CardHeader>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
