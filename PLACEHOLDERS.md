# PLACEHOLDERS — what on this site is not yet true

The brand guidelines are v0.1 and explicitly unvalidated. This site is built to that
document, which means it inherits every open question in it. Nothing below is a bug;
each item is a fact the site is currently *asserting* that the client has not yet
confirmed. Replace them before the site goes public.

Almost everything lives in one file: **`assets/js/site.js`**. Change it there once and
it changes on every page.

---

## 1 · Contact and identity — `assets/js/site.js`, top of `SITE`

| Field | Currently | Needs |
|---|---|---|
| `city` | Delhi | Confirm the real catchment city |
| `street` | Shop 14, Katra Neel, Chandni Chowk | Real address |
| `postcode` | 110006 | Real postcode |
| `phone` / `phoneRaw` | +91 90000 00000 | Real number. `phoneRaw` is digits only, country code first — it builds every WhatsApp link |
| `email` | fittings@kifa.example | Real inbox |
| `hours` / `closed` | Tue–Sun 11:00–20:30 | Real hours |
| `founded` / `since` | 1984 / "Forty years…" | The real founding year. The voice line quotes it |

## 2 · The count — `SITE.count` and the timeline on `made-to-measure.html`

Every number on this site is a claim a customer can check, which is the point of the
voice — and the risk. Confirm or change:

- **11 buttonholes** on the Noor sherwani
- **4–6 weeks** start to delivery
- **3 fittings** included in the price
- **22 measurements** taken at the first appointment
- **0 deposit** until the cloth is cut
- **First alteration not charged** (stated on `made-to-measure.html`)
- **~9 minutes per hand-worked buttonhole** (stated on `workshop.html`)

## 3 · Prices — `SITE.collection`

Readymade prices are invented and formatted `₹ 00,000`. Bespoke correctly reads
"On request" and should stay that way — the brand book forbids discount language on
the hero product. Open decision 03 in the guidelines asks for price bands and average
order value; those numbers should set these.

## 4 · Named grooms — `SITE.grooms`

**Arjun, Ibrahim and Devansh are invented.** Their months, fitting counts and stories
are written in brand voice but none of it happened. Open decision 01 in the guidelines
makes this a blocker: real names need signed releases before publication.

Two honest options until then:
1. Delete the `grooms` array — the Trust sections collapse cleanly to nothing.
2. Keep the structure and swap in real customers as releases are signed.

## 5 · Fabric library — `SITE.fabrics`

Names, compositions and widths are plausible but not stock. The Urdu spellings
(`نور`, `کمخواب`, `مشرو`, `جامہ وار`, `تسر`, `کھدر`, `بنارسی`, `مٹکا`) should be read
by a native Urdu reader before print or web publication — Nastaliq set wrong is worse
than Nastaliq absent. This is open decision 06 in the guidelines: **ceremonial Nastaliq
use is approved on this site for fabric bolt names only.** If the client declines,
delete the `urdu` key from each fabric and the row hides itself.

## 6 · Competitors

The guidelines name Manyavar and Tasva in the positioning section. This site
deliberately does **not** name them — it says "the national chains". If the client
wants them named, the copy is in `index.html`, section 03.

## 7 · Photography

There is none. Every image is drawn line-work in `assets/js/art.js`, on the ground the
guidelines' garment × ground table assigns to that colour family. `workshop.html`
states this openly to the visitor rather than passing drawings off as photographs.

When the shoot exists, replace the `ART.garment.*` and `ART.proof.*` calls inside
`assets/js/blocks.js` with `<img>` tags. The frames, ratios and grounds already match
the shoot spec: vertical 4:5 capture, croppable to 1:1 and 9:16.

## 8 · Wordmark

`ART.wordmark()` in `assets/js/art.js` is a vector redraw built from the written
specification in section 04 — flat apex at 8% of cap height, chalk tick at 16% cap
skewed 14°, global tracking −3.5%, tick in brass only. This closes open decision 05 for
screen use. It still needs a designer's eye and an EPS/PNG export before it goes on
packaging, labels or anything printed.

## 9 · Things the guidelines say are unanswered and this site had to assume

- **Made to measure is the commercial priority** over readymade volume. The whole site
  is built on this. If sales data says otherwise, the home page changes first.
- **Groom-first audience**, not the occasion buyer.
- **Local catchment**, not national shipping — there is no shipping copy anywhere.
- **Menswear only.** No bridal, per open decision 04.

## Photography — ALL OF IT IS PLACEHOLDER

