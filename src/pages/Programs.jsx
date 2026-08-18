import PageHero from '../components/sections/PageHero'
import ProgramDetail, { ProgramsOverview } from '../components/programs/ProgramDetail'
import CTASection from '../components/sections/CTASection'
import { programs, programsPage } from '../data/programs'
import { images } from '../data/images'
import { ROUTES } from '../lib/routes'

export default function Programs() {
  return (
    <>
      <PageHero
        eyebrow={programsPage.hero.eyebrow}
        title={programsPage.hero.title}
        description={programsPage.hero.description}
        image={images.classroom}
        imageAlt={programsPage.hero.imageAlt}
      />
      <ProgramsOverview />
      {programs.map((program, index) => (
        <ProgramDetail key={program.id} program={program} index={index} />
      ))}
      <CTASection
        eyebrow={programsPage.admissionCta.eyebrow}
        title={programsPage.admissionCta.title}
        description={programsPage.admissionCta.description}
        buttonLabel={programsPage.admissionCta.buttonLabel}
        buttonTo={ROUTES.admission}
        variant="cream"
      />
      <CTASection
        eyebrow={programsPage.tourCta.eyebrow}
        title={programsPage.tourCta.title}
        description={programsPage.tourCta.description}
        buttonLabel={programsPage.tourCta.buttonLabel}
        buttonTo={ROUTES.bookATour}
        variant="beige"
      />
    </>
  )
}
