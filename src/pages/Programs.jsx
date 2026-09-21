import { Link } from 'react-router-dom'
import HomeProgramsSection from '../components/home/HomeProgramsSection'
import CTASection from '../components/sections/CTASection'
import CreamHeroSection from '../components/sections/CreamHeroSection'
import Container from '../components/layout/Container'
import { FadeUp } from '../components/animations'
import { ROUTES } from '../lib/routes'

export default function Programs() {
  return (
    <>
      <CreamHeroSection
        eyebrow="Programs"
        title="A place for every stage of becoming."
        titleAccent="Choose the path that fits your child."
        description="Compare Infant Community, Toddler Community and Children's House — then visit our Montessori nursery or pre-school in Choueifat."
      />
      <HomeProgramsSection />
      <section className="bg-warm-beige py-10 md:py-12">
        <Container size="narrow">
          <FadeUp className="body-md text-center">
            <Link to={ROUTES.nursery} className="underline decoration-deep-forest/25 underline-offset-4 hover:text-accent-rose">
              Montessori nursery in Choueifat
            </Link>
            {' · '}
            <Link to={ROUTES.preschool} className="underline decoration-deep-forest/25 underline-offset-4 hover:text-accent-rose">
              Montessori pre-school in Choueifat
            </Link>
            {' · '}
            <Link to={ROUTES.laCasaVerde} className="underline decoration-deep-forest/25 underline-offset-4 hover:text-accent-rose">
              La Casa Verde by Montessori Minds
            </Link>
          </FadeUp>
        </Container>
      </section>
      <CTASection
        eyebrow="Visit"
        title="Compare programs in person."
        titleAccent="Book your visit."
        buttonLabel="Book a visit"
        buttonTo={ROUTES.bookATour}
        variant="cream"
      />
    </>
  )
}
