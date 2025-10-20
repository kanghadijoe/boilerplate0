"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const NAV_ITEMS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#service", label: "Service" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact", isCta: true },
];

const BUTTON_BASE =
  "rounded-3xl border-4 border-border font-black uppercase tracking-[0.28em] transition-transform duration-200 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

const NAV_BUTTON_CLASSES = {
  default: `${BUTTON_BASE} px-6 py-3 text-[0.75rem] md:text-sm bg-surface-muted text-foreground shadow-brut-sm hover:bg-surface-strong hover:shadow-brut`,
  cta: `${BUTTON_BASE} px-8 py-3 text-xs md:text-sm bg-accent text-accent-foreground shadow-brut hover:shadow-brut-lg`,
} as const;

export function Header({ className }: { className?: string }) {
  return (
    <header
      className={cn(
        "mx-auto flex w-full max-w-6xl flex-col gap-6 rounded-[var(--radius-xl)] border-4 border-border bg-surface-primary px-6 py-6 text-center shadow-brut md:flex-row md:items-center md:justify-between md:px-10 md:py-6",
        className,
      )}
    >
      <Link
        href="#home"
        className="flex items-center gap-3 rounded-3xl border-4 border-border bg-surface-strong px-5 py-3 text-lg font-black uppercase tracking-[0.3em] shadow-brut-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-brut"
      >
        <span className="hidden sm:inline">Neo</span>
        <span className="text-accent">Brutal</span>
      </Link>

      <nav className="flex-1">
        <ul className="flex flex-wrap items-center justify-end gap-3 sm:gap-4 md:flex-nowrap">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Button
                asChild
                variant="outline"
                className={item.isCta ? NAV_BUTTON_CLASSES.cta : NAV_BUTTON_CLASSES.default}
              >
                <Link href={item.href}>{item.label}</Link>
              </Button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
