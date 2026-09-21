import Container from '../layout/Container'
import { FadeUp } from '../animations'
import { images } from '../../data/images'
import { languagesSection } from '../../data/homeBrief'

export default function LanguagesSection() {
  return (
    <section className="relative min-h-[min(100svh,720px)] overflow-hidden py-16 md:py-24">
      <img
        src={images.gallery.language}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
        loading="lazy"
      />
      <div className="photo-overlay absolute inset-0" aria-hidden="true" />
      <Container className="relative flex min-h-[inherit] items-center">
        <FadeUp className="mx-auto flex w-full max-w-lg flex-col gap-5 text-left text-warm-cream md:max-w-xl md:text-center md:items-center">
          <p className="eyebrow eyebrow-on-dark">{languagesSection.eyebrow}</p>
          <h2 className="font-display text-[clamp(1.75rem,5vw,2.5rem)] font-normal leading-tight text-white">
            {languagesSection.title}
            <br />
            <span className="headline-accent">{languagesSection.titleAccent}</span>
          </h2>
          <div className="flex flex-wrap gap-x-5 gap-y-2 font-display text-xl text-white/95 md:justify-center md:text-2xl">
            {languagesSection.labels.map((label) => (
              <span key={label}>{label}</span>
            ))}
          </div>
          <p className="body-md !text-warm-cream/88 text-[0.95rem] leading-relaxed">{languagesSection.description}</p>
          <ul className="flex flex-col gap-2 text-left md:items-start">
            {languagesSection.bullets.map((item) => (
              <li key={item} className="body-sm !text-warm-cream/82">
                • {item}
              </li>
            ))}
          </ul>
          <p className="body-sm !text-warm-cream/60">{languagesSection.note}</p>
        </FadeUp>
      </Container>
    </section>
  )
}
