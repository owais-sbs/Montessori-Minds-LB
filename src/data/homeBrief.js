import { ROUTES } from '../lib/routes'

export const homeHeroBrief = {
  eyebrow: 'Montessori Minds',
  titleLine1: 'Little hands.',
  titleAccent: 'Big beginnings.',
  keywordLine:
    'Montessori school, nursery and pre-school in Choueifat, Lebanon.',
  description:
    'Montessori Minds welcomes families from Choueifat, Beirut and Mount Lebanon with nurturing nursery and pre-school programs for ages 6 months to 6 years.',
  primaryCta: { label: 'Book a visit', to: ROUTES.bookATour },
  secondaryCta: { label: 'Discover our approach', to: ROUTES.ourApproach },
  infoBar:
    'Ages 6 months – 6 years · Choueifat, Lebanon · Arabic · English · French',
  videoSrc: '/videos/hero.mp4',
}

export const emotionalHook = {
  id: 'emotional-hook',
  eyebrow: 'A different beginning',
  title: 'What if education started with one simple question?',
  titleAccent: 'Who is this child becoming?',
  body:
    'At Montessori Minds, children are given the space, guidance and environment to discover what they are capable of. And eventually, something beautiful happens.',
  callout: 'I can do it myself.',
  cta: { label: 'Discover our approach', to: ROUTES.ourApproach },
  quote: {
    text: 'The child has a mind able to absorb knowledge. He has the power to teach himself.',
    source: 'Maria Montessori, The Absorbent Mind',
  },
}

export const whatYoullSeeGrow = {
  eyebrow: "What you'll see grow",
  title: 'It is more than what they learn.',
  titleAccent: 'It is who they are becoming.',
  rows: [
    {
      quality: 'Independence',
      childVoice: 'I can do it.',
      parentBenefit: 'Caring for themselves, their environment and everyday tasks.',
    },
    {
      quality: 'Confidence',
      childVoice: 'Let me try.',
      parentBenefit: 'Confidence built through real accomplishment.',
    },
    {
      quality: 'Curiosity',
      childVoice: 'Why?',
      parentBenefit: 'The freedom to explore, question and discover.',
    },
    {
      quality: 'Concentration',
      childVoice: 'I am not finished yet.',
      parentBenefit: 'Time and space for deep engagement.',
    },
    {
      quality: 'Responsibility',
      childVoice: 'I will put it back.',
      parentBenefit: 'Care for the environment and community.',
    },
    {
      quality: 'Empathy',
      childVoice: 'Can I help?',
      parentBenefit: 'Respect, kindness and awareness of others.',
    },
  ],
  quote: {
    text: 'The essence of independence is to be able to do something for one’s self.',
    source: 'Maria Montessori',
  },
}

export const montessoriExplained = {
  eyebrow: 'Montessori explained',
  title: 'New to Montessori?',
  titleAccent: 'Good. Let us start simply.',
  steps: [
    { label: 'Choose', prompt: 'What calls to me?' },
    { label: 'Explore', prompt: 'What happens if I try?' },
    { label: 'Practise', prompt: 'Can I do it again?' },
    { label: 'Master', prompt: 'I can do it myself.' },
    { label: 'Grow', prompt: 'What is next?' },
  ],
  description:
    'Montessori is an educational approach built around how children naturally develop. In a carefully prepared environment, children learn through hands-on experiences, purposeful activities and guided choice. They progress at their own pace while developing independence, concentration and confidence.',
  cta: { label: 'Montessori explained', to: ROUTES.ourApproach },
  quote: {
    text: 'The hands are the instruments of man’s intelligence.',
    source: 'Maria Montessori',
  },
}

export const dayInTheirWorld = {
  eyebrow: 'A day in their world',
  title: 'Step inside their day.',
  titleAccent: 'Follow the rhythm.',
  closing: 'Every activity has a purpose. Every child has their own pace.',
  moments: [
    { time: '08:00 Good Morning', childVoice: 'I know I belong here.', experience: 'Warm arrival and connection.' },
    { time: 'Montessori Work Cycle', childVoice: 'I choose what I am ready to explore.', experience: 'Purposeful independent or small group work.' },
    { time: 'Practical Life', childVoice: 'I can pour it myself.', experience: 'Pouring, preparing, cleaning and caring.' },
    { time: 'Language and Discovery', childVoice: 'I have something to tell you.', experience: 'Conversation, vocabulary and discovery.' },
    { time: 'Outdoor Exploration', childVoice: 'Look what I found.', experience: 'Movement, nature and observation.' },
    { time: 'Meals', childVoice: 'I can help prepare.', experience: 'Community, independence and care.' },
    { time: 'Rest and Quiet', childVoice: 'I can pause.', experience: 'Rest adapted to developmental needs.' },
    { time: 'Creative and Social Exploration', childVoice: 'Can we do it together?', experience: 'Expression and social connection.' },
    { time: 'Home', childVoice: 'Look what I did today.', experience: 'A warm end to the day.' },
  ],
  quote: {
    text: 'The child who concentrates is immensely happy.',
    source: 'Maria Montessori, The Absorbent Mind',
  },
}

