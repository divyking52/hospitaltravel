import { writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const out = join(__dirname, '..', 'hospitality-cancun-standalone.html')

const media = (id, file) =>
  `https://api.storebox.ai/media/f277f107-42f8-40bb-8b7b-c6964ff012d8/${id}/${file}`

const brand = {
  name: 'Hospitality Cancún',
  logo: media('6906f953-cfde-4b21-954f-be7e74e76f37', 'LOGO_HOSPITALITYCANCUN.svg'),
  nav: [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Prices', href: '#prices' },
    { label: 'Stem Cells', href: '#stem-cells' },
    { label: 'Doctors', href: '#team' },
    { label: 'Patient Story', href: '#stories' },
  ],
  cta: { label: 'Request Information', href: '#contact' },
  hero: {
    badgeStrong: '25+ Years',
    badgeText: 'Grupo Médico Costamed Excellence',
    headline: 'Explore Costamed care in Riviera Maya and Cozumel Island —',
    accent: 'Medical Travel Information & Referral',
    subheadline:
      'Learn about accredited Costamed hospitals across the Riviera Maya with bilingual specialists. Submit an inquiry and, with your permission, we forward it to Grupo Médico Costamed.',
    cta: 'Request Information',
    ctaSecondary: 'Explore our services',
    ctaSecondaryHref: '#services',
    image: media('aa2e17df-d8cb-480c-b843-e7bef6833d93', 'senior-man.webp'),
    video:
      'https://admin.storebox.ai/media/f277f107-42f8-40bb-8b7b-c6964ff012d8/6e45f874-ba3f-4214-ad27-c09f30de1e45/hero-resort.mp4',
    trust: {
      title: '360° Medical Concierge',
      subtitle: 'Bilingual Board-Certified Specialists',
      avatars: [
        media('aa2e17df-d8cb-480c-b843-e7bef6833d93', 'senior-man.webp'),
        media('ded79ff5-7f78-4981-9168-5ed1c2bb47fd', 'young-woman.webp'),
        media('ed968a36-7008-4c44-b9a4-aa7200b997ad', 'medium-shot.webp'),
        media('047956cf-6fcb-4267-b950-83c98fc4d446', 'day.webp'),
      ],
    },
  },
  about: {
    eyebrow: 'About Hospitality Cancún',
    title: 'Care in the Mexican Caribbean',
    experience: '25+ Years of Clinical Excellence',
    manifesto:
      'HospitalityCancun.com is an information and referral service operated by Smart Strategic Marketing, LLC. We provide general information about medical travel and, with your permission, forward your inquiry to Grupo Médico Costamed.',
    portraits: [
      media('e6d72b16-f2af-4a4f-9d1c-d431c843e367', 'dr-moises-hernandez.jpg'),
      media('78d227f4-14ac-4033-8960-48fe9f3f9c7b', 'dr-aldo-diosdado.jpg'),
      media('db879df9-0e04-43a8-9f37-09d076620b36', 'dr-ricardo-segovia.jpg'),
      media('dbee98e9-163c-4fb5-ab5c-6cc7a1d0ffac', 'dra-michel-garcia.jpg'),
    ],
    pillars: [
      {
        title: '25+ Years of Clinical Excellence',
        desc: 'Grupo Médico Costamed delivers accredited medical care across the Riviera Maya and Cozumel.',
      },
      {
        title: 'Accredited Hospital Network',
        desc: 'Hospitals and medical centers in Cancun, Playa del Carmen, Cozumel, Tulum, Puerto Morelos, and Mahahual.',
      },
      {
        title: '360° Dedicated Medical Concierge',
        desc: 'Bilingual board-certified doctors and end-to-end concierge guidance for international patients.',
      },
    ],
    cta: 'Send an Inquiry',
  },
  bento: {
    location: {
      title: 'Your medical trip, planned around your care.',
      subtext: 'Arrive at Cancun, Tulum or Cozumel International Airport. Airport–hotel transportation included.',
      image: media('a226357c-05b8-4151-a78b-5447d3ba987f', 'img1-hospi.jpg'),
      href: '#contact',
      ctaLabel: 'Plan my trip',
    },
    offer: {
      title: 'Financing available',
      subtext:
        'Choose a monthly payment. Finance your procedure and trip through more than 10 financial institutions with one simple inquiry.',
      image: media('0ba4985b-33b1-4ba1-b197-b360bd2f57fb', 'img3-hospi.jpg'),
      href: 'https://app.aureonfinancial.com/hospitality-cancun/apply/',
      ctaLabel: 'Choose my monthly payment',
    },
  },
  finance: {
    id: 'financing',
    pill: 'Financing available',
    title: 'Choose a Monthly Payment.',
    titleAccent: 'Finance Your Procedure and Trip.',
    lede: 'Explore personalized options from more than 10 financial institutions through one simple inquiry.',
    estimates: [
      { label: 'Estimated Total', value: '$10,077 USD' },
      { label: 'Estimated Monthly Payment', value: '$420 USD' },
    ],
    cta: 'Choose my monthly payment',
    href: 'https://app.aureonfinancial.com/hospitality-cancun/apply/',
    note: 'Offers, rates and terms are subject to approval.',
  },
  services: {
    eyebrow: 'Clinical Excellence',
    title: 'Our Highly Acclaimed Services',
    lede: 'Three primary medical specialties, delivered in accredited Costamed hospitals.',
    cta: 'Request Information',
    items: [
      {
        title: 'Plastic & Aesthetic Surgery',
        desc: 'Board-certified surgeons for body contouring, breast augmentation, tummy tucks, rhinoplasty, and facial rejuvenation in certified surgical suites.',
        note: 'From $4,774 USD',
        image: media('a806d34b-a073-4a7c-bc66-9192fae4695f', 'plastic-surgery.jpg'),
        href: '#prices',
        linkLabel: 'See plastic surgery prices',
      },
      {
        title: 'Exosomes & Cellular Therapy',
        desc: 'Regenerative protocols to support tissue repair, reduce inflammation, and restore vitality with Standard, Gold, and Platinum packages.',
        note: 'Standard · Gold · Platinum',
        image: media('1d513237-7313-432a-8bca-8709c3704564', 'exomas-celuas-madre.jpg'),
        href: '#stem-cells',
        linkLabel: 'See stem cell packages',
      },
      {
        title: 'Advanced Dental Care',
        desc: 'Restorative and cosmetic dentistry including implants, crowns, veneers, and smile makeovers at strong international savings.',
        note: 'From $518 USD',
        image: media('58a30f3c-4238-4179-ae32-713082ca5b71', 'dental-procedures.jpg'),
        href: '#prices',
        linkLabel: 'See dental prices',
      },
    ],
  },
  trip: {
    id: 'trip',
    eyebrow: 'Medical Travel Concierge',
    title: 'Your medical trip,',
    titleAccent: 'planned around your care.',
    lede: 'Flights, hotel nights, and airport transfers coordinated with your Costamed procedure.',
    cards: [
      {
        title: 'Flights',
        desc: 'Arrive at Cancun, Tulum or Cozumel International Airport.',
        note: 'Medical travel logistics',
        image: media('a226357c-05b8-4151-a78b-5447d3ba987f', 'img1-hospi.jpg'),
        href: '#contact',
        linkLabel: 'Plan my trip',
      },
      {
        title: 'Accommodations',
        desc: '3 hotel nights (double occupancy) included in every procedure package.',
        note: 'Included in packages',
        image: media('0ba4985b-33b1-4ba1-b197-b360bd2f57fb', 'img3-hospi.jpg'),
        href: '#contact',
        linkLabel: 'Plan my trip',
      },
      {
        title: 'Local Transportation',
        desc: 'Airport–hotel transportation included.',
        note: 'Included in packages',
        image: media('ae703693-6b82-4475-b24c-1d216e662b2f', 'img2-hospi.jpg'),
        href: '#contact',
        linkLabel: 'Plan my trip',
      },
    ],
  },
  prices: {
    id: 'prices',
    eyebrow: 'Medical Packages',
    title: 'Procedures &',
    titleAccent: 'package prices',
    lede:
      'Transparent package pricing across Costamed specialties — hospital care, hotel nights, and airport transfers included.',
    cta: 'Request quote',
    notIncludedTitle: 'Not included in package prices',
    notIncluded: [
      'Pre and Post Consultations',
      'Preoperative Lab Services',
      'Post Surgery Care',
      'Procedure Complications',
      'Air Transportation',
      'Additional Hotel Nights',
      'Additional Nights of Hospital stay',
    ],
    fine: '*Prices apply only in programmed medical procedures.',
    tabs: [
      {
        id: 'plastic',
        label: 'Plastic Surgery',
        items: [
          { name: 'Breast Augmentation w/ Implants', amount: '$4,774' },
          { name: 'Buttock Augmentation w/ Implants', amount: '$6,435', stay: '1 Night hospital stay' },
          { name: 'Tummy Tuck', amount: '$5,796', stay: '1 Night hospital stay' },
          { name: 'Facelift', amount: '$7,202', stay: '1 Night hospital stay' },
          { name: 'Mastopexy', amount: '$6,818', stay: '1 Night hospital stay' },
          { name: 'Mommy Makeover', amount: '$10,077', stay: '1 Night hospital stay', featured: true, label: 'Most requested' },
          { name: 'Liposculpture with BBL', amount: '$5,413', stay: '1 Night hospital stay' },
        ],
      },
      {
        id: 'dental',
        label: 'Dental',
        items: [
          { name: 'Unilateral Prosthesis', amount: '$646' },
          { name: 'Bilateral Prosthesis', amount: '$778' },
          { name: 'Aesthetic Prosthesis', amount: '$832' },
          { name: 'Acrylic Unit', amount: '$518' },
          { name: 'Unilateral Acrylic Prosthesis (2 or more)', amount: '$526' },
          { name: 'Bilateral Acrylic Prosthesis', amount: '$615' },
          { name: 'Dental Implant', amount: '$2,317', featured: true, label: 'Popular' },
          { name: 'Veneer', amount: '$727' },
          { name: 'Metal / Porcelain Crown', amount: '$627' },
          { name: 'Emax Crown', amount: '$727' },
          { name: 'Zirconia Crown', amount: '$777' },
          { name: 'Upper Complete Denture', amount: '$700' },
          { name: 'Lower Complete Denture', amount: '$700' },
          { name: 'Aesthetic Prosthesis Unit (1–2 units)', amount: '$523' },
        ],
      },
      {
        id: 'gastro',
        label: 'Gastroenterology',
        items: [
          { name: 'Gastric Balloon Placement', amount: '$3,368' },
          { name: 'Gastric Balloon Removal', amount: '$1,899' },
          { name: 'Hemorrhoid Ligation', amount: '$1,516' },
          { name: 'External Hemorrhoidectomy (Complex or Extensive)', amount: '$2,155' },
          { name: 'Endoscopy w/ Biopsy', amount: '$1,019' },
          { name: 'Colonoscopy w/ Biopsy', amount: '$1,302' },
          {
            name: 'Correction of Initial Incisional or Ventral Hernia',
            amount: '$5,218',
            stay: '3 Nights hospital stay',
            featured: true,
            label: 'Complex care',
          },
        ],
      },
      {
        id: 'gyn',
        label: 'Gynecology',
        items: [
          { name: 'Laparoscopic Hysterectomy', amount: '$7,905', stay: '2 Nights hospital stay', featured: true },
          { name: 'Laparoscopic Myomectomy', amount: '$7,905', stay: '2 Nights hospital stay' },
          { name: 'Laparoscopic Cystectomy', amount: '$4,966', stay: '1 Night hospital stay' },
          { name: 'Oophorectomy (Partial or Total, Unilateral)', amount: '$3,368', stay: '2 Nights hospital stay' },
        ],
      },
      {
        id: 'ent',
        label: 'Otorhinolaryngology',
        items: [
          { name: 'Tonsillectomy with Biopsy', amount: '$2,538', stay: '1 Night hospital stay' },
          { name: 'Turbinate Cauterization', amount: '$877' },
          { name: 'Septoplasty', amount: '$2,985', stay: '1 Night hospital stay' },
          { name: 'Primary Rhinoplasty Including Correction', amount: '$3,407', featured: true },
        ],
      },
      {
        id: 'general',
        label: 'General Surgery',
        items: [
          { name: 'Laparoscopic Appendectomy', amount: '$4,902', stay: '1 Night hospital stay' },
          { name: 'Umbilical Hernioplasty', amount: '$1,995' },
          { name: 'Open Inguinal Hernioplasty', amount: '$3,752', stay: '1 Night hospital stay' },
          { name: 'Laparoscopic Cholecystectomy', amount: '$5,030', stay: '1 Night hospital stay', featured: true },
        ],
      },
    ],
  },
  stem: {
    id: 'stem-cells',
    eyebrow: 'Regenerative Medicine',
    title: 'Stem Cells and Exosomes',
    lead:
      'Mesenchymal stem cells & exosomes derivated from donated human placental mesenchymal stem cells can exert anti-aging effects by promoting tissue repair and regeneration, modulating inflammation and immune responses, regulating cellular senescence, enhancing angiogenesis, protecting against oxidative stress and cell death, and modulating age-related epigenetic changes.',
    cta: 'Request Information',
    ctaNote:
      'Discover how stem cell and exosome therapy can enhance your well-being. Sign up for personalized information and pricing.',
    packageTabs: [
      {
        id: 'both',
        label: 'Stem Cell + Exosomes',
        tiers: [
          {
            name: 'Standard',
            dose: '100 million HP-MSCs + 400 IU of Exosomes',
            time: 'Time of application 1 ½ hours',
            includes: ['Personalized Concierge Service', 'Initial medical Assessment', 'Snack provided', 'Personalized follow-up'],
          },
          {
            name: 'Gold',
            featured: true,
            dose: '200 million HP-MSCs + 400 IU of Exosomes',
            time: 'Time of application 2 ½ hours',
            includes: ['Personalized Concierge Service', 'Initial medical Assessment', 'Diet recommendations', 'Snack provided', 'Personalized follow-up'],
          },
          {
            name: 'Platinum',
            dose: '300 million HP-MSCs + 400 IU of Exosomes',
            time: 'Time of application 3 ½ hours',
            includes: ['Personalized Concierge Service', 'Initial medical Assessment', 'Diet recommendations', 'Snack provided', 'Personalized follow-up'],
          },
        ],
      },
      {
        id: 'cells',
        label: 'Stem Cells',
        tiers: [
          {
            name: 'Standard',
            dose: '100 million HP-MSCs',
            time: 'Time of application 1 ½ hours',
            includes: ['Personalized Concierge Service', 'Initial medical Assessment', 'Snack provided', 'Personalized follow-up'],
          },
          {
            name: 'Gold',
            featured: true,
            dose: '200 million HP-MSCs',
            time: 'Time of application 2 ½ hours',
            includes: ['Personalized Concierge Service', 'Initial medical Assessment', 'Diet recommendations', 'Snack provided', 'Personalized follow-up'],
          },
          {
            name: 'Platinum',
            dose: '300 million HP-MSCs',
            time: 'Time of application 3 ½ hours',
            includes: ['Personalized Concierge Service', 'Initial medical Assessment', 'Diet recommendations', 'Snack provided', 'Personalized follow-up'],
          },
        ],
      },
      {
        id: 'exo',
        label: 'Exosomes',
        tiers: [
          {
            name: 'Standard',
            dose: '400 micrograms of exosome vial therapy',
            time: 'Time of application 1 hour',
            includes: ['Personalized Concierge Service', 'Initial medical Assessment', 'Snack provided', 'Personalized follow-up'],
          },
          {
            name: 'Gold',
            featured: true,
            dose: '800 micrograms of exosome vial therapy',
            time: 'Time of application 2 hours',
            includes: ['Personalized Concierge Service', 'Initial medical Assessment', 'Diet recommendations', 'Snack provided', 'Personalized follow-up'],
          },
          {
            name: 'Platinum',
            dose: '1,400 micrograms of exosome vial therapy',
            time: 'Time of application 3 hours',
            includes: ['Personalized Concierge Service', 'Initial medical Assessment', 'Diet recommendations', 'Snack provided', 'Personalized follow-up'],
          },
        ],
      },
    ],
  },
  spotlight: {
    eyebrow: 'Real Patient Experience',
    title: 'A Real Story. A Personal Journey.',
    image: media('a631f6db-e518-40e7-a59e-3d3570c580a0', 'patient-story-thumb.jpg'),
    quote:
      'Costamed transformed my recovery. The warmth of the medical team, the state-of-the-art facilities, and the peaceful Riviera Maya atmosphere made all the difference.',
    author: 'Gilbert Trill',
    role: 'Stem Cell & Regenerative Medicine Patient',
    lede:
      'Like hundreds of international patients traveling from the United States and Canada every year, Gilbert received personalized end-to-end guidance from our dedicated medical concierge—from pre-flight diagnostics to recovery.',
    videoLabel: 'Watch Gilbert’s Journey',
    videoHref: 'https://www.youtube.com/watch?v=rL-WiLqRg8I',
    tags: ['Stem Cells', 'Regenerative Medicine', 'Medical Concierge'],
  },
  team: {
    badge: 'Medical Staff',
    title: 'Meet our Medical Staff',
    lede: 'Specialists across our Costamed hospitals in the Riviera Maya and Cozumel.',
    members: [
      { name: 'Dr. Moisés Hernández', role: 'Dental Surgery', image: media('e6d72b16-f2af-4a4f-9d1c-d431c843e367', 'dr-moises-hernandez.jpg') },
      { name: 'Dr. Raúl Medina', role: 'Radiology', image: media('da0d63b5-0267-440e-bfd7-e9e8e63ffd35', 'dr-raul-medina.jpg') },
      { name: 'Dr. Rafael Moguel', role: 'Cardiology · Interventional Cardiology', image: media('33f67e8c-ad86-483f-b98f-8119c7f6660d', 'dr-rafael-moguel.jpg') },
      { name: 'Dr. Ricardo Segovia', role: 'Gastroenterology · Gastrointestinal Endoscopy', image: media('db879df9-0e04-43a8-9f37-09d076620b36', 'dr-ricardo-segovia.jpg') },
      { name: 'Dr. Ricardo Montero', role: 'Endoscopic, Bariatric & Metabolic Surgery', image: media('901c8b66-cba3-4852-b954-9d1a6344b63b', 'dr-ricardo-montero.jpg') },
      { name: 'Dr. Carlos García', role: 'Pediatrics', image: media('bb9cd12b-89bc-484b-a1f0-6282767d2858', 'dr-carlos-garcia.jpg') },
      { name: 'Dr. Joel Rodríguez', role: 'Neurosurgery', image: media('1d124903-0d6d-48e0-a013-7aa6224e7acb', 'dr-joel-rodriguez.jpg') },
      { name: 'Dra. Michel García', role: 'Obstetrics & Gynecology', image: media('dbee98e9-163c-4fb5-ab5c-6cc7a1d0ffac', 'dra-michel-garcia.jpg') },
      { name: 'Dr. Aldo Diosdado', role: 'Plastic Surgery', image: media('78d227f4-14ac-4033-8960-48fe9f3f9c7b', 'dr-aldo-diosdado.jpg') },
      { name: 'Dr. Salvador Martín', role: 'General Surgery', image: media('0ca1026b-4713-40ae-a5d5-dd2a13d583e9', 'dr-salvador-martin.jpg') },
      { name: 'Dr. Javier Vázquez Ordoñez', role: 'Anesthesiology', image: media('ae68a3ec-69a9-4206-b40f-a83c00defa47', 'dr-javier-vazquez.jpg') },
      { name: 'Dr. Jose Medina S.', role: 'Urology', image: media('a270f902-b9cd-4ce8-bc09-4901d5dc42de', 'dr-jose-medina.jpg') },
    ],
  },
  prefooter: {
    eyebrow: 'Begin your healthcare retreat',
    title: 'Ready to Begin Your Medical Journey in the Riviera Maya?',
    lede:
      'Submit an inquiry for general medical-travel information. With your permission, we may forward your request to Grupo Médico Costamed. This form does not confirm a clinical appointment.',
    cta: 'Request Information',
    image: media('047956cf-6fcb-4267-b950-83c98fc4d446', 'day.webp'),
  },
  footer: {
    blurb:
      'HospitalityCancun.com is an information and referral service operated by Smart Strategic Marketing, LLC. We provide general information about medical travel and, with your permission, forward your inquiry to Grupo Médico Costamed.',
    links: [
      { label: 'About Us', href: '#about' },
      { label: 'Clinical Services', href: '#services' },
      { label: 'Package Prices', href: '#prices' },
      { label: 'Stem Cells & Exosomes', href: '#stem-cells' },
      { label: 'Medical Staff', href: '#team' },
      { label: 'Patient Story', href: '#stories' },
      { label: 'Privacy Notice', href: 'privacy-notice.html' },
    ],
    hospitals: [
      'Cancun Hospital • Quintana Roo',
      'Playa del Carmen Hospital',
      'Cozumel Island Hospital',
      'Tulum Medical Center',
      'Puerto Morelos Clinic',
      'Mahahual Center',
    ],
    contact: {
      email: 'info@hospitalitycancun.com',
      phoneUS: '800 900 1133',
      phoneIntl: '+52 987 872 9400',
      address: 'Cancun, Quintana Roo, Mexico',
    },
    fine:
      'HospitalityCancun.com is not a medical provider and does not schedule or confirm clinical appointments. The medical procedures and clinical treatments described on this website are performed in accredited medical facilities by certified specialists of Grupo Médico Costamed. Individual treatment outcomes and recovery timelines vary depending on medical evaluation, individual health profiles, and pre-existing conditions. Information presented here does not substitute for personalized medical consultation.',
    copyright: '© 2026 Smart Strategic Marketing, LLC · HospitalityCancun.com. All rights reserved.',
  },
}

const US_STATES = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
  'District of Columbia', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
  'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
  'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
  'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington',
  'West Virginia', 'Wisconsin', 'Wyoming',
]

