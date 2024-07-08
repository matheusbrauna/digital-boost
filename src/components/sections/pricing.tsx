import { PricingCard } from '@/components/pricing-card'

const pricingData = [
  {
    type: 'Básico',
    description: 'Ideal para pequenas empresas começando sua jornada digital.',
    price: 99,
    features: [
      { isIncluded: true, description: 'Gestão de Redes Sociais' },
      { isIncluded: true, description: 'SEO Básico' },
      { isIncluded: false, description: 'Campanhas PPC' },
      { isIncluded: false, description: 'Relatórios Mensais' },
    ],
    isMostPopular: false,
  },
  {
    type: 'Pro',
    description:
      'Perfeito para empresas em crescimento que buscam resultados mais robustos.',
    price: 199,
    features: [
      { isIncluded: true, description: 'Gestão de Redes Sociais' },
      { isIncluded: true, description: 'SEO Avançado' },
      { isIncluded: true, description: 'Campanhas PPC' },
      { isIncluded: false, description: 'Email Marketing Avançado' },
    ],
    isMostPopular: true,
  },
  {
    type: 'Empresarial',
    description:
      'Solução completa para grandes empresas com necessidades complexas.',
    price: 499,
    features: [
      { isIncluded: true, description: 'Gestão de Redes Sociais' },
      { isIncluded: true, description: 'SEO Avançado' },
      { isIncluded: true, description: 'Campanhas PPC' },
      { isIncluded: true, description: 'Email Marketing Avançado' },
      { isIncluded: true, description: 'Análise de Dados Personalizada' },
    ],
    isMostPopular: false,
  },
]

export function Pricing() {
  return (
    <section className="grid min-h-screen place-items-center bg-background py-8">
      <div className="container">
        <div className="px-4 md:px-8">
          <div className="text-balance sm:text-center">
            <h4 className="text-xl font-medium tracking-tight text-muted-foreground">
              Preços
            </h4>
            <h3 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Planos que encaixam no seu bolso
            </h3>
            <p className="mt-3 font-normal text-muted-foreground">
              Escolha o plano que melhor se adapta às necessidades da sua
              empresa e acelere seu crescimento com nossas estratégias de
              marketing digital.
            </p>
          </div>
          <div className="mt-12 max-w-screen-xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:items-stretch md:grid-cols-3">
              {pricingData.map((pricing) => (
                <PricingCard
                  key={pricing.type}
                  type={pricing.type}
                  description={pricing.description}
                  price={pricing.price}
                  features={pricing.features}
                  isMostPopular={pricing.isMostPopular}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
