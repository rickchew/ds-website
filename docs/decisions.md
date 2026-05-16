# Decisions log

Lightweight ADRs (architecture decision records). Each entry captures what was decided and why, so future-me / future-Claude can reconstruct the reasoning without re-reading every dump.

## Format

```
### YYYY-MM-DD — Title
- **Context:** what was being decided and why it mattered
- **Decision:** what was chosen
- **Alternatives:** what else was considered (and why rejected)
- **Consequences:** what this commits us to / what becomes harder
```

The chronological narrative of *how* these decisions came up lives in [`inputs.md`](inputs.md). This file is the curated extract.

---

## Entries

### 2026-05-16 — Docs-first scaffold before code
- **Context:** New project, empty directory. User wanted structure and a record of inputs before any implementation.
- **Decision:** Start with `docs/` only (brief, inputs, decisions, roadmap; clients, site-structure, design-system added later as new categories emerged). No framework chosen, no scaffolding, no `package.json`.
- **Alternatives:** Scaffold Next.js / Astro / Vite immediately and document along the way.
- **Consequences:** Tech stack stayed an open decision until brief firmed up. Lower risk of premature lock-in; minor cost of an extra phase before code.

### 2026-05-16 — Strategic source-dump workflow
- **Context:** How should new inputs (briefs, references, assets, feedback) flow into the project?
- **Decision:** Rick dumps raw sources in chat → Claude analyzes and routes to the appropriate `docs/` md file (`brief.md` for strategic facts, `clients.md` for portfolio, `inputs.md` chronological log, `decisions.md` for ADRs). Large artifacts archived in `docs/assets/` with links from the relevant entries.
- **Alternatives:** Free-form chat with no structured record; user maintains the docs himself.
- **Consequences:** Project survives session boundaries. Future-Claude (or future-Rick) can pick up cold by reading `README.md` → `brief.md` → `decisions.md` → `inputs.md`.

### 2026-05-16 — Adopt new positioning: AI Product, Data & Automation Studio
- **Context:** The rebrand starter kit dropped 2026-05-16 proposed pivoting from "Apps, Branding & Marketing Company" (the 2014–2022 framing) to "AI Product, Data & Automation Studio". Round 1 questionnaire.
- **Decision:** Adopt fully. New positioning is the headline descriptor.
- **Alternatives:** Keep current "Apps, Branding & Marketing" framing; hybrid/phased rollout.
- **Consequences:** Service pillars expand from 3 to 7. Old website framing retired. New sales funnel, audience filter, and copy organize around this positioning. The new site becomes the launch vehicle for this pivot, not just a brochure refresh.

