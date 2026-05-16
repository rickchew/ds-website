# Site Structure

Working architecture for the new Design Space website. **Pending sign-off from Rick.** Page copy will be drafted separately, slotting into the sections defined here.

**Visual + interaction specs** live in [`docs/design-system.md`](design-system.md) — Tessie-inspired dark theme with maroon as singular accent. This document defines *what* each page contains; the design system defines *how* it looks.

The rebrand doc's sitemap (§12), homepage wireframe (§13), and service-page template (§14) are the starting point; this document is the adapted version after applying the Phase-1 confirmed scope and the locked positioning.

---

## 1 · Sitemap

### Phase 1 (16 pages)

```
/
/about
/services
/services/brand-launch
/services/ai-ready-website
/services/business-automation
/services/custom-app
/services/iot
/services/data-intelligence
/services/ai-lab
/case-studies
/case-studies/hiro
/case-studies/seng-heng-shipping
/case-studies/staycay
/case-studies/custom-business-systems
/contact
```

### Phase 2+ (deferred, but URL structure pre-decided so we don't paint into a corner)

```
/industries
/industries/[slug]              # laundry, marine, F&B, etc.
/framework                       # standalone Digital Loop deep dive
/insights                        # blog index
/insights/[slug]                 # blog posts
/packages
/packages/[slug]                 # per productized package
/resources                       # lead magnets
/resources/ai-ready-website-checklist
/resources/automation-audit
/resources/data-readiness-audit
```

### URL conventions
- Lowercase, kebab-case
- No trailing slashes
- Service slugs use short forms (e.g. `/services/custom-app`, not `/services/custom-web-and-mobile-app`) — nav labels can be longer than the URL
- Case study slugs use the client's brand slug

---

## 2 · Global navigation

### Primary nav (header, sticky)

| Label | URL | Behavior |
|---|---|---|
| `designspace` (wordmark + rocket) | `/` | Returns home |
| Services | `/services` | Dropdown on desktop → 7 pillar links; tap to overview on mobile |
| Case Studies | `/case-studies` | Dropdown on desktop → 4 case links; tap to index on mobile |
| About | `/about` | — |
| **Start a Project** | `/contact` | Primary CTA button, visually distinct from nav links |

Mobile: compact drawer with the same items.

### Footer

| Column | Content |
|---|---|
| Brand | Logo · tagline ("More than a website. A complete digital business system.") · 1-line blurb · FB + IG icons |
| Sitemap | Services · Case Studies · About · Contact (links to top of each section) |
| Contact | Address (Pusat, Lot 8004, 2nd Floor, Block 11, Bandar Baru Permyjaya, 98000 Miri, Sarawak) · Phone (016-589 7771) · Email (TBD — see cross-cutting decisions below) · Hours |
| Fine print | © Design Space Sdn Bhd 2026 · Privacy · Terms |

---

## 3 · Page-by-page section structure

Section names + 1-line purpose for each page. Actual copy is the next deliverable.

### Home (`/`)

Adapted from rebrand doc §13 + Tessie homepage patterns. 8 sections, restrained per [`design-system.md`](design-system.md):

1. **Hero** — Centered tagline "More than a website. A complete digital business system." · short sub-hero · primary CTA "Explore Services" (maroon) + secondary "Book a Discovery Call" (ghost) · large hero visual (Digital Loop diagram or service montage) below with ambient maroon glow. No carousel.
2. **Stats bar** — 3 oversized count-up metrics with muted labels — e.g. "12 years · 50+ projects shipped · 5.0★ Google rating" (final 3 stats to be confirmed). Animated on scroll-into-view.
3. **The problem** — One paragraph + 4–5 pain-point bullets ("Your website is not enough" framing). Sets up the Digital Loop.
4. **The Design Space Digital Loop** — Signature system diagram (Brand → Website → Leads → CRM → Automation → App → IoT → Data → AI → Growth) + short philosophy paragraph.
5. **What we build** — 7 service cards in a clean grid (one per pillar) · mini-headline + 1-line description + link to the service page.
6. **Featured case studies** — 3–4 cases as **alternating image/text feature sections** (Tessie-style — image-left/text-right, then reversed). Each: eyebrow with client name, headline outcome, 1–2 sentence description, link to detail page.
7. **Credibility** — 3 testimonial quote cards (pulled from the 9 Google reviews — hairline borders, 5-star row, quote, name + source) + below them, a low-contrast monochrome logo wall strip of 12+ client logos.
8. **Final CTA** — Calm full-width section: "Ready to build your digital business system?" + primary CTA.

