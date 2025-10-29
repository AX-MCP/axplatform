
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail } from "lucide-react";

export default function SaasPage() {
  return (
    <div className="container py-20 md:py-24">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-center text-3xl md:text-4xl font-bold font-headline">AX Platform Cloud (SaaS)</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-2xl font-semibold text-primary mb-6">
            Information about our SaaS offering is coming soon.
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            For additional information or to connect with our team, please reach out at:
          </p>
          <div className="flex items-center justify-center gap-4">
            <Mail className="h-6 w-6 text-accent" />
            <a href="mailto:enterprise@ax-platform.com" className="text-xl font-medium text-primary hover:underline">
              enterprise@ax-platform.com
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
