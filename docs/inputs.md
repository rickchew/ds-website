# Inputs log

Chronological record of every input fed into the project: briefs, references, copy drafts, designs, assets, feedback, conversations. The point is that future-me (or future-Claude) can reconstruct *why* the project looks the way it does.

## Format

Each entry uses this shape:

```
### YYYY-MM-DD — Short title
- **Source:** chat / file / URL / conversation
- **Type:** brief | reference | copy | design | asset | feedback | decision-input
- **Summary:** one line, plain language
- **Stored at:** path in repo, link, or "—" if ephemeral
- **Action taken:** what changed because of this input
```

Keep entries terse. If a piece of input is large (a long brief, a Figma file, a brand doc), drop the file into `docs/assets/` (create it when needed) and link to it from the entry.

---

## Entries

### 2026-05-16 — Project kickoff
- **Source:** chat
- **Type:** brief
- **Summary:** User wants to rebuild their personal website. Asked for a structured docs scaffold to record inputs and plan the rebuild.
- **Stored at:** `README.md`, `docs/`
- **Action taken:** Created docs skeleton — README, brief, inputs (this file), decisions, roadmap. No code or tech-stack decisions yet.

### 2026-05-16 — Company identity + research dump (Design Space Sdn Bhd)
- **Source:** chat — user shared company name, location (Miri, Sarawak), and Facebook page. User confirmed ownership ("this is my social media page").
- **Type:** brief + reference
- **Summary:** This is a rebuild for **Design Space Sdn Bhd**, not a personal site. Triangulated public sources to assemble a canonical company profile: tagline "Make Ideas Happen", established 2014, full-stack agency (branding + digital + physical production), based at Lot 8004 Permyjaya, Miri.
- **Stored at:**
  - Canonical facts → [`docs/brief.md`](brief.md) (What / Why / Tone / Services / Contact)
  - Current "Under Construction" page archived → [`docs/assets/current-under-construction-page.html`](assets/current-under-construction-page.html) (preserves wordmark, type stack, color cues)
