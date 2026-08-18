import { ROUTES } from '../lib/routes'
import { images } from './images'

export const homeHero = {
  eyebrow: 'A Montessori Preschool',
  title: 'Rooted in Nature,',
  titleLine2: 'Growing in Independence.',
  description:
    'Welcome to Montessori Minds. A peaceful sanctuary for early learning and mindful growth.',
  imageAlt: 'Child engaged in Montessori learning at Montessori Minds',
  primaryButton: { label: 'Explore Our Programs', to: ROUTES.programs },
  secondaryButton: { label: 'Schedule A Visit', to: ROUTES.bookATour },
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
  title: 'Montessori Philosophy',
  description:
    "At Montessori Minds, we believe every child carries within them the potential for purposeful, joyful learning. Our role is to prepare an environment that nurtures that innate drive — with respect, patience, and deep trust in the child's own timeline.",
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
  title: 'Moments at Montessori Minds',
  description:
    'A glimpse into the calm, purposeful beauty of our classrooms and outdoor spaces.',
  linkLabel: 'View Full Gallery',
  linkTo: ROUTES.gallery,
}

export const homeFinalCta = {
  eyebrow: 'Get Started',
  title: 'Begin Their Journey at Montessori Minds',
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
  title: 'Come See Montessori Minds',
  description:
    'Experience our prepared environment firsthand. Schedule a personal tour and discover what makes our community special.',
  buttonLabel: 'Book A Tour',
  buttonTo: ROUTES.bookATour,
}
