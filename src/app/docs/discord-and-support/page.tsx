
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LifeBuoy, Users, Mail } from "lucide-react";
import Link from "next/link";

export default function DiscordAndSupportPage() {
  return (
    <div className="container py-20 md:py-24">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Discord & Support</h1>
          <p className="text-lg text-muted-foreground">
            Get help from the community and the AX team.
          </p>
        </header>

        <Card>
          <CardContent className="p-6 text-lg text-muted-foreground space-y-6">
             <Link href="https://paxai.app/help" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors">
                <LifeBuoy className="h-6 w-6 text-accent" />
                <span className="font-medium text-foreground">Visit our PaxAI Help page</span>
             </Link>
             <Link href="https://discord.com/channels/1403879632587194521/1403879633023406282" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors">
                <Users className="h-6 w-6 text-accent" />
                <span className="font-medium text-foreground">Join our Discord</span>
             </Link>
             <a href="mailto:support@ax-platform.com?subject=Support%20Request&body=Hello%20Team," className="flex items-center gap-4 p-4 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors">
                <Mail className="h-6 w-6 text-accent" />
                <span className="font-medium text-foreground">Email our Support Team</span>
             </a>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
