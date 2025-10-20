"use client";

import Link from "next/link";

const CTA_BASE =
  "inline-flex items-center justify-center rounded-3xl border-4 border-border font-black uppercase tracking-[0.28em] transition-transform duration-150 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring";

const FOOTER_LINK =
  "text-xs font-semibold uppercase tracking-[0.28em] text-foreground/70 transition hover:text-foreground";

const NAV_LINK =
  "text-sm font-semibold uppercase tracking-[0.28em] text-foreground/70 transition hover:text-foreground";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto mt-20 w-full max-w-6xl rounded-[var(--radius-xl)] border-4 border-border bg-surface-primary px-6 py-14 shadow-brut-lg">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div className="flex flex-col gap-6">
          <span className="inline-flex items-center rounded-full border-4 border-border bg-secondary px-5 py-2 text-xs font-black uppercase tracking-[0.35em] text-secondary-foreground shadow-brut-sm">
            Neo Brutal Studio
          </span>
          <h2 className="text-3xl font-black uppercase leading-tight tracking-[0.28em] text-foreground lg:text-[2.5rem]">
            Merancang sistem brutalist yang tetap fungsional.
          </h2>
          <p className="max-w-xl text-sm font-semibold text-foreground/80 lg:text-base">
            Kami memadukan blok warna tegas, bayangan offset, dan tipografi berat
            untuk menciptakan pengalaman digital yang tak terlupakan. Mitra ideal
            bagi produk yang ingin tampil berani namun tetap mudah diakses.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="mailto:hello@neobrutal.studio"
              className={`${CTA_BASE} bg-accent px-6 py-3 text-xs text-accent-foreground shadow-brut hover:-translate-y-1 hover:shadow-brut-lg`}
            >
              hello@neobrutal.studio
            </Link>
            <Link
              href="#contact"
              className={`${CTA_BASE} bg-surface-muted px-6 py-3 text-xs text-foreground shadow-brut-sm hover:-translate-y-1 hover:bg-surface-strong hover:shadow-brut`}
            >
              Book Intro Call
            </Link>
          </div>
        </div>

        <div className="grid gap-6">
          <nav className="grid gap-3 rounded-[var(--radius-lg)] border-4 border-border bg-surface-muted p-6 shadow-brut">
            <h3 className="text-sm font-black uppercase tracking-[0.3em] text-foreground/70">
              Navigasi
            </h3>
            <div className="grid gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-foreground/70 lg:grid-cols-2">
              <Link href="/tokens" className={NAV_LINK}>
                Tokens Library
              </Link>
              <Link href="/kits" className={NAV_LINK}>
                UI Kits
              </Link>
              <Link href="/support" className={NAV_LINK}>
                Support & SLA
              </Link>
              <Link href="/community" className={NAV_LINK}>
                Community
              </Link>
              <Link href="/playbooks" className={NAV_LINK}>
                Playbooks
              </Link>
              <Link href="/workshops" className={NAV_LINK}>
                Workshops
              </Link>
            </div>
          </nav>

          <div className="rounded-[var(--radius-lg)] border-4 border-border bg-surface-strong p-6 text-foreground shadow-brut">
            <h3 className="text-sm font-black uppercase tracking-[0.3em] text-foreground/80">
              Tetap terhubung
            </h3>
            <p className="mt-3 text-sm font-semibold text-foreground/80">
              Ikuti update design system terbaru, rilis komponen, dan sesi belajar.
            </p>
            <Link
              href="/newsletter"
              className={`${CTA_BASE} mt-4 bg-foreground px-5 py-3 text-[0.7rem] text-background shadow-brut hover:-translate-y-1 hover:shadow-brut-lg`}
            >
              Join Newsletter
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-4 border-t-4 border-border pt-6 text-foreground/60 lg:flex-row lg:items-center lg:justify-between">
        <span className="text-xs font-semibold uppercase tracking-[0.3em]">
          © {year} Neo Brutal Studio — All rights reserved.
        </span>
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/privacy" className={FOOTER_LINK}>
            Privacy
          </Link>
          <Link href="/terms" className={FOOTER_LINK}>
            Terms
          </Link>
          <Link href="/accessibility" className={FOOTER_LINK}>
            Accessibility
          </Link>
          <Link href="/style-guide" className={FOOTER_LINK}>
            Style Guide
          </Link>
        </div>
      </div>
    </footer>
  );
}
