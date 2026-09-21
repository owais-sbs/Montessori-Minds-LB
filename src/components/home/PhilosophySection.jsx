import Container from '../layout/Container'
import { Button } from '../ui'
import { FadeUp, StaggerContainer, StaggerItem } from '../animations'
import { philosophyPoints } from '../../data/approach'
import { homePhilosophy } from '../../data/home'
import { ROUTES } from '../../lib/routes'

export default function PhilosophySection() {
  return (
    <section className="bg-warm-cream py-20 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <FadeUp className="flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow">Montessori explained</p>
            <h2 className="heading-xl text-deep-forest">
              {homePhilosophy.title}
              <br />
              <span className="headline-accent">becoming.</span>
            </h2>
            <p className="body-lg">{homePhilosophy.description}</p>
            <Button to={ROUTES.ourApproach} variant="primary" className="self-start">
              Explore our approach
            </Button>
          </FadeUp>

          <StaggerContainer className="numbered-list-panel" stagger={0.06}>
            {philosophyPoints.map((point, index) => (
              <StaggerItem key={point.title}>
                <div className="numbered-row">
                  <span className="numbered-index">{String(index + 1).padStart(2, '0')}</span>
                  <h3 className="heading-md text-deep-forest">{point.title}</h3>
                  <p className="body-sm">{point.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Container>
    </section>
  )
}
