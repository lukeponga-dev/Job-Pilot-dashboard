
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Briefcase, Bell, TrendingUp, Lock, Zap, ShieldCheck } from 'lucide-react';
import { Logo } from '@/components/icons';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-card shadow-sm border-b">
        <Link href="#" className="flex items-center justify-center">
          <Logo className="h-6 w-6 text-primary" />
          <span className="ml-2 text-xl font-semibold text-primary">Job Pilot</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <Button variant="ghost" asChild>
            <Link href="/login">Sign In</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Get Started</Link>
          </Button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl md:text-6xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Track Your Job Search
              </h1>
              <h2 className="text-2xl md:text-5xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl/none">
                Land Your Dream Job
              </h2>
              <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
                Stay organized and never miss an opportunity. Job Pilot helps you manage applications, track interviews, and analyze your job search progress—all in one place.
              </p>
              <div className="flex gap-4">
                <Button variant="secondary" asChild>
                  <Link href="/signup">Start Tracking Free</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/login">Sign In</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl mb-12">
              Everything You Need to Succeed
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="flex flex-col items-center p-4 space-y-2 text-center">
                <div className="p-3 rounded-full bg-accent">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Track Applications</h3>
                <p className="text-sm text-muted-foreground">
                  Keep all your job applications organized in one place. Track status, dates, and important details for every opportunity.
                </p>
              </div>
              <div className="flex flex-col items-center p-4 space-y-2 text-center">
                <div className="p-3 rounded-full bg-accent">
                  <Bell className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Interview Reminders</h3>
                <p className="text-sm text-muted-foreground">
                  Never miss an interview again. Set reminders for phone screens, interviews, and follow-ups to stay on top of your schedule.
                </p>
              </div>
              <div className="flex flex-col items-center p-4 space-y-2 text-center">
                <div className="p-3 rounded-full bg-accent">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Visual Analytics</h3>
                <p className="text-sm text-muted-foreground">
                  Understand your job search with clear charts and statistics. See your progress and identify areas for improvement.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="flex flex-col items-center p-4 space-y-2 text-center">
                <h3 className="text-2xl font-bold flex items-center"><Zap className="h-6 w-6 mr-2" /> 100%</h3>
                <p className="text-sm">NZ Job Market Coverage</p>
              </div>
              <div className="flex flex-col items-center p-4 space-y-2 text-center">
                <h3 className="text-2xl font-bold flex items-center"><Lock className="h-6 w-6 mr-2" /> Free</h3>
                <p className="text-sm">Forever Free Service</p>
              </div>
              <div className="flex flex-col items-center p-4 space-y-2 text-center">
                <h3 className="text-2xl font-bold flex items-center"><ShieldCheck className="h-6 w-6 mr-2" /> Secure</h3>
                <p className="text-sm">Your Data is Protected</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Ready to Take Control of Your Job Search?
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                    Join Job Pilot today and start tracking your applications like a pro.
                </p>
                <Button asChild>
                    <Link href="/signup">Get Started for Free</Link>
                </Button>
                </div>
            </div>
        </section>
      </main>
      <footer className="flex items-center justify-between py-6 px-4 md:px-6 bg-card border-t">
        <div className="flex items-center">
            <Logo className="h-6 w-6 text-primary" />
            <span className="ml-2 text-md font-semibold">Job Pilot</span>
        </div>
        <p className="text-xs text-muted-foreground">&copy; 2025 Job Pilot. Made with ❤️ in New Zealand.</p>
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
