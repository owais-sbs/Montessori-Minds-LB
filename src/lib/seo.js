import { contactPlaceholders } from '../data/contact'

export const SITE_URL = 'https://www.montessorimindslb.com'

export const defaultSeo = {
  title: 'Montessori School, Nursery & Pre-School in Choueifat, Lebanon | Montessori Minds',
  description:
    'Montessori Minds in Choueifat offers Montessori nursery and pre-school for ages 6 months–6. La Casa Verde welcomes families from Beirut, Baabda and Mount Lebanon.',
  image: `${SITE_URL}/images/hero/hero.jpg`,
  logo: `${SITE_URL}/images/branding/La%20casa%20verde%20logo2.png`,
}

/** Primary mapped pages — unique title + description per URL. */
export const pageSeo = {
  home: {
    title: defaultSeo.title,
    description: defaultSeo.description,
    path: '/',
    image: defaultSeo.image,
    breadcrumb: 'Home',
  },
  laCasaVerde: {
    title: 'La Casa Verde by Montessori Minds | Montessori School Choueifat, Lebanon',
    description:
      'La Casa Verde is the Choueifat home of Montessori Minds — a Montessori school in Lebanon with nursery and pre-school pathways focused on independence and discovery.',
    path: '/la-casa-verde',
    image: defaultSeo.image,
    breadcrumb: 'La Casa Verde',
  },
  preschool: {
    title: 'Montessori Pre-School & Preschool in Choueifat | Ages 3–6 | Montessori Minds',
    description:
      'Montessori pre-school in Choueifat for ages 3–6. Children’s House at Montessori Minds — hands-on materials, mixed-age community and school readiness in Lebanon.',
    path: '/preschool',
    image: `${SITE_URL}/images/programs/bloom.jpg`,
    breadcrumb: 'Pre-School',
  },
  nursery: {
    title: 'Montessori Nursery in Choueifat, Lebanon | Infant & Toddler | Montessori Minds',
    description:
      'Montessori nursery in Choueifat for infants and toddlers. The Nest and The Sprout at Montessori Minds — respectful care and early learning near Beirut.',
    path: '/nursery',
    image: `${SITE_URL}/images/programs/nest.jpg`,
    breadcrumb: 'Nursery',
  },
  ourApproach: {
    title: 'Montessori Education & Early Learning Approach | Montessori Minds Choueifat',
    description:
      'How Montessori Minds teaches in Choueifat — prepared environments, trained Guides, practical life and respect for each child’s pace in our Lebanon nursery and pre-school.',
    path: '/our-approach',
    image: `${SITE_URL}/images/classroom/approach.jpg`,
    breadcrumb: 'Our approach',
  },
  programs: {
    title: 'Montessori Programs: Infant, Toddler & Pre-School | Choueifat | Montessori Minds',
    description:
      'Compare Infant Community, Toddler Community and Children’s House at Montessori Minds in Choueifat — Montessori programs from 6 months through age six in Lebanon.',
    path: '/programs',
    image: `${SITE_URL}/images/programs/sprout.jpg`,
    breadcrumb: 'Programs',
  },
  admission: {
    title: 'Admissions & Parent FAQs | Montessori Nursery & Pre-School Choueifat',
    description:
      'Admissions at Montessori Minds in Choueifat — visit, apply and settle in. FAQs for families choosing a Montessori nursery or pre-school in Lebanon.',
    path: '/admission',
    image: defaultSeo.image,
    breadcrumb: 'Admissions',
  },
  gallery: {
    title: 'Montessori Classroom & Environment Gallery | Montessori Minds Choueifat',
    description:
      'Photos of prepared classrooms, practical life, outdoor learning and daily rhythm at Montessori Minds — a Montessori nursery and pre-school in Choueifat, Lebanon.',
    path: '/gallery',
    image: `${SITE_URL}/images/classroom/prepared-environment.jpg`,
    breadcrumb: 'Gallery',
  },
  bookATour: {
    title: 'Book a School Tour | Montessori Minds Choueifat, Lebanon',
    description:
      'Schedule a visit to Montessori Minds in Choueifat. Tour our Montessori nursery and pre-school, meet Guides and see La Casa Verde in person.',
    path: '/book-a-tour',
    image: defaultSeo.image,
    breadcrumb: 'Book a visit',
  },
}

export function absoluteUrl(path = '/') {
  if (!path || path === '/') return `${SITE_URL}/`
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}

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

/** Global Organization / School JSON-LD (single source — matches footer NAP). */
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
        '@type': ['School', 'LocalBusiness', 'EducationalOrganization', 'Preschool', 'ChildCare'],
        '@id': `${SITE_URL}/#organization`,
        name: 'Montessori Minds',
        alternateName: ['La Casa Verde by Montessori Minds', 'La Casa Verde', 'Montessori Minds LB'],
        description:
          'Montessori school, nursery, and pre-school in Choueifat, Lebanon — nurturing independence, curiosity and confidence through authentic Montessori education.',
        url: `${SITE_URL}/`,
        logo: defaultSeo.logo,
        image: [defaultSeo.image, defaultSeo.logo],
        telephone: '+96171007150',
        email: contactPlaceholders.email,
        priceRange: '$$',
        openingHours: 'Mo-Fr 08:00-16:00',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Saida Old Road, Al Omara District',
          addressLocality: 'Choueifat',
          addressRegion: 'Mount Lebanon Governorate',
          postalCode: '',
          addressCountry: 'LB',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 33.8,
          longitude: 35.5,
        },
        areaServed: [
          { '@type': 'City', name: 'Choueifat' },
          { '@type': 'City', name: 'Beirut' },
          { '@type': 'City', name: 'Baabda' },
          { '@type': 'AdministrativeArea', name: 'Mount Lebanon' },
        ],
        knowsAbout: [
          'Montessori education',
          'Montessori nursery',
          'Montessori pre-school',
          'Early childhood education Lebanon',
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Montessori programs',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'EducationalOccupationalProgram',
                name: 'The Nest — Infant Community',
                description: 'Montessori nursery for infants in Choueifat, Lebanon',
                educationalProgramMode: 'in person',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'EducationalOccupationalProgram',
                name: 'The Sprout — Toddler Community',
                description: 'Montessori toddler nursery program in Choueifat',
                educationalProgramMode: 'in person',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'EducationalOccupationalProgram',
                name: "The Bloom — Children's House",
                description: 'Montessori pre-school for ages 3–6 in Choueifat',
                educationalProgramMode: 'in person',
              },
            },
          ],
        },
      },
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
