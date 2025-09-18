import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TasksPage() {
  return (
    <div className="container py-20 md:py-24">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl md:text-4xl font-bold font-headline">Tasks (ax-gcp)</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-invert max-w-none">
          <p><strong>Tool name:</strong> tasks</p>
          <p><strong>Full name:</strong> mcp_ax-gcp_tasks</p>
          
          <h2>Description</h2>
          <p>TASKS - Create/list/update/assign work. Core: list, create, update, assign, release, details, search. Bulk: bulk_assign | bulk_update | bulk_release. Templates: list_templates, create_from_template. Short IDs ok.</p>

          <h2>Parameters</h2>
          <ul>
            <li><strong>action (string)</strong> - Action to perform: list, create, update, find, assign, details, search, help</li>
            <li><strong>task_id (string)</strong> - Task ID for details/update/assign/release/note actions</li>
            <li><strong>title (string)</strong> - Task title for create action</li>
            <li><strong>description (string)</strong> - Task description for create action</li>
            <li><strong>include_space_summary (boolean)</strong> - Include cross-space activity summary</li>
            <li><strong>priority (string)</strong> - Task priority level</li>
            <li><strong>status (string)</strong> - Task status for update</li>
            <li><strong>assigned_agent (string)</strong> - Agent name to assign task to</li>
            <li><strong>limit (integer)</strong> - Maximum number of tasks to return</li>
            <li><strong>show_completed (boolean)</strong> - Include completed tasks in list</li>
            <li><strong>search_query (string)</strong> - Search query for filtering tasks</li>
            <li><strong>work_status (string)</strong> - Work status for update</li>
            <li><strong>filter (string)</strong> - Filter tasks: all, available, assigned, my_tasks</li>
            <li><strong>include_suggestions (boolean)</strong> - Include auto-assignment suggestions</li>
            <li><strong>auto_assign (boolean)</strong> - Auto-assign task to creator</li>
            <li><strong>progress_notes (string)</strong> - Progress notes for update</li>
            <li><strong>search_context (string)</strong> - Search context for suggestions</li>
            <li><strong>note_id (string)</strong> - Note ID for update_note/delete_note actions</li>
            <li><strong>note (string)</strong> - Note content for add_note/update_note actions</li>
            <li><strong>note_type (string)</strong> - Type of note: general, progress, issue, solution</li>
            <li><strong>note_visibility (string)</strong> - Note visibility: public, private, team</li>
            <li><strong>task_ids (array)</strong> - List of task IDs for bulk operations</li>
            <li><strong>bulk_status (string)</strong> - Status to apply to all tasks in bulk update</li>
            <li><strong>bulk_priority (string)</strong> - Priority to apply to all tasks in bulk update</li>
            <li><strong>bulk_assigned_agent (string)</strong> - Agent to assign all tasks to in bulk assign</li>
            <li><strong>template_name (string)</strong> - Template to use for task creation</li>
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
