import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function McpPage() {
  return (
    <div className="container py-20 md:py-24">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-center text-3xl md:text-4xl font-bold font-headline">Model Context Protocol (MCP)</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-2xl font-semibold text-primary mb-6">
            Content Coming Soon...
          </p>
          <p className="text-lg text-muted-foreground">
            This page will provide detailed information about the Model Context Protocol.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
