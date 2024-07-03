import Marquee from '../marquee'
import { TestimonialCard } from '../testimonial-card'

const reviews = [
  {
    name: 'Jack',
    username: '@jack',
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: 'https://avatar.vercel.sh/jack',
  },
  {
    name: 'Jill',
    username: '@jill',
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: 'https://avatar.vercel.sh/jill',
  },
  {
    name: 'John',
    username: '@john',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: 'https://avatar.vercel.sh/john',
  },
  {
    name: 'Jane',
    username: '@jane',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: 'https://avatar.vercel.sh/jane',
  },
  {
    name: 'Jenny',
    username: '@jenny',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: 'https://avatar.vercel.sh/jenny',
  },
  {
    name: 'James',
    username: '@james',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: 'https://avatar.vercel.sh/james',
  },
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="grid min-h-screen place-items-center py-8"
    >
      <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
        <h2 className="text-balance text-center text-3xl font-medium tracking-tight md:text-5xl md:leading-tight">
          Loved by people all over the universe
        </h2>
        <p className="my-4 text-balance text-center text-sm font-normal text-muted-foreground md:text-base">
          Every AI is used by millions of people around the globe.Our APIs have
          fan bases and people fight for us over twitter.
        </p>
        <div className="mt-16">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((review) => (
              <TestimonialCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((review) => (
              <TestimonialCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee pauseOnHover className="[--duration:20s]">
            {secondRow.map((review) => (
              <TestimonialCard key={review.username} {...review} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background" />
        </div>
      </div>
    </section>
  )
}
