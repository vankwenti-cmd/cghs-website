import { urlFor } from '../../sanity/lib/image'

export default function PhotoSlot({
  image,
  alt,
  placeholder,
  className = '',
}: {
  image?: any
  alt: string
  placeholder?: string
  className?: string
}) {
  if (image) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={urlFor(image).width(900).height(900).fit('crop').url()}
        alt={alt}
        className={`w-full h-full object-cover ${className}`}
      />
    )
  }
  return (
    <div
      className={`w-full h-full bg-slate-100 flex items-center justify-center text-gray-400 text-sm text-center px-4 ${className}`}
    >
      {placeholder || alt}
    </div>
  )
}
