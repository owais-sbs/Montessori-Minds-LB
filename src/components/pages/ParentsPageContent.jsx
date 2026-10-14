import Container from '../layout/Container'
import CreamHeroSection from '../sections/CreamHeroSection'
import Accordion from '../ui/Accordion'
import CTASection from '../sections/CTASection'
import MontessoriQuote from '../ui/MontessoriQuote'
import { FadeUp, StaggerContainer, StaggerItem } from '../animations'
import { parentsPageContent } from '../../data/sitePages'
import { ROUTES } from '../../lib/routes'

export default function ParentsPageContent() {
  const c = parentsPageContent

  return (
    <>
      <CreamHeroSection {...c.hero} />

      <section className="section-dark py-14 md:py-24">
        <Container>
          <FadeUp className="mb-8 text-left">
            <p className="eyebrow">Your journey</p>
            <h2 className="heading-xl mt-3">Five steps to feeling ready.</h2>
          </FadeUp>
          <StaggerContainer className="overflow-hidden rounded-2xl border border-warm-cream/15" stagger={0.14}>
            {c.journey.map((step, index) => (
              <StaggerItem key={step.title}>
                <div className={`px-5 py-6 ${index < c.journey.length - 1 ? 'border-b border-warm-cream/12' : ''}`}>
                  <p className="numbered-index">{String(index + 1).padStart(2, '0')}</p>
                  <h3 className="heading-sm mt-2">{step.title}</h3>
                  <p className="body-sm mt-2">{step.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      <section className="bg-warm-beige py-14 md:py-20">
        <Container size="narrow">
          <FadeUp>
            <h2 className="heading-xl">What to prepare for your visit</h2>
            <p className="body-md mt-3">
              Bring notes, not a perfect plan. These points help Guides place your child faster.
            </p>
            <ul className="body-md mt-6 list-disc space-y-2 pl-5 text-muted-text">
              <li>Child’s date of birth and preferred start window</li>
              <li>Current sleep and meal routines</li>
              <li>Languages spoken at home</li>
              <li>Questions about hours (Mon–Fri, 8:00 AM–4:00 PM) and settling-in</li>
              <li>Whether you are comparing nursery, toddler or Children’s House placement</li>
            </ul>
          </FadeUp>
        </Container>
      </section>

      <section className="bg-warm-cream py-14 md:py-24">
        <Container>
          <FadeUp className="mb-8 text-left">
            <p className="eyebrow">FAQs &amp; policies</p>
            <h2 className="heading-xl mt-3 text-deep-forest">Answers when you need them.</h2>
          </FadeUp>
          <Accordion items={c.faqs} />
        </Container>
      </section>

      <section className="section-dark py-14 md:py-24">
        <Container>
          <FadeUp className="mb-8 text-left">
            <p className="eyebrow">Montessori at home</p>
            <h2 className="heading-xl mt-3">Small habits, big independence.</h2>
          </FadeUp>
          <StaggerContainer className="flex flex-col gap-3" stagger={0.12}>
            {c.homeTips.map((tip) => (
              <StaggerItem key={tip.title} className="rounded-2xl border border-warm-cream/12 bg-warm-cream/5 px-5 py-5">
                <h3 className="heading-sm">{tip.title}</h3>
                <p className="body-sm mt-2">{tip.description}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <MontessoriQuote dark className="mt-10 max-w-xl text-left" text={c.quote.text} source={c.quote.source} />
        </Container>
      </section>

      <CTASection
        eyebrow="Apply"
        title="Ready for the next step?"
        buttonLabel="Start application"
        buttonTo={ROUTES.admission}
        variant="cream"
      />
    </>
  )
}
