import CTASection from '../sections/CTASection'
import { homeAdmissionCta } from '../../data/home'

export default function AdmissionCTASection() {
  return (
    <CTASection
      eyebrow={homeAdmissionCta.eyebrow}
      title={homeAdmissionCta.title}
      description={homeAdmissionCta.description}
      buttonLabel={homeAdmissionCta.buttonLabel}
      buttonTo={homeAdmissionCta.buttonTo}
      variant="cream"
    />
  )
}
