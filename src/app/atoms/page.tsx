import Link from "next/link";

import { Header } from "@/components/wrapper/header";
import {
  Badge,
  Button,
  Eyebrow,
  IconButton,
  Input,
  Label,
  Switch,
  Textarea,
} from "@/components/design-system-sonoliar/atoms";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { ArrowUpRight, Moon, Sun } from "lucide-react";

export default function AtomsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-16">
        <section className="rounded-[var(--radius-xl)] border-4 border-border bg-surface-primary p-12 shadow-brut-lg">
          <Eyebrow className="bg-accent text-accent-foreground">
            Neo-brutalist System
          </Eyebrow>
          <h1 className="mt-6 text-5xl font-black leading-[1.05] tracking-tight">
            Katalog Atom
            <AnimatedGradientText className="mt-3 block text-6xl leading-none">
              Dasar Komponen
            </AnimatedGradientText>
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-medium text-foreground/80">
            Gunakan kumpulan atom ini untuk merakit antarmuka neo-brutalism yang
            konsisten. Setiap komponen menerapkan border tebal, bayangan blok,
            dan tipografi ekspresif sesuai pedoman desain.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild>
              <Link href="/">Kembali ke Home</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="#buttons">Lihat Komponen</Link>
            </Button>
          </div>
        </section>

        <section
          id="buttons"
          className="rounded-[var(--radius-xl)] border-4 border-border bg-surface-primary p-12 shadow-brut-lg"
        >
          <div className="flex flex-col gap-4">
            <Eyebrow>Buttons</Eyebrow>
            <p className="text-base font-semibold text-foreground/80">
              Variasi tombol untuk CTA utama, sekunder, ghost, dan link.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button>Primary CTA</Button>
              <Button variant="secondary">Secondary CTA</Button>
              <Button variant="ghost">Ghost Trigger</Button>
              <Button asChild variant="link" className="tracking-[0.2em]">
                <Link href="#">Link Style</Link>
              </Button>
            </div>
          </div>
        </section>

        <section
          id="icon-buttons"
          className="rounded-[var(--radius-xl)] border-4 border-border bg-surface-primary p-12 shadow-brut-lg"
        >
          <div className="flex flex-col gap-4">
            <Eyebrow>Icon Buttons</Eyebrow>
            <p className="text-base font-semibold text-foreground/80">
              Gunakan untuk aksi cepat dan toggles visual.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <IconButton aria-label="Buka dokumentasi">
                <ArrowUpRight className="h-5 w-5" />
              </IconButton>
              <IconButton variant="primary" aria-label="Aktifkan mode terang">
                <Sun className="h-5 w-5" />
              </IconButton>
              <IconButton variant="ghost" aria-label="Aktifkan mode gelap">
                <Moon className="h-5 w-5" />
              </IconButton>
            </div>
          </div>
        </section>

        <section
          id="forms"
          className="rounded-[var(--radius-xl)] border-4 border-border bg-surface-primary p-12 shadow-brut-lg"
        >
          <div className="flex flex-col gap-6">
            <Eyebrow>Form Controls</Eyebrow>
            <p className="text-base font-semibold text-foreground/80">
              Input brutalist dengan label uppercase dan fokus kuat.
            </p>
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="flex flex-col gap-3">
                <Label htmlFor="name" required>
                  Nama Lengkap
                </Label>
                <Input id="name" placeholder="Contoh: Hadijoe" />
              </div>
              <div className="flex flex-col gap-3">
                <Label htmlFor="email" required>
                  Email
                </Label>
                <Input id="email" type="email" placeholder="nama@domain.com" />
              </div>
              <div className="lg:col-span-2 flex flex-col gap-3">
                <Label htmlFor="message">Pesan</Label>
                <Textarea id="message" rows={5} placeholder="Tulis pesan Anda" />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="newsletter">Newsletter</Label>
                <Switch
                  id="newsletter"
                  defaultChecked
                  onLabel="On"
                  offLabel="Off"
                  aria-label="Toggle newsletter subscription"
                />
              </div>
            </div>
            <div>
              <Button className="min-w-[200px]">Kirim Simulasi</Button>
            </div>
          </div>
        </section>

        <section
          id="badges"
          className="rounded-[var(--radius-xl)] border-4 border-border bg-surface-primary p-12 shadow-brut-lg"
        >
          <div className="flex flex-col gap-4">
            <Eyebrow>Badges</Eyebrow>
            <p className="text-base font-semibold text-foreground/80">
              Elemen sinyal untuk menonjolkan status atau kategori.
            </p>
            <div className="flex flex-wrap gap-4">
              <Badge>Highlight</Badge>
              <Badge variant="accent">Promo</Badge>
              <Badge variant="muted">Label</Badge>
            </div>
          </div>
        </section>

        <section className="rounded-[var(--radius-xl)] border-4 border-border bg-surface-primary p-12 shadow-brut-lg">
          <div className="flex flex-col gap-6">
            <Eyebrow>Pedoman</Eyebrow>
            <p className="text-base font-semibold text-foreground/80">
              Rujuk file <code>design-system-neobrutalism.md</code> pada root project
              untuk pedoman lengkap, termasuk prinsip warna, tipografi, dan
              pola interaksi.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