Every image in `assets/img/` is a free-licensed stock photograph under the
[Unsplash License](https://unsplash.com/license), which permits commercial use without
attribution. **None of these are KIFA garments, KIFA's workshop, or KIFA's customers.**
They exist so the client can see the site as a photographic object instead of line drawings.

Three things must happen before launch:

1. **Shoot the real garments.** Replace the files in `assets/img/` keeping the same
   filenames and the whole site updates — no code changes. Filenames and their jobs are
   listed below.
2. **Respect the garment x ground rule when shooting.** Section 07 of the brand book
   assigns each garment family its ground: ivory on indigo, navy on chalk, pastels on
   iron, zari on indigo. The stock photographs carry their own backgrounds and therefore
   break this rule. The garment x ground row on the home page is deliberately still drawn
   line-work for that reason — it states the rule, so it cannot be shown with a photograph
   that breaks it.
3. **Do not ship a stranger's face as a customer.** The three groom records use
   garment-only photographs, never a stock person, because pairing a real face with an
   invented testimonial misrepresents that person. Named grooms need real photographs and
   signed releases. Collection plates do show stock models; those are product placeholders
   and must be replaced with KIFA's own shoot before launch, as no model here has agreed
   to endorse this business.

| File | Used for | Subject | Source |
|---|---|---|---|
| `hero-noor-ivory.jpg` | Opening, home | Ivory sherwani, buttons and pocket square | https://unsplash.com/photos/1678805408312 |
| `garment-noor-ivory.jpg` | Noor Sherwani plate | Ivory sherwani detail | https://unsplash.com/photos/1678805408312 |
| `garment-kamkhwab-champagne.jpg` | Kamkhwab Sherwani plate | Cream sherwani on a hanger | https://unsplash.com/photos/1783188223159 |
| `garment-mehr-bandhgala-navy.jpg` | Mehr Bandhgala plate | Dark patterned bandhgala | https://unsplash.com/photos/1783923134298 |
| `garment-riwaaz-kurta-maroon.jpg` | Riwaaz Kurta plate | Red sherwani, studio | https://unsplash.com/photos/1522169092203 |
| `garment-jamawar-jodhpuri.jpg` | Jamawar Jodhpuri plate | Navy jodhpuri with dhoti | https://unsplash.com/photos/1783923134222 |
| `garment-sahil-indowestern.jpg` | Sahil Indo-western plate | Ivory sherwani, venue | https://unsplash.com/photos/1744804298516 |
| `garment-khaddar-waistcoat.jpg` | Khaddar Waistcoat plate | Nehru waistcoat over white kurta | https://unsplash.com/photos/1762709313986 |
| `garment-chandni-bandhgala-black.jpg` | Chandni Bandhgala plate | Black patterned jacket | https://unsplash.com/photos/1785612157903 |
| `garment-mehr-kurta-rose.jpg` | Mehr Kurta plate | Aubergine kurta | https://unsplash.com/photos/1762708550230 |
| `garment-kurta-navy.jpg` | spare | Navy kurta, full length | https://unsplash.com/photos/1770359993283 |
| `garment-sherwani-hanger.jpg` | Groom record, Arjun | Cream sherwani on a hanger | https://unsplash.com/photos/1783188223691 |
| `garment-sherwani-mannequin.jpg` | Groom record, Ibrahim | White sherwani on a form | https://unsplash.com/photos/1760080838961 |
| `craft-bolts.jpg` | Step 01, the bolt | Stacked cloth in a fabric shop | https://unsplash.com/photos/1758264839086 |
| `craft-measuring.jpg` | Step 02, the measure | Measuring a client | https://unsplash.com/photos/1753162659146 |
| `craft-cutting.jpg` | Step 03, the cut / proof, the chalk | Cutting cloth with shears | https://unsplash.com/photos/1718184021018 |
| `craft-machine.jpg` | Step 04, the fittings | Hands guiding cloth under a machine | https://unsplash.com/photos/1606501126768 |
| `craft-workshop.jpg` | Step 05, the delivery | Tailor at a machine in his shop | https://unsplash.com/photos/1521401415461 |
| `craft-shears.jpg` | Proof, the shears | Shears and cloth at the machine | https://unsplash.com/photos/1777107508963 |
| `craft-stitching.jpg` | Proof, the hand | Hand stitching, macro | https://unsplash.com/photos/1568288796918 |
| `craft-threads.jpg` | Proof, the thread | Thread spools on a shelf | https://unsplash.com/photos/1583836815700 |
| `craft-buttonhole.jpg` | Proof, the buttonhole | Button on a jacket, macro | https://unsplash.com/photos/1673173044405 |
| `craft-thimble.jpg` | spare | Thimble and tape measure | https://unsplash.com/photos/1780244786334 |
| `craft-form.jpg` | Groom record, Devansh | Garment measured on a dress form | https://unsplash.com/photos/1753162661733 |
| `craft-pins.jpg` | spare | Pins and scissors on cloth | https://unsplash.com/photos/1457972657980 |
| `cloth-ivory-silk.jpg` | spare, fabric page | Ivory silk folds | https://unsplash.com/photos/1619043518800 |
| `cloth-champagne-silk.jpg` | spare, fabric page | Champagne silk folds | https://unsplash.com/photos/1618434958571 |
| `cloth-indigo-silk.jpg` | spare, fabric page | Deep blue silk folds | https://unsplash.com/photos/1612744192242 |
