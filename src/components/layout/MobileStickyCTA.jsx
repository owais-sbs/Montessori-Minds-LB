import { Button } from '../ui'
import { contactPlaceholders } from '../../data/contact'
import { ROUTES } from '../../lib/routes'

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-5 w-5" aria-hidden="true">
      <path
        d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-deep-forest/10 bg-white/95 p-3 backdrop-blur-xl pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden">
      <div className="mx-auto flex max-w-lg items-center gap-2">
        <Button to={ROUTES.bookATour} variant="primary" className="min-h-[48px] flex-1 !px-4 !py-3 !text-[0.7rem] sm:!text-[0.75rem]">
          Book a visit
        </Button>
        <a
          href={contactPlaceholders.phoneTel}
          className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-deep-forest text-white shadow-sm active:scale-95"
          aria-label={`Call ${contactPlaceholders.phone}`}
        >
          <PhoneIcon />
        </a>
      </div>
    </div>
  )
}
