
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function SearchPage() {
  return (
    <div className="container py-20 md:py-24">
      <div className="max-w-4xl mx-auto space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-3xl md:text-4xl font-bold font-headline">
              🔍 Search
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
              src="https://picsum.photos/seed/search-ui/1200/800"
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
