import { FadeUp } from '../animations'

export default function MontessoriQuote({ text, source, dark = false, className = '' }) {
  return (
    <FadeUp className={`flex flex-col gap-4 ${className}`}>
      <blockquote className={`quote-serif ${dark ? 'text-warm-cream' : 'text-deep-forest'}`}>
        &ldquo;{text}&rdquo;
      </blockquote>
      <p className={dark ? 'quote-attribution' : 'eyebrow !text-muted-text'}>— {source}</p>
    </FadeUp>
  )
}
