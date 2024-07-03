'use client'

import { ChevronRightIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { useWindowScroll } from 'react-use'

import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

import { Icons } from './icons'
import { Button } from './ui/button'

export function MainNav() {
  const scroll = useWindowScroll()

  const isPastHeroSection = scroll.y > 1

  return (
    <div
      className={cn(
        'relative grid w-full grid-cols-3 rounded-full px-4 py-2 transition-all duration-200',
        isPastHeroSection ? 'bg-secondary shadow-sm' : 'bg-transparent',
      )}
    >
      <div className="relative z-[1] flex justify-start">
        <Link href="/" className="flex items-center justify-start">
          <Icons.logo className="mr-2 size-7" />
          <span className="font-medium sm:inline-block">{siteConfig.name}</span>
        </Link>
      </div>
      <div className="relative z-[1] flex items-center justify-center gap-2">
        <Button
          variant="ghost"
          className={cn(
            'text-muted-foreground',
            isPastHeroSection && 'hover:text-foreground',
          )}
          asChild
        >
          <Link href="/servicos">Serviços</Link>
        </Button>
        <Button
          variant="ghost"
          className={cn(
            'text-muted-foreground',
            isPastHeroSection && 'hover:text-foreground',
          )}
          asChild
        >
          <Link href="#features">Features</Link>
        </Button>
        <Button
          variant="ghost"
          className={cn(
            'text-muted-foreground',
            isPastHeroSection && 'hover:text-foreground',
          )}
          asChild
        >
          <Link href="#testimonials">Depoimentos</Link>
        </Button>
      </div>
      <div className="relative z-[1] flex items-center justify-end">
        <Button
          className="rounded-full"
          variant="expandIcon"
          iconPlacement="right"
          Icon={ChevronRightIcon}
        >
          Solicite uma Consulta
        </Button>
      </div>
    </div>
  )
}
