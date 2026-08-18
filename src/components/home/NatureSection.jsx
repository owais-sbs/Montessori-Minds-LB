import Container from '../layout/Container'
import { FadeUp } from '../animations'
import { images } from '../../data/images'
import { homeNature } from '../../data/home'

export default function NatureSection() {
  return (
    <section className="relative min-h-[420px] overflow-hidden py-20 md:min-h-[520px] md:py-28">
      <img
        src={images.nature}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-forest-green/60" aria-hidden="true" />
      <Container className="relative">
        <FadeUp className="mx-auto max-w-2xl text-center">
          <p className="eyebrow !text-warm-beige/80">{homeNature.eyebrow}</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-tight tracking-tight text-white">
            {homeNature.title}
          </h2>
          <p className="body-lg mt-6 text-warm-cream/90">{homeNature.description}</p>
        </FadeUp>
      </Container>
    </section>
  )
}
