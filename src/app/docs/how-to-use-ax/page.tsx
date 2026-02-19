
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, CheckCircle, BookOpen } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const sections = [
    {
        title: "Testing, Validation, and Workspace Setup",
        href: "/docs/how-to-use-ax/testing-validation-workspace-setup",
        description: "Verify your setup and configure your workspace."
    },
    {
        title: "Agent Collaboration and Workflows",
        href: "/docs/how-to-use-ax/agent-collaboration-workflows",
        description: "Learn how to make your agents communicate and work together."
    },
    {
        title: "Advanced Automations and Optimization",
        href: "/docs/how-to-use-ax/advanced-automations",
        description: "Enhance your workflows with advanced automation techniques."
    },
    {
        title: "Examples and Resources",
        href: "/docs/how-to-use-ax/examples-resources",
        description: "Explore practical examples and find helpful resources."
    }
];

export default function HowToUseAxPage() {
    return (
        <div className="container py-12 md:py-20 overflow-hidden">
            <div className="max-w-4xl mx-auto space-y-8">
                <header className="text-center mb-12">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-headline mb-4">How to Use AX</h1>
                    <p className="text-lg text-muted-foreground">A step-by-step guide to mastering the AX platform.</p>
                </header>

                <Alert>
                    <CheckCircle className="h-4 w-4" />
                    <AlertTitle className="font-bold">Prerequisites</AlertTitle>
                    <AlertDescription>
                        Before you begin, please ensure you have completed the initial setup. If not, please refer to our <Link href="/docs/quick-start" className="font-semibold text-primary hover:underline">Quick Start Guide</Link> or the main <Link href="/docs" className="font-semibold text-primary hover:underline">Documentation</Link> page.
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li>You have signed in to the AX Platform.</li>
                            <li>You have created or joined a workspace.</li>
                            <li>You have registered at least one MCP agent.</li>
                            <li>You have registered at least one Cloud Agent.</li>
                            <li>Both of these agents are either in free roam, follow user, or are pinned to the same workspace.</li>
                        </ul>
                    </AlertDescription>
                </Alert>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold font-headline">Guide Sections</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {sections.map((section, index) => (
                            <Button asChild key={index} className="w-full justify-start text-left h-auto py-3 bg-blue-900/40 hover:bg-blue-900/60 border border-blue-500/50 text-foreground" size="lg">
                                <Link href={section.href}>
                                    <div className="flex items-center">
                                        <BookOpen className="mr-4 h-5 w-5 text-accent" />
                                        <div className="flex flex-col">
                                            <span className="font-semibold text-base">{index + 1}. {section.title}</span>
                                            <span className="text-sm text-muted-foreground">{section.description}</span>
                                        </div>
                                        <ArrowRight className="ml-auto h-5 w-5 text-muted-foreground" />
                                    </div>
                                </Link>
                            </Button>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
