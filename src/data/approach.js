import { images } from './images'

export const approachHero = {
  eyebrow: 'Our Approach',
  title: 'A Thoughtful Montessori Environment',
  description:
    'At La Casa Verde, we create a calm and intentional space where children develop independence, focus, and a genuine love of learning.',
  image: images.approach,
}

export const approachSections = [
  {
    id: 'montessori',
    eyebrow: 'Philosophy',
    title: 'Our Montessori Approach',
    description:
      'We follow the Montessori method, which means we honor each child as they are. We observe, we prepare the environment, and we trust the child to lead their own learning.',
    image: images.classroom,
    reverse: false,
  },
  {
    id: 'prepared-environment',
    eyebrow: 'Environment',
    title: 'Prepared Environment',
    description:
      'Every shelf, every material, every corner of our classroom is there for a reason. Children can see what is available, make their own choices, and work with focus.',
    image: images.preparedEnvironment,
    reverse: true,
  },
  {
    id: 'independence',
    eyebrow: 'Development',
    title: 'Independence',
    description:
      'From pouring their own water to getting dressed on their own, children here get real chances to care for themselves. That builds confidence that lasts.',
    image: images.independence,
    reverse: false,
  },
  {
    id: 'practical-life',
    eyebrow: 'Daily Living',
    title: 'Practical Life',
    description:
      'Cooking, cleaning, gardening. These are not chores here. They are how children learn coordination, focus, and what it means to be part of a community.',
    image: images.gallery.activity2,
    reverse: true,
  },
  {
    id: 'sensory',
    eyebrow: 'Exploration',
    title: 'Sensory Learning',
    description:
      'Through touch, sight, sound, and movement, children learn to observe, compare, and make sense of the world. This lays the groundwork for math, language, and science later on.',
    image: images.gallery.sensoryTiles,
    reverse: false,
  },
  {
    id: 'grace',
    eyebrow: 'Community',
    title: 'Grace & Courtesy',
    description:
      'Children learn how to greet each other, how to wait their turn, and how to solve disagreements with kindness. These are life skills as much as social skills.',
    image: images.gallery.emotions,
    reverse: true,
  },
  {
    id: 'nature',
    eyebrow: 'Outdoors',
    title: 'Nature & Outdoor Learning',
    description:
      'We spend time outside every day. Children watch the seasons change, care for plants, and connect with the natural world around them.',
    image: images.nature,
    reverse: false,
  },
  {
    id: 'teacher',
    eyebrow: 'Guidance',
    title: 'Role of the Teacher',
    description:
      'Our teachers observe, prepare, and guide gently. They know when to step in and when to step back, so the child can lead their own discovery.',
    image: images.approach,
    reverse: true,
  },
]

export const philosophyPoints = [
  {
    title: 'Independence',
    description: 'Children learn to do things for themselves through meaningful, hands-on work.',
  },
  {
    title: 'Respect',
    description: 'Every child is seen as a capable person with their own ideas and pace.',
  },
  {
    title: 'Concentration',
    description: 'Long, uninterrupted work time helps children find deep focus and satisfaction.',
  },
  {
    title: 'Practical Life',
    description: 'Real tasks like cooking and cleaning build coordination, order, and confidence.',
  },
  {
    title: 'Curiosity',
    description: 'We encourage questions, exploration, and the joy of figuring things out.',
  },
  {
    title: 'Purposeful Learning',
    description: 'Every activity in our classroom has a clear intention. Nothing is busywork.',
  },
]

export const developmentFocus = [
  {
    title: 'Confidence',
    description:
      'When children master everyday tasks, they discover what they are truly capable of.',
  },
  {
    title: 'Independence',
    description:
      'Freedom within clear limits lets children make choices, solve problems, and own their learning.',
  },
  {
    title: 'Concentration',
    description:
      'Extended time with focused work builds the kind of attention that helps children succeed later in school and life.',
  },
  {
    title: 'Social Development',
    description:
      'Our mixed-age classrooms create natural opportunities for older children to mentor younger ones, building empathy and community.',
  },
]
