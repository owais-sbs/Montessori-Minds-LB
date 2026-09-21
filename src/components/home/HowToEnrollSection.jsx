import Container from '../layout/Container'
import { Button } from '../ui'
import { FadeUp, StaggerContainer, StaggerItem } from '../animations'
import { ROUTES } from '../../lib/routes'

const steps = [
  {
    title: 'Schedule a Tour',
    description: 'Visit our campus, observe our classrooms, and discover what makes La Casa Verde a special place to learn and grow.',
  },
  {
    title: 'Submit an Application',
    description: 'After your tour, you are invited to apply for your child. We will guide you through every step of the process.',
  },
  {
    title: 'Join Our Community',
    description: 'Welcome to the family. Meet other parents and connect with our community as your child begins their Montessori journey.',
  },
]

export default function HowToEnrollSection() {
  return (
    <section className="section-dark py-20 md:py-28">
      <Container>
        <FadeUp className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">How to apply</p>
          <h2 className="heading-xl mt-4">
            Three simple steps
            <br />
            <span className="headline-accent">forward.</span>
          </h2>
          <p className="body-lg mt-5">
            Getting started at our Montessori school in Choueifat is simple. Tour the classrooms, meet our guides, and take the next step toward nursery or pre-school enrollment with a team that partners closely with families.
          </p>
        </FadeUp>

        <StaggerContainer className="numbered-list-panel numbered-list-panel-dark mx-auto mt-14 max-w-3xl" stagger={0.1}>
          {steps.map((step, index) => (
            <StaggerItem key={step.title}>
              <div className="numbered-row">
                <span className="numbered-index">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="heading-sm">{step.title}</h3>
                <p className="body-sm">{step.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeUp delay={0.3} className="mt-12 flex flex-wrap justify-center gap-4">
          <Button to={ROUTES.bookATour} variant="onPhoto">
            Schedule a tour
          </Button>
          <Button to={ROUTES.admission} variant="outline" className="!border-warm-cream/25 !text-warm-cream hover:!bg-warm-cream/10">
            Start application
          </Button>
        </FadeUp>
      </Container>
    </section>
  )
}
