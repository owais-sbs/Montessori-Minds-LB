import { Link } from 'react-router-dom'
import Container from '../layout/Container'
import MontessoriQuote from '../ui/MontessoriQuote'
import { FadeUp, StaggerContainer, StaggerItem } from '../animations'
import { homeProgramsBrief } from '../../data/homeBrief'

export default function HomeProgramsSection() {
  return (
    <section className="bg-warm-cream py-16 md:py-24">
      <Container>
        <FadeUp x={-20} className="mb-8 max-w-xl text-left md:mx-auto md:mb-10 md:text-center">
          <p className="eyebrow">{homeProgramsBrief.eyebrow}</p>
          <h2 className="mt-3 font-display text-[clamp(1.5rem,4vw,2.1rem)] font-normal text-deep-forest">{homeProgramsBrief.title}</h2>
        </FadeUp>

        <StaggerContainer className="grid gap-4 md:grid-cols-3" stagger={0.14}>
          {homeProgramsBrief.programs.map((program) => (
            <StaggerItem key={program.name} className="program-card flex h-full flex-col gap-3">
              <p className="program-age-label">{program.ageRange}</p>
              <h3 className="heading-md text-deep-forest">
                {program.name}
                {program.altName && (
                  <span className="block text-base font-normal text-muted-text">({program.altName})</span>
                )}
              </h3>
              <p className="body-sm flex-1">{program.positioning}</p>
              <Link
                to={program.to}
                className="font-body text-xs font-medium uppercase tracking-[0.14em] text-deep-forest underline decoration-deep-forest/25 underline-offset-4 transition-colors hover:text-accent-rose"
              >
                Explore program →
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <MontessoriQuote
          className="mx-auto mt-12 max-w-xl text-center"
          text={homeProgramsBrief.quote.text}
          source={homeProgramsBrief.quote.source}
        />

        <FadeUp className="mx-auto mt-10 max-w-xl text-center">
          <p className="body-sm">
            Explore{' '}
            <Link to="/la-casa-verde" className="underline decoration-deep-forest/25 underline-offset-4 hover:text-accent-rose">
              La Casa Verde by Montessori Minds
            </Link>
            , our{' '}
            <Link to="/programs" className="underline decoration-deep-forest/25 underline-offset-4 hover:text-accent-rose">
              Montessori programs
            </Link>
            ,{' '}
            <Link to="/preschool" className="underline decoration-deep-forest/25 underline-offset-4 hover:text-accent-rose">
              pre-school in Choueifat
            </Link>{' '}
            and{' '}
            <Link to="/nursery" className="underline decoration-deep-forest/25 underline-offset-4 hover:text-accent-rose">
              nursery pathways
            </Link>
            .
          </p>
        </FadeUp>
      </Container>
    </section>
  )
}
