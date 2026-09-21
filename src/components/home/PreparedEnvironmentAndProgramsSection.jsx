import Container from '../layout/Container'
import { FadeUp, StaggerContainer, StaggerItem } from '../animations'
import { TextLink } from '../ui'
import { Link } from 'react-router-dom'
import { images } from '../../data/images'
import { homePreparedEnvironment, homePrograms } from '../../data/home'
import { programs } from '../../data/programs'
import { ROUTES } from '../../lib/routes'

export default function PreparedEnvironmentAndProgramsSection() {
  return (
    <section className="section-dark py-16 md:py-24 lg:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          <FadeUp className="flex flex-col gap-6">
            <p className="eyebrow">What you&apos;ll see grow</p>
            <h2 className="heading-xl">
              {homePreparedEnvironment.title}
              <br />
              <span className="headline-accent">every day.</span>
            </h2>
            <p className="body-md">{homePreparedEnvironment.description}</p>
            <TextLink to={homePreparedEnvironment.linkTo} className="!text-warm-cream/90 decoration-warm-cream/30 hover:!text-white">
              {homePreparedEnvironment.linkLabel}
            </TextLink>
            <div className="numbered-list-panel numbered-list-panel-dark mt-2">
              {programs.map((program, index) => (
                <div key={program.id} className="numbered-row">
                  <span className="numbered-index">{String(index + 1).padStart(2, '0')}</span>
                  <h3 className="heading-sm">{program.name}</h3>
                  <p className="body-sm italic font-display text-accent-rose">{program.shortDescription}</p>
                </div>
              ))}
            </div>
          </FadeUp>

          <div className="flex flex-col gap-6">
            <FadeUp delay={0.1}>
              <p className="eyebrow">{homePrograms.eyebrow}</p>
              <h2 className="heading-xl">
                Nursery &amp; pre-school programs
                <br />
                <span className="headline-accent">simply.</span>
              </h2>
              <p className="body-md mt-4">{homePrograms.description}</p>
            </FadeUp>

            <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-2" stagger={0.08}>
              {programs.map((program) => {
                const programTo = program.id === 'bloom' ? ROUTES.preschool : ROUTES.nursery
                return (
                  <StaggerItem key={program.id} className="program-card !bg-warm-cream/95 !text-dark-text">
                    <p className="program-age-label">{program.ageRange}</p>
                    <h3 className="heading-sm mt-2 text-deep-forest">
                      <Link to={programTo} className="transition-colors hover:text-accent-rose">
                        {program.name}
                      </Link>
                    </h3>
                    <p className="body-sm mt-2">{program.shortDescription}</p>
                  </StaggerItem>
                )
              })}
            </StaggerContainer>

            <FadeUp delay={0.2} className="overflow-hidden rounded-2xl">
              <img
                src={images.preparedEnvironment}
                alt={homePreparedEnvironment.imageAlt}
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </FadeUp>
          </div>
        </div>
      </Container>
    </section>
  )
}
