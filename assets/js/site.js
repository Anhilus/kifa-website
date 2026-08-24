/* ============================================================
   KIFA — site data
   ------------------------------------------------------------
   EVERY value in this file is a placeholder until the client
   confirms it. See PLACEHOLDERS.md. Change it here once and it
   changes everywhere — nothing is hard-coded into the pages.
   ============================================================ */

const SITE = {
  name: 'KIFA',
  line: 'Premium Indian menswear, made to measure.',

  /* --- contact (PLACEHOLDER) --- */
  city: 'Delhi',
  street: 'Shop 14, Katra Neel, Chandni Chowk',
  postcode: '110006',
  phone: '+91 90000 00000',
  phoneRaw: '919000000000',          /* WhatsApp deep-link format */
  email: 'fittings@kifa.example',
  hours: 'Tue – Sun · 11:00 – 20:30',
  closed: 'Monday closed',
  founded: '1984',
  since: 'Forty years, one street, one measuring tape.',

  /* --- the count. numbers over adjectives. (PLACEHOLDER) --- */
  count: [
    { n: '11',    sup: '',  l: 'Buttonholes on the Noor sherwani. All cut by hand.' },
    { n: '4–6',   sup: 'w', l: 'Weeks from first measure to final fitting. We do not rush a wedding sherwani.' },
    { n: '3',     sup: '',  l: 'Fittings included. Baste, correct, finish.' },
    { n: '1',     sup: '',  l: 'Workshop. One street. The same cutting table since 1984.' }
  ],

  /* --- the landing stage. garment x ground, section 07, live. --- */
  stage: [
    { art:'sherwani', img:'garment-noor-ivory.jpg',  ground:'indigo', zari:false,
      rule:'Ivory on indigo · maximum separation',
      spec:'Noor Sherwani · raw silk, ivory · made to measure',
      n:11, nl:'Buttonholes<br>all cut by hand' },
    { art:'bandhgala', img:'garment-kurta-navy.jpg', ground:'chalk',  zari:false,
      rule:'Navy on chalk · on indigo it disappears',
      spec:'Mehr Bandhgala · wool-silk, navy · readymade',
      n:5,  nl:'Buttons<br>closed collar' },
    { art:'kurta', img:'garment-mehr-kurta-rose.jpg',     ground:'iron',   zari:false,
      rule:'Pastel on iron · chalk washes it out',
      spec:'Mehr Kurta · matka silk, dusty rose · readymade',
      n:22, nl:'Measurements<br>taken once' },
    { art:'sherwani', img:'garment-kamkhwab-champagne.jpg',  ground:'indigo', zari:true,
      rule:'Zari on indigo · metal reads only against dark',
      spec:'Kamkhwab Sherwani · brocade, champagne · made to measure',
      n:6,  nl:'Weeks<br>zari worked by hand' }
  ],

  /* --- the five steps of made to measure --- */
  steps: [
    { no: '01', t: 'The bolt',     art: 'bolt',
      spec: 'Roughly 40 minutes · no appointment needed',
      body: 'You choose cloth off the bolt, in the shop, in daylight. Raw silk, brocade, matka, khaddar. We tell you the width, the composition and what it does after four hours of a wedding. Nothing is ordered from a catalogue you cannot touch.' },
    { no: '02', t: 'The measure',  art: 'tape',
      spec: '22 measurements · recorded on your card',
      body: 'Twenty-two measurements, taken once, written on a card that stays with us and goes home with you. Chest, shoulder slope, arm bend, the drop from nape to hem. Posture is measured, not assumed — this is where a size chart fails.' },
    { no: '03', t: 'The cut',      art: 'chalk',
      spec: 'Chalked, cut and basted in our workshop',
      body: 'The pattern is chalked on your cloth by the cutter, not printed. Once the shears go in, the cloth belongs to one person and nobody else. This is the step the national brands do not have — and structurally cannot add.' },
    { no: '04', t: 'The fittings', art: 'seam',
      spec: 'Three fittings · roughly two weeks apart',
      body: 'The first fitting is loosely basted and looks unfinished, because it is. We pin the shoulder, correct the sleeve pitch, mark the hem. The second confirms. The third is a formality, and it should be.' },
    { no: '05', t: 'The delivery', art: 'mirror',
      spec: 'Pressed, bagged, with the measurement card',
      body: 'Finished by hand, pressed, and handed over with your measurement card. Keep it. The second garment takes four weeks, not six, because the hard part is already done.' }
  ],

  /* --- 07 Photography, garment x ground table --- */
  /* --- 07 Photography: the files -------------------------------
     PLACEHOLDER PHOTOGRAPHY. These are free-licensed stock images
     standing in for KIFA product until the shoot exists. Every file
     is listed in PLACEHOLDERS.md with its source. Replace the files
     in assets/img/ with the real ones, keeping the same names, and
     the whole site updates. Anything without a photo falls back to
     the drawn line-work in art.js. */
  photo: {
    bolt:'craft-bolts.jpg',        tape:'craft-measuring.jpg',
    chalk:'craft-cutting.jpg',     seam:'craft-machine.jpg',
    mirror:'craft-workshop.jpg',   shears:'craft-shears.jpg',
    stitch:'craft-stitching.jpg',  spool:'craft-threads.jpg',
    buttonhole:'craft-buttonhole.jpg',
    hero:'hero-noor-ivory.jpg'
  },

  collection: [
    { name: 'Noor Sherwani',     deva: 'शेरवानी', img: 'garment-noor-ivory.jpg', art: 'sherwani',    ground: 'pg-indigo',
      fabric: 'Raw silk · ivory', kind: 'bespoke', price: 'On request',
      spec: '11 hand-cut buttonholes · 4–6 weeks', tag: 'Made to measure', family: 'wedding' },
    { name: 'Kamkhwab Sherwani', deva: 'शेरवानी', img: 'garment-kamkhwab-champagne.jpg', art: 'sherwani',    ground: 'pg-indigo',
      fabric: 'Silk brocade, zari · champagne', kind: 'bespoke', price: 'On request',
      spec: 'Raking light on the zari · 6 weeks', tag: 'Made to measure', family: 'wedding' },
    { name: 'Mehr Bandhgala',    deva: 'बंदगला',  img: 'garment-mehr-bandhgala-navy.jpg', art: 'bandhgala',   ground: 'pg-chalk',
      fabric: 'Wool-silk · navy', kind: 'ready', price: '₹ 18,500',
      spec: 'Closed collar · five buttons', tag: 'Readymade', family: 'occasion' },
    { name: 'Riwaaz Kurta',      deva: 'कुर्ता',   img: 'garment-riwaaz-kurta-maroon.jpg', art: 'kurta',       ground: 'pg-chalk',
      fabric: 'Mashru silk-cotton · maroon', kind: 'ready', price: '₹ 7,900',
      spec: 'Side slits · straight cut', tag: 'Readymade', family: 'occasion' },
    { name: 'Jamawar Jodhpuri',  deva: 'जोधपुरी',  img: 'garment-jamawar-jodhpuri.jpg', art: 'jodhpuri',    ground: 'pg-chalk',
      fabric: 'Wool-silk jamawar · bottle green', kind: 'bespoke', price: 'On request',
      spec: 'Notch collar · trouser cut to match', tag: 'Made to measure', family: 'wedding' },
    { name: 'Sahil Indo-western',deva: 'इंडो-वेस्टर्न', img: 'garment-sahil-indowestern.jpg', art: 'indowestern', ground: 'pg-iron',
      fabric: 'Matka silk · powder', kind: 'ready', price: '₹ 14,200',
      spec: 'Asymmetric overlap · engagement wear', tag: 'Readymade', family: 'contemporary' },
    { name: 'Khaddar Waistcoat', deva: 'बंडी',    img: 'garment-khaddar-waistcoat.jpg', art: 'waistcoat',   ground: 'pg-chalk',
      fabric: 'Handspun cotton · charcoal', kind: 'ready', price: '₹ 6,400',
      spec: 'Six buttons · worn over kurta', tag: 'Readymade', family: 'occasion' },
    { name: 'Chandni Bandhgala', deva: 'बंदगला',  img: 'garment-chandni-bandhgala-black.jpg', art: 'suit',        ground: 'pg-chalk',
      fabric: 'Super 120s wool · black', kind: 'bespoke', price: 'On request',
      spec: 'Reception and formal · 5 weeks', tag: 'Made to measure', family: 'formal' },
    { name: 'Mehr Kurta',        deva: 'कुर्ता',   img: 'garment-mehr-kurta-rose.jpg', art: 'kurta',       ground: 'pg-iron',
      fabric: 'Matka silk · dusty rose', kind: 'ready', price: '₹ 8,600',
      spec: 'Contemporary cut · haldi and mehndi', tag: 'Readymade', family: 'contemporary' }
  ],

  /* --- 10 Application: the bolt tag is where Nastaliq earns its keep --- */
  fabrics: [
    { latin: 'Noor',      urdu: 'نور',        comp: 'Raw silk, 100%',              tone: 'Ivory',        width: '44 in', ground: 'indigo',
      swatch: 'linear-gradient(#F3EEE2,#E3DACA)', slub: 'silk' },
    { latin: 'Kamkhwab',  urdu: 'کمخواب',     comp: 'Silk brocade with zari',      tone: 'Champagne',    width: '42 in', ground: 'indigo',
      swatch: 'linear-gradient(#E9DCBE,#D6C296)', slub: 'zari' },
    { latin: 'Mashru',    urdu: 'مشرو',       comp: 'Silk warp, cotton weft',      tone: 'Maroon',       width: '44 in', ground: 'chalk',
      swatch: 'linear-gradient(#8C2F27,#6E241E)', slub: 'satin' },
    { latin: 'Jamawar',   urdu: 'جامہ وار',   comp: 'Wool 60%, silk 40%',          tone: 'Bottle green', width: '46 in', ground: 'chalk',
      swatch: 'linear-gradient(#1F4034,#163026)', slub: 'twill' },
    { latin: 'Tussar',    urdu: 'تسر',        comp: 'Wild silk, handloom',         tone: 'Natural gold', width: '44 in', ground: 'indigo',
      swatch: 'linear-gradient(#D8C48E,#C0A96E)', slub: 'silk' },
    { latin: 'Khaddar',   urdu: 'کھدر',       comp: 'Handspun cotton',             tone: 'Chalk',        width: '48 in', ground: 'iron',
      swatch: 'linear-gradient(#EDE6D8,#DCD2BE)', slub: 'khadi' },
    { latin: 'Banarasi',  urdu: 'بنارسی',     comp: 'Silk with zari brocade',      tone: 'Deep indigo',  width: '44 in', ground: 'chalk',
      swatch: 'linear-gradient(#16263D,#0E1A2B)', slub: 'zari' },
    { latin: 'Matka',     urdu: 'مٹکا',       comp: 'Handspun silk',               tone: 'Dusty rose',   width: '44 in', ground: 'iron',
      swatch: 'linear-gradient(#C79A94,#B08079)', slub: 'silk' }
  ],

  /* --- Trust. Real people, real dates. (PLACEHOLDER — needs signed releases) --- */
  grooms: [
    { name: 'Arjun',   art: 'sherwani', img: 'garment-sherwani-hanger.jpg', ground: 'pg-indigo',
      chose: 'March', married: 'November', fittings: '3',
      garment: 'Noor Sherwani · raw silk, ivory',
      line: 'Arjun chose the fabric in March. Three fittings. Married in November.',
      body: 'He came in with a photograph of his father at his own wedding and one instruction: the same collar. We measured the photograph, then we measured him. The shoulder was cut two centimetres wider than the pattern wanted, because he stands square.' },
    { name: 'Ibrahim', art: 'bandhgala', img: 'garment-sherwani-mannequin.jpg', ground: 'pg-chalk',
      chose: 'July', married: 'December', fittings: '3',
      garment: 'Mehr Bandhgala · wool-silk, navy',
      line: 'Ibrahim wanted one jacket for the nikah and the reception.',
      body: 'Navy on chalk, never on indigo — it disappears. He wore it twice in one week and it came back for a press, not a repair. That is the whole test.' },
    { name: 'Devansh', art: 'jodhpuri', img: 'craft-form.jpg', ground: 'pg-chalk',
      chose: 'January', married: 'April', fittings: '4',
      garment: 'Jamawar Jodhpuri · bottle green',
      line: 'Four fittings. He asked for four. We agreed.',
      body: 'A bottle green jamawar with a trouser cut to match, and a fourth fitting eleven days before the wedding because he had lost weight. That is what a workshop on one street can do and a size chart cannot.' }
  ],

  /* --- 03 Voice · the principles --- */
  principles: [
    { t: 'Show the making',      b: 'Craft that is not photographed does not exist to a customer online. The workshop is the set.' },
    { t: 'Numbers over adjectives', b: '“Eleven hand-cut buttonholes” beats “exquisite craftsmanship” every time. We do not use the second one.' },
    { t: 'The garment is the hero', b: 'No layout, colour or type decision here is allowed to make a garment harder to see.' },
    { t: 'Name real people',     b: 'Real grooms, real tailors, real dates. It is the one asset no competitor can copy.' },
    { t: 'Honest timelines',     b: 'Four to six weeks is a feature of made to measure, not an apology for it.' }
  ],

  nav: [
    { href: 'index.html',           label: 'Home' },
    { href: 'made-to-measure.html', label: 'Made to measure' },
    { href: 'collection.html',      label: 'Collection' },
    { href: 'fabric.html',          label: 'Fabric' },
    { href: 'workshop.html',        label: 'Workshop' }
  ]
};

SITE.wa = (msg) =>
  `https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent(msg)}`;
