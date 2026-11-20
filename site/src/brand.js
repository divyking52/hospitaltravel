/** Hospitality Cancún / Costamed — content sourced from the live site only. */
const media = (id, file) =>
  `https://api.storebox.ai/media/f277f107-42f8-40bb-8b7b-c6964ff012d8/${id}/${file}`

export const brand = {
  name: 'Hospitality Cancún',
  niche: 'Medical Travel Information & Referral',
  logo: media('6906f953-cfde-4b21-954f-be7e74e76f37', 'LOGO_HOSPITALITYCANCUN.svg'),
  accent: '#143A52',
  mint: '#5EB8E8',
  leaf: '#5FAD8F',
  canvas: '#F8F9FA',
  nav: [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Prices', href: '#prices' },
    { label: 'Stem Cells', href: '#stem-cells' },
    { label: 'Doctors', href: '#team' },
    { label: 'Patient Story', href: '#stories' },
    { label: 'Blogs', href: '/blogs.html' },
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
    includesTitle: 'Every package includes',
    includes: ["Doctor's Fees", 'Hospital Medicines & Material', '3 nights Hotel stay', 'Airport–Hotel Transport'],
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
          {
            name: 'Laparoscopic Hysterectomy',
            amount: '$7,905',
            stay: '2 Nights hospital stay',
            featured: true,
          },
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
            includes: [
              'Personalized Concierge Service',
              'Initial medical Assessment',
              'Snack provided',
              'Personalized follow-up',
            ],
          },
          {
            name: 'Gold',
            featured: true,
            dose: '200 million HP-MSCs + 400 IU of Exosomes',
            time: 'Time of application 2 ½ hours',
            includes: [
              'Personalized Concierge Service',
              'Initial medical Assessment',
              'Diet recommendations',
              'Snack provided',
              'Personalized follow-up',
            ],
          },
          {
            name: 'Platinum',
            dose: '300 million HP-MSCs + 400 IU of Exosomes',
            time: 'Time of application 3 ½ hours',
            includes: [
              'Personalized Concierge Service',
              'Initial medical Assessment',
              'Diet recommendations',
              'Snack provided',
              'Personalized follow-up',
            ],
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
            includes: [
              'Personalized Concierge Service',
              'Initial medical Assessment',
              'Snack provided',
              'Personalized follow-up',
            ],
          },
          {
            name: 'Gold',
            featured: true,
            dose: '200 million HP-MSCs',
            time: 'Time of application 2 ½ hours',
            includes: [
              'Personalized Concierge Service',
              'Initial medical Assessment',
              'Diet recommendations',
              'Snack provided',
              'Personalized follow-up',
            ],
          },
          {
            name: 'Platinum',
            dose: '300 million HP-MSCs',
            time: 'Time of application 3 ½ hours',
            includes: [
              'Personalized Concierge Service',
              'Initial medical Assessment',
              'Diet recommendations',
              'Snack provided',
              'Personalized follow-up',
            ],
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
            includes: [
              'Personalized Concierge Service',
              'Initial medical Assessment',
              'Snack provided',
              'Personalized follow-up',
            ],
          },
          {
            name: 'Gold',
            featured: true,
            dose: '800 micrograms of exosome vial therapy',
            time: 'Time of application 2 hours',
            includes: [
              'Personalized Concierge Service',
              'Initial medical Assessment',
              'Diet recommendations',
              'Snack provided',
              'Personalized follow-up',
            ],
          },
          {
            name: 'Platinum',
            dose: '1,400 micrograms of exosome vial therapy',
            time: 'Time of application 3 hours',
            includes: [
              'Personalized Concierge Service',
              'Initial medical Assessment',
              'Diet recommendations',
              'Snack provided',
              'Personalized follow-up',
            ],
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
    packageIncludes: {
      title: 'Every package includes',
      items: ["Doctor's Fees", 'Hospital Medicines & Material', '3 nights Hotel stay', 'Airport–Hotel Transport'],
    },
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
    services: [
      'Plastic & Aesthetic Surgery',
      'Stem Cells & Exosomes',
      'Dental Care',
      'Gastroenterology',
      'Gynecology',
      'General Surgery',
    ],
    links: [
      { label: 'About Us', href: '#about' },
      { label: 'Clinical Services', href: '#services' },
      { label: 'Package Prices', href: '#prices' },
      { label: 'Stem Cells & Exosomes', href: '#stem-cells' },
      { label: 'Medical Staff', href: '#team' },
      { label: 'Patient Story', href: '#stories' },
      { label: 'Privacy Notice', href: '/privacy-notice.html' },
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

export default brand
