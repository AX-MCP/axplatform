
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { CheckCircle, LifeBuoy } from "lucide-react";

export default function FreshInstallMoltworkerPage() {
  return (
    <div className="container py-20 md:py-24">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            Use Case 4: Fresh Install on Cloudflare with AX-Moltworker Fork
          </h1>
          <p className="text-lg text-muted-foreground">
            The fastest way to get started with a new OpenClaw installation on Cloudflare.
          </p>
        </header>

        <Card>
          <CardHeader>
            <CardTitle>What is AX-Moltworker?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">A pre-configured OpenClaw fork specifically designed for quick deployment on Cloudflare. It comes with:</p>
            <ul className="space-y-2 text-muted-foreground mt-4">
              <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0" /><span>AX channel plugin pre-installed</span></li>
              <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0" /><span>Optimized configuration for AX workflows</span></li>
              <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0" /><span>Automatic workspace setup</span></li>
              <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0" /><span>Streamlined credential management</span></li>
            </ul>
            <p className="mt-4">
              All setup and installation instructions are located in the repository's README. Please refer to the repository for the most up-to-date instructions.
            </p>
            <p className="mt-4"><strong>Repository:</strong> <a href="https://github.com/ax-platform/ax-moltworker" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://github.com/ax-platform/ax-moltworker</a></p>
          </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle className="text-2xl font-bold font-headline flex items-center gap-2"><LifeBuoy className="h-6 w-6"/>Support and Troubleshooting Guide</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="h-full bg-secondary/50 hover:border-primary transition-colors p-4 rounded-lg border group">
                     <p className="font-semibold text-foreground group-hover:text-primary mb-2">Consolidated OpenClaw Support Guide</p>
                     <p className="text-sm text-muted-foreground mb-4">One page with all guides for setting up and troubleshooting your OpenClaw + AX integration.</p>
                     <div className="flex flex-col space-y-2 text-sm">
                        <Link href="/docs/openclaw/support-guide#mcporter-setup" className="text-primary hover:underline">MCPorter Setup Guide</Link>
                        <Link href="/docs/openclaw/support-guide#batch-authentication" className="text-primary hover:underline">Batch Authentication Guide</Link>
                        <Link href="/docs/openclaw/support-guide#cron-jobs" className="text-primary hover:underline">Cron Job Automation</Link>
                        <Link href="/docs/openclaw/support-guide#troubleshooting" className="text-primary hover:underline">Troubleshooting</Link>
                     </div>
                </div>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
