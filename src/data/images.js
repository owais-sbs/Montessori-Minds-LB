/**
 * Image asset registry.
 *
 * Using provided images until client photography is available.
 * Replace values with paths under public/images/ when assets are ready.
 */
const placeholders = {
  // Children in classroom setting
  hero:
    'https://cdn.monkplatform.com/image/czoxODk6Imh0dHBzJTNBJTJGJTJGczMuYW1hem9uYXdzLmNvbSUyRmFjY291bnQtbWVkaWElMkYyMjI2MCUyRnVwbG9hZGVkJTJGcCUyRjBlMTY5Nzg5NTRfMTcwNDk5NDc4NV9wcmVzY2hvb2wyLmpwZyUzRnElM0Q5MCUyNnclM0QxMDY2JTI2aCUzRDcxMiUyNmZpdCUzRG1heCUyNnMlM0Q3OGY3ZDM5MDQ1ZjZlM2VjMDk5NzhiZGM1YzNjNzBlYyI7/preschool2.jpg',
  // Classroom environment
  classroom:
    'https://nucleus-production.s3.amazonaws.com/uploads/WsIttqncNZfdcxxykFeIDRXEqK4vHRgUu1sXRlbC.jpeg',
  // Prepared environment
  preparedEnvironment:
    'https://i.pinimg.com/736x/70/d3/ec/70d3ec47a9349cf18eafe4963fa55904.jpg',
  // Nature / outdoor
  nature:
    'https://i.pinimg.com/736x/12/71/5f/12715f07e3a76d04e57099f91dd4d14d.jpg',
  // Child independence
  independence:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKQkkQi-jzw0dwdXafpHKtu3ShFB2mRndxxyibuy14-lyceW4Ariy4d3ad&s=10',
  // Approach / learning
  approach:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVwjxmtq1SR_X3_tusGPf5_td1UqfO77N-VqETfpxZug&s=10',
  // Banner
  banner:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4r3auhXowxG0qqd2hJEwmEDVbbOzbakElJcmiIjL1NA&s=10',
  programs: {
    nest: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4r3auhXowxG0qqd2hJEwmEDVbbOzbakElJcmiIjL1NA&s=10',
    sprout: 'https://i.pinimg.com/736x/12/71/5f/12715f07e3a76d04e57099f91dd4d14d.jpg',
    bloom: 'https://cdn.monkplatform.com/image/czoxODk6Imh0dHBzJTNBJTJGJTJGczMuYW1hem9uYXdzLmNvbSUyRmFjY291bnQtbWVkaWElMkYyMjI2MCUyRnVwbG9hZGVkJTJGcCUyRjBlMTY5Nzg5NTRfMTcwNDk5NDc4NV9wcmVzY2hvb2wyLmpwZyUzRnElM0Q5MCUyNnclM0QxMDY2JTI2aCUzRDcxMiUyNmZpdCUzRG1heCUyNnMlM0Q3OGY3ZDM5MDQ1ZjZlM2VjMDk5NzhiZGM1YzNjNzBlYyI7/preschool2.jpg',
  },
  gallery: {
    classroom1: 'https://nucleus-production.s3.amazonaws.com/uploads/WsIttqncNZfdcxxykFeIDRXEqK4vHRgUu1sXRlbC.jpeg',
    classroom2: 'https://cdn.monkplatform.com/image/czoxODk6Imh0dHBzJTNBJTJGJTJGczMuYW1hem9uYXdzLmNvbSUyRmFjY291bnQtbWVkaWElMkYyMjI2MCUyRnVwbG9hZGVkJTJGcCUyRjBlMTY5Nzg5NTRfMTcwNDk5NDc4NV9wcmVzY2hvb2wyLmpwZyUzRnElM0Q5MCUyNnclM0QxMDY2JTI2aCUzRDcxMiUyNmZpdCUzRG1heCUyNnMlM0Q3OGY3ZDM5MDQ1ZjZlM2VjMDk5NzhiZGM1YzNjNzBlYyI7/preschool2.jpg',
    outdoor1: 'https://i.pinimg.com/736x/12/71/5f/12715f07e3a76d04e57099f91dd4d14d.jpg',
    outdoor2: 'https://i.pinimg.com/736x/70/d3/ec/70d3ec47a9349cf18eafe4963fa55904.jpg',
    activity1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVwjxmtq1SR_X3_tusGPf5_td1UqfO77N-VqETfpxZug&s=10',
    activity2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTob0LzQRDuyAmj0OFna6JBVar9locWBj7aKzS6qIRSxw&s=10',
    learning1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4r3auhXowxG0qqd2hJEwmEDVbbOzbakElJcmiIjL1NA&s=10',
    learning2: 'https://i.pinimg.com/736x/70/d3/ec/70d3ec47a9349cf18eafe4963fa55904.jpg',
    crafts1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVwjxmtq1SR_X3_tusGPf5_td1UqfO77N-VqETfpxZug&s=10',
    reading1: 'https://nucleus-production.s3.amazonaws.com/uploads/WsIttqncNZfdcxxykFeIDRXEqK4vHRgUu1sXRlbC.jpeg',
    playground1: 'https://i.pinimg.com/736x/12/71/5f/12715f07e3a76d04e57099f91dd4d14d.jpg',
    blocks1: 'https://cdn.monkplatform.com/image/czoxODk6Imh0dHBzJTNBJTJGJTJGczMuYW1hem9uYXdzLmNvbSUyRmFjY291bnQtbWVkaWElMkYyMjI2MCUyRnVwbG9hZGVkJTJGcCUyRjBlMTY5Nzg5NTRfMTcwNDk5NDc4NV9wcmVzY2hvb2wyLmpwZyUzRnElM0Q5MCUyNnclM0QxMDY2JTI2aCUzRDcxMiUyNmZpdCUzRG1heCUyNnMlM0Q3OGY3ZDM5MDQ1ZjZlM2VjMDk5NzhiZGM1YzNjNzBlYyI7/preschool2.jpg',
  },
}

/** Local asset paths — swap placeholders above for these when files exist. */
export const imagePaths = {
  branding: {
    logo: '/images/branding/logo.png',
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
