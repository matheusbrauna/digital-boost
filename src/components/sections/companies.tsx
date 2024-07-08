import Image from 'next/image'

import { Marquee } from '@/components/marquee'

const companies = [
  'Google',
  'Microsoft',
  'Amazon',
  'Netflix',
  'YouTube',
  'Instagram',
  'Uber',
  'Spotify',
]

export function Companies() {
  return (
    <section className="py-8">
      <div className="container relative">
        <h3 className="text-center text-sm font-semibold uppercase text-muted-foreground">
          Parceiros que confiam na Digital Boost
        </h3>
        <div className="mt-6">
          <Marquee pauseOnHover className="[--duration:20s]">
            {companies.map((logo, idx) => (
              <Image
                key={idx}
                src={`https://cdn.magicui.design/companies/${logo}.svg`}
                width={160}
                height={40}
                className="cursor-pointer px-2 dark:brightness-0 dark:invert"
                alt={logo}
              />
            ))}
          </Marquee>
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background" />
      </div>
    </section>
  )
}
