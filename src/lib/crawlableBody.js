/**
 * Server-rendered crawlable body (injected into static HTML per route at build).
 *
 * Copy is assembled from the same data modules the React pages render, so the
 * no-JavaScript HTML that search and AI crawlers read matches what visitors see.
 * Every page gets one H1, an answer-first intro and at least three
 * question-shaped H2 sections.
 */
import { siteFaqs, homeFaqPreview } from '../data/faq.js'
import {
  nurseryFaqs,
  preschoolFaqs,
  infantProgramPage,
  toddlerProgramPage,
  childrensHouseProgramPage,
} from '../data/programPages.js'
import { nurseryPage } from '../data/nursery.js'
import { preschoolPage } from '../data/preschool.js'
import { programs } from '../data/programs.js'
import { laCasaVerdePage } from '../data/laCasaVerde.js'
import { approachSections } from '../data/approach.js'
import { approachPageContent, parentsPageContent } from '../data/sitePages.js'
import { galleryItems } from '../data/gallery.js'

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

const NAP = {
  name: 'La Casa Verde by Montessori Minds',
  address: 'Saida Old Road, Al Omara District, Choueifat, Mount Lebanon, Lebanon',
  phone: '+961 71 007 150',
  phoneHref: '+96171007150',
  email: 'hello@montessorimindslb.com',
  hours: 'Monday–Friday, 8:00 AM–4:00 PM',
}

const AGES =
  'Infant Community, The Nest (birth–18 months); Toddler Community, The Sprout (18 months–3 years); and Children’s House, The Bloom (3–6 years)'

