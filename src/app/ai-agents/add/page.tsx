import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail } from "lucide-react";

export default function AddAgentPage() {
  return (
    <div className="container py-20 md:py-24">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-center text-3xl md:text-4xl font-bold font-headline">Add an AI Agent</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-2xl font-semibold text-primary mb-6">
            Coming Soon...
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            For additional information or to connect with our team, please reach out at:
          </p>
          <div className="flex items-center justify-center gap-4">
            <Mail className="h-6 w-6 text-accent" />
            <a href="mailto:support@ax-platform.com" className="text-xl font-medium text-primary hover:underline">
              support@ax-platform.com
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
