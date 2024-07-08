import { ChevronRightIcon } from '@radix-ui/react-icons'
import Image from 'next/image'

import { ShinyButton } from '@/components/shiny-button'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="pb-8 pt-24 lg:pt-32">
      <div className="container">
        <div className="flex items-center justify-center">
          <ShinyButton />
        </div>
        <h1 className="translate-y-[-1rem] animate-fade-in text-balance bg-gradient-to-b from-foreground from-30% to-foreground/60 bg-clip-text py-6 text-center text-5xl font-bold leading-none tracking-tighter text-transparent opacity-0 [--animation-delay:200ms] sm:text-6xl md:text-7xl lg:text-8xl">
          Acelere seu Negócio com
          <br className="hidden md:block" /> a Digital Boost
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-center text-base text-muted-foreground md:text-xl">
          Transforme sua presença digital com nossa consultoria especializada em
          marketing. Estratégias inovadoras e resultados comprovados para o
          crescimento do seu negócio.
        </p>
        <div className="mt-6 flex items-center justify-center gap-4">
          <Button
            className="rounded-full"
            variant="expandIcon"
            iconPlacement="right"
            Icon={ChevronRightIcon}
          >
            Solicite uma Consulta
          </Button>
        </div>
        <div className="relative mt-20 animate-fade-up">
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-b from-transparent via-background to-background" />
          <div className="rounded-[32px] border bg-secondary p-3">
            <Image
              alt="header"
              loading="lazy"
              width="1920"
              height="1080"
              className="rounded-3xl"
              src="/hero-light.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
