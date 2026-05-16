# ds-website — DS Rebirth

Rebuild of [designspace.my](https://www.designspace.my/) and launch vehicle for the strategic rebrand of **Design Space Sdn Bhd** from a creative agency to an **AI Product, Data & Automation Studio**.

Internal codename: **DS Rebirth**.

---

## Status

- **Phase 0 — Discovery:** ✅ complete 2026-05-16. All strategic decisions locked.
- **Phase 1 — Strategy + Content + Design:** in progress. Site structure and design system delivered; copy drafting is the next deliverable.
- **Phase 2 — Build, Phase 3 — Launch, Phase 4 — Post-launch additions:** pending.
- No code yet.

---

## Strategy at a glance

| | |
|---|---|
| **Positioning** | AI Product, Data & Automation Studio |
| **Tagline** | "More than a website. A complete digital business system." |
| **Core framework** | Brand → Website → Leads → CRM → Automation → App → IoT → Data → AI → Growth |
| **Target audience** | SMEs with 10–100 staff · multi-outlet · offline/physical operations · WhatsApp/Excel-driven |
| **Languages** | EN only at launch (ZH deferred to Phase 2+) |
| **Timeline** | No fixed deadline — sustainable pace |

Best-fit industries: laundry · marine/offshore · property/short stay · retail · F&B · education · equipment rental · services · manufacturing · medical · automotive · construction.

---

## Brand & visual identity

- **Logo:** `designspace` wordmark (light "design" + bold "space") + rocket-with-star icon. Descriptor dropped from the lockup.
- **Brand color:** **maroon** — the established Design Space brand color, carried forward (exact hex pending from Rick).
- **Visual direction:** Tessie-inspired dark theme — near-black backgrounds (`#0A0A0B`), crisp near-white text (`#F5F5F7`), muted grey body (`#9A9AA0`), with **maroon as the singular accent** on CTAs, key numbers, hover states, and hero ambient glow.
- **2022 yellow-black system:** reserved for decks/posters/print collateral — not used on the website.
- **Brand voice:** modern · strategic · intelligent · practical · founder-friendly · outcome-driven · less jargon.

Full visual specs: [`docs/design-system.md`](docs/design-system.md).

---

## Site structure — 16 pages in Phase 1

```
/                                       Home
/about                                  About
/services                               Services overview
/services/brand-launch                  Pillar 1
/services/ai-ready-website              Pillar 2
/services/business-automation           Pillar 3
/services/custom-app                    Pillar 4
/services/iot                           Pillar 5
/services/data-intelligence             Pillar 6
/services/ai-lab                        Pillar 7
/case-studies                           Case studies index
/case-studies/hiro                      Self-service laundry platform
/case-studies/seng-heng-shipping        Marine / offshore corporate site
/case-studies/staycay                   Short-stay platform
/case-studies/custom-business-systems   3-4 project showcase
/contact                                Qualification form + contact info
```

Phase 2+ (deferred): `/industries`, `/framework`, `/insights`, `/packages`, `/resources`.

Full architecture: [`docs/site-structure.md`](docs/site-structure.md).

---

## Tech stack

| Layer | Choice |
|---|---|
| Framework | **Next.js** (App Router, TypeScript) |
| Styling | **Tailwind CSS** with CSS variables for color tokens |
| Components | **shadcn/ui** as the starter library |
| Animation | **Framer Motion** for scroll entries; CountUp.js for stat numbers |
| Fonts | `next/font` for Inter (or Geist / Söhne) |
| CMS | TBD — Payload / Strapi / Directus / headless WP |
| Forms | Native form + serverless route handler for the Contact qualification flow |
| Deployment | **Cloudflare Pages** or **Vercel** |
| Analytics | TBD — privacy-friendly default (Plausible / Umami) |
| Email | `hello@designspace.my` for Contact form routing |

---

## Roadmap

| Phase | Status | Scope |
|---|---|---|
| **Phase 0** — Discovery | ✅ Complete 2026-05-16 | Positioning · tagline · visual direction · scope · audience · tech stack · case-study selection |
| **Phase 1** — Strategy + Content + Design | In progress | Site structure (done) · design system (done) · Home copy → About → 7 service pages → 4 case studies → Contact form · wireframes + design |
| **Phase 2** — Build | Pending | Next.js scaffold · CMS · component library · pages · forms · QA · analytics + SEO |
| **Phase 3** — Launch + Sales Assets | Pending | Audits · production deploy · domain/DNS · sales-asset alignment · rebrand announcement |
| **Phase 4** — Post-launch additions | Deferred | ZH localization · Industries pages · Insights/Blog · Packages · lead-magnet downloads |

Full plan: [`docs/roadmap.md`](docs/roadmap.md).

---

## What's still blocking

| # | Item | Blocks |
|---|---|---|
| 1 | **Exact maroon hex / PMS** | All visual work — most time-critical |
| 2 | **Logo vector / SVG** | Header, hero, footer, ambient-glow halo |
| 3 | **Custom Business Systems composition** | The 4th case study page (Rick to curate from X.One · Hiro · myDobi · others; Mimo is halted) |
| 4 | **Case study briefs + assets** for Hiro, Seng Heng Shipping, Staycay | The 4 case study pages |
| 5 | **Budget indication** | Not time-critical; useful for Phase-2 effort planning |

Home page copy can start immediately with placeholder maroon, no other blockers.

---

## Where each thing lives

| File | Contents |
|---|---|
| [`README.md`](README.md) | This file — entry point and status snapshot |
| [`docs/brief.md`](docs/brief.md) | Canonical strategic + creative source of truth |
| [`docs/site-structure.md`](docs/site-structure.md) | Sitemap · navigation · per-page sections · component inventory |
| [`docs/design-system.md`](docs/design-system.md) | Visual + interaction specs (colors, typography, motion, components, hero patterns) |
| [`docs/clients.md`](docs/clients.md) | Portfolio + case-study inventory (2026 rebrand framing + 2022 catalog) |
| [`docs/roadmap.md`](docs/roadmap.md) | Phase plan with exit criteria |
| [`docs/inputs.md`](docs/inputs.md) | Chronological log of every input/dump fed in |
| [`docs/decisions.md`](docs/decisions.md) | ADR-lite log of every major decision |
| [`docs/assets/`](docs/assets/) | Raw artifacts: 2022 company profile PDF · 2026 rebrand starter kit · Tessie prompt · current placeholder HTML |

---

## Team

- **Rick Chew** — Director / App Developer *(building this site)*
- **William** — Art Director
- **Alex Ling** — Marketing Director
- **Vie & Orange** — Graphic Designer
- **Jason** — Frontend Developer
- **Annie** — Backend Developer
- **Shu Mei** — Digital Marketer

---

## Contact

**Design Space Sdn Bhd**
Lot 8004, 2nd Floor, Block 11, Bandar Baru Permyjaya, 98000 Miri, Sarawak, Malaysia
+60 16-589 7771 · `hello@designspace.my`
Mon–Fri 8:00 am – 5:00 pm · Sat 8:00 am – 12:00 pm · Sun closed
[facebook.com/designspace.my](https://www.facebook.com/designspace.my) · [@designspacemiri](https://www.instagram.com/designspacemiri/) · 5.0 ★ from 9 Google reviews

---

## Working agreement

When new data is provided (references, copy, designs, requirements, feedback):

1. Source dumped in chat
2. Claude analyzes and routes to the appropriate `docs/` md file
3. Decisions logged with date in [`docs/inputs.md`](docs/inputs.md); major decisions extracted to [`docs/decisions.md`](docs/decisions.md)
4. [`docs/brief.md`](docs/brief.md) stays current as the single source of truth

For a fresh session, read in this order:
1. **`README.md`** (this file) for the synthesis
2. **`docs/brief.md`** for full strategic context
3. **`docs/decisions.md`** for the ADR-lite log
4. **`docs/inputs.md`** for the chronological narrative if needed
