# Roadmap

High-level phases for **DS Rebirth** — the rebrand + website rebuild for Design Space Sdn Bhd. Pacing is sustainable (no fixed deadline, confirmed 2026-05-16); each phase has exit criteria.

The rebrand doc's 90-day plan ([§27–§28 of the starter kit](assets/design-space-rebranding-starter-kit.md)) is the structural reference; our phases align with it but stretch to fit the all-7-pillars Phase-1 scope.

---

## Phase 0 — Discovery (essentially complete 2026-05-16)

Goal: enough strategic clarity to make tech and design decisions without guessing.

- [x] `docs/brief.md` filled in
- [x] Audience and goals confirmed
- [x] **Positioning** confirmed — AI Product, Data & Automation Studio
- [x] **Tagline** confirmed — "More than a website. A complete digital business system."
- [x] **Visual direction** confirmed — established maroon + white brand carries forward
- [x] **Logo lockup** simplified — wordmark + rocket only; descriptor dropped
- [x] **Phase-1 scope** confirmed — all 7 service pages launch together
- [x] **Languages** confirmed — EN only at launch
- [x] **Timeline** confirmed — no fixed deadline, sustainable pace
- [x] **Tech stack** decided — Next.js + Tailwind + shadcn/ui + Framer Motion; Cloudflare/Vercel deploy
- [x] **Codename** adopted — DS Rebirth
- [x] **Lead case studies** confirmed — Hiro · Seng Heng Shipping · Staycay · Custom Business Systems
- [x] **2022 yellow-black collateral system** classified — collateral-only, not on website

Pending assets/content from user (not strategic decisions — content requests):
- [ ] Exact **maroon hex / PMS** value (and white if off-white)
- [ ] **Source vector / SVG** of the maroon logo lockup
- [ ] **Case study briefs + assets** for Hiro · Seng Heng Shipping · Staycay · Custom Business Systems
- [ ] **Budget** indication

---

## Phase 1 — Strategy + Content + Design

Goal: every page of the site has final wireframe + final copy + final visual direction. Nothing speculative.

### Strategy + content

- [ ] Site architecture / sitemap finalized (drafted in `brief.md`)
- [ ] **Home page copy** — hero (tagline + sub) · problem framing · Digital Loop visual · services teaser · why-us · case studies teaser · CTA. Templates in rebrand doc §13 + §32
- [ ] **About page copy** — 12 years, team, why Miri/Borneo, mission, the Hiro/myDobi joint venture (if Rick wants to surface that)
- [ ] **Services overview page copy** — bridge between Home and the 7 pillar pages
- [ ] **Service page copy × 7** — Brand Launch · AI-Ready Website · Business Automation · Custom Web & Mobile App · IoT · Data Intelligence · AI & Deep Learning Lab. Templates in rebrand doc §14
- [ ] **Case study × 4 briefs from user** —
  - [ ] Hiro (laundry / myDobi)
  - [ ] Seng Heng Shipping
  - [ ] Staycay
  - [ ] Custom Business Systems (grouped — which 3–4 projects compose this)
- [ ] **Contact page copy + qualification form** — questions in rebrand doc §15.3

### Design

- [ ] Design tokens — exact maroon hex, typography stack, spacing, component palette
- [ ] Visual system / component library plan — start from shadcn/ui
- [ ] Home hero design — including a Digital Loop visual (system diagram)
- [ ] Service page template design (× 7 variants)
- [ ] Case study page template design (× 4 variants if needed)
- [ ] About page design
- [ ] Mobile responsive direction

### Exit criteria for Phase 1
- Every Phase-1 page has final copy + final wireframe + final visual treatment
- Maroon brand color has exact hex / RGB / PMS
- Logo SVG is in the repo

---

## Phase 2 — Build

Goal: a working site that matches the Phase-1 designs.

- [ ] Project scaffolded — Next.js + TypeScript + Tailwind + shadcn/ui + Framer Motion
- [ ] Design tokens / theme set up
- [ ] CMS chosen + integrated — Payload / Strapi / Directus / headless WP
- [ ] Shared components built — nav, footer, typography system, layouts, hero variants, service card, case study card, logo wall, CTA bands
- [ ] Pages built and content integrated
- [ ] **Contact form + lead qualification flow** with downstream routing (email + CRM?)
- [ ] Responsive QA on real devices
- [ ] Analytics + SEO meta + OG images + sitemap + robots

---

## Phase 3 — Launch + Sales Assets

Goal: the site is live, and sales assets behind it are aligned with the new positioning.

- [ ] Performance audit — Lighthouse / WebPageTest
- [ ] Accessibility pass — keyboard navigation, color contrast, semantics
- [ ] Cross-browser / device QA
- [ ] Deploy to production
- [ ] Domain + DNS pointed
- [ ] Sales assets aligned with new positioning:
  - [ ] Updated proposal template (rebrand doc §17)
  - [ ] Discovery call script (rebrand doc §16)
  - [ ] Productized package PDFs (Launch / AI-Ready Website / Automate / Build / Connect / Intelligence / AI Lab)
- [ ] **Rebrand announcement** — internal + external (template in rebrand doc §34–§35)

---

## Phase 4 — Post-launch additions (deferred per rebrand doc)

Per the rebrand doc, these are deferred until the core site is stable:

- [ ] **ZH translation** — Chinese localization of the site (the deferred Phase-2 language)
- [ ] **Industries pages** — landing pages targeted at the 12 best-fit industries (rebrand doc §9.2)
- [ ] **Insights / Blog** — first batch of content per the plan in rebrand doc §23
- [ ] **Packages section** — with productized package detail pages
- [ ] **Lead-magnet downloads** — AI-Ready Website Checklist · Automation Audit · Data Readiness Audit (rebrand doc §26)
- [ ] **Framework page** — standalone Digital Loop deep-dive

---

## 12-month strategic context (rebrand doc §28)

Beyond the site rebuild, the rebrand doc maps quarterly business focuses:

- **Q1 (current):** Rebrand + new website — make Design Space look like a serious AI Product, Data & Automation Studio
- **Q2:** Sell AI-ready websites + automation starter packages; use website projects as the entry to better-quality clients
- **Q3:** Convert website clients into dashboard / app projects; offer monthly insight reports; build internal dashboard template + reusable app modules
- **Q4:** Launch AI Lab content + IoT case study; package AI agent services + IoT monitoring starter; publish data intelligence examples

This roadmap.md focuses on the site rebuild; the business roadmap lives in the rebrand doc.
