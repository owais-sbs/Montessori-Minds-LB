import { Link } from 'react-router-dom'
import Container from '../layout/Container'
import CreamHeroSection from '../sections/CreamHeroSection'
import PhotoQuoteSection from '../sections/PhotoQuoteSection'
import CTASection from '../sections/CTASection'
import { FadeUp, StaggerContainer, StaggerItem } from '../animations'
import { laCasaVerdePageContent } from '../../data/sitePages'
import { ROUTES } from '../../lib/routes'
import { contactPlaceholders } from '../../data/contact'

export default function AboutPageContent() {
  const c = laCasaVerdePageContent
  const nap = c.nap

  return (
    <>
      <CreamHeroSection {...c.hero} />
      <section className="bg-warm-cream py-14 md:py-20">
        <Container size="narrow">
          <FadeUp x={-20} className="flex flex-col gap-5 text-left">
            <p className="body-lg">{c.intro}</p>
            <h2 className="heading-xl mt-4">Our mission</h2>
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
            <h2 className="heading-xl mt-6">School history</h2>
            <p className="body-md leading-relaxed">{c.history}</p>
            <h2 className="heading-xl mt-6">Founding story</h2>
            <p className="body-md leading-relaxed">{c.founderStory}</p>
            <h2 className="heading-xl mt-6">Teacher training &amp; certifications</h2>
            <p className="body-md leading-relaxed">{c.certifications}</p>
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

      <section className="bg-warm-beige py-14 md:py-20" aria-labelledby="nap-heading">
        <Container size="narrow">
          <FadeUp>
            <h2 id="nap-heading" className="heading-xl">
              Visit us — name, address &amp; phone
            </h2>
            <p className="body-md mt-4">
              Use this NAP block when updating Google Business Profile or directory listings so
              citations stay consistent.
            </p>
            <ul className="body-md mt-6 list-none space-y-3 rounded-2xl border border-deep-forest/10 bg-white p-6">
              <li>
                <span className="font-medium text-deep-forest">Name:</span> {nap.name} ({nap.legalName})
              </li>
              <li>
                <span className="font-medium text-deep-forest">Address:</span> {nap.address}
              </li>
              <li>
                <span className="font-medium text-deep-forest">Phone:</span>{' '}
                <a href={contactPlaceholders.phoneTel} className="underline underline-offset-4 hover:text-accent-rose">
                  {nap.phone}
                </a>
              </li>
              <li>
                <span className="font-medium text-deep-forest">Email:</span>{' '}
                <a href={`mailto:${nap.email}`} className="underline underline-offset-4 hover:text-accent-rose">
                  {nap.email}
                </a>
              </li>
              <li>
                <span className="font-medium text-deep-forest">Hours:</span> {nap.hours}
              </li>
            </ul>
          </FadeUp>
        </Container>
      </section>

      <section className="section-dark py-14 md:py-24">
        <Container>
          <FadeUp className="mb-8 text-left">
            <p className="eyebrow">Guides &amp; leadership</p>
            <h2 className="heading-xl mt-3">The adults who will know your child.</h2>
            <p className="body-md mt-4 max-w-2xl !text-warm-cream/85">
              Quotes below reflect classroom practice at Montessori Minds. Named Guide biographies
              will replace role titles once approved for publication.
            </p>
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
