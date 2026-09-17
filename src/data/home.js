import { ROUTES } from '../lib/routes'

export const homeHero = {
  eyebrow: 'La Casa Verde by Montessori Minds',
  title: 'Montessori School in Choueifat',
  titleLine2: 'Pre-School & Nursery',
  description:
    'Montessori Minds is a Montessori school in Choueifat, Lebanon, offering nurturing pre-school and nursery programs for young children — hands-on discovery, independence, and authentic early childhood education.',
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
    'We believe children are naturally curious and capable. Families across Lebanon — including those traveling from the greater Beirut and Baabda areas — visit our Choueifat campus for Montessori education rooted in observation, independence, and joyful early learning.',
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
    'Looking for a Montessori school near Choueifat? Explore our nursery and pre-school pathways, start an application, or book a tour of La Casa Verde by Montessori Minds.',
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
