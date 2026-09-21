import Container from '../layout/Container'
import CreamHeroSection from '../sections/CreamHeroSection'
import { FadeUp, StaggerContainer, StaggerItem } from '../animations'
import { environmentPageContent } from '../../data/sitePages'
import { images } from '../../data/images'
import CTASection from '../sections/CTASection'
import { ROUTES } from '../../lib/routes'

export default function EnvironmentPageContent() {
  const c = environmentPageContent

  return (
    <>
      <CreamHeroSection {...c.hero} />

      <StaggerContainer className="flex flex-col" stagger={0.12}>
        {c.sections.map((block, index) => (
          <StaggerItem key={block.eyebrow}>
            <section className={`relative min-h-[280px] overflow-hidden sm:min-h-[360px] ${index % 2 === 1 ? 'section-dark' : ''}`}>
              <img src={block.image} alt={block.imageAlt || block.caption} className="absolute inset-0 h-full w-full object-cover object-center" loading="lazy" />
              <div className="photo-overlay absolute inset-0" aria-hidden="true" />
              <Container className="relative flex min-h-[inherit] items-end py-10">
                <FadeUp className="max-w-md pb-2 text-warm-cream">
                  <p className="eyebrow eyebrow-on-dark">{block.eyebrow}</p>
                  <p className="mt-3 font-display text-[clamp(1.35rem,4vw,1.85rem)] leading-snug">{block.caption}</p>
                </FadeUp>
              </Container>
            </section>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <section className="relative min-h-[240px] overflow-hidden bg-deep-forest py-16">
        <img src={images.hero} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" loading="lazy" />
        <Container className="relative">
          <FadeUp className="max-w-lg text-warm-cream">
            <p className="eyebrow eyebrow-on-dark">{c.tourPlaceholder.eyebrow}</p>
            <h2 className="heading-xl mt-3">
              {c.tourPlaceholder.title}
              <br />
              <span className="headline-accent">{c.tourPlaceholder.titleAccent}</span>
            </h2>
            <p className="body-md mt-4">{c.tourPlaceholder.description}</p>
          </FadeUp>
        </Container>
      </section>

      <CTASection
        eyebrow="Visit"
        title="Explore our environment in person."
        buttonLabel="Book a visit"
        buttonTo={ROUTES.bookATour}
        variant="cream"
      />
    </>
  )
}
