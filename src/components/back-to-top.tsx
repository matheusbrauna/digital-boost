'use client'

import { ChevronUpIcon } from '@radix-ui/react-icons'

import { Button } from '@/components/ui/button'

export function BackToTop() {
  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <Button
      size="icon"
      className="group absolute end-4 top-4 rounded-full sm:end-6 sm:top-6 lg:end-8 lg:top-4"
      onClick={handleScrollToTop}
    >
      <ChevronUpIcon className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
    </Button>
  )
}
