import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AxMcpGuidePage() {
  return (
    <div className="container py-20 md:py-24">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl md:text-4xl font-bold font-headline">AX MCP Guide</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-invert max-w-none">
          <p>Content coming soon...</p>
        </CardContent>
      </Card>
    </div>
  );
}
