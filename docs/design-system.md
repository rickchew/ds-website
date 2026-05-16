# Design System

Visual + interaction specification for the new Design Space website.

**Direction:** Tessie-inspired dark theme with **maroon as the singular accent color**. Synthesizes Rick's locked maroon brand identity with the dark-premium aesthetic from [`docs/assets/tessie-inspired-website-prompt.md`](assets/tessie-inspired-website-prompt.md). Reference: [tessie.com](https://www.tessie.com).

The earlier "maroon + white" decision is preserved — maroon is the canonical brand color and remains the agency's identity. The Tessie framework uses ONE vivid accent, and maroon takes that slot. So both decisions hold: maroon continues; the surface around it is dark + modern instead of maroon-dominant.

---

## 1 · Philosophy

- Dark, ultra-clean, premium tech minimalism. Confident and calm.
- One idea per section. Never crowd a screen.
- Big bold statements + real numbers. Minimal explanatory text.
- Maroon used sparingly — it's the brand signal, not a wash.
- Restraint over flash. Services, case studies, framework do the talking.

---

## 2 · Color

### Tokens

| Token | Value | Use |
|---|---|---|
| `--bg` | `#0A0A0B` (near-black, slightly neutral) | Base background |
| `--bg-elevated` | `#101012` | Subtle section variation if needed |
| `--surface` | `#16171A` | Cards, elevated blocks |
| `--border-hairline` | `rgba(255,255,255,0.06)` to `rgba(255,255,255,0.10)` | Card borders, dividers |
| `--text` | `#F5F5F7` (near-white) | Headings, primary text |
| `--text-muted` | `#9A9AA0` | Body, secondary text |
| `--accent` | **maroon — exact hex TBD from Rick** | CTAs, key numbers, hover states, hero glow |
| `--accent-glow` | `rgba(<maroon>, 0.25–0.40)` | Ambient radial behind hero product |

### Rules
- Maroon is used **only** on: primary CTAs, key stat numbers, hover states, hero ambient glow, and the occasional 1-pixel hairline accent on hovered cards.
- Maroon is **never** used as a section background.
- One pure-white section is permitted to interrupt the dark rhythm (optional, sparingly).
- No harsh drop shadows. Depth comes from ambient glows + hairline borders.

---

## 3 · Typography

### Stack
Modern geometric / grotesque sans-serif. Recommended in priority order:
1. **Inter** — free, robust, ubiquitous
2. **Geist** — Vercel's, modern
3. **Söhne** — premium, paid

Mono accent for stats/code if used: **JetBrains Mono** or **Geist Mono**.

### Scale (desktop)

| Use | Size | Weight | Letter-spacing | Line-height |
|---|---|---|---|---|
| Hero headline | 64–96px | 600–700 | -0.02em | 1.05 |
| Section heading | 36–48px | 600 | -0.01em | 1.15 |
| Subheading | 24–28px | 500 | 0 | 1.3 |
| Body | 16–18px | 400 | 0 | 1.6 |
| Stat number | 48–72px | 700 | -0.02em | 1 |
| Eyebrow / micro-label | 12–13px | 500–600 | 0.08em uppercase | 1.2 |

### Mobile
- Hero headline scales to **40–48px**
- Section headings to **28–32px**
- Other sizes unchanged

---

## 4 · Layout & spacing

- **Max content width:** ~1200px, centered
- **Section vertical padding (desktop):** 120–160px top/bottom
- **Section vertical padding (mobile):** 64–80px
- **Grid:** 12-column with 24–32px gutters
- **Sticky top nav:** transparent over the hero; solidifies to a dark `backdrop-filter: blur(12px)` bar on scroll (~80% opacity of `--bg`)
- **Content alignment:** mostly centered; clean 3/4-column rows for feature sections
- **Vertical rhythm:** consistent 8px base unit; section spacing is a multiple of 8

---

## 5 · Imagery

- Large, high-quality product shots / device mockups / 3D renders as hero focal points
- Imagery floats freely on dark — no boxy frames or hard edges
- Ambient maroon radial glow behind the hero image (gradient mask, blur-heavy)
- Photography used sparingly; UI / product / framework diagrams are the star
- **Diagrams** (Digital Loop, system flows): clean white-on-dark line work with single maroon accents on key nodes

---

## 6 · Motion & interaction

- **Scroll entry:** fade-up (8–16px translate-Y, 400–600ms, ease-out)
- **Stat numbers:** animated count-up on scroll-into-view (CountUp.js or equivalent)
- **Hover states:** 200–300ms ease transitions
- **Buttons:** lift 2–4px translate-Y on hover + soft accent glow
- **Cards:** subtle border-color shift on hover (hairline → 1px maroon glow)
- **Restraint:** no carousels, no parallax beyond physical feel, no auto-rotating sliders
- **Accessibility:** respect `prefers-reduced-motion` — disable transforms, allow instant transitions