export const homeProgramsBrief = {
  eyebrow: 'Our programs',
  title: 'A place for every stage of becoming.',
  programs: [
    {
      name: 'Infant Community',
      altName: 'Nido',
      ageRange: 'Birth – 18 months',
      positioning: 'The beginning of discovery.',
      to: ROUTES.nursery,
    },
    {
      name: 'Toddler Community',
      altName: null,
      ageRange: '18 months – 3 years',
      positioning: 'The wonderful age of “I can do it.”',
      to: ROUTES.nursery,
    },
    {
      name: "Children's House",
      altName: null,
      ageRange: '3 – 6 years',
      positioning: 'Where curiosity becomes capability.',
      to: ROUTES.preschool,
    },
  ],
  quote: {
    text: 'Never help a child with a task at which he feels he can succeed.',
    source: 'Maria Montessori',
  },
}

export const languagesSection = {
  eyebrow: 'Languages',
  title: 'Rooted here.',
  titleAccent: 'Ready for the world.',
  labels: ['عربي', 'English', 'Français'],
  description:
    'Language is more than vocabulary. It is connection. Children experience language naturally through conversation, stories, songs, activities and everyday interactions.',
  bullets: [
    'Arabic connects them to their roots.',
    'English connects them to the world.',
    'French opens another door.',
  ],
  note: 'We describe only the language model our nursery actually delivers.',
}

export const environmentSection = {
  eyebrow: 'The prepared environment',
  title: 'Everything is within their reach.',
  titleAccent: 'For a reason.',
  hotspots: [
    { label: 'Open shelf', message: 'Choice', meaning: 'Materials are visible and accessible.' },
    { label: 'Child-sized furniture', message: 'Independence', meaning: 'The room is designed around the child.' },
    { label: 'Montessori material', message: 'Purpose', meaning: 'Each material supports a developmental need.' },
    { label: 'Ordered environment', message: 'Order', meaning: 'Everything has a place.' },
    { label: 'Outdoor space', message: 'Discovery', meaning: 'Learning continues beyond the classroom.' },
  ],
  cta: { label: 'Explore our environment', to: ROUTES.gallery },
  quote: {
    text: 'The first aim of the prepared environment is, as far as it is possible, to render the growing child independent of the adult.',
    source: 'Maria Montessori, The Secret of Childhood',
  },
}

export const ourPeopleSection = {
  eyebrow: 'Our people',
  title: 'The adults who will know your child.',
  team: [
    {
      name: 'Montessori Guide',
      role: 'Children’s House',
      image: '/images/gallery/learning-1.jpg',
      note: 'Qualifications and biography — to be confirmed for publication.',
    },
    {
      name: 'Montessori Guide',
      role: 'Toddler Community',
      image: '/images/gallery/emotions.jpg',
      note: 'Qualifications and biography — to be confirmed for publication.',
    },
    {
      name: 'Montessori Guide',
      role: 'Infant Community',
      image: '/images/programs/nest.jpg',
      note: 'Qualifications and biography — to be confirmed for publication.',
    },
  ],
  quote: {
    text: 'The teacher’s task is first to nourish and assist, to watch, encourage, guide, induce, rather than to interfere, prescribe, or restrict.',
    source: 'Maria Montessori',
  },
}

export const socialProofSection = {
  eyebrow: 'Little stories',
  title: 'Little stories.',
  titleAccent: 'Big changes.',
  testimonials: [
    {
      quote:
        'Three months after joining, we started hearing “Mama, let me do it” constantly at home.',
      attribution: 'Montessori Minds parent',
    },
    {
      quote:
        'Our daughter pours her own water now — and puts the jug back without being asked.',
      attribution: 'Montessori Minds parent',
    },
  ],
}

export const finalConversion = {
  eyebrow: 'Experience it',
  title: 'You can read about Montessori.',
  titleAccent: 'Or you can experience it.',
  description:
    'Come inside. Meet our Guides. Explore the environment and discover whether Montessori Minds feels right for your child.',
  primaryCta: { label: 'Book your visit', to: ROUTES.bookATour },
  whatsappLabel: 'WhatsApp us',
}
