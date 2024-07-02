import { CheckIcon, Cross2Icon } from '@radix-ui/react-icons'

import { Button } from '@/components/ui/button'

const plans = [
  {
    name: 'Plano Básico',
    desc: 'Ideal para pequenas empresas que estão começando no marketing digital.',
    price: 12,
    isMostPop: false,
    features: [
      'Análise básica de SEO',
      '2 campanhas de e-mail marketing',
      'Relatório mensal de performance',
      'Suporte via e-mail',
    ],
  },
  {
    name: 'Startup',
    desc: 'Perfeito para startups que precisam de uma presença digital forte.',
    price: 35,
    isMostPop: true,
    features: [
      'Análise avançada de SEO',
      '5 campanhas de e-mail marketing',
      'Relatório quinzenal de performance',
      'Suporte via chat e e-mail',
      'Gestão de redes sociais',
    ],
  },
  {
    name: 'Enterprise',
    desc: 'Para grandes empresas que buscam resultados expressivos no marketing digital.',
    price: 60,
    isMostPop: false,
    features: [
      'Análise completa de SEO',
      'Campanhas ilimitadas de e-mail marketing',
      'Relatório semanal de performance',
      'Suporte 24/7',
      'Gestão completa de redes sociais',
      'Consultoria personalizada',
    ],
  },
]

