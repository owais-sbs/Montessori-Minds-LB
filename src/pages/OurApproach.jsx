import PageHero from '../components/sections/PageHero'
import EditorialSection from '../components/approach/EditorialSection'
import BookTourCTASection from '../components/home/BookTourCTASection'
import { approachHero, approachSections } from '../data/approach'
import usePageMeta from '../hooks/usePageMeta'
import { pageSeo } from '../lib/seo'

export default function OurApproach() {
  usePageMeta(pageSeo.ourApproach)

  return (
    <>
      <PageHero {...approachHero} imageAlt="Our Montessori classroom at La Casa Verde" />
      {approachSections.map((section, index) => (
        <EditorialSection key={section.id} section={section} index={index} />
      ))}
      <BookTourCTASection />
    </>
  )
}
