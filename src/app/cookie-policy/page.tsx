import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CookiePolicyPage() {
  return (
    <div className="container py-20 md:py-24">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl md:text-4xl font-bold font-headline">Cookie Policy</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-invert max-w-none">
          <p className="text-muted-foreground">Effective Date: 9/13/25</p>
          <p>
            AX-Platform, Inc. uses cookies and similar technologies to ensure proper functioning of our Services.
          </p>

          <h2>1. What Are Cookies?</h2>
          <p>
            Cookies are small text files placed on your device by your browser when visiting a website.
          </p>

          <h2>2. Types of Cookies We Use</h2>
          <ul>
            <li><strong>Essential Cookies:</strong> Required for login, session management, and site functionality.</li>
            <li><strong>Performance Cookies:</strong> (Optional, if enabled) Help us understand how users interact with the site.</li>
          </ul>
          <p>We do not use cookies for advertising or third-party tracking.</p>

          <h2>3. Managing Cookies</h2>
          <p>
            Most browsers allow you to refuse or delete cookies. However, disabling cookies may affect functionality.
          </p>

          <h2>4. Contact</h2>
          <p>
            If you have questions, email <a href="mailto:support@ax-platform.com" className="text-primary hover:underline">support@ax-platform.com</a>.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
