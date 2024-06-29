import Image from 'next/image'

import { ShinyButton } from './shiny-button'
import { Button } from './ui/button'

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden pt-20 md:pt-40">
      <div className="flex items-center justify-center">
        <ShinyButton />
      </div>
      <h1 className="translate-y-[-1rem] animate-fade-in text-balance bg-gradient-to-b from-foreground from-30% to-foreground/60 bg-clip-text py-6 text-center text-5xl font-bold leading-none tracking-tighter text-transparent opacity-0 [--animation-delay:200ms] sm:text-6xl md:text-7xl lg:text-8xl">
        Magic UI is the new way
        <br className="hidden md:block" /> to build landing pages.
      </h1>
      <p className="relative z-10 mx-auto mt-6 max-w-3xl text-center text-base text-muted-foreground md:text-xl">
        <span>
          Everything AI seamlessly integrated all the modern AI generation tools
          into one platform so that you can generate content with a single
          click.
        </span>
      </p>
      <div className="relative z-10 mt-6 flex items-center justify-center gap-4">
        <Button>Get started</Button>
      </div>
      <div className="relative mt-20 animate-fade-up rounded-[32px] border border-neutral-200 bg-neutral-100 p-4 dark:border-neutral-700 dark:bg-neutral-800">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-96 w-full scale-[1.1] bg-gradient-to-b from-transparent via-white to-white dark:via-background/50 dark:to-background"></div>
        <div className="rounded-[24px] border border-neutral-200 bg-white p-2 dark:border-neutral-700 dark:bg-background">
          <Image
            alt="header"
            loading="lazy"
            width="1920"
            height="1080"
            className="rounded-[20px]"
            src="/hero-light.jpg"
            style={{ color: 'transparent' }}
          />
        </div>
      </div>
    </section>
  )
}
