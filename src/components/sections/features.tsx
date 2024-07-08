import { BarChartIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons'
import {
  AppWindow,
  BetweenHorizontalStart,
  HeartHandshake,
  Mail,
  Megaphone,
  SquareTerminal,
} from 'lucide-react'

import { FeatureCard } from '@/components/feature-card'

const features = [
  {
    title: 'SEO Avançado',
    description:
      'Melhore seu ranking nos motores de busca e atraia mais visitantes.',
    icon: <MagnifyingGlassIcon className="size-6" />,
  },
  {
    title: 'Gestão de Redes Sociais',
    description: 'Aumente seu engajamento e crie uma comunidade leal.',
    icon: <BarChartIcon className="size-6" />,
  },
  {
    title: 'Campanhas PPC',
    description:
      'Maximize seu ROI com campanhas de publicidade paga eficientes.',
    icon: <Megaphone className="size-6" />,
  },
  {
    title: 'Marketing de Conteúdo',
    description: 'Crie conteúdo relevante que ressoe com seu público.',
    icon: <HeartHandshake className="size-6" />,
  },
  {
    title: 'Email Marketing',
    description: 'Desenvolva campanhas de email personalizadas e eficazes.',
    icon: <Mail className="size-6" />,
  },
  {
    title: 'Análise de Dados',
    description: 'Tome decisões informadas com insights baseados em dados.',
    icon: <BetweenHorizontalStart className="size-6" />,
  },
  {
    title: 'Design Gráfico',
    description: 'Atraia seus clientes com um design visualmente atraente.',
    icon: <AppWindow className="size-6" />,
  },
  {
    title: 'Desenvolvimento Web',
    description: 'Tenha um site moderno e responsivo que reflete sua marca.',
    icon: <SquareTerminal className="size-6" />,
  },
]

export function Features() {
  return (
    <section
      id="solucoes"
      className="grid min-h-screen place-items-center py-8"
    >
      <div className="container">
        <h2 className="text-balance text-center text-3xl font-medium tracking-tight md:text-5xl md:leading-tight">
          Descubra Nossas Soluções de Marketing Digital
        </h2>
        <p className="my-4 text-balance text-center text-sm font-normal text-muted-foreground md:text-base">
          A Digital Boost oferece uma gama de serviços projetados para
          transformar sua presença online e impulsionar seu crescimento.
        </p>
        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
