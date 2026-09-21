import Container from '../layout/Container'
import { Button } from '../ui'
import { FadeUp } from '../animations'
import { contactPlaceholders } from '../../data/contact'
import { finalConversion } from '../../data/homeBrief'

export default function FinalConversionSection() {
  const whatsappHref = `https://wa.me/${contactPlaceholders.phoneRaw.replace(/\D/g, '')}`

  return (
    <section className="bg-warm-cream py-16 md:py-24">
      <Container>
        <FadeUp className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <p className="eyebrow">{finalConversion.eyebrow}</p>
          <h2 className="heading-xl text-deep-forest">
            {finalConversion.title}
            <br />
            <span className="headline-accent">{finalConversion.titleAccent}</span>
          </h2>
          <p className="body-lg">{finalConversion.description}</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button to={finalConversion.primaryCta.to} variant="primary">
              {finalConversion.primaryCta.label}
            </Button>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 border-b border-deep-forest/30 pb-0.5 font-body text-sm font-medium text-deep-forest underline-offset-4 transition-colors hover:border-accent-rose hover:text-accent-rose"
            >
              {finalConversion.whatsappLabel}
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </FadeUp>
      </Container>
    </section>
  )
}
