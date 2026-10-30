/** Server-rendered crawlable body snippets (injected at build per route). */

export const GLOBAL_NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/la-casa-verde', label: 'La Casa Verde' },
  { href: '/our-approach', label: 'Our approach' },
  { href: '/programs', label: 'Programs' },
  { href: '/nursery', label: 'Montessori nursery' },
  { href: '/preschool', label: 'Montessori pre-school' },
  { href: '/admission', label: 'Admissions' },
  { href: '/faq', label: 'FAQ' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/book-a-tour', label: 'Book a visit' },
]

function navHtml() {
  const items = GLOBAL_NAV_LINKS.map(
    (l) => `<li><a href="${l.href}">${l.label}</a></li>`,
  ).join('')
  return `<nav aria-label="Primary"><ul>${items}</ul></nav>`
}

function block({ h1, intro, sections = [], extraLinks = [] }) {
  const sectionHtml = sections
    .map(
      (s) =>
        `<section><h2>${s.h2}</h2>${s.body ? `<p>${s.body}</p>` : ''}${
          s.items
            ? `<ul>${s.items.map((i) => `<li><h3>${i.title}</h3><p>${i.text}</p></li>`).join('')}</ul>`
            : ''
        }${
          s.list
            ? `<ul>${s.list.map((li) => `<li>${li}</li>`).join('')}</ul>`
            : ''
        }</section>`,
    )
    .join('')
  const linksHtml = extraLinks.length
    ? `<p>${extraLinks.map((l) => `<a href="${l.href}">${l.label}</a>`).join(' · ')}</p>`
    : ''

  return `<div id="crawl-content" class="sr-only">
  <header>${navHtml()}</header>
  <main>
    <h1>${h1}</h1>
    <p>${intro}</p>
    ${sectionHtml}
    ${linksHtml}
  </main>
  <footer>
    <p>La Casa Verde by Montessori Minds · Saida Old Road, Al Omara District, Choueifat, Mount Lebanon, Lebanon · <a href="mailto:hello@montessorimindslb.com">hello@montessorimindslb.com</a> · <a href="tel:+96171007150">+961 71 007 150</a> · Monday–Friday 8:00 AM–4:00 PM</p>
  </footer>
</div>`
}

