import { images } from './images'

export const laCasaVerdePageContent = {
  hero: {
    eyebrow: 'Choueifat, Lebanon',
    title: 'La Casa Verde by Montessori Minds',
    titleAccent: 'Our campus for infants through age six.',
  },
  intro:
    'La Casa Verde by Montessori Minds is our Montessori school on Saida Old Road, Al Omara District, Choueifat. Children from infancy through age six work in prepared classrooms Monday–Friday, 8:00 AM–4:00 PM.',
  purpose:
    'Our mission is to raise capable, curious children who trust their hands and minds. We prepare the environment, then step back so they can practise real independence.',
  history:
    'La Casa Verde by Montessori Minds opened as a response to families in Choueifat who wanted authentic Montessori practice close to home. The campus still sits on Saida Old Road in Al Omara District, Mount Lebanon — the same street address you will find on our maps listing and admissions forms.',
  founderStory:
    'The school was founded on a practical idea: childhood is not a rehearsal for later life. Day-to-day work — pouring water, choosing a material, putting it back — builds the confidence parents notice at home months later. Founder biography and named leadership profiles will be published here once confirmed for the public site.',
  certifications:
    'Classroom practice follows Montessori principles used in AMI- and AMS-informed environments worldwide. We link to the American Montessori Society and Association Montessori Internationale as reference bodies. Ask during your visit which Guide trainings apply to the classroom you are considering — we do not list unverified credentials online.',
  nap: {
    name: 'Montessori Minds',
    legalName: 'La Casa Verde by Montessori Minds',
    address: 'Saida Old Road, Al Omara District, Choueifat, Mount Lebanon, Lebanon',
    phone: '+961 71 007 150',
    email: 'hello@montessorimindslb.com',
    hours: 'Monday – Friday · 8:00 AM – 4:00 PM',
  },
  values: ['Respect', 'Independence', 'Curiosity', 'Kindness', 'Purpose'],
  team: [
    {
      name: 'Lead Guide',
      role: 'Leadership · Montessori Minds',
      image: '/images/gallery/learning-2.jpg',
      imageAlt: 'Lead Guide supporting early learning at La Casa Verde by Montessori Minds',
      quote:
        'The first week tells us more about a child than any form. We watch how they choose work before we suggest anything.',
    },
    {
      name: 'Children’s House Guide',
      role: 'Ages 3–6 · Choueifat campus',
      image: '/images/gallery/classroom-1.jpg',
      imageAlt: 'Prepared Montessori classroom at La Casa Verde by Montessori Minds in Choueifat',
      quote:
        'A three-year-old who returns a tray without being asked has practised more concentration than a worksheet ever measures.',
    },
    {
      name: 'Toddler Community Guide',
      role: '18 months–3 years · Nursery',
      image: '/images/gallery/activity-1.jpg',
      imageAlt: 'Toddler practical life activity at Montessori Minds nursery in Choueifat',
      quote:
        'When a toddler pours beans into a bowl and spills half, we stay nearby. The second try is where the learning lives.',
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
  titleAccent: 'Infant and toddler communities on one campus.',
  description:
    'Infant Community (birth–18 months) and Toddler Community (18 months–3 years) share our Choueifat campus on Saida Old Road. Families driving from Beirut or Baabda often tour mid-morning so they can see arrival routines and outdoor time in the same visit.',
}

export const preschoolPageSeoIntro = {
  eyebrow: 'Montessori pre-school',
  title: 'Montessori pre-school in Choueifat',
  titleAccent: 'Children’s House for ages three to six.',
  description:
    'Children’s House is our Montessori preschool / pre-school classroom: mixed ages, long work cycles and materials for practical life, language and mathematics. Parents comparing options near Choueifat or commuting from Beirut usually spend an hour observing before they decide.',
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
    { title: 'Discover', description: 'Read programs and FAQ, then decide whether a weekday visit fits.' },
    { title: 'Visit', description: 'Tour Saida Old Road classrooms Monday–Friday during school hours.' },
    { title: 'Apply', description: 'Complete your child’s application after the visit.' },
    { title: 'Connect', description: 'Share sleep, meals and language notes so Guides can prepare.' },
    { title: 'Welcome', description: 'Plan a gradual settling-in period — shorter days first is common.' },
  ],
  faqs: [
    {
      id: 'settling',
      title: 'How does settling in work?',
      body: 'We plan a gradual start: shorter days first, then extend as the child settles. Exact pacing is agreed with you after the visit.',
    },
    {
      id: 'meals',
      title: 'Meals and nutrition',
      body: 'Meal and snack details are confirmed during admissions because they vary by community. Ask on your tour for the current model.',
    },
    {
      id: 'languages',
      title: 'Languages at school',
      body: 'Arabic, English and French appear in daily life. We describe only the language model we actually deliver — ask Guides what that looks like in each classroom.',
    },
    {
      id: 'communication',
      title: 'Parent communication',
      body: 'Guides share regular updates so home and school stay aligned. Preferred channels are confirmed at enrollment.',
    },
    {
      id: 'tuition',
      title: 'When will I see tuition figures?',
      body: 'Tuition is shared during your visit and admissions conversation because placements differ by age and program. Email hello@montessorimindslb.com or call +961 71 007 150.',
    },
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
