import PageHero from '../components/sections/PageHero'
import EditorialSection from '../components/approach/EditorialSection'
import BookTourCTASection from '../components/home/BookTourCTASection'
import { approachHero, approachSections } from '../data/approach'

export default function OurApproach() {
  return (
    <>
      <PageHero {...approachHero} imageAlt="Montessori learning environment at Montessori Minds LB" />
      {approachSections.map((section, index) => (
        <EditorialSection key={section.id} section={section} index={index} />
      ))}
      <BookTourCTASection />
    </>
  )
}
