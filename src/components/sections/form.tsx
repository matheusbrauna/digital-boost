import { ChevronRightIcon } from '@radix-ui/react-icons'

import { Button } from '@/components/ui/button'

export function Form() {
  return (
    <section className="py-8">
      <div className="container grid place-items-center">
        <strong className="block text-center text-xl font-bold sm:text-3xl">
          Solicite uma consulta conosco
        </strong>
        <form className="mt-6">
          <div className="relative max-w-lg">
            <label className="sr-only" htmlFor="email">
              Email
            </label>
            <input
              className="w-full rounded-full border bg-background p-4 pe-32 text-sm font-medium"
              id="email"
              type="email"
              placeholder="seuemail@example.com"
            />
            <Button
              variant="expandIcon"
              iconPlacement="right"
              Icon={ChevronRightIcon}
              className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full"
            >
              Solicitar Consulta
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
