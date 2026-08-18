import CTASection from '../sections/CTASection'
import { homeBookTourCta } from '../../data/home'

export default function BookTourCTASection() {
  return (
    <CTASection
      eyebrow={homeBookTourCta.eyebrow}
      title={homeBookTourCta.title}
      description={homeBookTourCta.description}
      buttonLabel={homeBookTourCta.buttonLabel}
      buttonTo={homeBookTourCta.buttonTo}
      variant="beige"
    />
  )
}
