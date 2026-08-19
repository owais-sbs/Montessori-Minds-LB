import { images } from './images'

export const approachHero = {
  eyebrow: 'Our Approach',
  title: 'A Thoughtful Montessori Environment',
  description:
    'At Montessori Minds LB, we create a calm, intentional space where children develop independence, concentration, and a lifelong love of learning.',
  image: images.approach,
}

export const approachSections = [
  {
    id: 'montessori',
    eyebrow: 'Philosophy',
    title: 'Our Montessori Approach',
    description:
      'We follow the Montessori method — honoring each child\'s natural development through respect, observation, and a carefully prepared environment that invites purposeful work.',
    image: images.classroom,
    reverse: false,
  },
  {
    id: 'prepared-environment',
    eyebrow: 'Environment',
    title: 'Prepared Environment',
    description:
      'Every shelf, material, and corner of our classrooms is intentionally designed. Beauty, order, and accessibility allow children to choose meaningful work and develop deep concentration.',
    image: images.preparedEnvironment,
    reverse: true,
  },
  {
    id: 'independence',
    eyebrow: 'Development',
    title: 'Independence',
    description:
      'From pouring water to dressing themselves, children are given real opportunities to care for themselves and their environment — building confidence that lasts a lifetime.',
    image: images.independence,
    reverse: false,
  },
  {
    id: 'practical-life',
    eyebrow: 'Daily Living',
    title: 'Practical Life',
    description:
      'Everyday activities — food preparation, cleaning, gardening — are not chores but pathways to coordination, focus, and a sense of belonging within the community.',
    image: images.gallery.activity1,
    reverse: true,
  },
  {
    id: 'sensory',
    eyebrow: 'Exploration',
    title: 'Sensory Learning',
    description:
      'Rich sensory experiences refine the child\'s ability to classify, compare, and understand the world — laying the foundation for mathematics, language, and scientific thinking.',
    image: images.gallery.learning1,
    reverse: false,
  },
  {
    id: 'grace',
    eyebrow: 'Community',
    title: 'Grace & Courtesy',
    description:
      'Children learn to navigate social life with kindness — greeting one another, resolving conflicts peacefully, and treating their environment and peers with respect.',
    image: images.gallery.activity2,
    reverse: true,
  },
  {
    id: 'nature',
    eyebrow: 'Outdoors',
    title: 'Nature & Outdoor Learning',
    description:
      'Time outdoors is essential. Children observe seasons, care for plants, and connect with the natural world — deepening their sense of wonder and responsibility.',
    image: images.nature,
    reverse: false,
  },
  {
    id: 'teacher',
    eyebrow: 'Guidance',
    title: 'Role of the Teacher',
    description:
      'Our guides observe, prepare the environment, and offer gentle support — stepping back to allow the child\'s own intelligence and curiosity to lead the way.',
    image: images.gallery.classroom2,
    reverse: true,
  },
]

export const philosophyPoints = [
  {
    title: 'Independence',
    description: 'Children develop self-reliance through meaningful, age-appropriate work.',
  },
  {
    title: 'Respect',
    description: 'Every child is honored as a capable, unique individual.',
  },
  {
    title: 'Concentration',
    description: 'Uninterrupted work cycles nurture deep focus and satisfaction.',
  },
  {
    title: 'Practical Life',
    description: 'Real-world skills build coordination, order, and confidence.',
  },
  {
    title: 'Curiosity',
    description: 'Wonder is cultivated through exploration and discovery.',
  },
  {
    title: 'Purposeful Learning',
    description: 'Every activity has intention — nothing is busy work.',
  },
]

export const developmentFocus = [
  {
    title: 'Confidence',
    description:
      'Through mastery of everyday tasks, children discover their own capability and inner strength.',
  },
  {
    title: 'Independence',
    description:
      'Freedom within limits empowers children to make choices, solve problems, and take ownership of their learning.',
  },
  {
    title: 'Concentration',
    description:
      'Extended periods of focused work build the mental discipline essential for future academic success.',
  },
  {
    title: 'Social Development',
    description:
      'Mixed-age classrooms foster mentorship, empathy, and a natural sense of community.',
  },
]