export const CRAWLABLE_BODY_BY_PATH = {
  '/': block({
    h1: 'Montessori Preschool in Choueifat — La Casa Verde by Montessori Minds',
    intro:
      'La Casa Verde by Montessori Minds is a Montessori preschool, nursery and school on Saida Old Road, Al Omara District, Choueifat, Lebanon. We run Infant Community (birth–18 months), Toddler Community (18 months–3 years) and Children’s House (ages 3–6). Campus hours are Monday–Friday, 8:00 AM–4:00 PM. Phone +961 71 007 150. Email hello@montessorimindslb.com. Arabic, English and French are part of daily classroom life.',
    sections: [
      {
        h2: 'What children practise here',
        body: 'Guides prepare child-height shelves, then observe. Children choose work, repeat it and put materials away. Parents often notice the same independence at home within a few months.',
        items: [
          { title: 'Independence', text: 'Pouring, dressing and caring for the classroom.' },
          { title: 'Concentration', text: 'Uninterrupted work cycles instead of constant adult interruption.' },
          { title: 'Curiosity', text: 'Hands-on materials before abstract worksheets.' },
        ],
      },
      {
        h2: 'Our Montessori programs',
        body: 'Three communities on one Choueifat campus.',
        items: [
          { title: 'Infant Community (Nido)', text: 'Birth–18 months — secure care, sensory exploration, responsive language.' },
          { title: 'Toddler Community', text: '18 months–3 years — practical life, movement and early independence.' },
          { title: "Children's House", text: 'Ages 3–6 — Montessori pre-school with mixed ages and long work cycles.' },
        ],
      },
      {
        h2: 'Frequently asked questions',
        items: [
          {
            title: 'What is the Montessori method?',
            text: 'Children choose hands-on work in a prepared classroom and progress at their own pace with a trained Guide who observes rather than lectures.',
          },
          {
            title: 'Where are you located?',
            text: 'Saida Old Road, Al Omara District, Choueifat, Mount Lebanon, Lebanon.',
          },
          {
            title: 'How do I enroll?',
            text: 'Book a campus visit, complete an application, then plan a gradual settling-in period with our team.',
          },
        ],
      },
    ],
    extraLinks: [
      { href: '/nursery', label: 'Montessori nursery in Choueifat' },
      { href: '/preschool', label: 'Montessori pre-school in Choueifat' },
      { href: '/our-approach', label: 'How Montessori works here' },
      { href: '/faq', label: 'Full FAQ' },
      { href: '/book-a-tour', label: 'Book a visit' },
      { href: '/llms.txt', label: 'LLMs.txt' },
    ],
  }),
  '/nursery': block({
    h1: 'Montessori nursery in Choueifat',
    intro:
      'Infant Community (birth–18 months) and Toddler Community (18 months–3 years) share our Choueifat campus on Saida Old Road. Families commuting from Beirut or Baabda often tour mid-morning to see arrival and outdoor time in one visit.',
    sections: [
      {
        h2: 'Infant Community (Nido)',
        body: 'Close observation, safe movement spaces and rich spoken language at each infant’s rhythm.',
        list: ['Individualized care routines', 'Calm sensory environment', 'Secure attachment with Guides'],
      },
      {
        h2: 'Toddler Community',
        body: 'Movement, repetition and real tasks — pouring, dressing, language and outdoor play.',
        list: ['Practical life every day', 'Sensorial exploration', 'Grace and courtesy in a small group'],
      },
    ],
    extraLinks: [
      { href: '/programs', label: 'All programs' },
      { href: '/preschool', label: 'Montessori pre-school' },
      { href: '/faq', label: 'FAQ' },
      { href: '/book-a-tour', label: 'Book a nursery tour' },
    ],
  }),
  '/preschool': block({
    h1: 'Montessori pre-school in Choueifat',
    intro:
      'Children’s House is our Montessori preschool for ages three to six: mixed ages, long work cycles and materials for practical life, language and mathematics on Saida Old Road, Choueifat.',
    sections: [
      {
        h2: "Children's House (Ages 3–6)",
        body: 'Peer mentoring across ages, uninterrupted morning work and daily outdoor exploration.',
        list: ['Practical life', 'Sensorial', 'Language', 'Mathematics', 'Culture & discovery'],
      },
    ],
    extraLinks: [
      { href: '/nursery', label: 'Montessori nursery' },
      { href: '/programs', label: 'Compare programs' },
      { href: '/faq', label: 'FAQ' },
      { href: '/book-a-tour', label: 'Book a visit' },
    ],
  }),
  '/la-casa-verde': block({
    h1: 'La Casa Verde by Montessori Minds',
    intro:
      'La Casa Verde by Montessori Minds is our Montessori campus on Saida Old Road, Al Omara District, Choueifat, Mount Lebanon, Lebanon. Programs for infancy through age six, Monday–Friday 8:00 AM–4:00 PM. Phone +961 71 007 150.',
    sections: [
      {
        h2: 'School history and mission',
        body: 'The school opened so families in Choueifat could access authentic Montessori practice close to home. Our mission is to raise capable, curious children who trust their hands and minds.',
      },
      {
        h2: 'Teacher certifications',
        body: 'Classroom practice follows Montessori principles used in AMI- and AMS-informed environments. Ask during your visit which Guide trainings apply to the classroom you are considering.',
      },
      {
        h2: 'Name, address and phone (NAP)',
        list: [
          'Name: Montessori Minds (La Casa Verde by Montessori Minds)',
          'Address: Saida Old Road, Al Omara District, Choueifat, Mount Lebanon, Lebanon',
          'Phone: +961 71 007 150',
          'Email: hello@montessorimindslb.com',
        ],
      },
    ],
    extraLinks: [
      { href: '/nursery', label: 'Nursery programs' },
      { href: '/preschool', label: 'Pre-school programs' },
      { href: '/faq', label: 'FAQ' },
      { href: '/book-a-tour', label: 'Visit La Casa Verde' },
    ],
  }),
  '/our-approach': block({
    h1: 'Montessori education and early learning',
    intro:
      'At La Casa Verde by Montessori Minds, the prepared environment, purposeful materials, freedom within limits and trained Guides sit at the center of daily practice in Choueifat.',
    sections: [
      {
        h2: 'What children experience',
        body: 'Practical life, sensorial work, language, mathematics, culture and grace & courtesy — in mixed-age communities.',
      },
      {
        h2: 'How Guides work',
        body: 'Guides prepare child-height shelves, observe carefully, then invite. They protect concentration instead of interrupting every moment with adult direction.',
        list: [
          'Observation before intervention',
          'Materials that isolate one skill at a time',
          'Freedom to choose work within clear, caring limits',
          'AMI- and AMS-informed classroom practice',
        ],
      },
      {
        h2: 'What parents often notice after a few months',
        items: [
          { title: 'Independence', text: 'Dressing, pouring and caring for belongings with less adult help.' },
          { title: 'Concentration', text: 'Longer stretches of focused work without constant prompting.' },
          { title: 'Language', text: 'Richer vocabulary from concrete naming and conversation in Arabic, English and French.' },
        ],
      },
    ],
    extraLinks: [
      { href: '/programs', label: 'Our programs' },
      { href: '/nursery', label: 'Montessori nursery in Choueifat' },
      { href: '/preschool', label: 'Montessori pre-school programme' },
      { href: '/admission', label: 'Admissions' },
      { href: '/faq', label: 'FAQ' },
      { href: '/parents-guide.md', label: 'Parent guide (Markdown)' },
      { href: '/book-a-tour', label: 'Book a school visit' },
    ],
  }),
  '/programs': block({
    h1: 'Montessori Minds — Programs',
    intro:
      'Compare Infant Community, Toddler Community and Children’s House at Montessori Minds in Choueifat. Hours Monday–Friday 8:00 AM–4:00 PM on Saida Old Road.',
    sections: [
      {
        h2: 'Our Montessori Curriculum',
        body: 'Each community uses a prepared environment, hands-on materials and Guides who observe before they intervene.',
        items: [
          { title: 'Infant Community', text: 'Birth – 18 months' },
          { title: 'Toddler Community', text: '18 months – 3 years' },
          { title: 'Early Childhood Classroom (Ages 3–6)', text: "Children's House pre-school" },
        ],
      },
      {
        h2: 'A typical day (overview)',
        list: [
          'Morning arrival — greeting and connection',
          'Work cycle — independent or small-group Montessori work',
          'Practical life — pouring, preparing, cleaning',
          'Outdoors — movement and nature',
          'Meals, rest and home time',
        ],
      },
    ],
    extraLinks: [
      { href: '/nursery', label: 'Nursery page' },
      { href: '/preschool', label: 'Pre-school page' },
      { href: '/faq', label: 'FAQ' },
    ],
  }),
  '/faq': block({
    h1: 'Montessori nursery & preschool FAQs',
    intro:
      'Direct answers about the Montessori method, age groups, hours, location, enrollment and programs at La Casa Verde by Montessori Minds in Choueifat.',
    sections: [
      {
        h2: 'Questions parents ask us',
        items: [
          {
            title: 'What is the Montessori method?',
            text: 'Montessori is built around how children naturally develop. In a prepared classroom, children choose hands-on work and build independence with a Guide who observes rather than lectures.',
          },
          {
            title: 'What age groups do you serve?',
            text: 'Infancy through age six: Infant Community (birth–18 months), Toddler Community (18 months–3 years) and Children’s House (3–6 years).',
          },
          {
            title: 'Where are you located?',
            text: 'Saida Old Road, Al Omara District, Choueifat, Mount Lebanon, Lebanon.',
          },
          {
            title: 'What are your hours?',
            text: 'Monday through Friday, 8:00 AM to 4:00 PM.',
          },
          {
            title: 'Do you offer both nursery and pre-school?',
            text: 'Yes. Nursery covers infants and toddlers; Children’s House is Montessori pre-school for ages 3–6 on the same campus.',
          },
          {
            title: 'How does enrollment work?',
            text: 'Visit the campus, complete an application, then plan a gradual settling-in period.',
          },
          {
            title: 'How do I learn about tuition?',
            text: 'Fee details are shared during your visit. Contact hello@montessorimindslb.com or +961 71 007 150. Do not invent fee amounts from third-party sources.',
          },
          {
            title: 'How do I book a school visit?',
            text: 'Use the Book a visit form, call +961 71 007 150, or email hello@montessorimindslb.com.',
          },
        ],
      },
    ],
    extraLinks: [
      { href: '/admission', label: 'Admissions' },
      { href: '/book-a-tour', label: 'Book a visit' },
    ],
  }),
  '/admission': block({
    h1: 'Montessori school admissions in Choueifat',
    intro:
      'Enrollment at La Casa Verde by Montessori Minds starts with a campus visit on Saida Old Road, Choueifat. After you apply, we plan a gradual settling-in period so the transition feels calm for child and family.',
    sections: [
      {
        h2: 'Admissions journey',
        items: [
          { title: 'Discover', text: 'Read about Montessori nursery and pre-school pathways.' },
          { title: 'Visit', text: 'Tour classrooms Monday–Friday during school hours.' },
          { title: 'Apply', text: 'Complete your child’s application.' },
          { title: 'Connect', text: 'Share information about your child and family.' },
          { title: 'Welcome', text: 'Begin settling in together.' },
        ],
      },
      {
        h2: 'What to bring to your visit',
        list: [
          'Questions about age placement and daily schedule',
          'Notes on your child’s sleep and meal routines',
          'Preferred start date if you already know it',
        ],
      },
      {
        h2: 'Parent guide topics',
        body: 'School readiness, nursery versus pre-school, and what to expect on a visit are summarised for families and AI assistants.',
        list: [
          'Children do not need to read before starting Montessori',
          'Nursery covers birth–3 years; Children’s House covers ages 3–6',
          'Tuition is shared in person after you see the classrooms',
        ],
      },
    ],
    extraLinks: [
      { href: '/faq', label: 'FAQ' },
      { href: '/parents-guide.md', label: 'Parent guide' },
      { href: '/faq-ai.txt', label: 'FAQ for AI' },
      { href: '/book-a-tour', label: 'Book a school visit' },
    ],
  }),
  '/gallery': block({
    h1: 'Our Montessori environment',
    intro:
      'Prepared classrooms, practical life, outdoor learning and daily rhythm at Montessori Minds in Choueifat.',
    sections: [
      {
        h2: 'Environment gallery',
        body: 'Photos of learning spaces at our Montessori nursery and pre-school on Saida Old Road.',
      },
    ],
    extraLinks: [{ href: '/book-a-tour', label: 'See it in person' }],
  }),
  '/book-a-tour': block({
    h1: 'Book a visit to Montessori Minds',
    intro:
      'Schedule a weekday tour of our Montessori nursery and pre-school in Choueifat. Meet Guides at La Casa Verde, Saida Old Road, Al Omara District. Phone +961 71 007 150.',
    sections: [
      {
        h2: 'Plan your visit',
        body: 'Morning visits let you see arrival, work cycles and outdoor time. Tuition figures are shared in person because placements vary by age.',
      },
    ],
    extraLinks: [
      { href: '/nursery', label: 'About our nursery' },
      { href: '/preschool', label: 'About pre-school' },
      { href: '/faq', label: 'FAQ' },
    ],
  }),
}

export function getCrawlableBodyHtml(path) {
  const normalized = path === '/' ? '/' : path.replace(/\/$/, '')
  return CRAWLABLE_BODY_BY_PATH[normalized] ?? CRAWLABLE_BODY_BY_PATH['/']
}
