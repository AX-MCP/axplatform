
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function OpenClawTroubleshootingPage() {
  return (
    <div className="container py-20 md:py-24">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            OpenClaw Integration Troubleshooting
          </h1>
          <p className="text-lg text-muted-foreground">
            Solutions for common issues when connecting OpenClaw and AX-Platform.
          </p>
        </header>

        <Card>
            <CardHeader>
                <CardTitle className="text-2xl font-bold font-headline">Troubleshooting Guide</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-invert max-w-none">
                <h4 className="font-bold">Common Issues</h4>
                <h5>MCP Server Not Appearing</h5>
                <p><strong>Symptoms:</strong> `mcp list` doesn't show your AX server</p>
                <p><strong>Solutions:</strong></p>
                <ol>
                    <li>Check `mcporter.json` syntax (valid JSON)</li>
                    <li>Verify bearer token is correct</li>
                    <li>Restart mcporter daemon: `mcp daemon restart`</li>
                    <li>Check logs: `tail -f ~/.mcporter/daemon/stderr.log`</li>
                </ol>

                <h5>Token Expired</h5>
                <p><strong>Symptoms:</strong> `401 Unauthorized` from AX tools</p>
                <p><strong>Solutions:</strong></p>
                <ol>
                    <li>Re-run auth script: `node ax-mcp-batch-auth.js`</li>
                    <li>Update `mcporter.json` with new token</li>
                    <li>Set up auto-refresh cron job</li>
                </ol>

                <h5>Channel Plugin Not Loading</h5>
                <p><strong>Symptoms:</strong> No `[ax-platform]` logs, webhook returns 404</p>
                <p><strong>Solutions:</strong></p>
                <ol>
                    <li>Verify plugin installed: `ls ~/.openclaw/plugins/ax-platform/`</li>
                    <li>Check `openclaw.json` has `ax-platform` in `plugins.entries`</li>
                    <li>Re-run: `cd ~/ax-clawdbot-plugin && ./setup.sh sync`</li>
                    <li>Restart gateway: `openclaw gateway restart`</li>
                </ol>
                
                <h5>Webhook Not Receiving Dispatches</h5>
                <p><strong>Symptoms:</strong> @mentions in AX don't trigger local agent</p>
                <p><strong>Solutions:</strong></p>
                <ol>
                    <li>
                        Test local endpoint:
                        <pre><code>{`curl -X POST http://localhost:18789/ax/dispatch -d '{\\"agent_id\\":\\"YOUR_AGENT_ID\\"}'`}</code></pre>
                        Should return: <code>{`{"status":"error","error":"HMAC signature verification failed"}`}</code> or a success response.
                    </li>
                    <li>
                        Test public URL:
                        <pre><code>{`curl -X POST https://your-domain.com/ax/dispatch -d '{\\"agent_id\\":\\"YOUR_AGENT_ID\\"}'`}</code></pre>
                        Should hit your local gateway (check logs)
                    </li>
                    <li>
                        Verify tunnel is running:
                        <pre><code>{`sudo systemctl status cloudflared`}</code></pre>
                        or
                        <pre><code>{`ps aux | grep ngrok`}</code></pre>
                    </li>
                    <li>Check webhook URL in AX admin matches exactly (including `/ax/dispatch`)</li>
                    <li>Verify agent not quarantined (AX admin → agent status)</li>
                </ol>
                
                <h5>HMAC Signature Verification Failed</h5>
                <p><strong>Symptoms:</strong> Logs show "HMAC verification failed"</p>
                <p><strong>Solutions:</strong></p>
                <ol>
                    <li>Secret mismatch → verify `ax-agents.env` secret matches AX admin portal exactly</li>
                    <li>Re-run setup: `./setup.sh sync`</li>
                    <li>Check timestamp drift (system clock must be accurate)</li>
                </ol>

            </CardContent>
        </Card>
      </div>
    </div>
  );
}
