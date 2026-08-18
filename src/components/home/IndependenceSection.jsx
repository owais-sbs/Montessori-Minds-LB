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
          {/* Image — school-relevant */}
          <FadeUp delay={0.1} className="order-2 overflow-hidden rounded-3xl lg:order-1 lg:mt-8">
            <img
              src={images.independence}
              alt={homeIndependence.imageAlt}
              className="aspect-[3/4] w-full rounded-3xl object-cover transition-transform duration-700 hover:scale-[1.02] motion-reduce:transform-none"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </FadeUp>

          {/* Content */}
          <div className="order-1 flex flex-col gap-8 lg:order-2">
            <FadeUp className="flex flex-col gap-5">
              <p className="eyebrow">{homeIndependence.eyebrow}</p>
              <h2 className="heading-xl">{homeIndependence.title}</h2>
              <p className="body-lg">{homeIndependence.description}</p>
            </FadeUp>

            <StaggerContainer className="flex flex-col gap-6" stagger={0.08}>
              {developmentFocus.map((item) => (
                <StaggerItem key={item.title} className="border-l-2 border-olive/30 pl-6">
                  <h3 className="heading-md mb-2">{item.title}</h3>
                  <p className="body-md">{item.description}</p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </Container>
    </section>
  )
}
