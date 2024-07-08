import { ChevronRightIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

import { Icons } from '@/components/icons'
import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/config/site'

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
        {siteConfig.mainNav.map((link) => (
          <Button
            key={link.href}
            variant="ghost"
            className="hover:text-foreground"
            asChild
          >
            <Link href={link.href}>{link.label}</Link>
          </Button>
        ))}
      </div>
      <div className="relative z-[1] flex items-center justify-end space-x-2">
        <ModeToggle />
        <Button
          className="rounded-full"
          variant="expandIcon"
          iconPlacement="right"
          Icon={ChevronRightIcon}
        >
          <Link href="#consulta">Solicite uma Consulta</Link>
        </Button>
      </div>
    </div>
  )
}
