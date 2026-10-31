import { contactPlaceholders } from '../data/contact.js'
import { SITE_URL, defaultSeo, absoluteUrl } from './seoPages.js'

export { SITE_URL, defaultSeo, pageSeo, ALL_PAGE_SEO, absoluteUrl } from './seoPages.js'

export function getBreadcrumbJsonLd({ path, breadcrumb }) {
  if (!path || path === '/' || !breadcrumb) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${absoluteUrl(path)}#breadcrumb`,
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
  // Only the school's own profiles belong in sameAs (it means "this same entity").
  return [...new Set(links)]
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
        ...(sameAs.length ? { sameAs } : {}),
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
        '@id': `${SITE_URL}/#course-${course.id}`,
        name: course.name,
        description: course.description,
        provider: { '@id': `${SITE_URL}/#organization` },
        url: course.url,
        educationalLevel: course.ageRange,
        typicalAgeRange: course.ageRange,
        teaches: 'Montessori Education',
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

export function getWebPageJsonLd({ title, description, path, image }) {
  const url = absoluteUrl(path)
  const normalized = !path || path === '/' ? '/' : path
  const course = PAGE_COURSES[normalized]
  return {
    '@context': 'https://schema.org',
    '@type': PAGE_TYPES[normalized] || 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
    publisher: { '@id': `${SITE_URL}/#organization` },
    ...(image
      ? { primaryImageOfPage: { '@type': 'ImageObject', url: image }, image }
      : {}),
    ...(normalized !== '/' ? { breadcrumb: { '@id': `${url}#breadcrumb` } } : {}),
    ...(course ? { mainEntity: course.map((id) => ({ '@id': `${SITE_URL}/#course-${id}` })) } : {}),
    inLanguage: 'en-LB',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '#crawl-content h1', '#crawl-content article > p'],
    },
    datePublished: '2026-09-21',
    dateModified: SITE_LAST_MODIFIED,
  }
}

/** Bump when page copy changes; feeds WebPage.dateModified and sitemap lastmod. */
export const SITE_LAST_MODIFIED = '2026-10-31'

/** schema.org WebPage subtypes that match each page's purpose. */
const PAGE_TYPES = {
  '/la-casa-verde': 'AboutPage',
  '/programs': 'CollectionPage',
  '/gallery': 'CollectionPage',
  '/book-a-tour': 'ContactPage',
}

/** Program pages point at the Course nodes they describe. */
const PAGE_COURSES = {
  '/nursery': ['nest', 'sprout'],
  '/preschool': ['bloom'],
  '/programs': ['nest', 'sprout', 'bloom'],
}

/** ImageGallery for the gallery page, built from the visible photo captions. */
export function getImageGalleryJsonLd(items) {
  if (!items?.length) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    '@id': `${SITE_URL}/gallery#gallery`,
    name: 'Life at La Casa Verde',
    url: `${SITE_URL}/gallery`,
    about: { '@id': `${SITE_URL}/#organization` },
    image: items.map((g) => ({
      '@type': 'ImageObject',
      contentUrl: absoluteUrl(g.image),
      name: g.title,
      description: g.alt,
    })),
  }
}
