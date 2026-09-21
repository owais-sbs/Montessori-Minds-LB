import Container from '../layout/Container'
import { Button } from '../ui'
import MontessoriQuote from '../ui/MontessoriQuote'
import { FadeUp, StaggerContainer, StaggerItem } from '../animations'
import { images } from '../../data/images'
import { environmentSection } from '../../data/homeBrief'

export default function EnvironmentSection() {
  return (
    <section className="bg-warm-cream py-16 md:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <FadeUp className="overflow-hidden rounded-2xl">
            <img
              src={images.preparedEnvironment}
              alt="Prepared Montessori classroom"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          </FadeUp>

          <div>
            <FadeUp>
              <p className="eyebrow">{environmentSection.eyebrow}</p>
              <h2 className="heading-xl mt-3 text-deep-forest">
                {environmentSection.title}
                <br />
                <span className="headline-accent">{environmentSection.titleAccent}</span>
              </h2>
            </FadeUp>

            <StaggerContainer className="numbered-list-panel mt-8" stagger={0.07}>
              {environmentSection.hotspots.map((spot, index) => (
                <StaggerItem key={spot.label}>
                  <div className="numbered-row">
                    <span className="numbered-index">{String(index + 1).padStart(2, '0')}</span>
                    <p className="heading-sm text-deep-forest">
                      {spot.label} — <span className="text-accent-rose">{spot.message}</span>
                    </p>
                    <p className="body-sm">{spot.meaning}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <FadeUp className="mt-8">
              <Button to={environmentSection.cta.to} variant="primary">
                {environmentSection.cta.label}
              </Button>
            </FadeUp>
          </div>
        </div>

        <MontessoriQuote
          className="mx-auto mt-14 max-w-2xl text-center"
          text={environmentSection.quote.text}
          source={environmentSection.quote.source}
        />
      </Container>
    </section>
  )
}
