'use client'

import {
  ChevronRightIcon,
  Cross2Icon,
  HamburgerMenuIcon,
} from '@radix-ui/react-icons'
import Link from 'next/link'
import { useState } from 'react'
import { useMedia } from 'react-use'

import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'
import { siteConfig } from '@/config/site'

export function MobileNav() {
  const isDesktop = useMedia('(min-width: 1024px)', false)
  const [open, setOpen] = useState(false)

  if (isDesktop) return null

  return (
    <div className="flex w-full animate-fade-up items-center justify-between lg:hidden">
      <div className="flex w-full items-center justify-between rounded-full bg-secondary p-2.5 shadow-sm">
        <Link
          href="/"
          className="flex items-center"
          onClick={() => setOpen(false)}
        >
          <Icons.logo className="mr-2 size-6" aria-hidden="true" />
          <span className="font-medium">{siteConfig.name}</span>
          <span className="sr-only">Logo</span>
        </Link>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="size-6 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
            >
              <HamburgerMenuIcon className="size-4" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="top"
            className="min-h-screen bg-secondary p-8 pt-0"
          >
            <div className="flex h-16 items-center justify-between p-2.5">
              <Link
                href="/"
                className="flex items-center"
                onClick={() => setOpen(false)}
              >
                <Icons.logo className="mr-2 size-6" aria-hidden="true" />
                <span className="font-medium">{siteConfig.name}</span>
                <span className="sr-only">Logo</span>
              </Link>
              <SheetClose
                className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary"
                asChild
              >
                <Button variant="ghost" size="icon" className="size-6">
                  <Cross2Icon className="size-4" />
                  <span className="sr-only">Close</span>
                </Button>
              </SheetClose>
            </div>
            <div className="flex flex-col space-y-2 p-2.5">
              <Link href="#">Serviços</Link>
              <Link href="#">Features</Link>
              <Link href="#">Depoimentos</Link>
              <Button
                className="rounded-full"
                variant="expandIcon"
                iconPlacement="right"
                Icon={ChevronRightIcon}
              >
                Solicite uma Consulta
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}
