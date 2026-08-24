/* ============================================================
   KIFA — drawn assets
   ------------------------------------------------------------
   04 Wordmark: redrawn to specification. Cap height 100 units.
     · global tracking  −3.5%  (letter gaps cut to 12 units)
     · the A            flat apex, 8 units = 8% of cap height
     · chalk tick       parallelogram, 16 units tall = 16% cap,
                        skewed 14 degrees, sitting on the
                        baseline to the right, preceded by a gap
                        of half its own width (15 of 30)
     · the tick is brass. always. never recoloured.

   07 Photography: no shoot exists yet. Every garment frame is
   drawn line-work — never stock photography — and every frame
   sits on the ground the garment x ground table assigns it.
   Replace ART.* with photographs when the shoot is delivered.
   ============================================================ */

const ART = (() => {

  /* ---------- 04 · WORDMARK ------------------------------- */
  const K = `<path class="letter" d="M0 0h26v100H0z"/>
             <path class="letter" d="M94 0H58L26 28v30z"/>
             <path class="letter" d="M26 42l68 58H58L26 72z"/>`;
  const I = `<path class="letter" d="M0 0h26v100H0z"/>`;
  const F = `<path class="letter" d="M0 0h72v25H26v31h36v24H26v20H0z"/>`;
  const A = `<path class="letter" d="M48 0h8l48 100H78L52 26 26 100H0z"/>
             <path class="letter" d="M16.3 66h71.4l9.6 20H6.7z"/>`;
  const TICK = `<path class="tick-mark" d="M4 84h26l-4 16H0z"/>`;

  /* x positions carry the −3.5% tracking: the four letters are
     set to read as one object, and the tick is held off by a
     gap of half its own width. */
  const wordmark = (opts = {}) => {
    const { tick = true, cls = '' } = opts;
    return `<svg class="wordmark ${cls}" viewBox="0 0 ${tick ? 365 : 320} 100"
      role="img" aria-label="KIFA" focusable="false">
      <g transform="translate(0,0)">${K}</g>
      <g transform="translate(106,0)">${I}</g>
      <g transform="translate(144,0)">${F}</g>
      <g transform="translate(216,0)">${A}</g>
      ${tick ? `<g transform="translate(335,0)">${TICK}</g>` : ''}
    </svg>`;
  };

  /* ---------- 07 · GARMENT LINE-WORK ---------------------- */
  const open = (h = 340) =>
    `<svg class="plate__art" viewBox="0 0 200 ${h}" fill="none" stroke="currentColor"
      stroke-width="1.35" stroke-linecap="square" stroke-linejoin="miter"
      vector-effect="non-scaling-stroke" aria-hidden="true" focusable="false">`;

  const buttons = (n, x, y0, step, r = 2.1) => {
    let s = '';
    for (let i = 0; i < n; i++)
      s += `<circle class="bh" cx="${x}" cy="${y0 + i * step}" r="${r}" fill="none"/>`;
    return s;
  };

  /* Sherwani — knee length, mandarin collar, eleven buttonholes */
  const sherwani = () => open(340) + `
    <path d="M86 22h28v18H86z"/>
    <path d="M86 40q14 11 28 0"/>
    <path d="M86 40 64 49 52 76 45 306h110L148 76 136 49 114 40"/>
    <path d="M64 49 38 68 29 224l23 7"/>
    <path d="M136 49l26 19 9 156-23 7"/>
    <path d="M100 42v264"/>
    <path d="M45 306h110"/>
    ${buttons(11, 100, 56, 20)}
    <path d="M52 250h-7M148 250h7" opacity=".55"/>
  </svg>`;

  /* Bandhgala — hip length, five buttons, closed collar */
  const bandhgala = () => open(340) + `
    <path d="M84 26h32v18H84z"/>
    <path d="M84 44q16 12 32 0"/>
    <path d="M84 44 60 54 48 82 42 232h116L152 82 140 54 116 44"/>
    <path d="M60 54 34 74 26 210l23 7"/>
    <path d="M140 54l26 20 8 136-23 7"/>
    <path d="M100 46v186"/>
    ${buttons(5, 100, 62, 26)}
    <path d="M42 232h116"/>
    <path d="M62 96h28v14H62z" opacity=".5"/>
  </svg>`;

  /* Kurta — straight cut, side slits, short placket */
  const kurta = () => open(340) + `
    <path d="M88 28h24v14H88z"/>
    <path d="M88 42q12 9 24 0"/>
    <path d="M88 42 62 52 50 78 46 272h108L150 78 138 52 112 42"/>
    <path d="M62 52 40 70 32 196l21 6"/>
    <path d="M138 52l22 18 8 126-21 6"/>
    <path d="M100 44v70"/>
    ${buttons(3, 100, 58, 22, 1.9)}
    <path d="M46 232v40M154 232v40" opacity=".6"/>
    <path d="M46 272h108"/>
  </svg>`;

  /* Jodhpuri — short jacket over trouser, notch detail */
  const jodhpuri = () => open(340) + `
    <path d="M82 26h36v16H82z"/>
    <path d="M82 42 58 52 46 80 40 214h120L154 80 142 52 118 42"/>
    <path d="M100 42 82 66l18 14 18-14z"/>
    <path d="M58 52 32 72 24 206l23 7"/>
    <path d="M142 52l26 20 8 134-23 7"/>
    <path d="M100 80v134"/>
    ${buttons(4, 100, 100, 28)}
    <path d="M40 214h120"/>
    <path d="M52 214l-4 96h30l6-96M148 214l4 96h-30l-6-96" opacity=".85"/>
  </svg>`;

  /* Indo-western — asymmetric overlap, drape */
  const indowestern = () => open(340) + `
    <path d="M86 24h28v16H86z"/>
    <path d="M86 40 62 50 50 78 44 288h112L150 78 138 50 114 40"/>
    <path d="M62 50 36 70 28 216l23 7"/>
    <path d="M138 50l26 20 8 146-23 7"/>
    <path d="M114 40 74 132l50 12"/>
    <path d="M74 132 60 288"/>
    ${buttons(3, 118, 58, 20, 1.9)}
    <path d="M44 288h112"/>
  </svg>`;

  /* Waistcoat / Nehru jacket */
  const waistcoat = () => open(340) + `
    <path d="M84 30h32v16H84z"/>
    <path d="M84 46 62 56 54 84 50 226h100l-4-142-8-28-24-10"/>
    <path d="M100 48v178"/>
    ${buttons(6, 100, 66, 24, 1.9)}
    <path d="M50 226h100"/>
    <path d="M62 56 56 96M138 56l6 40" opacity=".55"/>
  </svg>`;

  /* Suit — notch lapel, two button */
  const suit = () => open(340) + `
    <path d="M86 34 62 46 50 76 44 250h112L150 76 138 46 114 34"/>
    <path d="M86 34 78 62l22 16 22-16-8-28"/>
    <path d="M86 34 70 96l30 -18M114 34l16 62-30-18"/>
    <path d="M62 46 36 68 28 214l22 7"/>
    <path d="M138 46l26 22 8 146-22 7"/>
    ${buttons(2, 100, 132, 26)}
    <path d="M44 250h112"/>
    <path d="M60 150h22" opacity=".5"/>
  </svg>`;

  /* ---------- 07 · PROOF MACROS (craft, not product) ------ */
  const proof = {
    /* tailor's shears */
    shears: () => `<svg class="plate__art" viewBox="0 0 260 200" fill="none"
        stroke="currentColor" stroke-width="1.4" vector-effect="non-scaling-stroke" aria-hidden="true">
        <path d="M18 34 168 118M18 166 168 82"/>
        <path d="M168 118l52 14-14 12-46-18zM168 82l52-14-14-12-46 18z"/>
        <circle cx="140" cy="100" r="4"/>
        <circle cx="44" cy="46" r="17"/><circle cx="44" cy="154" r="17"/>
        <path d="M60 60 96 82M60 140 96 118" opacity=".6"/>
      </svg>`,
    /* tape measure, curled */
    tape: () => `<svg class="plate__art" viewBox="0 0 260 200" fill="none"
        stroke="currentColor" stroke-width="1.4" vector-effect="non-scaling-stroke" aria-hidden="true">
        <path d="M10 150c40-70 96-96 150-72s62 92 8 104-118-28-96-84 96-70 138-30"/>
        <path d="M28 138l6 10M50 118l6 10M74 102l6 10M100 92l5 11M126 88l4 11M152 92l3 11M176 104l2 11"
          opacity=".8"/>
        <path d="M232 62l16 10-16 10z"/>
      </svg>`,
    /* thread spools */
    spool: () => `<svg class="plate__art" viewBox="0 0 260 200" fill="none"
        stroke="currentColor" stroke-width="1.4" vector-effect="non-scaling-stroke" aria-hidden="true">
        <path d="M56 40h48v6H56zM56 154h48v6H56z"/>
        <path d="M64 46h32v108H64z"/>
        <path d="M64 58h32M64 70h32M64 82h32M64 94h32M64 106h32M64 118h32M64 130h32M64 142h32" opacity=".55"/>
        <path d="M156 62h40v5h-40zM156 158h40v5h-40z"/>
        <path d="M163 67h26v91h-26z"/>
        <path d="M163 78h26M163 90h26M163 102h26M163 114h26M163 126h26M163 138h26" opacity=".55"/>
        <path d="M96 100c40 8 50 30 60 40" opacity=".8"/>
      </svg>`,
    /* chalk mark on cloth */
    chalk: () => `<svg class="plate__art" viewBox="0 0 260 200" fill="none"
        stroke="currentColor" stroke-width="1.4" vector-effect="non-scaling-stroke" aria-hidden="true">
        <path d="M14 20h232v160H14z" opacity=".3"/>
        <path d="M46 40 140 34l16 128-92 6z"/>
        <path d="M56 50 134 45l13 108-76 5z" stroke-dasharray="4 6" opacity=".85"/>
        <path d="M46 40l-6-10M140 34l7-10M156 162l10 6M64 168l-8 8" opacity=".6"/>
        <path d="M92 37v10M96 165v10" opacity=".9"/>
        <path d="M196 118l30 12-16 40-30-12z"/>
        <path d="M180 158l-14 18 22-6" />
        <path d="M166 176 148 168" stroke-dasharray="3 5" opacity=".8"/>
      </svg>`,
    /* pinned seam */
    seam: () => `<svg class="plate__art" viewBox="0 0 260 200" fill="none"
        stroke="currentColor" stroke-width="1.4" vector-effect="non-scaling-stroke" aria-hidden="true">
        <path d="M20 70c60 20 120 20 220 0M20 130c60 20 120 20 220 0"/>
        <path d="M20 100c60 20 120 20 220 0" stroke-dasharray="6 7"/>
        <g opacity=".9">
          <path d="M56 56 74 116M56 56l-6 6M74 116l6 4"/>
          <path d="M132 62l10 62M132 62l-7 5M142 124l7 3"/>
          <path d="M206 56l4 62M206 56l-7 4M210 118l7 3"/>
        </g>
      </svg>`,
    /* buttonhole, hand cut */
    buttonhole: () => `<svg class="plate__art" viewBox="0 0 260 200" fill="none"
        stroke="currentColor" stroke-width="1.4" vector-effect="non-scaling-stroke" aria-hidden="true">
        <rect x="20" y="30" width="220" height="140" opacity=".3"/>
        <path d="M96 66h68a10 10 0 0 1 0 20H96a10 10 0 0 1 0-20z"/>
        <path d="M96 60v-8M108 58v-8M120 57v-8M132 57v-8M144 57v-8M156 58v-8M164 60v-8
                 M96 92v8M108 94v8M120 95v8M132 95v8M144 95v8M156 94v8M164 92v8" opacity=".7"/>
        <circle cx="130" cy="138" r="12"/>
        <circle cx="125" cy="134" r="1.6"/><circle cx="135" cy="134" r="1.6"/>
        <circle cx="125" cy="142" r="1.6"/><circle cx="135" cy="142" r="1.6"/>
        <path d="M125 134l10 8M135 134l-10 8" opacity=".8"/>
      </svg>`,
    /* fitting-room mirror — trust */
    mirror: () => `<svg class="plate__art" viewBox="0 0 260 200" fill="none"
        stroke="currentColor" stroke-width="1.4" vector-effect="non-scaling-stroke" aria-hidden="true">
        <path d="M148 10h100v180H148z"/>
        <path d="M156 18h84v164h-84z" opacity=".45"/>
        <circle cx="198" cy="46" r="12"/>
        <path d="M186 64q12-9 24 0"/>
        <path d="M186 64 178 92 176 178h44l-2-86-8-28"/>
        <path d="M198 60v118" opacity=".7"/>
        <circle cx="66" cy="42" r="13"/>
        <path d="M53 62q13-10 26 0"/>
        <path d="M53 62 43 92 40 190h52l-3-98-10-30"/>
        <path d="M66 58v132" opacity=".7"/>
        <path d="M92 108h44M92 108l8-5M92 108l8 5" opacity=".55"/>
        <path d="M40 190h52" />
      </svg>`,
    /* the bolt of cloth */
    bolt: () => `<svg class="plate__art" viewBox="0 0 260 200" fill="none"
        stroke="currentColor" stroke-width="1.4" vector-effect="non-scaling-stroke" aria-hidden="true">
        <path d="M30 54h150v92H30z"/>
        <path d="M180 54l50 -18v92l-50 18z"/>
        <path d="M30 54 80 36h150"/>
        <path d="M30 146c30 22 62 26 96 14" opacity=".8"/>
        <path d="M126 160l30 -8 4 14-30 8z"/>
        <path d="M52 54v92M74 54v92M96 54v92M118 54v92M140 54v92M162 54v92" opacity=".38"/>
      </svg>`,
    /* needle and stitch */
    stitch: () => `<svg class="plate__art" viewBox="0 0 260 200" fill="none"
        stroke="currentColor" stroke-width="1.4" vector-effect="non-scaling-stroke" aria-hidden="true">
        <path d="M18 120c40-40 80-40 120 0s80 40 104 4"/>
        <path d="M40 104l14 24M70 90l12 26M102 88l10 26M134 96l12 24M166 112l12 22M198 124l14 18"
          opacity=".75"/>
        <path d="M170 40 236 92"/>
        <path d="M236 92l10 10-14 2z"/>
        <path d="M170 40l-8-2 2 8z"/>
        <path d="M180 48c-20 18-20 40 0 56" opacity=".6"/>
      </svg>`
  };

  const garment = {
    sherwani, bandhgala, kurta, jodhpuri, indowestern, waistcoat, suit
  };

  /* ---------- 05/07 · GROUND ASSIGNMENT ------------------- */
  /* Straight from the garment x ground table. Do not override. */
  const GROUND = {
    ivory: 'pg-indigo', cream: 'pg-indigo', champagne: 'pg-indigo', gold: 'pg-indigo',
    maroon: 'pg-chalk', green: 'pg-chalk', rust: 'pg-chalk',
    navy: 'pg-chalk', black: 'pg-chalk', charcoal: 'pg-chalk',
    powder: 'pg-iron', sage: 'pg-iron', pink: 'pg-iron'
  };
  const INK = { 'pg-indigo': 'brass', 'pg-chalk': 'ink-indigo', 'pg-iron': 'chalk-ink' };

  return { wordmark, garment, proof, GROUND, INK };
})();
