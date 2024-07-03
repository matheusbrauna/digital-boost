import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function Contact() {
  return (
    <section className="grid min-h-screen place-items-center pt-16">
      <div className="container">
        <h2 className="text-balance text-center text-3xl font-medium tracking-tight md:text-5xl md:leading-tight">
          Loved by people all over the universe
        </h2>
        <p className="my-4 text-balance text-center text-sm font-normal text-muted-foreground md:text-base">
          Every AI is used by millions of people around the globe.Our APIs have
          fan bases and people fight for us over twitter.
        </p>
        <div className="mt-16 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="text-center">
            <h2 className="text-3xl font-medium text-gray-900">
              Customize Your Product
            </h2>
            <p className="mt-2 text-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
              maiores ipsum eos temporibus ea nihil.
            </p>
            <a
              href="#"
              className="mt-4 inline-block rounded-full border border-indigo-600 px-12 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
