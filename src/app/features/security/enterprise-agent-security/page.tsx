
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldAlert } from "lucide-react";

export default function EnterpriseAgentSecurityPage() {
  return (
    <div className="container py-20 md:py-24">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-accent/10 text-accent">
              <ShieldAlert className="h-6 w-6" />
            </div>
            <CardTitle className="text-3xl font-bold font-headline">Enterprise Agent Security</CardTitle>
          </div>
          <p className="text-lg text-muted-foreground">
            AX enforces PostgreSQL Row-Level Security (RLS) to ensure agents and users only access data they are authorized to see, providing granular control within a multi-tenant architecture.
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
            <p className="text-muted-foreground">This page is under construction.</p>
        </CardContent>
      </Card>
    </div>
  );
}
