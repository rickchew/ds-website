# Website Redesign Prompt — "Tessie-Inspired" Design System

> A complete build prompt that captures the design language of **tessie.com**, written so you can
> paste it into any AI website builder (v0, Lovable, Bolt, Claude) or hand it to a designer.
> Sections marked **[CUSTOMIZE]** are where you drop in your own brand and content.

---

## 1. Objective

Build a modern, premium single-page marketing website that captures the look and feel of
tessie.com: **dark, ultra-clean, confident, automotive-tech minimalism**. The site should feel
like a high-end product company — calm, spacious, and trustworthy. Big bold statements, real
numbers, and the product itself do the talking. No clutter, no marketing fluff.

---

## 2. Brand voice & tone

- Confident and concise. Headlines are 2–4 words ("Drive the future").
- One idea per section. Never crowd a screen.
- Let metrics and product imagery carry the persuasion — minimal explanatory text.
- Premium but approachable; calm authority, not hype.

---

## 3. Visual design system

### Color
- **Base background:** near-black, slightly neutral — not pure black (`#0A0A0B` to `#101012`).
- **Surfaces / cards:** marginally lighter dark (`#16171A`) with very low-contrast hairline
  borders (`rgba(255,255,255,0.06–0.10)`).
- **Text:** crisp near-white (`#F5F5F7`) for headings; muted grey (`#9A9AA0`) for body and
  secondary text.
- **Accent:** exactly ONE vivid accent color, used sparingly — CTA buttons, key numbers, hover
  states only. **[CUSTOMIZE — pick your brand accent, e.g. electric blue, lime, amber]**
- **Contrast break:** optionally one pure-white section to interrupt the dark rhythm.
- **Effects:** soft ambient radial glows behind the hero product image; subtle gradients;
  no harsh drop shadows.

### Typography
- Modern geometric / grotesque sans-serif (Inter, Geist, Söhne, or similar).
- **Hero headline:** 64–96px, weight 600–700, tight letter-spacing (-0.02em).
- **Section headings:** 36–48px.
- **Body:** 16–18px, line-height 1.6, muted grey.
- **Stat numbers:** oversized 48–72px, bold, white or accent.
- **Micro-labels / eyebrows:** small, uppercase, wide letter-spacing, muted.

### Layout & spacing
- Centered content, max-width ~1200px.
- Very generous vertical spacing — section padding 120–160px on desktop.
- Strong vertical rhythm and lots of negative space.
- 12-column grid; content centered or in clean 3/4-column arrangements.
- Sticky top nav: transparent over the hero, solidifies to a dark blurred bar on scroll.

### Imagery
- Large, high-quality product shots / device mockups / 3D renders as the hero focal point.
- Imagery floats freely on the dark background with an ambient glow — no boxy frames.
- Photography used sparingly; the product/UI is always the star.

### Motion & interaction
- Subtle fade-up + slight upward translate as elements scroll into view.
- Animated count-up for stat numbers.
- Smooth 200–300ms ease transitions on all hover states.
- Buttons lift slightly and gain a soft accent glow on hover.
- Restraint is the point — nothing flashy or distracting.

---

## 4. Page structure (homepage)

1. **Top navigation** — Logo left; primary audience links ("For X / For Y / For Developers");
   a "Resources" dropdown; "Sign in" link + a primary CTA button on the right. Transparent over
   hero → dark blurred bar on scroll.

2. **Hero** — Centered. A 2–4 word headline. One supporting sentence containing a trust stat
   ("Trusted by 500,000+ ..."). Primary CTA button, plus optional app-store badges. A large
   product image / mockup sits below or behind it with an ambient glow.

3. **Stats / social proof bar** — Three oversized metrics with short labels (e.g. users,
   volume processed, data points). Count-up animation on scroll.

4. **Testimonials** — Heading like "Thousands of 5-star reviews." A row or grid of clean quote
   cards: star row, a one-line quote, name + source. Minimal cards with hairline borders.

5. **Feature sections** — Alternating image/text rows, add as many as needed. Each: short
   headline, 1–2 sentence description, one supporting visual. One idea per section.

6. **Final CTA** — A big closing-statement headline with an inline link ("Try it for free").
   Calm, full-width, generously padded.

7. **Footer** — Multi-column (Explore / Platforms / Legal / Help & Support). Logo, social
   icons, copyright and trademark line. Dark, organized, quiet.

---

## 5. Component specs

- **Primary button:** accent fill, white/dark text, pill or 8px radius, subtle hover lift + glow.
- **Secondary button / link:** ghost or text-only, muted → white on hover.
- **Cards:** dark surface, hairline border, 12–16px radius, generous internal padding.
- **Nav:** ~64px tall, backdrop blur when scrolled, accent CTA always visible.
- **Stat block:** giant number + small muted label, centered, equal columns.

---

## 6. Responsive behavior

- **Mobile:** single column; hero headline scales to ~40–48px; nav collapses to a hamburger;
  stats stack vertically; section padding reduces to ~64–80px; product imagery scales to fit
  with margins.

---

## 7. Technical notes

- Recommended stack: **Next.js + Tailwind CSS** (or Webflow — tessie.com itself is built on
  Webflow).
- Clean, semantic, accessible HTML. Fast load. Lazy-load imagery.
- Smooth scroll; respect `prefers-reduced-motion`.

---

## 8. What to customize for your brand  **[CUSTOMIZE]**

- Logo + brand name
- Accent color (one vivid color)
- Hero headline — your 2–4 word statement
- Audience segments shown in the nav
- Product imagery / device mockups
- The three hero/social-proof stats relevant to your business
- Testimonials and their sources
- Footer link groups

---

## Quick version (condensed, for short-prompt tools)

> Build a premium dark-themed single-page marketing site in the style of tessie.com. Near-black
> background (`#0A0A0B`), crisp near-white text, muted grey body copy, and one vivid accent color
> used only for CTAs and key numbers. Modern geometric sans-serif; a huge 2–4 word hero headline;
> generous whitespace and 120–160px section padding. Sticky nav that's transparent over the hero
> and turns into a dark blurred bar on scroll. Sections in order: hero with product mockup and
> ambient glow, three oversized count-up stats, a row of minimal 5-star testimonial cards,
> alternating image/text feature sections, a calm final CTA, and a multi-column footer. Subtle
> fade-up scroll animations, smooth hover transitions, restraint over flash. Fully responsive.
