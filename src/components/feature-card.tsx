import { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

type Props = ComponentProps<'div'> & {
  title: string
  description: string
  icon: JSX.Element
}

export function FeatureCard({
  title,
  description,
  icon,
  className,
  ...props
}: Props) {
  return (
    <div
      className={cn(
        'group relative flex flex-col rounded-md border py-8',
        className,
      )}
      {...props}
    >
      <div className="group pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-blue-500/5 to-transparent opacity-0 transition duration-200 group-hover:opacity-100"></div>
      <div className="relative z-10 mb-4 px-8">{icon}</div>
      <div className="relative z-10 mb-2 px-8 text-lg font-bold">
        <div className="absolute inset-y-0 left-0 h-6 w-1 rounded-br-full rounded-tr-full bg-muted-foreground transition duration-200 group-hover:bg-blue-500"></div>
        <h3 className="inline-block transition duration-200 group-hover:translate-x-2">
          {title}
        </h3>
      </div>
      <p className="px-8 text-sm text-muted-foreground">{description}</p>
    </div>
  )
}
