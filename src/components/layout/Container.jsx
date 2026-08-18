export default function Container({ children, className = '', size = 'default', as: Tag = 'div' }) {
  const sizeClasses = {
    default: 'max-w-[75rem]',
    narrow: 'max-w-3xl',
    wide: 'max-w-[90rem]',
  }

  return (
    <Tag
      className={`mx-auto w-full px-[clamp(1.25rem,4vw,2.5rem)] ${sizeClasses[size]} ${className}`}
    >
      {children}
    </Tag>
  )
}
