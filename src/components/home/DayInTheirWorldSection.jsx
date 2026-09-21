import Container from '../layout/Container'
import MontessoriQuote from '../ui/MontessoriQuote'
import { FadeUp, StaggerContainer, StaggerItem } from '../animations'
import { dayInTheirWorld } from '../../data/homeBrief'

export default function DayInTheirWorldSection() {
  return (
    <section className="section-dark py-16 md:py-24">
      <Container>
        <FadeUp className="mx-auto mb-10 max-w-2xl text-center">
          <p className="eyebrow">{dayInTheirWorld.eyebrow}</p>
          <h2 className="heading-xl mt-3">
            {dayInTheirWorld.title}
            <br />
            <span className="headline-accent">{dayInTheirWorld.titleAccent}</span>
          </h2>
        </FadeUp>

        <StaggerContainer className="numbered-list-panel numbered-list-panel-dark max-w-3xl mx-auto" stagger={0.06}>
          {dayInTheirWorld.moments.map((moment, index) => (
            <StaggerItem key={moment.time}>
              <div className="numbered-row md:grid md:grid-cols-[1.1fr_1fr_1.2fr] md:gap-4 md:items-start">
                <div>
                  <span className="numbered-index">{String(index + 1).padStart(2, '0')}</span>
                  <h3 className="heading-sm mt-1">{moment.time}</h3>
                </div>
                <p className="body-sm italic font-display text-accent-rose">&ldquo;{moment.childVoice}&rdquo;</p>
                <p className="body-sm">{moment.experience}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeUp className="mx-auto mt-10 max-w-xl text-center">
          <p className="body-lg">{dayInTheirWorld.closing}</p>
        </FadeUp>

        <MontessoriQuote
          dark
          className="mx-auto mt-12 max-w-xl text-center"
          text={dayInTheirWorld.quote.text}
          source={dayInTheirWorld.quote.source}
        />
      </Container>
    </section>
  )
}
