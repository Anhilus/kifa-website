# KIFA Quiet Mode Implementation Plan

> **For agentic workers:** Steps use checkbox (`- [ ]`) syntax for tracking. This is a static
> site with no test runner, no build step and no git repository. "Verification" therefore means
> running the Playwright measurement and screenshot scripts named in each task and reading the
> output, not `pytest`. There is nothing to commit to.

**Goal:** Strip the site's six motion vocabularies down to one quiet arrival fade, turn the
scroll-driven hero into a still plate, and spend the reclaimed attention on scale and negative
space — without touching a single colour, type size, tracking value or ground assignment.

**Architecture:** Behaviour lives in `assets/js/kifa.js` (one IIFE, functions called from
`boot()`). Presentation is split between `assets/css/kifa.css` (tokens, type, nav, reveals) and
`assets/css/components.css` (page-level components including the stage). Content is in
`assets/js/site.js`. Removing motion means deleting whole functions from `boot()`, collapsing
five reveal variants into one, and rewriting the `.stage` block as a static `.plate` block.

**Tech Stack:** Vanilla ES2015+, hand-written CSS, no framework, no build. Verification via
Python Playwright (already installed) against `python -m http.server 8123`.

---

## File Structure

| File | Responsibility after this change |
|---|---|
| `assets/js/kifa.js` | Nav chrome + ground detection, one reveal observer, collection filters, fitting form. Nothing scroll-animated. |
| `assets/css/kifa.css` | Tokens, type, nav, one reveal rule. Tape / overture / page-wipe blocks deleted. |
| `assets/css/components.css` | `.plate` (the still hero) replaces `.stage*`; new `.rules` row; section padding raised. |
| `index.html` | Hero markup simplified; garment × ground row added; `PAGE()` renders both. |
| `made-to-measure.html` | Each step carries its own drawing; rail becomes static. |
| `assets/js/site.js` | Unchanged — `SITE.stage` still feeds the rules row. |
| `assets/js/art.js` | Unchanged. |
| `assets/js/blocks.js` | Gains one builder: `ruleCellHTML()`. |

---

### Task 1: Delete the gimmick behaviours from `kifa.js`

**Files:**
- Modify: `assets/js/kifa.js`

- [ ] **Step 1: Delete whole functions**

Remove these function definitions entirely: `overture()`, `stagger()`, `tape()`, `pageWipe()`,
`chalkTrail()`, `sequence()`, `drawIn()`, and the `countTo` helper nested inside `stage()`.

- [ ] **Step 2: Replace `boot()`**

```js
  const boot = () => {
    chromeMount();
    if (typeof PAGE === 'function') PAGE();   /* page-specific render */
    reveals();
    navState();
    filters();
    fittingForm();
    plate();
    numbers();
  };
```

- [ ] **Step 3: Replace `countUp()` with `numbers()`**

Numbers stay — they are the brand voice — but they render final and correct, never ticking.

```js
  /* numbers render final and correct — the count is the claim, not the animation */
  const numbers = () => {
    $$('[data-count]').forEach(el => { el.textContent = el.dataset.count; });
  };
```

- [ ] **Step 4: Verify no dangling references**

Run:

```bash
cd "D:/kifa website" && grep -n "overture\|stagger\|tape(\|pageWipe\|chalkTrail\|sequence(\|drawIn\|countUp\|countTo" assets/js/kifa.js
```

Expected: no output.

---

### Task 2: Turn `stage()` into `plate()`

**Files:**
- Modify: `assets/js/kifa.js`

- [ ] **Step 1: Replace the whole `stage()` function**

```js
  /* ---------- the plate: one garment, one ground, no motion ------ */
  const plate = () => {
    const fig = $('#plateart');
    if (!fig || typeof SITE === 'undefined' || !SITE.stage) return;
    const s = SITE.stage[0];                 /* ivory on indigo — the hero combination */
    fig.innerHTML = ART.garment[s.art]();
    const rule = $('#platerule'), spec = $('#platespec'), tally = $('#platetally');
    if (rule) rule.textContent = s.rule;
    if (spec) spec.textContent = s.spec;
    if (tally) tally.innerHTML =
      `<span class="plate__n">${s.n}</span><span class="plate__nl">${s.nl}</span>`;
  };
```

- [ ] **Step 2: Delete `GROUND_HEX`**

It existed only to flip the stage ground. Remove the constant.

- [ ] **Step 3: Verify**

```bash
cd "D:/kifa website" && grep -n "GROUND_HEX\|stagewrap\|stagebgtop" assets/js/kifa.js
```

