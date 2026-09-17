import PageHero from '../components/sections/PageHero'
import EditorialSection from '../components/approach/EditorialSection'
import CTASection from '../components/sections/CTASection'
import { laCasaVerdePage } from '../data/laCasaVerde'
import usePageMeta from '../hooks/usePageMeta'
import { pageSeo } from '../lib/seo'

export default function LaCasaVerde() {
  usePageMeta(pageSeo.laCasaVerde)
  const { hero, sections, cta } = laCasaVerdePage

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
        image={hero.image}
        imageAlt={hero.imageAlt}
      />
      {sections.map((section, index) => (
        <EditorialSection key={section.id} section={section} index={index} />
      ))}
      <CTASection
        eyebrow={cta.eyebrow}
        title={cta.title}
        description={cta.description}
        buttonLabel={cta.buttonLabel}
        buttonTo={cta.buttonTo}
        variant="beige"
      />
    </>
  )
}