const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

const icon = (name) => {
  const paths = {
    arrow: '<path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>',
    x: '<path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>',
    chevL: '<path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>',
    chevR: '<path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>',
    crosshair: '<circle cx="12" cy="12" r="7" stroke="currentColor" stroke-width="1.8"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
    building: '<path d="M4 20V6l8-3 8 3v14M9 20v-6h6v6M9 10h.01M15 10h.01M9 14h.01M15 14h.01" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
    heart: '<path d="M12 21s-7-4.5-9.5-8.2C.4 9.8 2.2 6 6 6c2 0 3.2 1.2 4 2.2C10.8 7.2 12 6 14 6c3.8 0 5.6 3.8 3.5 6.8C19 16.5 12 21 12 21z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>',
  }
  return `<svg class="icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">${paths[name] || paths.arrow}</svg>`
}

const btn = (label, opts = {}) => {
  const { href = '#contact', variant = 'dark', short = '', extra = '', target = '', rel = '' } = opts
  const cls = ['btn', `btn--${variant}`, extra].filter(Boolean).join(' ')
  const t = target ? ` target="${target}"` : ''
  const r = rel ? ` rel="${rel}"` : ''
  const shortHtml = short
    ? `<span class="btn__short">${esc(short)}</span><span class="btn__full">${esc(label)}</span>`
    : `<span>${esc(label)}</span>`
  return `<a href="${href}" class="${cls}"${t}${r}><span class="btn__label"><span class="btn__flip">${shortHtml}</span><span class="btn__flip btn__flip--dup" aria-hidden="true">${shortHtml}</span></span><span class="btn__icon">${icon('arrow')}</span></a>`
}

const trust = (t, glass = true) => `
  <div class="trust ${glass ? 'trust--glass' : 'trust--solid'}">
    <div class="trust__avatars">${t.avatars.map((src) => `<img src="${src}" alt="">`).join('')}</div>
    <div class="trust__text"><p class="trust__title">${esc(t.title)}</p><p class="trust__sub">${esc(t.subtitle)}</p></div>
  </div>`