Expected: no output.

---

### Task 3: Collapse five reveals into one

**Files:**
- Modify: `assets/css/kifa.css:269-300`

- [ ] **Step 1: Replace the whole `.rv` block**

```css
/* --- 09 · THE ONE REVEAL ----------------------------------
   Everything arrives the same quiet way: a short fade with a
   small lift. No wipes, no cascades, no per-element delays. */
.rv{opacity:0;transform:translateY(8px);transition:opacity 520ms var(--cut),transform 520ms var(--cut)}
.rv.is-in{opacity:1;transform:none}
```

- [ ] **Step 2: Delete the tape, overture and page-wipe blocks**

Delete `.tape*`, `.overture*`, `.wipe-page` rules and their `body.on-chalk` variants, and the
`.overture`/`.wipe-page` lines inside the `prefers-reduced-motion` block.

- [ ] **Step 3: Keep the reduced-motion guard**

```css
@media (prefers-reduced-motion:reduce){
  .rv,.rv.is-in{opacity:1;transform:none;transition:none}
}
```

- [ ] **Step 4: Verify**

```bash
cd "D:/kifa website" && grep -rn "data-rv\|tape__\|wipe-page\|overture" assets/css/
```

Expected: no output.

---

### Task 4: Rewrite the stage CSS as plate CSS

**Files:**
- Modify: `assets/css/components.css:212-367`

- [ ] **Step 1: Replace the stage block**

```css
/* ============================================================
   THE PLATE — the landing composition. One garment, one ground,
   held still. Section 07's hero combination: ivory on indigo.
   ============================================================ */
.plate{position:relative;min-height:92svh;display:flex;align-items:center;overflow:hidden}
.plate__grid{
  display:grid;grid-template-columns:repeat(12,minmax(0,1fr));
  gap:clamp(24px,3vw,56px);align-items:center;width:100%;
}
.plate__copy{grid-column:1/span 5;display:flex;flex-direction:column;gap:clamp(18px,2.2vw,30px)}
.plate__figure{grid-column:7/span 6;display:flex;justify-content:center;align-items:flex-end;gap:clamp(20px,2.6vw,40px)}
.plate__art{flex:none}
.plate__art svg{height:min(62vh,620px);width:auto;color:var(--chalk)}
.plate__art .bh{stroke:var(--brass)}
.plate__tally{display:flex;flex-direction:column;gap:8px;padding-bottom:clamp(8px,2vh,28px)}
.plate__n{
  font-family:var(--sans);font-weight:800;letter-spacing:var(--tr-hook);
  font-size:clamp(2rem,3.2vw,3.2rem);line-height:.82;color:var(--brass);
  font-variant-numeric:tabular-nums;
}
.plate__nl{
  font-family:var(--sans);font-weight:600;font-size:.66rem;letter-spacing:var(--tr-eye);
  text-transform:uppercase;line-height:1.5;opacity:.72;
}
.plate__foot{
  position:absolute;left:var(--margin);right:var(--margin);bottom:clamp(24px,4vh,48px);
  display:flex;flex-direction:column;gap:10px;
}
.plate__ruleline{height:var(--rule);background:var(--brass);width:clamp(48px,7vw,96px)}
.plate__ruletext{
  font-family:var(--sans);font-weight:600;font-size:var(--t-eyebrow);
  letter-spacing:var(--tr-eye);text-transform:uppercase;
}
@media (max-width:1080px){
  .plate{min-height:0;padding-block:clamp(96px,14vh,150px) clamp(56px,8vh,96px)}
  .plate__grid{grid-template-columns:1fr;gap:clamp(28px,5vh,48px)}
  .plate__copy,.plate__figure{grid-column:1/-1}
  .plate__figure{justify-content:flex-start}
  .plate__art svg{height:min(34vh,300px)}
  .plate__foot{position:static;margin-top:clamp(28px,5vh,44px)}
}
```

- [ ] **Step 2: Delete every `.stage*`, `.tally*` and `.dust` rule**

- [ ] **Step 3: Verify**

```bash
cd "D:/kifa website" && grep -rn "\.stage\|\.tally\|\.dust" assets/css/ index.html
```

Expected: no output.

---

### Task 5: Rewrite the hero markup

**Files:**
- Modify: `index.html:19-71`

- [ ] **Step 1: Replace the whole `<section class="stage-wrap">` with**

