export const SITE_URL = 'https://www.montessorimindslb.com'

/** Mapped titles/descriptions — one primary topic per page (SEO doc). */
export const defaultSeo = {
  title: 'Montessori School, Pre-School & Nursery | Montessori Minds',
  description:
    'Montessori Minds offers a nurturing Montessori learning environment for young children, with pre-school and nursery programs in Choueifat.',
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
      'Discover La Casa Verde by Montessori Minds, a nurturing early learning environment focused on Montessori-inspired education, development and discovery.',
    path: '/la-casa-verde',
    image: defaultSeo.image,
    breadcrumb: 'La Casa Verde',
  },
  preschool: {
    title: 'Montessori Pre-School in Choueifat | Montessori Minds',
    description:
      'Explore Montessori pre-school at Montessori Minds in Choueifat, supporting young children through hands-on learning, independence and discovery.',
    path: '/preschool',
    image: `${SITE_URL}/images/programs/bloom.jpg`,
    breadcrumb: 'Pre-School',
  },
  nursery: {
    title: 'Montessori Nursery in Choueifat | Montessori Minds',
    description:
      'Discover a nurturing Montessori nursery in Choueifat designed to support young children through early learning, exploration, care and development.',
    path: '/nursery',
    image: `${SITE_URL}/images/programs/nest.jpg`,
    breadcrumb: 'Nursery',
  },
  ourApproach: {
    title: 'Montessori Education & Early Learning | Montessori Minds',
    description:
      "Learn about Montessori Minds, our Montessori approach, early learning environment, and commitment to supporting children's independence, curiosity and development.",
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
