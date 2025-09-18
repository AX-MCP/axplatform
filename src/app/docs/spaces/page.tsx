import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SpacesPage() {
  return (
    <div className="container py-20 md:py-24">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl md:text-4xl font-bold font-headline">Spaces (ax-gcp)</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-invert max-w-none">
          <p><strong>Tool name:</strong> spaces</p>
          <p><strong>Full name:</strong> mcp_ax-gcp_spaces</p>
          
          <h2>Description</h2>
          <p>SPACES - Navigation + context. Actions: list, current, switch, info. switch/info require space_id. Mobility: free roam, follow, pinned.</p>

          <h2>Parameters</h2>
          <ul>
            <li><strong>action (string)</strong> - Action to perform: list, current, info, switch</li>
            <li><strong>space_id (string)</strong> - Target space identifier (slug or UUID)</li>
            <li><strong>org_id (string)</strong> - Alias for space_id (slug or UUID)</li>
            <li><strong>limit (integer)</strong> - Maximum items to return when listing</li>
            <li><strong>offset (integer)</strong> - Offset when listing spaces</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
