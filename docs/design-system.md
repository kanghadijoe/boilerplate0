# Neo‑Brutalism Design System (Tailwind CSS + shadcn)

Dokumen ini adalah spesifikasi teknis untuk membangun Design System bertema neo‑brutalism menggunakan Tailwind CSS v4 dan shadcn (CVA). Disusun agar:
- Konsisten, reusable, dan aksesibel.
- Mudah dieksekusi/di‑generate oleh AI dari markdown ini.

Isi mencakup: prinsip, tokens, daftar atoms final, API props & matriks varian (tabel), molecules prioritas, dan panduan implementasi bertahap (mirip kelengkapan SLDS).

---

## 1) Prinsip & Karakter Visual

- Neo‑brutalism: kontras tinggi, border tebal (2–3px), shadow offset (kotak), radius besar, warna berani, tipografi tegas.
- Aksesibilitas: focus visible, relasi label↔field, tooltip untuk ikon‑only, proper aria (pressed/invalid/busy/required/disabled/describedby, dsb.).
- Theming: terang/gelap via CSS variables yang sudah ada; inverse variant untuk latar gelap.

---

## 2) Foundation Tokens (Mapping → Tailwind)

Sumber: `uploaded_file_globals_css.txt` (CSS variables). Tailwind sudah memetakan via `@theme inline` dan util custom.

| Token (CSS Var) | Peran | Tailwind/Class Anjuran |
|---|---|---|
| `--background`, `--foreground` | Latar & teks utama | `bg-background`, `text-foreground` |
| `--card`, `--card-foreground` | Surface kartu | `bg-card`, `text-card-foreground` |
| `--popover`, `--popover-foreground` | Surface overlay | `bg-popover`, `text-popover-foreground` |
| `--primary`, `--primary-foreground` | Aksi utama | `bg-primary`, `text-primary-foreground` |
| `--secondary`, `--secondary-foreground` | Aksi sekunder | `bg-secondary` |
| `--accent`, `--accent-foreground` | Aksen/brand | `bg-accent` |
| `--destructive` | Status bahaya | `bg-destructive`, `text-destructive` |
| `--muted`, `--muted-foreground` | Konten sekunder | `bg-muted`, `text-muted-foreground` |
| `--border`, `--input`, `--ring` | Border, input, ring fokus | `border-border`, `border-input`, `ring-ring` |
| `--surface-*` | Variasi surface | `bg-surface-primary|muted|strong` |
| `--shadow-color` | Warna bayangan | Digunakan oleh util `shadow-brut*` |
| Radius: `--radius-sm|md|lg|xl` | Sudut | `rounded-[var(--radius-…)]` |

Shadow offset:
- `shadow-brut-sm` (6px), `shadow-brut` (8px), `shadow-brut-lg` (12px)

Standar visual:
- Border default: `border-2 border-border`
- Ring fokus: `focus-visible:ring-2 ring-ring`
- Radius default: `rounded-[var(--radius-md)]`

---

## 3) Arsitektur & Konvensi

- Teknologi: React + Tailwind + shadcn (CVA untuk varian). 
- Folder: `components/ui/*` (atoms), `components/molecules/*` (molecules).
- Pola: komponen → cva varian (variant, size, status, rounded, shadow, block, iconOnly, dsb.).
- A11y: setiap kontrol menerima properti WAI‑ARIA sesuai peran. Ikon‑only button wajib `aria-label`.

---

## 4) Daftar Final Atoms (Scoped)