---

## 7 · Component specs

### Primary button
- Maroon fill, near-white or dark text (whichever has 4.5:1 contrast against maroon)
- Pill or 8px corner radius (pick one and stay consistent — recommend 8px)
- Padding: 14px × 28px (vertical × horizontal)
- Hover: lift 2px + soft maroon glow (`box-shadow: 0 0 24px rgba(<maroon>, 0.35)`) + 200ms ease

### Secondary button / link
- Ghost (transparent background) or text-only
- Text color: `--text-muted` → `--text` on hover
- Same padding as primary
- Border on ghost: 1px `--border-hairline` → maroon on hover

### Card
- `--surface` background
- 1px `--border-hairline` border
- Corner radius 12–16px (pick one — recommend 14px)
- Internal padding 24–32px
- Hover: border shifts to `rgba(<maroon>, 0.30)` + slight elevation (subtle, no shadow)

### Nav (header)
- 64px tall, sticky
- Transparent over hero → `--bg` at 80% opacity + `backdrop-filter: blur(12px)` on scroll
- Accent CTA ("Start a Project") always visible on right
- Logo (designspace wordmark + rocket) on left

### Stats bar
- 3 stat blocks in equal columns (stacked on mobile)
- Each block: giant number (48–72px, `--text` or `--accent`) + small muted label below
- Centered alignment within each block
- Count-up animation on scroll-into-view

### Testimonial card
- Standard card spec (above)
- 5-star row at top (small icons, near-white or muted yellow)
- One-line quote (18–20px, `--text`)
- Name + source (13–14px, `--text-muted`)
- Hairline border, hover state same as cards

### CTA band
- Full-width section, `--bg-elevated` or `--bg` (slight contrast)
- Generous padding (160px top/bottom on desktop)
- Single large headline (48–64px) + one primary CTA OR inline link

### Alternating feature section (used for home case-study showcase)
- Full-width row, two-column on desktop
- Alternates: image-left/text-right, then image-right/text-left
- Image floats on dark with ambient glow (subtle maroon)
- Text column: eyebrow label, headline (36–48px), 1-2 sentence description, link

### Ambient glow (background element)
- Large radial gradient `rgba(<maroon>, 0.25–0.40)` to transparent
- Blur 80–120px
- Positioned behind hero imagery
- Should feel atmospheric, not punchy

### Tag / capability chip
- Small pill, `--border-hairline` background, 13px text
- Used in case studies + service pages for capability labels

---

## 8 · Hero patterns

### Home hero
- Centered tagline 64–96px: "More than a website. A complete digital business system."
- Sub-hero 18–20px muted: short positioning sentence
- Primary CTA (maroon): "Explore Services"
- Secondary CTA (ghost): "Book a Discovery Call"
- Large product visual / Digital Loop diagram below — with ambient maroon glow

### Service page hero
- Eyebrow: e.g. "Service · Custom App"
- Pillar tagline 48–64px
- Sub-hero: one outcome sentence
- Single CTA (page-specific or "Start a Project")

### Case study hero
- Eyebrow: client logo or name
- 1-line outcome statement, 48–64px
- Hero image (their product/site mockup) with ambient glow

---

## 9 · Responsive behavior

- **Mobile (<768px):** single column · hero per typography table · nav collapses to hamburger drawer · stats stack vertically · section padding reduces to 64–80px · product imagery scales with side margins
- **Tablet (768–1024px):** 2-column for service/feature grids · hero remains centered · stats can be 3-column or stack depending on space
- **Desktop (>1024px):** full grid · max-width 1200px centered

---

## 10 · Technical notes

- **Stack:** Next.js + Tailwind CSS + shadcn/ui as starting base; Framer Motion for scroll entries; CountUp.js for stat numbers
- **Type loading:** `next/font` for Inter (or chosen) — preloads + subsets
- **Color implementation:** CSS variables on `:root`; no light/dark toggle (always dark)
- **Accessibility:** semantic HTML, focus rings (maroon ring at 2px) on all interactive elements, `prefers-reduced-motion` respect, contrast verified for `--text-muted` on `--bg` (target 4.5:1 minimum)
- **Performance:** lazy-load below-the-fold imagery, preconnect to font CDN, optimize hero image (WebP/AVIF with PNG fallback)

---

## Outstanding — these block design + build start

- **Exact maroon hex / PMS value** — without this, every CTA, key stat, glow, and hover state is a placeholder
- **Source vector / SVG** of the maroon logo lockup
- **Hero imagery direction** — what's the product visual on the homepage hero? Options to consider:
  - A composed render of the Digital Loop diagram (clean SVG with maroon nodes)
  - A montage of the agency's actual work (app mockups + dashboards + IoT)
  - An abstract system visualization (data flows, connections)
