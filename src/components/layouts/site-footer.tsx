import Link from 'next/link'

import { BackToTop } from '@/components/back-to-top'
import { Icons } from '@/components/icons'
import { siteConfig } from '@/config/site'

export function SiteFooter() {
  return (
    <footer className="mt-16 py-8">
      <div className="container relative py-4">
        <BackToTop />
        <div className="lg:flex lg:items-end lg:justify-between">
          <div className="flex flex-col items-center text-balance lg:items-start">
            <Link href="/" className="flex items-center justify-start">
              <Icons.logo className="mr-2 size-7" />
              <span className="font-medium sm:inline-block">
                {siteConfig.name}
              </span>
            </Link>
            <p className="mt-6 text-center leading-relaxed text-muted-foreground md:max-w-lg lg:text-left">
              Impulsione sua presença online com nossas estratégias de marketing
              digital inovadoras e personalizadas.
            </p>
          </div>
          <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
            {siteConfig.mainNav.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-10 text-center text-sm text-muted-foreground lg:text-right">
          Feito com 💙 por{' '}
          <Link
            href={siteConfig.links.github}
            className="underline transition-all hover:text-foreground"
            target="_blank"
            rel="noreferrer"
          >
            Matheus Braúna
          </Link>
        </p>
      </div>
    </footer>
  )
}
