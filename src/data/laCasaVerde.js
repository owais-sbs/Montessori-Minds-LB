import { images } from './images'
import { ROUTES } from '../lib/routes'

export const laCasaVerdePage = {
  hero: {
    eyebrow: 'Our School',
    title: 'La Casa Verde by Montessori Minds',
    description:
      'Montessori campus on Saida Old Road, Al Omara District, Choueifat — Infant, Toddler and Children’s House communities for ages infancy through six.',
    image: images.hero,
    imageAlt: 'Children learning at La Casa Verde by Montessori Minds in Choueifat',
  },
  sections: [
    {
      id: 'welcome',
      eyebrow: 'Welcome',
      title: 'An Early Learning Home in Choueifat',
      description:
        'La Casa Verde by Montessori Minds is our Montessori school community in Choueifat. Here, young children grow through hands-on learning, calm routines, and a prepared environment designed for real independence.',
      image: images.classroom,
      imageAlt: 'Montessori classroom at La Casa Verde by Montessori Minds',
      reverse: false,
      links: [
        { label: 'Explore our Montessori approach', to: ROUTES.ourApproach },
        { label: 'View programs', to: ROUTES.programs },
      ],
    },
    {
      id: 'montessori',
      eyebrow: 'Philosophy',
      title: 'Montessori Education at La Casa Verde',
      description:
        'At La Casa Verde Montessori, children lead their own discovery within clear, caring limits. Guides observe carefully, prepare purposeful materials, and step back so each child can build focus and confidence at their own pace.',
      image: images.approach,
      imageAlt: 'Teacher guiding children at La Casa Verde Montessori',
      reverse: true,
    },
    {
      id: 'programs',
      eyebrow: 'Programs',
      title: 'Nursery and Pre-School Pathways',
      description:
        'Families come to La Casa Verde Lebanon for early years care and learning that grows with the child — from our Montessori nursery pathways for infants and toddlers to Montessori pre-school for young children ready for deeper work.',
      image: images.preparedEnvironment,
      imageAlt: 'Prepared Montessori environment at La Casa Verde Choueifat',
      reverse: false,
      links: [
        { label: 'Montessori nursery details', to: ROUTES.nursery },
        { label: 'Montessori pre-school details', to: ROUTES.preschool },
      ],
    },
    {
      id: 'community',
      eyebrow: 'Community',
      title: 'La Casa Verde by Montessori Minds Choueifat',
      description:
        'Campus address: Saida Old Road, Al Omara District, Choueifat, Mount Lebanon. Parents often drive from Beirut or Baabda for a weekday morning visit. Phone +961 71 007 150 · hello@montessorimindslb.com.',
      image: images.nature,
      imageAlt: 'Nature corner at La Casa Verde Montessori Lebanon',
      reverse: true,
      links: [
        { label: 'Book a tour', to: ROUTES.bookATour },
        { label: 'Start an application', to: ROUTES.admission },
      ],
    },
  ],
  cta: {
    eyebrow: 'Visit',
    title: 'Come See La Casa Verde by Montessori Minds',
    description:
      'The best way to understand La Casa Verde by Montessori Minds is to walk through our classrooms and meet our guides.',
    buttonLabel: 'Book A Tour',
    buttonTo: ROUTES.bookATour,
  },
}
