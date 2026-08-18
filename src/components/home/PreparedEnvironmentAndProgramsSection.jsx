import Container from '../layout/Container'
import { FadeUp, StaggerContainer, StaggerItem } from '../animations'
import { images } from '../../data/images'
import { homePreparedEnvironment } from '../../data/home'
import { programs } from '../../data/programs'

const icons = {
  nest: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <path d="M4 14c0-4 3.5-8 8-8s8 4 8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M6 14h12l-1.5 4H7.5L6 14z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  ),
  sprout: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <path d="M12 20V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 10C12 6 8 4 5 6c2 2 2 6 7 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 10c0-4 4-6 7-4-2 2-2 6-7 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  bloom: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 4v3M12 17v3M4 12h3M17 12h3M6.3 6.3l2.1 2.1M15.6 15.6l2.1 2.1M17.7 6.3l-2.1 2.1M8.4 15.6l-2.1 2.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
}

export default function PreparedEnvironmentAndProgramsSection() {
  return (
    <section className="bg-warm-beige py-16 md:py-24 lg:py-28">
      <Container>
        <div className="grid gap-12 md:gap-16 lg:grid-cols-2 lg:gap-14 xl:gap-20">

          {/* ── LEFT: A Prepared Environment ── */}
          <FadeUp className="flex flex-col gap-5">
            <h2 className="heading-xl">{homePreparedEnvironment.title}</h2>
            <p className="body-md text-muted-text">{homePreparedEnvironment.description}</p>
            <div className="mt-3 overflow-hidden rounded-2xl">
              <img
                src={images.preparedEnvironment}
                alt={homePreparedEnvironment.imageAlt}
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-[1.02] motion-reduce:transform-none"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </FadeUp>

          {/* ── RIGHT: Our Programs ── */}
          <div className="flex flex-col gap-6">
            <FadeUp delay={0.1}>
              <h2 className="heading-xl">Our Programs</h2>
            </FadeUp>

            {/* Program cards — 3 columns on sm+, stacked on mobile */}
            <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-3" stagger={0.08}>
              {programs.map((program) => (
                <StaggerItem
                  key={program.id}
                  className="flex flex-col gap-3 rounded-2xl bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 motion-reduce:transform-none"
                >
                  {/* Icon */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-warm-cream text-olive">
                    {icons[program.icon]}
                  </div>
                  {/* Name */}
                  <h3 className="font-display text-lg font-medium text-forest-green leading-tight">{program.name}</h3>
                  {/* Age range */}
                  <p className="text-[0.7rem] font-medium uppercase tracking-wider text-soft-olive">{program.ageRange}</p>
                  {/* Short description */}
                  <p className="body-sm flex-1">{program.shortDescription}</p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

        </div>
      </Container>
    </section>
  )
}
