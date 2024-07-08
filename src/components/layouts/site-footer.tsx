import Link from 'next/link'

import { BackToTop } from '@/components/back-to-top'
import { Icons } from '@/components/icons'
import { siteConfig } from '@/config/site'

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t py-8">
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
            <p className="mt-6 text-center leading-relaxed text-gray-500 md:max-w-md lg:text-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
              consequuntur amet culpa cum itaque neque.
            </p>
          </div>
          <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
            <li>
              <Link href="#">About</Link>
            </li>
            <li>
              <Link href="#">Services</Link>
            </li>
            <li>
              <Link href="#">Projects</Link>
            </li>
            <li>
              <Link href="#">Blog</Link>
            </li>
          </ul>
        </div>
        <p className="mt-10 text-center text-sm text-gray-500 lg:text-right">
          Copyright &copy; 2022. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
