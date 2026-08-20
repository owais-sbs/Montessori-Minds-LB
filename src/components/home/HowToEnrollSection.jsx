import Container from '../layout/Container'
import { Button } from '../ui'
import { FadeUp, StaggerContainer, StaggerItem } from '../animations'
import { ROUTES } from '../../lib/routes'

const steps = [
  {
    number: '1',
    title: 'Schedule a Tour',
    description: 'Visit our campus, observe our classrooms, and discover what makes La Casa Verde a special place to learn and grow.',
  },
  {
    number: '2',
    title: 'Submit an Application',
    description: 'After your tour, you are invited to apply for your child. We will guide you through every step of the process.',
  },
  {
    number: '3',
    title: 'Join Our Community',
    description: 'Welcome to the family. Meet other parents and connect with our community as your child begins their Montessori journey.',
  },
]

export default function HowToEnrollSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <FadeUp className="mx-auto max-w-2xl text-center mb-14">
          <p className="eyebrow">How to Apply</p>
          <h2 className="heading-xl mt-4">Three Simple Steps</h2>
          <p className="body-lg mt-4">
            Getting started is easy. We are here to support you every step of the way.
          </p>
        </FadeUp>
        <StaggerContainer className="grid gap-8 md:grid-cols-3" stagger={0.12}>
          {steps.map((step) => (
            <StaggerItem key={step.number}>
              <div className="relative flex flex-col items-center gap-4 rounded-2xl border border-forest-green/10 bg-warm-cream/50 p-8 text-center h-full">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-olive/10 text-olive heading-md">
                  {step.number}
                </span>
                <h3 className="heading-sm">{step.title}</h3>
                <p className="body-sm">{step.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
        <FadeUp delay={0.3} className="mt-12 flex justify-center gap-4">
          <Button to={ROUTES.bookATour}>Schedule A Tour</Button>
          <Button to={ROUTES.admission} variant="outline">Start Application</Button>
        </FadeUp>
      </Container>
    </section>
  )
}
