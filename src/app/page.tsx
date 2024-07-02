import { Companies } from '@/components/companies'
import { FUIPricingSectionWithBadge } from '@/components/FUIPricingSectionWithBadge'
import { HeroSection } from '@/components/hero-section'

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection />
      <Companies />
      <FUIPricingSectionWithBadge />
    </main>
  )
}
