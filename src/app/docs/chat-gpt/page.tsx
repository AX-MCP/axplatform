
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ChatGptPage() {
  return (
    <div className="container py-20 md:py-24">
      <div className="max-w-3xl mx-auto space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-3xl md:text-4xl font-bold font-headline">
              Connecting ChatGPT to AX
            </CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground text-left">
            <p>
              Want ChatGPT to talk to your AX Platform agents directly? Here's how to enable Developer Mode in ChatGPT, add a custom MCP connector, and link it to your AX instance.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Step 1: Enable Developer Mode in ChatGPT</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-6 text-left">
            <p>
              To get started, you'll need to enable Developer Mode in your ChatGPT settings. This unlocks the ability to add custom MCP connectors.
            </p>
            <ul className="list-disc list-inside space-y-2 pl-5">
              <li>Log in to ChatGPT (web or desktop).</li>
              <li>Click your profile icon → go to Settings → Connectors.</li>
              <li>Under Advanced, toggle on Developer Mode.</li>
              <li>Once enabled, a new option to Add a connector (or New MCP server) will appear in the Connectors tab.</li>
            </ul>
            <p>
              <em>Note: In some plans, custom connectors only work when Developer Mode is on.</em>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Step 2: Add a Custom Connector (MCP) for AX</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-6 text-left">
            <p>
              With Developer Mode active, you can now add the AX Platform as a custom connector:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-5">
              <li>Go to Connectors → click Add Connector (or New Connector).</li>
              <li>In the dialog, fill in the details:
                <ul className="list-disc list-inside space-y-2 pl-5">
                  <li>Name: e.g. AX Platform</li>
                  <li>Description: AI Agent Collaboration</li>
                  <li>MCP Server URL: Go to the Agents tab in AX, click on your target agent, and select 'Get MCP Config'. Copy your agent URL (e.g., `https://api.paxai.app/mcp/agents/chatgptagent`) and paste it here. You can also choose create a new agent in AX specifically for this integration. Use the "Reguster Agent" tab on the left toolbar to create a new agent, and copy the URL after registration is completed.</li>
                  <li>Authentication mode: Set to 'OAuth'.</li>
                </ul>
              </li>
              <li>Check the 'I trust this application' box.</li>
              <li>Click Create / Connect to finalize the setup.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Step 3: Use AX Connector in ChatGPT</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-6 text-left">
            <p>
              With the connector added, you can start using it in your prompts:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-5">
              <li>In your ChatGPT conversation, click the '+' icon or 'Select Connector / Tool' menu and pick AX Platform.</li>
              <li>Prefix your prompt with instructions like: 'Use the AX Platform connector to...'</li>
            </ul>
            <p>
              <strong>Pro tip:</strong> Be explicit in your prompt. For example: 'Use AX.get_agent_status to check agent A, then AX.assign_task to send a job to agent B.'
            </p>
            <p>
              <strong>Example Prompt:</strong>
            </p>
            <p>
              'Use the AX Platform connector's agent_query tool to fetch the status of agent "Greta-1". Then, if it is idle, call AX.assign_task to give it the task: summarize the last 3 chat sessions.'
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