### 2026-05-16 — Tagline: "More than a website. A complete digital business system."
- **Context:** Tagline needed to support the new positioning. Round 1 questionnaire.
- **Decision:** "More than a website. A complete digital business system." (Replaces "MAKE. IDEAS. HAPPEN".)
- **Alternatives:** "From brand to intelligent business system." (rebrand doc's recommended); keep "MAKE. IDEAS. HAPPEN"; "Build your brand. Launch your website. Automate your business."
- **Consequences:** Tagline becomes the home page hero and footer line; supersedes the long-standing brand line. The "your website isn't the end" framing carries directly into copy.

### 2026-05-16 — Visual direction: Tessie-inspired dark theme with maroon as singular accent
- **Context:** Earlier in session, user locked maroon + white as the established brand. Later, user shared a Tessie-inspired prompt and said "this is what I want the website to look like." The two needed reconciling.
- **Decision:** Adopt Tessie-inspired dark theme. Background near-black `#0A0A0B`, text near-white `#F5F5F7`, body muted grey `#9A9AA0`. **Maroon takes the framework's ONE-accent slot** (CTAs, key numbers, hover states, hero ambient glow) — preserves brand color while modernizing the surface.
- **Alternatives:** Maroon-led dominant palette (continuity-first); rebrand doc's premium-tech navy palette (rejected earlier because it would replace maroon); 2022 yellow-black system; warm studio (charcoal + orange).
- **Consequences:** All visual work (CTAs, stats, hover, glows) is gated on the exact maroon hex value. Surface is near-black not maroon — maroon used sparingly as an accent moment. Full specs in [`docs/design-system.md`](design-system.md).

### 2026-05-16 — Drop the logo lockup descriptor
- **Context:** The existing maroon lockup had "APPS, BRANDING & MARKETING COMPANY" under the wordmark — inconsistent with the new positioning. Round 2 questionnaire.
- **Decision:** Drop the descriptor entirely. Logo is just `designspace` wordmark + rocket-with-star icon.
- **Alternatives:** Update to "AI PRODUCT, DATA & AUTOMATION STUDIO"; shorter version like "AI · DATA · AUTOMATION"; keep current.
- **Consequences:** Logo lockup simplifies; the positioning lives in hero copy and other touchpoints, not on the logo itself. Less work to keep the logo in sync with future positioning shifts.

### 2026-05-16 — 2022 yellow-black collateral system: collateral-only, not on website
- **Context:** The yellow-black design language from the 2022 company-profile deck — should it carry into the new site? Round 3 questionnaire.
- **Decision:** Reserved for decks, posters, and print collateral. Not on the website.
- **Alternatives:** Retire entirely; use yellow as a secondary accent on the new site.
- **Consequences:** Website palette stays clean (dark + maroon accent). Collateral work can still use the yellow-black system for non-web surfaces — it remains a sanctioned brand artifact, just contained.

### 2026-05-16 — Phase-1 scope: all 7 service pages launch together
- **Context:** Whether to launch all 7 service pillars or stagger. Round 1 questionnaire.
- **Decision:** All 7 service pages launch together in Phase 1 — Brand Launch · AI-Ready Website · Business Automation · Custom App · IoT · Data Intelligence · AI & Deep Learning Lab.
- **Alternatives:** 5-page launch (defer Brand Launch + AI Lab per rebrand doc §43); 3-page lean MVP; overview-only.
- **Consequences:** ~12 unique content units → 16 actual pages in Phase 1. Heavier content load up front; consistent positioning surface out the gate. Tightens any timeline (addressed by the "no fixed deadline" decision).

### 2026-05-16 — Languages: EN only at launch
- **Context:** Existing client work spans EN and ZH (Chinese-character brands, Favourite Livin Chinese campaign). Whether to launch bilingual. Round 2 questionnaire.
- **Decision:** EN only at launch. ZH deferred to Phase 2+.
- **Alternatives:** EN + ZH at launch; full Malaysian coverage (EN + ZH + BM).
- **Consequences:** No i18n infrastructure needed in Phase 1; simpler stack / CMS choice; faster to ship. Reaches Chinese-only clients later via Phase-2 localization.

### 2026-05-16 — No fixed deadline; sustainable pace
- **Context:** Rebrand doc proposed a 90-day rollout. With all-7-pillars scope, that's tight. Round 2 questionnaire.
- **Decision:** No fixed deadline. Ship each piece when ready.
- **Alternatives:** Commit to 90 days; stretch to 4–6 months; faster than 90 days.
- **Consequences:** Scope (7 pillars) and capacity stop conflicting. Trade-off: slower time-to-market. Removes pressure to cut scope or rush quality.

### 2026-05-16 — Codename: DS Rebirth
- **Context:** Internal name for the rebrand + rebuild project. Round 3 questionnaire.
- **Decision:** Adopt "DS Rebirth" (per rebrand doc §44).
- **Alternatives:** "Design Space 2.0"; "DS Intelligence"; no codename.
- **Consequences:** Signals the company is changing direction, not just updating its website. Used internally only.

### 2026-05-16 — Tech stack for the website
- **Context:** Stack to build the new site itself (separate from client-project capabilities). Per rebrand doc §22.1.
- **Decision:** Next.js (App Router, TypeScript) + Tailwind CSS + shadcn/ui + Framer Motion. CMS TBD (Payload / Strapi / Directus / headless WP). Deploy to Cloudflare Pages or Vercel.
- **Alternatives:** Webflow (per the Tessie reference — Tessie itself is on Webflow); WordPress; Astro; vanilla React.
- **Consequences:** Modern stack matching team capabilities. shadcn/ui gives a strong dark-theme starting library. Next.js supports SEO + future ZH localization well. CMS choice still open.

### 2026-05-16 — Hero CTAs: Explore Services + Book a Discovery Call
- **Context:** Primary hero CTA wording. Round 4 questionnaire.
- **Decision:** Hero primary "Explore Services" (maroon button); secondary "Book a Discovery Call" (ghost). Header CTA button stays "Start a Project" as the high-intent conversion shortcut.
- **Alternatives:** "Start a Project" as primary; "Get a Quote"; single CTA.
- **Consequences:** Hero invites browsing (lower-friction first impression aligned with the discovery-call-led sales flow). Header provides ever-present conversion entry. Three CTA labels across the site serve different intent levels.

### 2026-05-16 — Agency email: hello@designspace.my
- **Context:** Email for Contact form routing and footer display. Round 4 questionnaire.
- **Decision:** `hello@designspace.my`.
- **Alternatives:** Personal email (`hiro.my@gmail.com`); `info@` / `contact@` patterns.
- **Consequences:** Need to set up the inbox (or alias) before launch. Used on all public touchpoints.

### 2026-05-16 — Hiro JV omitted from public About page
- **Context:** Design Space is 100% Rick-owned. Hiro is a 50/50 JV between Rick and myDobi. Whether to disclose the JV on the public About page. Round 4 questionnaire.
- **Decision:** Omit. Internal context only.
- **Alternatives:** Surface as part of the agency story; mention in the team section.
- **Consequences:** About page stays focused on the agency's external offering. The Hiro case study presents the laundry platform as an external client engagement (arms-length, despite the JV).

### 2026-05-16 — Pricing visibility: show package bands on /services
- **Context:** Whether to show RM3K → RM300K+ package pricing on the website. Round 4 questionnaire (default applied — Rick deferred to my call).
- **Decision:** Show pricing bands on the Services overview.
- **Alternatives:** Keep all pricing behind discovery calls; show only "starting from" anchors.
- **Consequences:** Pre-qualifies leads, filters cheap-website hunters. Trade-off: competitors see bands; some prospects may self-exclude. Aligns with the rebrand doc's customer-filtering strategy.

### 2026-05-16 — Case studies: 4 individual pages (not one combined)
- **Context:** Whether case studies are 4 separate URLs or one combined page. Round 4 questionnaire (default applied).
- **Decision:** 4 individual pages (Hiro · Seng Heng Shipping · Staycay · Custom Business Systems), plus an index page.
- **Alternatives:** One combined page with anchor links.
- **Consequences:** Better SEO; cleaner UX; easier to grow. Trade-off: more pages to build and maintain in Phase 1.

---

## Pending decisions (still open)

These show up across `brief.md` and `site-structure.md` as `(open)` markers. They will be logged here once made:

- Exact maroon hex / PMS value
- Custom Business Systems case-study composition (which 3-4 projects)
- CMS choice (Payload / Strapi / Directus / headless WP / other)
- Analytics tool (Plausible / Umami / Posthog / other)
