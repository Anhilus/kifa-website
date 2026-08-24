# KIFA website — handoff for a new session

## Project

Building a premium heritage website for **KIFA**, Indian made-to-measure menswear.
Working directory: `D:\kifa website`. Git repo, pushed to
`https://github.com/Anhilus/kifa-website` (public), served by GitHub Pages at
`https://anhilus.github.io/kifa-website/`. The brand-book .docx is gitignored on purpose.

Source of truth: `kifa-brand-guidelines-v0.1.docx` in the project root — a real brand
book (colour, typography, wordmark spec, photography rules, layout rules, voice rules).
Read it first; everything below traces back to it.

## Key tension to know about

The brand book **bans the usual "royal" playbook**. Section 03 lists as NEVER:
"Step into royalty", "Regal elegance", "Majestic", "Exquisite" — plus gold gradients,
metallic fills, shadows, bevels, centred type, and dense layouts ("density reads as
discount"). The user asked for a site that looks royal/premium/mind-blowing; that was
delivered through restraint, materiality and countable numbers rather than ornament.
The user was told this explicitly and accepted it.

## Decisions already made (do not re-ask)

- 6 static pages, no framework, no build step, no CDN, no npm
- Motion is one fade, hand-written. No library was ever needed and none is wanted
- No photography exists; all imagery is SVG line-work drawn in code
- Nastaliq used ceremonially, on fabric bolt names only
- Menswear only, no bridal
- Fitting-request form → WhatsApp deep link, no cart
- Full brand-voice copy written, all invented facts logged in `PLACEHOLDERS.md`
- Shop is in **Delhi** (Katra Neel, Chandni Chowk, 110006) — was Hyderabad early on,
  corrected later. `SITE.city` drives every mention.

## Files

```
index.html              Home — the still opening, then the garment x ground row
made-to-measure.html    Five-step process, static rail
collection.html         9 garments, filterable
fabric.html             Fabric library + garment x ground table
workshop.html           Story, craft proof, named grooms
fitting.html            Measurement card form

assets/css/kifa.css        tokens, grounds, type scale, the one reveal, nav
assets/css/components.css  opening, rules row, plates, count, sequence, bolts, card, footer
assets/js/site.js          ALL CONTENT — one file, edit here
assets/js/art.js           wordmark + every drawing
assets/js/blocks.js        repeated markup builders
assets/js/kifa.js          behaviour (nav/footer injection, opening, reveal, filters, form)

README.md            architecture + how brand rules are enforced
PLACEHOLDERS.md      every unverified claim on the site
.claude/launch.json  dev server config, port 8123
```

Nav and footer are injected by `kifa.js` so pages cannot drift. Page-specific rendering
lives in a `PAGE()` function inside each HTML file, called on boot.

## The landing page ("the opening")

Rebuilt again after client review — see `docs/superpowers/specs/2026-08-23-quiet-motion-design.md`.
The client read the previous build as "too animated and childish". The scroll-driven
stage is gone.

- `.opening` is one ordinary section, `min-height:92svh`, that scrolls normally. One
  garment (Noor sherwani, ivory line-work on indigo — the hero combination), held still,
  at `min(54vh,540px)`. Buttonholes are present from first paint, drawn in brass as
  hardware. The count is stated in the margin as type: `11 · buttonholes, all cut by hand`.
- The four garment × ground rules that the old hero cycled through are now a still
  four-up row further down the home page (`.rules`, built by `ruleCellHTML()` in
  `blocks.js`, still fed from `SITE.stage`).
- Removed entirely: `stage()`, `drawIn()`, `countUp()` animation, `chalkTrail()`,
  `tape()`, `pageWipe()`, `stagger()`, `sequence()`, `overture()`, and the custom
  chalk-tick cursors. `kifa.js` went from 481 lines to 224.
- Reveals: five `data-rv` variants collapsed to one `.rv` fade-up, 520ms. The
  `data-rv`/`data-stagger` attributes are gone from every page.
- `--t-hook` was stepped down from `clamp(3.1rem,8.4vw,8.6rem)` to
  `clamp(2.9rem,6.4vw,6.4rem)`: at 8.4vw a long word ("measurements.") overran its
  column and collided with the copy beside it.
- Naming: the landing block is `.opening`. `.hero` is the interior-page masthead and
  `.plate` is the garment card — both already existed, do not reuse either name.

## Gotchas learned the hard way

1. **`clip-path` breaks IntersectionObserver in Chrome** — a clipped element reports
   `intersectionRatio: 0` and can never reveal itself. The reveal now uses opacity and
   transform only, which sidesteps this permanently. Do not reintroduce clipping there.
2. **`grid-column: span N` + `grid-column-start: M` conflict** — the shorthand sets end
   to auto. Columns use `grid-column-end: span N` with a separate `start-*` class.
3. **`const SITE` is not on `window`** — guard with `typeof SITE === 'undefined'`, never
   `window.SITE`.
4. **Browser caches JS/CSS hard** on `python -m http.server`. `window.KIFA_BUILD` in
   `kifa.js` is a staleness marker; bump it when behaviour changes. Hard-refresh when
   testing.
5. When the Browser pane is hidden, **rAF and scroll events do not fire**, and
   `computer{action:"screenshot"}` times out because the page is not compositing. Use
   Playwright (installed) against the dev server for screenshots instead.
6. Bash heredocs choke on some of this content; use the Write/Edit tools or a Python
   script file for large CSS/JS blocks.

## Running it

```bash
cd "D:/kifa website" && python -m http.server 8123
```

Then `http://localhost:8123`. Or use the Browser pane: `preview_start` with name `kifa`.

## Photography

Every image in `assets/img/` is free-licensed stock standing in for a real shoot. Wiring is
by filename: each collection record has an `img` field, craft shots come from the shared
`SITE.photo` map keyed by drawing name, and anything without a photo falls back to the
line-work in `art.js`. Dropping real files over the same names updates the site with no
code change. `PLACEHOLDERS.md` lists all 28 files with sources.

The garment x ground row on the home page stays drawn deliberately — it teaches the
photography rule, and a stock photo's own background contradicts the caption next to it.

Groom records use garment-only photographs. Do not put a stock face beside an invented
testimonial.

## Open threads

- Live URL is up and verified: all images load, no console errors, no failed requests.
- The client has not yet seen the quiet build. Screenshots exist for all six pages at
  1440x900 and 375x812, console clean, `prefers-reduced-motion` renders complete.
- The phone opening no longer fits one screen (garment 36vh plus the copy stack runs to
  about 1090px at 375x812). That is intentional now — the page scrolls normally — but if
  the client wants the call to action above the fold on a phone, the body paragraph or
  the secondary link is what goes.
- Still unanswered by the client: real phone/email/hours, real prices, real groom stories
  with signed releases, Urdu spelling review. See `PLACEHOLDERS.md`.
- `C:` is full (under 1 MB free) on this machine; bash pipes fail with
  "No space left on device". Nothing to do with the site, but it breaks tooling.
- Caveman plugin statusline setup was offered and never answered.
