/* ============================================================
   KIFA — repeated blocks
   The garment plate, the fabric bolt row, the groom record.
   Each one enforces a brand rule so a page cannot break it by
   accident: ground follows the garment, price follows the
   bespoke/readymade split, the docket sits below the frame.
   ============================================================ */

const INK = { 'pg-indigo': '#A8843C', 'pg-chalk': '#16263D', 'pg-iron': '#EDE6D8' };
const FIELD = { 'pg-indigo': 'weave zari', 'pg-chalk': 'weave-dark', 'pg-iron': 'weave' };


/* --- photography ------------------------------------------
   A record carries its own `img`; anything without one falls
   back to the shared map in SITE.photo, keyed by the drawing
   name. No photo at all means the line-work still renders, so
   the site never shows an empty frame. */
const IMGDIR = 'assets/img/';
function photoSrc(rec) {
  const key = typeof rec === 'string' ? rec : (rec && rec.art);
  const file = (rec && rec.img) || (typeof SITE !== 'undefined' && SITE.photo && SITE.photo[key]);
  return file ? IMGDIR + file : '';
}
function photoTag(src, alt, cls = 'plate__img') {
  return `<img class="${cls}" src="${src}" alt="${alt}" loading="lazy" decoding="async">`;
}

/* --- garment plate ---------------------------------------- */
function plateHTML(it, opts = {}) {
  const { ratio = '', flag = it.tag, docket = true, delay = 0, href = 'collection.html' } = opts;
  return `
  <a class="plate ${ratio} rv" href="${href}"
     aria-label="${it.name}">
    <div class="plate__field ${it.ground} ${FIELD[it.ground]}" style="color:${INK[it.ground]}">
      ${flag ? `<span class="plate__flag${it.kind === 'alert' ? ' plate__flag--alert' : ''}">${flag}</span>` : ''}
      ${photoSrc(it)
        ? photoTag(photoSrc(it), `${it.name}${it.fabric ? ' — ' + it.fabric : ''}`)
        : ART.garment[it.art]()}
    </div>
    ${docket ? `
    <div class="plate__docket">
      <span>
        <span class="plate__name">${it.name}</span>
        ${it.deva ? `<span class="deva muted" style="font-size:.86rem;display:block;margin-top:2px">${it.deva}</span>` : ''}
      </span>
      <span class="plate__price spec ${it.kind === 'bespoke' ? 'brass' : ''}">${it.price}</span>
    </div>
    <p class="spec muted" style="margin-top:6px">${it.fabric} &middot; ${it.spec}</p>` : ''}
  </a>`;
}

/* --- proof plate (craft macro, no product) ----------------- */
function proofHTML(art, ground, caption, eyebrow, delay = 0) {
  return `
  <figure class="plate plate--proof rv">
    <div class="plate__field ${ground} ${FIELD[ground]}" style="color:${INK[ground]}">
      ${photoSrc(art) ? photoTag(photoSrc(art), caption) : ART.proof[art]()}
    </div>
    <figcaption class="plate__docket" style="display:block">
      <span class="eyebrow"><span class="tick"></span>${eyebrow}</span>
      <p class="spec muted" style="margin-top:10px">${caption}</p>
    </figcaption>
  </figure>`;
}

/* --- fabric bolt row -------------------------------------- */
const SLUB = {
  silk:  'repeating-linear-gradient(90deg,rgba(0,0,0,.10) 0 1px,transparent 1px 3px)',
  zari:  'repeating-linear-gradient(76deg,rgba(168,132,60,.55) 0 1px,transparent 1px 7px),repeating-linear-gradient(-76deg,rgba(168,132,60,.28) 0 1px,transparent 1px 7px)',
  satin: 'repeating-linear-gradient(0deg,rgba(255,255,255,.10) 0 1px,transparent 1px 4px)',
  twill: 'repeating-linear-gradient(45deg,rgba(0,0,0,.16) 0 2px,transparent 2px 5px)',
  khadi: 'repeating-linear-gradient(90deg,rgba(0,0,0,.13) 0 2px,transparent 2px 5px),repeating-linear-gradient(0deg,rgba(0,0,0,.13) 0 2px,transparent 2px 5px)'
};

function boltHTML(f, delay = 0) {
  return `
  <li class="bolt rv">
    <span class="bolt__swatch" style="background-image:${SLUB[f.slub]},${f.swatch};background-blend-mode:overlay,normal"></span>
    <span class="bolt__names">
      <span class="bolt__latin">${f.latin}</span>
      <span class="bolt__script" lang="ur">${f.urdu}</span>
      <span class="spec muted">${f.comp} &middot; ${f.tone}</span>
    </span>
    <span class="bolt__meta spec">
      <span class="spec--caps brass">${f.width}</span><br>
      <span class="muted">Ground: ${f.ground}</span>
    </span>
  </li>`;
}

/* --- groom record ----------------------------------------- */
function groomHTML(g, i) {
  return `
  <article class="groom${i % 2 ? ' groom--flip' : ''}">
    <div class="groom__plate">
      ${plateHTML({ ...g, name: g.name, price: '', kind: 'ready', fabric: '', spec: '', tag: '' },
        { docket: false, flag: '', href: 'workshop.html#grooms' })}
    </div>
    <div class="groom__copy">
      <p class="eyebrow"><span class="tick"></span>Trust &middot; ${g.name}</p>
      <p class="voice mt-m">${g.line}</p>
      <p class="body muted mt-m">${g.body}</p>
      <dl class="dock mt-l spec">
        <div><dt class="spec--caps brass">Chose</dt><dd>${g.chose}</dd></div>
        <div><dt class="spec--caps brass">Married</dt><dd>${g.married}</dd></div>
        <div><dt class="spec--caps brass">Fittings</dt><dd>${g.fittings}</dd></div>
        <div style="grid-column:span 2"><dt class="spec--caps brass">Garment</dt><dd>${g.garment}</dd></div>
      </dl>
    </div>
  </article>`;
}

/* --- section heading -------------------------------------- */
function headHTML(eyebrow, hook, voice = '', cls = 'hook--s') {
  return `
  <header class="stack" style="--gap:clamp(16px,1.8vw,26px)">
    <p class="eyebrow rv"><span class="tick"></span>${eyebrow}</p>
    <div class="hairline hairline--short rv"></div>
    <h2 class="hook ${cls} rv">${hook}</h2>
    ${voice ? `<p class="voice muted rv" style="max-width:38ch">${voice}</p>` : ''}
  </header>`;
}

/* --- the garment x ground rule, one still cell ------------- */
/* Ground and ink both come from the record, so a cell cannot
   put a navy garment on indigo by accident. */
const RULE_GROUND = { indigo: 'pg-indigo', chalk: 'pg-chalk', iron: 'pg-iron' };

function ruleCellHTML(s) {
  return `
  <figure class="rules__cell rv">
    <div class="rules__field ${RULE_GROUND[s.ground]}${s.zari ? ' has-zari weave zari' : ''}">
      ${ART.garment[s.art]()}
    </div>
    <figcaption class="rules__cap">
      <p class="eyebrow"><span class="tick"></span>${s.rule.split('·')[0].trim()}</p>
      <p class="spec muted mt-s">${s.rule.split('·')[1].trim()}</p>
      <p class="spec muted mt-s">${s.spec}</p>
    </figcaption>
  </figure>`;
}
