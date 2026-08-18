/**
 * Image asset registry.
 *
 * Placeholder URLs are verified remote assets until client photography is available.
 * Replace values with paths under public/images/ when assets are ready.
 */
const placeholders = {
  hero:
    'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=1200&q=80',
  classroom:
    'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
  preparedEnvironment:
    'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80',
  nature:
    'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1600&q=80',
  independence:
    'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80',
  approach:
    'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1600&q=80',
  banner:
    'https://images.unsplash.com/photo-1544776193-352d25ca82cd?auto=format&fit=crop&w=1600&q=80',
  programs: {
    nest: 'https://images.unsplash.com/photo-1587616211892-f743fcca64f9?auto=format&fit=crop&w=800&q=80',
    sprout: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=800&q=80',
    bloom: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
  },
  gallery: {
    classroom1: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
    classroom2: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
    outdoor1: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80',
    outdoor2: 'https://images.unsplash.com/photo-1544776193-352d25ca82cd?auto=format&fit=crop&w=800&q=80',
    activity1: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=800&q=80',
    activity2: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80',
    learning1: 'https://images.unsplash.com/photo-1587616211892-f743fcca64f9?auto=format&fit=crop&w=800&q=80',
    learning2: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
    crafts1: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=800&q=80',
    reading1: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80',
    playground1: 'https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=800&q=80',
    blocks1: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=800&q=80',
  },
}

/** Local asset paths — swap placeholders above for these when files exist. */
export const imagePaths = {
  branding: {
    logo: '/images/branding/logo.svg',
  },
  hero: {
    main: '/images/hero/hero.jpg',
  },
  classroom: {
    main: '/images/classroom/classroom.jpg',
    preparedEnvironment: '/images/classroom/prepared-environment.jpg',
  },
  programs: {
    nest: '/images/programs/nest.jpg',
    sprout: '/images/programs/sprout.jpg',
    bloom: '/images/programs/bloom.jpg',
  },
  nature: {
    main: '/images/nature/nature.jpg',
    independence: '/images/nature/independence.jpg',
  },
  gallery: {
    classroom1: '/images/gallery/classroom-1.jpg',
    classroom2: '/images/gallery/classroom-2.jpg',
    outdoor1: '/images/gallery/outdoor-1.jpg',
    outdoor2: '/images/gallery/outdoor-2.jpg',
    activity1: '/images/gallery/activity-1.jpg',
    activity2: '/images/gallery/activity-2.jpg',
    learning1: '/images/gallery/learning-1.jpg',
    learning2: '/images/gallery/learning-2.jpg',
  },
  approach: '/images/classroom/approach.jpg',
}

/** Active image URLs used by the UI (currently placeholders). */
export const images = {
  hero: placeholders.hero,
  classroom: placeholders.classroom,
  preparedEnvironment: placeholders.preparedEnvironment,
  nature: placeholders.nature,
  independence: placeholders.independence,
  approach: placeholders.approach,
  banner: placeholders.banner,
  programs: {
    nest: placeholders.programs.nest,
    sprout: placeholders.programs.sprout,
    bloom: placeholders.programs.bloom,
  },
  gallery: {
    classroom1: placeholders.gallery.classroom1,
    classroom2: placeholders.gallery.classroom2,
    outdoor1: placeholders.gallery.outdoor1,
    outdoor2: placeholders.gallery.outdoor2,
    activity1: placeholders.gallery.activity1,
    activity2: placeholders.gallery.activity2,
    learning1: placeholders.gallery.learning1,
    learning2: placeholders.gallery.learning2,
    crafts1: placeholders.gallery.crafts1,
    reading1: placeholders.gallery.reading1,
    playground1: placeholders.gallery.playground1,
    blocks1: placeholders.gallery.blocks1,
  },
}
