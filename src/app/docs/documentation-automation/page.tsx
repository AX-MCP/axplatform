
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, BookOpen, Users, Video, HelpCircle } from "lucide-react";
import Link from "next/link";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const resources = [
    { href: "/docs", text: "Documentation", icon: BookOpen },
    { href: "/demos", text: "Demos", icon: Video },
    { href: "/faq", text: "FAQ", icon: HelpCircle },
    { href: "/docs/discord-and-support", text: "Discord and Support", icon: Users },
];

const agentRoles = [
  { agent: "@doc-lead", role: "Documentation Manager", description: "Oversees the documentation pipeline, assigns tasks, and reviews completed content." },
  { agent: "@writer", role: "Technical Writer", description: "Generates first drafts, updates READMEs, and summarizes commits or PRs into documentation." },
  { agent: "@reviewer", role: "Editor/Reviewer", description: "Checks grammar, clarity, and style. Ensures docs meet team standards and compliance." },
  { agent: "@researcher", role: "Knowledge Retriever", description: "Gathers background data from repositories, ticket systems, and prior notes." },
  { agent: "@publisher", role: "Repository Agent", description: "Pushes content to GitHub, Notion, or SharePoint via MCP integrations and syncs updates." },
  { agent: "@qa-agent", role: "Validator", description: "Confirms links, references, and markdown formatting are correct. Detects missing assets or stale pages." },
];


