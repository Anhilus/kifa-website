/* ============================================================
   KIFA — behaviour
   ------------------------------------------------------------
   No framework, no build step, no CDN. There is one piece of
   motion on this site: content arrives with a short fade and a
   small lift, once, when it first comes into view. Nothing is
   driven by scroll position, nothing draws itself on, nothing
   follows the cursor. The garment is held still and looked at.
   ============================================================ */
(() => {
  const $  = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.KIFA_BUILD = 5;   /* bumped when behaviour changes; helps spot a stale cache */

  /* ---------- chrome: nav + footer ------------------------ */
  const here = location.pathname.split('/').pop() || 'index.html';

  const navHTML = () => `
    <a class="skip" href="#main">Skip to content</a>
    <header class="nav" id="nav">
      <a class="nav__home" href="index.html" aria-label="KIFA — home">
        ${ART.wordmark({ cls: 'nav__wm' })}
      </a>
      <button class="nav__burger" aria-label="Menu" aria-expanded="false" id="burger">
        <span></span><span></span>
      </button>
      <nav class="nav__links" id="navlinks" aria-label="Primary">
        ${SITE.nav.map(n => `<a class="nav__link" href="${n.href}"${
          n.href === here ? ' aria-current="page"' : ''}>${n.label}</a>`).join('')}
        <a class="nav__cta" href="fitting.html"><span class="tick"></span>Book a fitting</a>
      </nav>
    </header>`;

  const footHTML = () => `
    <footer class="foot ground g-indigo-deep wrap">
      <div class="foot__top">
        <div class="foot__brand">
          ${ART.wordmark({ cls: 'foot__wm' })}
          <p class="voice mt-m" style="max-width:22ch">${SITE.since}</p>
          <p class="spec muted mt-m">${SITE.street}<br>${SITE.city} ${SITE.postcode}</p>
          <p class="spec muted mt-s">${SITE.hours}<br>${SITE.closed}</p>
        </div>
        <div class="foot__col foot__col--first">
          <p class="eyebrow"><span class="tick"></span>Wear</p>
          <ul class="mt-m spec">
            <li class="foot__li"><a href="made-to-measure.html">Made to measure</a></li>
            <li class="foot__li"><a href="collection.html">Collection</a></li>
            <li class="foot__li"><a href="fabric.html">Fabric library</a></li>
          </ul>
        </div>
        <div class="foot__col">
          <p class="eyebrow"><span class="tick"></span>House</p>
          <ul class="mt-m spec">
            <li class="foot__li"><a href="workshop.html">The workshop</a></li>
            <li class="foot__li"><a href="workshop.html#grooms">Grooms</a></li>
            <li class="foot__li"><a href="fitting.html">Book a fitting</a></li>
          </ul>
        </div>
        <div class="foot__col">
          <p class="eyebrow"><span class="tick"></span>Reach</p>
          <ul class="mt-m spec">
            <li class="foot__li"><a href="${SITE.wa('Hello KIFA. I would like to book a fitting.')}"
                target="_blank" rel="noopener">WhatsApp</a></li>
            <li class="foot__li"><a href="tel:${SITE.phoneRaw}">${SITE.phone}</a></li>
            <li class="foot__li"><a href="mailto:${SITE.email}">${SITE.email}</a></li>
          </ul>
        </div>
      </div>
      <div class="foot__bot spec muted">
        <span>&copy; ${new Date().getFullYear()} ${SITE.name}. ${SITE.line}</span>
        <span>Made to measure in ${SITE.city}. Four to six weeks, honestly.</span>
      </div>
    </footer>`;

  const chromeMount = () => {
    const nav = document.createElement('div');
    nav.innerHTML = navHTML();
    document.body.prepend(...nav.childNodes);
    const f = document.createElement('div');
    f.innerHTML = footHTML();
    document.body.append(...f.childNodes);
  };

  /* ---------- the one reveal ------------------------------ */
  /* A block fades up once, then is left alone. No variants, no
     cascades, no per-element delays. Masks and clip-paths are
     avoided entirely: a clipped element reports an intersection
     ratio of zero in Chrome and can never observe itself in. */
  const reveals = () => {
    const items = $$('.rv');
    if (!('IntersectionObserver' in window) || reduce) {
      items.forEach(i => i.classList.add('is-in'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        e.target.classList.add('is-in');
        io.unobserve(e.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: [0, 0.1] });
    items.forEach(i => io.observe(i));
  };

  /* ---------- nav state + ground colour detection --------- */
  const navState = () => {
    const nav = $('#nav');
    if (!nav) return;
    const grounds = $$('[data-ground]');
    let ticking = false;

    const read = () => {
      ticking = false;
      const y = window.scrollY;
      nav.classList.toggle('is-stuck', y > 40);
      const probe = nav.offsetHeight * 0.6;
      let ground = 'indigo';
      for (const g of grounds) {
        const r = g.getBoundingClientRect();
        if (r.top <= probe && r.bottom > probe) { ground = g.dataset.ground || 'indigo'; break; }
      }
      const light = ground === 'chalk';
      nav.classList.toggle('on-chalk', light);
      nav.classList.toggle('on-iron', ground === 'iron');
      document.body.classList.toggle('on-chalk', light);
    };
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(read); } };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    read();

    const burger = $('#burger');
    burger?.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', String(open));
      document.documentElement.style.overflow = open ? 'hidden' : '';
    });
    $$('#navlinks a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('is-open');
      burger?.setAttribute('aria-expanded', 'false');
      document.documentElement.style.overflow = '';
    }));
  };

  /* ---------- collection filter --------------------------- */
  const filters = () => {
    const bar = $('#filters');
    if (!bar) return;
    bar.addEventListener('click', (e) => {
      const b = e.target.closest('button');
      if (!b) return;
      $$('button', bar).forEach(x => x.setAttribute('aria-pressed', String(x === b)));
      const f = b.dataset.filter;
      $$('#grid > *').forEach(card => {
        const show = f === 'all' || card.dataset.kind === f || card.dataset.family === f;
        card.classList.toggle('is-hidden', !show);
      });
    });
  };

  /* ---------- fitting form -> WhatsApp -------------------- */
  const fittingForm = () => {
    const form = $('#fitting');
    if (!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const d = Object.fromEntries(new FormData(form).entries());
      const msg =
        `Fitting request — ${SITE.name}\n` +
        `Name: ${d.name || '—'}\n` +
        `Phone: ${d.phone || '—'}\n` +
        `Occasion: ${d.occasion || '—'}\n` +
        `Date of the event: ${d.date || '—'}\n` +
        `Garment: ${d.garment || '—'}\n` +
        `Fabric of interest: ${d.fabric || '—'}\n` +
        `Preferred visit: ${d.slot || '—'}\n` +
        (d.notes ? `Notes: ${d.notes}\n` : '') +
        `\nI understand made to measure takes four to six weeks.`;
      const out = $('#formout');
      if (out) {
        out.textContent = 'Opening WhatsApp with your card. If nothing happens, call ' + SITE.phone + '.';
        out.hidden = false;
      }
      window.open(SITE.wa(msg), '_blank', 'noopener');
    });
  };

  /* ---------- the opening: one garment, one ground, no motion */
  const opening = () => {
    const fig = $('#openingart');
    if (!fig || typeof SITE === 'undefined' || !SITE.stage) return;
    const s = SITE.stage[0];              /* ivory on indigo — the hero combination */
    const hero = SITE.photo && SITE.photo.hero;
    fig.innerHTML = hero
      ? `<img class="opening__img" src="assets/img/${hero}" alt="${s.spec}" decoding="async">`
      : ART.garment[s.art]();
    const rule = $('#openingrule'), spec = $('#openingspec'), tally = $('#openingtally');
    if (rule) rule.textContent = s.rule;
    if (spec) spec.textContent = s.spec;
    if (tally) tally.innerHTML =
      `<span class="opening__n">${s.n}</span><span class="opening__nl">${s.nl}</span>`;
  };

  /* ---------- numbers ------------------------------------- */
  /* The count is the claim, not the animation. Numbers render
     final and correct on first paint. */
  const numbers = () => {
    $$('[data-count]').forEach(el => { el.textContent = el.dataset.count; });
  };

  /* ---------- boot ---------------------------------------- */
  const boot = () => {
    chromeMount();
    if (typeof PAGE === 'function') PAGE();   /* page-specific render */
    reveals();
    navState();
    filters();
    fittingForm();
    opening();
    numbers();
  };

  document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', boot)
    : boot();
})();
