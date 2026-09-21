import Container from '../layout/Container'
import { TextLink } from '../ui'
import { FadeUp, StaggerContainer, StaggerItem } from '../animations'
import { homeWhyChoose } from '../../data/home'
import { ROUTES } from '../../lib/routes'

const features = [
  {
    title: 'Authentic Montessori Education',
    quote: 'Real consistency. Real respect.',
    description: 'We hold ourselves to the highest Montessori standards. That means real consistency, real integrity, and real respect for your child.',
  },
  {
    title: 'Nature-Inspired Learning',
    quote: 'Slow down. Observe. Care.',
    description: 'Our school brings children close to nature. They learn to slow down, observe, and care for the world around them.',
  },
  {
    title: 'We Honor Individual Growth',
    quote: 'Each child, their own pace.',
    description: 'Each child is free to grow at their own pace within a carefully prepared environment that nurtures independence and confidence.',
  },
  {
    title: 'A True Learning Community',
    quote: 'Home and school together.',
    description: 'We view education as a partnership with families. Children thrive when home and school work together in harmony.',
  },
]

export default function WhyChooseUsSection() {
  return (
    <section className="bg-warm-cream py-20 md:py-28">
      <Container>
        <FadeUp className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{homeWhyChoose.eyebrow}</p>
          <h2 className="heading-xl mt-4 text-deep-forest">
            {homeWhyChoose.title}
            <br />
            <span className="headline-accent">with confidence.</span>
          </h2>
          <p className="body-lg mt-5">{homeWhyChoose.description}</p>
          <p className="quote-serif mt-10 text-deep-forest">&ldquo;I can do it myself.&rdquo;</p>
          <div className="mt-8">
            <TextLink to={ROUTES.ourApproach}>Discover our approach</TextLink>
          </div>
        </FadeUp>

        <StaggerContainer className="numbered-list-panel mx-auto mt-14 max-w-3xl" stagger={0.08}>
          {features.map((feature, index) => (
            <StaggerItem key={feature.title}>
              <div className="numbered-row">
                <span className="numbered-index">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="heading-sm text-deep-forest">{feature.title}</h3>
                <p className="font-display text-base italic text-accent-rose">{feature.quote}</p>
                <p className="body-sm">{feature.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  )
}
