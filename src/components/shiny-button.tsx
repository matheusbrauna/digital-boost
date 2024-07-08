import { ArrowRightIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

import { cn } from '@/lib/utils'

import AnimatedShinyText from './animated-shiny-text'

export function ShinyButton() {
  return (
    <Link
      href="#solucoes"
      className={cn(
        'group rounded-full border bg-secondary text-base transition-all ease-in hover:cursor-pointer hover:bg-secondary/90',
      )}
    >
      <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 text-muted-foreground transition ease-out hover:text-muted-foreground/90 hover:duration-300">
        <span>✨ Apresentando Digital Boost</span>
        <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </AnimatedShinyText>
    </Link>
  )
}
