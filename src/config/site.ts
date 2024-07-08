export const links = {
  linkedin: 'https://www.linkedin.com/in/matheus-brauna',
  github: 'https://github.com/matheusbrauna',
}

export const siteConfig = {
  name: 'Digital Boost',
  url: 'https://digitalboost.com',
  email: 'contato@digitalboost.com',
  description:
    'Impulsione sua presença online com nossas estratégias de marketing digital inovadoras e personalizadas.',
  links,
  mainNav: [
    {
      href: '#services',
      label: 'Serviços',
    },
    {
      href: '#portfolio',
      label: 'Portfólio',
    },
    {
      href: '#about',
      label: 'Sobre Nós',
    },
  ],
}

export type SiteConfig = typeof siteConfig
