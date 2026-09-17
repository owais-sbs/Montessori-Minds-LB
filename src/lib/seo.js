export const SITE_URL = 'https://www.montessorimindslb.com'

export const defaultSeo = {
  title: 'Montessori School, Pre-School & Nursery | Montessori Minds',
  description:
    'Montessori Minds offers a nurturing Montessori learning environment for young children, with pre-school and nursery programs in Choueifat.',
  image: `${SITE_URL}/images/branding/La%20casa%20verde%20logo2.png`,
}

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
      'Learn about Montessori Minds, our Montessori approach, early learning environment, and commitment to supporting children\'s independence, curiosity and development.',
    path: '/our-approach',
  },
  programs: {
    title: 'Montessori Programs for Infants, Toddlers & Preschool | Montessori Minds',
    description:
      'Explore The Nest, The Sprout, and The Bloom — Montessori nursery and pre-school programs for ages 0–6 at La Casa Verde by Montessori Minds in Choueifat.',
    path: '/programs',
  },
  admission: {
    title: 'Admissions | Montessori Minds in Choueifat',
    description:
      'Start your application to La Casa Verde by Montessori Minds in Choueifat. Enroll in our Montessori nursery or pre-school programs.',
    path: '/admission',
  },
  gallery: {
    title: 'Gallery | Life at La Casa Verde by Montessori Minds',
    description:
      'See classrooms, nature corners, and daily learning at La Casa Verde by Montessori Minds — Montessori school life in Choueifat, Lebanon.',
    path: '/gallery',
  },
  bookATour: {
    title: 'Book a Tour | Visit Montessori Minds in Choueifat',
    description:
      'Schedule a school tour of La Casa Verde by Montessori Minds in Choueifat. See our Montessori nursery and pre-school classrooms in person.',
    path: '/book-a-tour',
  },
}

export function absoluteUrl(path = '/') {
  if (!path || path === '/') return `${SITE_URL}/`
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}
