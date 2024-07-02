import Image from 'next/image'

const companies = [
  'Google',
  'Microsoft',
  'Amazon',
  'Netflix',
  'YouTube',
  'Instagram',
  'Uber',
  'Spotify',
]

export function Companies() {
  return (
    <section id="companies" className="py-16">
      <div className="container">
        <h3 className="text-center text-sm font-semibold uppercase text-muted-foreground">
          Parceiros que confiam na Digital Boost
        </h3>
        <div className="mt-6">
          <div className="grid grid-cols-2 place-items-center gap-2 md:grid-cols-4 xl:grid-cols-8 xl:gap-4">
            {companies.map((logo, idx) => (
              <Image
                key={idx}
                src={`https://cdn.magicui.design/companies/${logo}.svg`}
                width="160"
                height="40"
                className="h-10 w-40 px-2 dark:brightness-0 dark:invert"
                alt={logo}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