function esc(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function navHtml() {
  const items = GLOBAL_NAV_LINKS.map((l) => `<li><a href="${l.href}">${l.label}</a></li>`).join('')
  return `<nav aria-label="Primary"><ul>${items}</ul></nav>`
}

/**
 * Section shape:
 *   h2      — heading (prefer a question parents actually ask)
 *   body    — string or array of paragraphs (may contain trusted inline links)
 *   items   — [{ title, text }] rendered as H3 + paragraph
 *   list    — [string] rendered as a bullet list
 */
function sectionHtml(s) {
  const paragraphs = (Array.isArray(s.body) ? s.body : s.body ? [s.body] : [])
    .map((p) => `<p>${p}</p>`)
    .join('')
  const items = s.items
    ? `<ul>${s.items.map((i) => `<li><h3>${esc(i.title)}</h3><p>${esc(i.text)}</p></li>`).join('')}</ul>`
    : ''
  const list = s.list ? `<ul>${s.list.map((li) => `<li>${esc(li)}</li>`).join('')}</ul>` : ''
  return `<section><h2>${esc(s.h2)}</h2>${paragraphs}${items}${list}</section>`
}

function faqSection(h2, faqs) {
  return {
    h2,
    items: faqs.map((f) => ({ title: f.title, text: f.body })),
  }
}

function block({ h1, intro, sections = [], extraLinks = [] }) {
  const linksHtml = extraLinks.length
    ? `<p>Related pages: ${extraLinks.map((l) => `<a href="${l.href}">${l.label}</a>`).join(' · ')}</p>`
    : ''

  return `<div id="crawl-content" class="sr-only">
  <header>${navHtml()}</header>
  <main>
    <article>
    <h1>${esc(h1)}</h1>
    <p>${intro}</p>
    ${sections.map(sectionHtml).join('\n    ')}
    ${linksHtml}
    </article>
  </main>
  <footer>
    <p>${NAP.name} · ${NAP.address} · <a href="mailto:${NAP.email}">${NAP.email}</a> · <a href="tel:${NAP.phoneHref}">${NAP.phone}</a> · ${NAP.hours}</p>
  </footer>
</div>`
}

const link = (href, label) => `<a href="${href}">${label}</a>`

const typicalDayList = infantProgramPage.typicalDay.map((d) => `${d.time} — ${d.detail}`)

const visitSection = {
  h2: 'How do I book a visit?',
  body: `Use the ${link('/book-a-tour', 'book a school visit')} form, call ${NAP.phone} or email ${NAP.email}. Weekday morning visits (${NAP.hours}) let families see arrival, a work cycle and outdoor time in one trip to ${NAP.address}.`,
}

export const CRAWLABLE_BODY_BY_PATH = {
  '/': block({
    h1: 'Montessori Preschool in Choueifat — La Casa Verde by Montessori Minds',
    intro: `${NAP.name} is a Montessori preschool and nursery on ${NAP.address}. We welcome children from infancy to age six in three communities: ${AGES}. Campus hours are ${NAP.hours}. Phone ${NAP.phone} · ${NAP.email}. Arabic, English and French are part of daily classroom life.`,
    sections: [
      {
        h2: 'What is La Casa Verde by Montessori Minds?',
        body: [
          laCasaVerdePage.sections[0].description,
          laCasaVerdePage.sections[1].description,
        ],
      },
      {
        h2: 'Which Montessori programs do you offer?',
        body: `Three communities share one Choueifat campus, so children can grow from our ${link('/nursery', 'Montessori nursery in Choueifat')} into our ${link('/preschool', 'Montessori pre-school programme')} without changing schools.`,
        items: programs.map((p) => ({ title: `${p.name} — ${p.ageRange}`, text: p.description })),
      },
      {
        h2: 'How does Montessori work here?',
        body: approachSections[0].description,
        items: approachPageContent.sixtySeconds.concepts.map((c) => ({ title: c.label, text: c.detail })),
      },
      {
        h2: 'What does a typical day look like?',
        list: typicalDayList,
      },
      faqSection('Frequently asked questions', homeFaqPreview),
      visitSection,
    ],
    extraLinks: [
      { href: '/programs', label: 'Compare Montessori programs' },
      { href: '/our-approach', label: 'How Montessori works here' },
      { href: '/admission', label: 'Admissions' },
      { href: '/faq', label: 'Full FAQ' },
      { href: '/llms.txt', label: 'LLMs.txt' },
    ],
  }),

  '/la-casa-verde': block({
    h1: 'La Casa Verde by Montessori Minds',
    intro: `${laCasaVerdePage.hero.description} Address: ${NAP.address}. Hours: ${NAP.hours}. Phone ${NAP.phone}.`,
    sections: [
      {
        h2: 'What kind of school is La Casa Verde?',
        body: laCasaVerdePage.sections[0].description,
      },
      {
        h2: 'How is Montessori education practised at La Casa Verde?',
        body: [
          laCasaVerdePage.sections[1].description,
          approachSections.find((s) => s.id === 'teacher').description,
        ],
      },
      {
        h2: 'Which programs run on the La Casa Verde campus?',
        body: `${laCasaVerdePage.sections[2].description} See the ${link('/nursery', 'Montessori nursery')} and ${link('/preschool', 'Montessori pre-school')} pages for details.`,
        items: programs.map((p) => ({ title: `${p.name} — ${p.ageRange}`, text: p.shortDescription })),
      },
      {
        h2: 'Where is La Casa Verde and how do I contact the school?',
        body: laCasaVerdePage.sections[3].description,
        list: [
          `Name: ${NAP.name} (also known as Montessori Minds)`,
          `Address: ${NAP.address}`,
          `Phone: ${NAP.phone}`,
          `Email: ${NAP.email}`,
          `Hours: ${NAP.hours}`,
        ],
      },
      {
        h2: 'What Montessori training do Guides follow?',
        body: siteFaqs.find((f) => f.id === 'certifications').body,
      },
      {
        h2: 'How can I visit La Casa Verde?',
        body: `${laCasaVerdePage.cta.description} ${link('/book-a-tour', 'Book a school visit')} or ${link('/admission', 'start an application')}.`,
      },
    ],
    extraLinks: [
      { href: '/our-approach', label: 'Our approach' },
      { href: '/programs', label: 'Programs' },
      { href: '/faq', label: 'FAQ' },
    ],
  }),

  '/nursery': block({
    h1: 'Montessori Nursery in Choueifat',
    intro: `${nurseryPage.hero.description} Our nursery serves infants and toddlers from birth to 3 years at ${NAP.name}, open ${NAP.hours}.`,
    sections: [
      {
        h2: 'What is the Montessori nursery at La Casa Verde?',
        body: [nurseryPage.sections[0].description, nurseryPage.sections[2].description],
      },
      {
        h2: `What happens in the Infant Community (${infantProgramPage.hero.ageRange})?`,
        body: [infantProgramPage.hero.description, infantProgramPage.understanding.body],
        list: infantProgramPage.inside.items,
      },
      {
        h2: `What happens in the Toddler Community (${toddlerProgramPage.hero.ageRange})?`,
        body: [nurseryPage.sections[1].description, toddlerProgramPage.understanding.body],
        list: toddlerProgramPage.inside.items,
      },
      {
        h2: 'What skills does the nursery help children develop?',
        items: [...infantProgramPage.developing, ...toddlerProgramPage.developing].map((d) => ({
          title: d.title,
          text: d.description,
        })),
      },
      {
        h2: 'What does a nursery day look like?',
        list: typicalDayList,
      },
      {
        h2: 'What comes after nursery?',
        body: `${nurseryPage.sections[3].description} Read about our ${link('/preschool', 'Montessori pre-school programme')} for ages 3–6.`,
      },
      faqSection('Montessori nursery questions from parents', nurseryFaqs),
      { ...visitSection, h2: 'How do I book a nursery tour?' },
    ],
    extraLinks: [
      { href: '/programs', label: 'All programs' },
      { href: '/our-approach', label: 'Our Montessori approach' },
      { href: '/admission', label: 'Admissions' },
    ],
  }),

  '/preschool': block({
    h1: 'Montessori Pre-School in Choueifat',
    intro: `${childrensHouseProgramPage.hero.description} Children’s House (The Bloom) serves ages 3–6 at ${NAP.name}, ${NAP.address}, open ${NAP.hours}.`,
    sections: [
      {
        h2: 'What is the Montessori pre-school at La Casa Verde?',
        body: [preschoolPage.sections[0].description, childrensHouseProgramPage.understanding.body],
      },
      {
        h2: 'What do children learn in Children’s House?',
        body: preschoolPage.sections[1].description,
        items: approachPageContent.learningAreas.map((a) => ({ title: a.name, text: a.description })),
      },
      {
        h2: 'What happens inside the pre-school classroom?',
        body: preschoolPage.sections[2].description,
        list: childrensHouseProgramPage.inside.items,
      },
      {
        h2: 'What skills does Montessori pre-school build?',
        items: childrensHouseProgramPage.developing.map((d) => ({ title: d.title, text: d.description })),
      },
      {
        h2: 'What does a pre-school day look like?',
        list: typicalDayList,
      },
      {
        h2: 'Is my toddler ready for pre-school?',
        body: `${preschoolPage.sections[4].description} Younger children start in our ${link('/nursery', 'Montessori nursery in Choueifat')}.`,
      },
      faqSection('Montessori pre-school questions from parents', preschoolFaqs),
      { ...visitSection, h2: 'How do I visit the pre-school?' },
    ],
    extraLinks: [
      { href: '/programs', label: 'Compare programs' },
      { href: '/our-approach', label: 'Our Montessori approach' },
      { href: '/admission', label: 'Admissions' },
    ],
  }),

  '/our-approach': block({
    h1: 'Montessori Education and Early Learning',
    intro: `At ${NAP.name} in Choueifat, children learn in a prepared environment with purposeful materials, freedom within limits and trained Guides. ${approachSections[0].description}`,
    sections: [
      {
        h2: 'What is the Montessori method?',
        body: siteFaqs.find((f) => f.id === 'what-is-montessori').body,
        items: approachPageContent.sixtySeconds.concepts.map((c) => ({ title: c.label, text: c.detail })),
      },
      {
        h2: 'What do children experience every day?',
        items: approachSections.slice(1, 7).map((s) => ({ title: s.title, text: s.description })),
      },
      {
        h2: 'What are the Montessori learning areas?',
        items: approachPageContent.learningAreas.map((a) => ({ title: a.name, text: a.description })),
      },
      {
        h2: 'What does a Montessori Guide do?',
        body: approachSections.find((s) => s.id === 'teacher').description,
      },
      {
        h2: 'How is Montessori different from a traditional classroom?',
        list: approachPageContent.comparison.pairs.map(
          (p) => `Instead of only “${p.instead}”, Montessori also encourages ${p.encourages.toLowerCase()}.`,
        ),
      },
      faqSection(
        'Common questions about Montessori',
        approachPageContent.myths.map((m) => ({ title: m.title, body: m.body })),
      ),
      {
        h2: 'Where can I see Montessori in practice?',
        body: `Visit our ${link('/nursery', 'Montessori nursery in Choueifat')} or ${link('/preschool', 'Montessori pre-school programme')}, or ${link('/book-a-tour', 'book a school visit')}.`,
      },
    ],
    extraLinks: [
      { href: '/programs', label: 'Our programs' },
      { href: '/admission', label: 'Admissions' },
      { href: '/faq', label: 'FAQ' },
      { href: '/parents-guide.md', label: 'Parent guide' },
    ],
  }),

  '/programs': block({
    h1: 'Montessori Programs for Infants, Toddlers & Preschoolers',
    intro: `${NAP.name} in Choueifat runs three Montessori programs on one campus: ${AGES}. All programs run ${NAP.hours} on Saida Old Road.`,
    sections: [
      {
        h2: 'Which Montessori program fits my child’s age?',
        items: programs.map((p) => ({ title: `${p.name} — ${p.ageRange}`, text: p.description })),
      },
      ...programs.map((p) => ({
        h2: `What is included in ${p.name}?`,
        body: p.shortDescription,
        list: p.features,
      })),
      {
        h2: 'What is the difference between nursery and pre-school?',
        body: `${siteFaqs.find((f) => f.id === 'nursery-preschool').body} Details: ${link('/nursery', 'Montessori nursery')} · ${link('/preschool', 'Montessori pre-school')}.`,
      },
      {
        h2: 'What does a typical day look like?',
        list: typicalDayList,
      },
      {
        h2: 'How do I enroll in a program?',
        body: `${siteFaqs.find((f) => f.id === 'enrollment').body} ${siteFaqs.find((f) => f.id === 'tuition').body} See ${link('/admission', 'admissions')}.`,
      },
    ],
    extraLinks: [
      { href: '/our-approach', label: 'Our approach' },
      { href: '/faq', label: 'FAQ' },
      { href: '/book-a-tour', label: 'Book a school visit' },
    ],
  }),

  '/faq': block({
    h1: 'Montessori Nursery & Preschool FAQs',
    intro: `Direct answers about the Montessori method, age groups, hours, location, enrollment and tuition at ${NAP.name} in Choueifat, Lebanon. Can’t find your question? Call ${NAP.phone} or email ${NAP.email}.`,
    sections: [
      ...siteFaqs.map((f) => ({ h2: f.title, body: esc(f.body) })),
      faqSection('Nursery questions', nurseryFaqs.slice(0, 2)),
      faqSection('Pre-school questions', preschoolFaqs.slice(0, 2)),
      faqSection('Admissions and daily life questions', parentsPageContent.faqs),
    ],
    extraLinks: [
      { href: '/programs', label: 'Programs' },
      { href: '/admission', label: 'Admissions' },
      { href: '/book-a-tour', label: 'Book a visit' },
    ],
  }),

  '/admission': block({
    h1: 'Montessori School Admissions in Choueifat',
    intro: `Enrollment at ${NAP.name} starts with a campus visit on Saida Old Road, Choueifat. After you apply, we plan a gradual settling-in period so the transition feels calm for child and family. Admissions questions: ${NAP.phone} · ${NAP.email}.`,
    sections: [
      {
        h2: 'What are the steps to enroll?',
        items: parentsPageContent.journey.map((j) => ({ title: j.title, text: j.description })),
      },
      {
        h2: 'Which program will my child join?',
        body: `Placement is by age: ${AGES}. Exact placement is discussed during your visit. Compare them on the ${link('/programs', 'programs page')}.`,
      },
      {
        h2: 'When will I learn about tuition?',
        body: siteFaqs.find((f) => f.id === 'tuition').body,
      },
      {
        h2: 'What should I bring to the visit?',
        list: [
          'Questions about age placement and the daily schedule',
          'Notes on your child’s sleep and meal routines',
          'Your preferred start date, if you know it',
        ],
      },
      {
        h2: 'How can parents support Montessori at home?',
        items: parentsPageContent.homeTips.map((h) => ({ title: h.title, text: h.description })),
      },
      faqSection('Admissions questions from parents', parentsPageContent.faqs),
      { ...visitSection, h2: 'How do I start?' },
    ],
    extraLinks: [
      { href: '/faq', label: 'FAQ' },
      { href: '/parents-guide.md', label: 'Parent guide' },
      { href: '/our-approach', label: 'Our approach' },
    ],
  }),

  '/gallery': block({
    h1: 'Our Montessori Environment',
    intro: `Photos of prepared classrooms, practical life, nature corners and everyday moments at ${NAP.name} on Saida Old Road, Choueifat. The gallery shows the ${link('/nursery', 'Montessori nursery')} and ${link('/preschool', 'Montessori pre-school')} spaces where children learn ${NAP.hours}.`,
    sections: [
      {
        h2: 'What does a Montessori classroom look like?',
        body: approachSections.find((s) => s.id === 'prepared-environment').description,
        items: galleryItems
          .filter((g) => !/garden|plant|nature|botany/i.test(g.title))
          .map((g) => ({ title: g.title, text: g.alt })),
      },
      {
        h2: 'How do children learn from nature here?',
        body: approachSections.find((s) => s.id === 'nature').description,
        items: galleryItems
          .filter((g) => /garden|plant|nature|botany/i.test(g.title))
          .map((g) => ({ title: g.title, text: g.alt })),
      },
      {
        h2: 'What is practical life work?',
        body: approachSections.find((s) => s.id === 'practical-life').description,
      },
      {
        h2: 'Can I see the classrooms in person?',
        body: `Yes. ${link('/book-a-tour', 'Book a school visit')} on a weekday morning to see classrooms in session.`,
      },
    ],
    extraLinks: [
      { href: '/our-approach', label: 'Our approach' },
      { href: '/programs', label: 'Programs' },
    ],
  }),

  '/book-a-tour': block({
    h1: 'Book a Montessori School Visit in Choueifat',
    intro: `Schedule a weekday tour of the Montessori nursery and pre-school at ${NAP.name}, ${NAP.address}. Use the form on this page, call ${NAP.phone} or email ${NAP.email}.`,
    sections: [
      {
        h2: 'When can I visit?',
        body: `Visits run ${NAP.hours}. Morning visits let you see arrival, a work cycle and outdoor time. Parents commuting from Beirut or Baabda often come mid-morning.`,
      },
      {
        h2: 'What will I see on the tour?',
        body: `You can walk through the classroom that matches your child’s age and meet the Guides.`,
        items: programs.map((p) => ({ title: `${p.name} — ${p.ageRange}`, text: p.shortDescription })),
      },
      {
        h2: 'What happens after the visit?',
        items: parentsPageContent.journey.slice(2).map((j) => ({ title: j.title, text: j.description })),
      },
      {
        h2: 'Will I learn about tuition during the visit?',
        body: siteFaqs.find((f) => f.id === 'tuition').body,
      },
      {
        h2: 'Where is the school?',
        body: `${NAP.address}. Families visit from Choueifat, Beirut, Baabda and nearby Mount Lebanon communities.`,
      },
      {
        h2: 'What should I bring to the visit?',
        list: [
          'Questions about age placement and the daily schedule',
          'Notes on your child’s sleep and meal routines',
          'Your preferred start date, if you know it',
        ],
      },
      {
        h2: 'What does a school day look like?',
        list: typicalDayList,
      },
    ],
    extraLinks: [
      { href: '/nursery', label: 'About our nursery' },
      { href: '/preschool', label: 'About pre-school' },
      { href: '/admission', label: 'Admissions' },
      { href: '/faq', label: 'FAQ' },
    ],
  }),
}

export function getCrawlableBodyHtml(path) {
  const normalized = path === '/' ? '/' : path.replace(/\/$/, '')
  return CRAWLABLE_BODY_BY_PATH[normalized] ?? CRAWLABLE_BODY_BY_PATH['/']
}
