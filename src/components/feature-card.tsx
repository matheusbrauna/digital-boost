import { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

type Props = ComponentProps<'div'>

export function FeatureCard({ className, ...props }: Props) {
  return (
    <div
      className={cn(
        'group relative flex flex-col rounded-md border py-8',
        className,
      )}
      {...props}
    >
      <div className="group pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-blue-500/5 to-transparent opacity-0 transition duration-200 group-hover:opacity-100"></div>
      <div className="relative z-10 mb-4 px-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="tabler-icon tabler-icon-terminal-2"
        >
          <path d="M8 9l3 3l-3 3"></path>
          <path d="M13 15l3 0"></path>
          <path d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
        </svg>
      </div>
      <div className="relative z-10 mb-2 px-8 text-lg font-bold">
        <div className="absolute inset-y-0 left-0 h-6 w-1 rounded-br-full rounded-tr-full bg-muted-foreground transition duration-200 group-hover:bg-blue-500"></div>
        <span className="inline-block transition duration-200 group-hover:translate-x-2">
          Built for developers
        </span>
      </div>
      <p className="px-8 text-sm text-muted-foreground">
        Built for engineers, developers, dreamers, thinkers and doers.
      </p>
    </div>
  )
}
