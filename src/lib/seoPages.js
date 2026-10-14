export const SITE_URL = 'https://www.montessorimindslb.com'

/** Mapped titles/descriptions — one primary topic per page (SEO doc). */
export const defaultSeo = {
  title: 'Montessori School, Pre-School & Nursery | Montessori Minds',
  description:
    'Montessori school on Saida Old Road, Choueifat: Infant, Toddler and Children’s House (infancy–age 6). Mon–Fri 8:00 AM–4:00 PM. +961 71 007 150.',
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
    title: 'La Casa Verde by Montessori Minds | Lebanon',
    description:
      'About La Casa Verde by Montessori Minds in Choueifat: campus history, mission, Guides, and full address on Saida Old Road, Al Omara District.',
    path: '/la-casa-verde',
    image: defaultSeo.image,
    breadcrumb: 'La Casa Verde',
  },
  preschool: {
    title: 'Montessori Pre-School in Choueifat | Montessori Minds',
    description:
      'Children’s House Montessori pre-school for ages 3–6 in Choueifat: mixed-age classroom, work cycles and materials for practical life, language and maths.',
    path: '/preschool',
    image: `${SITE_URL}/images/programs/bloom.jpg`,
    breadcrumb: 'Pre-School',
  },
  nursery: {
    title: 'Montessori Nursery in Choueifat | Montessori Minds',
    description:
      'Montessori nursery in Choueifat for infants and toddlers: Nido (birth–18 months) and Toddler Community (18 months–3 years) on Saida Old Road.',
    path: '/nursery',
    image: `${SITE_URL}/images/programs/nest.jpg`,
    breadcrumb: 'Nursery',
  },
  ourApproach: {
    title: 'Montessori Education & Early Learning | Montessori Minds',
    description:
      'How Montessori works at Montessori Minds in Choueifat: prepared environments, Guides who observe, and materials for practical life, language and mathematics.',
    path: '/our-approach',
    image: `${SITE_URL}/images/classroom/approach.jpg`,
    breadcrumb: 'Our approach',
  },
  programs: {
    title: 'Montessori Programs for Every Stage | Montessori Minds',
    description:
      'Compare Infant Community, Toddler Community and Children’s House pathways at Montessori Minds in Choueifat — Montessori programs for infants through age six.',
    path: '/programs',
    image: `${SITE_URL}/images/programs/sprout.jpg`,
    breadcrumb: 'Programs',
  },
  faq: {
    title: 'FAQ | Montessori Minds Choueifat',
    description:
      'Answers about the Montessori method, age groups, hours, location, enrollment and programs at Montessori Minds in Choueifat, Lebanon.',
    path: '/faq',
    image: defaultSeo.image,
    breadcrumb: 'FAQ',
  },
  admission: {
    title: 'Parents & Admissions at Montessori Minds | Choueifat',
    description:
      'Parent resources, FAQs and the admissions journey at Montessori Minds — your path from discovery to welcome at our Choueifat nursery and pre-school.',
    path: '/admission',
    image: defaultSeo.image,
    breadcrumb: 'Admissions',
  },
  gallery: {
    title: 'Our Montessori Environment | Montessori Minds Choueifat',
    description:
      'Explore prepared classrooms, practical life, outdoor spaces and daily learning at Montessori Minds in Choueifat, Lebanon.',
    path: '/gallery',
    image: `${SITE_URL}/images/classroom/prepared-environment.jpg`,
    breadcrumb: 'Gallery',
  },
  bookATour: {
    title: 'Book a Visit | Montessori Minds Choueifat',
    description:
      'Schedule a tour of Montessori Minds in Choueifat. Meet our Guides and experience our Montessori nursery and pre-school environments in person.',
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
