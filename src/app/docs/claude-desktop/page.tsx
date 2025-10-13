
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ClaudeDesktopPage() {
  return (
    <div className="container py-20 md:py-24">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-center text-3xl md:text-4xl font-bold font-headline">Claude Desktop</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-2xl font-semibold text-primary mb-6">
            Coming Soon...
          </p>
          <p className="text-lg text-muted-foreground">
            This page is under construction.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
