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
      <PageHero {...approachHero} imageAlt="Montessori education and early learning at Montessori Minds in Choueifat" />
      {approachSections.map((section, index) => (
        <EditorialSection key={section.id} section={section} index={index} />
      ))}
      <BookTourCTASection />
    </>
  )
}
