import { FeatureCard } from '@/components/feature-card'

export function Features() {
  return (
    <section
      id="features"
      className="grid min-h-screen place-items-center py-8"
    >
      <div className="container">
        <h2 className="text-balance text-center text-3xl font-medium tracking-tight md:text-5xl md:leading-tight">
          Loved by people all over the universe
        </h2>
        <p className="my-4 text-balance text-center text-sm font-normal text-muted-foreground md:text-base">
          Every AI is used by millions of people around the globe.Our APIs have
          fan bases and people fight for us over twitter.
        </p>
        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
        </div>
      </div>
    </section>
  )
}
