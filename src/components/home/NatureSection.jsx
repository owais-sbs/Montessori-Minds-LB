import Container from '../layout/Container'
import { Button } from '../ui'
import { FadeUp } from '../animations'
import { images } from '../../data/images'
import { homeNature } from '../../data/home'
import { ROUTES } from '../../lib/routes'

export default function NatureSection() {
  return (
    <section className="relative min-h-[440px] overflow-hidden py-20 md:min-h-[540px] md:py-28">
      <img
        src={images.nature}
        alt="Indoor plants and nature corner at La Casa Verde Montessori preschool"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="photo-overlay absolute inset-0" aria-hidden="true" />
      <Container className="relative">
        <FadeUp className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center text-warm-cream">
          <p className="eyebrow eyebrow-on-dark">{homeNature.eyebrow}</p>
          <h2 className="display-lg text-white">
            {homeNature.title}
            <br />
            <span className="headline-accent">outside.</span>
          </h2>
          <p className="body-lg !text-warm-cream/88">{homeNature.description}</p>
          <Button to={ROUTES.gallery} variant="onPhoto">
            See school life
          </Button>
        </FadeUp>
      </Container>
    </section>
  )
}
