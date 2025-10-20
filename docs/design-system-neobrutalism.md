# Neo-Brutalism Design System

## 1. Design Principles
- **Bold geometry**: Favor modular blocks, sharp borders (`border-4 border-border`), and exaggerated radii (`rounded-[var(--radius-lg)]` or larger).
- **High-contrast palette**: Combine noir neutrals with vibrant punch tones while preserving legibility; never mix more than three accent colors per view.
- **Tactile depth**: Use custom brutalist shadows (`shadow-brut-sm`, `shadow-brut`, `shadow-brut-lg`) to simulate stacked layers.
- **Expressive typography**: Heavy uppercase headings (`font-black`, `tracking-[0.3em]`) paired with readable body copy (`font-medium`, `text-foreground/80`).

## 2. Foundations

### 2.1 Colors (CSS Variables)
| Token | Light | Dark | Usage |
| --- | --- | --- | --- |
| `--background` | `#fdf3d7` | `#0f172a` | Page background |
| `--foreground` | `#111827` | `#fdf3d7` | Primary text |
| `--surface-primary` | `#fffdf1` | `#111827` | Main cards & sections |
| `--surface-muted` | `#ffe5ec` | `#172554` | Secondary surfaces |
| `--surface-strong` | `#ffd166` | `#ef476f` | Highlight blocks |
| `--accent` | `#ff5c8d` | `#ef476f` | CTA backgrounds |
| `--secondary` | `#ffe066` | `#ffb703` | Badges & tags |

Use Tailwind via custom utilities: `bg-surface-primary`, `text-accent-foreground`, etc. Only apply `bg-accent` to primary CTAs.

### 2.2 Typography
- Base font: Geist Sans (`var(--font-geist-sans)`), monospace: Geist Mono when needed.
- Headings: `font-black`, `uppercase`, adjust tracking within `0.25em–0.35em`.
- Body: `text-base`–`text-lg`, `font-medium` or `font-semibold`, `text-foreground/80` for comfortable contrast.
- Highlight text with `AnimatedGradientText` using default gradient tokens.

### 2.3 Spacing & Layout
- Grid: prefer `max-w-6xl` containers with `px-6` horizontal padding.
- Vertical rhythm: sections spaced by `gap-16` or `py-16`.
- Section shells: wrap content with `rounded-[var(--radius-xl)] border-4 border-border shadow-brut-lg`.

### 2.4 Shadows & Radii
- Radii scale: `--radius-sm` (0.75rem), `--radius-md` (1rem), `--radius-lg` (1.5rem), `--radius-xl` (2rem).
- Shadows: use `shadow-brut-sm` for small affordances, `shadow-brut` for cards, and `shadow-brut-lg` for hero/CTA blocks. Never mix traditional soft shadows with brutalist shadows.

## 3. Component Guidelines

### 3.1 Buttons
- **Primary CTA**: `inline-flex items-center justify-center rounded-3xl border-4 border-border bg-accent text-accent-foreground shadow-brut`. Tracking between `0.25em–0.3em`.
- **Secondary**: `bg-surface-muted` with `shadow-brut-sm`; on hover promote to `bg-surface-strong`.
- **Icon Buttons**: Square (`h-12 w-12`), same border thickness, use lucide icons sized `h-5 w-5`.
- Maintain brutalist motion: hover sets `hover:-translate-y-1` and escalates shadow class by one step.

### 3.2 Header & Navigation
- Logo block: shaped badge (`rounded-3xl`, `border-4`, `shadow-brut-sm`).
- Navigation links: uppercase pills (`rounded-2xl`, `border-2`, `bg-surface-muted`).
- Utility area: order CTAs first, then icon toggles; align with `flex items-center gap-3`.

### 3.3 Sections
- Wrap each section with surface token and brutalist border/shadow combo.
- Use badges or eyebrow labels (`text-xs font-black uppercase tracking-[0.35em]`) to introduce content.
- Content grid options: `lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]` for hero, `lg:grid-cols-3` for services/blog cards.

### 3.4 Cards & Blocks
- Structure: `rounded-[var(--radius-lg)] border-4 border-border bg-surface-* shadow-brut`.
- Titles: uppercase `text-xl font-black`, supporting copy `text-sm font-semibold text-foreground/70`.
- For palette swatches, use centered flex stacks with `tracking-wide` captions.

### 3.5 Dropdowns
- Trigger Button: reuse secondary button styling with caret icon (`lucide-react` `ChevronDown`).
- Menu: `rounded-[var(--radius-lg)] border-4 border-border bg-surface-primary shadow-brut` anchored with `py-3`.
- Items: `px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em]`; highlight active item with `bg-surface-strong` and `shadow-brut-sm`.

### 3.6 Forms
- Inputs: `rounded-2xl border-4 border-border bg-surface-primary px-5 py-3 text-sm font-semibold`.
- Focus state: `focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-ring`.
- Group fields in brutalist cards (`shadow-brut`) with `gap-6` layout.

### 3.7 Toggles & Switches
- Icon toggles: square, brutalist shadow, lucide icon swap (`Sun`/`Moon`).
- Switch controls: rectangular `h-12` track with border-4; thumb `h-10 w-10` with `shadow-brut-sm`.

### 3.8 Animated Elements
- Gradient text: use `<AnimatedGradientText>` with optional `speed`, `colorFrom`, `colorTo` tokens drawn from accent palette.
- Motion: limit to subtle translation and gradient animations; avoid blurs beyond `backdrop-blur-sm` on headers.

## 4. Accessibility & Theming
- Ensure text contrast ratios meet WCAG AA (accent foreground vs background is pre-calibrated).
- Theme persistence handled via `localStorage` + `prefers-color-scheme`; components should respect `.dark` class.
- Provide `aria-label` for icon-only buttons and `aria-pressed` on toggles.

## 5. Usage Checklist
1. Select surface (`bg-surface-primary|muted|strong`) and apply brutalist border + shadow.
2. Set typography scale (`font-black` for headings, `font-medium` for body) with uppercase tracking.
3. Apply accent colors sparingly—primary CTA, key badge, or highlight per section.
4. Add hover motion using `hover:-translate-y-1` and escalate shadow class.
5. Verify dark mode: toggle `.dark` and confirm token contrasts remain intact.
