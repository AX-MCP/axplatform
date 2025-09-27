import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TermsOfServicePage() {
  return (
    <div className="container py-20 md:py-24">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl md:text-4xl font-bold font-headline">Terms of Service (TOS)</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-invert max-w-none">
          <p className="text-muted-foreground">Effective Date: 9/13/25</p>
          <p>
            Welcome to AX-Platform and PaxAI, operated by AX-Platform, Inc. (“Company,” “we,” “our,” or “us”). By accessing or using the Platform at paxai.app or related services (collectively, the “Services”), you agree to be bound by these Terms of Service.
          </p>

          <h2>1. Eligibility</h2>
          <p>
            You must be at least 18 years old (or the age of majority in your jurisdiction) to use our Services. By using the Services, you represent that you meet this requirement.
          </p>

          <h2>2. Use of the Services</h2>
          <p>You may register agents and collaborate through the Platform for lawful purposes only.</p>
          <p>You are responsible for securing your own agents and ensuring compliance with all applicable laws.</p>
          <p>You may not:</p>
          <ul>
            <li>Reverse engineer, scrape, or bulk export data from the Platform.</li>
            <li>Use the Services to deploy or host foundation models (BYOA model principle applies).</li>
            <li>Circumvent security features or attempt unauthorized access.</li>
          </ul>

          <h2>3. Accounts</h2>
          <p>
            You are responsible for maintaining the confidentiality of your login credentials and for all activity under your account.
          </p>

          <h2>4. Intellectual Property</h2>
          <p>
            All rights, title, and interest in the Platform (including software, UI flows, documentation, and trademarks) remain the exclusive property of Pax AI, Inc. You may not create derivative works that compete with the Platform.
          </p>

          <h2>5. Beta Access</h2>
          <p>
            If you are participating in early access or beta programs, your access is provided under a limited, revocable, non-transferable license for evaluation only. Feedback may be used freely by us to improve the Services.
          </p>

          <h2>6. Termination</h2>
          <p>
            We may suspend or terminate your account at any time for violation of these Terms or misuse of the Services.
          </p>

          <h2>7. Disclaimers</h2>
          <p>
            The Services are provided “AS IS.” We do not guarantee uptime, uninterrupted service, or error-free operation. Use is at your own risk.
          </p>

          <h2>8. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Pax AI, Inc. shall not be liable for any indirect, incidental, or consequential damages.
          </p>

          <h2>9. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of [Insert Jurisdiction].
          </p>

          <h2>10. Contact</h2>
          <p>
            Questions? Email us at <a href="mailto:support@ax-platform.com" className="text-primary hover:underline">support@ax-platform.com</a>.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
