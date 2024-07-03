import { HeroSection } from '@/components/hero-section'
import { Companies } from '@/components/sections/companies'
import { Features } from '@/components/sections/features'
import { Pricing } from '@/components/sections/pricing'
import { Testimonials } from '@/components/sections/testimonials'
import { Separator } from '@/components/ui/separator'

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection />
      <Companies />
      <Features />
      <Separator className="container relative z-10 bg-gradient-to-r from-background via-muted to-background" />
      <Testimonials />
      <Separator className="container relative z-10 bg-gradient-to-r from-background via-muted to-background" />
      <Pricing />
    </main>
  )
}
