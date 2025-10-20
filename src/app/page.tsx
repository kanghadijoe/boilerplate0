"use client";

import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { Header } from "@/components/wrapper/header";
import { Footer } from "@/components/wrapper/footer";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Brand Systems",
    description:
      "Build expressive component libraries with brutalist borders, gradients, and motion presets.",
    tone: "bg-surface-primary",
  },
  {
    title: "Experience Design",
    description:
      "Compose layouts using modular grids, bold typography, and animated accents that demand attention.",
    tone: "bg-surface-muted",
  },
  {
    title: "Interactive Prototypes",
    description:
      "Prototype quickly with shadcn + Tailwind, maintaining accessibility and consistent theming.",
    tone: "bg-surface-strong",
  },
];

const articles = [
  {
    eyebrow: "Case Study",
    title: "Scaling Neo-Brutal Interfaces",
    summary:
      "How we evolved a startup dashboard into a radical design system without sacrificing usability.",
  },
  {
    eyebrow: "Playbook",
    title: "Shadows, Borders, and Motion",
    summary:
      "A practical guide to layering brutalist shadows with offset transitions for tactile depth.",
  },
  {
    eyebrow: "Workshop",
    title: "Design Tokens for Bold Themes",
    summary:
      "Mapping CSS variables to Tailwind utilities to keep multi-brand experiences aligned.",
  },
];

const BUTTON_BASE =
  "rounded-3xl border-4 border-border font-black uppercase tracking-[0.28em] transition-transform duration-200 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