const css = `
:root{
  --font:"Plus Jakarta Sans",ui-sans-serif,system-ui,sans-serif;
  --canvas:#f8f9fa;--ink:#111827;--muted:#64748b;--accent:#143a52;--mint:#5eb8e8;--leaf:#5fad8f;
  --ease:cubic-bezier(0.22,1,0.36,1);--max:1440px;
}
*{box-sizing:border-box}
html{scroll-behavior:smooth;scroll-padding-top:88px}
body{margin:0;font-family:var(--font);background:var(--canvas);color:var(--ink);-webkit-font-smoothing:antialiased;overflow-x:clip}
img,video{max-width:100%;display:block}
a{color:inherit;text-decoration:none}
button{font:inherit;cursor:pointer;border:0;background:none;color:inherit}
::selection{background:color-mix(in srgb,var(--mint) 35%,white)}
.icon{width:1em;height:1em;display:block}
.wrap{max-width:var(--max);margin:0 auto;padding:0 12px}
@media(min-width:640px){.wrap{padding:0 24px}}

/* reveal */
.reveal{opacity:0;transform:translateY(40px);transition:opacity .7s var(--ease),transform .7s var(--ease);transition-delay:var(--d,0s)}
.reveal.is-in{opacity:1;transform:none}
.reveal--left{transform:translateX(-48px)}
.reveal--right{transform:translateX(48px)}
.reveal--pop{transform:translateY(24px) scale(.9)}
.reveal--fade{transform:none}
.stagger > .reveal{opacity:0}
.stagger.is-in > .reveal{opacity:1;transform:none}
@media(prefers-reduced-motion:reduce){
  .reveal,.stagger > .reveal{opacity:1!important;transform:none!important;transition:none!important}
  .hero-char{opacity:1!important;transform:none!important;filter:none!important;animation:none!important}
  .marquee__track{animation:none!important;transform:none!important}
}

/* buttons */
.btn{position:relative;display:inline-flex;align-items:center;gap:10px;flex-shrink:0;overflow:hidden;border-radius:999px;padding:6px 6px 6px 16px;font-size:14px;font-weight:600;letter-spacing:-.01em;transition:box-shadow .35s var(--ease),background .35s}
@media(min-width:640px){.btn{gap:12px;padding:8px 8px 8px 20px}}
.btn--dark{background:var(--accent);color:#fff}
.btn--dark:hover{box-shadow:0 16px 36px rgba(20,58,82,.28)}
.btn--soft{background:#fff;color:var(--ink);border:1px solid rgba(0,0,0,.08)}
.btn--soft:hover{box-shadow:0 12px 28px rgba(0,0,0,.08)}
.btn--light{background:rgba(255,255,255,.15);color:#fff;border:1px solid rgba(255,255,255,.25);backdrop-filter:blur(10px)}
.btn--light:hover{background:rgba(255,255,255,.25)}
.btn__label{position:relative;height:20px;overflow:hidden}
.btn__flip{display:block;transition:transform .5s var(--ease)}
.btn__flip--dup{position:absolute;inset:0;transform:translateY(100%)}
.btn:hover .btn__flip:not(.btn__flip--dup){transform:translateY(-100%)}
.btn:hover .btn__flip--dup{transform:translateY(0)}
.btn__short{display:inline}.btn__full{display:none}
@media(min-width:640px){.btn__short{display:none}.btn__full{display:inline}}
.btn__icon{display:grid;place-items:center;width:32px;height:32px;border-radius:999px;transition:transform .5s var(--ease)}
@media(min-width:640px){.btn__icon{width:36px;height:36px}}
.btn--dark .btn__icon{background:rgba(255,255,255,.15)}
.btn--soft .btn__icon{background:var(--accent);color:#fff}
.btn--light .btn__icon{background:#fff;color:var(--accent)}
.btn:hover .btn__icon{transform:translateX(2px) scale(1.05)}
.btn.w-full{width:100%;justify-content:center}
@media(min-width:640px){.btn.w-full{width:auto}.btn.w-full-always,.nav-drawer__cta .btn{width:100%}}

/* cards / scroll */
.h-scroll{display:flex;gap:12px;overflow-x:auto;overscroll-behavior-x:contain;scroll-snap-type:x mandatory;scroll-padding-inline:12px;padding-bottom:6px;-webkit-overflow-scrolling:touch;scrollbar-width:none}
.h-scroll::-webkit-scrollbar{display:none}
.h-scroll>*{flex:0 0 min(82vw,19.5rem);scroll-snap-align:start;min-width:0}
@media(min-width:640px){
  .h-scroll{display:grid;gap:20px;overflow:visible;scroll-snap-type:none;padding-bottom:0}
  .h-scroll>*{flex:unset;width:auto}
  .h-scroll--2{grid-template-columns:repeat(2,minmax(0,1fr))}
  .h-scroll--3{grid-template-columns:repeat(2,minmax(0,1fr))}
}
@media(min-width:1024px){.h-scroll--3{grid-template-columns:repeat(3,minmax(0,1fr))}}
.card-grad{position:relative;isolation:isolate;transition:border-color .45s var(--ease),box-shadow .45s var(--ease)}
.card-grad::before{content:"";position:absolute;inset:0;border-radius:inherit;pointer-events:none;z-index:1;opacity:0;transition:opacity .5s var(--ease);background:radial-gradient(520px 280px at 0% 0%,rgba(94,184,232,.28),transparent 58%),radial-gradient(460px 260px at 100% 100%,rgba(95,173,143,.24),transparent 58%),linear-gradient(135deg,rgba(94,184,232,.1),transparent 42%,rgba(95,173,143,.12))}
.card-grad::after{content:"";position:absolute;inset:0 0 auto;height:3px;border-radius:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;pointer-events:none;z-index:2;opacity:.55;transition:opacity .45s var(--ease),height .45s var(--ease);background:linear-gradient(90deg,#5eb8e8,#5fad8f 55%,#143a52)}
.card-grad:hover{border-color:rgba(94,184,232,.45)!important;box-shadow:0 18px 44px rgba(20,58,82,.12)}
.card-grad:hover::before{opacity:1}.card-grad:hover::after{opacity:1;height:4px}
.card-grad>*{position:relative;z-index:3}
.card-grad--dark::before{background:radial-gradient(480px 260px at 10% 0%,rgba(94,184,232,.35),transparent 55%),radial-gradient(420px 240px at 100% 100%,rgba(95,173,143,.28),transparent 55%),linear-gradient(160deg,rgba(255,255,255,.06),transparent 50%)}
.card-grad--dark::after{background:linear-gradient(90deg,#b8e4f5,#5eb8e8,#5fad8f,#fff);opacity:.85}
.card-grad--dark:hover{border-color:rgba(255,255,255,.28)!important;box-shadow:0 22px 48px rgba(20,58,82,.28)}

/* nav */
.nav-outer{position:sticky;top:12px;z-index:50;margin:0 12px}
@media(min-width:640px){.nav-outer{top:16px;margin:0 24px}}
.nav{position:relative;z-index:60;max-width:var(--max);margin:0 auto;display:flex;align-items:center;gap:8px;border-radius:999px;border:1px solid rgba(0,0,0,.05);background:rgba(255,255,255,.85);padding:6px 8px;box-shadow:0 4px 20px rgba(0,0,0,.04);backdrop-filter:blur(12px)}
@media(min-width:640px){.nav{gap:16px;padding:8px 16px}}
.nav__brand{flex:1;min-width:0;display:flex;align-items:center;border-radius:999px;background:#fff;padding:6px 8px}
.nav__brand img{height:28px;width:auto;max-width:140px;object-fit:contain}
@media(min-width:640px){.nav__brand img{height:32px;max-width:none}}
.nav__links{display:none;align-items:center;gap:4px}
@media(min-width:1024px){.nav__links{display:flex}}
.nav__links a{border-radius:999px;padding:8px 12px;font-size:14px;font-weight:500;color:rgba(17,24,39,.7)}
.nav__links a:hover{color:var(--ink)}
.nav__toggle{display:grid;place-items:center;width:40px;height:40px;border-radius:999px;background:var(--ink);color:#fff}
@media(min-width:1024px){.nav__toggle{display:none}}
.nav-drawer{display:none;position:fixed;inset:0;z-index:55;background:var(--ink);padding:112px 24px 40px}
.nav-drawer.is-open{display:block}
.nav-drawer__exit{position:absolute;right:20px;top:20px;display:inline-flex;align-items:center;gap:8px;border-radius:999px;border:1px solid rgba(255,255,255,.2);background:rgba(255,255,255,.1);padding:10px 16px;font-size:14px;font-weight:600;color:#fff;backdrop-filter:blur(8px)}
.nav-drawer nav{display:flex;flex-direction:column;gap:4px}
.nav-drawer nav a{border-radius:16px;padding:12px 8px;font-size:30px;font-weight:600;letter-spacing:-.02em;color:#fff}
.nav-drawer__cta{position:absolute;left:24px;right:24px;bottom:32px}
body.nav-open{overflow:hidden}

/* hero */
.hero{margin:12px}
@media(min-width:640px){.hero{margin:12px 24px}}
.hero__frame{position:relative;max-width:var(--max);margin:0 auto;min-height:calc(100svh - 5.25rem);display:flex;flex-direction:column;overflow:hidden;border-radius:22px}
@media(min-width:640px){.hero__frame{height:85vh;min-height:640px;border-radius:28px}}
.hero__media{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.hero__g1{position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.8),rgba(0,0,0,.35),rgba(0,0,0,.2))}
.hero__g2{position:absolute;inset:0;background:linear-gradient(to right,rgba(0,0,0,.5),transparent)}
.hero__content{position:relative;z-index:10;margin-top:auto;display:flex;flex-direction:column;gap:16px;padding:16px;padding-bottom:max(16px,env(safe-area-inset-bottom))}
@media(min-width:640px){.hero__content{gap:32px;padding:40px}}
@media(min-width:1024px){.hero__content{flex-direction:row;align-items:flex-end;justify-content:space-between;padding:48px}}
.hero__copy{max-width:42rem}
.hero__badges{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:10px;font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.06em}
@media(min-width:640px){.hero__badges{margin-bottom:16px;font-size:11px}}
.pill{display:inline-flex;align-items:center;border-radius:999px;padding:6px 12px;line-height:1.2}
.pill--mint{background:var(--mint);color:var(--accent)}
.pill--glass{border:1px solid rgba(255,255,255,.25);background:rgba(255,255,255,.1);color:rgba(255,255,255,.9);backdrop-filter:blur(8px)}
/* Keep hero trust fully out of flow on mobile (incl. images) */
@media(max-width:1023px){.hero__trust{display:none!important;visibility:hidden;pointer-events:none;height:0;overflow:hidden;margin:0;padding:0}}
.hero h1{margin:0;font-size:1.5rem;font-weight:600;line-height:1.12;letter-spacing:-.025em;color:#fff}
@media(min-width:640px){.hero h1{font-size:2.25rem}}
@media(min-width:768px){.hero h1{font-size:3.75rem}}
@media(min-width:1024px){.hero h1{font-size:4.5rem}}
.hero-char{display:inline-block;opacity:0;transform:translateY(20px);filter:blur(4px);animation:charIn .55s var(--ease) forwards}
@keyframes charIn{to{opacity:1;transform:none;filter:blur(0)}}
.hero__word{display:inline-block;white-space:nowrap}
.hero__accent{margin:10px 0 0;font-size:.95rem;font-weight:500;font-style:italic;letter-spacing:-.01em;color:var(--mint)}
@media(min-width:640px){.hero__accent{margin-top:16px;font-size:1.5rem}}
.hero__sub{margin:10px 0 0;max-width:36rem;font-size:14px;line-height:1.6;color:rgba(255,255,255,.85)}
@media(min-width:640px){.hero__sub{margin-top:16px;font-size:18px}}
.hero__ctas{margin-top:16px;display:flex;flex-direction:column;gap:10px;align-items:stretch}
@media(min-width:640px){.hero__ctas{margin-top:28px;flex-direction:row;flex-wrap:wrap;align-items:center;gap:12px}}
.btn-ghost{display:inline-flex;width:100%;align-items:center;justify-content:center;border-radius:999px;border:1px solid rgba(255,255,255,.4);background:rgba(255,255,255,.1);padding:12px 20px;font-size:14px;font-weight:600;color:#fff;backdrop-filter:blur(8px)}
.btn-ghost:hover{background:#fff;color:var(--accent)}
@media(min-width:640px){.btn-ghost{width:auto}}
.hero__ctas .btn.w-full{width:100%}
@media(min-width:640px){.hero__ctas .btn.w-full{width:auto}}
.hero__trust{display:none;width:100%;flex-shrink:0}
@media(min-width:1024px){.hero__trust{display:block!important;visibility:visible;height:auto;overflow:visible;width:320px;pointer-events:auto}}

.trust{display:flex;width:100%;min-width:260px;max-width:28rem;align-items:center;gap:12px;border-radius:16px;padding:14px;isolation:isolate;overflow:hidden}
.trust--glass{
  background:rgba(12,28,26,.62);
  border:1px solid rgba(255,255,255,.28);
  backdrop-filter:blur(14px) saturate(1.1);
  -webkit-backdrop-filter:blur(14px) saturate(1.1);
  color:#fff;
  box-shadow:0 10px 28px rgba(0,0,0,.22), inset 0 1px 0 rgba(255,255,255,.12);
}
.trust--solid{background:#fff;border:1px solid rgba(0,0,0,.05);color:var(--ink);box-shadow:0 4px 16px rgba(0,0,0,.05)}
.trust__avatars{display:flex;flex-shrink:0;position:relative;z-index:1}
.trust__avatars img{width:36px;height:36px;border-radius:999px;object-fit:cover;border:2px solid rgba(255,255,255,.55);margin-left:-10px;background:#1a3a48}
.trust__avatars img:first-child{margin-left:0}
.trust__text{position:relative;z-index:1;min-width:0;flex:1}
.trust__title{margin:0;font-size:14px;font-weight:600;line-height:1.3;color:#fff}
.trust__sub{margin:2px 0 0;font-size:12px;line-height:1.3;color:rgba(255,255,255,.88)}

/* sections common */
.sec{padding:48px 0}
@media(min-width:640px){.sec{padding:80px 0}}
.eyebrow{margin:0 0 12px;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.14em;color:var(--muted)}
.h2{margin:0;font-size:1.5rem;font-weight:600;letter-spacing:-.025em}
@media(min-width:640px){.h2{font-size:1.875rem}}
@media(min-width:768px){.h2{font-size:3rem}}
.lede{margin:12px 0 0;max-width:36rem;font-size:14px;color:#475569;line-height:1.6}
@media(min-width:640px){.lede{font-size:16px}}
.grad-text{background:linear-gradient(110deg,#5eb8e8,#5fad8f);-webkit-background-clip:text;background-clip:text;color:transparent;font-style:italic}

/* about */
.about-portraits{display:flex;flex-wrap:wrap;align-items:center;gap:12px;margin-bottom:24px}
.about-portraits .avs{display:flex}
.about-portraits .avs img{width:44px;height:44px;border-radius:999px;object-fit:cover;border:2px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,.08);margin-left:-12px}
.about-portraits .avs img:first-child{margin-left:0}
.chip{border-radius:999px;border:1px solid rgba(0,0,0,.08);background:#fff;padding:8px 16px;font-size:14px;font-weight:600}
.scrub{max-width:64rem;font-size:1.25rem;font-weight:500;line-height:1.3;letter-spacing:-.02em}
@media(min-width:640px){.scrub{font-size:1.5rem}}
@media(min-width:768px){.scrub{font-size:2.25rem}}
.scrub span{display:inline-block;margin-right:.28em;opacity:.2;transition:opacity .15s linear}
.pillar{height:100%;border-radius:20px;border:1px solid rgba(0,0,0,.06);background:#fff;padding:16px}
@media(min-width:640px){.pillar{border-radius:24px;padding:28px}}
.pillar__icon{display:grid;place-items:center;width:40px;height:40px;margin-bottom:16px;border-radius:999px;background:var(--canvas);color:var(--accent)}
.pillar h3{margin:0;font-size:18px;font-weight:600}
.pillar p{margin:8px 0 0;font-size:14px;line-height:1.6;color:#475569}

/* bento */
.bento{padding-bottom:40px}
@media(min-width:640px){.bento{padding-bottom:64px}}
.bento__grid{display:grid;gap:12px}
@media(min-width:640px){.bento__grid{gap:20px}}
@media(min-width:1024px){.bento__grid{grid-template-columns:repeat(12,1fr)}}
.zoom{position:relative;min-height:280px;overflow:hidden;border-radius:20px}
@media(min-width:640px){.zoom{min-height:360px;border-radius:24px}}
.zoom--wide{min-height:280px}
@media(min-width:1024px){.zoom--wide{grid-column:span 7;min-height:480px}.zoom--side{grid-column:span 5}}
.zoom img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform .5s var(--ease)}
.zoom:hover img{transform:scale(1.05)}
.zoom__shade{position:absolute;inset:0}
.zoom__btn{position:absolute;right:20px;top:20px;display:grid;place-items:center;width:44px;height:44px;border-radius:999px;background:#fff;color:var(--accent);box-shadow:0 8px 24px rgba(0,0,0,.15)}
.zoom__body{position:absolute;left:0;bottom:0;padding:16px;color:#fff}
@media(min-width:640px){.zoom__body{padding:32px}}
.zoom__body h3{margin:0;font-size:1.25rem;font-weight:600}
@media(min-width:640px){.zoom__body h3{font-size:1.875rem}}
.zoom__body p{margin:8px 0 0;font-size:14px;color:rgba(255,255,255,.85)}
.zoom__body a.link{display:inline-flex;margin-top:12px;font-size:14px;font-weight:600;text-decoration:underline;text-underline-offset:4px}

/* services cards */
.svc-head{display:flex;flex-direction:column;gap:16px;margin-bottom:24px}
@media(min-width:640px){.svc-head{flex-direction:row;align-items:flex-end;justify-content:space-between;margin-bottom:40px}}
.svc-card{display:flex;flex-direction:column;height:100%;overflow:hidden;border-radius:20px;border:1px solid rgba(226,232,240,.7);background:#fff;padding:14px}
@media(min-width:640px){.svc-card{border-radius:24px;padding:20px}}
.svc-card__img{margin-bottom:16px;overflow:hidden;border-radius:16px}
.svc-card__img img{aspect-ratio:16/10;width:100%;object-fit:cover;transition:transform .5s var(--ease)}
.svc-card:hover .svc-card__img img{transform:scale(1.05)}
.svc-card h3{margin:0;font-size:18px;font-weight:600}
@media(min-width:640px){.svc-card h3{font-size:24px}}
.svc-card .desc{margin:8px 0 0;font-size:14px;line-height:1.6;color:#475569}
.svc-card .note{margin:12px 0 0;font-size:14px;font-weight:600;color:var(--accent)}
.svc-card .more{margin:12px 0 0;display:inline-flex;font-size:14px;font-weight:600;color:var(--leaf)}
.svc-card .more:hover{color:var(--accent)}

/* trip — mobile swipe stack, desktop/tablet normal cards */
.trip-grid{display:none;gap:20px}
.trip-grid .trip-static{display:flex;flex-direction:column;height:100%;overflow:hidden;border-radius:24px;border:1px solid rgba(0,0,0,.08);background:#fff;box-shadow:0 12px 28px rgba(20,58,82,.08)}
.trip-grid .trip-static__img{position:relative;aspect-ratio:16/10;overflow:hidden}
.trip-grid .trip-static__img img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform .5s var(--ease)}
.trip-grid .trip-static:hover .trip-static__img img{transform:scale(1.05)}
.trip-grid .trip-static__body{display:flex;flex:1;flex-direction:column;padding:20px 22px 22px}
.trip-grid .trip-static__body .note{margin:0;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.12em;color:var(--muted)}
.trip-grid .trip-static__body h3{margin:6px 0 0;font-size:1.35rem;font-weight:600}
.trip-grid .trip-static__body p{margin:8px 0 0;font-size:14px;line-height:1.6;color:#475569}
.trip-grid .trip-static__body a{margin-top:auto;padding-top:16px;display:inline-flex;align-items:center;gap:6px;font-size:14px;font-weight:600;color:var(--leaf)}
.trip-stack{max-width:28rem;margin:0 auto}
.trip-stage{position:relative;height:440px;width:100%}
.trip-card,.trip-peek{position:absolute;inset:0 0 auto;height:calc(100% - 28px);display:flex;flex-direction:column;overflow:hidden;border-radius:22px;border:1px solid rgba(0,0,0,.08);background:#fff;box-shadow:0 22px 50px rgba(20,58,82,.16);user-select:none;touch-action:pan-y}
.trip-peek{pointer-events:none;border-color:rgba(0,0,0,.06);box-shadow:0 12px 28px rgba(20,58,82,.1)}
.trip-card{z-index:20;cursor:grab}
.trip-card:active{cursor:grabbing}
.trip-card__img{position:relative;height:48%;min-height:160px;overflow:hidden}
.trip-card__img img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;pointer-events:none}
.trip-card__body{display:flex;flex:1;flex-direction:column;padding:20px}
.trip-card__body .note{margin:0;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.12em;color:var(--muted)}
.trip-card__body h3{margin:6px 0 0;font-size:24px;font-weight:600}
.trip-card__body p{margin:8px 0 0;font-size:14px;line-height:1.6;color:#475569}
.trip-card__body a{margin-top:auto;padding-top:16px;display:inline-flex;align-items:center;gap:6px;font-size:14px;font-weight:600;color:var(--leaf)}
.trip-nav{margin-top:8px;display:flex;align-items:center;justify-content:space-between;gap:12px}
.trip-nav button.round{display:grid;place-items:center;width:40px;height:40px;border-radius:999px;border:1px solid rgba(0,0,0,.1);background:#fff;color:var(--accent)}
.trip-dots{display:flex;align-items:center;gap:8px}
.trip-dots button{height:8px;width:8px;border-radius:999px;background:#cbd5e1;transition:all .25s}
.trip-dots button.is-on{width:28px;background:var(--accent)}
.trip-hint{margin:12px 0 0;text-align:center;font-size:12px;color:var(--muted)}
@media(min-width:640px){
  .trip-stack{display:none!important}
  .trip-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}
}
@media(min-width:1024px){
  .trip-grid{grid-template-columns:repeat(3,minmax(0,1fr))}
}

/* finance */
.finance-card{position:relative;overflow:hidden;border-radius:22px;border:1px solid rgba(255,255,255,.2);background:linear-gradient(160deg,#143a52,#1a4660);padding:32px 20px;text-align:center;color:#fff}
@media(min-width:640px){.finance-card{border-radius:28px;padding:44px 40px}}
.finance-card .blob{position:absolute;border-radius:999px;filter:blur(48px);pointer-events:none}
.finance-est{margin:24px auto 0;display:grid;gap:12px;max-width:32rem;border-radius:20px;background:#fff;padding:16px;text-align:left;color:var(--ink)}
@media(min-width:640px){.finance-est{grid-template-columns:1fr 1fr;padding:20px}}
.finance-est strong{display:block;margin-top:4px;font-size:24px}

/* stem */
.stem-intro{border-radius:20px;border:1px solid rgba(0,0,0,.06);background:#fff;padding:20px}
@media(min-width:640px){.stem-intro{border-radius:28px;padding:40px}}
.tabs{display:flex;flex-wrap:nowrap;gap:4px;overflow-x:auto;border-radius:999px;border:1px solid rgba(20,58,82,.1);background:rgba(20,58,82,.05);padding:6px;scrollbar-width:none}
.tabs::-webkit-scrollbar{display:none}
.tabs button{flex-shrink:0;white-space:nowrap;border-radius:999px;padding:8px 12px;font-size:12px;font-weight:600}
@media(min-width:640px){.tabs button{padding:10px 14px;font-size:13px}}
.tabs button.is-on{background:var(--ink);color:#fff;box-shadow:0 8px 18px rgba(20,58,82,.18)}
.tabs button:not(.is-on){color:var(--muted)}
.tabs--stem{width:fit-content;max-width:100%;margin:0 auto;justify-content:center}
.tabs--stem button{padding:8px 14px}
@media(min-width:640px){.tabs--stem button{padding:10px 18px}}
.tier{display:flex;flex-direction:column;height:100%;overflow:hidden;border-radius:20px;border:1px solid rgba(20,58,82,.1);background:linear-gradient(180deg,#fff,#f7fafc);padding:16px;box-shadow:0 12px 28px rgba(20,58,82,.06)}
@media(min-width:640px){.tier{border-radius:28px;padding:24px}}
.tier--feat{border-color:transparent;background:linear-gradient(165deg,#143a52,#1a5f8a 52%,#143a52);color:#fff;box-shadow:0 18px 42px rgba(20,58,82,.2)}
.tier h3{margin:0;font-size:24px;font-weight:600}
.tier .dose{margin:8px 0 0;font-size:14px;font-weight:600;color:var(--leaf)}
.tier--feat .dose{color:#9fd6c0}
.tier .time{margin:4px 0 0;font-size:14px;color:var(--muted)}
.tier--feat .time{color:rgba(255,255,255,.7)}
.tier ul{margin:20px 0 0;padding:16px 0 0;border-top:1px solid rgba(0,0,0,.06);list-style:none;font-size:14px;color:#475569}
.tier--feat ul{border-color:rgba(255,255,255,.15);color:rgba(255,255,255,.9)}
.tier li{display:flex;gap:10px;margin-top:8px}
.tier li:first-child{margin-top:0}
.check{display:grid;place-items:center;flex-shrink:0;width:14px;height:14px;margin-top:2px;border-radius:999px;background:var(--leaf);color:#fff;font-size:9px;font-weight:700}
.stem-cta{margin-top:32px;display:flex;flex-direction:column;gap:16px;border-radius:20px;border:1px solid rgba(0,0,0,.06);background:#fff;padding:20px}
@media(min-width:640px){.stem-cta{flex-direction:row;align-items:center;justify-content:space-between;border-radius:24px;padding:28px}}

/* prices */
.prices{position:relative;overflow:clip;background:var(--accent);padding:56px 0;color:#fff}
@media(min-width:640px){.prices{padding:96px 0}}
.prices .blob{position:absolute;border-radius:999px;filter:blur(48px);pointer-events:none}
.prices-panel{overflow:hidden;border-radius:24px;background:var(--canvas);color:var(--ink);box-shadow:0 30px 80px rgba(0,0,0,.25)}
@media(min-width:640px){.prices-panel{border-radius:32px}}
.price-tabs{border-bottom:1px solid rgba(0,0,0,.06);background:#fff;padding:12px}
.price-tabs .tabs{border:0;background:transparent;padding:0;border-radius:0}
.price-tabs .tabs button.is-on{background:var(--accent);box-shadow:none}
.feat-pkg{margin-bottom:16px;overflow:hidden;border-radius:20px;background:var(--accent);color:#fff}
@media(min-width:640px){.feat-pkg{border-radius:24px}}
.feat-pkg__inner{position:relative;display:grid;gap:20px;padding:20px}
@media(min-width:640px){.feat-pkg__inner{grid-template-columns:1.4fr auto;align-items:flex-end;padding:28px}}
.pkg-list{overflow:hidden;border-radius:18px;border:1px solid rgba(0,0,0,.06);background:#fff}
.pkg-row{display:grid;gap:12px;padding:16px;border-bottom:1px solid rgba(0,0,0,.05);transition:background .3s}
.pkg-row:last-child{border-bottom:0}
.pkg-row:hover{background:linear-gradient(90deg,rgba(94,184,232,.08),rgba(95,173,143,.06),transparent)}
@media(min-width:640px){.pkg-row{grid-template-columns:minmax(0,1.4fr) auto auto;align-items:center;gap:24px;padding:20px}}
.pkg-row h3{margin:0;font-size:16px;font-weight:600}
.pkg-row .amt{font-size:20px;font-weight:600;color:var(--accent)}
@media(min-width:640px){.pkg-row .amt{font-size:24px;justify-self:end}}
.pkg-row .quote{display:inline-flex;align-items:center;gap:6px;font-size:14px;font-weight:600;color:var(--leaf)}
@media(min-width:640px){.pkg-row .quote{justify-self:end}}

/* spotlight */
.story{position:relative;min-height:420px;overflow:hidden;border-radius:20px;cursor:pointer;outline:none}
@media(min-width:640px){.story{min-height:480px;border-radius:28px}}
.story img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform .7s var(--ease)}
.story:hover img,.story.is-open img{transform:scale(1.05)}
.story__shade,.story__shade2{position:absolute;inset:0;transition:opacity .5s}
.story__shade{background:linear-gradient(to top,rgba(0,0,0,.7),rgba(0,0,0,.2),transparent)}
.story:hover .story__shade,.story.is-open .story__shade{opacity:0}
.story__shade2{background:linear-gradient(to top,rgba(0,0,0,.92),rgba(0,0,0,.7),rgba(0,0,0,.35));opacity:0}
@media(min-width:640px){.story__shade2{background:linear-gradient(to right,rgba(0,0,0,.9),rgba(0,0,0,.65),rgba(0,0,0,.2))}}
.story:hover .story__shade2,.story.is-open .story__shade2{opacity:1}
.story__front,.story__detail{position:relative;z-index:10;display:flex;flex-direction:column;justify-content:space-between;min-height:420px;padding:20px;color:#fff;transition:opacity .5s,transform .5s}
@media(min-width:640px){.story__front,.story__detail{min-height:480px;padding:40px}}
.story:hover .story__front,.story.is-open .story__front{opacity:0;transform:translateY(12px);pointer-events:none}
.story__detail{position:absolute;inset:0;z-index:20;justify-content:flex-end;opacity:0;transform:translateY(16px);pointer-events:none}
@media(min-width:1024px){.story__detail{max-width:42rem;justify-content:center}}
.story:hover .story__detail,.story.is-open .story__detail{opacity:1;transform:none;pointer-events:auto}

/* team marquee */
.marquee{overflow:hidden}
.marquee__track{display:flex;width:max-content;gap:20px;animation:marquee 50s linear infinite}
.marquee:hover .marquee__track{animation-play-state:paused}
@keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}
.doc{width:180px;flex-shrink:0;overflow:hidden;border-radius:20px;border:1px solid rgba(0,0,0,.06);background:#fff;padding:10px}
@media(min-width:640px){.doc{width:280px;border-radius:24px;padding:12px}}
.doc img{aspect-ratio:3/4;width:100%;object-fit:cover;border-radius:16px;transition:transform .5s var(--ease)}
.doc:hover img{transform:scale(1.05)}
.doc h3{margin:16px 8px 0;font-size:16px;font-weight:600}
.doc p{margin:4px 8px 8px;font-size:14px;color:var(--muted)}

/* prefooter */
.prefoot{margin:0 12px 16px}
@media(min-width:640px){.prefoot{margin:0 24px 24px}}
.prefoot__frame{position:relative;max-width:var(--max);margin:0 auto;min-height:380px;overflow:hidden;border-radius:20px}
@media(min-width:640px){.prefoot__frame{min-height:420px;border-radius:28px}}
.prefoot__frame img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.prefoot__body{position:relative;z-index:10;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-end;gap:20px;min-height:380px;padding:20px;color:#fff}
@media(min-width:640px){.prefoot__body{min-height:420px;padding:48px}}
@media(min-width:1024px){.prefoot__body{flex-direction:row;align-items:flex-end;justify-content:space-between}}
.prefoot__cta{width:100%;max-width:20rem;display:flex;flex-direction:column;align-items:center;gap:12px}
.prefoot__cta .trust{width:100%;min-width:0;max-width:100%}
.prefoot__cta .btn{width:auto!important;align-self:center;justify-content:center}

/* footer */
footer{background:var(--ink);color:#fff}
.foot-grid{display:grid;gap:40px;padding:56px 12px;max-width:var(--max);margin:0 auto}
@media(min-width:640px){.foot-grid{padding:56px 24px}}
@media(min-width:768px){.foot-grid{grid-template-columns:1fr 1fr}}
@media(min-width:1024px){.foot-grid{grid-template-columns:repeat(4,1fr)}}
.foot-grid h3{margin:0;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.14em;color:rgba(255,255,255,.5)}
.foot-grid ul{margin:16px 0 0;padding:0;list-style:none}
.foot-grid li{margin-top:8px;font-size:14px;color:rgba(255,255,255,.85)}
.foot-grid img{height:36px;filter:brightness(0) invert(1)}
.foot-fine{border-top:1px solid rgba(255,255,255,.1);padding:20px 12px;max-width:var(--max);margin:0 auto}
@media(min-width:640px){.foot-fine{padding:20px 24px}}

/* modal */
.modal{position:fixed;inset:0;z-index:100;display:none;align-items:flex-end;justify-content:center}
@media(min-width:640px){.modal{align-items:center;padding:16px}}
.modal.is-open{display:flex}
.modal__backdrop{position:absolute;inset:0;background:rgba(12,28,26,.78);backdrop-filter:blur(2px);border:0;width:100%;cursor:pointer}
.modal__dialog{position:relative;z-index:10;display:flex;flex-direction:column;width:100%;max-width:720px;max-height:92vh;overflow:hidden;border-radius:24px 24px 0 0;background:#fff;box-shadow:0 30px 80px rgba(0,0,0,.35)}
@media(min-width:640px){.modal__dialog{border-radius:28px}}
.modal__head{display:flex;align-items:flex-start;justify-content:space-between;gap:12px;border-bottom:1px solid rgba(0,0,0,.06);padding:16px 20px}
@media(min-width:640px){.modal__head{padding:20px 28px}}
.modal__close{display:grid;place-items:center;width:40px;height:40px;flex-shrink:0;border-radius:999px;background:var(--canvas);color:var(--accent)}
.modal__close:hover{background:var(--accent);color:#fff}
.modal form{display:grid;gap:12px;overflow-y:auto;padding:20px;flex:1}
@media(min-width:640px){.modal form{grid-template-columns:1fr 1fr;gap:16px;padding:24px 28px}}
.modal label.field{display:block;font-size:13px;font-weight:600}
.modal label.field > *{margin-top:6px}
.modal input[type=text],.modal input[type=email],.modal input[type=tel],.modal select{
  width:100%;border-radius:12px;border:1px solid rgba(0,0,0,.1);background:var(--canvas);padding:10px 14px;font-size:14px;outline:none
}
.modal input:focus,.modal select:focus{border-color:var(--mint);box-shadow:0 0 0 3px rgba(94,184,232,.3)}
.modal fieldset{border:0;padding:0;margin:0}
@media(min-width:640px){.modal fieldset,.modal .span2,.modal .actions,.modal .note{grid-column:span 2}}
.modal legend{font-size:13px;font-weight:600}
.modal .radios{display:flex;flex-wrap:wrap;gap:8px 16px;margin-top:8px;font-size:14px}
.modal .consent{display:flex;gap:12px;font-size:14px;line-height:1.5;color:#475569}
.modal .actions{display:flex;flex-direction:column;gap:12px}
@media(min-width:640px){.modal .actions{flex-direction:row;align-items:center;justify-content:space-between}}
.modal .submit{display:inline-flex;align-items:center;justify-content:center;border-radius:999px;background:var(--accent);padding:12px 20px;font-size:14px;font-weight:600;color:#fff}
.modal .submit:hover{background:var(--ink)}
.modal .note{font-size:14px}.modal .note.ok{color:var(--leaf)}.modal .note.err{color:#dc2626}
body.modal-open{overflow:hidden}

.sec-head{display:flex;flex-direction:column;gap:16px;margin-bottom:24px}
@media(min-width:640px){.sec-head{flex-direction:row;align-items:flex-end;justify-content:space-between;margin-bottom:32px}}
.link-mint{color:var(--mint)}.text-center{text-align:center}
.mt-4{margin-top:16px}.mt-6{margin-top:24px}.mt-8{margin-top:32px}.mb-6{margin-bottom:24px}
.hidden-sm{display:none}@media(min-width:640px){.hidden-sm{display:inline-flex}}
.only-sm{display:inline-flex}@media(min-width:640px){.only-sm{display:none}}
`

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>${esc(brand.name)} | Medical Travel Information &amp; Referral</title>
<meta name="description" content="HospitalityCancun.com is an information and referral service operated by Smart Strategic Marketing, LLC. We provide general information about medical travel and, with your permission, forward your inquiry to Grupo Médico Costamed."/>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;1,500&display=swap" rel="stylesheet"/>
<style>${css}</style>
</head>
<body>
<header class="nav-outer">
  <div class="nav">
    <a class="nav__brand" href="#top"><img src="${brand.logo}" alt="${esc(brand.name)}"/></a>
    <nav class="nav__links" aria-label="Primary">
      ${brand.nav.map((n) => `<a href="${n.href}">${esc(n.label)}</a>`).join('')}
    </nav>
    ${btn(brand.cta.label, { short: 'Request', extra: 'nav-book' })}
    <button type="button" class="nav__toggle" id="navToggle" aria-label="Open menu">${icon('menu')}</button>
  </div>
  <div class="nav-drawer" id="navDrawer" hidden>
    <button type="button" class="nav-drawer__exit" id="navExit">Exit ${icon('x')}</button>
    <nav aria-label="Mobile">
      ${brand.nav.map((n) => `<a href="${n.href}" data-close-nav>${esc(n.label)}</a>`).join('')}
    </nav>
    <div class="nav-drawer__cta">${btn(brand.cta.label, { extra: 'w-full', short: '' })}</div>
  </div>