> "Why Design Space" differentiators (business-first thinking, full loop, practical AI, hardware-to-cloud, step-by-step AI readiness) are embedded inline — in the hero sub-hero, the Digital Loop philosophy paragraph, and the case-study framings — rather than carved into a separate section. Keeps the home tight and avoids a hype block.

### About (`/about`)

1. **Hero** — short positioning paragraph.
2. **The story** — 12 years in Borneo · the evolution from creative studio to AI Product, Data & Automation Studio.
3. **The team** — Rick (Director / App Dev) · William (Art Director) · Alex (Marketing Director) · the wider team. Bio cards.
4. **Where we work** — Miri / Sarawak / Borneo context · optional office photography.
5. **CTA** — Start a Project.

### Services overview (`/services`)

1. **Hero** — pillar-intro paragraph · the Digital Loop teased.
2. **The 7 pillars** — full-width cards/blocks for each pillar, click through to dedicated pages.
3. **The Digital Loop** — visual diagram with click-throughs from each node to its pillar.
4. **Service maturity ladder** — per rebrand doc §8: "Level 1: Brand & Website → Level 8: IoT + AI Closed Loop". Helps clients self-locate.
5. **Productized packages** — table mapping each pillar to its package name (Launch / AI-Ready Website / Automate / Build / Connect / Intelligence / AI Lab) · pricing band visibility TBD (see cross-cutting decisions).
6. **CTA** — Start a Project.

### Each service page (`/services/[pillar]`) × 7

Common template per rebrand doc §14:

1. **Hero** — pillar tagline + sub-hero.
2. **The problem** — 3-6 common client problems this pillar solves.
3. **What we build** — the services list (e.g. for Custom App: web app · mobile app · admin panel · booking · membership · portal · dashboard · payment · API · etc.).
4. **Approach** — numbered steps (discovery → ... → deployment → maintenance).
5. **What makes ours different** — pillar-specific differentiator (e.g. for Custom App: the reusable feature library across loyalty, e-wallet, dealer mgmt, IoT, payment integration).
6. **Outcome** — 1-line value statement.
7. **Related case studies** — 1-2 cases that demonstrate this pillar.
8. **Next step in the Digital Loop** — implicit upsell to adjacent pillars.
9. **CTA** — Start a Project (or pillar-specific, e.g. "Audit my automation potential").

### Case Studies index (`/case-studies`)

1. **Hero** — short pitch about real work in real industries.
2. **Grid** — 4 case cards · each with hero image · client name · 1-line outcome · click through to detail.
3. **CTA** — Start a Project.

### Each case study (`/case-studies/[client]`) × 4

Common template per rebrand doc §24:

1. **Hero** — client name · industry · 1-line outcome.
2. **Background** — client + industry context.
3. **Challenge** — the problem.
4. **Goal** — what success looked like.
5. **Solution** — what Design Space built.
6. **Key features** — bulleted list.
7. **Technology / capability used** — tags mapped to: Branding · Website · Web app · Mobile app · Automation · IoT · Data · AI.
8. **Result** — what improved, with measurable outcomes where available.
9. **Future potential** — implicit Digital Loop upsell ("what's next for this client").
10. **CTA** — "See how we can build yours."

### Contact (`/contact`)

1. **Hero** — "Let's see if we're a fit." Friendly + filtering tone.
2. **Qualification form** — the 6 questions from rebrand doc §15.3 (project type · business stage · main problem · current systems · budget band · timeline). Required: name, company, contact, project type, main problem. Optional: the rest.
3. **Other ways to reach us** — phone · WhatsApp · Facebook · Instagram · Google Maps embed.
4. **Office** — address · hours.
5. **Response expectation** — "We reply within 1 business day."

---

## 4 · Component inventory (Phase 1)

