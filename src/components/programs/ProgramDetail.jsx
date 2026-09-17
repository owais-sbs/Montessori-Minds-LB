import Container from '../layout/Container'
import ProgramCard from '../programs/ProgramCard'
import { Link } from 'react-router-dom'
import { StaggerContainer, StaggerItem, FadeUp } from '../animations'
import { programs } from '../../data/programs'
import { ROUTES } from '../../lib/routes'

export default function ProgramDetail({ program, index }) {
  const isReverse = index % 2 !== 0

  return (
    <section className={`py-20 md:py-28 ${index % 2 === 0 ? 'bg-warm-cream' : 'bg-warm-beige'}`}>
      <Container>
        <div className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${isReverse ? '' : ''}`}>
          <FadeUp className={`flex flex-col gap-5 ${isReverse ? 'lg:order-2' : ''}`}>
            <p className="eyebrow">{program.ageRange}</p>
            <h2 className="heading-xl">{program.name}</h2>
            <p className="body-lg">{program.description}</p>
          </FadeUp>
          <div className={`overflow-hidden rounded-3xl ${isReverse ? 'lg:order-1' : ''}`}>
            <img
              src={program.image}
              alt={`${program.name} Montessori program for ${program.ageRange} at Montessori Minds in Choueifat`}
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

export function ProgramsOverview() {
  return (
    <section className="bg-warm-beige py-20 md:py-28">
      <Container>
        <FadeUp className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="heading-xl">Choose the Right Pathway</h2>
          <p className="body-lg mt-4">
            Learn more about our{' '}
            <Link to={ROUTES.nursery} className="text-olive transition-colors hover:text-forest-green">
              Montessori nursery in Choueifat
            </Link>
            {' '}and{' '}
            <Link to={ROUTES.preschool} className="text-olive transition-colors hover:text-forest-green">
              Montessori pre-school in Choueifat
            </Link>
            , or visit{' '}
            <Link to={ROUTES.laCasaVerde} className="text-olive transition-colors hover:text-forest-green">
              La Casa Verde by Montessori Minds
            </Link>
            .
          </p>
        </FadeUp>
        <StaggerContainer className="grid gap-8 md:grid-cols-3" stagger={0.1}>
          {programs.map((program) => (
            <StaggerItem key={program.id}>
              <ProgramCard program={program} showCta={false} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  )
}
