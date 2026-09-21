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
          'Montessori school, pre-school, and nursery in Choueifat, Lebanon — nurturing independence, curiosity and confidence through authentic Montessori education.',
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
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'EducationalOccupationalProgram',
                name: 'The Sprout — Toddler Community',
                description: 'Montessori toddler nursery program in Choueifat',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'EducationalOccupationalProgram',
                name: "The Bloom — Children's House",
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
    inLanguage: 'en-LB',
  }
}
