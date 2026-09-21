import Container from '../layout/Container'
import MontessoriQuote from '../ui/MontessoriQuote'
import { FadeUp, StaggerContainer, StaggerItem } from '../animations'
import { ourPeopleSection } from '../../data/homeBrief'

export default function OurPeopleSection() {
  return (
    <section className="section-dark py-14 md:py-24">
      <Container>
        <FadeUp className="mx-auto max-w-2xl text-left md:text-center">
          <p className="eyebrow">{ourPeopleSection.eyebrow}</p>
          <h2 className="heading-xl mt-3 text-[clamp(1.5rem,4vw,2.25rem)]">{ourPeopleSection.title}</h2>
        </FadeUp>

        <StaggerContainer className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.14}>
          {ourPeopleSection.team.map((person) => (
            <StaggerItem
              key={`${person.role}-${person.image}`}
              className="overflow-hidden rounded-2xl border border-warm-cream/12 bg-warm-cream/5"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={person.image}
                  alt=""
                  className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.03] motion-reduce:transform-none"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <p className="program-age-label !text-accent-rose">{person.role}</p>
                <h3 className="heading-sm mt-2">{person.name}</h3>
                <p className="body-sm mt-2">{person.note}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <MontessoriQuote
          dark
          className="mx-auto mt-12 max-w-2xl text-left md:text-center"
          text={ourPeopleSection.quote.text}
          source={ourPeopleSection.quote.source}
        />
      </Container>
    </section>
  )
}
