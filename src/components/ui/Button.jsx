import { Link } from 'react-router-dom'

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const variantClasses = {
  primary:
    'bg-deep-forest text-white hover:brightness-110 shadow-sm hover:shadow-md',
  onPhoto:
    'bg-white text-dark-text hover:bg-warm-cream shadow-md hover:shadow-lg',
  secondary:
    'bg-warm-beige text-deep-forest hover:brightness-[0.97] shadow-sm',
  outline:
    'bg-transparent text-deep-forest border border-deep-forest/20 hover:border-accent-rose/50 hover:bg-white/40',
  text: 'bg-transparent text-deep-forest hover:text-accent-rose px-2 normal-case tracking-normal text-sm font-medium',
}

export default function Button({
  children,
  variant = 'primary',
  className = '',
  to,
  href,
  type = 'button',
  disabled = false,
  showArrow = true,
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-body text-[0.8125rem] font-medium uppercase tracking-[0.14em] transition-all duration-250 hover:-translate-y-px active:translate-y-0 motion-reduce:hover:translate-y-0 disabled:pointer-events-none disabled:opacity-50 disabled:hover:translate-y-0 max-sm:px-5 max-sm:py-3 max-sm:text-[0.75rem]'

  const classes = `${base} ${variantClasses[variant]} ${className}`

  const content = (
    <>
      {children}
      {showArrow && variant !== 'text' && <ArrowIcon />}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} aria-disabled={disabled} {...props}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} aria-disabled={disabled} {...props}>
        {content}
      </a>
    )
  }

  return (
    <button type={type} className={classes} disabled={disabled} {...props}>
      {content}
    </button>
  )
}
