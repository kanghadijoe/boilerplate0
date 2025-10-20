# Atoms — Quick Stories/Docs (Neo‑Brutalism, Tailwind + shadcn)

Tujuan: contoh singkat untuk konsumsi di Next.js. Import via barrel:

```tsx
import { Button, ButtonIcon, Input, Label, HelperText } from "@/components";
```

Jika belum, pastikan dependensi `class-variance-authority` tersedia.

---

## Button

### Variants
```tsx
export default function ButtonVariants() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="inverse">Inverse</Button>
      <Button variant="link">Link Style</Button>
    </div>
  );
}
```

### Sizes & Shadow & Radius
```tsx
export function ButtonSizes() {
  return (
    <div className="flex flex-wrap items-end gap-3">
      <Button size="sm" shadow="sm" rounded="sm">SM</Button>
      <Button size="md" shadow="md" rounded="md">MD</Button>
      <Button size="lg" shadow="lg" rounded="lg">LG</Button>
      <Button block>Block / Full Width</Button>
    </div>
  );
}
```

### Loading & Disabled
```tsx
export function ButtonStates() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button loading>Loading</Button>
      <Button disabled>Disabled</Button>
    </div>
  );
}
```

### Icon‑Only (via iconPosition="only")
```tsx
export function ButtonIconOnly() {
  return (
    <div className="flex gap-3">
      <Button iconPosition="only" aria-label="Search">🔍</Button>
      <Button iconPosition="only" variant="inverse" aria-label="Close">✕</Button>
    </div>
  );
}
```

---

## ButtonIcon (ikon‑only)

### Variants & Sizes
```tsx
export function ButtonIconShowcase() {
  return (
    <div className="flex flex-wrap gap-3">
      <ButtonIcon aria-label="More" variant="bare" size="xs">⋯</ButtonIcon>
      <ButtonIcon aria-label="Edit" variant="container-base" size="sm">✎</ButtonIcon>
      <ButtonIcon aria-label="Confirm" variant="container-filled" size="md">✔</ButtonIcon>
      <ButtonIcon aria-label="Info" variant="inverse" size="lg">i</ButtonIcon>
    </div>
  );
}
```

### Pressed/Stateful
```tsx
export function ButtonIconPressed() {
  return (
    <div className="flex gap-3">
      <ButtonIcon aria-label="Favorite" pressed>★</ButtonIcon>
      <ButtonIcon aria-label="Not Favorite">☆</ButtonIcon>
    </div>
  );
}
```

---

## Input + Label + HelperText

### Basic Field
```tsx
export function InputBasic() {
  const id = "email";
  return (
    <div className="max-w-md space-y-2">
      <Label htmlFor={id} required>Email</Label>
      <Input id={id} type="email" placeholder="nama@domain.com" />
      <HelperText id={`${id}-hint`}>Kami tidak membagikan email Anda.</HelperText>
    </div>
  );
}
```

### Variants & Sizes
```tsx
export function InputVariants() {
  return (
    <div className="grid gap-4 max-w-xl">
      <div className="space-y-2">
        <Label htmlFor="name-sm">Nama (boxed, sm)</Label>
        <Input id="name-sm" size="sm" placeholder="Nama" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="name-md">Nama (filled, md)</Label>
        <Input id="name-md" variant="filled" size="md" placeholder="Nama" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="name-lg">Nama (underlined, lg)</Label>
        <Input id="name-lg" variant="underlined" size="lg" placeholder="Nama" />
      </div>
    </div>
  );
}
```

### Status (error/warning/success/loading)
```tsx
export function InputStatus() {
  return (
    <div className="grid gap-4 max-w-xl">
      <div className="space-y-1">
        <Label htmlFor="f1">Field (default)</Label>
        <Input id="f1" placeholder="Ketik di sini" status="default" />
      </div>
      <div className="space-y-1">
        <Label htmlFor="f2">Field (error)</Label>
        <Input id="f2" placeholder="Format salah" status="error" aria-invalid />
        <HelperText id="f2-hint" tone="error">Masukkan format yang valid.</HelperText>
      </div>
      <div className="space-y-1">
        <Label htmlFor="f3">Field (warning)</Label>
        <Input id="f3" placeholder="Perlu perhatian" status="warning" />
        <HelperText id="f3-hint" tone="warning">Periksa kembali nilai Anda.</HelperText>
      </div>
      <div className="space-y-1">
        <Label htmlFor="f4">Field (success)</Label>
        <Input id="f4" placeholder="OK" status="success" />
        <HelperText id="f4-hint" tone="success">Data valid.</HelperText>
      </div>
      <div className="space-y-1">
        <Label htmlFor="f5">Field (loading)</Label>
        <Input id="f5" placeholder="Memuat..." status="loading" />
      </div>
    </div>
  );
}
```

### Disabled & Readonly
```tsx
export function InputDisabledReadonly() {
  return (
    <div className="grid gap-4 max-w-xl">
      <div className="space-y-1">
        <Label htmlFor="d1">Disabled</Label>
        <Input id="d1" placeholder="Tidak aktif" disabled />
      </div>
      <div className="space-y-1">
        <Label htmlFor="r1">Readonly</Label>
        <Input id="r1" defaultValue="Hanya baca" readOnly />
      </div>
    </div>
  );
}
```

---

## Catatan
- Gunakan tema gelap (`.dark`) untuk memverifikasi kontras/inverse variant otomatis.
- Untuk varian khusus (misal Rainbow Button ala MagicUI), dapat ditambah sebagai `variant` baru pada `Button`.