- **Sources consulted:** Facebook page (truncated), [designspace.my](https://www.designspace.my/) homepage (current placeholder), [bizmalay.com directory entry](https://www.bizmalay.com/en/design-space-sdn-bhd-016-876-0622), web search snippets, [an old FB post containing a positioning blurb](https://www.facebook.com/designspace.my/posts/486830064837868/), [Artmeet job listing](https://www.artmeet.my/c/designspace) (confirms active hiring).
- **Action taken:** Populated brief.md with confirmed facts (services, address, contact, year). Flagged audience, goals, and tone direction as **assumed — confirm**. Saved current placeholder HTML as a visual-cue reference.
- **Open questions for user:**
  1. Confirm/refine primary audience and the #1 outcome the site should drive.
  2. Which services lead the offering? (Branding-first? App-dev-first? Production-first? All equal?)
  3. Languages — English only, or also BM/Chinese?
  4. Tone direction — confident-corporate vs warm/local-flavored?
  5. Any reference sites you love (or hate) to anchor visual direction?

### 2026-05-16 — 2022 Company Profile PDF
- **Source:** chat — user dropped `~/Downloads/design space company profile 2022 v4.pdf` (2.4MB, 18 pages, dated Sep 2022).
- **Type:** brief + reference + portfolio + decision-input
- **Summary:** Definitive primary source for the agency's brand language, team, services, philosophy, and client portfolio. Triggers a major revision to `brief.md` and a new file `clients.md`.
- **Stored at:**
  - Raw artifact → [`docs/assets/design-space-company-profile-2022-v4.pdf`](assets/design-space-company-profile-2022-v4.pdf)
  - Brand / visual / team / philosophy → [`docs/brief.md`](brief.md) (full rewrite)
  - Portfolio inventory → [`docs/clients.md`](clients.md) (new file)
- **Key facts extracted:**
  - **User identity confirmed:** Rick Chew, Director / App Developer. Co-directors: William (Art), Alex Ling (Marketing). Team of ~8.
  - **Services collapse to 3 pillars:** Apps, Branding, Online Marketing. Older FB-era extras (printing, eco bags, signage) are *not* in the 2022 positioning.
  - **Tagline (verbatim):** "MAKE. IDEAS. HAPPEN" with periods between each word.
  - **2022 visual identity:** black + safety-yellow + heavy bold geometric sans + rocket-with-star icon. **Conflicts with the current under-construction placeholder** (white/light, minimal Montserrat) — flagged in `brief.md`.
  - **Apps capability shows a reusable feature library** across Mimo, X.One Care, X-One Xpress, myDobi Connect. Strong credibility signal.
  - **12+ identified branding clients** spanning F&B, delivery, retail, NGO, cinema, hotpot.
  - **Multilingual delivery confirmed:** EN + ZH marketing (BM in NGO work).
  - **Address, phone, hours discrepancies** between PDF and older online sources — logged in `brief.md` for user to clarify.
- **Refined open questions for user (supersedes earlier list):**
  1. Is the **2022 black-yellow brand** canonical, or has it evolved? (Resolves the visual-identity discrepancy.)
  2. Which **address / phone / hours** are current?
  3. Any projects, clients, testimonials, or outcomes **newer than 2022** to include?
  4. Top 3–4 case studies to lead with? Suggested: myDobi (full vertical), Mimo (apps), X.One (IoT), Favourite Livin (marketing). Confirm.
  5. Languages — **EN + ZH primary** (recommended), BM as future?
  6. Should we celebrate or de-emphasize the **legacy production services** (printing, eco bags, signage)?

### 2026-05-16 — Contact info confirmed (Google Business Profile)
- **Source:** chat — user pasted current Google Business Profile data. User manages this profile, so it is authoritative.
- **Type:** correction + reference
- **Summary:** Resolves the address / phone / hours discrepancies flagged in the previous entry. The 2022 PDF and the older directory listings were both partially stale.
- **Stored at:** [`docs/brief.md`](brief.md) — Contact section rewritten with confirmed values; note added that older numbers/addresses are stale.
- **Confirmed current contact:**
  - **Address:** Pusat, Lot 8004, 2nd Floor, Block 11, Bandar Baru Permyjaya, 98000 Miri, Sarawak (Permyjaya — *not* Marina Parkcity from the 2022 PDF)
  - **Phone:** 016-589 7771 (different from all three numbers previously surfaced)
  - **Hours:** Mon–Fri 8:00am–5:00pm · Sat 8:00am–12:00pm · Sun closed
- **Other facts captured:**
  - Google primary category: **"Software company"** (not "Branding agency") — likely SEO-driven choice for Miri search competition
  - Google rating: **5.0 ★ / 9 reviews** — credibility signal; mine the review text for testimonial copy when needed
- **Open thread:** worth grabbing the verbatim Google review quotes (and reviewer names where allowed) for the new site's testimonial section. Either user pastes them in a future dump, or we read the live profile when building.

### 2026-05-16 — Canonical brand image (resolves visual-identity question)
- **Source:** chat — user shared the official logo lockup image and stated "this is the correct brand image".
- **Type:** brand asset + decision-input
- **Summary:** Supersedes the visual-identity discrepancy flagged in the earlier PDF entry. The raspberry+white identity is canonical; the 2022 yellow-black is reclassified as a (possibly still-active) collateral system.
- **Stored at:** [`docs/brief.md`](brief.md) — Visual identity section rewritten with three tiers (canonical / 2022 collateral / placeholder).
- **What's now confirmed:**
  - **Canonical brand image:** deep raspberry/crimson background + white mark; `designspace` wordmark with rocket-and-star icon; descriptor "APPS, BRANDING & MARKETING COMPANY" set in uppercase letter-spaced caps below the wordmark
  - The raspberry matches the agency's office wall (visible in the 2022 deck's About-us office photo) — so the color is long-standing, not a 2026 refresh
  - The 2022 deck's black+yellow+heavy-bold-sans is now classified as a collateral treatment, *not* the primary identity
  - Tagline "MAKE. IDEAS. HAPPEN" remains separate brand copy (not part of the logo lockup)
