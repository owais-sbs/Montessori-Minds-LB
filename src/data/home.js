import { ROUTES } from '../lib/routes'
import { images } from './images'

export const homeHero = {
  eyebrow: 'A Montessori Preschool in Lebanon',
  title: 'Rooted in Nature,',
  titleLine2: 'Growing in Independence.',
  description:
    'Welcome to La Casa Verde. A peaceful sanctuary for early learning and mindful growth, where children discover a passion for learning and a joy for newly found independence.',
  imageAlt: 'Children learning at La Casa Verde Montessori preschool',
  primaryButton: { label: 'Explore Our Programs', to: ROUTES.programs },
  secondaryButton: { label: 'Schedule A Tour', to: ROUTES.bookATour },
}

export const homePreparedEnvironment = {
  eyebrow: 'Environment',
  title: 'A Prepared Environment',
  description:
    'Inspired by Montessori principles, our classroom is thoughtfully designed to nurture independence, concentration, and a deep love for learning. Every detail is created with your child\u2019s growth and well-being in mind.',
  linkLabel: 'Discover Our Approach',
  linkTo: ROUTES.ourApproach,
  imageAlt:
    'Montessori prepared classroom with wooden shelves and learning materials',
}

export const homePrograms = {
  eyebrow: 'Programs',
  title: 'Our Programs',
  description:
    'Three thoughtfully designed programs, each honoring the unique developmental stage of your child.',
}

export const homePhilosophy = {
  eyebrow: 'Philosophy',
  title: 'Our Montessori Approach',
  description:
    "At La Casa Verde, we believe every child carries within them the potential for purposeful, joyful learning. Our role is to prepare an environment that nurtures that innate drive — with respect, patience, and deep trust in the child's own timeline.",
}

export const homeNature = {
  eyebrow: 'Outdoors',
  title: 'Learning Through Nature',
  description:
    'Children learn through movement, observation, exploration and meaningful interaction with the world around them.',
}

export const homeIndependence = {
  eyebrow: 'Development',
  title: 'Nurturing Independence & Confidence',
  description:
    'Montessori education supports the whole child — cultivating not only academic readiness, but the emotional and social foundations for a life of purpose and self-assurance.',
  imageAlt: 'Child developing independence through purposeful activity',
}

export const homeGalleryPreview = {
  eyebrow: 'Gallery',
  title: 'Life at La Casa Verde',
  description:
    'A glimpse into the calm, purposeful beauty of our classrooms and outdoor spaces.',
  linkLabel: 'View Full Gallery',
  linkTo: ROUTES.gallery,
}

export const homeFinalCta = {
  eyebrow: 'Get Started',
  title: 'Begin Their Journey at La Casa Verde',
  description:
    'Take the first step toward enrollment or schedule a visit to experience our calm, prepared environment firsthand.',
  primaryButton: {
    label: 'Start An Application',
    to: ROUTES.admission,
  },
  secondaryButton: {
    label: 'Book A Tour',
    to: ROUTES.bookATour,
  },
}

export const homeAdmissionCta = {
  eyebrow: 'Admissions',
  title: 'Begin Their Journey',
  description:
    'Take the first step toward enrollment. We welcome families who share our vision of respectful, nature-inspired early education.',
  buttonLabel: 'Start An Application',
  buttonTo: ROUTES.admission,
}

export const homeBookTourCta = {
  eyebrow: 'Visit Us',
  title: 'Come Visit La Casa Verde',
  description:
    'Experience our prepared environment firsthand. Schedule a personal tour and discover what makes our community special.',
  buttonLabel: 'Book A Tour',
  buttonTo: ROUTES.bookATour,
}
