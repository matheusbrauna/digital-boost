import { Cross2Icon } from '@radix-ui/react-icons'
import { CheckIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { cn, formatCurrency } from '@/lib/utils'

type Props = {
  type: string
  description: string
  price: number
  features: Array<{
    isIncluded: boolean
    description: string
  }>
  isMostPopular: boolean
}

export function PricingCard({
  type,
  description,
  price,
  features,
  isMostPopular,
}: Props) {
  return (
    <div
      className={cn(
        'rounded-2xl border shadow-sm',
        isMostPopular && 'relative',
      )}
    >
      {isMostPopular && (
        <Button
          variant="shine"
          className="absolute -top-5 left-1/2 -translate-x-1/2 rounded-full"
        >
          Mais popular
        </Button>
      )}
      <div className="border-b p-6 sm:px-8">
        <h2 className="text-lg font-medium">
          {type}
          <span className="sr-only">Plan</span>
        </h2>
        <p className="mt-2 text-muted-foreground">{description}</p>
        <p className="mt-2 sm:mt-4">
          <strong className="text-3xl font-bold sm:text-4xl">
            {formatCurrency(price)}
          </strong>
          <span className="text-sm font-medium text-muted-foreground">
            /mês
          </span>
        </p>
        <Button className="mt-2 w-full" size="lg" variant="ringHover">
          Começar agora
        </Button>
      </div>
      <div className="p-6 sm:px-8">
        <p className="text-lg font-medium sm:text-xl">O que está incluído:</p>
        <ul className="mt-2 space-y-2 sm:mt-4">
          {features.map((feature) => (
            <li key={feature.description} className="flex items-center gap-1">
              {feature.isIncluded ? (
                <CheckIcon className="size-5 text-blue-600" />
              ) : (
                <Cross2Icon className="size-5 text-rose-600" />
              )}
              <span className="text-muted-foreground">
                {feature.description}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
