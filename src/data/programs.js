import { images } from './images'

export const programs = [
  {
    id: 'nest',
    slug: 'the-nest',
    name: 'The Nest',
    ageRange: 'Infants (0-18 months)',
    shortDescription: 'A gentle start for our youngest learners.',
    description:
      'In The Nest, infants are welcomed into a warm, safe space designed for exploration and connection. We follow their natural rhythm of play, rest, and discovery.',
    image: images.programs.nest,
    icon: 'nest',
    features: [
      'A safe, nurturing space for infants',
      'Sensory exploration at their own pace',
      'Individualized care and close observation',
      'Calm, comfortable spaces for rest',
    ],
  },
  {
    id: 'sprout',
    slug: 'the-sprout',
    name: 'The Sprout',
    ageRange: 'Toddlers (18 months - 3 years)',
    shortDescription: 'Exploring, moving, and growing with joy.',
    description:
      'The Sprout program is built around what toddlers do best: move, explore, and test their independence. Every day brings new chances to try things on their own.',
    image: images.programs.sprout,
    icon: 'sprout',
    features: [
      'Lots of movement and hands-on activities',
      'Building independence through daily routines',
      'Spaces designed for active exploration',
      'Child-led discovery and play',
    ],
  },
  {
    id: 'bloom',
    slug: 'the-bloom',
    name: 'The Bloom',
    ageRange: 'Preschool (3-6 years)',
    shortDescription: 'Getting ready to take on the world.',
    description:
      'The Bloom classroom is where children dive deeper into Montessori materials, work together on projects, and build the confidence and focus they will carry forward.',
    image: images.programs.bloom,
    icon: 'bloom',
    features: [
      'Montessori materials and mixed-age groups',
      'Deep focus and collaborative projects',
      'Academic readiness through hands-on work',
      'Building confidence and social skills',
    ],
  },
]

export const programOptions = programs.map(({ id, name }) => ({
  value: id,
  label: name,
}))

export const programsPage = {
  hero: {
    eyebrow: 'Programs',
    title: 'Programs for Every Stage',
    description:
      'From infancy through preschool, each program is built around your child at their stage of growth.',
    imageAlt: 'La Casa Verde classroom overview',
  },
  admissionCta: {
    eyebrow: 'Admissions',
    title: 'Ready to Enroll?',
    description:
      'Start your application or schedule a visit to learn more about our programs.',
    buttonLabel: 'Start An Application',
  },
  tourCta: {
    eyebrow: 'Visit',
    title: 'See Our Programs in Person',
    description: 'A tour is the best way to see what makes La Casa Verde different.',
    buttonLabel: 'Book A Tour',
  },
}
