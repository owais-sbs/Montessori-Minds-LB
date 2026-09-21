import Container from '../layout/Container'
import { FadeUp, StaggerContainer, StaggerItem } from '../animations'
import { socialProofSection } from '../../data/homeBrief'

export default function SocialProofSection() {
  return (
    <section className="relative min-h-[360px] overflow-hidden py-16 md:py-24">
      <div className="photo-overlay absolute inset-0 bg-deep-forest" aria-hidden="true" />
      <Container className="relative">
        <FadeUp className="mx-auto mb-10 max-w-2xl text-center text-warm-cream">
          <p className="eyebrow eyebrow-on-dark">{socialProofSection.eyebrow}</p>
          <h2 className="heading-xl mt-3">
            {socialProofSection.title}
            <br />
            <span className="headline-accent">{socialProofSection.titleAccent}</span>
          </h2>
        </FadeUp>

        <StaggerContainer className="grid gap-6 md:grid-cols-2" stagger={0.12}>
          {socialProofSection.testimonials.map((item) => (
            <StaggerItem
              key={item.quote}
              className="rounded-2xl border border-warm-cream/15 bg-warm-cream/5 p-8 text-warm-cream backdrop-blur-sm"
            >
              <blockquote className="quote-serif text-warm-cream">&ldquo;{item.quote}&rdquo;</blockquote>
              <p className="quote-attribution mt-4">— {item.attribution}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  )
}