export function FUIPricingSectionWithBadge() {
  return (
    <section className="pt-32">
      <div className="container">
        <div className="px-4 md:px-8">
          <div className="text-balance sm:text-center">
            <h4 className="text-xl font-medium tracking-tight text-muted-foreground">
              Preços
            </h4>
            <h3 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Planos para todos os tamanhos
            </h3>
            <p className="mt-3 font-normal text-muted-foreground">
              Escolha o plano que melhor se adapta às necessidades da sua
              empresa e acelere seu crescimento com nossas estratégias de
              marketing digital.
            </p>
          </div>
          <div className="mt-12 max-w-screen-xl">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8">
              <div className="divide-y rounded-2xl border shadow-sm">
                <div className="p-6 sm:px-8">
                  <h2 className="text-lg font-medium">
                    Starter
                    <span className="sr-only">Plan</span>
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <p className="mt-2 sm:mt-4">
                    <strong className="text-3xl font-bold sm:text-4xl">
                      {' '}
                      20${' '}
                    </strong>

                    <span className="text-sm font-medium text-muted-foreground">
                      /month
                    </span>
                  </p>
                  <Button className="mt-2 w-full" size="lg" variant="ringHover">
                    Get Started
                  </Button>
                </div>

                <div className="p-6 sm:px-8">
                  <p className="text-lg font-medium sm:text-xl">
                    What&apos;s included:
                  </p>
                  <ul className="mt-2 space-y-2 sm:mt-4">
                    <li className="flex items-center gap-1">
                      <CheckIcon className="size-5 text-blue-600" />
                      <span className="text-muted-foreground"> 10 users </span>
                    </li>

                    <li className="flex items-center gap-1">
                      <CheckIcon className="size-5 text-blue-600" />
                      <span className="text-muted-foreground">
                        {' '}
                        2GB of storage{' '}
                      </span>
                    </li>
                    <li className="flex items-center gap-1">
                      <CheckIcon className="size-5 text-blue-600" />
                      <span className="text-muted-foreground">
                        {' '}
                        Email support{' '}
                      </span>
                    </li>
                    <li className="flex items-center gap-1">
                      <Cross2Icon className="size-5 text-rose-600" />

                      <span className="text-muted-foreground">
                        {' '}
                        Help center access{' '}
                      </span>
                    </li>
                    <li className="flex items-center gap-1">
                      <Cross2Icon className="size-5 text-rose-600" />

                      <span className="text-muted-foreground">
                        {' '}
                        Phone support{' '}
                      </span>
                    </li>
                    <li className="flex items-center gap-1">
                      <Cross2Icon className="size-5 text-rose-600" />

                      <span className="text-muted-foreground">
                        {' '}
                        Community access{' '}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative divide-y rounded-2xl border shadow-sm">
                <Button
                  variant="shine"
                  className="absolute -top-5 left-1/2 -translate-x-1/2 rounded-full"
                >
                  Mais popular
                </Button>
                <div className="p-6 sm:px-8">
                  <h2 className="text-lg font-medium">
                    Pro
                    <span className="sr-only">Plan</span>
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <p className="mt-2 sm:mt-4">
                    <strong className="text-3xl font-bold sm:text-4xl">
                      {' '}
                      30${' '}
                    </strong>
                    <span className="text-sm font-medium text-muted-foreground">
                      /month
                    </span>
                  </p>
                  <Button className="mt-2 w-full" size="lg" variant="ringHover">
                    Get Started
                  </Button>
                </div>
                <div className="p-6 sm:px-8">
                  <p className="text-lg font-medium sm:text-xl">
                    What&apos;s included:
                  </p>
                  <ul className="mt-2 space-y-2 sm:mt-4">
                    <li className="flex items-center gap-1">
                      <CheckIcon className="size-5 text-blue-600" />
                      <span className="text-muted-foreground"> 20 users </span>
                    </li>
                    <li className="flex items-center gap-1">
                      <CheckIcon className="size-5 text-blue-600" />
                      <span className="text-muted-foreground">
                        {' '}
                        5GB of storage{' '}
                      </span>
                    </li>
                    <li className="flex items-center gap-1">
                      <CheckIcon className="size-5 text-blue-600" />
                      <span className="text-muted-foreground">
                        {' '}
                        Email support{' '}
                      </span>
                    </li>
                    <li className="flex items-center gap-1">
                      <CheckIcon className="size-5 text-blue-600" />
                      <span className="text-muted-foreground">
                        {' '}
                        Help center access{' '}
                      </span>
                    </li>
                    <li className="flex items-center gap-1">
                      <Cross2Icon className="size-5 text-rose-600" />
                      <span className="text-muted-foreground">
                        {' '}
                        Phone support{' '}
                      </span>
                    </li>
                    <li className="flex items-center gap-1">
                      <Cross2Icon className="size-5 text-rose-600" />

                      <span className="text-muted-foreground">
                        {' '}
                        Community access{' '}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="divide-y rounded-2xl border shadow-sm">
                <div className="p-6 sm:px-8">
                  <h2 className="text-lg font-medium">
                    Enterprise
                    <span className="sr-only">Plan</span>
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <p className="mt-2 sm:mt-4">
                    <strong className="text-3xl font-bold sm:text-4xl">
                      {' '}
                      100${' '}
                    </strong>
                    <span className="text-sm font-medium text-muted-foreground">
                      /month
                    </span>
                  </p>
                  <Button className="mt-2 w-full" size="lg" variant="ringHover">
                    Get Started
                  </Button>
                </div>
                <div className="p-6 sm:px-8">
                  <p className="text-lg font-medium sm:text-xl">
                    What&apos;s included:
                  </p>
                  <ul className="mt-2 space-y-2 sm:mt-4">
                    <li className="flex items-center gap-1">
                      <CheckIcon className="size-5 text-blue-600" />
                      <span className="text-muted-foreground"> 50 users </span>
                    </li>
                    <li className="flex items-center gap-1">
                      <CheckIcon className="size-5 text-blue-600" />
                      <span className="text-muted-foreground">
                        {' '}
                        20GB of storage{' '}
                      </span>
                    </li>
                    <li className="flex items-center gap-1">
                      <CheckIcon className="size-5 text-blue-600" />
                      <span className="text-muted-foreground">
                        {' '}
                        Email support{' '}
                      </span>
                    </li>
                    <li className="flex items-center gap-1">
                      <CheckIcon className="size-5 text-blue-600" />
                      <span className="text-muted-foreground">
                        {' '}
                        Help center access{' '}
                      </span>
                    </li>
                    <li className="flex items-center gap-1">
                      <CheckIcon className="size-5 text-blue-600" />
                      <span className="text-muted-foreground">
                        {' '}
                        Phone support{' '}
                      </span>
                    </li>
                    <li className="flex items-center gap-1">
                      <CheckIcon className="size-5 text-blue-600" />
                      <span className="text-muted-foreground">
                        {' '}
                        Community access{' '}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
