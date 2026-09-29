import { ArrowRight } from 'lucide-react'
import { event } from '@/lib/newsletter'
import { rsvpHref } from '@/lib/rsvp'

export function CtaBand() {
  return (
    <section aria-labelledby="cta-title" className="bg-primary py-20 text-primary-foreground">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center">
        <h2 id="cta-title" className="text-balance font-heading text-4xl font-black uppercase tracking-tight md:text-6xl">
          Secure your seat today
        </h2>
        <p className="max-w-xl text-pretty text-lg font-medium leading-relaxed">
          Lunch is on us, but seats are limited. RSVP by {event.rsvpBy} and walk out with one move that makes your
          business more valuable this week.
        </p>
        <a
          href={rsvpHref}
          className="inline-flex h-14 items-center gap-2 rounded-lg bg-navy px-8 font-heading text-base font-extrabold uppercase tracking-wider text-navy-foreground shadow-lg transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-navy/40"
        >
          Reserve my free seat
          <ArrowRight className="size-5 text-primary" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
