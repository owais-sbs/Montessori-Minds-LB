import Container from '../layout/Container'
import { FadeUp, ImageReveal } from '../animations'

export default function PageHero({ eyebrow, title, description, image, imageAlt, titleAccent }) {
  return (
    <section className="bg-warm-cream py-10 md:py-14 lg:py-16">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <FadeUp x={-24} className="flex max-w-lg flex-col gap-4 text-left">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            <h1 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-normal leading-[1.1] text-deep-forest">
              {title}
              {titleAccent && (
                <>
                  <br />
                  <span className="headline-accent">{titleAccent}</span>
                </>
              )}
            </h1>
            {description && (
              <p className="body-md max-w-md text-[0.95rem] leading-relaxed">{description}</p>
            )}
          </FadeUp>

          {image && (
            <ImageReveal className="overflow-hidden rounded-2xl" delay={0.12}>
              <img
                src={image}
                alt={imageAlt || title}
                className="aspect-[4/3] w-full object-cover"
                loading="eager"
              />
            </ImageReveal>
          )}
        </div>
      </Container>
    </section>
  )
}
