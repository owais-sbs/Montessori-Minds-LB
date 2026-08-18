import { ROUTES } from '../lib/routes'
import { programs } from './programs'

export const primaryNavLinks = [
  { label: 'Our Approach', to: ROUTES.ourApproach },
  { label: 'Programs', to: ROUTES.programs },
  { label: 'Admissions', to: ROUTES.admission },
  { label: 'Gallery', to: ROUTES.gallery },
]

export const footerNavLinks = [
  { label: 'Our Approach', to: ROUTES.ourApproach },
  { label: 'Programs', to: ROUTES.programs },
  { label: 'Admission', to: ROUTES.admission },
  { label: 'Gallery', to: ROUTES.gallery },
  { label: 'Book A Tour', to: ROUTES.bookATour },
]

export const footerProgramLinks = programs.map(({ name }) => ({
  label: name,
  to: ROUTES.programs,
}))