```html
  <!-- 01 · THE PLATE
       One garment, one ground, held still. Ivory on indigo is the
       hero combination in the garment x ground table, section 07. -->
  <section class="plate ground g-indigo wrap" data-ground="indigo">
    <div class="plate__grid">
      <div class="plate__copy">
        <p class="eyebrow rv"><span class="tick"></span><span id="plateeyebrow">Made to measure</span></p>
        <div class="hairline hairline--short rv"></div>
        <h1 class="hook rv">Cut for<br>one person.</h1>
        <p class="voice muted rv" style="max-width:30ch">
          Forty years, one street, one measuring tape.
        </p>
        <p class="body rv">
          Chosen from the bolt, cut to your measurements, finished by hand in our workshop.
          Where the national chains sell you a size, we cut a sherwani to one body.
        </p>
        <div class="flexrow rv">
          <a class="btn" href="fitting.html"><span class="tick"></span>Book a fitting</a>
          <a class="link-u" href="made-to-measure.html">See how it is cut</a>
        </div>
      </div>

      <div class="plate__figure rv">
        <div class="plate__art" id="plateart"></div>
        <p class="plate__tally" id="platetally"></p>
      </div>
    </div>

    <div class="plate__foot rv">
      <span class="plate__ruleline"></span>
      <span class="plate__ruletext" id="platerule"></span>
      <span class="spec muted" id="platespec"></span>
    </div>
  </section>
```

- [ ] **Step 2: Update `PAGE()`**

Change `$('#stageeyebrow')` to `$('#plateeyebrow')`.

- [ ] **Step 3: Strip `data-rv` and inline `--d` delays from the whole file**

```bash
cd "D:/kifa website" && python - <<'PY'
import re, pathlib
for p in pathlib.Path('.').glob('*.html'):
    t = p.read_text(encoding='utf8')
    t = re.sub(r'\s+data-rv="[a-z]+"', '', t)
    t = re.sub(r'\s*style="--d:\d+ms"', '', t)
    t = re.sub(r'--d:\d+ms;', '', t)
    t = re.sub(r'\s+data-stagger="\d+"', '', t)
    p.write_text(t, encoding='utf8')
print('done')
PY
```

- [ ] **Step 4: Verify**

```bash
cd "D:/kifa website" && grep -rn "data-rv\|data-stagger\|--d:" *.html
```

Expected: no output.

---

### Task 6: Add the garment × ground row

**Files:**
- Modify: `assets/js/blocks.js`, `index.html`

- [ ] **Step 1: Add the builder to `blocks.js`**

```js
/* one cell of the garment x ground row: the rule, stated once, held still */
function ruleCellHTML(s) {
  return `
  <figure class="rules__cell rv">
    <div class="rules__field g-${s.ground}${s.zari ? ' has-zari' : ''}">
      ${ART.garment[s.art]()}
    </div>
    <figcaption class="mt-m">
      <p class="eyebrow"><span class="tick"></span>${s.rule}</p>
      <p class="spec muted mt-s">${s.spec}</p>
    </figcaption>
  </figure>`;
}
```

- [ ] **Step 2: Add the CSS to `components.css`**

```css
/* the garment x ground rule, shown as four still plates */
.rules{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:clamp(18px,2.4vw,40px)}
.rules__field{
  aspect-ratio:4/5;display:flex;align-items:center;justify-content:center;
  padding:clamp(18px,2.4vw,36px);
}
.rules__field svg{height:100%;width:auto}
.rules__field.g-indigo svg{color:var(--chalk)}
.rules__field.g-chalk  svg{color:var(--indigo)}
.rules__field.g-iron   svg{color:var(--chalk)}
.rules__field.has-zari svg{color:var(--brass)}
.rules__field .bh{stroke:var(--brass)}
@media (max-width:900px){.rules{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media (max-width:520px){.rules{grid-template-columns:1fr}}
```

- [ ] **Step 3: Insert the section into `index.html` directly after section 02 (the count)**

```html
  <!-- 03 · THE RULE — garment x ground, stated rather than performed -->
  <section class="section ground g-indigo wrap" data-ground="indigo">
    <div class="grid g-12">
      <div class="col-6">
        <p class="eyebrow rv"><span class="tick"></span>Garment and ground</p>
        <div class="hairline hairline--short rv mt-s"></div>
        <h2 class="hook hook--s rv mt-m">Every cloth<br>has its field.</h2>
      </div>
      <div class="col-5 start-8" style="align-self:end">
        <p class="body muted rv">
          Ivory reads brightest on indigo. Navy disappears on it. Pastels need iron, and
          zari only reads as metal against the dark. Four rules, kept on every page.
        </p>
      </div>
    </div>
    <div class="rules mt-xl" id="rules"></div>
  </section>
```

