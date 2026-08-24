# KIFA — quiet mode

**Date:** 2026-08-23
**Status:** approved, ready for implementation
**Trigger:** client review of the built site — "too animated and childish", while asking that
the premium and classy feel be kept.

---

## The problem

The site currently carries six separate motion vocabularies: a scroll-driven four-state hero,
SVG paths that stroke themselves on, numbers that count up, a chalk-dust cursor trail, a
skeuomorphic tape-measure scroll rail, and an angled page-transition wipe. Each was defensible
alone. Together they read as an explainer animation rather than a tailoring house.

The brand book already argued for the opposite and this document does not contradict it —
section 08 says density reads as discount and that negative space is usually correct; section 03
says numbers over adjectives, stated plainly. The motion layer drifted away from both.

## What the reference houses actually do

Researched against how the top houses present themselves online:

- **Zara** — near-empty homepage. No promotional banners, no desktop sidebar filters. Large
  editorial images linking straight into categories; the page reads closer to a magazine than
  a store.
- **Gucci** — gallery-like, full-width campaign imagery on every landing page, a serif for
  headlines and a plain sans for body, with strict information architecture underneath.
- **Hermès** — paced deliberately, product-true, unwilling to shout. All-caps monotype
  (Orator) for structure, neutral palette, video given real controls rather than autoplay
  theatre.
- **Loro Piana** — sells fibre and finish; the site's job is to make touch imaginable, so
  material and place carry the page.
- **The Row** — reduced, "light on gimmicks", silence used as the expensive signal.

None of them animate the hero on scroll. Scrolljacking is treated across current usability
writing as a defect rather than a premium cue: it disorients, it delays content, and it
damages brand perception when it has no informational purpose.

**Conclusion for KIFA:** premium is carried by scale, pacing and negative space. Motion earns
its place only where it clarifies. Everything else is subtracted.

## Design

### 1 · The hero becomes a still plate

- `#stagewrap` stops being a 300vh scroll wrapper with a sticky stage. It becomes one ordinary
  section, roughly 92svh tall, that scrolls like any other.
- No scroll listener, no state cycling, no ground flipping, no 14° mask wipe, no self-drawing
  paths, no counting tally.
- The Noor sherwani is drawn once, static, ivory line-work on indigo — the hero combination in
  the garment × ground table — at roughly 1.6× its current size (cap raised from `38vh` to
  about `62vh`). Buttonholes are present from first paint.
- Copy is unchanged in wording: eyebrow, hairline, hook, voice line, body, primary button plus
  one quiet underlined link.
- The tally becomes static type in the margin: `11 · buttonholes, all cut by hand`.
- The foot keeps one line naming the rule and the cloth. The `01 / 04` index and the tick pager
  are removed — there is nothing left to page through.
- Arrival: one fade of the whole composition (opacity, 500ms, `cubic-bezier(.16,1,.3,1)`).
  Nothing is staggered.

### 2 · The garment × ground rules move down the page

The four states existed to teach the photography rule. They become a still four-up row further
down the home page: each cell shows the garment on its correct ground with the rule named
beneath it. Data still comes from `SITE.stage`, so nothing is duplicated and the client can edit
one array.

### 3 · One reveal, not five

`data-rv` currently resolves to five behaviours — `wipe`, `plate`, `lift`, `rule`, `fade` — plus
`data-stagger` cascades that delay children individually. All collapse into a single fade-up:
opacity `0 → 1` and `translateY(8px) → 0` over 520ms on `cubic-bezier(.16,1,.3,1)`, applied per
block rather than per element. The `.rv` attribute stays in the markup so six pages do not have
to be rewritten; the values simply stop meaning different things.

Reveals continue to use `mask-image` free geometry — the fade needs no clipping at all, which
also permanently sidesteps the Chrome `clip-path` / IntersectionObserver defect recorded in
HANDOFF.md.

### 4 · Removed outright

| Removed | Why |
|---|---|
| `chalkTrail()` | Cursor toy. No house does this. |
| `tape()` | Decorative scroll progress; skeuomorphic ruler and running number. |
| `pageWipe()` | Delays every internal navigation and carries no information. |
| `countUp()` animation | Numbers stay — they are the brand voice — but render final and correct. |
| `stagger()` | Cascade delays; replaced by one block-level fade. |
| `drawIn()` | Self-drawing SVG is the single strongest "animated explainer" cue. |
| `overture()` | Dead code, already unused. |
| `sequence()` scroll-swapping | The made-to-measure rail renders all five steps at once. |

### 5 · Held constant

Colour: indigo `#16263D`, chalk `#EDE6D8`, brass `#A8843C`, madder `#8C2F27`, iron `#3D4550`,
in their existing four jobs. Brass remains hairlines, small caps and hardware — never a fill.
Typography, the four tracking values, the 6% margin, left alignment, and the garment × ground
assignments are untouched. Section padding rises about 20%: the room the motion occupied becomes
real negative space.

## Success criteria

1. No scroll-driven animation anywhere on the site except the single arrival fade.
2. Home page hero is one screen, scrolls normally, garment noticeably larger than before.
3. Every colour, type size, tracking value and ground assignment identical to before.
4. All six pages render with zero console errors at 1440×900 and 375×812.
5. `prefers-reduced-motion: reduce` continues to render the site complete and static.

## Risks

- The site loses its most distinctive moment. Afterwards, scale, silence and copy carry the
  premium claim. This is what the reference houses do and what the brand book asked for, but it
  is a quieter first impression than the version the client reviewed.
- The home page becomes shorter once 300vh of hero disappears; the padding increase and the new
  garment × ground row are what keep it from feeling abrupt.
