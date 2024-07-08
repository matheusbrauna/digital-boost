export const links = {
  linkedin: 'https://www.linkedin.com/in/matheus-brauna',
  github: 'https://github.com/matheusbrauna',
}

export const siteConfig = {
  name: 'Digital Boost',
  url: 'https://digital-boost.vercel.app',
  description:
    'Impulsione sua presença online com nossas estratégias de marketing digital inovadoras e personalizadas.',
  links,
  mainNav: [
    {
      href: '#solucoes',
      label: 'Soluções',
    },
    {
      href: '#depoimentos',
      label: 'Depoimentos',
    },
    {
      href: '#precos',
      label: 'Preços',
    },
  ],
}

export type SiteConfig = typeof siteConfig
