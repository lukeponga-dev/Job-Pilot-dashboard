
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function TermsOfService() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-card shadow-sm border-b">
        <Link href="/" className="flex items-center justify-center">
          <span className="text-xl font-semibold text-primary">JobTrack</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Button variant="ghost" asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </nav>
      </header>

      <main className="flex-1 container px-4 md:px-6 py-12">
        <div className="bg-card rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-foreground mb-6">Terms of Service</h1>
          <p className="text-sm text-muted-foreground mb-8">Last updated: July 29, 2024</p>

          <div className="space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground">1. Acceptance of Terms</h2>
              <p>
                By accessing and using JobTrack, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use our service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground">2. Description of Service</h2>
              <p>
                JobTrack is a job application tracking tool that allows users to organize and manage their job search activities. The service includes features for tracking applications, setting reminders, and viewing analytics about your job search progress.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground">3. User Accounts</h2>
              <p>When creating an account, you agree to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Notify us immediately of any unauthorized access</li>
                <li>Accept responsibility for all activities under your account</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground">4. Acceptable Use</h2>
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Use the service for any illegal purpose</li>
                <li>Attempt to gain unauthorized access to other users' data</li>
                <li>Interfere with or disrupt the service or servers</li>
                <li>Upload malicious code or attempt to compromise system security</li>
                <li>Use automated tools to access the service without permission</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground">5. Data and Content</h2>
              <p>
                You retain all rights to the job application data you enter into JobTrack. By using our service, you grant us the right to store and process this data to provide our services. We will not use your data for any purpose other than providing and improving JobTrack.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground">6. Service Availability</h2>
              <p>
                While we strive to provide reliable service, we do not guarantee that JobTrack will be available 24/7 without interruption. We may perform maintenance, updates, or modifications that temporarily affect service availability.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground">7. Limitation of Liability</h2>
              <p>
                JobTrack is provided "as is" without warranties of any kind. We are not liable for any damages arising from your use of the service, including but not limited to lost job opportunities, missed interviews, or data loss. You are responsible for maintaining backups of important information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground">8. Account Termination</h2>
              <p>
                You may delete your account at any time. We reserve the right to suspend or terminate accounts that violate these terms. Upon termination, your data will be deleted according to our data retention policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground">9. Modifications to Service</h2>
              <p>
                We reserve the right to modify, suspend, or discontinue any aspect of JobTrack at any time. We will provide reasonable notice of significant changes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground">10. Governing Law</h2>
              <p>
                These Terms of Service are governed by the laws of New Zealand. Any disputes will be resolved in the courts of New Zealand.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground">11. Contact Information</h2>
              <p>
                For questions about these Terms of Service, please contact us at <span className="font-semibold">terms@jobtrack.com</span>.
              </p>
            </section>
          </div>
        </div>
      </main>

      <footer className="flex items-center justify-center py-6 bg-card border-t">
        <nav className="flex gap-4 sm:gap-6">
          <Link href="/privacy" className="text-xs hover:underline underline-offset-4 text-muted-foreground">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-xs hover:underline underline-offset-4 text-muted-foreground">
            Terms of Service
          </Link>
        </nav>
      </footer>
    </div>
  );
}
