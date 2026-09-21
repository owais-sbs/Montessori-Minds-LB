import Container from '../layout/Container'
import { Button } from '../ui'
import { FadeUp, StaggerContainer, StaggerItem } from '../animations'
import CreamHeroSection from '../sections/CreamHeroSection'
import PhotoQuoteSection from '../sections/PhotoQuoteSection'
import Accordion from '../ui/Accordion'
import CTASection from '../sections/CTASection'
import { approachPageContent } from '../../data/sitePages'
import { ROUTES } from '../../lib/routes'

export default function OurApproachPageContent() {
  const c = approachPageContent

  return (
    <>
      <CreamHeroSection {...c.hero} />
      <PhotoQuoteSection {...c.openingQuote} alt="Montessori classroom at Montessori Minds in Choueifat" />

      <section className="section-dark py-14 md:py-24">
        <Container>
          <FadeUp className="mb-8 max-w-xl text-left">
            <p className="eyebrow">{c.sixtySeconds.eyebrow}</p>
            <h2 className="heading-xl mt-3">
              {c.sixtySeconds.title}
              <br />
              <span className="headline-accent">{c.sixtySeconds.titleAccent}</span>
            </h2>
          </FadeUp>
          <StaggerContainer className="flex flex-col gap-3" stagger={0.12}>
            {c.sixtySeconds.concepts.map((item, index) => (
              <StaggerItem
                key={item.label}
                className="rounded-2xl border border-warm-cream/12 bg-warm-cream/5 px-5 py-5"
              >
                <p className="numbered-index">{String(index + 1).padStart(2, '0')}</p>
                <p className="heading-sm mt-2">{item.label}</p>
                <p className="body-sm mt-2">{item.detail}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      <section className="bg-warm-cream py-14 md:py-24">
        <Container>
          <FadeUp className="mb-8 text-left">
            <p className="eyebrow">Six learning areas</p>
            <h2 className="heading-xl mt-3 text-deep-forest">What children experience every day.</h2>
          </FadeUp>
          <StaggerContainer className="grid gap-4 md:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
            {c.learningAreas.map((area) => (
              <StaggerItem key={area.name} className="program-card">
                <p className="program-age-label">{area.name}</p>
                <p className="body-sm mt-3">{area.description}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      <section className="section-dark py-14 md:py-24">
        <Container>
          <FadeUp className="mb-8 max-w-xl text-left">
            <p className="eyebrow">{c.comparison.eyebrow}</p>
            <h2 className="heading-xl mt-3">
              {c.comparison.title}
              <br />
              <span className="headline-accent">{c.comparison.titleAccent}</span>
            </h2>
          </FadeUp>
          <StaggerContainer className="numbered-list-panel numbered-list-panel-dark" stagger={0.1}>
            {c.comparison.pairs.map((pair) => (
              <StaggerItem key={pair.instead}>
                <div className="numbered-row space-y-2 md:grid md:grid-cols-2 md:gap-6 md:space-y-0">
                  <p className="body-sm">{pair.instead}</p>
                  <p className="body-sm text-accent-rose">{pair.encourages}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      <section className="bg-warm-cream py-14 md:py-24">
        <Container>
          <FadeUp className="mb-8 max-w-xl text-left">
            <p className="eyebrow">Montessori myths</p>
            <h2 className="heading-xl mt-3 text-deep-forest">Questions parents ask us.</h2>
          </FadeUp>
          <Accordion items={c.myths} />
        </Container>
      </section>

      <PhotoQuoteSection
        image={approachPageContent.openingQuote.image}
        text={c.practicalLifeQuote.text}
        source={c.practicalLifeQuote.source}
      />

      <CTASection
        eyebrow="Visit us"
        title="Experience Montessori in person."
        titleAccent="Book your visit."
        description="The best way to understand our approach is to see it with your own eyes."
        buttonLabel="Book a visit"
        buttonTo={ROUTES.bookATour}
        variant="cream"
      />
    </>
  )
}
