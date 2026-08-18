import { images } from './images'

export const galleryCategories = [
  { id: 'all', label: 'All' },
  { id: 'classroom', label: 'Classroom' },
  { id: 'outdoor', label: 'Outdoor' },
  { id: 'activities', label: 'Activities' },
  { id: 'learning', label: 'Learning' },
]

export const galleryItems = [
  {
    id: 'classroom-1',
    title: 'Montessori Classroom',
    alt: 'Montessori classroom with wooden shelves and learning materials',
    image: images.gallery.classroom1,
    category: 'classroom',
    aspect: 'wide',
  },
  {
    id: 'classroom-2',
    title: 'Child-Sized Learning Space',
    alt: 'Prepared environment with child-sized furniture and natural materials',
    image: images.gallery.classroom2,
    category: 'classroom',
    aspect: 'wide',
  },
  {
    id: 'outdoor-1',
    title: 'Nature Discovery',
    alt: 'Children exploring nature in the school garden',
    image: images.gallery.outdoor1,
    category: 'outdoor',
    aspect: 'wide',
  },
  {
    id: 'outdoor-2',
    title: 'Outdoor Play Area',
    alt: 'Children playing and learning in the outdoor environment',
    image: images.gallery.outdoor2,
    category: 'outdoor',
    aspect: 'wide',
  },
  {
    id: 'activity-1',
    title: 'Hands-On Activities',
    alt: 'Toddler engaged in hands-on Montessori sensorial activity',
    image: images.gallery.activity1,
    category: 'activities',
    aspect: 'wide',
  },
  {
    id: 'activity-2',
    title: 'Practical Life Skills',
    alt: 'Children learning practical life skills through real-world tasks',
    image: images.gallery.activity2,
    category: 'activities',
    aspect: 'wide',
  },
  {
    id: 'learning-1',
    title: 'Early Learning',
    alt: 'Young child concentrating on a Montessori learning material',
    image: images.gallery.learning1,
    category: 'learning',
    aspect: 'wide',
  },
  {
    id: 'learning-2',
    title: 'Guided Discovery',
    alt: 'Teacher guiding children through a discovery-based learning activity',
    image: images.gallery.learning2,
    category: 'learning',
    aspect: 'wide',
  },
  {
    id: 'crafts-1',
    title: 'Creative Expression',
    alt: 'Children engaged in creative arts and crafts activity',
    image: images.gallery.crafts1,
    category: 'activities',
    aspect: 'wide',
  },
  {
    id: 'reading-1',
    title: 'Language & Reading',
    alt: 'Child reading in a cozy classroom reading corner',
    image: images.gallery.reading1,
    category: 'learning',
    aspect: 'wide',
  },
  {
    id: 'playground-1',
    title: 'Active Play',
    alt: 'Children enjoying active play on the school playground',
    image: images.gallery.playground1,
    category: 'outdoor',
    aspect: 'wide',
  },
  {
    id: 'blocks-1',
    title: 'Building & Construction',
    alt: 'Child building with wooden blocks developing spatial awareness',
    image: images.gallery.blocks1,
    category: 'activities',
    aspect: 'wide',
  },
]

export const galleryPreviewItems = galleryItems.slice(0, 9)

export const galleryPage = {
  hero: {
    eyebrow: 'Gallery',
    title: 'Life at Montessori Minds',
    description:
      'Explore our classrooms, outdoor spaces, and the meaningful moments that define our community.',
    imageAlt: 'Outdoor learning environment at Montessori Minds',
  },
}
