import { ROUTES } from '../lib/routes'
import { images } from './images'

export const homeHero = {
  eyebrow: 'By Montessori Minds · Choueifat, Lebanon',
  title: 'La Casa Verde',
  titleLine2: 'Montessori Preschool in Choueifat',
  description:
    'Rooted in nature, growing in independence. A Montessori preschool where children discover the joy of learning and the confidence that comes from doing things on their own.',
  imageAlt: 'Two children in La Casa Verde uniforms reading together in the Montessori classroom',
  primaryButton: { label: 'Explore Our Programs', to: ROUTES.programs },
  secondaryButton: { label: 'Schedule A Tour', to: ROUTES.bookATour },
}

export const homePreparedEnvironment = {
  eyebrow: 'Environment',
  title: 'A Prepared Environment',
  description:
    'Our classroom is designed with care. Everything has its place, and every material has a purpose. Children can move freely, choose their own work, and learn at their own pace.',
  linkLabel: 'Discover Our Approach',
  linkTo: ROUTES.ourApproach,
  imageAlt:
    'Children working independently with Montessori materials in a prepared classroom',
}

export const homePrograms = {
  eyebrow: 'Programs',
  title: 'Our Programs',
  description:
    'We offer three programs, each one designed around where your child is in their development.',
}

export const homePhilosophy = {
  eyebrow: 'Philosophy',
  title: 'Our Montessori Approach',
  description:
    "At La Casa Verde, we believe children are naturally curious and capable. Our job is to create the right environment and then step back, letting each child learn and grow at their own pace.",
}

export const homeNature = {
  eyebrow: 'Outdoors',
  title: 'Learning Through Nature',
  description:
    'Children learn best when they can move, explore, and connect with the world around them. Nature is one of our greatest teachers.',
}

export const homeIndependence = {
  eyebrow: 'Development',
  title: 'Nurturing Independence & Confidence',
  description:
    'Montessori education is about the whole child. We help children build not just academic skills, but also the emotional and social foundations they need to thrive.',
  imageAlt: 'Child pouring water between pitchers during a Montessori practical life activity',
}

export const homeGalleryPreview = {
  eyebrow: 'Gallery',
  title: 'Life at La Casa Verde',
  description:
    'A look inside our classrooms, nature corners, and daily learning moments.',
  linkLabel: 'View Full Gallery',
  linkTo: ROUTES.gallery,
}

export const homeFinalCta = {
  eyebrow: 'Get Started',
  title: 'Begin Their Journey at La Casa Verde',
  description:
    'Ready to take the next step? Start an application or come see our school in person.',
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
    'We welcome families who share our love for respectful, nature-based early education. Start your application today.',
  buttonLabel: 'Start An Application',
  buttonTo: ROUTES.admission,
}

export const homeBookTourCta = {
  eyebrow: 'Visit Us',
  title: 'Come Visit La Casa Verde',
  description:
    'The best way to understand what we do is to see it. Schedule a tour and spend some time in our classrooms.',
  buttonLabel: 'Book A Tour',
  buttonTo: ROUTES.bookATour,
}
