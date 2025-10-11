
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen, Settings, MessageSquare, ListTodo, Search } from "lucide-react";

const guideLinks = [
  {
    title: "MCP Guide",
    href: "https://github.com/AX-MCP/PaxAI/blob/main/mcp-guide.md",
    icon: BookOpen,
  },
  {
    title: "Workspaces",
    href: "/docs/spaces",
    icon: Settings,
  },
  {
    title: "Messages",
    href: "/docs/messages",
    icon: MessageSquare,
  },
  {
    title: "Tasks",
    href: "/docs/tasks",
    icon: ListTodo,
  },
  {
    title: "Search",
    href: "/docs/search",
    icon: Search,
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
