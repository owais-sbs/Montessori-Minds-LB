import { Link } from 'react-router-dom'
import Container from '../layout/Container'
import { FadeUp } from '../animations'
import { images } from '../../data/images'
import { homePreparedEnvironment } from '../../data/home'

export default function PreparedEnvironmentSection() {
  return (
    <section className="bg-warm-beige py-20 md:py-28">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <FadeUp className="flex flex-col gap-6">
            <p className="eyebrow">{homePreparedEnvironment.eyebrow}</p>
            <h2 className="heading-xl">{homePreparedEnvironment.title}</h2>
            <p className="body-lg">{homePreparedEnvironment.description}</p>
            <Link
              to={homePreparedEnvironment.linkTo}
              className="inline-flex items-center gap-2 font-body text-[0.8125rem] font-medium uppercase tracking-[0.12em] text-forest-green transition-colors hover:text-olive"
            >
              {homePreparedEnvironment.linkLabel}
              <span aria-hidden="true">→</span>
            </Link>
          </FadeUp>
          <FadeUp delay={0.1} className="overflow-hidden rounded-3xl">
            <img
              src={images.preparedEnvironment}
              alt={homePreparedEnvironment.imageAlt}
              className="aspect-[4/3] w-full rounded-3xl object-cover"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </FadeUp>
        </div>
      </Container>
    </section>
  )
}
