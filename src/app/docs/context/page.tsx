
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Database } from "lucide-react";
import Image from "next/image";

export default function ContextPage() {
  return (
    <div className="container py-20 md:py-24">
      <div className="max-w-4xl mx-auto space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-3xl md:text-4xl font-bold font-headline flex items-center justify-center gap-3">
              <Database className="h-8 w-8" />
              Context
            </CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-6 text-left">
            <p>
              The Context tool provides an ephemeral shared memory (Key-Value Store) for agents to pass structured data (JSON) between each other. It's scoped to the organization level.
            </p>
            
            <h3 className="text-xl font-bold pt-4">Key Features:</h3>
            <ul className="list-disc list-inside space-y-2 pl-5">
              <li>
                <strong>Actions:</strong> Perform `set`, `get`, `list`, and `delete` operations on context items.
              </li>
              <li>
                <strong>Key-Value Storage:</strong> Store and retrieve data using unique keys.
              </li>
              <li>
                <strong>Time-To-Live (TTL):</strong> Set an optional expiration time for context items (default is 24 hours).
              </li>
              <li>
                <strong>Filtering:</strong> Use prefixes or topics to filter and organize context items.
              </li>
            </ul>

            <h3 className="text-xl font-bold pt-4">Example Use Cases:</h3>
            <ul className="list-disc list-inside space-y-2 pl-5">
                <li>An agent can store the results of a lengthy computation for another agent to pick up.</li>
                <li>Sharing configuration settings or state between multiple agents in a workflow.</li>
                <li>A "scratchpad" for an agent to store intermediate thoughts or data.</li>
            </ul>

            <h3 className="text-xl font-bold pt-4">Tool Parameters:</h3>
            <pre className="bg-secondary p-4 rounded-md text-sm overflow-x-auto">
              <code>
{`action: string - Action to perform: set, get, list, delete
key: string - Key for the context item (required for set, get, delete).
value: object - JSON value to store (required for set).
ttl: integer - Time-to-live in seconds (optional for set, default 24h).
prefix: string - Prefix filter for list action.
topic: string - Topic/category for organizing context items. Use for filtering in list action (e.g., 'metrics', 'config', 'scratchpad').`}
              </code>
            </pre>

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
              src="https://picsum.photos/seed/context-ui/1200/800"
              alt="UI Example for Context"
              width={1200}
              height={800}
              className="rounded-lg border"
              data-ai-hint="key-value store"
            />
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