- **Open threads:**
  - Need exact **hex / PMS values** for the raspberry (and the white if it's an off-white) — ask user for brand guide
  - **Source vector file**: user shared a screenshot inline; we don't have the SVG/AI master in repo. User to drop the original into `docs/assets/` when convenient
  - Confirm whether the **2022 yellow-black collateral system** is still sanctioned (as an accent / secondary treatment for the new site) or fully retired

### 2026-05-16 — Rebranding starter kit (strategic direction)
- **Source:** chat — user dropped `~/Downloads/design_space_rebranding_project_starter_kit.md` (~3,100 lines, dated 16 May 2026, "Prepared for Rick Chew / Design Space Sdn Bhd").
- **Type:** strategy + brief + sitemap + copy + decision-input
- **Summary:** A comprehensive rebranding plan proposing Design Space pivot from "Apps, Branding & Marketing Company" to **"AI Product, Data & Automation Studio"**. Covers positioning, tagline, 7 service pillars, productized packages, target audience, sitemap, homepage + service-page copy, sales funnel, pricing bands, tech stack, content plan, 90-day rollout, 12-month strategic roadmap. The doc is **proposed direction** — Rick to confirm adoption.
- **Stored at:**
  - Raw artifact → [`docs/assets/design-space-rebranding-starter-kit.md`](assets/design-space-rebranding-starter-kit.md)
  - Strategic + creative direction → [`docs/brief.md`](brief.md) (full rewrite)
  - Case-study framing → [`docs/clients.md`](clients.md) (new lead-case-studies section on top of the 2022 catalog)
- **Key facts extracted:**
  - **Positioning shift (proposed):** "AI Product, Data & Automation Studio" (replacing the "APPS, BRANDING & MARKETING COMPANY" descriptor)
  - **Tagline shift (proposed):** "From brand to intelligent business system." (replacing "MAKE. IDEAS. HAPPEN")
  - **Service pillars (proposed):** 7 — Brand Launch · AI-Ready Website · Business Automation · Custom Web & Mobile App · IoT Hardware-to-Cloud · Data Intelligence · AI & Deep Learning Lab
  - **Core framework:** The Design Space Digital Loop — Brand → Website → Leads → CRM → Automation → App → IoT → Data → AI → Growth
  - **Productized packages:** Launch · AI-Ready Website · Automate · Build · Connect · Intelligence · AI Lab (pricing bands RM3K to RM300K+ and monthly retainers RM300–RM20K/month)
  - **Internal project codename (proposed):** DS Rebirth
  - **Tech stack for the site:** Next.js + React + Tailwind + shadcn/ui + Framer Motion; CMS TBD; deploy to Cloudflare/Vercel
  - **Visual direction (proposed):** "premium tech" palette — recommended Option A: deep navy + electric blue + white + soft gray + cyan accent. ⚠️ **Conflicts with the raspberry brand image confirmed earlier today.** Surfaced in `brief.md` as a three-way visual-identity decision Rick needs to make.
  - **Lead case studies proposed:** Hiro (self-service laundry — likely myDobi reframed, given Rick's hiro.my email and overlapping capability list), Seng Heng Shipping (NEW), Staycay (NEW), Custom Business Systems. The 2022 headline clients (Mimo, X.One, myDobi, Favourite Livin) are *not* explicitly the lead case studies anymore.
  - **Target audience refined:** SMEs 10–100 staff, multi-outlet, physical/offline operations, WhatsApp/Excel-driven. 12 best-fit industries enumerated.
  - **Audiences to filter out** (RM800 website hunters, no decision-maker, unwilling to provide content, etc.) → contact form needs a qualification flow (§15.3).
- **Major decisions surfaced for user:**
  1. **Adopt the new positioning** "AI Product, Data & Automation Studio"? (Replaces the "APPS, BRANDING & MARKETING COMPANY" descriptor on the canonical raspberry logo lockup.)
  2. **Adopt the new tagline** "From brand to intelligent business system"? (Retires "MAKE. IDEAS. HAPPEN".)
  3. **Adopt the 7-pillar service structure**, or launch with the Phase-1 subset (§43, 5 pillars)?
  4. **Visual direction:** does the raspberry carry forward (primary, accent, or secondary), or do we adopt one of the three premium-tech palettes?
  5. **Logo descriptor:** keep "APPS, BRANDING & MARKETING COMPANY", swap to "AI Product, Data & Automation Studio", or no descriptor?
  6. **Confirm "Hiro" identity:** rebrand of myDobi? Sister-brand at Rick's `hiro.my` domain? Separate platform?
  7. **Confirm Seng Heng Shipping and Staycay** — real client work vs concept? Need briefs, screenshots/links, outcomes.
  8. **Adopt "DS Rebirth"** as the internal project codename?
  9. **90-day rollout** — feasible given current team capacity, or stretch it?
- **Implication for Phase 0 status:** with this doc, the discovery phase is essentially complete in terms of strategic input. The remaining open items above are mostly *confirmations*, not *generation*. Once Rick confirms them, the project can move into Phase 1 (Design) rapidly. `docs/roadmap.md` will likely need updating to match the 90-day rollout.

### 2026-05-16 — Round 1 strategic decisions (questionnaire)
- **Source:** chat — user answered structured questions in questionnaire mode.
- **Type:** decision
- **Summary:** Locks in 4 foundational decisions + corrects the brand color terminology.
- **Stored at:** [`docs/brief.md`](brief.md) — affected sections updated to "confirmed"; remaining items kept as `(open)`.
- **Decisions confirmed:**
  1. **Positioning:** ✅ "AI Product, Data & Automation Studio" — fully adopted. "Apps, Branding & Marketing Company" framing is retired.
  2. **Tagline:** ✅ "More than a website. A complete digital business system." Replaces MAKE. IDEAS. HAPPEN. *(Note: the rebrand doc's recommended tagline "From brand to intelligent business system." was not chosen — Rick picked the more directly "beyond the website" framing.)*
  3. **Visual direction:** ✅ Keep the established **maroon + white** brand. Rebrand doc's premium-tech palette rejected. Rationale: brand is already established; continuity preferred over refresh. **Terminology correction:** the brand color is **maroon, not raspberry** — Rick corrected my naming.
  4. **Phase-1 scope:** ✅ All 7 service pages launch together — Brand Launch · AI-Ready Website · Business Automation · Custom App · IoT · Data Intelligence · AI & Deep Learning Lab.
- **Implications:**
  - Phase-1 content load is ~12 unique pages (Home + About + Services overview + 7 service pages + Case Studies + Contact). Tightens any timeline.
  - Visual design work can start without further palette conflict.
  - The "APPS, BRANDING & MARKETING COMPANY" descriptor on the maroon lockup is now inconsistent with the new positioning — gating decision for round 2.
  - The rebrand doc's premium-tech palette section (§30.2) is now irrelevant for *this* site, but stays in the archived doc as reference.
- **Still open** → moved to round 2 questionnaire: logo descriptor, Hiro identity, languages at launch, 90-day timeline feasibility. Round 3 will cover: exact maroon hex, source vector, 2022 yellow-black collateral retention, "DS Rebirth" codename, Seng Heng / Staycay status.

### 2026-05-16 — Round 2 strategic decisions (questionnaire)
- **Source:** chat — user answered round 2 of the structured questionnaire.
- **Type:** decision
- **Summary:** Locks in 4 more decisions and clarifies the Hiro corporate structure.
- **Stored at:** [`docs/brief.md`](brief.md) (visual identity, languages, constraints sections), [`docs/clients.md`](clients.md) (Hiro row updated, open-question removed).
- **Decisions confirmed:**
  1. **Logo descriptor:** ✅ **Dropped** — the maroon lockup is just wordmark + rocket. The new positioning lives in the hero and other touchpoints, not on the logo.
  2. **Hiro identity:** ✅ **Hiro is Rick-owned, sister company to Design Space; myDobi is part of the Hiro corporate group.** Internal work — Design Space delivered the design/build for the Hiro/myDobi laundry platform. The case study presents this externally like any other client work. *Open detail:* exact ownership chain (Hiro→myDobi or sibling brands) — Rick's wording was slightly ambiguous; sanity-check in round 3.
  3. **Languages:** ✅ **EN only at launch.** ZH deferred to Phase 2+. No i18n in Phase 1.
  4. **Timeline:** ✅ **No fixed deadline.** Sustainable pace, ship when each piece is ready. The rebrand doc's 90-day rollout becomes reference, not commitment.
- **Implications:**
  - No timeline pressure + 7-pillar scope = scope/capacity tension dissolves.
  - English-only launch removes i18n complexity from Phase 1 — simpler stack/CMS choice.
  - Lockup design is simpler — no descriptor line to revise.
  - Pattern Rick is choosing: **concrete · established · ship-fast** over abstract / new / thorough. Useful framing signal for future options.
- **Still open** → round 3: Hiro/myDobi ownership chain sanity-check · 2022 yellow-black collateral retention · "DS Rebirth" codename adoption · Seng Heng / Staycay case-study status.

### 2026-05-16 — Round 3 strategic decisions (questionnaire) — Phase 0 complete
- **Source:** chat — user answered round 3 of the structured questionnaire.
- **Type:** decision
- **Summary:** Final strategic-discovery decisions. After this, Phase 0 is essentially complete; remaining items are asset/content requests, not strategic open questions.
- **Stored at:** [`docs/brief.md`](brief.md), [`docs/clients.md`](clients.md), [`docs/roadmap.md`](roadmap.md) — all updated.
- **Decisions confirmed:**
  1. **Hiro / myDobi corporate structure:** ✅ Design Space is 100% Rick-owned; **Hiro is a joint venture — Rick 50%, myDobi 50%.** So Design Space delivered the work *for* the Hiro venture. (Cleaner than my earlier "Hiro is sister to DS, myDobi sits under Hiro" interpretation — myDobi is its own separate entity that *co-owns* Hiro with Rick.)
  2. **2022 yellow-black collateral system:** ✅ Stays as **collateral-only** — used for decks, posters, print materials. **Not on the website.** The website remains clean maroon + white.
  3. **Internal codename:** ✅ **"DS Rebirth"** adopted (per rebrand doc §44).
  4. **Seng Heng Shipping + Staycay:** ✅ **Both real, ready to feature.** Briefs / screenshots / live URLs / outcomes to be provided when we build the case-study pages.
- **Phase 0 (Discovery) status: essentially complete.**
  - All strategic positioning, tagline, visual direction, scope, services, audience, languages, timeline, codename, case-study selection — locked.
  - Remaining items are **content/asset requests** from Rick, not open strategic questions:
    1. **Exact maroon hex / PMS** value (and white if off-white)
    2. **Source vector / SVG** of the maroon logo lockup
    3. **Case study briefs + assets** for Hiro, Seng Heng Shipping, Staycay, Custom Business Systems
    4. **Budget** (Phase 1 has no fixed deadline so this is less time-critical, but still useful)
- **Roadmap updated:** `docs/roadmap.md` rewritten to reflect the post-strategy plan — Phase 0 marked essentially complete; Phase 1 (Strategy + Content + Design) and beyond mapped against the rebrand doc's framework.

### 2026-05-16 — Round 4 site-structure cross-cutting decisions
- **Source:** chat — user answered the 6 cross-cutting decisions surfaced in `site-structure.md` §5.
- **Type:** decision + new project context
- **Summary:** Locks 5 of 6 cross-cutting decisions; Custom Business Systems composition pending Rick's curation. Surfaces new context: Mimo halted, X.One + Hiro + myDobi + more are the ongoing portfolio pool.
- **Stored at:** [`docs/site-structure.md`](site-structure.md) §5 (locks), [`docs/clients.md`](clients.md) (Mimo halted, Custom Business Systems composition pending).
- **Decisions:**
  1. **Hero CTAs:** ✅ Primary "Explore Services" + secondary "Book a Discovery Call" in the hero. Header CTA button stays "Start a Project" (conversion shortcut).
  2. **Email:** ✅ `hello@designspace.my` for Contact form routing and footer display.
  3. **Hiro JV publicly:** ✅ Omitted from public site (Rick delegated → my default applied).
  4. **Custom Business Systems composition:** ⏳ Pending — Rick to curate the final 3-4 projects.
  5. **Pricing visibility:** ✅ Show pricing bands on /services (default applied — Rick didn't specify; consistent with concrete/ship-fast pattern).
  6. **Case studies layout:** ✅ 4 individual pages (default applied — same reasoning).
- **New project context:**
  - **Mimo is halted.** The 2022 deck's flagship food-delivery case study is no longer a current/active reference. May be excluded from case studies entirely or reframed as past work — Rick to decide during curation.
  - **Confirmed ongoing portfolio pool:** X.One · Hiro · myDobi · plus others to surface.
- **Implications for next deliverable:** Home copy can now be drafted with locked CTA labels and email. The Custom Business Systems case study page can wait until Rick's curation arrives.

### 2026-05-16 — Tessie-inspired visual direction
- **Source:** chat — user dropped `~/Downloads/tessie-inspired-website-prompt.md` and said "this is what i want the website look like, refer to the https://www.tessie.com/ website".
- **Type:** visual direction + design spec
- **Summary:** Sets the website's visual + interaction language as **Tessie-inspired dark theme with maroon as the singular accent**. Resolves apparent conflict with the earlier "maroon + white" decision: maroon is preserved as the canonical brand color but used sparingly as the Tessie-style ONE accent; the dominant surface is near-black (`#0A0A0B`).
- **Stored at:**
  - Raw artifact → [`docs/assets/tessie-inspired-website-prompt.md`](assets/tessie-inspired-website-prompt.md)
  - Design specs → [`docs/design-system.md`](design-system.md) (new file — colors, typography, spacing, motion, components, hero patterns)
  - Brief visual section → [`docs/brief.md`](brief.md) (Web aesthetic subsection rewritten)
  - Page structures → [`docs/site-structure.md`](site-structure.md) (Home gained a Stats bar + Testimonials section; component inventory updated with `<StatsBar>`, `<AlternatingFeatureSection>`, `<AmbientGlow>`, `<TestimonialCard>` promoted to required, etc.)
- **Key visual locks (per the Tessie reference + design-system.md):**
  - Base background: near-black `#0A0A0B`; surface `#16171A`
  - Text: near-white `#F5F5F7`; body muted grey `#9A9AA0`
  - Hairline borders `rgba(255,255,255,0.06–0.10)` on cards/dividers
  - Modern geometric sans-serif (Inter / Geist / Söhne)
  - Hero headline 64–96px, generous 120–160px section padding
  - Sticky nav: transparent over hero → dark blurred bar on scroll
  - Subtle motion: fade-up scroll entries, count-up stat numbers, hover lift + accent glow
  - Maroon used **only** on CTAs, key numbers, hover states, hero ambient glow — never as a section wash
- **Home page got a structural update:** added a Stats bar (3 count-up metrics) and a Testimonials + Logo wall credibility section. Removed the standalone "Why Design Space" section — its messaging is now embedded in hero copy + Digital Loop framing + case-study positioning (Tessie-style restraint).
- **Implications for the still-outstanding maroon hex:** this is now even more time-critical. Without it, every CTA, key stat, hover state, and ambient glow is a placeholder. Same for the logo SVG (it appears in nav + hero + footer + ambient-glow halo).

### 2026-05-16 — Session paused; state preserved for restart
- **Source:** chat — user signaling intent to clear the session and pick up later.
- **Type:** session-marker
- **Summary:** All session work preserved across the docs. `README.md` promoted to a comprehensive entry-point synthesis. `decisions.md` populated with the full ADR-lite log of all major decisions (extracted from this file's chronological entries).
- **State snapshot:**
  - **Phase 0 (Discovery):** ✅ complete
  - **Phase 1 (Strategy + Content + Design):** in progress — site-structure + design-system delivered; **Home copy is the next deliverable**
  - **All strategic decisions locked**, recorded in `decisions.md`
  - **5 outstanding items** (all asset/content requests, not strategic gaps):
    1. Exact maroon hex / PMS
    2. Logo vector / SVG
    3. Custom Business Systems case-study composition (Rick to curate)
    4. Case study briefs + assets for Hiro / Seng Heng Shipping / Staycay
    5. Budget indication (not time-critical)
- **For the next session — read in this order:**
  1. `README.md` for the synthesis
  2. `docs/brief.md` for full strategic context
  3. `docs/decisions.md` for the ADR-lite log
  4. `docs/site-structure.md` + `docs/design-system.md` if jumping into Phase-1 design/content work
  5. This file (`inputs.md`) for the chronological narrative if needed
