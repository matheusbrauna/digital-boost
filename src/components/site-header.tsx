import { MainNav } from '@/components/main-nav'
import { MobileNav } from '@/components/mobile-nav'

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
