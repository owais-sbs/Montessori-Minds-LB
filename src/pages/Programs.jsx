import { Link } from 'react-router-dom'
import HomeProgramsSection from '../components/home/HomeProgramsSection'
import CTASection from '../components/sections/CTASection'
import CreamHeroSection from '../components/sections/CreamHeroSection'
import Container from '../components/layout/Container'
import { FadeUp } from '../components/animations'
import { ROUTES } from '../lib/routes'
import { homeProgramsBrief } from '../data/homeBrief'
import { contactPlaceholders } from '../data/contact'

const scheduleRows = [
  { time: 'Morning arrival', detail: 'Warm greeting and connection with Guides' },
  { time: 'Work cycle', detail: 'Independent or small-group Montessori work' },
  { time: 'Practical life', detail: 'Pouring, preparing, cleaning, caring for the room' },
  { time: 'Language & discovery', detail: 'Conversation, stories, vocabulary' },
  { time: 'Outdoors', detail: 'Movement, nature and observation' },
  { time: 'Meals & rest', detail: 'Community care adapted to age and need' },
  { time: 'Home time', detail: 'Calm handoff to families' },
]

export default function Programs() {
  return (
    <>
      <CreamHeroSection
        eyebrow="Programs"
        title="Montessori Minds — Programs"
        titleAccent="Infant, toddler and Children’s House pathways."
        description="Three Montessori communities on one Choueifat campus. Compare age ranges, then visit to see which classroom fits your child."
      />

      <section className="bg-warm-cream py-14 md:py-20" aria-labelledby="curriculum-heading">
        <Container>
          <FadeUp className="mx-auto max-w-2xl text-left md:text-center">
            <h2 id="curriculum-heading" className="heading-xl">
              Our Montessori Curriculum
            </h2>
            <p className="body-md mt-4">
              Each community follows Montessori practice: a prepared environment, hands-on materials,
              freedom within limits, and Guides who observe before they intervene. Hours are{' '}
              {contactPlaceholders.hours} at {contactPlaceholders.address}.
            </p>
          </FadeUp>

          <div className="mt-12 overflow-x-auto rounded-2xl border border-deep-forest/10 bg-white">
            <table className="w-full min-w-[32rem] text-left text-sm">
              <caption className="sr-only">Montessori Minds program age groups and pathways</caption>
              <thead className="bg-warm-beige/80 font-body text-xs uppercase tracking-[0.12em] text-muted-text">
                <tr>
                  <th scope="col" className="px-4 py-3 sm:px-5">
                    Program
                  </th>
                  <th scope="col" className="px-4 py-3 sm:px-5">
                    Age range
                  </th>
                  <th scope="col" className="px-4 py-3 sm:px-5">
                    Focus
                  </th>
                </tr>
              </thead>
              <tbody>
                {homeProgramsBrief.programs.map((program) => (
                  <tr key={program.name} className="border-t border-deep-forest/8">
                    <th scope="row" className="px-4 py-4 font-display text-base font-medium text-deep-forest sm:px-5">
                      <Link to={program.to} className="hover:text-accent-rose">
                        {program.name}
                        {program.altName ? ` (${program.altName})` : ''}
                      </Link>
                    </th>
                    <td className="px-4 py-4 text-muted-text sm:px-5">{program.ageRange}</td>
                    <td className="px-4 py-4 text-muted-text sm:px-5">{program.positioning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <section className="bg-warm-beige py-14 md:py-20">
        <Container>
          <FadeUp className="mb-8 max-w-xl">
            <h2 className="heading-xl">Classroom communities</h2>
            <p className="body-md mt-3">What children meet in each room.</p>
          </FadeUp>
          <div className="grid gap-8 md:grid-cols-3">
            <article className="rounded-2xl bg-warm-cream p-6">
              <h3 className="heading-sm">Early Childhood Classroom (Ages 3–6)</h3>
              <p className="body-sm mt-3">
                Children’s House: mixed ages, long work cycles and Montessori materials across
                practical life, sensorial, language, mathematics and culture.
              </p>
              <ul className="body-sm mt-4 list-disc space-y-2 pl-5 text-muted-text">
                <li>Uninterrupted morning work</li>
                <li>Peer mentoring across ages</li>
                <li>Outdoor exploration daily</li>
              </ul>
              <Link to={ROUTES.preschool} className="mt-4 inline-block text-xs font-medium uppercase tracking-[0.14em] underline underline-offset-4">
                Pre-school details →
              </Link>
            </article>
            <article className="rounded-2xl bg-warm-cream p-6">
              <h3 className="heading-sm">Toddler Community (18 months–3 years)</h3>
              <p className="body-sm mt-3">
                Movement, repetition and real tasks — pouring, dressing, language and outdoor play.
              </p>
              <ul className="body-sm mt-4 list-disc space-y-2 pl-5 text-muted-text">
                <li>Practical life every day</li>
                <li>Sensorial exploration</li>
                <li>Grace and courtesy in a small group</li>
              </ul>
              <Link to={ROUTES.nursery} className="mt-4 inline-block text-xs font-medium uppercase tracking-[0.14em] underline underline-offset-4">
                Nursery / toddler details →
              </Link>
            </article>
            <article className="rounded-2xl bg-warm-cream p-6">
              <h3 className="heading-sm">Infant Community (Birth–18 months)</h3>
              <p className="body-sm mt-3">
                Nido care with close observation, safe movement and rich spoken language at the child’s rhythm.
              </p>
              <ul className="body-sm mt-4 list-disc space-y-2 pl-5 text-muted-text">
                <li>Individualized care routines</li>
                <li>Calm sensory environment</li>
                <li>Secure attachment with Guides</li>
              </ul>
              <Link to={ROUTES.nursery} className="mt-4 inline-block text-xs font-medium uppercase tracking-[0.14em] underline underline-offset-4">
                Infant pathway →
              </Link>
            </article>
          </div>
        </Container>
      </section>

      <section className="bg-warm-cream py-14 md:py-20">
        <Container size="narrow">
          <FadeUp>
            <h2 className="heading-xl">A typical day (overview)</h2>
            <p className="body-md mt-3">
              Exact timing varies by community. This outline shows the rhythm families can expect.
            </p>
            <ul className="mt-8 divide-y divide-deep-forest/10 rounded-2xl border border-deep-forest/10 bg-white">
              {scheduleRows.map((row) => (
                <li key={row.time} className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-baseline sm:gap-6">
                  <span className="shrink-0 font-body text-xs font-medium uppercase tracking-[0.12em] text-accent-rose sm:w-44">
                    {row.time}
                  </span>
                  <span className="body-sm">{row.detail}</span>
                </li>
              ))}
            </ul>
            <p className="body-sm mt-6">
              Tuition and fee details are shared during admissions — start with a{' '}
              <Link to={ROUTES.bookATour} className="underline underline-offset-4 hover:text-accent-rose">
                campus visit
              </Link>{' '}
              or read our{' '}
              <Link to={ROUTES.faq} className="underline underline-offset-4 hover:text-accent-rose">
                FAQ
              </Link>
              .
            </p>
          </FadeUp>
        </Container>
      </section>

      <HomeProgramsSection />

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
