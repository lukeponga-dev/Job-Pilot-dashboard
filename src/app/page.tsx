'use client';

import Link from 'next/link';
import { Briefcase, Bell, BarChart3, Shield, Users, Zap, FileText, ScanText, StickyNote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function HomePage() {
    return (
        <div className="flex flex-col min-h-dvh bg-background">
            <header className="px-4 lg:px-6 h-14 flex items-center border-b">
                <Link href="/" className="flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-primary" />
                    <span className="ml-2 text-xl font-bold font-headline">JobTrack</span>
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    <Button variant="ghost" asChild>
                        <Link href="/login">Sign In</Link>
                    </Button>
                    <Button asChild>
                        <Link href="/signup">Get Started</Link>
                    </Button>
                </nav>
            </header>
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="space-y-4">
                                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                                        Track Your Job Search, Land Your Dream Job
                                    </h1>
                                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                        Stay organized and never miss an opportunity. JobTrack helps you manage applications, track interviews, and provides AI tools to supercharge your job hunt.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                    <Button asChild size="lg">
                                        <Link href="/signup">Start Tracking Free</Link>
                                    </Button>
                                    <Button asChild variant="outline" size="lg">
                                        <Link href="/login">Sign In</Link>
                                    </Button>
                                </div>
                            </div>
                            <Image
                                src="https://picsum.photos/seed/jobtrack-hero/1200/800"
                                data-ai-hint="dashboard application"
                                alt="Hero"
                                width={600}
                                height={400}
                                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                            />
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-semibold">Key Features</div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Everything You Need to Succeed</h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Our platform is packed with features to help you stay on top of your job search and make data-driven decisions.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
                            <div className="grid gap-1">
                                <div className="flex items-center gap-3">
                                    <Briefcase className="h-8 w-8 text-primary" />
                                    <h3 className="text-xl font-bold">Track Applications</h3>
                                </div>
                                <p className="text-muted-foreground">
                                    Keep all your job applications organized in one place. Track status, dates, and important details.
                                </p>
                            </div>
                            <div className="grid gap-1">
                                <div className="flex items-center gap-3">
                                    <Bell className="h-8 w-8 text-primary" />
                                    <h3 className="text-xl font-bold">Interview Reminders</h3>
                                </div>
                                <p className="text-muted-foreground">
                                    Never miss an interview again. Set reminders for calls, interviews, and follow-ups.
                                </p>
                            </div>
                            <div className="grid gap-1">
                                <div className="flex items-center gap-3">
                                    <BarChart3 className="h-8 w-8 text-primary" />
                                    <h3 className="text-xl font-bold">Visual Analytics</h3>
                                </div>
                                <p className="text-muted-foreground">
                                    Understand your job search with clear charts and statistics to see your progress.
                                </p>
                            </div>
                             <div className="grid gap-1">
                                <div className="flex items-center gap-3">
                                    <FileText className="h-8 w-8 text-primary" />
                                    <h3 className="text-xl font-bold">AI CV Writer</h3>
                                </div>
                                <p className="text-muted-foreground">
                                    Generate a professional and polished CV from your details in minutes.
                                </p>
                            </div>
                             <div className="grid gap-1">
                                <div className="flex items-center gap-3">
                                    <StickyNote className="h-8 w-8 text-primary" />
                                    <h3 className="text-xl font-bold">AI Cover Letter Writer</h3>
                                </div>
                                <p className="text-muted-foreground">
                                    Create compelling cover letters tailored to each job application effortlessly.
                                </p>
                            </div>
                            <div className="grid gap-1">
                                <div className="flex items-center gap-3">
                                    <ScanText className="h-8 w-8 text-primary" />
                                    <h3 className="text-xl font-bold">AI Resume Tailor</h3>
                                </div>
                                <p className="text-muted-foreground">
                                   Optimize your resume for any job description to get past automated screening.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
                        <div className="space-y-3">
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">
                                Ready to Take Control of Your Job Search?
                            </h2>
                            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Join JobTrack today and start tracking your applications like a pro. It's free to get started.
                            </p>
                        </div>
                        <div className="mx-auto w-full max-w-sm space-y-2">
                            <Button asChild size="lg" className="w-full">
                                <Link href="/signup">Get Started for Free</Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
                <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} JobTrack. All rights reserved.</p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <Link href="/terms" className="text-xs hover:underline underline-offset-4 text-muted-foreground">
                        Terms of Service
                    </Link>
                    <Link href="/privacy" className="text-xs hover:underline underline-offset-4 text-muted-foreground">
                        Privacy Policy
                    </Link>
                </nav>
            </footer>
        </div>
    );
}
