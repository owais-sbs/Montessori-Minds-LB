import Container from '../layout/Container'
import { FadeUp, StaggerContainer, StaggerItem } from '../animations'
import { philosophyPoints } from '../../data/approach'
import { homePhilosophy } from '../../data/home'

export default function PhilosophySection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <FadeUp className="flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow">{homePhilosophy.eyebrow}</p>
            <h2 className="heading-xl">{homePhilosophy.title}</h2>
            <p className="body-lg">{homePhilosophy.description}</p>
          </FadeUp>
          <StaggerContainer className="flex flex-col gap-0 divide-y divide-forest-green/10" stagger={0.08}>
            {philosophyPoints.map((point) => (
              <StaggerItem key={point.title}>
                <div className="flex flex-col gap-2 py-8 first:pt-0 last:pb-0">
                  <h3 className="heading-md">{point.title}</h3>
                  <p className="body-md">{point.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Container>
    </section>
  )
}
