export const SITE_URL = 'https://www.montessorimindslb.com'

/** Mapped titles/descriptions — one primary topic per page (SEO / AEO plan). */
export const defaultSeo = {
  title: 'Montessori Preschool in Choueifat, Lebanon | La Casa Verde',
  description:
    'La Casa Verde by Montessori Minds — Montessori preschool, nursery and school on Saida Old Road, Choueifat. Infant to Children’s House (infancy–age 6). Mon–Fri 8:00 AM–4:00 PM. +961 71 007 150.',
  image: `${SITE_URL}/images/hero/hero.jpg`,
  logo: `${SITE_URL}/images/branding/La%20casa%20verde%20logo2.png`,
}

export const pageSeo = {
  home: {
    title: defaultSeo.title,
    description: defaultSeo.description,
    path: '/',
    image: defaultSeo.image,
    breadcrumb: 'Home',
  },
  laCasaVerde: {
    title: 'La Casa Verde by Montessori Minds | Choueifat, Lebanon',
    description:
      'About La Casa Verde by Montessori Minds in Choueifat: campus history, mission, Guides, and full address on Saida Old Road, Al Omara District.',
    path: '/la-casa-verde',
    image: defaultSeo.image,
    breadcrumb: 'La Casa Verde',
  },
  preschool: {
    title: 'Montessori Pre-School in Choueifat, Lebanon | La Casa Verde',
    description:
      'Children’s House Montessori pre-school for ages 3–6 in Choueifat: mixed-age classroom, work cycles and materials for practical life, language and maths.',
    path: '/preschool',
    image: `${SITE_URL}/images/programs/bloom.jpg`,
    breadcrumb: 'Pre-School',
  },
  nursery: {
    title: 'Montessori Nursery in Choueifat, Lebanon | La Casa Verde',
    description:
      'Montessori nursery in Choueifat for infants and toddlers: Nido (birth–18 months) and Toddler Community (18 months–3 years) on Saida Old Road.',
    path: '/nursery',
    image: `${SITE_URL}/images/programs/nest.jpg`,
    breadcrumb: 'Nursery',
  },
  ourApproach: {
    title: 'Montessori Education & Early Learning | La Casa Verde',
    description:
      'How Montessori works at La Casa Verde by Montessori Minds in Choueifat: prepared environments, Guides who observe, and materials for practical life, language and mathematics.',
    path: '/our-approach',
    image: `${SITE_URL}/images/classroom/approach.jpg`,
    breadcrumb: 'Our approach',
  },
  programs: {
    title: 'Montessori Programs for Infants, Toddlers & Preschoolers',
    description:
      'Compare Infant Community, Toddler Community and Children’s House pathways at La Casa Verde by Montessori Minds in Choueifat — programs for infants through age six.',
    path: '/programs',
    image: `${SITE_URL}/images/programs/sprout.jpg`,
    breadcrumb: 'Programs',
  },
  faq: {
    title: 'Montessori Nursery & Preschool FAQs | La Casa Verde',
    description:
      'Answers about the Montessori method, age groups, hours, location, enrollment and programs at La Casa Verde by Montessori Minds in Choueifat, Lebanon.',
    path: '/faq',
    image: defaultSeo.image,
    breadcrumb: 'FAQ',
  },
  admission: {
    title: 'Montessori School Admissions in Choueifat | La Casa Verde',
    description:
      'Parent resources, FAQs and the admissions journey at La Casa Verde by Montessori Minds — from discovery to welcome at our Choueifat nursery and pre-school.',
    path: '/admission',
    image: defaultSeo.image,
    breadcrumb: 'Admissions',
  },
  gallery: {
    title: 'Our Montessori Environment | La Casa Verde Choueifat',
    description:
      'Explore prepared classrooms, practical life, outdoor spaces and daily learning at La Casa Verde by Montessori Minds in Choueifat, Lebanon.',
    path: '/gallery',
    image: `${SITE_URL}/images/classroom/prepared-environment.jpg`,
    breadcrumb: 'Gallery',
  },
  bookATour: {
    title: 'Book a Montessori School Visit in Choueifat | La Casa Verde',
    description:
      'Schedule a tour of La Casa Verde by Montessori Minds in Choueifat. Meet Guides and see nursery and pre-school classrooms in person.',
    path: '/book-a-tour',
    image: defaultSeo.image,
    breadcrumb: 'Book a visit',
  },
}

/** Static HTML prerender — head fields only (no React imports). */
export const ALL_PAGE_SEO = Object.values(pageSeo).map(({ title, description, path, image }) => ({
  title,
  description,
  path,
  image,
}))

export function absoluteUrl(path = '/') {
  if (!path || path === '/') return `${SITE_URL}/`
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}
