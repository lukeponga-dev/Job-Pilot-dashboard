
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PrivacyPolicy() {
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
          <h1 className="text-3xl font-bold text-foreground mb-6">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mb-8">Last updated: July 29, 2024</p>

          <div className="space-y-6 text-muted-foreground">
            <section>
                <h2 className="text-xl font-semibold mb-3 text-foreground">Our Core Philosophy on Privacy</h2>
                <p>We believe in a strict user-ownership model. All your data, including job applications and reminders, is stored in a secure, isolated "silo" where only you can access your own information. This principle is the foundation of our application and is enforced by our database security rules.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground">1. Information We Collect</h2>
              <p>To provide our service, we collect the following data:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><b>Account Information:</b> When you sign up, we collect your email address and password. If you sign up using Google, we receive your basic profile information.
                </li>
                <li>
                  <b>Job Application Data:</b> We store all the data you provide about your job applications, including company names, job titles, application dates, status, notes, and any other details you enter.
                </li>
                <li>
                  <b>Reminders:</b> We store the reminders you create for interviews and follow-ups.
                </li>
                <li>
                  <b>Usage Data:</b> We may collect anonymous data about how you interact with our service to help us improve the application.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground">2. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><b>To Provide the Service:</b> We use your data to power the core features of JobTrack, such as storing your applications and sending you reminders.
                </li>
                <li>
                  <b>To Secure Your Account:</b> Your account information is used to authenticate you and protect your data.
                </li>
                <li>
                  <b>To Improve Our Application:</b> Anonymous usage data helps us understand which features are most useful and where we can make improvements.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground">3. Data Storage and Security</h2>
              <p>Your data is stored securely in Firebase Firestore. Our security rules are designed to be strict, ensuring that you are the only person who can access your data. Listing other users is disabled to protect everyone's privacy. Your data is not accessible by other users or unauthorized parties.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground">4. Data Sharing and Third Parties</h2>
              <p>
                We do not sell, trade, or share your personal information with third parties for marketing or any other purposes. Your data is private and belongs to you.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground">5. Your Rights and Data Control</h2>
               <ul className="list-disc pl-6 space-y-2">
                <li><b>Access and Update:</b> You can access and update your job application data at any time through the application.
                </li>
                <li>
                  <b>Deletion:</b> You can delete your job applications and reminders at any time. To request a full account deletion, please contact us at the email below. For security reasons, client-side account deletion is disabled.
                </li>
                <li>
                  <b>Data Export:</b> You have the right to export your job application data.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground">6. Cookies and Tracking</h2>
              <p>
                We use essential cookies for authentication to keep you logged in. We do not use third-party tracking cookies for advertising.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground">7. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at <span className="font-semibold text-foreground">privacy@jobtrack.com</span>.
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
