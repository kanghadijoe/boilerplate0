"use client";

import Link from "next/link";

const BUTTON_BASE =
  "inline-flex items-center justify-center rounded-3xl border-4 border-border font-black uppercase tracking-[0.24em] transition-transform duration-200 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

export function Footer() {
  return (
    <footer className="mx-auto mt-16 w-full max-w-6xl rounded-[var(--radius-xl)] border-4 border-border bg-surface-primary px-6 py-10 shadow-brut">
      <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-start">
        <div className="flex flex-col gap-4">
          <span className="text-xs font-black uppercase tracking-[0.35em] text-foreground/70">
            Neo Brutal Studio
          </span>
          <h2 className="text-2xl font-black uppercase tracking-[0.28em] text-foreground md:text-3xl">
            Bolder interfaces. Sharper systems.
          </h2>
          <p className="text-sm font-semibold text-foreground/80 md:text-base">
            We build brutalist-inspired design systems that stay expressive
            without sacrificing accessibility or velocity. Collaborate with our
            team to bring your product vision to life.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-foreground/70 md:grid-cols-3">
            <Link href="/" className="hover:text-foreground">
              Brand Kits
            </Link>
            <Link href="/" className="hover:text-foreground">
              Workshops
            </Link>
            <Link href="/" className="hover:text-foreground">
              Playbooks
            </Link>
            <Link href="/" className="hover:text-foreground">
              Tokens
            </Link>
            <Link href="/" className="hover:text-foreground">
              UI Kits
            </Link>
            <Link href="/" className="hover:text-foreground">
              Support
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="mailto:hello@neobrutal.studio"
              className={`${BUTTON_BASE} bg-accent px-6 py-3 text-xs text-accent-foreground shadow-brut hover:shadow-brut-lg`}
            >
              hello@neobrutal.studio
            </Link>
            <Link
              href="#contact"
              className={`${BUTTON_BASE} bg-surface-muted px-6 py-3 text-[0.75rem] text-foreground shadow-brut-sm hover:bg-surface-strong hover:shadow-brut`}
            >
              Book Intro Call
            </Link>
          </div>

        </div>
      </div>

      <div className="mt-10 flex flex-col gap-3 border-t-4 border-border pt-6 text-xs font-semibold uppercase tracking-[0.24em] text-foreground/60 md:flex-row md:items-center md:justify-between">
        <span>© {new Date().getFullYear()} Neo Brutal Studio. All rights reserved.</span>
        <div className="flex flex-wrap items-center gap-3">
          <Link href="/privacy" className="hover:text-foreground">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-foreground">
            Terms
          </Link>
          <Link href="/accessibility" className="hover:text-foreground">
            Accessibility
          </Link>
        </div>
      </div>
    </footer>
  );
}
