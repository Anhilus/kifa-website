/* ============================================================
   KIFA — site data
   ------------------------------------------------------------
   EVERY value in this file is a placeholder until the client
   confirms it. See PLACEHOLDERS.md. Change it here once and it
   changes everywhere — nothing is hard-coded into the pages.

   KIFA sells finished garments only. Nothing on this site may
   offer cloth by the metre, or a garment cut to a customer's
   measurements. Everything is made in the workshop first and
   sold off the rail.
   ============================================================ */

const SITE = {
  name: 'KIFA',
  line: 'Premium Indian menswear, made in our own workshop.',

  /* --- contact (PLACEHOLDER) --- */
  city: 'Delhi',
  street: 'Shop 14, Katra Neel, Chandni Chowk',
  postcode: '110006',
  phone: '+91 90000 00000',
  phoneRaw: '919000000000',          /* WhatsApp deep-link format */
  email: 'shop@kifa.example',
  hours: 'Tue \u2013 Sun \u00b7 11:00 \u2013 20:30',
  closed: 'Monday closed',
  founded: '1984',
  since: 'Forty years, one street, one workshop.',

  /* --- the count. numbers over adjectives. (PLACEHOLDER) --- */
  count: [
    { n: '11',  sup: '',  l: 'Buttonholes on the Noor sherwani. All cut by hand.' },
    { n: '30',  sup: '',  l: 'Pieces cut from one bolt. When the cloth is finished, so is the garment.' },
    { n: '48',  sup: 'h', l: 'Hours for an alteration. Same workshop, same hands, no charge.' },
    { n: '1',   sup: '',  l: 'Workshop. One street. The same cutting table since 1984.' }
  ],

  /* --- the landing garment. garment x ground, section 07. --- */
  stage: [
    { art:'sherwani', img:'garment-noor-ivory.jpg',  ground:'indigo', zari:false,
      rule:'Ivory on indigo \u00b7 maximum separation',
      spec:'Noor Sherwani \u00b7 raw silk, ivory \u00b7 ready to wear',
      n:11, nl:'Buttonholes<br>all cut by hand' },
    { art:'bandhgala', img:'garment-kurta-navy.jpg', ground:'chalk',  zari:false,
      rule:'Navy on chalk \u00b7 on indigo it disappears',
      spec:'Mehr Bandhgala \u00b7 wool-silk, navy \u00b7 ready to wear',
      n:5,  nl:'Buttons<br>closed collar' },
    { art:'kurta', img:'garment-mehr-kurta-rose.jpg', ground:'iron', zari:false,
      rule:'Pastel on iron \u00b7 chalk washes it out',
      spec:'Mehr Kurta \u00b7 matka silk, dusty rose \u00b7 ready to wear',
      n:48, nl:'Hours<br>for an alteration' },
    { art:'sherwani', img:'garment-kamkhwab-champagne.jpg', ground:'indigo', zari:true,
      rule:'Zari on indigo \u00b7 metal reads only against dark',
      spec:'Kamkhwab Sherwani \u00b7 brocade, champagne \u00b7 ready to wear',
      n:20, nl:'Pieces<br>in this cut' }
  ],

  /* --- how a garment is made, before it reaches the rail --- */
  steps: [
    { no: '01', t: 'The cloth',   art: 'bolt',   img: 'craft-bolts.jpg',
      spec: 'One bolt \u00b7 roughly 30 garments',
      body: 'We buy the bolt, not the garment. Raw silk, brocade, matka, khaddar, chosen in daylight in the shop it will be cut in. One bolt makes about thirty pieces, and when it runs out that garment is finished for good \u2014 we do not reorder a cloth to keep a line alive.' },
    { no: '02', t: 'The pattern', art: 'tape',   img: 'craft-form.jpg',
      spec: 'House block \u00b7 sizes 38 to 48',
      body: 'Every garment starts from our own block, corrected over forty years on real bodies rather than bought in as a graded chart. The same cutter has drawn it since the shop opened. Sizes run 38 to 48 in the chest, and the drop from nape to hem is set garment by garment, not scaled blindly from the size below.' },
    { no: '03', t: 'The cut',     art: 'chalk',  img: 'craft-cutting.jpg',
      spec: 'Chalked and cut in our workshop',
      body: 'The pattern is chalked onto the cloth by the cutter and cut with shears, upstairs from the shop. Nothing is sent out. This is the step the national brands do not have and structurally cannot add: their cutting happens in a factory that has never seen the rail it ships to.' },
    { no: '04', t: 'The stitch',  art: 'seam',   img: 'craft-stitching.jpg',
      spec: 'Machine for the seams \u00b7 hand for the rest',
      body: 'The machine does the long seams, because it does them better. The collar, the cuff and every buttonhole are worked by hand, with silk thread matched to the cloth rather than to the nearest reel in the drawer. Eleven buttonholes on a sherwani, roughly nine minutes each.' },
    { no: '05', t: 'The rail',    art: 'mirror', img: 'craft-workshop.jpg',
      spec: 'Pressed, sized and hung \u00b7 alterations in 48 hours',
      body: 'Finished, pressed and hung on the rail with the size on the tag. You try it in the shop. If the sleeve or the waist needs moving, the workshop that made it alters it within forty-eight hours at no charge \u2014 the garment never leaves the street it was cut on.' }
  ],

  /* --- 07 Photography: the files -------------------------------
     PLACEHOLDER PHOTOGRAPHY. These are free-licensed stock images
     standing in for KIFA product until the shoot exists. Every file
     is listed in PLACEHOLDERS.md with its source. Replace the files
     in assets/img/ with the real ones, keeping the same names, and
     the whole site updates. Anything without a photo falls back to
     the drawn line-work in art.js. */
  photo: {
    bolt:'craft-bolts.jpg',        tape:'craft-form.jpg',
    chalk:'craft-cutting.jpg',     seam:'craft-stitching.jpg',
    mirror:'craft-workshop.jpg',   shears:'craft-shears.jpg',
    alter:'craft-measuring.jpg',   machine:'craft-machine.jpg',
    stitch:'craft-stitching.jpg',  spool:'craft-threads.jpg',
    buttonhole:'craft-buttonhole.jpg',
    hero:'hero-noor-ivory.jpg'
  },

  collection: [
    { name: 'Noor Sherwani',     deva: 'शेरवानी', img: 'garment-noor-ivory.jpg', art: 'sherwani',    ground: 'pg-indigo',
      fabric: 'Raw silk · ivory', kind: 'ready', price: '₹ 24,500',
      spec: '11 hand-cut buttonholes · sizes 38–46', tag: 'Ready to wear', family: 'wedding' },
    { name: 'Kamkhwab Sherwani', deva: 'शेरवानी', img: 'garment-kamkhwab-champagne.jpg', art: 'sherwani',    ground: 'pg-indigo',
      fabric: 'Silk brocade, zari · champagne', kind: 'ready', price: '₹ 32,000',
      spec: 'Raking light on the zari · 20 in this cut', tag: 'Ready to wear', family: 'wedding' },
    { name: 'Mehr Bandhgala',    deva: 'बंदगला',  img: 'garment-mehr-bandhgala-navy.jpg', art: 'bandhgala',   ground: 'pg-chalk',
      fabric: 'Wool-silk · navy', kind: 'ready', price: '₹ 18,500',
      spec: 'Closed collar · five buttons', tag: 'Ready to wear', family: 'occasion' },
    { name: 'Riwaaz Kurta',      deva: 'कुर्ता',   img: 'garment-riwaaz-kurta-maroon.jpg', art: 'kurta',       ground: 'pg-chalk',
      fabric: 'Mashru silk-cotton · maroon', kind: 'ready', price: '₹ 7,900',
      spec: 'Side slits · straight cut', tag: 'Ready to wear', family: 'occasion' },
    { name: 'Jamawar Jodhpuri',  deva: 'जोधपुरी',  img: 'garment-jamawar-jodhpuri.jpg', art: 'jodhpuri',    ground: 'pg-chalk',
      fabric: 'Wool-silk jamawar · bottle green', kind: 'ready', price: '₹ 21,000',
      spec: 'Notch collar · trouser sold with it', tag: 'Ready to wear', family: 'wedding' },
    { name: 'Sahil Indo-western',deva: 'इंडो-वेस्टर्न', img: 'garment-sahil-indowestern.jpg', art: 'indowestern', ground: 'pg-iron',
      fabric: 'Matka silk · powder', kind: 'ready', price: '₹ 14,200',
      spec: 'Asymmetric overlap · engagement wear', tag: 'Ready to wear', family: 'contemporary' },
    { name: 'Khaddar Waistcoat', deva: 'बंडी',    img: 'garment-khaddar-waistcoat.jpg', art: 'waistcoat',   ground: 'pg-chalk',
      fabric: 'Handspun cotton · charcoal', kind: 'ready', price: '₹ 6,400',
      spec: 'Six buttons · worn over kurta', tag: 'Ready to wear', family: 'occasion' },
    { name: 'Chandni Bandhgala', deva: 'बंदगला',  img: 'garment-chandni-bandhgala-black.jpg', art: 'suit',        ground: 'pg-chalk',
      fabric: 'Super 120s wool · black', kind: 'ready', price: '₹ 19,800',
      spec: 'Reception and formal · sizes 38–48', tag: 'Ready to wear', family: 'formal' },
    { name: 'Mehr Kurta',        deva: 'कुर्ता',   img: 'garment-mehr-kurta-rose.jpg', art: 'kurta',       ground: 'pg-iron',
      fabric: 'Matka silk · dusty rose', kind: 'ready', price: '₹ 8,600',
      spec: 'Contemporary cut · haldi and mehndi', tag: 'Ready to wear', family: 'contemporary' }
  ],

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
      bought: 'March', wore: 'November', altered: 'Sleeve, 1 cm',
      garment: 'Noor Sherwani \u00b7 raw silk, ivory',
      line: 'Arjun took the ivory sherwani off the rail in March and wore it in November.',
      body: 'He came in with a photograph of his father at his own wedding and one instruction: the same collar. The Noor was already on the rail in his size, and the collar was the collar. We moved one sleeve by a centimetre because he stands square, and he had it back in two days.' },
    { name: 'Ibrahim', art: 'bandhgala', img: 'garment-sherwani-mannequin.jpg', ground: 'pg-chalk',
      bought: 'July', wore: 'December', altered: 'None',
      garment: 'Mehr Bandhgala \u00b7 wool-silk, navy',
      line: 'Ibrahim wanted one jacket for the nikah and the reception.',
      body: 'Navy on chalk, never on indigo \u2014 it disappears. He tried three sizes on a Tuesday afternoon, took the 40, and had nothing altered. He wore it twice in one week and it came back for a press, not a repair. That is the whole test.' },
    { name: 'Devansh', art: 'jodhpuri', img: 'craft-form.jpg', ground: 'pg-chalk',
      bought: 'January', wore: 'April', altered: 'Waist, 3 cm',
      garment: 'Jamawar Jodhpuri \u00b7 bottle green',
      line: 'Devansh lost weight between January and April. We took the waist in twice.',
      body: 'A bottle green jamawar off the rail in January, taken in two centimetres in February and one more eleven days before the wedding. Both times it was back inside forty-eight hours. That is what a workshop on the same street can do and a warehouse cannot.' }
  ],

  /* --- 03 Voice · the principles --- */
  principles: [
    { t: 'Show the making',      b: 'Craft that is not photographed does not exist to a customer online. The workshop is the set.' },
    { t: 'Numbers over adjectives', b: '\u201cEleven hand-cut buttonholes\u201d beats \u201cexquisite craftsmanship\u201d every time. We do not use the second one.' },
    { t: 'The garment is the hero', b: 'No layout, colour or type decision here is allowed to make a garment harder to see.' },
    { t: 'Name real people',     b: 'Real customers, real tailors, real dates. It is the one asset no competitor can copy.' },
    { t: 'Sell what is hanging', b: 'What is on the rail is what there is. We do not take an order for a size we cannot hang, and we do not sell cloth by the metre.' }
  ],

  nav: [
    { href: 'index.html',          label: 'Home' },
    { href: 'how-it-is-made.html', label: 'How it is made' },
    { href: 'collection.html',     label: 'Collection' },
    { href: 'fabric.html',         label: 'Fabric' },
    { href: 'workshop.html',       label: 'Workshop' }
  ]
};

SITE.wa = (msg) =>
  `https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent(msg)}`;
