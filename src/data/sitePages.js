import { images } from './images'

export const laCasaVerdePageContent = {
  hero: {
    eyebrow: 'Choueifat, Lebanon',
    title: 'La Casa Verde by Montessori Minds',
    titleAccent: 'Nurturing early learning and discovery.',
  },
  intro:
    'Discover La Casa Verde by Montessori Minds — a nurturing early learning environment focused on Montessori-inspired education, development and discovery in Choueifat, Lebanon.',
  purpose:
    'To raise capable, curious and compassionate children who believe in their ability to engage with the world around them.',
  founderStory:
    'La Casa Verde by Montessori Minds began with a simple belief: childhood is not a rehearsal. Our campus on Saida Old Road welcomes families from Choueifat, Beirut, Baabda and across Mount Lebanon who want respectful, hands-on early education.',
  values: ['Respect', 'Independence', 'Curiosity', 'Kindness', 'Purpose'],
  team: [
    {
      name: 'Montessori Guide',
      role: 'Leadership',
      image: '/images/gallery/learning-2.jpg',
      imageAlt: 'Montessori Guide supporting early learning at La Casa Verde by Montessori Minds',
      quote: 'What I love most is watching a child surprise themselves.',
    },
    {
      name: 'Montessori Guide',
      role: 'Children’s House',
      image: '/images/gallery/classroom-1.jpg',
      imageAlt: 'Prepared Montessori classroom at La Casa Verde by Montessori Minds in Choueifat',
      quote: 'Every day begins with observation — not interruption.',
    },
    {
      name: 'Montessori Guide',
      role: 'Toddler Community',
      image: '/images/gallery/activity-1.jpg',
      imageAlt: 'Toddler practical life activity at Montessori Minds nursery in Choueifat',
      quote: 'Small victories build lasting confidence.',
    },
  ],
  quote: {
    image: images.nature,
    text: 'The child is both a hope and a promise for mankind.',
    source: 'Maria Montessori, Education and Peace',
  },
}

export const aboutPageContent = laCasaVerdePageContent

export const nurseryPageSeoIntro = {
  eyebrow: 'Montessori nursery',
  title: 'Montessori nursery in Choueifat',
  titleAccent: 'Warm care and purposeful early learning.',
  description:
    'Looking for a nursery in Choueifat or a Montessori nursery near Beirut? Montessori Minds offers nurturing infant and toddler pathways — among the most thoughtfully prepared nursery environments families seek when comparing the best nursery in Choueifat.',
}

export const preschoolPageSeoIntro = {
  eyebrow: 'Montessori pre-school',
  title: 'Montessori pre-school in Choueifat',
  titleAccent: 'Hands-on learning that builds independence.',
  description:
    'Our Children’s House supports preschool and pre-school aged children through Montessori materials, mixed-age community and uninterrupted work cycles. Families from Choueifat and Beirut choose us when searching for a Montessori preschool near me or the best Montessori preschool in Beirut for ages three to six.',
}

export const approachPageContent = {
  hero: {
    eyebrow: 'Our approach',
    title: 'Montessori education and early learning',
    titleAccent: 'Because childhood is not one size fits all.',
  },
  openingQuote: {
    image: images.approach,
    text: 'The child is both a hope and a promise for mankind.',
    source: 'Maria Montessori, Education and Peace',
  },
  sixtySeconds: {
    eyebrow: 'Montessori in 60 seconds',
    title: 'The child at the center.',
    titleAccent: 'Everything else supports growth.',
    concepts: [
      { label: 'Prepared environment', detail: 'Calm, ordered spaces where children can choose meaningful work.' },
      { label: 'Purposeful materials', detail: 'Hands-on tools that invite repetition, focus and self-correction.' },
      { label: 'Freedom within limits', detail: 'Real choice inside clear, respectful boundaries.' },
      { label: 'Trained Guide', detail: 'Observation, preparation and gentle support — not constant interruption.' },
      { label: 'Mixed ages', detail: 'Older children mentor younger ones; community grows naturally.' },
    ],
  },
  learningAreas: [
    { name: 'Practical Life', description: 'Pouring, cleaning, dressing — independence in daily life.' },
    { name: 'Sensorial', description: 'Touch, weight, colour and sound that train careful observation.' },
    { name: 'Language', description: 'Conversation, stories and the path toward reading and writing.' },
    { name: 'Mathematics', description: 'Concrete quantity and relationships before symbols.' },
    { name: 'Culture & Discovery', description: 'Nature, geography, science, music and art.' },
    { name: 'Grace & Courtesy', description: 'Respect, patience and belonging in community.' },
  ],
  comparison: {
    eyebrow: 'A respectful comparison',
    title: 'Instead of only…',
    titleAccent: 'Montessori also encourages…',
    pairs: [
      { instead: 'Everyone doing the same activity', encourages: 'Individual readiness' },
      { instead: 'Adult choosing every activity', encourages: 'Guided choice' },
      { instead: 'Learning mainly by listening', encourages: 'Learning through doing' },
      { instead: 'Adult correcting every mistake', encourages: 'Materials that support self-correction' },
      { instead: 'Adult doing things for children', encourages: 'Helping children do for themselves' },
      { instead: 'Rewarding results', encourages: 'Developing intrinsic motivation' },
    ],
  },
  myths: [
    {
      id: 'freedom',
      title: '“Children just do whatever they want.”',
      body: 'Not quite. Montessori offers freedom within clear limits. Children make meaningful choices inside a carefully prepared environment.',
    },
    {
      id: 'structure',
      title: '“There is no structure.”',
      body: 'Structure is embedded in the environment, materials, routines, expectations and the role of the Guide.',
    },
    {
      id: 'play',
      title: '“They only play.”',
      body: 'Children learn through purposeful, hands-on activity — work that builds coordination, concentration and confidence.',
    },
    {
      id: 'school-ready',
      title: '“Will my child be ready for school?”',
      body: 'We focus on academic, social and emotional preparation through real experience — without promising individual outcomes.',
    },
  ],
  practicalLifeQuote: {
    text: 'The exercises of practical life are formative activities, a work of adaptation to the environment.',
    source: 'Maria Montessori',
  },
}

