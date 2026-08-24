# KIFA — website

Built to `kifa-brand-guidelines-v0.1.docx`. No framework, no build step, no CDN
dependency, no npm. Open `index.html` in a browser and it runs.

For local development with correct paths:

```bash
python -m http.server 8123
```

Then open `http://localhost:8123`.

---

## Files

```
index.html              Home
made-to-measure.html    The five-step process
collection.html         Garments, filterable
fabric.html             The fabric library and the garment × ground table
workshop.html           Story, craft proof, named grooms
fitting.html            The measurement card

assets/css/kifa.css       tokens, grounds, type scale, motion, nav, tape
assets/css/components.css plates, count, sequence, bolts, card, footer

assets/js/site.js       ALL CONTENT. Edit here, it changes everywhere.
assets/js/art.js        wordmark + every drawing (garments, craft macros)
assets/js/blocks.js     repeated markup: plate, bolt row, groom record
assets/js/kifa.js       behaviour: chrome, overture, reveals, tape, filters, form

PLACEHOLDERS.md         every claim on the site that is not yet verified
```

Nav and footer are injected by `kifa.js` so six pages cannot drift apart. Page-specific
rendering lives in a `PAGE()` function inside each HTML file, called on boot.

---

## How the brand book is enforced in code

**05 Colour.** Five tokens, four jobs. Brass is never a fill — it appears only as
hairlines, small caps type and the tick. Madder is never a background; it is available
as `.alert` for limited-slot messaging only. Indigo is treated as environment, chalk as
the light ground, iron as the pastel ground.

**06 Typography.** Archivo for structure, Lora italic for the human voice. The tracking
values are the document's: hook −3.5%, subhead −2%, eyebrow +22%, spec +2%. Left
aligned everywhere. No third Latin typeface. Mukta carries Devanagari garment names;
Noto Nastaliq Urdu appears only on fabric bolt names.

**07 Photography.** No photographs exist. Each garment is drawn line-work placed on the
ground the garment × ground table assigns to its colour family — ivory on indigo, navy
on chalk, pastels on iron, zari on indigo. `blocks.js` looks the ground up from the
garment record, so a page cannot put a navy bandhgala on indigo by accident.

**08 Layout.** Margin is 6% of viewport width. One alignment per composition. The brass
hairline is the only decorative element on the site. Negative space is generous on
purpose — density reads as discount.

**04 Wordmark.** Drawn as SVG paths from the written spec: flat apex at 8% of cap
height, tick skewed 14° at 16% cap height set off by half its own width, tracking cut
to make four letters read as one object. Minimum size is respected — pass
`ART.wordmark({tick:false})` below 22px.

---

## Motion

There is one piece of motion on this site. A block fades up — opacity plus eight
pixels — once, as it first comes into view, on `cubic-bezier(.16,1,.3,1)`. That is
the whole vocabulary.

Nothing is driven by scroll position. Nothing draws itself on. Nothing follows the
cursor. Numbers render final and correct on first paint rather than counting up. The
landing page is a still composition — one garment, one ground, at rest — and it scrolls
like any other page.

This is deliberate and it is a reversal. An earlier build carried a scroll-driven
four-state hero, self-drawing SVG paths, counting tallies, a chalk-dust cursor trail, a
tape-measure scroll rail and an angled page-transition wipe. Reviewed together they read
as an animated explainer rather than a tailoring house, and they were removed. What
carries the premium claim now is scale, negative space and the copy — which is what the
brand book asked for in sections 03 and 08, and what the reference houses actually ship.

`prefers-reduced-motion: reduce` removes the fade as well; the site renders complete and
static.

Masks and clip-paths are avoided in the reveal entirely. Chrome folds `clip-path` into
IntersectionObserver geometry, so a clipped element can never observe itself into view.

## Photography

Photographs live in `assets/img/` and are wired by filename, never by markup. Each garment
record in `assets/js/site.js` carries an `img` field; craft and proof shots come from the
shared `SITE.photo` map, keyed by the drawing name they replace. A record with no photo
falls back to the drawn line-work in `art.js`, so the site can never render an empty frame.

To swap in the real shoot, drop files over the existing names in `assets/img/`. No code
changes, no markup changes.

**Every image currently in the repository is free-licensed stock, not KIFA product.**
`PLACEHOLDERS.md` lists each file, its source and what it stands in for, along with the
three conditions that must be met before launch.

One section stays drawn on purpose: the garment x ground row on the home page. It states
the photography rule itself — ivory on indigo, navy on chalk, pastels on iron, zari on
indigo — and a stock photograph carries its own background, which would contradict the
caption beside it.

## Accessibility

Skip link, visible brass focus rings, `aria-current` on the active nav item, real
`<label>` on every field, `aria-pressed` on the collection filters, and colour contrast
that holds on all three grounds. The custom tick cursor is disabled on touch devices.

---

## Before this goes live

Read `PLACEHOLDERS.md`. Every number, name, price and address on the site is currently
an assumption, and two of them (named grooms, Nastaliq spellings) need sign-off rather
than editing.