Reusable building blocks the design + build phases will need. Visual specs in [`design-system.md`](design-system.md); most components start from shadcn/ui.

### Layout / chrome
- `<Header>` · sticky, transparent-over-hero → dark blurred bar on scroll · primary nav + "Start a Project" CTA · responsive drawer
- `<Footer>` · 4-column dark
- `<PageWrapper>` · consistent max-widths + section padding (120–160px desktop)
- `<AmbientGlow>` · background radial maroon glow element used behind hero imagery

### Heroes
- `<HomeHero>` · large centered tagline · dual CTAs · product visual + ambient glow
- `<ServiceHero>` · eyebrow + pillar tagline + sub-hero + single CTA
- `<CaseStudyHero>` · client eyebrow + 1-line outcome headline + hero image with glow
- `<PageHero>` · generic for About / Services overview / Contact / Case Studies index

### Sections
- `<StatsBar>` · 3 stat blocks with count-up animation · Home + potentially About
- `<AlternatingFeatureSection>` · image-left/right alternating row used for the home featured case studies
- `<CTABand>` · full-width closing CTA · used at the end of most pages

### Cards
- `<ServiceCard>` · 7-pillar grid (Home + Services overview) · hairline border, hover lifts to maroon hairline
- `<CaseStudyCard>` · Case Studies index grid
- `<TeamMemberCard>` · About
- `<TestimonialCard>` · **Phase-1 required** (Home credibility section) · 5-star row + quote + name/source from Google reviews

### Diagrams + visuals
- `<DigitalLoopDiagram>` · signature visual · appears on Home + Services overview + AI Lab page · variants: full · compact · linear · clean line work, maroon accents on key nodes
- `<ServiceMaturityLadder>` · Services overview only
- `<ProcessTimeline>` · service pages
- `<LogoWall>` · Home (low-contrast monochrome strip under testimonials) + future Clients page

### Interactive
- `<QualificationForm>` · Contact page · multi-step or single page with conditional fields
- `<Accordion>` · FAQ (Phase-2)
- `<PackageTable>` · package comparison on Services overview

### Atoms
- `<Button>` · primary (maroon fill) + secondary (ghost) + lift-on-hover behavior
- `<Stat>` · oversized number + small muted label · composes `<StatsBar>` and case-study outcomes
- `<Tag>` · capability chips (small pill, hairline border) for case studies and service pages
- `<Eyebrow>` · uppercase wide-tracked micro-label used above headlines

---

## 5 · Cross-cutting decisions (5 locked 2026-05-16, 1 pending)

1. **Hero CTAs** ✅ Primary: **"Explore Services"** · Secondary: **"Book a Discovery Call"**. The header CTA button stays **"Start a Project"** as the high-intent conversion shortcut. The hero invites browsing; the header is the conversion shortcut.
2. **Agency email** ✅ **`hello@designspace.my`** — used for the Contact form routing and the footer display.
3. **Hiro JV publicly?** ✅ **Omitted** from the public site. The JV is internal context only.
4. **Custom Business Systems composition** ⏳ **Pending Rick's curation.** Confirmed context so far: **Mimo is halted (likely excluded as current capability), X.One + Hiro + myDobi + others are ongoing.** Rick will filter the final 3-4 projects. See [`clients.md`](clients.md) for the running list.
5. **Pricing visibility** ✅ **Show pricing bands** on the Services overview (default applied — pre-qualifies + filters cheap clients per the rebrand doc strategy).
6. **Case studies layout** ✅ **4 individual pages** (default applied — better SEO, cleaner UX, easier to grow).

---

## What comes next

1. ~~Lock cross-cutting decisions~~ ✅ 5 of 6 locked 2026-05-16. Custom Business Systems composition pending Rick's curation.
2. ~~Draft Home copy~~ ✅ v0.2 prose draft in [`home.md`](home.md) — 9 inline `[ASSET]` flags pending from Rick.
3. Draft About copy
4. Draft 7 service pages — using rebrand doc §14 templates as starting structure
5. Case study briefs from Rick — for Hiro, Seng Heng, Staycay, Custom Business Systems composition (per `clients.md`)
6. Finalize Contact form — confirm the 6 qualification questions match what Rick actually wants to ask