- [ ] **Step 4: Render it in `PAGE()`**

```js
  $('#rules').innerHTML = SITE.stage.map(ruleCellHTML).join('');
```

- [ ] **Step 5: Verify**

```bash
cd "D:/kifa website" && python -c "
from playwright.sync_api import sync_playwright
with sync_playwright() as p:
    b=p.chromium.launch(); pg=b.new_page(viewport={'width':1440,'height':900})
    pg.goto('http://localhost:8123/index.html'); pg.wait_for_timeout(1500)
    print('cells:', pg.locator('.rules__cell').count())
    b.close()"
```

Expected: `cells: 4`

---

### Task 7: Make the made-to-measure rail static

**Files:**
- Modify: `made-to-measure.html`

- [ ] **Step 1: Replace the rail markup**

```html
      <aside class="seq__rail">
        <p class="eyebrow brass"><span class="tick"></span>The five steps</p>
        <div class="hairline mt-m"></div>
        <p class="spec muted mt-l">Four to six weeks &middot; three fittings &middot; one cutter</p>
      </aside>
```

- [ ] **Step 2: Give each step its own drawing in `PAGE()`**

```js
  $('#steps').innerHTML = SITE.steps.map((s,i) => `
    <li class="seq__step rv" data-i="${i}">
      <p class="seq__no">${s.no}</p>
      <h2 class="subhead mt-m">${s.t}</h2>
      <p class="eyebrow mt-m"><span class="tick"></span>${s.spec}</p>
      <p class="body muted mt-m">${s.body}</p>
      <div class="seq__art mt-l">${ART.proof[s.art]()}</div>
    </li>`).join('');
```

- [ ] **Step 3: Delete the rail seeding lines**

Remove the two lines that set `#railart` and `#railcap`.

- [ ] **Step 4: Add the step-art CSS to `components.css`**

```css
.seq__art{max-width:min(320px,60%)}
.seq__art svg{width:100%;height:auto;color:var(--brass);opacity:.85}
```

- [ ] **Step 5: Delete the `.seq__step.is-live` dimming rules from `components.css`**

Every step now reads at full strength; nothing is dimmed waiting its turn.

- [ ] **Step 6: Verify**

```bash
cd "D:/kifa website" && grep -rn "railart\|railcap\|railno\|is-live" *.html assets/
```

Expected: no output.

---

### Task 8: Raise the negative space

**Files:**
- Modify: `assets/css/kifa.css` (the `.section` padding tokens)

- [ ] **Step 1: Raise section padding roughly 20%**

Find the `.section` / `.section--tall` / `.section--tight` padding declarations and multiply the
clamp bounds by about 1.2, keeping the same shape, e.g.
`padding-block:clamp(72px,9vw,150px)` becomes `padding-block:clamp(86px,11vw,180px)`.

- [ ] **Step 2: Verify the home page got longer, not shorter, per section**

```bash
cd "D:/kifa website" && python -c "
from playwright.sync_api import sync_playwright
with sync_playwright() as p:
    b=p.chromium.launch(); pg=b.new_page(viewport={'width':1440,'height':900})
    pg.goto('http://localhost:8123/index.html'); pg.wait_for_timeout(1500)
    print('doc height:', pg.evaluate('document.body.scrollHeight'))
    b.close()"
```

Expected: a number well under the old height (the 300vh hero is gone) but with each section
visibly taller than before.

---

### Task 9: Full verification sweep

**Files:**
- Create: scratchpad script only — nothing in the project

- [ ] **Step 1: Screenshot all six pages at 1440×900 and 375×812, collecting console errors**

- [ ] **Step 2: Assert no scroll listeners animate anything**

```bash
cd "D:/kifa website" && grep -n "addEventListener('scroll'" assets/js/kifa.js
```

Expected: exactly one hit, inside `navState()` (ground colour detection, not animation).

- [ ] **Step 3: Check `prefers-reduced-motion` renders complete**

Launch a Playwright context with `reduced_motion="reduce"`, load every page, assert no element
still carries `opacity: 0`.

- [ ] **Step 4: Confirm the palette did not move**

```bash
cd "D:/kifa website" && grep -n "16263D\|EDE6D8\|A8843C\|8C2F27\|3D4550" assets/css/kifa.css
```

Expected: the same five tokens, unchanged.

- [ ] **Step 5: Update `README.md` and `HANDOFF.md`**

Rewrite the Motion sections to describe one reveal and a still plate; record that the stage,
tape, chalk trail, page wipe, count-ups and self-drawing SVG were removed on client feedback,
and bump `window.KIFA_BUILD` to 5.
