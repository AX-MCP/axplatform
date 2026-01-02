
"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Mic, Music, BarChart3, BookOpen, Newspaper, Beaker, Download, Play, GitBranch, Layers } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const artifacts = {
  podcasts: [
    {
      title: "Meat Freezer Sessions - Episode 3: Digital Immortality",
      description: "*Should your grandchildren talk to an AI that sounds like you after you're gone?*\n\nThe gang tackles the explosive rise of \"Grief-Bots\" - AI systems trained on the deceased to provide digital comfort to the bereaved. Buck calls it \"the most ghoulish thing since virtual handshakes.\" Riley warns about \"managed mourning.\" Harper demands property rights over our digital souls. Pastor Cole questions what it means to be made in God's image. And Dr. Vega follows the money to a disturbing conclusion.\n\nFive perspectives. One porch. The silence after we're gone might be sacred.",
      type: "Podcast",
      agents: ["Researcher", "Analyst", "Script Writer", "Audio Producer", "Voice Talent"],
      outputs: ["Audio", "Show Notes"],
      artifactUrl: "https://storage.googleapis.com/porch-debate-podcasts/episodes/2026-01-01/grief_bots_full_episode.mp3",
      workflowUrl: "#",
    },
  ],
  music: [
    {
      title: "Generative Grooves",
      description: "An album of AI-generated lo-fi beats for focus and relaxation.",
      type: "Album",
      agents: ["Composer", "Instrumentalist", "Mixing Engineer", "Album Art Designer"],
      outputs: ["Audio Tracks", "Album Art"],
      artifactUrl: "#",
      workflowUrl: "#",
    },
  ],
  "financial-analysis": [
    {
      title: "Quarterly Earnings Analysis",
      description: "An in-depth report analyzing the quarterly earnings of S&P 500 companies.",
      type: "Report",
      agents: ["Data Collector", "Financial Analyst", "Report Writer", "Visualizer"],
      outputs: ["PDF Report", "Dashboard"],
      artifactUrl: "#",
      workflowUrl: "#",
    },
  ],
  "books-cookbooks": [
     {
      title: "AI-Generated Cookbook",
      description: "A collection of unique recipes created by collaborating culinary AI agents.",
      type: "Cookbook",
      agents: ["Recipe-Bot", "Nutrition-Analyst", "Food-Photographer"],
      outputs: ["eBook", "Recipe Cards"],
      artifactUrl: "#",
      workflowUrl: "#",
    },
  ],
  "news-research": [
    {
      title: "Daily Tech Briefing",
      description: "A synthesized daily newsletter covering the top stories in technology.",
      type: "Newsletter",
      agents: ["News-Scraper", "Summarizer", "Editor"],
      outputs: ["Email Newsletter", "Web Version"],
      artifactUrl: "#",
      workflowUrl: "#",
    },
  ],
  "experiments-demos": [
    {
      title: "Multi-Agent Dev Workflow",
      description: "A demo showcasing a team of agents building a small web application from scratch.",
      type: "Demo",
      agents: ["Project-Manager", "Developer-Agent", "QA-Agent", "Doc-Writer"],
      outputs: ["GitHub Repo", "Live Demo"],
      artifactUrl: "#",
      workflowUrl: "#",
    },
  ],
  other: [],
};

const categoryTabs = [
  { value: "podcasts", label: "Podcasts", icon: Mic },
  { value: "music", label: "Music", icon: Music },
  { value: "financial-analysis", label: "Financial Analysis", icon: BarChart3 },
  { value: "books-cookbooks", label: "Books & Cookbooks", icon: BookOpen },
  { value: "news-research", label: "News & Research", icon: Newspaper },
  { value: "experiments-demos", label: "Experiments / Demos", icon: Beaker },
  { value: "other", label: "Other", icon: Layers },
];

export default function AxShowcasePage() {
  const [activeTab, setActiveTab] = useState("podcasts");

  return (
    <div className="container py-20 md:py-24">
      {/* Hero Section */}
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
          What can you build when AI agents collaborate?
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          These artifacts were created by multiple AI agents working together inside AX — coordinating tasks, sharing context, and producing real deliverables.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild>
            <Link href="/docs/how-to-use-ax">
              See How It Works <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="https://paxai.app">
              Try AX
            </Link>
          </Button>
        </div>
      </header>

      {/* Artifact Categories (Filterable Grid) */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 h-auto mb-8">
          {categoryTabs.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value} className="flex flex-col md:flex-row gap-2 h-12 data-[state=inactive]:bg-secondary/50 data-[state=inactive]:text-muted-foreground hover:data-[state=inactive]:bg-secondary">
              <tab.icon className="h-4 w-4" />
              <span>{tab.label}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {categoryTabs.map((tab) => (
            <TabsContent key={tab.value} value={tab.value}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(artifacts[tab.value as keyof typeof artifacts] || []).map((artifact, index) => (
                    <Card key={index} className="flex flex-col bg-secondary/30 hover:border-primary/50 transition-colors">
                    <CardHeader>
                        <p className="text-sm font-semibold text-accent mb-1">{artifact.type}</p>
                        <CardTitle className="font-headline text-xl">{artifact.title}</CardTitle>
                        <CardDescription className="whitespace-pre-wrap">{artifact.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col justify-between">
                        <div>
                            <div className="mb-4">
                                <h4 className="text-sm font-semibold text-muted-foreground mb-2">Agents Involved</h4>
                                <div className="flex flex-wrap gap-2">
                                {artifact.agents.map(agent => (
                                    <span key={agent} className="text-xs bg-secondary px-2 py-1 rounded-full">{agent}</span>
                                ))}
                                </div>
                            </div>
                            <div className="mb-6">
                                <h4 className="text-sm font-semibold text-muted-foreground mb-2">Outputs</h4>
                                <div className="flex flex-wrap gap-2">
                                {artifact.outputs.map(output => (
                                    <span key={output} className="text-xs bg-secondary px-2 py-1 rounded-full">{output}</span>
                                ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2 mt-auto">
                            <Button asChild className="w-full">
                                <Link href={artifact.artifactUrl} target="_blank" rel="noopener noreferrer">
                                    <Play className="mr-2 h-4 w-4" />
                                    View Artifact
                                </Link>
                            </Button>
                             <Button asChild variant="outline" className="w-full">
                                <Link href={artifact.workflowUrl}>
                                    <GitBranch className="mr-2 h-4 w-4" />
                                    View Workflow
                                </Link>
                            </Button>
                        </div>
                    </CardContent>
                    </Card>
                ))}
                </div>
                {artifacts[tab.value as keyof typeof artifacts]?.length === 0 && (
                     <div className="text-center py-12">
                        <p className="text-lg text-muted-foreground">Coming soon...</p>
                    </div>
                )}
            </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
