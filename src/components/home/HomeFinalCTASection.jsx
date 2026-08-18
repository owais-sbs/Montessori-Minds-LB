import Container from '../layout/Container'
import { Button } from '../ui'
import { FadeUp } from '../animations'
import { homeFinalCta } from '../../data/home'

export default function HomeFinalCTASection() {
  return (
    <section className="bg-forest-green/[0.06] py-20 md:py-28">
      <Container>
        <FadeUp className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <p className="eyebrow">{homeFinalCta.eyebrow}</p>
          <h2 className="heading-xl">{homeFinalCta.title}</h2>
          <p className="body-lg">{homeFinalCta.description}</p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Button to={homeFinalCta.primaryButton.to}>
              {homeFinalCta.primaryButton.label}
            </Button>
            <Button to={homeFinalCta.secondaryButton.to} variant="outline">
              {homeFinalCta.secondaryButton.label}
            </Button>
          </div>
        </FadeUp>
      </Container>
    </section>
  )
}
