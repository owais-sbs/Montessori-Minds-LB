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
    name: 'The Nest — Infant Community (Nido)',
    description:
      'Montessori infant community for birth to 18 months at Montessori Minds in Choueifat. Secure care, sensory exploration and responsive language.',
    ageRange: 'Birth – 18 months',
    url: `${SITE_URL}/nursery`,
  },
  {
    name: 'The Sprout — Toddler Community',
    description:
      'Montessori toddler program for 18 months to 3 years. Practical life, movement, language and growing independence.',
    ageRange: '18 months – 3 years',
    url: `${SITE_URL}/nursery`,
  },
  {
    name: "The Bloom — Children's House",
    description:
      'Montessori pre-school / Children’s House for ages 3–6. Mixed-age classroom, Montessori materials and uninterrupted work cycles.',
    ageRange: '3 – 6 years',
    url: `${SITE_URL}/preschool`,
  },
]

export function getCourseJsonLdList() {
  return COURSE_OFFERINGS.map((course) => ({
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.name,
    description: course.description,
    provider: {
      '@type': 'EducationalOrganization',
      name: 'Montessori Minds',
      sameAs: `${SITE_URL}/`,
    },
    url: course.url,
    educationalLevel: course.ageRange,
    teaches: 'Montessori Education',
    inLanguage: 'en',
    isAccessibleForFree: false,
    offers: {
      '@type': 'Offer',
      category: 'Early Childhood Education',
      availability: 'https://schema.org/InStock',
      url: `${SITE_URL}/admission`,
    },
  }))
}

function buildSameAs() {
  const links = []
  const { instagram, facebook } = contactPlaceholders.social || {}
  // Only include profile URLs that look school-specific (not bare domain home pages)
  if (instagram && !/^https?:\/\/(www\.)?instagram\.com\/?$/i.test(instagram)) {
    links.push(instagram)
  }
  if (facebook && !/^https?:\/\/(www\.)?facebook\.com\/?$/i.test(facebook)) {
    links.push(facebook)
  }
  links.push('https://amshq.org/', 'https://montessori-ami.org/')
  return links
}

export function getOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: 'Montessori Minds',
        alternateName: 'La Casa Verde by Montessori Minds',
        description: defaultSeo.description,
        publisher: { '@id': `${SITE_URL}/#organization` },
        inLanguage: 'en-LB',
      },
      {
        '@type': ['Organization', 'School', 'LocalBusiness', 'EducationalOrganization', 'Preschool', 'ChildCare'],
        '@id': `${SITE_URL}/#organization`,
        name: 'Montessori Minds',
        legalName: 'La Casa Verde by Montessori Minds',
        alternateName: ['La Casa Verde by Montessori Minds', 'La Casa Verde', 'Montessori Minds LB'],
        description:
          'Montessori school, pre-school and nursery on Saida Old Road, Al Omara District, Choueifat, Lebanon. Programs for infants through age six, Monday–Friday 8:00 AM–4:00 PM.',
        url: `${SITE_URL}/`,
        logo: defaultSeo.logo,
        image: [defaultSeo.image, defaultSeo.logo],
        telephone: '+96171007150',
        email: contactPlaceholders.email,
        priceRange: '$$',
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
          addressRegion: 'Mount Lebanon Governorate',
          addressCountry: 'LB',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 33.8,
          longitude: 35.5,
        },
        sameAs: buildSameAs(),
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
      ...COURSE_OFFERINGS.map((course) => ({
        '@type': 'Course',
        '@id': `${course.url}#${course.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
        name: course.name,
        description: course.description,
        provider: { '@id': `${SITE_URL}/#organization` },
        url: course.url,
        educationalLevel: course.ageRange,
        teaches: 'Montessori Education',
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
  }
}
