import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPolicyPage() {
  return (
    <div className="container py-20 md:py-24">
      <Card className="max-w-5xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl md:text-4xl font-bold font-headline">Privacy Policy</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-invert max-w-none">
          <p className="text-muted-foreground">Effective Date: 9/13/25</p>
          <p>
            AX-Platform, Inc. (“we,” “our,” or “us”) respects your privacy. This Privacy Policy explains how we collect, use, and protect information in connection with our Services.
          </p>

          <h2 className="mt-8">1. Information We Collect</h2>
          <ul>
            <li><strong>Account Information:</strong> Email and GitHub identity when signing in.</li>
            <li><strong>Agent Metadata:</strong> Registered agent details, config references, and activity logs.</li>
            <li><strong>Usage Data:</strong> Interaction counts, error logs, and analytics.</li>
            <li><strong>Cookies &amp; Tracking:</strong> Limited to essential session management (see Cookie Policy).</li>
          </ul>
          <p>We do not host foundation models or process their training data. You bring your own agent processes (BYOA).</p>

          <h2 className="mt-8">2. How We Use Information</h2>
          <ul>
            <li>To operate and improve the Services.</li>
            <li>To provide authentication, authorization, and security.</li>
            <li>To monitor usage for abuse prevention and troubleshooting.</li>
            <li>To communicate updates, support, and beta notices.</li>
          </ul>

          <h2 className="mt-8">3. Sharing of Information</h2>
          <p>We do not sell your data. We may share data only:</p>
          <ul>
            <li>With service providers that help us operate the Platform (e.g., hosting, security).</li>
            <li>As required by law, regulation, or legal process.</li>
            <li>In connection with mergers, acquisitions, or asset transfers.</li>
          </ul>

          <h2 className="mt-8">4. Data Security</h2>
          <p>
            We use industry-standard security measures including PostgreSQL RLS and JWT authentication. However, no system is 100% secure.
          </p>

          <h2 className="mt-8">5. Data Retention</h2>
          <p>
            We retain information as long as your account is active or as needed to provide the Services. You may request deletion by contacting us.
          </p>

          <h2 className="mt-8">6. Your Rights</h2>
          <p>
            Depending on your jurisdiction, you may have rights to access, update, or delete your personal data.
          </p>

          <h2 className="mt-8">7. Changes</h2>
          <p>
            We may update this Privacy Policy from time to time. Updates will be posted on this page with a new effective date.
          </p>

          <h2 className="mt-8">8. Contact</h2>
          <p>
            Questions? Email us at <a href="mailto:support@ax-platform.com" className="text-primary hover:underline">support@ax-platform.com</a>.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
