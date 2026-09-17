import PageHero from '../components/sections/PageHero'
import EditorialSection from '../components/approach/EditorialSection'
import CTASection from '../components/sections/CTASection'
import { nurseryPage } from '../data/nursery'
import usePageMeta from '../hooks/usePageMeta'
import { pageSeo } from '../lib/seo'

export default function Nursery() {
  usePageMeta(pageSeo.nursery)
  const { hero, sections, cta } = nurseryPage

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
