import Container from '../layout/Container'
import { FadeUp } from '../animations'

export default function PhotoQuoteSection({ image, text, source, alt = '' }) {
  return (
    <section className="relative min-h-[320px] overflow-hidden py-16 md:min-h-[400px] md:py-20">
      <img src={image} alt={alt} className="absolute inset-0 h-full w-full object-cover object-center" loading="lazy" />
      <div className="photo-overlay absolute inset-0" aria-hidden="true" />
      <Container className="relative">
        <FadeUp className="mx-auto flex max-w-2xl flex-col gap-5 text-left md:text-center">
          <blockquote className="quote-serif text-warm-cream">&ldquo;{text}&rdquo;</blockquote>
          <p className="quote-attribution">— {source}</p>
        </FadeUp>
      </Container>
    </section>
  )
}
