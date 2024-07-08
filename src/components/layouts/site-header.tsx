import { MainNav } from '@/components/layouts/main-nav'
import { MobileNav } from '@/components/layouts/mobile-nav'

export function SiteHeader() {
  return (
    <nav className="fixed top-0 z-50 w-full">
      <div className="container flex h-16 items-center">
        <MainNav />
        <MobileNav />
      </div>
    </nav>
  )
}
