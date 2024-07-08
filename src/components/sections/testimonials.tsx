import { Marquee } from '@/components/marquee'
import { TestimonialCard } from '@/components/testimonial-card'

const testimonials = [
  {
    name: 'Ana',
    username: '@ana',
    body: 'A Digital Boost transformou nossa estratégia digital. Estamos impressionados com os resultados!',
    img: 'https://avatar.vercel.sh/ana',
  },
  {
    name: 'Bruno',
    username: '@bruno',
    body: 'Excelente trabalho da Digital Boost. Superaram todas as nossas expectativas.',
    img: 'https://avatar.vercel.sh/bruno',
  },
  {
    name: 'Carla',
    username: '@carla',
    body: 'Não poderíamos estar mais satisfeitos com os serviços da Digital Boost. Recomendamos!',
    img: 'https://avatar.vercel.sh/carla',
  },
  {
    name: 'Daniel',
    username: '@daniel',
    body: 'A equipe da Digital Boost é altamente profissional. Nosso crescimento online é evidente.',
    img: 'https://avatar.vercel.sh/daniel',
  },
  {
    name: 'Elisa',
    username: '@elisa',
    body: 'O impacto da Digital Boost em nossa marca foi imenso. Estamos muito gratos!',
    img: 'https://avatar.vercel.sh/elisa',
  },
  {
    name: 'Fernando',
    username: '@fernando',
    body: 'Trabalhar com a Digital Boost foi uma decisão acertada. Resultados incríveis!',
    img: 'https://avatar.vercel.sh/fernando',
  },
]

const firstRow = testimonials.slice(0, testimonials.length / 3)
const secondRow = testimonials.slice(
  testimonials.length / 3,
  (testimonials.length / 3) * 2,
)
const thirdRow = testimonials.slice((testimonials.length / 3) * 2)

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="grid min-h-screen place-items-center bg-background py-8"
    >
      <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
        <h2 className="text-balance text-center text-3xl font-medium tracking-tight md:text-5xl md:leading-tight">
          Amado por pessoas de todo o universo
        </h2>
        <p className="my-4 text-balance text-center text-sm font-normal text-muted-foreground md:text-base">
          A Digital Boost é valorizada por clientes em todo o mundo. Veja o que
          estão dizendo:
        </p>
        <div className="mt-16">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((testimonial) => (
              <TestimonialCard key={testimonial.username} {...testimonial} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((testimonial) => (
              <TestimonialCard key={testimonial.username} {...testimonial} />
            ))}
          </Marquee>
          <Marquee pauseOnHover className="[--duration:20s]">
            {thirdRow.map((testimonial) => (
              <TestimonialCard key={testimonial.username} {...testimonial} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background" />
        </div>
      </div>
    </section>
  )
}