</header>

<main>
<section class="hero" id="top">
  <div class="hero__frame">
    <video class="hero__media" autoplay muted loop playsinline poster="${brand.hero.image}">
      <source src="${brand.hero.video}" type="video/mp4"/>
    </video>
    <div class="hero__g1"></div><div class="hero__g2"></div>
    <div class="hero__content">
      <div class="hero__copy">
        <div class="hero__badges reveal reveal--up" data-immediate>
          <span class="pill pill--mint">${esc(brand.hero.badgeStrong)}</span>
          <span class="pill pill--glass">${esc(brand.hero.badgeText)}</span>
        </div>
        <h1 class="hero-headline" aria-label="${esc(brand.hero.headline)}"></h1>
        <p class="hero__accent reveal reveal--up" data-immediate style="--d:.15s">${esc(brand.hero.accent)}</p>
        <p class="hero__sub reveal reveal--up" data-immediate style="--d:.22s">${esc(brand.hero.subheadline)}</p>
        <div class="hero__ctas reveal reveal--up" data-immediate style="--d:.3s">
          ${btn(brand.hero.cta, { variant: 'light', extra: 'w-full' })}
          <a class="btn-ghost" href="${brand.hero.ctaSecondaryHref}">${esc(brand.hero.ctaSecondary)}</a>
        </div>
      </div>
      <div class="hero__trust reveal reveal--pop" data-immediate style="--d:.35s">${trust(brand.hero.trust)}</div>
    </div>
  </div>