export const parentsPageContent = {
  hero: {
    eyebrow: 'For parents',
    title: 'Everything you need to feel ready.',
    titleAccent: 'One step at a time.',
  },
  journey: [
    { title: 'Discover', description: 'Explore Montessori Minds and understand the approach.' },
    { title: 'Visit', description: 'Experience the environment and meet the Guides.' },
    { title: 'Apply', description: 'Complete your child’s application.' },
    { title: 'Connect', description: 'Share information about your child and family.' },
    { title: 'Welcome', description: 'Begin the settling-in journey together.' },
  ],
  faqs: [
    { id: 'settling', title: 'How does settling in work?', body: 'We partner with families on a gradual start that respects the child’s pace and your comfort.' },
    { id: 'meals', title: 'Meals and nutrition', body: 'Confirm the nursery’s exact meal model before publication — we share details during your visit.' },
    { id: 'languages', title: 'Languages at school', body: 'We describe only the language model we actually deliver — ask us on your tour.' },
    { id: 'communication', title: 'Parent communication', body: 'Regular, respectful updates so home and school stay aligned.' },
  ],
  homeTips: [
    { title: 'Low shelves at home', description: 'Let children reach what they need without asking every time.' },
    { title: 'Real tasks', description: 'Pouring, wiping and preparing snacks build the same confidence as at school.' },
    { title: 'Unhurried time', description: 'Leave space for repetition — mastery takes many quiet tries.' },
  ],
  quote: {
    text: 'The child builds his inmost self out of the deeply held impressions he receives.',
    source: 'Maria Montessori',
  },
}

export const environmentPageContent = {
  hero: {
    eyebrow: 'Our environment',
    title: 'Designed for small hands.',
    titleAccent: 'And growing minds.',
  },
  sections: [
    { eyebrow: 'Prepared environment', caption: 'Everything within reach — for a reason.', image: '/images/classroom/prepared-environment.jpg', imageAlt: 'Prepared Montessori classroom at Montessori Minds in Choueifat' },
    { eyebrow: 'Practical life', caption: 'Pouring, preparing and caring for the room.', image: '/images/gallery/activity-2.jpg', imageAlt: 'Practical life work in the Montessori environment at Montessori Minds' },
    { eyebrow: 'Montessori materials', caption: 'Each material supports a developmental need.', image: '/images/gallery/sensory-tiles.jpg', imageAlt: 'Sensorial Montessori materials at Montessori Minds Choueifat' },
    { eyebrow: 'Outdoor exploration', caption: 'Learning continues beyond the classroom.', image: '/images/gallery/outdoor-1.jpg', imageAlt: 'Outdoor exploration at Montessori Minds nursery in Choueifat' },
    { eyebrow: 'Meals & community', caption: 'Independence, care and shared routines.', image: '/images/gallery/mealtime.jpg', imageAlt: 'Community mealtime at Montessori Minds in Choueifat' },
    { eyebrow: 'Rest & quiet', caption: 'Pause adapted to each child’s needs.', image: '/images/gallery/reading-1.jpg', imageAlt: 'Quiet reading corner at Montessori Minds' },
  ],
  tourPlaceholder: {
    eyebrow: 'Virtual tour',
    title: 'Walk through Montessori Minds.',
    titleAccent: 'Coming soon.',
    description: 'A 60–90 second follow-the-child tour will live here — muted autoplay, like the home hero.',
  },
}
