import { Link } from 'react-router-dom'
import Container from '../layout/Container'
import Accordion from '../ui/Accordion'
import CreamHeroSection from '../sections/CreamHeroSection'
import PhotoQuoteSection from '../sections/PhotoQuoteSection'
import CTASection from '../sections/CTASection'
import { FadeUp, StaggerContainer, StaggerItem } from '../animations'
import { laCasaVerdePageContent } from '../../data/sitePages'
import { ROUTES } from '../../lib/routes'

export default function AboutPageContent() {
  const c = laCasaVerdePageContent

  return (
    <>
      <CreamHeroSection {...c.hero} />
      <section className="bg-warm-cream py-14 md:py-20">
        <Container size="narrow">
          <FadeUp x={-20} className="flex flex-col gap-5 text-left">
            <p className="body-lg">{c.intro}</p>
            <p className="body-md leading-relaxed">
              {c.purpose} Explore our{' '}
              <Link to={ROUTES.nursery} className="underline decoration-deep-forest/25 underline-offset-4 hover:text-accent-rose">
                Montessori nursery
              </Link>{' '}
              and{' '}
              <Link to={ROUTES.preschool} className="underline decoration-deep-forest/25 underline-offset-4 hover:text-accent-rose">
                pre-school in Choueifat
              </Link>
              .
            </p>
            <p className="body-md leading-relaxed">{c.founderStory}</p>
          </FadeUp>
          <FadeUp delay={0.12} className="mt-8 flex flex-wrap gap-2">
            {c.values.map((value) => (
              <span
                key={value}
                className="rounded-full border border-accent-rose/30 bg-white/70 px-4 py-2 font-body text-xs font-medium uppercase tracking-[0.12em] text-deep-forest"
              >
                {value}
              </span>
            ))}
          </FadeUp>
        </Container>
      </section>

      <section className="section-dark py-14 md:py-24">
        <Container>
          <FadeUp className="mb-8 text-left">
            <p className="eyebrow">Guides & leadership</p>
            <h2 className="heading-xl mt-3">The adults who will know your child.</h2>
          </FadeUp>
          <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.14}>
            {c.team.map((person) => (
              <StaggerItem key={person.image} className="overflow-hidden rounded-2xl border border-warm-cream/12 bg-warm-cream/5">
                <img
                  src={person.image}
                  alt={person.imageAlt || person.role}
                  className="aspect-[4/5] w-full object-cover"
                  loading="lazy"
                />
                <div className="p-5">
                  <p className="program-age-label !text-accent-rose">{person.role}</p>
                <h3 className="heading-sm mt-2">{person.name}</h3>
                  <p className="body-sm mt-2 italic">&ldquo;{person.quote}&rdquo;</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      <PhotoQuoteSection {...c.quote} alt="Nature-based learning at La Casa Verde by Montessori Minds" />
      <CTASection
        eyebrow="Visit"
        title="Tour La Casa Verde by Montessori Minds."
        buttonLabel="Book a visit"
        buttonTo={ROUTES.bookATour}
        variant="cream"
      />
    </>
  )
}