| Komponen | Tujuan | Common Props | Catatan A11y |
|---|---|---|---|
| Button | Aksi utama/sekunder | `variant`, `size`, `rounded`, `shadow`, `block`, `loading`, `disabled`, `iconPosition` | `aria-pressed` bila toggle; label visual wajib |
| ButtonIcon | Aksi ikon-only | `type`, `variant`, `size`, `pressed`, `tooltip`, `disabled` | `aria-label` wajib; `aria-pressed` untuk stateful |
| Link | Navigasi/aksi sekunder | `emphasis`, `underline`, `external`, `size` | `rel="noopener"` untuk external |
| Label | Label form | `htmlFor`, `required`, `optional`, `size`, `inline` | Hubungkan `for`↔`id` |
| HelperText | Teks bantu/status | `tone`, `id` | Hubungkan via `aria-describedby` |
| Input | Single-line text | `type`, `variant`, `size`, `status`, `rounded`, `disabled`, `readOnly`, `prefixIcon`, `suffixIcon`, `clearable` | `aria-invalid`, `aria-describedby` |
| Textarea | Multiline | `size`, `status`, `autoResize`, `rows`, `counter` | Sama Input |
| Select (native) | Pilihan tunggal | `size`, `variant`, `status`, `disabled`, `icon` | Label+describedby |
| NumberInput | Angka + stepper | `min`, `max`, `step`, `size`, `variant`, `status`, `showStepper` | Matikan stepper saat min/max |
| DateTimeInput (native) | Tanggal/waktu | `type`, `size`, `variant`, `status`, `icon` | Format & placeholder jelas |
| Checkbox | Boolean/tri-state | `checked`, `onChange`, `size`, `disabled`, `description`, `error` | `indeterminate` bila perlu |
| Radio | Pilihan eksklusif | `name`, `value`, `checked`, `onChange`, `size`, `disabled` | Grup dengan label |
| Switch | Toggle on/off | `checked`, `onChange`, `size`, `withLabel`, `disabled`, `loading` | `role="switch"`, `aria-checked` |
| Slider | Nilai kontinu/diskret | `min`, `max`, `step`, `value`, `onChange`, `size`, `vertical`, `discrete`, `showTicks` | Keyboard inc/dec |
| Badge | Status ringkas | `tone`, `variant`, `size`, `icon` | Non‑interaktif |
| Tag/Chip | Label interaktif | `variant`, `size`, `icon`, `removable`, `selected` | Tombol remove ber‑label |
| Avatar | Identitas | `src`, `alt`, `fallback`, `size`, `shape`, `bordered` | `alt` relevan |
| Icon | Ikon dekoratif/interaktif | `name`, `size`, `tone`, `decorative` | `aria-hidden` bila dekoratif |
| Divider | Pemisah | `orientation`, `inset`, `style` | Non‑interaktif |
| Spinner | Loading | `size`, `inverse`, `label` | `aria-live` bila perlu |
| Progress | Kemajuan | `type`, `value`, `max`, `tone`, `showLabel` | `role="progressbar"` |
| Skeleton | Placeholder | `shape`, `animated`, `w/h` | Dekoratif |
| Kbd/Code | Tipografi kode | `size`, `tone` | Non‑interaktif |
| Surface/Card | Kontainer mikro | `variant`, `elevation`, `bordered`, `radius` | Semantik per konteks |

---

## 5) Common Props Matrix (Konsistensi Lintas Komponen)

| Prop | Button | ButtonIcon | Link | Input | Textarea | Select | NumberInput | DateTime | Checkbox | Radio | Switch | Slider | Badge | Tag | Avatar | Icon | Divider | Spinner | Progress | Skeleton | Kbd | Surface |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| variant | ● | ● | ◐ | ● | ● | ● | ● | ● | – | – | – | – | ● | ● | – | ◐ | ◐ | – | ◐ | – | – | ● |
| size | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | – | ● | ● | ● | ● | ● |
| status | ◐ | – | – | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ◐ | – | – | – | – | ● | – | – | – |
| rounded | ● | ● | – | ● | ● | ● | ● | ● | ● | ● | ● | – | ● | ● | ● | – | – | – | – | – | – | ● |
| shadow | ● | ● | – | – | – | – | – | – | – | – | – | – | – | – | – | – | – | – | – | – | – | ● |
| disabled | ● | ● | ◐ | ● | ● | ● | ● | ● | ● | ● | ● | ● | – | ● | – | – | – | – | – | – | – | – |
| loading | ● | – | – | ● | ● | – | – | – | – | – | ● | – | – | – | – | – | – | ● | ● | – | – | – |

Legenda: ● didukung, ◐ sebagian/tergantung varian, – tidak relevan.

---

## 6) API Props & Matriks Varian Per Komponen

Format tabel: Prop | Tipe | Nilai yang diizinkan | Default | Catatan

### 6.1 Button

