import { images } from './images'

export const programs = [
  {
    id: 'nest',
    slug: 'the-nest',
    name: 'The Nest',
    ageRange: 'Infants (0-18 months)',
    shortDescription: 'A gentle start for our youngest learners.',
    description:
      'In The Nest, infants are welcomed into a warm Montessori nursery space designed for exploration and connection. We follow their natural rhythm of play, rest, and discovery.',
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
      'The Sprout is our Montessori toddler pathway — built around movement, exploration, and growing independence. Every day brings new chances for toddlers to try things on their own.',
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
      'The Bloom is our Montessori pre-school classroom, where children dive deeper into Montessori materials, collaborate on projects, and build the confidence and focus they will carry forward.',
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
    title: 'Montessori Programs for Every Stage',
    description:
      'From Montessori nursery pathways for infants and toddlers to Montessori pre-school for ages 3–6, each program at La Casa Verde by Montessori Minds is built around your child’s development.',
    imageAlt: 'Montessori classroom overview at Montessori Minds in Choueifat',
  },
  admissionCta: {
    eyebrow: 'Admissions',
    title: 'Ready to Enroll?',
    description:
      'Start your application or schedule a visit to learn more about our nursery and pre-school programs.',
    buttonLabel: 'Start An Application',
  },
  tourCta: {
    eyebrow: 'Visit',
    title: 'See Our Programs in Person',
    description: 'A tour is the best way to experience Montessori education at Montessori Minds in Choueifat.',
    buttonLabel: 'Book A Tour',
  },
}
