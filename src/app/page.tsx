import { ArrowRightIcon } from '@radix-ui/react-icons'
import Image from 'next/image'

import AnimatedShinyText from '@/components/animated-shiny-text'
import { BorderBeam } from '@/components/border-beam'
import { LinearGradient } from '@/components/linear-gradient'
import { cn } from '@/lib/utils'

export default function Home() {
  return (
    <>
      <nav className="fixed inset-x-0 top-4 z-50 mx-auto w-[95%] max-w-7xl lg:w-full">
        <div className="hidden w-full lg:block">
          <div className="relative flex w-full justify-between rounded-full bg-neutral-50 px-4 py-2 shadow-[0px_-2px_0px_0px_var(--neutral-100),0px_2px_0px_0px_var(--neutral-100)] transition duration-200 dark:bg-neutral-900 dark:shadow-[0px_-2px_0px_0px_var(--neutral-800),0px_2px_0px_0px_var(--neutral-800)]">
            <div className="pointer-events-none absolute inset-0 h-full w-full rounded-full bg-neutral-100 [mask-image:linear-gradient(to_bottom,white,transparent,white)] dark:bg-neutral-800"></div>
            <div className="flex flex-row items-center gap-2">
              <a
                className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black"
                href="/"
              >
                <div className="h-5 w-6 rounded-bl-sm rounded-br-lg rounded-tl-lg rounded-tr-sm bg-black dark:bg-white"></div>
                <span className="font-medium text-black dark:text-white">
                  Every AI
                </span>
              </a>
              <div className="flex items-center gap-1.5">
                <a
                  className="text-muted dark:text-muted-dark flex items-center justify-center rounded-md px-4 py-2 text-sm leading-[110%] hover:bg-[#F5F5F5] hover:text-black dark:hover:bg-neutral-800"
                  href="/pricing"
                >
                  Pricing
                </a>
                <a
                  className="text-muted dark:text-muted-dark flex items-center justify-center rounded-md px-4 py-2 text-sm leading-[110%] hover:bg-[#F5F5F5] hover:text-black dark:hover:bg-neutral-800"
                  href="/blog"
                >
                  Blog
                </a>
                <a
                  className="text-muted dark:text-muted-dark flex items-center justify-center rounded-md px-4 py-2 text-sm leading-[110%] hover:bg-[#F5F5F5] hover:text-black dark:hover:bg-neutral-800"
                  href="/contact"
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg outline-none hover:bg-gray-50 focus:outline-none focus:ring-0 active:outline-none active:ring-0 dark:hover:bg-white/[0.1]">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="tabler-icon tabler-icon-sun-low h-4 w-4 flex-shrink-0 text-neutral-700 dark:text-neutral-500"
                  >
                    <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                    <path d="M4 12h.01"></path>
                    <path d="M12 4v.01"></path>
                    <path d="M20 12h.01"></path>
                    <path d="M12 20v.01"></path>
                    <path d="M6.31 6.31l-.01 -.01"></path>
                    <path d="M17.71 6.31l-.01 -.01"></path>
                    <path d="M17.7 17.7l.01 .01"></path>
                    <path d="M6.3 17.7l.01 .01"></path>
                  </svg>
                </div>
                <span className="sr-only">Toggle theme</span>
              </button>
              <a
                className="relative z-10 flex items-center justify-center rounded-full border border-transparent bg-transparent px-4 py-2 text-sm font-medium text-black transition duration-200 hover:bg-gray-100 md:text-sm dark:text-white dark:hover:bg-neutral-800 dark:hover:shadow-xl"
                href="/login"
              >
                Login
              </a>
              <a
                className="relative z-10 flex items-center justify-center rounded-full border border-transparent bg-neutral-900 px-4 py-2 text-sm font-medium text-white shadow-[0px_-1px_0px_0px_#FFFFFF40_inset,_0px_1px_0px_0px_#FFFFFF40_inset] transition duration-200 hover:bg-black/90 md:text-sm"
                href="/signup"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
        <div className="flex h-full w-full items-center lg:hidden">
          <div className="flex w-full items-center justify-between rounded-full bg-neutral-50 px-2.5 py-1.5 shadow-[0px_-2px_0px_0px_var(--neutral-100),0px_2px_0px_0px_var(--neutral-100)] transition duration-200 dark:bg-neutral-900 dark:shadow-[0px_-2px_0px_0px_var(--neutral-800),0px_2px_0px_0px_var(--neutral-800)]">
            <a
              className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black"
              href="/"
            >
              <div className="h-5 w-6 rounded-bl-sm rounded-br-lg rounded-tl-lg rounded-tr-sm bg-black dark:bg-white"></div>
              <span className="font-medium text-black dark:text-white">
                Every AI
              </span>
            </a>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              className="h-6 w-6 text-black dark:text-white"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M432 176H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 272H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 368H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16z"></path>
            </svg>
          </div>
        </div>
      </nav>
      <main className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-between px-4">
        <section className="relative flex min-h-screen flex-col overflow-hidden pt-20 md:pt-40">
          <div className="flex justify-center">
            <button className="group relative mx-auto inline-block w-fit cursor-pointer rounded-full bg-neutral-50 p-px text-[10px] font-semibold leading-6 text-neutral-700 no-underline shadow-zinc-900 sm:text-xs md:shadow-2xl dark:bg-neutral-700 dark:text-neutral-300">
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              </span>
              <div className="relative z-10 flex items-center space-x-2 rounded-full bg-neutral-100 px-4 py-1.5 ring-1 ring-white/10 dark:bg-neutral-800">
                <span>We&apos;ve raised $69M seed funding</span>
                <svg
                  fill="none"
                  height="16"
                  viewBox="0 0 24 24"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.75 8.75L14.25 12L10.75 15.25"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                  ></path>
                </svg>
              </div>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-neutral-400/0 via-neutral-400/90 to-neutral-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
            </button>
          </div>
          <h1 className="animate-fade-in from-background to-background/40 translate-y-[-1rem] text-balance bg-gradient-to-b from-30% bg-clip-text py-6 text-center text-5xl font-bold leading-none tracking-tighter text-transparent opacity-0 [--animation-delay:200ms] sm:text-6xl md:text-7xl lg:text-8xl dark:from-white dark:to-white/40">
            Magic UI is the new way
            <br className="hidden md:block" /> to build landing pages.
          </h1>
          <div className="animate-fade-up relative mt-20 rounded-[32px] border border-neutral-200 bg-neutral-100 p-4 dark:border-neutral-700 dark:bg-neutral-800">
            <div className="dark:via-background/50 dark:to-background pointer-events-none absolute inset-x-0 bottom-0 h-[80%] w-full scale-[1.1] bg-gradient-to-b from-transparent via-white to-white"></div>
            <div className="dark:bg-background rounded-[24px] border border-neutral-200 bg-white p-2 dark:border-neutral-700">
              <Image
                alt="header"
                loading="lazy"
                width="1920"
                height="1080"
                className="rounded-[20px]"
                src="/hero-dark.png"
                style={{ color: 'transparent' }}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