| Prop | Tipe | Nilai | Default | Catatan |
|---|---|---|---|---|
| variant | enum | primary, secondary, ghost, outline, destructive, inverse, link | primary | Visual/kontras |
| size | enum | sm, md, lg | md | Tinggi & padding |
| rounded | enum | sm, md, lg | md | Map ke tokens radius |
| shadow | enum | none, sm, md, lg | md | `shadow-brut*` |
| block | bool | – | false | `w-full` |
| loading | bool | – | false | Non‑interactive, spinner optional |
| disabled | bool | – | false | – |
| iconPosition | enum | start, end, only | – | `only` → ikon‑only |
| isPressed | bool | – | – | Untuk toggle; set `aria-pressed` |

State: default, hover, focus-visible, pressed, disabled, loading.

### 6.2 ButtonIcon

| Prop | Tipe | Nilai | Default | Catatan |
|---|---|---|---|---|
| type | enum | standard, stateful, menu | standard | Perilaku |
| variant | enum | bare, container-base, container-border, container-filled, inverse, brand | bare | Visual |
| size | enum | xxs, xs, sm, md, lg | md | – |
| name | string | – | – | Nama ikon |
| ariaLabel | string | – | – | WAJIB untuk ikon‑only |
| pressed | bool | – | – | Untuk `stateful` |
| tooltip | string | – | – | Disarankan |
| disabled | bool | – | false | – |

### 6.3 Link

| Prop | Tipe | Nilai | Default | Catatan |
|---|---|---|---|---|
| emphasis | enum | default, subtle, inverse, muted | default | Kontras |
| underline | enum | auto, hover, none | auto | – |
| external | bool | – | false | Tambah ikon/rel |
| size | enum | sm, md, lg | md | – |

### 6.4 Label

| Prop | Tipe | Nilai | Default | Catatan |
|---|---|---|---|---|
| htmlFor | string | – | – | Hubungkan ke kontrol |
| required | bool | – | false | Tambah asterisk |
| optional | bool | – | false | Badge optional |
| size | enum | sm, md, lg | md | – |
| inline | bool | – | false | Inline layout |

### 6.5 HelperText

| Prop | Tipe | Nilai | Default | Catatan |
|---|---|---|---|---|
| id | string | – | – | Untuk `aria-describedby` |
| tone | enum | muted, error, warning, success, inverse | muted | Warna/status |

### 6.6 Input

| Prop | Tipe | Nilai | Default | Catatan |
|---|---|---|---|---|
| type | enum | text, email, password, search, tel, url | text | – |
| variant | enum | boxed, filled, underlined | boxed | Visual |
| size | enum | sm, md, lg | md | – |
| status | enum | default, error, warning, success, loading | default | Gaya & ARIA |
| rounded | enum | sm, md, lg | md | – |
| prefixIcon | node | – | – | – |
| suffixIcon | node | – | – | – |
| clearable | bool | – | false | Tombol clear (molecule jika overlay) |
| disabled | bool | – | false | – |
| readOnly | bool | – | false | – |

### 6.7 Textarea

| Prop | Tipe | Nilai | Default | Catatan |
|---|---|---|---|---|
| size | enum | sm, md, lg | md | – |
| status | enum | default, error, warning, success, loading | default | – |
| autoResize | bool | – | false | – |
| rows | number | – | 3 | – |
| counter | object | `{max:number}` | – | Hitung karakter |

### 6.8 Select (native)

| Prop | Tipe | Nilai | Default | Catatan |
|---|---|---|---|---|
| size | enum | sm, md, lg | md | – |
| variant | enum | boxed, filled, underlined | boxed | – |
| status | enum | default, error, warning, success | default | – |
| disabled | bool | – | false | – |
| icon | node | – | – | Opsional |

### 6.9 NumberInput

| Prop | Tipe | Nilai | Default | Catatan |
|---|---|---|---|---|
| min/max/step | number | – | – | – |
| size | enum | sm, md, lg | md | – |
| variant | enum | boxed, filled, underlined | boxed | – |
| status | enum | default, error, warning, success | default | – |
| showStepper | bool | – | true | Tampilkan +/− |

### 6.10 DateTimeInput (native)

| Prop | Tipe | Nilai | Default | Catatan |
|---|---|---|---|---|
| type | enum | date, time, datetime-local, month, week | date | – |
| size | enum | sm, md, lg | md | – |
| variant | enum | boxed, filled, underlined | boxed | – |
| status | enum | default, error, warning, success | default | – |
| icon | node | – | – | – |

### 6.11 Checkbox

