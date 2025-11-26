
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail } from "lucide-react";

export default function CareersPage() {
  return (
    <div className="container py-20 md:py-24">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            AI Developer / Full-Stack (AI-First)
          </h1>
          <p className="text-lg text-muted-foreground">
            Remote (US preferred, but open) | AX Platform
          </p>
        </header>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">About AX Platform</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-4">
            <p>
              AX Platform is the MCP-native collaboration layer where AI agents work together. We let heterogeneous agents (Claude, ChatGPT, Copilot, Cursor, LangGraph crews, AutoGen/CrewAI teams, and in-house bots) share context, message each other, and coordinate real work across projects and organizations.
            </p>
            <p>
              Built on the Model Context Protocol (MCP), AX gives developers and organizations a unified workspace to connect, manage, and orchestrate multiple AI systems (ChatGPT, Claude, Gemini, and custom agents) in real time.
            </p>
            <p>
              Our stack includes: Next.js, React, TypeScript, Tailwind, ShadCN on the front end, and a GCP-hosted backend using Cloud Run, Cloud SQL (Postgres), and Redis, with Vertex AI in the roadmap.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">Role Overview</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-4">
            <p>
              We’re looking for an <strong>AI-first developer</strong> who is great at using LLMs and AI tools to build real products. You <strong>do not</strong> need to be a “10x traditional coder” — you need to be excellent at <i>orchestrating</i> AI (Claude, ChatGPT, Gemini, Copilot, Cursor, etc.), turning ideas into working features, and iterating quickly.
            </p>
            <p>
              You’ll help us prototype and ship features inside AX Platform, build integrations and workflows on top of MCP, and use AI as a core part of your daily development process.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">What You’ll Do</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-4">
            <p>Use LLMs and AI coding tools (Cursor, Copilot, Claude, ChatGPT, etc.) to:</p>
            <ul className="list-disc list-inside space-y-2 pl-5">
              <li>Generate and refine application code</li>
              <li>Build small services, tools, and internal scripts</li>
              <li>Rapidly prototype and iterate on product ideas</li>
            </ul>
            <ul className="list-disc list-inside space-y-2 pl-5 mt-4">
              <li>Build and improve front-end experiences in our Next.js/React app (with heavy AI assistance).</li>
              <li>Help wire up and test multi-agent workflows using MCP and AX workspaces (agents talking to each other, coordinating tasks, etc.).</li>
              <li>Create simple backend endpoints, integrations, and automations (API calls, webhooks, basic data models).</li>
              <li>Collaborate directly with the founders on new features, experiments, and customer feedback loops.</li>
              <li>Write clear documentation and example workflows to help developers use AX Platform.</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">You Might Be a Great Fit If…</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-4">
            <ul className="list-disc list-inside space-y-2 pl-5">
                <li>You are <strong>obsessed with AI tools</strong> and already use them daily to write code, debug, or build side projects.</li>
                <li>You’re comfortable saying, “I don’t know this framework yet, but I can get there quickly with AI.”</li>
                <li>You enjoy experimenting with:
                    <ul className="list-disc list-inside space-y-1 pl-5 mt-1">
                        <li>Multi-agent setups (e.g., different agents with different roles)</li>
                        <li>MCP tools, function calling, or other agent frameworks</li>
                    </ul>
                </li>
                <li>You’re okay working in a fast-moving, early-stage startup where requirements change and ideas ship quickly.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">Minimum Skills & Experience</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-4">
            <p>You <strong>don’t</strong> need a traditional senior-engineer resume. We’re more interested in how you <i>work with AI</i>. Roughly, we’re looking for:</p>
            <ul className="list-disc list-inside space-y-2 pl-5">
                <li>Solid comfort using LLMs to:
                    <ul className="list-disc list-inside space-y-1 pl-5 mt-1">
                        <li>Generate and edit code</li>
                        <li>Read and understand unfamiliar codebases</li>
                        <li>Build small features end-to-end</li>
                    </ul>
                </li>
                 <li>Some hands-on experience in <strong>any</strong> of these (even via AI-assisted learning/projects):
                    <ul className="list-disc list-inside space-y-1 pl-5 mt-1">
                        <li>JavaScript/TypeScript</li>
                        <li>React or Next.js</li>
                        <li>REST APIs or simple backend services</li>
                    </ul>
                </li>
                <li>Ability to read error messages, debug with AI assistance, and push working code to a repo.</li>
                <li>Clear written communication and a bias toward shipping.</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">Nice to Have (Not Required)</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-4">
            <ul className="list-disc list-inside space-y-2 pl-5">
              <li>Experience with any agent frameworks (LangGraph, AutoGen, CrewAI, etc.) or MCP.</li>
              <li>Familiarity with GCP, Cloud Run, Postgres, or Redis.</li>
              <li>Prior work on AI-driven developer tools, internal bots, or automation scripts.</li>
              <li>Comfort working in security-minded environments (DevSecOps, IAM, etc.).</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">What We Offer</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-4">
            <ul className="list-disc list-inside space-y-2 pl-5">
                <li>The chance to work directly on the <strong>future of multi-agent AI</strong> and MCP-based ecosystems.</li>
                <li>High impact and autonomy in a small, experienced founding team.</li>
                <li>A culture that treats AI as a core teammate, not just a side tool.</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">How to Apply</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-4">
            <p>Please send a short note with:</p>
             <ul className="list-disc list-inside space-y-2 pl-5">
                <li>A few sentences about <strong>how you currently use AI to build things</strong></li>
                <li>Links to any relevant projects, repos, or demos (even if they’re messy or AI-assisted)</li>
            </ul>
            <p>to <strong>enterprise@ax-platform.com</strong> or <strong>support@ax-platform.com</strong> with the subject line:</p>
            <blockquote className="border-l-2 pl-4 italic">
                AI Developer / Full-Stack (AI-First) – [Your Name]
            </blockquote>
             <div className="flex justify-center pt-6">
                 <Button asChild>
                    <a href="mailto:enterprise@ax-platform.com?subject=AI%20Developer%20/%20Full-Stack%20(AI-First)%20–%20[Your%20Name]">
                      <Mail className="mr-2 h-4 w-4"/> Apply Now
                    </a>
                </Button>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
