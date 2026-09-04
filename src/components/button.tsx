interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-md font-bold no-underline transition'

  const variants = {
    primary: 'bg-text-primary text-white hover:bg-text-secondary',
    secondary:
      'border border-ink-600 text-white hover:bg-ink-800 bg-transparent',
    ghost: 'text-text-primary hover:bg-surface-sunken',
  }

  const sizes = {
    sm: 'px-5 py-2 text-sm h-10',
    md: 'px-6.5 py-3.25 text-base h-13',
    lg: 'px-7 py-4 text-lg h-13',
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  )
}
