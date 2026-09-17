import { images } from './images'
import { ROUTES } from '../lib/routes'

export const preschoolPage = {
  hero: {
    eyebrow: 'Pre-School',
    title: 'Montessori Pre-School in Choueifat',
    description:
      'A Montessori pre-school experience at Montessori Minds for young children — hands-on learning, independence, and discovery in a calm prepared environment.',
    image: images.programs.bloom,
    imageAlt: 'Child focused on Montessori materials in our Choueifat pre-school classroom',
  },
  sections: [
    {
      id: 'overview',
      eyebrow: 'Early Childhood',
      title: 'Montessori Preschool for Young Children',
      description:
        'Our Montessori preschool in Choueifat supports early childhood development through purposeful work, mixed-age community, and child-led exploration. Children practice concentration, practical life skills, and social grace as they grow.',
      image: images.classroom,
      imageAlt: 'Children engaged in Montessori preschool activities in Choueifat',
      reverse: false,
      links: [
        { label: 'Meet The Bloom program', to: ROUTES.programs },
        { label: 'Learn our Montessori approach', to: ROUTES.ourApproach },
      ],
    },
    {
      id: 'exploration',
      eyebrow: 'Learning',
      title: 'Learning Through Exploration',
      description:
        'In Montessori pre-school, children choose meaningful work from carefully prepared shelves. Sensorial materials, language, mathematics beginnings, and cultural studies invite curiosity without pressure — a strong foundation for early childhood education in Lebanon.',
      image: images.gallery.learning1,
      imageAlt: 'Hands-on Montessori learning materials used in our pre-school',
      reverse: true,
    },
    {
      id: 'independence',
      eyebrow: 'Development',
      title: 'Supporting Independence',
      description:
        'Independence is practiced every day: pouring, preparing snacks, caring for the classroom, and collaborating with peers. This Montessori preschool approach helps young children build confidence they carry into later learning.',
      image: images.independence,
      imageAlt: 'Young child building independence through practical life work',
      reverse: false,
    },
    {
      id: 'environment',
      eyebrow: 'Environment',
      title: 'Our Pre-School Learning Environment',
      description:
        'Families looking for preschool in Choueifat — and parents searching for Montessori preschool near Choueifat from nearby communities such as Beirut and Baabda — find a nature-inspired classroom designed for movement, focus, and joy. La Casa Verde by Montessori Minds offers a Montessori early childhood program grounded in observation and respect.',
      image: images.preparedEnvironment,
      imageAlt: 'Prepared Montessori pre-school environment at Montessori Minds',
      reverse: true,
      links: [
        { label: 'La Casa Verde by Montessori Minds', to: ROUTES.laCasaVerde },
        { label: 'Explore our Montessori nursery', to: ROUTES.nursery },
      ],
    },
    {
      id: 'toddlers-preschool',
      eyebrow: 'Young Children',
      title: 'Montessori Preschool for Toddlers Growing Into Independence',
      description:
        'As toddlers mature into the pre-school years, they are ready for deeper concentration and collaborative work. Our Montessori preschool for young children builds on early childhood education in Lebanon with purposeful materials, mixed-age community, and calm daily rhythms.',
      image: images.gallery.learning2,
      imageAlt: 'Young children learning together in Montessori pre-school at Montessori Minds',
      reverse: false,
      links: [
        { label: 'Montessori Nursery in Choueifat', to: ROUTES.nursery },
        { label: 'View all programs', to: ROUTES.programs },
      ],
    },
  ],
  cta: {
    eyebrow: 'Next Step',
    title: 'Visit Our Montessori Pre-School',
    description:
      'Schedule a tour to see Montessori pre-school life in Choueifat and talk with our team about the right fit for your child.',
    buttonLabel: 'Book A Tour',
    buttonTo: ROUTES.bookATour,
  },
}
