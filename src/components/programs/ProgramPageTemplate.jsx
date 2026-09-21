import Container from '../layout/Container'
import Accordion from '../ui/Accordion'
import CTASection from '../sections/CTASection'
import { FadeUp, StaggerContainer, StaggerItem } from '../animations'
import { ROUTES } from '../../lib/routes'

export default function ProgramPageTemplate({ content, titleAs = 'h2' }) {
  const TitleTag = titleAs

  return (
    <>
      <section className="relative overflow-hidden bg-warm-cream pt-6 pb-10 md:pb-14">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <FadeUp x={-24} className="max-w-lg text-left">
              <p className="eyebrow">{content.hero.eyebrow}</p>
              <p className="program-age-label mt-3">{content.hero.ageRange}</p>
              <TitleTag className="mt-3 font-display text-[clamp(1.75rem,4vw,2.65rem)] font-normal leading-[1.08] text-deep-forest">
                {content.hero.title}
                <br />
                <span className="headline-accent">{content.hero.titleAccent}</span>
              </TitleTag>
              <p className="body-md mt-4">{content.hero.description}</p>
            </FadeUp>
            <FadeUp delay={0.1} className="overflow-hidden rounded-2xl">
              <img
                src={content.hero.image}
                alt={content.hero.imageAlt || content.hero.eyebrow}
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </FadeUp>
          </div>
        </Container>
      </section>

      <section className="section-dark py-14 md:py-20">
        <Container size="narrow">
          <FadeUp x={-20} className="text-left">
            <p className="eyebrow">Understanding this age</p>
            <h2 className="heading-xl mt-3">{content.understanding.title}</h2>
            <p className="body-md mt-4 leading-relaxed">{content.understanding.body}</p>
          </FadeUp>
        </Container>
      </section>

      <section className="bg-warm-cream py-14 md:py-20">
        <Container>
          <FadeUp className="mb-8 text-left">
            <p className="eyebrow">Inside their world</p>
            <h2 className="heading-xl mt-3 text-deep-forest">{content.inside.title}</h2>
          </FadeUp>
          <StaggerContainer className="grid gap-3 md:grid-cols-2" stagger={0.1}>
            {content.inside.items.map((item) => (
              <StaggerItem key={item} className="program-card">
                <h3 className="body-sm font-medium text-deep-forest">{item}</h3>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      <section className="section-dark py-14 md:py-20">
        <Container>
          <FadeUp className="mb-8 text-left">
            <p className="eyebrow">What they are developing</p>
            <h2 className="heading-xl mt-3">Growth you can observe.</h2>
          </FadeUp>
          <StaggerContainer className="overflow-hidden rounded-2xl border border-warm-cream/15" stagger={0.12}>
            {content.developing.map((item, index) => (
              <StaggerItem key={item.title}>
                <div className={`px-5 py-5 ${index < content.developing.length - 1 ? 'border-b border-warm-cream/12' : ''}`}>
                  <h3 className="heading-sm">{item.title}</h3>
                  <p className="body-sm mt-2">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      <section className="bg-warm-cream py-14 md:py-20">
        <Container>
          <FadeUp className="mb-8 text-left">
            <p className="eyebrow">Typical day</p>
            <h2 className="heading-xl mt-3 text-deep-forest">Rhythm and purpose.</h2>
          </FadeUp>
          <StaggerContainer className="numbered-list-panel" stagger={0.1}>
            {content.typicalDay.map((moment, index) => (
              <StaggerItem key={moment.time}>
                <div className="numbered-row">
                  <span className="numbered-index">{String(index + 1).padStart(2, '0')}</span>
                  <h3 className="heading-sm text-deep-forest">{moment.time}</h3>
                  <p className="body-sm">{moment.detail}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      <section className="section-dark py-14 md:py-20">
        <Container>
          <FadeUp className="mb-8 text-left">
            <p className="eyebrow">Environment</p>
            <h2 className="heading-xl mt-3">Prepared for this age.</h2>
          </FadeUp>
          <StaggerContainer className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
            {content.gallery.map((src, i) => (
              <StaggerItem key={src} className="overflow-hidden rounded-2xl">
                <img
                  src={src}
                  alt={`${content.hero.eyebrow} — Montessori environment photo ${i + 1} at Montessori Minds, Choueifat`}
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      <section className="bg-warm-cream py-14 md:py-20">
        <Container size="narrow">
          <FadeUp className="mb-8 text-left">
            <p className="eyebrow">Parent questions</p>
            <h2 className="heading-xl mt-3 text-deep-forest">What families ask us.</h2>
          </FadeUp>
          <Accordion items={content.faqs} />
        </Container>
      </section>

      <CTASection
        eyebrow="Visit"
        title="Ready to see it for yourself?"
        titleAccent="Book your visit."
        description={content.ctaDescription}
        buttonLabel="Book a visit"
        buttonTo={ROUTES.bookATour}
        variant="cream"
      />
    </>
  )
}