const buttonVariantsNeo = {
  primary: `${BUTTON_BASE} px-8 py-3 text-xs md:text-sm bg-accent text-accent-foreground shadow-brut hover:shadow-brut-lg`,
  secondary: `${BUTTON_BASE} px-6 py-3 text-[0.75rem] md:text-sm bg-surface-muted text-foreground shadow-brut-sm hover:bg-surface-strong hover:shadow-brut`,
  ghost: `${BUTTON_BASE} px-5 py-2 text-[0.68rem] md:text-xs bg-transparent text-foreground shadow-brut-sm hover:bg-surface-muted/70`,
  inverse: `${BUTTON_BASE} px-8 py-3 text-xs md:text-sm bg-foreground text-background shadow-brut hover:shadow-brut-lg`,
} as const;

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-16 bg-background px-4 py-12 sm:px-6 md:px-10">
      <Header />

      <section
        id="home"
        className="mx-auto flex w-full max-w-5xl flex-col items-center gap-8 rounded-[var(--radius-xl)] border-4 border-border bg-surface-primary px-8 py-12 text-center shadow-brut"
      >
        <AnimatedGradientText className="text-3xl font-black uppercase tracking-[0.3em] text-foreground md:text-5xl">
          Neo Brutalist Design Lab
        </AnimatedGradientText>

        <p className="max-w-3xl text-base font-semibold text-foreground/80 md:text-lg">
          We craft unapologetically bold interfaces powered by Tailwind CSS v4,
          shadcn, and a meticulously tuned design token stack. Every surface,
          shadow, and motion cue is engineered for impact.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            variant="outline"
            className={buttonVariantsNeo.primary}
            onClick={() =>
              toast("Event has been created", {
                description: "Sunday, December 03, 2023 at 9:00 AM",
                action: {
                  label: "Undo",
                  onClick: () => console.log("Undo"),
                },
              })
            }
          >
            Book a Session
          </Button>
          <Button
            variant="outline"
            className={buttonVariantsNeo.secondary}
          >
            View Playbook
          </Button>
        </div>
      </section>

      <section
        id="about"
        className="mx-auto grid w-full max-w-5xl gap-8 rounded-[var(--radius-xl)] border-4 border-border bg-surface-muted p-8 shadow-brut-lg md:grid-cols-[1.1fr_0.9fr]"
      >
        <div className="flex flex-col gap-4">
          <span className="text-xs font-black uppercase tracking-[0.35em] text-foreground/70">
            About the Studio
          </span>
          <h2 className="text-2xl font-black uppercase tracking-[0.28em] text-foreground">
            Radical yet usable foundations
          </h2>
          <p className="text-sm font-semibold text-foreground/80 md:text-base">
            We specialize in translating brand narratives into brutalist systems
            that scale. From token architecture to motion guidelines, our
            end-to-end approach keeps your product expressive, inclusive, and
            unmistakably yours.
          </p>
          <Button
            variant="outline"
            className={`${buttonVariantsNeo.ghost} w-fit`}
          >
            Meet the Team
          </Button>
        </div>

        <div className="grid gap-4">
          <div className="rounded-[var(--radius-lg)] border-4 border-border bg-surface-primary p-6 text-left shadow-brut-sm">
            <h3 className="text-lg font-black uppercase tracking-[0.28em] text-foreground">
              Process
            </h3>
            <p className="mt-3 text-sm font-semibold text-foreground/80">
              Workshops, system audits, prototyping sprints, and UI kits tuned
              for development velocity.
            </p>
          </div>
          <div className="rounded-[var(--radius-lg)] border-4 border-border bg-surface-strong p-6 text-left shadow-brut">
            <h3 className="text-lg font-black uppercase tracking-[0.28em] text-foreground">
              Tooling
            </h3>
            <p className="mt-3 text-sm font-semibold text-foreground/80">
              Tailwind, shadcn, Radix, and custom linting pipelines ensure every
              component stays on-brand across themes.
            </p>
          </div>
        </div>
      </section>

      <section
        id="service"
        className="mx-auto w-full max-w-6xl rounded-[var(--radius-xl)] border-4 border-border bg-surface-primary px-6 py-10 shadow-brut"
      >
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-3 text-center">
          <span className="text-xs font-black uppercase tracking-[0.35em] text-foreground/70">
            Services
          </span>
          <h2 className="text-2xl font-black uppercase tracking-[0.3em] text-foreground md:text-3xl">
            Engineered for expression
          </h2>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className={`rounded-[var(--radius-lg)] border-4 border-border ${service.tone} p-6 text-left shadow-brut-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-brut`}
            >
              <h3 className="text-lg font-black uppercase tracking-[0.28em] text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 text-sm font-semibold text-foreground/80">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="blog"
        className="mx-auto w-full max-w-6xl rounded-[var(--radius-xl)] border-4 border-border bg-surface-strong px-6 py-10 shadow-brut-lg"
      >
        <div className="flex flex-col gap-3 text-center">
          <span className="text-xs font-black uppercase tracking-[0.35em] text-foreground/80">
            Journal
          </span>
          <h2 className="text-2xl font-black uppercase tracking-[0.3em] text-foreground md:text-3xl">
            Stories from the brutal frontier
          </h2>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.title}
              className="flex h-full flex-col gap-4 rounded-[var(--radius-lg)] border-4 border-border bg-surface-primary p-6 text-left shadow-brut transition-transform duration-200 hover:-translate-y-1 hover:shadow-brut-lg"
            >
              <span className="text-[0.65rem] font-black uppercase tracking-[0.35em] text-foreground/60">
                {article.eyebrow}
              </span>
              <h3 className="text-lg font-black uppercase tracking-[0.28em] text-foreground">
                {article.title}
              </h3>
              <p className="text-sm font-semibold text-foreground/80">
                {article.summary}
              </p>
              <Button
                variant="outline"
                className={`${buttonVariantsNeo.ghost} mt-auto w-fit`}
              >
                Read Story
              </Button>
            </article>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto flex w-full max-w-5xl flex-col gap-6 rounded-[var(--radius-xl)] border-4 border-border bg-accent px-8 py-12 text-center shadow-brut"
      >
        <span className="text-xs font-black uppercase tracking-[0.35em] text-foreground/70">
          Contact
        </span>
        <h2 className="text-2xl font-black uppercase tracking-[0.3em] text-accent-foreground md:text-3xl">
          Let’s craft your next brutalist experience
        </h2>
        <p className="mx-auto max-w-3xl text-sm font-semibold text-accent-foreground/80 md:text-base">
          Collaborate with our team to translate your product vision into a
          high-contrast, high-impact system that thrives in light and dark
          themes.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            variant="outline"
            className={buttonVariantsNeo.inverse}
          >
            hello@neobrutal.studio
          </Button>
          <Button
            variant="outline"
            className={buttonVariantsNeo.secondary}
          >
            Schedule Intro Call
          </Button>
        </div>
      </section>
      <Footer />
    </main>
  );
}
