import { contactPlaceholders } from '../data/contact'

export const SITE_URL = 'https://www.montessorimindslb.com'

export const defaultSeo = {
  title: 'Montessori School, Pre-School & Nursery | Montessori Minds',
  description:
    'Montessori Minds offers a nurturing Montessori learning environment for young children, with pre-school and nursery programs in Choueifat.',
  image: `${SITE_URL}/images/branding/La%20casa%20verde%20logo2.png`,
}

/** Primary mapped pages — do not duplicate these title/description pairs elsewhere. */
export const pageSeo = {
  home: {
    title: defaultSeo.title,
    description: defaultSeo.description,
    path: '/',
  },
  laCasaVerde: {
    title: 'La Casa Verde by Montessori Minds | Lebanon',
    description:
      'Discover La Casa Verde by Montessori Minds, a nurturing early learning environment focused on Montessori-inspired education, development and discovery.',
    path: '/la-casa-verde',
  },
  preschool: {
    title: 'Montessori Pre-School in Choueifat | Montessori Minds',
    description:
      'Explore Montessori pre-school at Montessori Minds in Choueifat, supporting young children through hands-on learning, independence and discovery.',
    path: '/preschool',
  },
  nursery: {
    title: 'Montessori Nursery in Choueifat | Montessori Minds',
    description:
      'Discover a nurturing Montessori nursery in Choueifat designed to support young children through early learning, exploration, care and development.',
    path: '/nursery',
  },
  ourApproach: {
    title: 'Montessori Education & Early Learning | Montessori Minds',
    description:
      "Learn about Montessori Minds, our Montessori approach, early learning environment, and commitment to supporting children's independence, curiosity and development.",
    path: '/our-approach',
  },
  programs: {
    title: 'Montessori Programs for Every Stage | Montessori Minds',
    description:
      'Compare Infant Community, Toddler Community and Children’s House pathways at Montessori Minds in Choueifat — Montessori programs for infants through age six.',
    path: '/programs',
  },
  admission: {
    title: 'Parents & Admissions at Montessori Minds | Choueifat',
    description:
      'Parent resources, FAQs and the admissions journey at Montessori Minds — your path from discovery to welcome at our Choueifat nursery and pre-school.',
    path: '/admission',
  },
  gallery: {
    title: 'Our Montessori Environment | Montessori Minds Choueifat',
    description:
      'Explore prepared classrooms, practical life, outdoor spaces and daily learning at Montessori Minds in Choueifat, Lebanon.',
    path: '/gallery',
  },
  bookATour: {
    title: 'Book a Visit | Montessori Minds Choueifat',
    description:
      'Schedule a tour of Montessori Minds in Choueifat. Meet our Guides and experience our Montessori nursery and pre-school environments in person.',
    path: '/book-a-tour',
  },
}

export function absoluteUrl(path = '/') {
  if (!path || path === '/') return `${SITE_URL}/`
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
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
        inLanguage: 'en',
      },
      {
        '@type': ['School', 'LocalBusiness', 'EducationalOrganization', 'Preschool'],
        '@id': `${SITE_URL}/#organization`,
        name: 'Montessori Minds',
        alternateName: ['La Casa Verde by Montessori Minds', 'La Casa Verde', 'Montessori Minds LB'],
        description:
          'Montessori school, pre-school, and nursery in Choueifat, Lebanon — nurturing independence, curiosity and confidence through authentic Montessori education.',
        url: `${SITE_URL}/`,
        logo: defaultSeo.image,
        image: defaultSeo.image,
        telephone: '+96171007150',
        email: contactPlaceholders.email,
        priceRange: '$$',
        openingHours: 'Mo-Fr 08:00-16:00',
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
        areaServed: [
          { '@type': 'City', name: 'Choueifat, Lebanon' },
          { '@type': 'City', name: 'Beirut, Lebanon' },
          { '@type': 'City', name: 'Baabda, Lebanon' },
          { '@type': 'AdministrativeArea', name: 'Mount Lebanon' },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Montessori programs',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'EducationalOccupationalProgram',
                name: 'Infant Community (Nido)',
                description: 'Montessori nursery for infants in Choueifat',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'EducationalOccupationalProgram',
                name: 'Toddler Community',
                description: 'Montessori toddler program in Choueifat',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'EducationalOccupationalProgram',
                name: "Children's House",
                description: 'Montessori pre-school for ages 3–6 in Choueifat',
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
    inLanguage: 'en',
  }
}
