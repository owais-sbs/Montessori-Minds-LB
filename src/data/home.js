import { ROUTES } from '../lib/routes'

export const homeHero = {
  eyebrow: 'La Casa Verde by Montessori Minds',
  title: 'Montessori School in Choueifat',
  titleLine2: 'Pre-School & Nursery',
  description:
    'Montessori Minds offers a nurturing Montessori learning environment for young children in Choueifat — hands-on discovery, independence, and early childhood care rooted in authentic Montessori education.',
  imageAlt: 'Children learning together at La Casa Verde by Montessori Minds in Choueifat',
  primaryButton: { label: 'Explore Our Programs', to: ROUTES.programs },
  secondaryButton: { label: 'Schedule A Tour', to: ROUTES.bookATour },
}

export const homePreparedEnvironment = {
  eyebrow: 'Environment',
  title: 'A Prepared Environment',
  description:
    'Our Montessori classrooms are designed with care. Everything has its place, and every material has a purpose — so children can move freely, choose their work, and learn at their own pace.',
  linkLabel: 'Discover Our Approach',
  linkTo: ROUTES.ourApproach,
  imageAlt:
    'Prepared Montessori classroom environment at Montessori Minds in Choueifat',
}

export const homePrograms = {
  eyebrow: 'Programs',
  title: 'Nursery & Pre-School Programs',
  description:
    'From infants to preschoolers, each Montessori pathway is designed around where your child is in their development.',
}

export const homePhilosophy = {
  eyebrow: 'Philosophy',
  title: 'Montessori Education at Montessori Minds',
  description:
    'We believe children are naturally curious and capable. Our role is to prepare the environment, observe carefully, and support independence, curiosity, and joyful early learning.',
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
    'Montessori education is about the whole child. We help children build not just academic foundations, but also the emotional and social skills they need to thrive.',
  imageAlt: 'Child building independence through Montessori practical life work',
}

export const homeGalleryPreview = {
  eyebrow: 'Gallery',
  title: 'Life at La Casa Verde',
  description:
    'A look inside our Montessori school classrooms, nature corners, and daily learning moments.',
  linkLabel: 'View Full Gallery',
  linkTo: ROUTES.gallery,
}

export const homeFinalCta = {
  eyebrow: 'Get Started',
  title: 'Begin Their Journey at Montessori Minds',
  description:
    'Ready to take the next step? Explore our Montessori nursery and pre-school pathways, start an application, or visit us in Choueifat.',
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