</section>

<section class="sec wrap" id="about">
  <div class="about-portraits reveal reveal--left">
    <div class="avs">${brand.about.portraits.map((s) => `<img src="${s}" alt="">`).join('')}</div>
    <span class="chip">${esc(brand.about.experience)}</span>
  </div>
  <p class="eyebrow reveal">${esc(brand.about.eyebrow)}</p>
  <h2 class="h2 reveal">${esc(brand.about.title)}</h2>
  <p class="scrub mt-6" id="scrubText" data-text="${esc(brand.about.manifesto)}"></p>
  <div class="mt-8 reveal">${btn(brand.about.cta, { variant: 'soft', short: 'Inquiry', extra: 'w-full' })}</div>
  <div class="h-scroll h-scroll--3 mt-8 stagger" style="margin-left:-12px;margin-right:-12px;padding-left:12px;padding-right:12px">
    ${brand.about.pillars
      .map(
        (p, i) => `
      <article class="pillar card-grad reveal reveal--pop" style="--d:${0.12 * i}s">
        <span class="pillar__icon">${icon(['crosshair', 'building', 'heart'][i])}</span>
        <h3>${esc(p.title)}</h3><p>${esc(p.desc)}</p>
      </article>`,
      )
      .join('')}
  </div>
</section>

<section class="bento wrap" id="clinic">
  <div class="bento__grid">
    <div class="zoom zoom--wide reveal reveal--left">
      <img src="${brand.bento.location.image}" alt=""/>
      <div class="zoom__shade" style="background:linear-gradient(to top,rgba(0,0,0,.7),rgba(0,0,0,.2),transparent)"></div>
      <a class="zoom__btn" href="#contact" aria-label="${esc(brand.bento.location.ctaLabel)}">${icon('arrow')}</a>
      <div class="zoom__body">
        <h3>${esc(brand.bento.location.title)}</h3>
        <p>${esc(brand.bento.location.subtext)}</p>
        <a class="link" href="#contact">${esc(brand.bento.location.ctaLabel)}</a>
      </div>
    </div>
    <div class="zoom zoom--side reveal reveal--right" style="--d:.12s">
      <img src="${brand.bento.offer.image}" alt=""/>
      <div class="zoom__shade" style="background:linear-gradient(to top,rgba(20,58,82,.9),rgba(20,58,82,.45),transparent)"></div>
      <a class="zoom__btn" href="${brand.bento.offer.href}" target="_blank" rel="noopener noreferrer" aria-label="${esc(brand.bento.offer.ctaLabel)}">${icon('arrow')}</a>
      <div class="zoom__body">
        <p class="eyebrow" style="color:var(--mint)">${esc(brand.bento.offer.title)}</p>
        <p style="font-size:1.125rem;font-weight:600;margin:0">${esc(brand.bento.offer.subtext)}</p>
        <a class="link" href="${brand.bento.offer.href}" target="_blank" rel="noopener noreferrer">${esc(brand.bento.offer.ctaLabel)}</a>
      </div>
    </div>
  </div>
