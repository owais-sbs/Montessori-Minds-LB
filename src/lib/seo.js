import { contactPlaceholders } from '../data/contact'
import { SITE_URL, defaultSeo, absoluteUrl } from './seoPages.js'

export { SITE_URL, defaultSeo, pageSeo, ALL_PAGE_SEO, absoluteUrl } from './seoPages.js'

export function getBreadcrumbJsonLd({ path, breadcrumb }) {
  if (!path || path === '/' || !breadcrumb) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: absoluteUrl('/'),
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: breadcrumb,
        item: absoluteUrl(path),
      },
    ],
  }
}

/** @param {{ title: string, body: string }[]} faqs */
export function getFaqPageJsonLd(faqs) {
  if (!faqs?.length) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.title,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.body,
      },
    })),
  }
}

const COURSE_OFFERINGS = [
  {
    id: 'nest',
    name: 'The Nest — Infant Community (Nido)',
    description:
      'Montessori infant community for birth to 18 months at Montessori Minds in Choueifat. Secure care, sensory exploration and responsive language. Campus hours Monday–Friday 8:00 AM–4:00 PM.',
    ageRange: 'Birth – 18 months',
    schedule: 'Monday–Friday, 8:00 AM–4:00 PM',
    url: `${SITE_URL}/nursery`,
  },
  {
    id: 'sprout',
    name: 'The Sprout — Toddler Community',
    description:
      'Montessori toddler program for 18 months to 3 years. Practical life, movement, language and growing independence. Campus hours Monday–Friday 8:00 AM–4:00 PM.',
    ageRange: '18 months – 3 years',
    schedule: 'Monday–Friday, 8:00 AM–4:00 PM',
    url: `${SITE_URL}/nursery`,
  },
  {
    id: 'bloom',
    name: "The Bloom — Children's House",
    description:
      'Montessori pre-school / Children’s House for ages 3–6. Mixed-age classroom, Montessori materials and uninterrupted work cycles. Campus hours Monday–Friday 8:00 AM–4:00 PM.',
    ageRange: '3 – 6 years',
    schedule: 'Monday–Friday, 8:00 AM–4:00 PM',
    url: `${SITE_URL}/preschool`,
  },
]

function buildSameAs() {
  const links = []
  const { instagram, facebook, linkedin, wikidata } = contactPlaceholders.social || {}
  if (instagram && !/^https?:\/\/(www\.)?instagram\.com\/?$/i.test(instagram)) {
    links.push(instagram)
  }
  if (facebook && !/^https?:\/\/(www\.)?facebook\.com\/?$/i.test(facebook)) {
    links.push(facebook)
  }
  if (linkedin && !/^https?:\/\/(www\.)?linkedin\.com\/?$/i.test(linkedin)) {
    links.push(linkedin)
  }
  if (wikidata) links.push(wikidata)
  // Reference bodies until school-owned social / Wikidata URLs are confirmed
  links.push('https://amshq.org/', 'https://montessori-ami.org/')
  return [...new Set(links)]
}

const DIRECTOR_PERSON = {
  '@type': 'Person',
  '@id': `${SITE_URL}/#director`,
  name: 'Founding Director',
  jobTitle: 'Founding Director',
  description:
    'Leads La Casa Verde by Montessori Minds in Choueifat. Named biography and public profiles will replace this role title once approved for publication.',
  url: `${SITE_URL}/la-casa-verde`,
  worksFor: { '@id': `${SITE_URL}/#organization` },
  knowsAbout: ['Montessori Education', 'Early Childhood Development', 'Pre-School Programs'],
  sameAs: buildSameAs(),
}

