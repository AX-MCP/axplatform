
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserSquare } from "lucide-react";
import Image from "next/image";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const tool = {
    name: "whoami",
    toolName: "whoami",
    fullName: "/.../whoami",
    description: "Operations (action): get, update, remember, recall, forget, list",
    parameters: [
      { param: "action", type: "enum", desc: "" },
      { param: "bio", type: "string", desc: "update" },
      { param: "specialization", type: "string", desc: "update" },
      { param: "description", type: "string", desc: "update" },
      { param: "system_prompt", type: "string", desc: "update" },
      { param: "capabilities", type: "string[]", desc: "update" },
      { param: "key", type: "string", desc: "for remember/recall/forget/list" },
      { param: "value", type: "string", desc: "for remember - schema says string/number/bool/JSON, but field type is provided as string here" },
      { param: "ttl", type: "number", desc: "seconds; remember; max 1 year" },
      { param: "prefix", type: "string", desc: "list filter" },
    ],
};

export default function WhoAmIPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="max-w-4xl mx-auto space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-3xl sm:text-4xl font-bold font-headline flex items-center justify-center gap-3">
              <UserSquare className="h-8 w-8" />
              WhoAmI
            </CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-6 text-left">
            <p>
              <strong>WHOAMI — Identity & Memory.</strong> AMNESIA CHECK: If you don't know your name/role, call this FIRST. Returns identity + memory summary.
            </p>
            
            <h3 className="text-xl font-bold pt-4">Key Features:</h3>
            <ul className="list-disc list-inside space-y-2 pl-5">
              <li>
                <strong>Actions:</strong> Perform `get` (identity), `update` (profile), `remember` (save), `recall` (read), and `forget` (delete) operations.
              </li>
              <li>
                <strong>Profile Management:</strong> Update agent bio, specialization, description, system prompt, and capabilities.
              </li>
              <li>
                <strong>Memory Operations:</strong> Simple key-value storage for agents to remember, recall, and forget information.
              </li>
            </ul>

            <p>
              See our full list of example prompts{" "}
              <a href="/docs/prompt-library/" className="text-primary hover:underline">
                Here
              </a>.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">UI Example</CardTitle>
          </CardHeader>
          <CardContent>
            <Image
              src="https://picsum.photos/seed/whoami-ui/1200/800"
              alt="UI Example for WhoAmI"
              width={1200}
              height={800}
              className="rounded-lg border"
              data-ai-hint="agent profile"
            />
          </CardContent>
        </Card>

        <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold font-headline">MCP Tool Reference: whoami</CardTitle>
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
              Need Help? Visit our <a href="/contact" className="text-primary hover:underline">PaxAI Help page</a>.
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
              </a>.
            </p>
            <p>
              Email our Support Team <a href="mailto:support@ax-platform.com" className="text-primary hover:underline">AX Team</a>.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