</section>

<section class="sec wrap" id="services">
  <div class="svc-head">
    <div class="reveal reveal--left">
      <p class="eyebrow">${esc(brand.services.eyebrow)}</p>
      <h2 class="h2">${esc(brand.services.title)}</h2>
      <p class="lede">${esc(brand.services.lede)}</p>
    </div>
    <div class="reveal reveal--right" style="--d:.1s">${btn(brand.services.cta, { variant: 'soft', short: 'Request', extra: 'w-full' })}</div>
  </div>
  <div class="h-scroll h-scroll--3 stagger" style="margin-left:-12px;margin-right:-12px;padding-left:12px;padding-right:12px">
    ${brand.services.items
      .map(
        (item, i) => `
      <article class="svc-card card-grad reveal reveal--pop" style="--d:${0.09 * i}s">
        <div class="svc-card__img"><img src="${item.image}" alt=""/></div>
        <h3>${esc(item.title)}</h3>
        <p class="desc">${esc(item.desc)}</p>
        <p class="note">${esc(item.note)}</p>
        <a class="more" href="${item.href}">${esc(item.linkLabel)}</a>
      </article>`,
      )
      .join('')}
  </div>
</section>

<section class="sec wrap" id="trip">
  <div class="sec-head">
    <div class="reveal reveal--left" style="max-width:42rem">
      <p class="eyebrow">${esc(brand.trip.eyebrow)}</p>
      <h2 class="h2">${esc(brand.trip.title)} <span class="grad-text">${esc(brand.trip.titleAccent)}</span></h2>
      <p class="lede">${esc(brand.trip.lede)}</p>
    </div>
    <div class="reveal reveal--right" style="--d:.08s">${btn('Plan my trip', { variant: 'soft', short: 'Plan', extra: 'w-full' })}</div>
  </div>
  <div class="trip-grid reveal stagger">
    ${brand.trip.cards
      .map(
        (card, i) => `
      <article class="trip-static card-grad reveal reveal--pop" style="--d:${0.08 * i}s">
        <div class="trip-static__img"><img src="${card.image}" alt="${esc(card.title)}"/></div>
        <div class="trip-static__body">
          <p class="note">${esc(card.note)}</p>
          <h3>${esc(card.title)}</h3>
          <p>${esc(card.desc)}</p>
          <a href="${card.href}">${esc(card.linkLabel)} →</a>
        </div>
      </article>`,
      )
      .join('')}
  </div>
  <div class="reveal trip-stack" id="tripStack"></div>
</section>

<section class="wrap" id="financing" style="padding-bottom:40px">
  <div class="finance-card card-grad card-grad--dark reveal reveal--pop">
    <span class="blob" style="left:-64px;top:-64px;width:192px;height:192px;background:rgba(94,184,232,.25)"></span>
    <span class="blob" style="right:-64px;bottom:-80px;width:224px;height:224px;background:rgba(95,173,143,.2)"></span>
    <div style="position:relative;z-index:1;max-width:42rem;margin:0 auto">
      <span class="pill" style="border:1px solid rgba(255,255,255,.3);background:rgba(255,255,255,.15);font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.12em">${esc(brand.finance.pill)}</span>
      <h2 class="h2 mt-4" style="color:#fff">${esc(brand.finance.title)} <span style="background:linear-gradient(110deg,#e8f6ff,#5eb8e8 45%,#5fad8f);-webkit-background-clip:text;background-clip:text;color:transparent">${esc(brand.finance.titleAccent)}</span></h2>
      <p style="margin:12px auto 0;max-width:36rem;font-size:14px;line-height:1.6;color:rgba(255,255,255,.85)">${esc(brand.finance.lede)}</p>
      <div class="finance-est">
        ${brand.finance.estimates.map((e) => `<div><span style="font-size:12px;font-weight:600;color:var(--muted)">${esc(e.label)}</span><strong>${esc(e.value)}</strong></div>`).join('')}
        <div style="grid-column:1/-1;display:flex;justify-content:center">${btn(brand.finance.cta, { href: brand.finance.href, target: '_blank', rel: 'noopener noreferrer', short: 'Choose payment', extra: 'w-full' })}</div>
      </div>
      <p style="margin:16px 0 0;font-size:12px;color:rgba(255,255,255,.7)">${esc(brand.finance.note)}</p>
    </div>
  </div>
</section>

<section class="sec wrap" id="stem-cells">
  <div class="stem-intro reveal">
    <p class="eyebrow">${esc(brand.stem.eyebrow)}</p>
    <h2 class="h2">${esc(brand.stem.title)}</h2>
    <p class="lede" style="max-width:56rem;margin-top:16px">${esc(brand.stem.lead)}</p>
  </div>
  <div class="mt-8 reveal" style="--d:.08s">
    <div class="tabs tabs--stem" role="tablist" aria-label="Therapy type" id="stemTabs">
      ${brand.stem.packageTabs.map((t, i) => `<button type="button" role="tab" data-stem="${t.id}" class="${i === 0 ? 'is-on' : ''}">${esc(t.label)}</button>`).join('')}
    </div>
  </div>
  <div id="stemPanel" class="mt-6"></div>
  <div class="stem-cta reveal" style="--d:.1s">
    <p style="margin:0;max-width:36rem;font-size:14px;color:#475569">${esc(brand.stem.ctaNote)}</p>
    ${btn(brand.stem.cta, { extra: 'w-full' })}
  </div>
</section>

<section class="prices" id="prices">
  <span class="blob" style="left:-96px;top:0;width:420px;height:420px;background:rgba(94,184,232,.2)"></span>
  <span class="blob" style="right:-64px;bottom:40px;width:360px;height:360px;background:rgba(95,173,143,.2)"></span>
  <div class="wrap" style="position:relative">
    <div class="reveal reveal--left mb-6" style="max-width:48rem">
      <p class="eyebrow" style="color:var(--mint)">${esc(brand.prices.eyebrow)}</p>
      <h2 class="h2" style="color:#fff">${esc(brand.prices.title)} <span style="font-style:italic;color:var(--mint)">${esc(brand.prices.titleAccent)}</span></h2>
      <p style="margin:16px 0 0;max-width:36rem;font-size:14px;line-height:1.6;color:rgba(255,255,255,.75)">${esc(brand.prices.lede)}</p>
    </div>
    <div class="prices-panel">
      <div class="price-tabs">
        <div class="tabs" role="tablist" aria-label="Specialty" id="priceTabs">
          ${brand.prices.tabs.map((t, i) => `<button type="button" role="tab" data-price="${t.id}" class="${i === 0 ? 'is-on' : ''}">${esc(t.label)}</button>`).join('')}
        </div>
      </div>
      <div id="pricePanel" style="padding:12px"></div>
      <div style="border-top:1px solid rgba(0,0,0,.06);background:#fff;padding:16px 20px">
        <details>
          <summary style="display:flex;align-items:center;justify-content:space-between;gap:12px;font-size:14px;font-weight:600;cursor:pointer;list-style:none">${esc(brand.prices.notIncludedTitle)}<span style="display:grid;place-items:center;width:32px;height:32px;border-radius:999px;background:var(--canvas)">+</span></summary>
          <ul style="margin:16px 0 0;padding:0;list-style:none;display:grid;gap:8px">
            ${brand.prices.notIncluded.map((n) => `<li style="display:flex;gap:8px;font-size:14px;color:#475569"><span style="margin-top:8px;width:6px;height:6px;border-radius:999px;background:#cbd5e1;flex-shrink:0"></span>${esc(n)}</li>`).join('')}
          </ul>
        </details>
        <p style="margin:16px 0 0;font-size:12px;color:var(--muted)">${esc(brand.prices.fine)}</p>
      </div>
    </div>
  </div>
</section>

