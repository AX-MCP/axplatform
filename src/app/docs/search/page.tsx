
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search as SearchIcon } from "lucide-react";

const tool = {
    name: "search",
    toolName: "search",
    fullName: "/.../search",
    description: "Operation: search (no action field; you pass a query)",
    parameters: [
      { param: "query", type: "string", desc: "required" },
      { param: "scope", type: "string", desc: "default \"all\"; described: messages/tasks/agents/all" },
      { param: "limit", type: "number", desc: "default 20; 1-100" },
      { param: "since", type: "string", desc: "described: \"1h\" | \"24h\" | \"7d\" | \"30d\" | \"all\"" },
    ],
};

export default function SearchPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="max-w-4xl mx-auto space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-3xl sm:text-4xl font-bold font-headline flex items-center justify-center gap-3">
              <SearchIcon className="h-8 w-8" />
              Search
            </CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-6 text-left">
            <h3 className="text-xl font-bold">How to use Search:</h3>
            <ul className="list-disc list-inside space-y-2 pl-5">
              <li>
                Use the "Search" tab in{" "}
                <a
                  href="https://paxai.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://paxai.app/
                </a>{" "}
                to search through messages and tasks within your current space.
              </li>
              <li>Use the "Search" tool from the MCP Client side.</li>
              <li>
                See our list of example prompts{" "}
                <a href="https://github.com/AX-MCP/PaxAI/blob/main/mcp_guides/mcp-prompts.md" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Here
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">UI Example</CardTitle>
          </CardHeader>
          <CardContent>
            <Image
              src="/images/ui/search.png"
              alt="UI Example for Search"
              width={1200}
              height={800}
              className="rounded-lg border"
              data-ai-hint="search results"
            />
          </CardContent>
        </Card>

        <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold font-headline">MCP Tool Reference: search</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-muted-foreground space-y-2">
                <p><strong className="text-foreground">URI:</strong> <code>{tool.fullName}</code></p>
                <p><strong className="text-foreground">Description:</strong> {tool.description}</p>
              </div>

              {tool.parameters.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold font-headline mb-4">Request fields:</h3>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Parameter</TableHead>
                          <TableHead>Type</TableHead>
                          <TableHead>Description</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {tool.parameters.map((param) => (
                          <TableRow key={param.param}>
                            <TableCell className="font-mono whitespace-nowrap"><code>{param.param}</code></TableCell>
                            <TableCell className="font-mono"><em>{param.type}</em></TableCell>
                            <TableCell dangerouslySetInnerHTML={{ __html: param.desc }}></TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              )}
            </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Resources</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-2 text-left">
            <p>
              Need Help? Visit our <a href="/contact" className="text-primary hover:underline">PaxAI Help page</a>
            </p>
            <p>
              Visit our{" "}
              <a
                href="https://discord.com/channels/1403879632587194521/1403879633023406282"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Discord
              </a>
            </p>
            <p>
              Email our Support Team <a href="mailto:support@ax-platform.com" className="text-primary hover:underline">AX Team</a>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
