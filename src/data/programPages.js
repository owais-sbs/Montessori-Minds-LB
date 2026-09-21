import { images } from './images'

const typicalDay = [
  { time: 'Good morning', detail: 'Warm arrival and connection.' },
  { time: 'Work cycle', detail: 'Purposeful independent or small-group work.' },
  { time: 'Practical life', detail: 'Pouring, preparing and caring for the environment.' },
  { time: 'Language', detail: 'Conversation, vocabulary and discovery.' },
  { time: 'Outdoors', detail: 'Movement, nature and observation.' },
  { time: 'Home', detail: 'A calm end to the day with families.' },
]

const defaultFaqs = [
  { id: 'nap', title: 'Nap and rest', body: 'Rest is adapted to developmental needs — we will confirm exact practice on your visit.' },
  { id: 'meals', title: 'Meals', body: 'Community meals support independence and care — details shared during admissions.' },
  { id: 'separation', title: 'Separation', body: 'We partner with families on a gradual settling-in process.' },
  { id: 'languages', title: 'Languages', body: 'We describe only the language model we actually deliver.' },
]

const nurseryFaqs = [
  {
    id: 'area',
    title: 'Do you serve families outside Choueifat?',
    body: 'Many families join us from Choueifat, Beirut, Baabda and surrounding areas in Mount Lebanon. Visit us to see if the commute works for your family.',
  },
  {
    id: 'montessori-nursery',
    title: 'What makes this a Montessori nursery?',
    body: 'Respectful care, prepared spaces and freedom to move and explore — with Guides who observe closely rather than rushing development.',
  },
  ...defaultFaqs.slice(0, 3),
]

const preschoolFaqs = [
  {
    id: 'preschool-beirut',
    title: 'Is this a good fit if we live in Beirut?',
    body: 'Families often visit from Beirut and Mount Lebanon for our Children’s House program. A tour is the best way to judge distance and daily rhythm.',
  },
  {
    id: 'preschool-spelling',
    title: 'Preschool vs pre-school — is it the same program?',
    body: 'Yes — we use both terms naturally. Our Montessori pre-school / preschool classroom serves children roughly three to six years.',
  },
  ...defaultFaqs,
]

export const infantProgramPage = {
  hero: {
    eyebrow: 'Infant Community · Nido',
    ageRange: 'Birth – 18 months',
    title: 'The beginning of discovery.',
    titleAccent: 'Gentle, unhurried beginnings.',
    description: 'A warm Montessori space for our youngest learners — observation, connection and sensory exploration at their own pace.',
    image: images.programs.nest,
    imageAlt: 'Infant Montessori nursery room at Montessori Minds in Choueifat',
  },
  understanding: {
    title: 'A time for trust and connection',
    body: 'Infants learn through secure relationships, movement and rich sensory experience. We follow their natural rhythms of rest, exploration and care.',
  },
  inside: {
    title: 'Inside the Nido',
    items: [
      'Individualized care and close observation',
      'Sensory exploration in a calm environment',
      'Freedom to move safely',
      'Language through conversation and song',
      'Outdoor fresh air when appropriate',
    ],
  },
  developing: [
    { title: 'Physical', description: 'Movement, grasping and growing body awareness.' },
    { title: 'Emotional', description: 'Secure attachment and trust in caregivers.' },
    { title: 'Language', description: 'Rich spoken language and responsive communication.' },
  ],
  typicalDay,
  gallery: [images.programs.nest, images.gallery.classroom-1, images.gallery.mealtime],
  faqs: nurseryFaqs,
  ctaDescription: 'See the Infant Community and meet our Guides.',
}

export const toddlerProgramPage = {
  hero: {
    eyebrow: 'Toddler Community',
    ageRange: '18 months – 3 years',
    title: 'The age of “I can do it.”',
    titleAccent: 'Independence with joy.',
    description:
      'Our Montessori toddler program in Choueifat supports the wonderful age of “I can do it” — a Montessori for toddlers pathway families from Beirut and Mount Lebanon often visit when comparing nursery options.',
    image: images.programs.sprout,
    imageAlt: 'Toddler Montessori program at Montessori Minds in Choueifat',
  },
  understanding: {
    title: 'Not difficult — discovering',
    body: 'Toddlers need movement, repetition and real tasks. Montessori meets that need with respect instead of constant correction.',
  },
  inside: {
    title: 'Inside their world',
    items: [
      'Practical life — pouring, dressing, cleaning',
      'Language through conversation and vocabulary',
      'Sensorial exploration',
      'Outdoor movement and play',
      'Grace, courtesy and community',
    ],
  },
  developing: [
    { title: 'Independence', description: 'Everyday tasks build confidence and coordination.' },
    { title: 'Language', description: 'Explosion of words, stories and expression.' },
    { title: 'Social', description: 'Learning to be part of a small community.' },
  ],
  typicalDay,
  gallery: [images.programs.sprout, images.gallery.activity-2, images.gallery.outdoor-2],
  faqs: nurseryFaqs,
  ctaDescription: 'Walk through the Toddler Community with us.',
}

export const childrensHouseProgramPage = {
  hero: {
    eyebrow: "Children's House",
    ageRange: '3 – 6 years',
    title: 'Where curiosity becomes capability.',
    titleAccent: 'Deep work, real joy.',
    description:
      'Mixed-age Montessori preschool and pre-school in Choueifat — hands-on materials, long work cycles and confidence for ages three to six.',
    image: images.programs.bloom,
    imageAlt: 'Montessori preschool classroom at Montessori Minds in Choueifat',
  },
  understanding: {
    title: 'The plane of conscious learning',
    body: 'Children this age crave meaningful work, order and community. The prepared environment lets them choose, concentrate and grow.',
  },
  inside: {
    title: 'Inside the classroom',
    items: [
      'Montessori materials across all learning areas',
      'Long uninterrupted work cycles',
      'Mixed ages — mentors and learners',
      'Outdoor and practical life every day',
      'Grace, courtesy and conflict resolution',
    ],
  },
  developing: [
    { title: 'Academic foundations', description: 'Math and language through concrete experience.' },
    { title: 'Concentration', description: 'Extended focus on work the child chooses.' },
    { title: 'Social responsibility', description: 'Care for others and the environment.' },
  ],
  typicalDay,
  gallery: [images.programs.bloom, images.gallery.learning-1, images.gallery.geography],
  faqs: preschoolFaqs,
  ctaDescription: "Experience Children's House in person.",
}
