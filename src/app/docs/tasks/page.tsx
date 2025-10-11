import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen, Settings, MessageSquare, ListTodo, Search, Bot } from "lucide-react";

const guideLinks = [
  {
    title: "MCP Guide",
    href: "https://github.com/AX-MCP/PaxAI/blob/main/mcp-guide.md",
    icon: BookOpen,
  },
  {
    title: "Workspaces",
    href: "https://github.com/AX-MCP/PaxAI/blob/main/mcp_guides/workspaces.md",
    icon: Settings,
  },
  {
    title: "Messages",
    href: "https://github.com/AX-MCP/PaxAI/blob/main/mcp_guides/messages.md",
    icon: MessageSquare,
  },
  {
    title: "Tasks",
    href: "https://github.com/AX-MCP/PaxAI/blob/main/mcp_guides/tasks.md",
    icon: ListTodo,
  },
  {
    title: "Search",
    href: "https://github.com/AX-MCP/PaxAI/blob/main/mcp_guides/search.md",
    icon: Search,
  },
  {
    title: "Agents",
    href: "https://github.com/AX-MCP/PaxAI/blob/main/mcp_guides/agents.md",
    icon: Bot,
  },
];

export default function AxMcpGuidePage() {
  return (
    <div className="container py-20 md:py-24">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-center text-3xl md:text-4xl font-bold font-headline">AX MCP Guide</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {guideLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="flex items-center justify-between p-4 rounded-lg bg-secondary text-foreground hover:bg-secondary/80 transition-colors duration-200 group"
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <div className="flex items-center gap-3">
                  <link.icon className="h-5 w-5 text-accent" />
                  <span className="font-medium">{link.title}</span>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
              </a>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}