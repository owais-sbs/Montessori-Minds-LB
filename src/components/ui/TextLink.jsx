import { Link } from 'react-router-dom'

export default function TextLink({ children, to, href, className = '', ...props }) {
  const classes = `inline-flex items-center gap-1 font-body text-sm font-medium text-dark-text underline decoration-dark-text/30 underline-offset-4 transition-colors hover:decoration-accent-rose hover:text-deep-forest ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
        <span aria-hidden="true">→</span>
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
        <span aria-hidden="true">→</span>
      </a>
    )
  }

  return null
}
