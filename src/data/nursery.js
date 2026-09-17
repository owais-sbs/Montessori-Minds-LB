import { images } from './images'
import { ROUTES } from '../lib/routes'

export const nurseryPage = {
  hero: {
    eyebrow: 'Nursery',
    title: 'Montessori Nursery in Choueifat',
    description:
      'A nurturing Montessori nursery designed for infants and toddlers — early learning, exploration, care, and development at Montessori Minds in Choueifat.',
    image: images.programs.sprout,
    imageAlt: 'Toddler engaged in a Montessori nursery practical life activity',
  },
  sections: [
    {
      id: 'overview',
      eyebrow: 'Early Years',
      title: 'Nursery School with a Montessori Heart',
      description:
        'Our Montessori nursery in Choueifat welcomes the youngest learners into a calm, secure space. Closely observed care, gentle routines, and sensory-rich materials support early years growth for toddlers and infants alike.',
      image: images.programs.nest,
      imageAlt: 'Sensory Montessori materials used in our nursery for young children',
      reverse: false,
      links: [
        { label: 'See The Nest and The Sprout', to: ROUTES.programs },
        { label: 'Our Montessori philosophy', to: ROUTES.ourApproach },
      ],
    },
    {
      id: 'toddlers',
      eyebrow: 'Toddlers',
      title: 'Montessori for Toddlers',
      description:
        'Toddlers thrive when they can move, choose, and try for themselves. Our toddler Montessori program in Choueifat — a nursery for toddlers and young children — emphasizes practical life, language-rich moments, and respectful guidance. Families seeking nursery school in Choueifat or early years nursery options in Lebanon are welcome to visit.',
      image: images.independence,
      imageAlt: 'Toddler practicing independence in the Montessori nursery',
      reverse: true,
      links: [
        { label: 'Toddler & nursery programs', to: ROUTES.programs },
      ],
    },
    {
      id: 'care',
      eyebrow: 'Care',
      title: 'Exploration, Care, and Development',
      description:
        'Nursery school days balance rest, play, and hands-on discovery. Guides partner with families so each child feels known. For parents seeking nursery in Choueifat — or a Montessori nursery near Choueifat from nearby Beirut and Baabda communities — we offer early years care rooted in Montessori principles.',
      image: images.gallery.mealtime,
      imageAlt: 'Children sharing a calm mealtime in our Montessori nursery',
      reverse: false,
    },
    {
      id: 'pathway',
      eyebrow: 'Growing On',
      title: 'From Nursery to Pre-School',
      description:
        'As children grow, many continue into our Montessori pre-school pathway at the same Choueifat campus. La Casa Verde by Montessori Minds provides continuity from nursery through early childhood preschool learning.',
      image: images.approach,
      imageAlt: 'Guide supporting young learners at Montessori Minds nursery',
      reverse: true,
      links: [
        { label: 'Explore our Montessori Pre-School', to: ROUTES.preschool },
        { label: 'Explore La Casa Verde by Montessori Minds', to: ROUTES.laCasaVerde },
      ],
    },
  ],
  cta: {
    eyebrow: 'Visit',
    title: 'Tour Our Montessori Nursery',
    description:
      'Come see nursery life at Montessori Minds in Choueifat and learn how we support your child’s earliest years.',
    buttonLabel: 'Book A Tour',
    buttonTo: ROUTES.bookATour,
  },
}
