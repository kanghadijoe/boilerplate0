import Link from "next/link";

import { Header } from "@/components/wrapper/header";
import { Footer } from "@/components/wrapper/footer";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { Button } from "@/components/design-system-sonoliar/atoms";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-16">
        <section
          id="home"
          className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]"
        >
          <div className="rounded-[var(--radius-xl)] border-4 border-border bg-surface-primary p-12 shadow-brut-lg">
            <span className="mb-6 inline-flex items-center rounded-full border-4 border-border bg-secondary px-5 py-2 text-xs font-black uppercase tracking-[0.35em] text-secondary-foreground shadow-brut-sm">
              Neo-brutalism
            </span>
            <h1 className="text-5xl font-black leading-[1.05] tracking-tight">
              Membawa energi berani ke pengalaman digital
              <AnimatedGradientText className="mt-4 block text-6xl leading-none">
                Portfolio Hadijoe
              </AnimatedGradientText>
            </h1>
            <p className="mt-6 text-lg font-medium text-foreground/80">
              Kombinasi blok warna tegas, bayangan dramatis, dan tipografi berat
              menghadirkan identitas yang tidak terlupakan untuk setiap proyek.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild className="min-w-[200px] tracking-[0.2em]">
                <Link href="#contact">Mulai Projek</Link>
              </Button>
              <Button
                asChild
                variant="secondary"
                className="tracking-[0.2em]"
              >
                <Link href="#about">Jelajahi Profil</Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="tracking-[0.2em]"
              >
                <Link href="/atoms">Demo Komponen</Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="tracking-[0.2em]"
              >
                <Link href="/ui-atoms">UI Atoms Showcase</Link>
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="rounded-[var(--radius-lg)] border-4 border-border bg-surface-muted p-8 shadow-brut">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground/70">
                Signature
              </p>
              <p className="mt-4 text-2xl font-black leading-snug">
                Layout modular dengan bayangan blok besar dan kontur tebal
                menciptakan ritme visual yang energik namun terstruktur.
              </p>
            </div>
            <div className="rounded-[var(--radius-lg)] border-4 border-border bg-surface-strong p-8 shadow-brut">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground/70">
                Palette
              </p>
              <div className="mt-6 grid grid-cols-3 gap-3">
                <span className="flex h-20 w-full items-center justify-center rounded-2xl border-4 border-border bg-[#111827] text-xs font-black uppercase tracking-wide text-[#fdf3d7] shadow-brut-sm">
                  Noir
                </span>
                <span className="flex h-20 w-full items-center justify-center rounded-2xl border-4 border-border bg-[#ff5c8d] text-xs font-black uppercase tracking-wide text-[#111827] shadow-brut-sm">
                  Punch
                </span>
                <span className="flex h-20 w-full items-center justify-center rounded-2xl border-4 border-border bg-[#ffe066] text-xs font-black uppercase tracking-wide text-[#111827] shadow-brut-sm">
                  Solar
                </span>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="rounded-[var(--radius-xl)] border-4 border-border bg-surface-primary p-12 shadow-brut-lg"
        >
          <h2 className="text-3xl font-black uppercase tracking-[0.3em]">
            About
          </h2>
          <div className="mt-6 grid gap-8 lg:grid-cols-2">
            <p className="text-lg font-medium text-foreground/80">
              Saya adalah seorang desainer dan pengembang front-end yang fokus pada
              sistem desain berani, penuh warna, dan tak kenal kompromi. Neo-brutalism
              menjadi bahasa visual utama untuk menonjolkan brand digital.
            </p>
            <p className="text-lg font-medium text-foreground/80">
              Dengan pendekatan modular, setiap halaman dibangun dari blok-blok
              kontras yang memandu perhatian pengguna sekaligus memperjelas hierarki
              informasi.
            </p>
          </div>
        </section>

        <section id="service" className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Brand System",
              description:
                "Identitas visual tajam dengan pola, warna, dan tipografi khas.",
            },
            {
              title: "UI Engineering",
              description:
                "Komponen reusable yang dirancang dengan grid brutal dan aksesibilitas.",
            },
            {
              title: "Creative Content",
              description:
                "Storytelling visual yang hidup lewat grafis, motion, dan copy yang kuat.",
            },
          ].map((service) => (
            <div
              key={service.title}
              className="rounded-[var(--radius-lg)] border-4 border-border bg-surface-primary p-10 shadow-brut transition-transform duration-150 ease-out hover:-translate-y-1 hover:bg-surface-strong"
            >
              <h3 className="text-xl font-black uppercase tracking-[0.25em]">
                {service.title}
              </h3>
              <p className="mt-4 text-base font-semibold text-foreground/80">
                {service.description}
              </p>
            </div>
          ))}
        </section>

        <section
          id="blog"
          className="rounded-[var(--radius-xl)] border-4 border-border bg-surface-primary p-12 shadow-brut-lg"
        >
          <h2 className="text-3xl font-black uppercase tracking-[0.3em]">
            Blog
          </h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Menyusun grid brutal",
                excerpt:
                  "Tips membangun layout blok dengan ritme yang kuat namun terarah.",
              },
              {
                title: "Eksperimen palet warna",
                excerpt:
                  "Cara memilih warna kontras tinggi tanpa mengorbankan kenyamanan baca.",
              },
              {
                title: "Tipografi super bold",
                excerpt:
                  "Mengoptimalkan hierarki teks dengan jenis huruf tebal dan ekspresif.",
              },
            ].map((post) => (
              <Link
                key={post.title}
                href="#"
                className="group flex h-full flex-col justify-between rounded-[var(--radius-lg)] border-4 border-border bg-surface-muted p-8 shadow-brut-sm transition-transform duration-150 ease-out hover:-translate-y-1 hover:bg-surface-strong"
              >
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.35em] text-foreground/60">
                    Insight
                  </p>
                  <h3 className="mt-4 text-xl font-black leading-snug">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm font-semibold text-foreground/70">
                    {post.excerpt}
                  </p>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.2em] text-foreground/80 group-hover:text-foreground">
                  Baca
                  <span aria-hidden>→</span>
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="rounded-[var(--radius-xl)] border-4 border-border bg-accent p-12 text-accent-foreground shadow-brut-lg"
        >
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="text-3xl font-black uppercase tracking-[0.3em]">
                Mari Kolaborasi
              </h2>
              <p className="mt-6 text-lg font-semibold">
                Ceritakan ide Anda dan saya akan mengubahnya menjadi pengalaman
                digital yang berani dan berbeda.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <Button
                asChild
                variant="secondary"
                className="bg-surface-primary tracking-[0.25em] hover:bg-surface-strong"
              >
                <Link href="mailto:hello@hadijoe.com">Email Saya</Link>
              </Button>
              <Button
                asChild
                variant="secondary"
                className="tracking-[0.25em]"
              >
                <Link href="#home">Lihat Kembali Atas</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
