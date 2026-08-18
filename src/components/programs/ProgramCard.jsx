import { Link } from 'react-router-dom'
import { ROUTES } from '../../lib/routes'

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

export default function ProgramCard({ program, showCta = true }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-md motion-reduce:transform-none">
      <div className="overflow-hidden">
        <img
          src={program.image}
          alt={`${program.name} program at Montessori Minds`}
          className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transform-none"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6 md:p-8">
        <div className="flex items-center gap-3 text-olive">{icons[program.icon]}</div>
        <div className="flex flex-col gap-2">
          <h3 className="heading-md">{program.name}</h3>
          <p className="body-sm text-muted-text">{program.ageRange}</p>
        </div>
        <p className="body-md flex-1">{program.shortDescription}</p>
        {showCta && (
          <Link
            to={ROUTES.programs}
            className="inline-flex items-center gap-2 font-body text-[0.8125rem] font-medium uppercase tracking-[0.12em] text-forest-green transition-colors group-hover:text-olive"
          >
            Learn More
            <span className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none" aria-hidden="true">
              →
            </span>
          </Link>
        )}
      </div>
    </article>
  )
}