<section class="sec wrap" id="stories">
  <div class="reveal text-center mb-6">
    <p class="eyebrow">${esc(brand.spotlight.eyebrow)}</p>
    <h2 class="h2">${esc(brand.spotlight.title)}</h2>
  </div>
  <div class="story reveal reveal--pop" id="storyCard" tabindex="0" role="button" aria-expanded="false" aria-label="${esc(brand.spotlight.author)} patient story">
    <img src="${brand.spotlight.image}" alt="Gilbert Trill patient story"/>
    <div class="story__shade"></div><div class="story__shade2"></div>
    <div class="story__front">
      <span class="pill pill--glass">${esc(brand.spotlight.videoLabel)}</span>
      <div>
        <p style="margin:0;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.12em;color:rgba(255,255,255,.75)">Real Patient Experience</p>
        <h3 style="margin:8px 0 0;font-size:1.5rem;font-weight:600">${esc(brand.spotlight.author)}</h3>
        <p style="margin:4px 0 0;font-size:14px;color:rgba(255,255,255,.8)">${esc(brand.spotlight.role)}</p>
        <span class="pill pill--glass" style="margin-top:20px">Hover or tap to read more</span>
      </div>
    </div>
    <div class="story__detail">
      <blockquote style="margin:0">
        <p style="margin:0;font-size:1.125rem;font-weight:500;line-height:1.35">“${esc(brand.spotlight.quote)}”</p>
        <cite style="display:block;margin-top:16px;font-style:normal;font-size:14px"><strong>${esc(brand.spotlight.author)}</strong><span style="display:block;margin-top:4px;color:rgba(255,255,255,.75)">${esc(brand.spotlight.role)}</span></cite>
      </blockquote>
      <p style="margin:16px 0 0;font-size:14px;line-height:1.6;color:rgba(255,255,255,.85)">${esc(brand.spotlight.lede)}</p>
      <div style="display:flex;flex-wrap:nowrap;gap:8px;margin-top:20px;overflow-x:auto">${brand.spotlight.tags.map((t) => `<span class="pill pill--glass" style="flex-shrink:0">${esc(t)}</span>`).join('')}</div>
      <div style="margin-top:20px;display:flex;flex-wrap:wrap;gap:12px;align-items:center">
        <a href="${brand.spotlight.videoHref}" target="_blank" rel="noopener noreferrer" style="font-size:14px;font-weight:600;text-decoration:underline;text-underline-offset:4px" data-stop>Open on YouTube ${icon('arrow')}</a>
        <button type="button" class="pill pill--glass only-sm" data-close-story>Close</button>
      </div>
    </div>
  </div>
</section>

<section class="sec" id="team" style="overflow:hidden">
  <div class="wrap mb-6">
    <div class="reveal reveal--left">
      <span class="chip">${esc(brand.team.badge)}</span>
      <h2 class="h2 mt-4">${esc(brand.team.title)}</h2>
      <p class="lede">${esc(brand.team.lede)}</p>
    </div>
  </div>
  <div class="marquee reveal" style="--d:.1s">
    <div class="marquee__track">
      ${[0, 1]
        .map(
          () =>
            `<div style="display:flex;gap:20px">${brand.team.members
              .map(
                (m) => `
            <article class="doc">
              <div style="overflow:hidden;border-radius:16px"><img src="${m.image}" alt="${esc(m.name)}"/></div>
              <h3>${esc(m.name)}</h3><p>${esc(m.role)}</p>
            </article>`,
              )
              .join('')}</div>`,
        )
        .join('')}
    </div>
  </div>
</section>

<section class="prefoot" id="begin">
  <div class="prefoot__frame reveal">
    <img src="${brand.prefooter.image}" alt=""/>
    <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.8),rgba(0,0,0,.45),rgba(0,0,0,.2))"></div>
    <div class="prefoot__body">
      <div class="reveal reveal--left" style="--d:.1s;max-width:42rem">
        <p class="eyebrow" style="color:rgba(255,255,255,.7)">${esc(brand.prefooter.eyebrow)}</p>
        <h2 class="h2" style="color:#fff;margin-top:12px">${esc(brand.prefooter.title)}</h2>
        <p style="margin:12px 0 0;font-size:14px;line-height:1.6;color:rgba(255,255,255,.85)">${esc(brand.prefooter.lede)}</p>
      </div>
      <div class="prefoot__cta reveal reveal--pop" style="--d:.2s">
        ${trust(brand.hero.trust)}
        ${btn(brand.prefooter.cta, { variant: 'light', short: 'Request' })}
      </div>
    </div>
  </div>
</section>
</main>

<footer>
  <div class="foot-grid">
    <div>
      <img src="${brand.logo}" alt="${esc(brand.name)}"/>
      <p style="margin:16px 0 0;font-size:14px;line-height:1.6;color:rgba(255,255,255,.7)">${esc(brand.footer.blurb)}</p>
    </div>
    <div>
      <h3>Navigation</h3>
      <ul>${brand.footer.links.map((l) => `<li><a href="${l.href}">${esc(l.label)}</a></li>`).join('')}</ul>
    </div>
    <div>
      <h3>Costamed Hospital Centers</h3>
      <ul>${brand.footer.hospitals.map((h) => `<li>${esc(h)}</li>`).join('')}</ul>
    </div>
    <div>
      <h3>Contact</h3>
      <ul>
        <li><a href="mailto:${brand.footer.contact.email}">${esc(brand.footer.contact.email)}</a></li>
        <li><a href="tel:${brand.footer.contact.phoneUS.replace(/\s/g, '')}">Toll-Free USA & Canada ${esc(brand.footer.contact.phoneUS)}</a></li>
        <li><a href="tel:${brand.footer.contact.phoneIntl.replace(/\s/g, '')}">International Direct ${esc(brand.footer.contact.phoneIntl)}</a></li>
        <li>${esc(brand.footer.contact.address)}</li>
      </ul>
    </div>
  </div>
  <div class="foot-fine">
    <p style="margin:0;font-size:12px;line-height:1.6;color:rgba(255,255,255,.45)">${esc(brand.footer.fine)}</p>
    <p style="margin:16px 0 0;font-size:12px;color:rgba(255,255,255,.5)">${esc(brand.footer.copyright)}</p>
  </div>
</footer>

<div class="modal" id="contactModal" aria-hidden="true">
  <button type="button" class="modal__backdrop" data-close-modal aria-label="Close inquiry form"></button>
  <div class="modal__dialog" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
    <div class="modal__head">
      <div>
        <p class="eyebrow" style="margin:0">Begin your healthcare retreat</p>
        <h2 id="modalTitle" style="margin:4px 0 0;font-size:1.25rem;font-weight:600">Request Information</h2>
      </div>
      <button type="button" class="modal__close" data-close-modal aria-label="Close">${icon('x')}</button>
    </div>
    <form id="consultForm" novalidate>
      <label class="field">Full name<input type="text" name="fullName" required placeholder="Your full name" autocomplete="name"/></label>
      <label class="field">Email<input type="email" name="email" required placeholder="you@email.com" autocomplete="email"/></label>
      <label class="field">Phone or WhatsApp<input type="tel" name="phone" required placeholder="+1 or WhatsApp number" autocomplete="tel"/></label>
      <label class="field">U.S. state
        <select name="state" required><option value="" disabled selected>Select state</option>${US_STATES.map((s) => `<option>${esc(s)}</option>`).join('')}<option value="Outside US">Outside the U.S.</option></select>
      </label>
      <label class="field">Procedure of interest
        <select name="procedure" required>
          <option value="" disabled selected>Select procedure area</option>
          <option>Plastic & Aesthetic Surgery</option><option>Stem Cells & Exosomes</option><option>Dental Care</option>
          <option>Gastroenterology</option><option>Gynecology</option><option>Otorhinolaryngology</option>
          <option>General Surgery</option><option>Other / Not sure yet</option>
        </select>
      </label>
      <label class="field">Preferred treatment timeline
        <select name="timeline" required>
          <option value="" disabled selected>Select timeline</option>
          <option>As soon as possible</option><option>1–3 months</option><option>3–6 months</option><option>6+ months</option><option>Flexible</option>
        </select>
      </label>
      <fieldset>
        <legend>Is financing required?</legend>
        <div class="radios">${['Yes', 'No', 'Not sure'].map((v) => `<label><input type="radio" name="financing" value="${v}" required/> ${v}</label>`).join('')}</div>
      </fieldset>
      <fieldset>
        <legend>Able and willing to travel to Mexico?</legend>
        <div class="radios">${['Yes', 'Need more information', 'Not yet'].map((v) => `<label><input type="radio" name="travel" value="${v}" required/> ${v}</label>`).join('')}</div>
      </fieldset>
      <label class="field">Preferred contact method
        <select name="contactMethod" required>
          <option value="" disabled selected>Select method</option>
          <option>WhatsApp</option><option>Phone</option><option>Email</option>
        </select>
      </label>
      <label class="field">Preferred contact time
        <select name="contactTime" required>
          <option value="" disabled selected>Select time</option>
          <option>Morning</option><option>Afternoon</option><option>Evening</option><option>Anytime</option>
        </select>
      </label>
      <label class="consent span2"><input type="checkbox" name="consent" value="yes" required/> <span>I authorize Smart Strategic Marketing, LLC to share the contact details needed for this inquiry with Grupo Médico Costamed so its team can follow up. I have read the <a href="privacy-notice.html" target="_blank" rel="noopener">Privacy Notice</a>.</span></label>
      <div class="actions">
        <button type="submit" class="submit">Request information from Costamed</button>
        <a href="https://wa.me/529878729400" target="_blank" rel="noopener noreferrer" style="text-align:center;font-size:14px;font-weight:600;color:var(--leaf)">Or message WhatsApp directly</a>
      </div>
      <p class="note span2" id="formNote" role="status" aria-live="polite"></p>
    </form>
  </div>
</div>

<script>
const BRAND = ${JSON.stringify({ trip: brand.trip, stem: brand.stem, prices: brand.prices, heroHeadline: brand.hero.headline })};
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Hero letter animation */
(function(){
  const el = document.querySelector('.hero-headline');
  if (!el) return;
  const text = BRAND.heroHeadline;
  if (reduceMotion) { el.textContent = text; return; }
  el.innerHTML = text.split(' ').map((word, wi) => {
    const chars = [...word].map((ch, ci) => {
      const delay = Math.min((wi * 3 + ci) * 0.018, 0.9);
      return '<span class="hero-char" style="animation-delay:' + delay + 's">' + ch.replace(/</g,'&lt;') + '</span>';
    }).join('');
    return '<span class="hero__word">' + chars + '</span>';
  }).join(' ');
})();

