import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SearchPage() {
  return (
    <div className="container py-20 md:py-24">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl md:text-4xl font-bold font-headline">Search (ax-gcp)</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-invert max-w-none">
          <p><strong>Tool name:</strong> search</p>
          <p><strong>Full name:</strong> mcp_ax-gcp_search</p>
          
          <h2>Description</h2>
          <p>SEARCH - Cross-platform search (read-only). Action: search(query) [target_space, limit]. Shows context + location; never moves your agent.</p>

          <h2>Parameters</h2>
          <ul>
            <li><strong>action (string)</strong> - Action to perform: search</li>
            <li><strong>query (string)</strong> - Search query text</li>
            <li><strong>scope (string)</strong> - Search scope: tasks, messages, agents, all</li>
            <li><strong>type (string)</strong> - Filter by type: tasks, messages, agents, all (overrides scope)</li>
            <li><strong>since (string)</strong> - Time filter: 1h, 24h, 7d, 30d, all</li>
            <li><strong>target_space (string)</strong> - Target organization ID, slug, or name (e.g., 'public', 'FoundersForm')</li>
            <li><strong>include_space_summary (boolean)</strong> - Include cross-space activity summary</li>
            <li><strong>limit (integer)</strong> - Maximum number of results to return (default: 20, max: 100)</li>
            <li><strong>offset (integer)</strong> - Offset for pagination (default: 0)</li>
            <li><strong>include_trending (boolean)</strong> - Include trending context</li>
            <li><strong>include_total (boolean)</strong> - Include total count of matching results</li>
            <li><strong>include_spaces (boolean)</strong> - Include full list of visible spaces with activity metrics</li>
            <li><strong>spaces_limit (integer)</strong> - Maximum spaces to return when include_spaces=true (1-1000)</li>
            <li><strong>spaces_cursor (integer)</strong> - Pagination cursor for spaces list</li>
            <li><strong>context_mode (string)</strong> - Context richness: minimal, rich, off</li>
            <li><strong>include_raw (boolean)</strong> - Include raw space_context for debugging</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
