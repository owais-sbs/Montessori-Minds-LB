import { cloneElement, isValidElement } from 'react'

export default function FormField({
  label,
  id,
  error,
  children,
  required = false,
  hideLabel = false,
}) {
  const errorId = error ? `${id}-error` : undefined

  const enhancedChild =
    isValidElement(children) && id && !hideLabel
      ? cloneElement(children, {
          id,
          'aria-describedby': errorId,
          'aria-invalid': error ? true : children.props['aria-invalid'],
        })
      : children

  return (
    <div className="flex flex-col gap-2">
      {!hideLabel && label && (
        <label htmlFor={id} className="body-sm font-medium text-forest-green">
          {label}
          {required && <span className="text-olive"> *</span>}
        </label>
      )}
      {enhancedChild}
      {error && (
        <p id={errorId} className="text-sm text-red-700" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

export function inputClassName(hasError) {
  return `w-full min-w-0 rounded-xl border bg-white px-4 py-3 body-md text-forest-green transition-colors focus:border-olive focus:outline-none focus:ring-2 focus:ring-olive/20 ${
    hasError ? 'border-red-400' : 'border-forest-green/15'
  }`
}
