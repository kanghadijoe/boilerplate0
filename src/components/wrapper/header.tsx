"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { Sun, Moon } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Service", href: "#service" },
  { label: "Blog", href: "#blog" },
];

type Theme = "light" | "dark";

export function Header() {
  const [theme, setTheme] = useState<Theme>("light");

  const applyTheme = useCallback((mode: Theme) => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    root.classList.toggle("dark", mode === "dark");
    if (typeof window !== "undefined") {
      window.localStorage.setItem("theme", mode);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = (window.localStorage.getItem("theme") as Theme | null) ?? null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = stored ?? (prefersDark ? "dark" : "light");
    setTheme(initial);
    applyTheme(initial);
  }, [applyTheme]);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
  };

  return (
    <header className="sticky top-0 z-50 border-b-4 border-border bg-surface-primary/95 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-6xl items-center gap-6 px-6 py-5">
        <Link
          href="#home"
          className="group flex items-center gap-4 text-foreground"
        >
          <span className="grid h-14 w-14 place-items-center rounded-3xl border-4 border-border bg-surface-strong text-lg font-black uppercase tracking-[0.35em] shadow-brut-sm transition-transform duration-150 ease-out group-hover:-translate-y-1 group-hover:shadow-brut">
            HJ
          </span>
          <span className="text-xl font-black uppercase tracking-tight">
            Hadijoe
          </span>
        </Link>
        <nav className="flex flex-1 justify-center">
          <ul className="flex items-center gap-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="inline-flex items-center rounded-2xl border-2 border-border bg-surface-muted px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-foreground shadow-brut-sm transition-transform duration-150 ease-out hover:-translate-y-1 hover:bg-surface-strong"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-3xl border-4 border-border bg-accent px-6 py-3 text-sm font-black uppercase tracking-[0.3em] text-accent-foreground shadow-brut transition-transform duration-150 ease-out hover:-translate-y-1 hover:shadow-brut-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            Contact
          </Link>
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-12 w-12 items-center justify-center rounded-3xl border-4 border-border bg-surface-muted text-foreground shadow-brut-sm transition-transform duration-150 ease-out hover:-translate-y-1 hover:bg-surface-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            aria-pressed={theme === "dark"}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? (
              <Sun aria-hidden className="h-5 w-5" />
            ) : (
              <Moon aria-hidden className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
