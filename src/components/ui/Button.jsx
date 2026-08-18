import { Link } from 'react-router-dom'

const variantClasses = {
  primary:
    'bg-olive text-white hover:bg-forest-green shadow-sm hover:shadow-md',
  secondary:
    'bg-warm-beige text-forest-green hover:brightness-[0.97] shadow-sm',
  outline:
    'bg-transparent text-forest-green border border-forest-green/15 hover:border-olive hover:bg-white/40',
  text: 'bg-transparent text-forest-green hover:text-olive px-2',
}

export default function Button({
  children,
  variant = 'primary',
  className = '',
  to,
  href,
  type = 'button',
  disabled = false,
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-body text-[0.8125rem] font-medium uppercase tracking-[0.12em] transition-all duration-250 hover:-translate-y-px active:translate-y-0 motion-reduce:hover:translate-y-0 disabled:pointer-events-none disabled:opacity-50 disabled:hover:translate-y-0 max-sm:px-5 max-sm:py-3 max-sm:text-[0.75rem]'

  const classes = `${base} ${variantClasses[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} aria-disabled={disabled} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} aria-disabled={disabled} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  )
}
