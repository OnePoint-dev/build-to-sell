import { Masthead } from '@/components/newsletter/masthead'
import { Hero } from '@/components/newsletter/hero'
import { About } from '@/components/newsletter/about'
import { Principles } from '@/components/newsletter/principles'
import { Speakers } from '@/components/newsletter/speakers'
import { Agenda } from '@/components/newsletter/agenda'
import { SellabilityCheck } from '@/components/newsletter/sellability-check'
import { Details } from '@/components/newsletter/details'
import { CtaBand } from '@/components/newsletter/cta-band'
import { Footer } from '@/components/newsletter/footer'

export default function Page() {
  return (
    <>
      <Masthead />
      <main>
        <Hero />
        <About />
        <Principles />
        <Speakers />
        <section id="program" aria-label="Program and self-check" className="scroll-mt-20 bg-background py-20">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
            <Agenda />
            <SellabilityCheck />
          </div>
        </section>
        <Details />
        <CtaBand />
      </main>
      <Footer />
    </>
  )
}
