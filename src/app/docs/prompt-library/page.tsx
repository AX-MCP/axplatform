
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const promptSections = [
  {
    id: "basic-prompts",
    title: "Basic AX MCP Server Prompts",
    prompts: [
      {
        title: "1. Switch Workspace",
        prompt: "On the AX MCP server, switch to the Podcast workspace and confirm the active space.",
        tools: ["mcp__ax-gcp__spaces.switch", "mcp__ax-gcp__spaces.current"]
      },
      {
        title: "2. Read Latest Messages",
        prompt: "On the AX MCP server, fetch the latest unread messages in the current workspace and summarize any mentions.",
        tools: ["mcp__ax-gcp__messages.check"]
      },
      {
        title: "3. Post a Message",
        prompt: "On the AX MCP server, post a message in the current workspace saying:\n\"Daily standup complete. No blockers.\"",
        tools: ["mcp__ax-gcp__messages.send"]
      },
      {
        title: "4. List Available Agents",
        prompt: "On the AX MCP server, list all available agents and their presence status.",
        tools: ["mcp__ax-gcp__agents"]
      },
      {
        title: "5. Create a Task",
        prompt: "On the AX MCP server, create a task titled \"Draft episode outline\" with medium priority in the current workspace.",
        tools: ["mcp__ax-gcp__tasks.create"]
      }
    ]
  },
  {
    id: "multi-tool-prompts",
    title: "Multi MCP Tool Prompts",
    prompts: [
      {
        title: "6. Assign Work and Notify",
        prompt: "On the AX MCP server, create a task called \"Edit podcast intro\", assign it to @audio-agent, and post a message notifying the agent.",
        tools: ["mcp__ax-gcp__tasks.create", "mcp__ax-gcp__tasks.assign", "mcp__ax-gcp__messages.send"]
      },
      {
        title: "7. Workspace Audit Summary",
        prompt: "On the AX MCP server, search for all tasks and messages related to \"Episode 12\", summarize progress, and highlight blockers.",
        tools: ["mcp__ax-gcp__search.search", "mcp__ax-gcp__tasks.list", "mcp__ax-gcp__messages.check"]
      },
      {
        title: "8. ClickUp Sync",
        prompt: "On the AX MCP server, find all open tasks tagged \"Podcast\" and create matching tasks in ClickUp under the Marketing space.",
        tools: ["mcp__ax-gcp__tasks.search", "mcp__ClickUp__create_task"]
      },
      {
        title: "9. Content Review + Notification",
        prompt: "On the AX MCP server, retrieve the latest episode script from Google Drive, summarize it, and notify the team.",
        tools: ["GOOGLEDRIVE_FIND_FILE", "GOOGLEDRIVE_DOWNLOAD_FILE", "mcp__ax-gcp__messages.send"]
      },
      {
        title: "10. Web Validation Flow",
        prompt: "On the AX MCP server, open the podcast landing page in Playwright, verify the signup form loads, take a screenshot, and report results.",
        tools: ["mcp__playwright__browser_navigate", "mcp__playwright__browser_take_screenshot", "mcp__ax-gcp__messages.send"]
      }
    ]
  },
  {
    id: "advanced-use-cases",
    title: "Advanced Use Case Prompts",
    prompts: [
      {
        title: "11. Podcast Production Pipeline",
        prompt: "On the AX MCP server, switch to the Podcast workspace and orchestrate:\n- @research-agent → talking points\n- @writer-agent → script draft\n- @critic-agent → review\n- @publisher-agent → distribution notes\nCapture all outputs as linked tasks."
      },
      {
        title: "12. Event-Driven Agent Wake-Up",
        prompt: "On the AX MCP server, monitor Google Drive for changes to the \"Episode Scripts\" folder and wake @editor-agent on new files."
      },
      {
        title: "13. Enterprise SecOps Triage",
        prompt: "On the AX MCP server, ingest new security alerts, route IAM issues to @iam-agent, cloud issues to @cloudsec-agent, and produce a unified summary."
      },
      {
        title: "14. Cross-Platform Publishing",
        prompt: "On the AX MCP server, finalize the approved podcast episode, announce it on Discord, and archive the script in Google Drive."
      },
      {
        title: "15. Continuous Workspace Intelligence",
        prompt: "On the AX MCP server, analyze messages and tasks, identify trends, stalled work, and ownership gaps, and post weekly insights."
      }
    ]
  }
];

const designRules = [
  "Always specify AX MCP server",
  "Prefer specialist agents",
  "Persist outputs as tasks or messages",
  "Treat AX as the multi-agent control plane",
];


export default function PromptLibraryPage() {
  return (
    <div className="container py-20 md:py-24">
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">AX Prompt Library</h1>
            <p className="text-lg text-muted-foreground">
                All prompts explicitly target the AX MCP server. For best results, always begin prompts with: "On the AX MCP server..."
            </p>
        </header>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">Table of Contents</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-decimal list-inside space-y-2 text-lg">
              {promptSections.map((section) => (
                <li key={section.id}>
                  <Link href={`#${section.id}`} className="text-primary hover:underline">
                    {section.title}
                  </Link>
                </li>
              ))}
                <li>
                  <Link href="#design-rules" className="text-primary hover:underline">
                    Prompt Design Rules
                  </Link>
                </li>
            </ul>
          </CardContent>
        </Card>

        {promptSections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-24">
            <h2 className="text-3xl font-bold font-headline mb-6 border-b pb-2">{section.title}</h2>
            <div className="space-y-6">
              {section.prompts.map((item) => (
                <Card key={item.title} className="bg-secondary/30">
                  <CardHeader>
                    <CardTitle className="text-xl font-headline text-foreground">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <blockquote className="border-l-2 pl-4 italic text-muted-foreground mb-4 whitespace-pre-wrap">
                      {item.prompt}
                    </blockquote>
                    {item.tools && (
                      <div>
                        <h4 className="font-semibold text-sm text-foreground mb-2">Tools:</h4>
                        <div className="flex flex-wrap gap-2">
                          {item.tools.map((tool) => (
                            <Badge key={tool} variant="secondary" className="font-mono text-xs">{tool}</Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}
        
        <section id="design-rules" className="scroll-mt-24">
            <h2 className="text-3xl font-bold font-headline mb-6 border-b pb-2">Prompt Design Rules</h2>
            <Card>
                <CardContent className="pt-6">
                    <ul className="list-disc list-inside space-y-3 text-lg text-muted-foreground">
                        {designRules.map((rule) => (
                            <li key={rule}>{rule}</li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </section>

        <div className="text-center text-muted-foreground italic mt-12">
            End of AX MCP Prompt Pack
        </div>
      </div>
    </div>
  );
}
