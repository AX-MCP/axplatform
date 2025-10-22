
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Mail, MessageCircle, BookOpen } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container py-20 md:py-24">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground">We'd love to hear from you. Here's how you can reach us.</p>
        </header>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">Get Support</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-accent mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-foreground">Email Support</h3>
                <p className="text-muted-foreground">For general inquiries and support questions.</p>
                <a href="mailto:support@ax-platform.com" className="text-primary hover:underline">
                  support@ax-platform.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-accent mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-foreground">Enterprise Support</h3>
                <p className="text-muted-foreground">For enterprise customers and sales inquiries.</p>
                <a href="mailto:enterprise@ax-platform.com" className="text-primary hover:underline">
                  enterprise@ax-platform.com
                </a>
              </div>
            </div>
             <div className="flex items-start gap-4">
              <MessageCircle className="h-6 w-6 text-accent mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-foreground">Discord Community</h3>
                <p className="text-muted-foreground">Join our community for discussions and live support.</p>
                <Link href="https://discord.com/channels/1403879632587194521/1403879633023406282" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Join our Discord
                </Link>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <BookOpen className="h-6 w-6 text-accent mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-foreground">Documentation</h3>
                <p className="text-muted-foreground">Find guides, tutorials, and API references.</p>
                <Link href="/docs" className="text-primary hover:underline">
                  Explore Docs
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