| Prop | Tipe | Nilai | Default | Catatan |
|---|---|---|---|---|
| checked | bool | – | – | – |
| onChange | func | – | – | – |
| size | enum | sm, md, lg | md | – |
| disabled | bool | – | false | – |
| description | node | – | – | – |
| error | bool | – | false | – |

### 6.12 Radio

| Prop | Tipe | Nilai | Default | Catatan |
|---|---|---|---|---|
| name | string | – | – | Grup |
| value | string | – | – | – |
| checked | bool | – | – | – |
| onChange | func | – | – | – |
| size | enum | sm, md, lg | md | – |
| disabled | bool | – | false | – |

### 6.13 Switch

| Prop | Tipe | Nilai | Default | Catatan |
|---|---|---|---|---|
| checked | bool | – | – | `role="switch"` |
| onChange | func | – | – | – |
| size | enum | sm, md, lg | md | – |
| withLabel | bool | – | false | – |
| disabled | bool | – | false | – |
| loading | bool | – | false | – |

### 6.14 Slider

| Prop | Tipe | Nilai | Default | Catatan |
|---|---|---|---|---|
| min/max | number | – | 0/100 | – |
| step | number | – | 1 | Diskret bila ada step |
| value | number | – | – | – |
| onChange | func | – | – | – |
| size | enum | sm, md, lg | md | Ukuran track/thumb |
| vertical | bool | – | false | – |
| discrete | bool | – | false | Tampilkan ticks |
| showTicks | bool | – | false | – |

### 6.15 Badge

| Prop | Tipe | Nilai | Default | Catatan |
|---|---|---|---|---|
| tone | enum | neutral, info, success, warning, error, brand, inverse | neutral | Warna |
| variant | enum | solid, soft, outline | solid | – |
| size | enum | sm, md, lg | md | – |
| icon | node | – | – | Opsional |

### 6.16 Tag/Chip

| Prop | Tipe | Nilai | Default | Catatan |
|---|---|---|---|---|
| variant | enum | solid, soft, outline | soft | – |
| size | enum | sm, md, lg | md | – |
| icon | node | – | – | – |
| removable | bool | – | false | Tombol `×` |
| selected | bool | – | false | Untuk filter |

### 6.17 Avatar

| Prop | Tipe | Nilai | Default | Catatan |
|---|---|---|---|---|
| src | string | – | – | – |
| alt | string | – | – | Aksesibilitas |
| fallback | string | – | – | Inisial |
| size | enum | xs, sm, md, lg, xl | md | – |
| shape | enum | circle, rounded, square | circle | – |
| bordered | bool | – | false | – |

### 6.18 Icon

| Prop | Tipe | Nilai | Default | Catatan |
|---|---|---|---|---|
| name | string | – | – | Ikon lib |
| size | enum | xs, sm, md, lg, xl | md | – |
| tone | enum | default, brand, muted, inverse, status-* | default | Warna |
| decorative | bool | – | true | `aria-hidden` jika true |

### 6.19 Divider

| Prop | Tipe | Nilai | Default | Catatan |
|---|---|---|---|---|
| orientation | enum | horizontal, vertical | horizontal | – |
| inset | enum | none, sm, md, lg | none | Margin kiri/kanan |
| style | enum | solid, dashed | solid | – |

### 6.20 Spinner

| Prop | Tipe | Nilai | Default | Catatan |
|---|---|---|---|---|
| size | enum | xs, sm, md, lg | md | – |
| inverse | bool | – | false | Latar gelap |
| label | string | – | – | A11y live region |

### 6.21 Progress

| Prop | Tipe | Nilai | Default | Catatan |
|---|---|---|---|---|
| type | enum | bar, ring | bar | – |
| value | number | – | – | Determinate |
| max | number | – | 100 | – |
| tone | enum | neutral, success, warning, error | neutral | Warna |
| showLabel | bool | – | false | Persen tampil |

### 6.22 Skeleton

| Prop | Tipe | Nilai | Default | Catatan |
|---|---|---|---|---|
| shape | enum | text, avatar, rect, button, input | rect | – |
| animated | bool | – | true | Shimmer |
| width/height | css | – | – | Ukuran |

### 6.23 Kbd/Code

| Prop | Tipe | Nilai | Default | Catatan |
|---|---|---|---|---|
| size | enum | sm, md | md | – |
| tone | enum | default, muted, inverse | default | – |

