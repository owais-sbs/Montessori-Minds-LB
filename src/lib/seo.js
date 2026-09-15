export const SITE_URL = 'https://www.montessorimindslb.com'

export const defaultSeo = {
  title: 'La Casa Verde | Montessori Preschool in Choueifat, Lebanon',
  description:
    'La Casa Verde — nature-inspired Montessori preschool in Choueifat, Lebanon. Authentic early education for infants, toddlers & preschoolers.',
  image: `${SITE_URL}/images/branding/La%20casa%20verde%20logo2.png`,
}

export const pageSeo = {
  home: {
    title: defaultSeo.title,
    description: defaultSeo.description,
    path: '/',
  },
  ourApproach: {
    title: 'Our Montessori Approach | La Casa Verde Choueifat',
    description:
      'Discover how La Casa Verde nurtures independence, focus, and love of learning through authentic Montessori practice in Choueifat, Lebanon.',
    path: '/our-approach',
  },
  programs: {
    title: 'Montessori Programs for Ages 0–6 | La Casa Verde',
    description:
      'Explore The Nest, The Sprout, and The Bloom — Montessori programs for infants, toddlers, and preschoolers at La Casa Verde in Choueifat.',
    path: '/programs',
  },
  admission: {
    title: 'Admissions | Apply to La Casa Verde Montessori',
    description:
      'Start your application to La Casa Verde, a nature-inspired Montessori preschool in Choueifat, Lebanon. Begin your child’s enrollment today.',
    path: '/admission',
  },
  gallery: {
    title: 'Gallery | Life at La Casa Verde Montessori Preschool',
    description:
      'See classrooms, outdoor learning, and daily life at La Casa Verde — a Montessori preschool in Choueifat, Lebanon.',
    path: '/gallery',
  },
  bookATour: {
    title: 'Book a Tour | Visit La Casa Verde in Choueifat',
    description:
      'Schedule a school tour at La Casa Verde in Choueifat, Lebanon. See our Montessori classrooms and meet our guides in person.',
    path: '/book-a-tour',
  },
}

export function absoluteUrl(path = '/') {
  if (!path || path === '/') return `${SITE_URL}/`
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}