export function getOrganizationJsonLd() {
  const sameAs = buildSameAs()

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: 'La Casa Verde by Montessori Minds',
        alternateName: ['Montessori Minds', 'La Casa Verde'],
        description: defaultSeo.description,
        publisher: { '@id': `${SITE_URL}/#organization` },
        inLanguage: 'en-LB',
      },
      {
        '@type': [
          'Organization',
          'School',
          'LocalBusiness',
          'EducationalOrganization',
          'Preschool',
          'ChildCare',
        ],
        '@id': `${SITE_URL}/#organization`,
        name: 'La Casa Verde by Montessori Minds',
        legalName: 'La Casa Verde by Montessori Minds',
        alternateName: ['Montessori Minds', 'La Casa Verde', 'Montessori Minds LB'],
        description:
          'A Montessori preschool in Choueifat, Lebanon, offering programs for infants, toddlers, and preschool-aged children on Saida Old Road, Al Omara District. Monday–Friday 8:00 AM–4:00 PM.',
        url: `${SITE_URL}/`,
        logo: defaultSeo.logo,
        image: [defaultSeo.image, defaultSeo.logo],
        telephone: '+96171007150',
        email: contactPlaceholders.email,
        priceRange: '$$',
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: '+96171007150',
            email: contactPlaceholders.email,
            contactType: 'admissions',
            areaServed: 'LB',
            availableLanguage: ['English', 'Arabic', 'French'],
          },
        ],
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '08:00',
            closes: '16:00',
          },
        ],
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Saida Old Road, Al Omara District',
          addressLocality: 'Choueifat',
          addressRegion: 'Mount Lebanon',
          addressCountry: 'LB',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 33.8,
          longitude: 35.5,
        },
        sameAs,
        knowsAbout: [
          'Montessori Education',
          'Early Childhood Development',
          'Pre-School Programs',
          'Nursery Education',
          'Toddler Development',
          'Practical Life Education',
          'Sensorial Learning',
          'Children’s House',
        ],
        founder: { '@id': `${SITE_URL}/#director` },
        employee: { '@id': `${SITE_URL}/#director` },
        areaServed: [
          { '@type': 'City', name: 'Choueifat' },
          { '@type': 'City', name: 'Beirut' },
          { '@type': 'City', name: 'Baabda' },
          { '@type': 'AdministrativeArea', name: 'Mount Lebanon' },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Montessori programs',
          itemListElement: COURSE_OFFERINGS.map((course, index) => ({
            '@type': 'Offer',
            position: index + 1,
            itemOffered: {
              '@type': 'Course',
              name: course.name,
              description: course.description,
              url: course.url,
              provider: { '@id': `${SITE_URL}/#organization` },
            },
          })),
        },
      },
      DIRECTOR_PERSON,
      ...COURSE_OFFERINGS.map((course) => ({
        '@type': 'Course',
        '@id': `${SITE_URL}/#course-${course.id}`,
        name: course.name,
        description: course.description,
        provider: { '@id': `${SITE_URL}/#organization` },
        url: course.url,
        educationalLevel: course.ageRange,
        typicalAgeRange: course.ageRange,
        teaches: 'Montessori Education',
        timeRequired: 'P1D',
        hasCourseInstance: {
          '@type': 'CourseInstance',
          courseMode: 'onsite',
          location: {
            '@type': 'Place',
            name: 'La Casa Verde by Montessori Minds',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Saida Old Road, Al Omara District',
              addressLocality: 'Choueifat',
              addressRegion: 'Mount Lebanon',
              addressCountry: 'LB',
            },
          },
          description: `Age range: ${course.ageRange}. Schedule: ${course.schedule}.`,
        },
        offers: {
          '@type': 'Offer',
          category: 'Early Childhood Education',
          availability: 'https://schema.org/InStock',
          url: `${SITE_URL}/admission`,
          description: `Schedule: ${course.schedule}. Tuition shared during admissions.`,
        },
      })),
    ],
  }
}

export function getWebPageJsonLd({ title, description, path }) {
  const url = absoluteUrl(path)
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'en-LB',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '#crawl-content h1', '#crawl-content p'],
    },
    dateModified: '2026-10-30',
  }
}
