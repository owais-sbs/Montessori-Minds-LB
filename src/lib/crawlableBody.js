/** Server-rendered crawlable body snippets (injected at build per route). */

export const GLOBAL_NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/la-casa-verde', label: 'La Casa Verde' },
  { href: '/our-approach', label: 'Our approach' },
  { href: '/programs', label: 'Programs' },
  { href: '/nursery', label: 'Montessori nursery' },
  { href: '/preschool', label: 'Montessori pre-school' },
  { href: '/admission', label: 'Admissions' },
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
    <p>La Casa Verde by Montessori Minds · Choueifat, Lebanon · <a href="mailto:hello@montessorimindslb.com">hello@montessorimindslb.com</a> · <a href="tel:+96171007150">+961 71 007 150</a></p>
  </footer>
</div>`
}

export const CRAWLABLE_BODY_BY_PATH = {
  '/': block({
    h1: 'Little hands. Big beginnings.',
    intro:
      'Montessori Minds is a Montessori school in Choueifat, Lebanon — offering nurturing nursery and pre-school programs for ages 6 months to 6 years. Families from Beirut and Mount Lebanon welcome.',
    sections: [
      {
        h2: "What you'll see grow",
        items: [
          { title: 'Independence', text: 'Caring for themselves and their environment.' },
          { title: 'Confidence', text: 'Built through real accomplishment.' },
          { title: 'Curiosity', text: 'Freedom to explore and discover.' },
        ],
      },
      {
        h2: 'Our programs',
        body: 'Infant, toddler and pre-school pathways at Montessori Minds.',
        items: [
          { title: 'The Nest', text: 'Montessori nursery for infants.' },
          { title: 'The Sprout', text: 'Toddler Montessori nursery program.' },
          { title: 'The Bloom', text: 'Montessori pre-school ages 3–6.' },
        ],
      },
    ],
    extraLinks: [
      { href: '/nursery', label: 'Montessori nursery in Choueifat' },
      { href: '/preschool', label: 'Montessori pre-school in Choueifat' },
      { href: '/our-approach', label: 'Discover our Montessori approach' },
      { href: '/book-a-tour', label: 'Book a visit' },
    ],
  }),
  '/nursery': block({
    h1: 'Montessori nursery in Choueifat',
    intro:
      'Discover a nurturing Montessori nursery in Choueifat for infants and toddlers — The Nest and The Sprout at Montessori Minds.',
    sections: [
      {
        h2: 'Infant Community',
        body: 'Gentle Montessori nursery care for our youngest learners.',
      },
      {
        h2: 'Toddler Community',
        body: 'Montessori for toddlers — independence with joy.',
      },
    ],
    extraLinks: [
      { href: '/programs', label: 'All programs' },
      { href: '/preschool', label: 'Montessori pre-school' },
      { href: '/book-a-tour', label: 'Book a nursery tour' },
    ],
  }),
  '/preschool': block({
    h1: 'Montessori pre-school in Choueifat',
    intro:
      'Montessori pre-school in Choueifat for ages 3–6. Children’s House at Montessori Minds — hands-on materials and mixed-age community.',
    sections: [
      {
        h2: "Children's House",
        body: 'Where curiosity becomes capability for preschool and pre-school aged children.',
      },
    ],
    extraLinks: [
      { href: '/nursery', label: 'Montessori nursery' },
      { href: '/programs', label: 'Compare programs' },
      { href: '/book-a-tour', label: 'Book a visit' },
    ],
  }),
  '/la-casa-verde': block({
    h1: 'La Casa Verde by Montessori Minds',
    intro:
      'Discover La Casa Verde by Montessori Minds — a nurturing early learning environment in Choueifat, Lebanon.',
    sections: [
      {
        h2: 'Our school home',
        body: 'Montessori-inspired nursery and pre-school on Saida Old Road, Choueifat.',
      },
    ],
    extraLinks: [
      { href: '/nursery', label: 'Nursery programs' },
      { href: '/preschool', label: 'Pre-school programs' },
      { href: '/book-a-tour', label: 'Visit La Casa Verde' },
    ],
  }),
  '/our-approach': block({
    h1: 'Montessori education and early learning',
    intro:
      "Learn about Montessori Minds' approach — prepared environments, trained Guides and respect for each child's pace.",
    sections: [
      {
        h2: 'What children experience',
        body: 'Practical life, purposeful materials and mixed-age community.',
      },
    ],
    extraLinks: [
      { href: '/programs', label: 'Our programs' },
      { href: '/admission', label: 'Admissions' },
    ],
  }),
  '/programs': block({
    h1: 'Montessori programs for every stage',
    intro:
      'Compare Infant Community, Toddler Community and Children’s House at Montessori Minds in Choueifat.',
    sections: [
      {
        h2: 'Program pathways',
        items: [
          { title: 'Infant Community', text: 'Birth – 18 months' },
          { title: 'Toddler Community', text: '18 months – 3 years' },
          { title: "Children's House", text: 'Ages 3 – 6' },
        ],
      },
    ],
    extraLinks: [
      { href: '/nursery', label: 'Nursery page' },
      { href: '/preschool', label: 'Pre-school page' },
    ],
  }),
  '/admission': block({
    h1: 'Parents and admissions at Montessori Minds',
    intro:
      'Your path from discovery to welcome — visit, apply and settle in at our Choueifat nursery and pre-school.',
    sections: [
      {
        h2: 'Admissions journey',
        items: [
          { title: 'Discover', text: 'Explore Montessori Minds.' },
          { title: 'Visit', text: 'Tour the environment.' },
          { title: 'Apply', text: 'Complete your application.' },
        ],
      },
    ],
    extraLinks: [{ href: '/book-a-tour', label: 'Book a school tour' }],
  }),
  '/gallery': block({
    h1: 'Our Montessori environment',
    intro:
      'Prepared classrooms, practical life, outdoor learning and daily rhythm at Montessori Minds in Choueifat.',
    sections: [
      {
        h2: 'Environment gallery',
        body: 'Photos of learning spaces at our Montessori nursery and pre-school.',
      },
    ],
    extraLinks: [{ href: '/book-a-tour', label: 'See it in person' }],
  }),
  '/book-a-tour': block({
    h1: 'Book a visit to Montessori Minds',
    intro:
      'Schedule a tour of our Montessori nursery and pre-school in Choueifat. Meet our Guides at La Casa Verde.',
    sections: [
      {
        h2: 'Plan your visit',
        body: 'Choose a time that works for your family.',
      },
    ],
    extraLinks: [
      { href: '/nursery', label: 'About our nursery' },
      { href: '/preschool', label: 'About pre-school' },
    ],
  }),
}

export function getCrawlableBodyHtml(path) {
  const normalized = path === '/' ? '/' : path.replace(/\/$/, '')
  return CRAWLABLE_BODY_BY_PATH[normalized] ?? CRAWLABLE_BODY_BY_PATH['/']
}
