import { ChevronRightIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

import { siteConfig } from '@/config/site'

import { Icons } from './icons'
import { Button } from './ui/button'

export function MainNav() {
  return (
    <div className="relative hidden w-full animate-fade-up grid-cols-3 rounded-full bg-secondary px-4 py-2 shadow-sm transition-all lg:grid">
      <div className="relative z-[1] flex justify-start">
        <Link href="/" className="flex items-center justify-start">
          <Icons.logo className="mr-2 size-7" />
          <span className="font-medium sm:inline-block">{siteConfig.name}</span>
        </Link>
      </div>
      <div className="relative z-[1] flex items-center justify-center gap-2">
        <Button variant="ghost" className="hover:text-foreground" asChild>
          <Link href="/servicos">Serviços</Link>
        </Button>
        <Button variant="ghost" className="hover:text-foreground" asChild>
          <Link href="#features">Features</Link>
        </Button>
        <Button variant="ghost" className="hover:text-foreground" asChild>
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