### 6.24 Surface/Card

| Prop | Tipe | Nilai | Default | Catatan |
|---|---|---|---|---|
| variant | enum | card, panel, popover | card | – |
| elevation | enum | none, sm, md, lg | md | `shadow-brut*` |
| bordered | bool | – | true | `border-2 border-border` |
| radius | enum | sm, md, lg | md | Tokens |

---

## 7) State & Aksesibilitas

Definisi state umum: `default`, `hover`, `focus-visible`, `active/pressed`, `selected`, `disabled`, `loading`, `error|warning|success`, `readonly`.

Checklist A11y:
- Ikon‑only: wajib `aria-label` atau tooltip.
- Toggle: gunakan `aria-pressed` (button) atau `role="switch"` + `aria-checked` (switch).
- Field error: `aria-invalid="true"` + pesan terkait di‑referensikan via `aria-describedby`.
- Focus ring terlihat dan kontras.
- External link: ikon + `rel="noopener noreferrer"`.

---

## 8) Molecules Prioritas (Template)

### 8.1 Form Field

| Slot/Prop | Deskripsi |
|---|---|
| `id` | ID kontrol dan asosiasi label/hint |
| `label` | Teks label |
| `required` | Penanda wajib |
| `status` | default, error, warning, success, loading |
| `hint` | Helper text opsional |
| `children(controlProps)` | Render prop untuk menyuntikkan `id`, `aria-describedby`, `aria-invalid` |

Perilaku: `aria-invalid` bila `status=error`; hubungkan hint via `id-hint`.

### 8.2 Search

| Slot/Prop | Deskripsi |
|---|---|
| `placeholder` | Placeholder input |
| `onClear` | Aksi hapus cepat |
| `prefixIcon` | Ikon pencarian |
| `clearButton` | Tombol clear (ButtonIcon) |

### 8.3 Input Group (Prefix/Suffix)

| Slot/Prop | Deskripsi |
|---|---|
| `prefix` | Konten kiri (ikon/teks) |
| `suffix` | Konten kanan (ikon/teks) |
| `inputProps` | Prop yang diteruskan ke Input |

---

## 9) Panduan Implementasi (Step‑by‑Step)

1) Finalisasi tokens: validasi kontras tema terang/gelap; tetapkan border 2px default; pilih radius default `--radius-md`; pilih shadow default `shadow-brut`.
2) Buat util `cn`, setup shadcn, dan cva untuk varian.
3) Implementasikan atoms inti (Button, Input, Label, HelperText, ButtonIcon) berikut semua varian & state.
4) Lanjutkan atoms lain (Checkbox, Radio, Switch, Select, Textarea, Tag, Badge, Avatar, Icon, Divider, Spinner, Progress, Skeleton, Kbd, Surface).
5) Implementasikan molecules prioritas: FormField, Search, InputGroup (dengan a11y lengkap).
6) Buat Story/Docs per komponen yang memperlihatkan seluruh varian/ukuran/state.
7) Uji A11y & visual regression (dark/light, inverse, hover/focus/disabled).
8) Rilis versi 0.x; dokumentasikan breaking changes.

---

## 10) Spesifikasi Machine‑Readable (untuk AI Codegen)

Gunakan blok YAML per komponen. Setiap entri memiliki: `name`, `type`, `category`, `props`, `variants`, `states`, `defaults`, `tailwind`, `a11y`.