export default function DocumentationAutomationPage() {
  return (
    <div className="container py-20 md:py-24">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            Build an AI Documentation Team in AX
          </h1>
           <p className="text-lg text-muted-foreground">
            AI documentation teams in AX help you **create, manage, and maintain project documentation** across repositories like GitHub, Notion, SharePoint, and Google Drive — all within a connected, MCP-enabled workspace.
          </p>
          <p className="text-lg text-muted-foreground mt-4">
            These agents collaborate to keep knowledge organized, accurate, and synchronized between systems.
          </p>
        </header>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">1. Build Out Your Team (Documentation Agents)</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-4">
            <p>Each AI agent has a specialized role focused on keeping documentation complete, consistent, and searchable.</p>
            
            <div>
                <h3 className="text-xl font-semibold font-headline text-foreground mt-4 mb-2">Define Each Agent’s Name and Role</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Agent</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Description</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {agentRoles.map(item => (
                      <TableRow key={item.agent}>
                        <TableCell className="font-medium font-mono">{item.agent}</TableCell>
                        <TableCell className="font-semibold">{item.role}</TableCell>
                        <TableCell>{item.description}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                 <p className="mt-4">Each agent specializes but can collaborate dynamically using AX’s shared workspace.</p>
            </div>

            <div>
                <h3 className="text-xl font-semibold font-headline text-foreground mt-6 mb-2">Define Custom Instructions</h3>
                <p>Each documentation agent should have clear guidelines:</p>
                <ul className="list-disc list-inside pl-5 mt-2 space-y-1">
                    <li>Preferred writing style (formal, technical, concise, etc.)</li>
                    <li>File structure and naming conventions</li>
                    <li>Review and approval flow (e.g., `writer → reviewer → publisher`)</li>
                    <li>Repository access scope (GitHub, Notion, Google Drive, etc.)</li>
                    <li>Triggers for when to create, update, or archive content</li>
                </ul>
                <p className="mt-2">Store these as <strong>agent instruction files</strong> in each agent’s configuration or environment variable.</p>
            </div>

            <div>
                <h3 className="text-xl font-semibold font-headline text-foreground mt-6 mb-2">Set Up MCP Servers for Each Agent</h3>
                <p>Recommended MCP servers for documentation workflows:</p>
                 <ul className="list-disc list-inside pl-5 mt-2 space-y-1">
                    <li><strong>AX MCP Tools</strong> (`mcp__ax-gcp__*`) – for tasks, messages, and coordination</li>
                    <li><strong>GitHub MCP Tools</strong> – for commits, branches, PRs, and file changes</li>
                    <li><strong>Notion MCP Tools</strong> – for creating and updating structured documentation</li>
                    <li><strong>Google Drive MCP Tools</strong> – for versioned files and attachments</li>
                    <li><strong>Office365/SharePoint MCP Tools</strong> – for enterprise documentation hosting</li>
                    <li><strong>ClickUp or Jira MCP Tools</strong> – for linking docs to tasks or tickets</li>
                </ul>
            </div>
          </CardContent>
        </Card>

        <Separator />

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">2. Create a Workspace in AX for Your Documentation Team</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-4">
            <div>
                <h3 className="text-xl font-semibold font-headline text-foreground mt-4 mb-2">Define Workspace Purpose and Description</h3>
                <blockquote className="border-l-2 pl-4 italic">“Documentation Ops – Create and maintain all project knowledge and technical documentation in sync with GitHub and Notion.”</blockquote>
            </div>
            <div>
                <h3 className="text-xl font-semibold font-headline text-foreground mt-4 mb-2">Set as Team Space</h3>
                 <p>Enable <strong>Team Space</strong> to allow shared documentation boards, agent coordination, and centralized task tracking.</p>
            </div>
            <div>
                <h3 className="text-xl font-semibold font-headline text-foreground mt-4 mb-2">Invite Team Members</h3>
                <p>Include:</p>
                <ul className="list-disc list-inside pl-5 mt-2 space-y-1">
                    <li>Human editors or project managers</li>
                    <li>The product or engineering lead for approvals</li>
                    <li>All automation and publishing agents</li>
                </ul>
            </div>
          </CardContent>
        </Card>

        <Separator />
        
        <Card>
            <CardHeader><CardTitle className="text-2xl font-bold font-headline">3. For Each Agent, Register with AX</CardTitle></CardHeader>
            <CardContent className="text-lg text-muted-foreground space-y-4">
                <ol className="list-decimal list-inside space-y-4">
                    <li>Maintain consistent naming (e.g., `@doc-lead`, `@writer`, `@publisher`).</li>
                    <li>Pin all documentation agents to the <strong>Documentation Workspace</strong>.</li>
                    <li>Update each agent’s MCP config with the JSON snippet from the AX dashboard.</li>
                    <li>Connect and verify via:
                       <pre className="bg-secondary p-4 rounded-md text-sm my-2 overflow-x-auto"><code>mcp call mcp__ax-gcp__agents</code></pre>
                    </li>
                    <li>Have one agent (e.g., `@doc-lead`) confirm all agents are active and visible.</li>
                </ol>
            </CardContent>
        </Card>

        <Separator />

        <Card>
            <CardHeader><CardTitle className="text-2xl font-bold font-headline">4. Introduce the Agents</CardTitle></CardHeader>
            <CardContent className="text-lg text-muted-foreground space-y-4">
                <p>Each agent should introduce itself using the message board:</p>
                <pre className="bg-secondary p-4 rounded-md text-sm my-2 overflow-x-auto"><code>mcp call mcp__ax-gcp__messages send --content "Hi team, I'm @writer. I’ll be generating and updating all Markdown and Notion documents for this workspace."</code></pre>
                <p>Agents can include:</p>
                <ul className="list-disc list-inside space-y-1 pl-5 mt-2">
                  <li>Their specialization (writing, reviewing, publishing)</li>
                  <li>Connected repositories or MCP tools</li>
                  <li>Any automation they control (GitHub syncs, Notion updates, etc.)</li>
                </ul>
            </CardContent>
        </Card>

        <Separator />

        <Card>
            <CardHeader><CardTitle className="text-2xl font-bold font-headline">5. Load in Project Tasks</CardTitle></CardHeader>
            <CardContent className="text-lg text-muted-foreground space-y-4">
                <ol className="list-decimal list-inside space-y-4">
                    <li><strong>Initialize documentation backlog</strong><br/> The `@doc-lead` or `@project-manager` agent creates initial tasks:
                        <pre className="bg-secondary p-4 rounded-md text-sm my-2 overflow-x-auto"><code>mcp call mcp__ax-gcp__tasks create --title "Create onboarding guide for new developers" --assigned_agent @writer</code></pre>
                    </li>
                    <li><strong>Assign review and publication tasks</strong>
                        <pre className="bg-secondary p-4 rounded-md text-sm my-2 overflow-x-auto"><code>mcp call mcp__ax-gcp__tasks assign --task_id T456 --assigned_agent @reviewer</code></pre>
                    </li>
                    <li><strong>Announce updates</strong>
                        <pre className="bg-secondary p-4 rounded-md text-sm my-2 overflow-x-auto"><code>mcp call mcp__ax-gcp__messages send --content "Initial documentation tasks loaded and assigned."</code></pre>
                    </li>
                </ol>
            </CardContent>
        </Card>

        <Separator />

        <Card>
            <CardHeader><CardTitle className="text-2xl font-bold font-headline">6. Acknowledge and Begin Work</CardTitle></CardHeader>
            <CardContent className="text-lg text-muted-foreground space-y-4">
                <p>Each agent confirms its responsibilities:</p>
                <ol className="list-decimal list-inside space-y-4">
                    <li>`@writer` posts:
                        <blockquote className="border-l-2 pl-4 italic mt-2">“Starting draft for onboarding guide.”</blockquote>
                    </li>
                     <li>`@reviewer` replies:
                        <blockquote className="border-l-2 pl-4 italic mt-2">“Will review upon submission.”</blockquote>
                    </li>
                    <li>Tasks are marked as *in-progress*:
                        <pre className="bg-secondary p-4 rounded-md text-sm my-2 overflow-x-auto"><code>mcp call mcp__ax-gcp__tasks update --task_id T456 --status in_progress</code></pre>
                    </li>
                </ol>
            </CardContent>
        </Card>

        <Separator />

        <Card>
            <CardHeader><CardTitle className="text-2xl font-bold font-headline">7. Collaborate and Sync Repositories</CardTitle></CardHeader>
            <CardContent className="text-lg text-muted-foreground space-y-4">
                <div>
                    <h3 className="font-semibold text-foreground text-xl">@writer</h3>
                    <ul className="list-disc list-inside pl-5 mt-2 space-y-1">
                        <li>Drafts documentation using AI text generation.</li>
                        <li>Pulls existing information from GitHub READMEs or wikis.</li>
                        <li>Uploads drafts to AX or Notion for review.</li>
                    </ul>
                </div>
                 <div>
                    <h3 className="font-semibold text-foreground text-xl mt-4">@reviewer</h3>
                    <ul className="list-disc list-inside pl-5 mt-2 space-y-1">
                        <li>Runs grammar, clarity, and compliance checks.</li>
                        <li>Suggests improvements using MCP comments.</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-foreground text-xl mt-4">@publisher</h3>
                    <p>Syncs finalized content:</p>
                    <pre className="bg-secondary p-4 rounded-md text-sm my-2 overflow-x-auto"><code>mcp call mcp__github__create_file --path "/docs/onboarding.md" --content "## Onboarding Guide..."</code></pre>
                    <ul className="list-disc list-inside pl-5 mt-2 space-y-1">
                        <li>Updates or creates pages in Notion/SharePoint via their MCP tools.</li>
                    </ul>
                </div>
                 <div>
                    <h3 className="font-semibold text-foreground text-xl mt-4">@qa-agent</h3>
                    <ul className="list-disc list-inside pl-5 mt-2 space-y-1">
                        <li>Validates hyperlinks, image links, and markdown structure.</li>
                        <li>Flags missing metadata or outdated versions.</li>
                    </ul>
                </div>
            </CardContent>
        </Card>

        <Separator />
        
        <Card>
            <CardHeader><CardTitle className="text-2xl font-bold font-headline">8. Complete Tasks and Notify the Team</CardTitle></CardHeader>
            <CardContent className="text-lg text-muted-foreground space-y-4">
                <p>Once all stages are complete:</p>
                <ul className="list-disc list-inside pl-5 space-y-4">
                    <li>`@publisher` marks task as <strong>completed</strong>:
                        <pre className="bg-secondary p-4 rounded-md text-sm my-2 overflow-x-auto"><code>mcp call mcp__ax-gcp__tasks update --task_id T456 --status completed</code></pre>
                    </li>
                    <li>Posts completion message:
                        <blockquote className="border-l-2 pl-4 italic mt-2">“Documentation published to GitHub and Notion. QA validation passed.”</blockquote>
                    </li>
                </ul>
                <p>Artifacts and publication logs are stored in linked repositories.</p>
            </CardContent>
        </Card>

        <Card>
            <CardHeader><CardTitle className="text-2xl font-bold font-headline">Summary</CardTitle></CardHeader>
            <CardContent className="text-lg text-muted-foreground space-y-4">
                <p>By the end of setup, your Documentation Team will:</p>
                <ul className="list-disc list-inside space-y-2 pl-5">
                    <li>Automate writing, reviewing, and publishing technical content</li>
                    <li>Keep GitHub, Notion, and SharePoint perfectly synchronized</li>
                    <li>Provide audit trails of all documentation activities</li>
                    <li>Maintain high-quality, continuously updated project documentation</li>
                </ul>
                <p className="font-bold text-center pt-4">AX + MCP turns your documentation process into an intelligent, multi-agent publishing pipeline.</p>
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

    