import CreamHeroSection from '../components/sections/CreamHeroSection'
import CTASection from '../components/sections/CTASection'
import Container from '../components/layout/Container'
import { FadeUp } from '../components/animations'
import { siteFaqs } from '../data/faq'
import { ROUTES } from '../lib/routes'
import { contactPlaceholders } from '../data/contact'

export default function Faq() {
  return (
    <>
      <CreamHeroSection
        eyebrow="FAQ"
        title="Montessori Minds — Frequently asked questions"
        titleAccent="Clear answers for parents."
        description="Practical details about our Montessori approach, age groups, hours, location and enrollment at La Casa Verde in Choueifat."
      />

      <section className="bg-warm-cream py-14 md:py-20" aria-labelledby="faq-heading">
        <Container size="narrow">
          <FadeUp className="mb-10">
            <h2 id="faq-heading" className="heading-xl">
              Questions parents ask us
            </h2>
            <p className="body-md mt-4">
              Prefer to talk in person? Call{' '}
              <a href={contactPlaceholders.phoneTel} className="underline decoration-deep-forest/25 underline-offset-4 hover:text-accent-rose">
                {contactPlaceholders.phone}
              </a>{' '}
              or email {contactPlaceholders.email}.
            </p>
          </FadeUp>

          <div className="flex flex-col gap-8">
            {siteFaqs.map((item) => (
              <FadeUp key={item.id} as="article" className="border-b border-deep-forest/10 pb-8 last:border-b-0">
                <h3 className="heading-sm">{item.title}</h3>
                <p className="body-md mt-3 leading-relaxed">{item.body}</p>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="Next step"
        title="Still deciding?"
        titleAccent="Visit the classrooms."
        buttonLabel="Book a visit"
        buttonTo={ROUTES.bookATour}
        variant="beige"
      />
    </>
  )
}
