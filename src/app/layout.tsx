import type { Metadata, Viewport } from 'next'

import '@/styles/globals.css'
import { SiteFooter } from '@/components/layouts/site-footer'
import { SiteHeader } from '@/components/layouts/site-header'
import { siteConfig } from '@/config/site'
import { fontSans } from '@/lib/fonts'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  generator: 'Next.js',
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: ['Desenvolvedor de Software'],
  authors: [
    {
      name: 'Matheus Braúna',
      url: siteConfig.links.linkedin,
    },
  ],
  creator: 'Matheus Braúna',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body
        className={cn('bg-background font-sans antialiased', fontSans.variable)}
      >
        <div className="flex min-h-screen flex-1 flex-col">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  )
}
