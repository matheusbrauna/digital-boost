import { ArrowRightIcon } from '@radix-ui/react-icons'

import { cn } from '@/lib/utils'

import AnimatedShinyText from './animated-shiny-text'

export function ShinyButton() {
  return (
    <div
      className={cn(
        'group rounded-full border border-black/5 bg-zinc-100 text-base transition-all ease-in hover:cursor-pointer hover:bg-zinc-200',
      )}
    >
      <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-zinc-600 hover:duration-300 hover:dark:text-zinc-400">
        <span>✨ Introducing Magic UI</span>
        <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </AnimatedShinyText>
    </div>
  )
}
