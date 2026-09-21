import Container from '../layout/Container'
import ProgramCard from '../programs/ProgramCard'
import { Link } from 'react-router-dom'
import { StaggerContainer, StaggerItem, FadeUp } from '../animations'
import { programs } from '../../data/programs'
import { ROUTES } from '../../lib/routes'

export default function ProgramDetail({ program, index }) {
  const isReverse = index % 2 !== 0

  return (
    <section className={`py-14 md:py-20 ${index % 2 === 0 ? 'bg-warm-cream' : 'section-dark'}`}>
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <FadeUp x={-20} className={`flex max-w-lg flex-col gap-4 ${isReverse ? 'lg:order-2' : ''}`}>
            <p className="eyebrow">{program.ageRange}</p>
            <h2 className="font-display text-[clamp(1.5rem,3vw,2.25rem)] font-normal leading-snug">{program.name}</h2>
            <p className="body-md text-[0.95rem] leading-relaxed">{program.description}</p>
          </FadeUp>
          <FadeUp delay={0.1} className={`overflow-hidden rounded-2xl ${isReverse ? 'lg:order-1' : ''}`}>
            <img
              src={program.image}
              alt={`${program.name} Montessori program for ${program.ageRange} at Montessori Minds in Choueifat`}
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </FadeUp>
        </div>
      </Container>
    </section>
  )
}

export function ProgramsOverview() {
  return (
    <section className="bg-warm-cream py-14 md:py-20">
      <Container>
        <FadeUp className="mx-auto mb-10 max-w-xl text-left md:max-w-2xl md:text-center">
          <h2 className="font-display text-[clamp(1.5rem,3vw,2.25rem)] font-normal text-deep-forest">Choose the right pathway</h2>
          <p className="body-md mt-4 text-[0.95rem]">
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
        <StaggerContainer className="grid gap-5 md:grid-cols-3" stagger={0.14}>
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
