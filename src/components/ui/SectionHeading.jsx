import { FadeUp } from '../animations'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}) {
  const alignClass =
    align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start'

  return (
    <FadeUp className={`flex max-w-2xl flex-col gap-4 ${alignClass} ${className}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      {title && <h2 className="heading-xl">{title}</h2>}
      {description && <p className="body-lg">{description}</p>}
    </FadeUp>
  )
}
