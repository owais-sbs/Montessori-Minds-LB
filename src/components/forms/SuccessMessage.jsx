import { FadeUp } from '../animations'
import { Button } from '../ui'

export default function SuccessMessage({ title, description, onReset }) {
  return (
    <FadeUp className="mx-auto flex max-w-lg flex-col items-center gap-6 rounded-3xl bg-warm-beige p-10 text-center md:p-14">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-olive/15 text-olive">
        <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8" aria-hidden="true">
          <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="heading-lg">{title}</h2>
        <p className="body-md">{description}</p>
      </div>
      {onReset && (
        <Button variant="outline" onClick={onReset}>
          Submit Another
        </Button>
      )}
    </FadeUp>
  )
}