/* Reveal on scroll / immediate */
(function(){
  const items = document.querySelectorAll('.reveal');
  if (reduceMotion) {
    items.forEach((el) => el.classList.add('is-in'));
    document.querySelectorAll('.stagger').forEach((el) => el.classList.add('is-in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add('is-in');
      if (e.target.classList.contains('stagger')) {
        e.target.querySelectorAll('.reveal').forEach((c) => c.classList.add('is-in'));
      }
      io.unobserve(e.target);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  items.forEach((el) => {
    if (el.hasAttribute('data-immediate')) {
      requestAnimationFrame(() => el.classList.add('is-in'));
      return;
    }
    if (el.closest('.stagger')) return;
    io.observe(el);
  });
  document.querySelectorAll('.stagger').forEach((el) => io.observe(el));
})();

/* Scrub text */
(function(){
  const el = document.getElementById('scrubText');
  if (!el) return;
  const raw = el.getAttribute('data-text') || '';
  const words = raw.replace(/&quot;/g,'"').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&').split(/\\s+/).filter(Boolean);
  el.innerHTML = words.map((w) => '<span>' + w.replace(/</g,'&lt;') + '</span>').join(' ');
  const spans = [...el.querySelectorAll('span')];
  const onScroll = () => {
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight;
    const start = vh * 0.85;
    const end = vh * 0.35;
    const progress = Math.min(1, Math.max(0, (start - rect.top) / (start - end + rect.height * 0.4)));
    spans.forEach((span, i) => {
      const t = i / spans.length;
      const local = Math.min(1, Math.max(0, (progress - t) / (1 / spans.length)));
      span.style.opacity = 0.2 + local * 0.8;
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* Nav */
(function(){
  const drawer = document.getElementById('navDrawer');
  const toggle = document.getElementById('navToggle');
  const exit = document.getElementById('navExit');
  const open = () => { drawer.hidden = false; drawer.classList.add('is-open'); document.body.classList.add('nav-open'); toggle.innerHTML = ${JSON.stringify(icon('x'))}; toggle.setAttribute('aria-label','Close menu'); };
  const close = () => { drawer.classList.remove('is-open'); drawer.hidden = true; document.body.classList.remove('nav-open'); toggle.innerHTML = ${JSON.stringify(icon('menu'))}; toggle.setAttribute('aria-label','Open menu'); };
  toggle.addEventListener('click', () => drawer.classList.contains('is-open') ? close() : open());
  exit.addEventListener('click', close);
  drawer.querySelectorAll('[data-close-nav], a[href^="#"]').forEach((a) => a.addEventListener('click', close));
})();

/* Contact modal */
(function(){
  const modal = document.getElementById('contactModal');
  const form = document.getElementById('consultForm');
  const note = document.getElementById('formNote');
  const open = () => { modal.classList.add('is-open'); modal.setAttribute('aria-hidden','false'); document.body.classList.add('modal-open'); };
  const close = () => { modal.classList.remove('is-open'); modal.setAttribute('aria-hidden','true'); document.body.classList.remove('modal-open'); };
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href="#contact"]');
    if (!a) return;
    e.preventDefault();
    open();
  });
  modal.querySelectorAll('[data-close-modal]').forEach((el) => el.addEventListener('click', close));
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    note.textContent = ''; note.className = 'note span2';
    if (!form.checkValidity()) {
      form.reportValidity();
      note.textContent = 'Please complete all required fields to submit your inquiry.';
      note.classList.add('err');
      return;
    }
    const data = new FormData(form);
    const lines = [
      'Information inquiry — HospitalityCancun.com','',
      'Full name: ' + data.get('fullName'),
      'Email: ' + data.get('email'),
      'Phone / WhatsApp: ' + data.get('phone'),
      'U.S. state: ' + data.get('state'),
      'Procedure of interest: ' + data.get('procedure'),
      'Preferred treatment timeline: ' + data.get('timeline'),
      'Financing required: ' + data.get('financing'),
      'Willing to travel to Mexico: ' + data.get('travel'),
      'Preferred contact method: ' + data.get('contactMethod'),
      'Preferred contact time: ' + data.get('contactTime'),
      'Communication consent: Yes'
    ];
    const body = lines.join('\\n');
    const method = String(data.get('contactMethod') || '');
    if (method === 'Email') {
      window.location.href = 'mailto:info@hospitalitycancun.com?subject=' + encodeURIComponent('Information inquiry — ' + data.get('fullName')) + '&body=' + encodeURIComponent(body);
      note.textContent = 'Opening your email app with your inquiry details…';
    } else {
      window.open('https://wa.me/529878729400?text=' + encodeURIComponent(body), '_blank', 'noopener');
      note.textContent = 'Opening WhatsApp with your inquiry details…';
    }
    note.classList.add('ok');
    form.reset();
  });
})();

/* Trip swipe stack */
(function(){
  const root = document.getElementById('tripStack');
  if (!root) return;
  const cards = BRAND.trip.cards;
  let page = 0, dir = 0;
  const total = cards.length;
  const idx = () => ((page % total) + total) % total;

  const cardHtml = (card) => \`
    <div class="trip-card__img"><img src="\${card.image}" alt="\${card.title}" draggable="false"/></div>
    <div class="trip-card__body">
      <p class="note">\${card.note}</p>
      <h3>\${card.title}</h3>
      <p>\${card.desc}</p>
      <a href="\${card.href}">\${card.linkLabel} →</a>
    </div>\`;

  const render = () => {
    const i = idx();
    const peek2 = cards[(i + 2) % total];
    const peek1 = cards[(i + 1) % total];
    const front = cards[i];
    root.innerHTML = \`
      <div class="trip-stage">
        <div class="trip-peek" aria-hidden="true" style="z-index:8;transform:translateY(28px) scale(.9);opacity:.64">\${cardHtml(peek2)}</div>
        <div class="trip-peek" aria-hidden="true" style="z-index:9;transform:translateY(14px) scale(.95);opacity:.82">\${cardHtml(peek1)}</div>
        <article class="trip-card" id="tripFront">\${cardHtml(front)}</article>
      </div>
      <div class="trip-nav">
        <button type="button" class="round" data-dir="-1" aria-label="Previous">‹</button>
        <div class="trip-dots" role="tablist">\${cards.map((_, n) => \`<button type="button" data-goto="\${n}" class="\${n===i?'is-on':''}" aria-label="Card \${n+1}"></button>\`).join('')}</div>
        <button type="button" class="round" data-dir="1" aria-label="Next">›</button>
      </div>
      <p class="trip-hint">\${i+1} / \${total} · Swipe or use arrows</p>\`;
    bindFront();
  };

  const paginate = (d) => { dir = d; page += d; animateOut(d); };

  const animateOut = (d) => {
    const front = document.getElementById('tripFront');
    if (!front || reduceMotion) { render(); return; }
    front.style.transition = 'transform .35s cubic-bezier(.22,1,.36,1), opacity .3s';
    front.style.transform = \`translateX(\${d > 0 ? -280 : 280}px) rotate(\${d > 0 ? -8 : 8}deg)\`;
    front.style.opacity = '0';
    setTimeout(render, 280);
  };

  const bindFront = () => {
    const front = document.getElementById('tripFront');
    root.querySelectorAll('[data-dir]').forEach((b) => b.addEventListener('click', () => paginate(Number(b.dataset.dir))));
    root.querySelectorAll('[data-goto]').forEach((b) => b.addEventListener('click', () => {
      const n = Number(b.dataset.goto);
      const i = idx();
      if (n === i) return;
      const d = n > i ? 1 : -1;
      dir = d;
      page = n;
      animateOut(d);
    }));
    let startX = 0, dx = 0, dragging = false;
    const onDown = (x) => { dragging = true; startX = x; dx = 0; front.style.transition = 'none'; };
    const onMove = (x) => {
      if (!dragging) return;
      dx = x - startX;
      front.style.transform = \`translateX(\${dx}px) rotate(\${dx / 40}deg)\`;
    };
    const onUp = () => {
      if (!dragging) return;
      dragging = false;
      if (dx < -80) paginate(1);
      else if (dx > 80) paginate(-1);
      else {
        front.style.transition = 'transform .35s cubic-bezier(.22,1,.36,1)';
        front.style.transform = '';
      }
    };
    front.addEventListener('pointerdown', (e) => { if (e.target.closest('a')) return; front.setPointerCapture(e.pointerId); onDown(e.clientX); });
    front.addEventListener('pointermove', (e) => onMove(e.clientX));
    front.addEventListener('pointerup', onUp);
    front.addEventListener('pointercancel', onUp);
  };

  render();
})();

/* Stem tabs */
(function(){
  const panel = document.getElementById('stemPanel');
  const tabs = document.getElementById('stemTabs');
  let active = BRAND.stem.packageTabs[0].id;
  const render = () => {
    const tab = BRAND.stem.packageTabs.find((t) => t.id === active) || BRAND.stem.packageTabs[0];
    panel.innerHTML = '<div class="h-scroll h-scroll--3 stagger is-in" style="margin-left:-12px;margin-right:-12px;padding-left:12px;padding-right:12px">' +
      tab.tiers.map((tier, i) => \`
        <article class="tier card-grad \${tier.featured ? 'tier--feat card-grad--dark' : ''} reveal reveal--pop is-in" style="--d:\${0.1 * i}s">
          \${tier.featured ? '<span class="pill" style="margin-bottom:12px;width:fit-content;border:1px solid rgba(255,255,255,.25);background:rgba(255,255,255,.1);font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--mint)">Most popular</span>' : ''}
          <h3>\${tier.name}</h3>
          <p class="dose">\${tier.dose}</p>
          <p class="time">\${tier.time}</p>
          <ul>\${tier.includes.map((x) => '<li><span class="check">✓</span>' + x + '</li>').join('')}</ul>
        </article>\`).join('') + '</div>';
  };
  tabs.addEventListener('click', (e) => {
    const b = e.target.closest('[data-stem]');
    if (!b) return;
    active = b.dataset.stem;
    tabs.querySelectorAll('button').forEach((x) => x.classList.toggle('is-on', x === b));
    render();
  });
  render();
})();

/* Prices */
(function(){
  const panel = document.getElementById('pricePanel');
  const tabs = document.getElementById('priceTabs');
  let active = BRAND.prices.tabs[0].id;
  let showAll = false;
  const render = () => {
    const tab = BRAND.prices.tabs.find((t) => t.id === active) || BRAND.prices.tabs[0];
    const featured = tab.items.find((x) => x.featured);
    const rest = tab.items.filter((x) => !x.featured);
    const previewLimit = featured ? 3 : 4;
    const visible = showAll ? rest : rest.slice(0, previewLimit);
    const hidden = Math.max(0, rest.length - previewLimit);
    let html = \`<div style="margin-bottom:20px;display:flex;align-items:flex-end;justify-content:space-between;gap:12px">
      <div><p class="eyebrow" style="margin:0">\${tab.label}</p><p style="margin:4px 0 0;font-size:14px;color:#475569">\${tab.items.length} packages · transparent USD pricing</p></div>
      <a href="#contact" class="btn btn--soft hidden-sm"><span class="btn__label"><span class="btn__flip">\${BRAND.prices.cta}</span><span class="btn__flip btn__flip--dup" aria-hidden="true">\${BRAND.prices.cta}</span></span><span class="btn__icon">→</span></a>
    </div>\`;
    if (featured) {
      html += \`<div class="feat-pkg reveal is-in"><div class="feat-pkg__inner">
        <div><span class="pill" style="border:1px solid rgba(255,255,255,.2);background:rgba(255,255,255,.1);font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--mint)">\${featured.label || 'Featured'}</span>
        <h3 style="margin:12px 0 0;font-size:1.5rem;font-weight:600">\${featured.name}</h3>
        \${featured.stay ? '<p style="margin:8px 0 0;font-size:14px;color:rgba(255,255,255,.7)">' + featured.stay + '</p>' : ''}
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-start;gap:12px">
          <p style="margin:0;font-size:clamp(2rem,4vw,2.75rem);font-weight:600;letter-spacing:-.04em;line-height:1">\${featured.amount}<span style="margin-left:6px;font-size:16px;font-weight:600;color:rgba(255,255,255,.6)">USD</span></p>
          <a href="#contact" style="display:inline-flex;align-items:center;gap:8px;border-radius:999px;background:#fff;padding:10px 16px;font-size:14px;font-weight:600;color:var(--accent)">\${BRAND.prices.cta} →</a>
        </div>
      </div></div>\`;
    }
    html += '<div class="pkg-list">' + visible.map((item) => \`
      <article class="pkg-row">
        <div><h3>\${item.name}</h3><p style="margin:4px 0 0;font-size:12px;color:var(--muted)">\${item.stay || 'Outpatient package'}</p></div>
        <p class="amt">\${item.amount}<span style="margin-left:4px;font-size:12px;font-weight:600;color:#94a3b8">USD</span></p>
        <a class="quote" href="#contact">Quote →</a>
      </article>\`).join('') + '</div>';
    if (hidden > 0) {
      html += \`<div style="margin-top:16px;display:flex;justify-content:center">
        <button type="button" id="viewMorePkgs" style="display:inline-flex;align-items:center;gap:8px;border-radius:999px;border:1px solid rgba(0,0,0,.1);background:#fff;padding:10px 20px;font-size:14px;font-weight:600;color:var(--accent)">\${showAll ? 'Show fewer packages' : 'View more packages (' + hidden + ')'}</button>
      </div>\`;
    }
    panel.innerHTML = html;
    const more = document.getElementById('viewMorePkgs');
    if (more) more.addEventListener('click', () => { showAll = !showAll; render(); });
  };
  tabs.addEventListener('click', (e) => {
    const b = e.target.closest('[data-price]');
    if (!b) return;
    active = b.dataset.price;
    showAll = false;
    tabs.querySelectorAll('button').forEach((x) => x.classList.toggle('is-on', x === b));
    render();
  });
  render();
})();

/* Spotlight */
(function(){
  const card = document.getElementById('storyCard');
  if (!card) return;
  const touch = window.matchMedia('(hover: none)').matches;
  card.addEventListener('click', (e) => {
    if (e.target.closest('[data-stop]')) return;
    if (e.target.closest('[data-close-story]')) { card.classList.remove('is-open'); card.setAttribute('aria-expanded','false'); return; }
    if (touch) {
      const open = card.classList.toggle('is-open');
      card.setAttribute('aria-expanded', open ? 'true' : 'false');
    }
  });
  card.addEventListener('mouseleave', () => { card.classList.remove('is-open'); card.setAttribute('aria-expanded','false'); });
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const open = card.classList.toggle('is-open');
      card.setAttribute('aria-expanded', open ? 'true' : 'false');
    }
  });
})();
</script>
</body>
</html>`

writeFileSync(out, html)
console.log('Wrote', out, '(' + Math.round(html.length / 1024) + ' KB)')
