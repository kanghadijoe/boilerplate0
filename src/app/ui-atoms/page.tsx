import Link from "next/link";

import { Header } from "@/components/wrapper/header";
import { Button } from "@/components/design-system-sonoliar/ui/button";
import { ButtonIcon } from "@/components/design-system-sonoliar/ui/button-icon";
import { HelperText } from "@/components/design-system-sonoliar/ui/helper-text";
import { Input } from "@/components/design-system-sonoliar/ui/input";
import { Label } from "@/components/design-system-sonoliar/ui/label";
import { cn } from "@/lib/utils";
import { ArrowRight, Check, CircleAlert, Moon, Sun } from "lucide-react";

const showcaseCard = cn(
  "rounded-[var(--radius-xl)] border-4 border-border bg-surface-primary p-12 shadow-brut-lg"
);

export default function UIAtomsShowcasePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-16">
        <section className={showcaseCard}>
          <span className="inline-flex items-center rounded-full border-4 border-border bg-secondary px-5 py-2 text-xs font-black uppercase tracking-[0.35em] text-secondary-foreground shadow-brut-sm">
            UI Atom Showcase
          </span>
          <h1 className="mt-6 text-5xl font-black leading-[1.05] tracking-tight">
            Koleksi Atom UI
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-medium text-foreground/80">
            Halaman ini mendemonstrasikan komponen UI versi `components/ui`,
            mengikuti pedoman dari <code>docs/design-system.md</code> dan
            <code>docs/atoms-examples.md</code>. Gunakan sebagai referensi saat
            merakit antarmuka modular.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild variant="primary">
              <Link href="/">Kembali ke Home</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="#buttons">Lihat Demo</Link>
            </Button>
          </div>
        </section>

        <section id="buttons" className={showcaseCard}>
          <header className="flex flex-col gap-3">
            <h2 className="text-3xl font-black uppercase tracking-[0.3em]">
              Buttons
            </h2>
            <p className="text-base font-semibold text-foreground/80">
              Variasi varian, ukuran, radius, dan shadow sesuai dokumentasi.
            </p>
          </header>
          <div className="mt-8 space-y-8">
            <div className="space-y-3">
              <h3 className="text-xl font-black uppercase tracking-[0.25em]">
                Varian
              </h3>
              <div className="flex flex-wrap gap-3">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="inverse">Inverse</Button>
                <Button variant="link">Link Style</Button>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-black uppercase tracking-[0.25em]">
                Ukuran, Radius, Shadow
              </h3>
              <div className="flex flex-wrap gap-3">
                <Button size="sm" rounded="sm" shadow="sm">
                  Small
                </Button>
                <Button size="md" rounded="md" shadow="md">
                  Medium
                </Button>
                <Button size="lg" rounded="lg" shadow="lg">
                  Large
                </Button>
                <Button block>Full Width</Button>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-black uppercase tracking-[0.25em]">
                States
              </h3>
              <div className="flex flex-wrap gap-3">
                <Button loading>Loading</Button>
                <Button disabled>Disabled</Button>
                <Button iconPosition="only" aria-label="Search">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="button-icons" className={showcaseCard}>
          <header className="flex flex-col gap-3">
            <h2 className="text-3xl font-black uppercase tracking-[0.3em]">
              Button Icon
            </h2>
            <p className="text-base font-semibold text-foreground/80">
              Aksi ikon-only dengan berbagai varian, ukuran, dan state pressed.
            </p>
          </header>
          <div className="mt-8 space-y-6">
            <div className="flex flex-wrap gap-3">
              <ButtonIcon aria-label="More" variant="bare" size="xs">
                <ArrowRight className="h-4 w-4" />
              </ButtonIcon>
              <ButtonIcon
                aria-label="Confirm"
                variant="container-filled"
                size="md"
              >
                <Check className="h-5 w-5" />
              </ButtonIcon>
              <ButtonIcon aria-label="Info" variant="inverse" size="lg">
                <CircleAlert className="h-5 w-5" />
              </ButtonIcon>
              <ButtonIcon aria-label="Favorite" pressed>
                <Sun className="h-4 w-4" />
              </ButtonIcon>
              <ButtonIcon aria-label="Toggle dark mode" variant="brand">
                <Moon className="h-4 w-4" />
              </ButtonIcon>
            </div>
          </div>
        </section>

        <section id="inputs" className={showcaseCard}>
          <header className="flex flex-col gap-3">
            <h2 className="text-3xl font-black uppercase tracking-[0.3em]">
              Fields
            </h2>
            <p className="text-base font-semibold text-foreground/80">
              Kombinasi Label, Input, dan HelperText untuk varian dan status.
            </p>
          </header>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="email" required size="sm">
                Email
              </Label>
              <Input id="email" type="email" placeholder="nama@domain.com" />
              <HelperText id="email-hint">Kami tidak membagikan email Anda.</HelperText>
            </div>
            <div className="space-y-2">
              <Label htmlFor="filled" size="md">
                Nama (filled)
              </Label>
              <Input id="filled" variant="filled" placeholder="Nama lengkap" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="underlined" size="lg">
                Username (underlined)
              </Label>
              <Input
                id="underlined"
                variant="underlined"
                rounded="sm"
                placeholder="hadijoe"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="status-error" required>
                Field Error
              </Label>
              <Input
                id="status-error"
                status="error"
                placeholder="Format salah"
                aria-invalid
                aria-describedby="status-error-hint"
              />
              <HelperText id="status-error-hint" tone="error">
                Masukkan format yang valid.
              </HelperText>
            </div>
            <div className="space-y-2">
              <Label htmlFor="status-success">Field Success</Label>
              <Input
                id="status-success"
                status="success"
                placeholder="Data valid"
              />
              <HelperText tone="success">Semua siap!</HelperText>
            </div>
            <div className="space-y-2">
              <Label htmlFor="disabled">Disabled</Label>
              <Input id="disabled" placeholder="Tidak aktif" disabled />
              <HelperText tone="muted">Field ini tidak dapat diedit.</HelperText>
            </div>
          </div>
        </section>

        <section className={showcaseCard}>
          <header className="flex flex-col gap-3">
            <h2 className="text-3xl font-black uppercase tracking-[0.3em]">
              Referensi Dokumen
            </h2>
            <p className="text-base font-semibold text-foreground/80">
              Detail lengkap tersedia di <code>docs/design-system.md</code> dan
              contoh tambahan pada <code>docs/atoms-examples.md</code>.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="outline" size="sm">
                <Link href="/design-system-neobrutalism.md" prefetch={false}>
                  Design System Markdown
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link href="/docs/atoms-examples.md" prefetch={false}>
                  Atoms Examples Markdown
                </Link>
              </Button>
            </div>
          </header>
        </section>
      </main>
    </div>
  );
}
