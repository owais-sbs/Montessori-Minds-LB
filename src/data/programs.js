import { images } from './images'

export const programs = [
  {
    id: 'nest',
    slug: 'the-nest',
    name: 'The Nest',
    ageRange: 'Infants (0m–18m)',
    shortDescription: 'A gentle start for our littlest learners.',
    description:
      'In The Nest, infants are welcomed into a serene, nurturing environment designed to support secure attachment, sensory exploration, and natural rhythms of rest and discovery.',
    image: images.programs.nest,
    icon: 'nest',
    features: [
      'Secure, nurturing infant environment',
      'Sensory exploration and natural rhythms',
      'Individualized care and observation',
      'Calm spaces for rest and discovery',
    ],
  },
  {
    id: 'sprout',
    slug: 'the-sprout',
    name: 'The Sprout',
    ageRange: 'Toddlers (18m–3y)',
    shortDescription: 'Exploring, moving, growing with joy.',
    description:
      "The Sprout program honors the toddler's drive for independence through purposeful movement, language-rich interactions, and carefully prepared spaces that invite exploration.",
    image: images.programs.sprout,
    icon: 'sprout',
    features: [
      'Purposeful movement and language development',
      'Independence through daily routines',
      'Prepared spaces for active exploration',
      'Joyful, child-led discovery',
    ],
  },
  {
    id: 'bloom',
    slug: 'the-bloom',
    name: 'The Bloom',
    ageRange: 'Preschool (3–6y)',
    shortDescription: 'Preparing to fly towards a bright future.',
    description:
      'The Bloom classroom supports the developing mind through Montessori materials, collaborative learning, and opportunities to build confidence, concentration, and grace.',
    image: images.programs.bloom,
    icon: 'bloom',
    features: [
      'Montessori materials and mixed-age learning',
      'Deep concentration and collaborative work',
      'Academic readiness through purposeful activity',
      'Confidence, grace, and social development',
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
    title: 'Programs Designed for Every Stage',
    description:
      "From infancy through preschool, each program honors the child's natural development with a calm, prepared environment.",
    imageAlt: 'La Casa Verde classroom overview',
  },
  admissionCta: {
    eyebrow: 'Admissions',
    title: 'Ready to Enroll?',
    description:
      'Begin the application process or schedule a visit to learn more about our programs.',
    buttonLabel: 'Start An Application',
  },
  tourCta: {
    eyebrow: 'Visit',
    title: 'See Our Programs in Person',
    description: 'A tour is the best way to experience the La Casa Verde difference.',
    buttonLabel: 'Book A Tour',
  },
}
