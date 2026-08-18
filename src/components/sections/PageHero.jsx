import Container from '../layout/Container'
import { FadeUp, ImageReveal } from '../animations'

export default function PageHero({ eyebrow, title, description, image, imageAlt }) {
  return (
    <section className="bg-warm-cream py-12 md:py-16 lg:py-20">
      <Container>
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
          {/* Text content — left side */}
          <FadeUp className="flex flex-col gap-4" trigger="load">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            <h1 className="display-lg">{title}</h1>
            {description && <p className="body-md max-w-md text-muted-text">{description}</p>}
          </FadeUp>

          {/* Image — right side */}
          {image && (
            <ImageReveal className="rounded-2xl" delay={0.15} trigger="load">
              <img
                src={image}
                alt={imageAlt || title}
                className="aspect-[4/3] w-full rounded-2xl object-cover"
                loading="eager"
                referrerPolicy="no-referrer"
              />
            </ImageReveal>
          )}
        </div>
      </Container>
    </section>
  )
}