```yaml
components:
  - name: Button
    type: atom
    category: action
    props:
      variant: [primary, secondary, ghost, outline, destructive, inverse, link]
      size: [sm, md, lg]
      rounded: [sm, md, lg]
      shadow: [none, sm, md, lg]
      block: [true,false]
      loading: [true,false]
      disabled: [true,false]
      iconPosition: [start, end, only]
      isPressed: [true,false]
    states: [default, hover, focus-visible, pressed, disabled, loading]
    defaults: { variant: primary, size: md, rounded: md, shadow: md }
    tailwind:
      base: "inline-flex items-center justify-center font-medium border-2 border-border focus:outline-none focus-visible:ring-2 ring-ring"
      variant:
        primary: "bg-primary text-primary-foreground"
        secondary: "bg-secondary text-secondary-foreground"
        ghost: "bg-transparent border-transparent"
        outline: "bg-transparent"
        destructive: "bg-destructive text-foreground"
        inverse: "bg-foreground text-background border-foreground"
        link: "bg-transparent border-transparent underline underline-offset-4"
      size: { sm: "h-9 px-3 text-sm", md: "h-11 px-4", lg: "h-12 px-5" }
      rounded: { sm: "rounded-[var(--radius-sm)]", md: "rounded-[var(--radius-md)]", lg: "rounded-[var(--radius-lg)]" }
      shadow: { none: "", sm: "shadow-brut-sm", md: "shadow-brut", lg: "shadow-brut-lg" }
      modifiers:
        block: { true: "w-full" }
        iconOnly: { true: "aspect-square p-0" }
    a11y:
      - use aria-pressed when toggle
      - label text required unless iconOnly has aria-label

  - name: Input
    type: atom
    category: field
    props:
      type: [text, email, password, search, tel, url]
      variant: [boxed, filled, underlined]
      size: [sm, md, lg]
      status: [default, error, warning, success, loading]
      rounded: [sm, md, lg]
      prefixIcon: any
      suffixIcon: any
      clearable: [true,false]
      disabled: [true,false]
      readOnly: [true,false]
    states: [default, hover, focus-visible, disabled, readonly, error, warning, success, loading]
    defaults: { type: text, variant: boxed, size: md, rounded: md, status: default }
    tailwind:
      base: "w-full border-2 border-border focus:outline-none focus-visible:ring-2 ring-ring"
      variant:
        boxed: "bg-card"
        filled: "bg-muted"
        underlined: "bg-transparent border-0 border-b-2 rounded-none"
      size: { sm: "h-9 px-3 text-sm", md: "h-11 px-4", lg: "h-12 px-5 text-lg" }
      status:
        default: ""
        error: "border-destructive ring-destructive"
        warning: "border-chart-4 ring-chart-4"
        success: "border-chart-5 ring-chart-5"
        loading: "opacity-80"
    a11y:
      - connect label via for/id
      - use aria-invalid and aria-describedby

  - name: Label
    type: atom
    category: text
    props:
      htmlFor: string
      required: [true,false]
      optional: [true,false]
      size: [sm, md, lg]
      inline: [true,false]
    defaults: { size: md }
    tailwind:
      base: "block text-sm font-medium"
    a11y:
      - for must match input id

  - name: HelperText
    type: atom
    category: text
    props:
      id: string
      tone: [muted, error, warning, success, inverse]
    defaults: { tone: muted }
    tailwind:
      base: "mt-1 text-xs"

  - name: ButtonIcon
    type: atom
    category: action
    props:
      type: [standard, stateful, menu]
      variant: [bare, container-base, container-border, container-filled, inverse, brand]
      size: [xxs, xs, sm, md, lg]
      name: string
      ariaLabel: string
      pressed: [true,false]
      tooltip: string
      disabled: [true,false]
    defaults: { type: standard, variant: bare, size: md }
    tailwind:
      base: "inline-flex items-center justify-center border-2 focus:outline-none focus-visible:ring-2 ring-ring"
    a11y:
      - aria-label required
      - aria-pressed for stateful
```

Tambahkan komponen lain mengikuti pola di atas (lihat tabel API di Bab 6).

---

## 11) Theming & Dark Mode

- `.dark` sudah menimpa CSS variables untuk tema gelap; komponen otomatis mengikuti.
- Sediakan `inverse` variant saat butuh kontras ekstra pada latar gelap/berwarna.

---

## 12) Dokumentasi & QA

- Dokumentasi per komponen: tampilkan semua varian, ukuran, state; sertakan contoh kode.
- QA: cek kontras (WCAG AA), keyboard nav, screen reader, dan visual regression (light/dark).

---

## 13) Roadmap Eksekusi

1) Implementasi `Button`, `Label`, `HelperText`, `Input`, `ButtonIcon`.
2) Implementasi `Checkbox`, `Radio`, `Switch`, `Select`, `Textarea`.
3) Implementasi indikator (`Badge`, `Tag`, `Spinner`, `Progress`, `Skeleton`).
4) Implementasi util presentasi (`Avatar`, `Icon`, `Divider`, `Surface`, `Kbd`).
5) Molecules: `FormField`, `Search`, `InputGroup`.
6) Penulisan docs & contoh Story.
