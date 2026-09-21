import Container from '../layout/Container'
import { FadeUp, StaggerContainer, StaggerItem } from '../animations'
import { developmentFocus } from '../../data/approach'
import { images } from '../../data/images'
import { homeIndependence } from '../../data/home'

export default function IndependenceSection() {
  return (
    <section className="bg-warm-cream py-16 md:py-24 lg:py-28">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <FadeUp delay={0.1} className="order-2 overflow-hidden rounded-2xl lg:order-1 lg:mt-8">
            <img
              src={images.independence}
              alt={homeIndependence.imageAlt}
              className="aspect-[3/4] w-full object-cover"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </FadeUp>

          <div className="order-1 flex flex-col gap-8 lg:order-2">
            <FadeUp className="flex flex-col gap-5">
              <p className="eyebrow">A day in their world</p>
              <h2 className="heading-xl text-deep-forest">
                {homeIndependence.title}
                <br />
                <span className="headline-accent">every step.</span>
              </h2>
              <p className="body-lg">{homeIndependence.description}</p>
            </FadeUp>

            <StaggerContainer className="numbered-list-panel" stagger={0.08}>
              {developmentFocus.map((item, index) => (
                <StaggerItem key={item.title}>
                  <div className="numbered-row">
                    <span className="numbered-index">{String(index + 1).padStart(2, '0')}</span>
                    <h3 className="heading-md text-deep-forest">{item.title}</h3>
                    <p className="body-sm">{item.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </Container>
    </section>
  )
}
