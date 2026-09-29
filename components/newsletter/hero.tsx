import Image from 'next/image'
import { ArrowRight, CalendarDays, CalendarPlus, MapPin } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { event, issue } from '@/lib/newsletter'
import { rsvpHref } from '@/lib/rsvp'

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="issue-title"
      className="relative isolate overflow-hidden border-b-4 border-primary bg-navy text-navy-foreground"
    >
      <Image
        src="/images/hero-boardroom.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-navy/75" />

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 py-24 text-center md:py-32">
        <p className="font-heading text-sm font-bold uppercase tracking-widest text-primary motion-safe:animate-in motion-safe:fade-in motion-safe:duration-700">
          {issue.issueLabel} <span aria-hidden="true">·</span> Lunch &amp; Learn
        </p>
        <h1
          id="issue-title"
          className="text-balance font-heading text-6xl font-black uppercase leading-none tracking-tight motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:duration-700 md:text-8xl"
        >
          {issue.title}
        </h1>
        <p className="font-heading text-sm font-semibold uppercase tracking-widest text-navy-foreground/90 md:text-base">
          Process <span aria-hidden="true" className="text-primary">·</span> Recurring revenue{' '}
          <span aria-hidden="true" className="text-primary">·</span> Freedom
        </p>
        <p className="max-w-2xl text-pretty text-lg leading-relaxed text-navy-foreground/85">{issue.dek}</p>

        <ul className="flex flex-col items-center gap-3 text-sm sm:flex-row sm:gap-6">
          <li className="flex items-center gap-2">
            <CalendarDays className="size-4 text-primary" aria-hidden="true" />
            {event.dateLabel}, {event.timeLabel}
          </li>
          <li className="flex items-center gap-2">
            <MapPin className="size-4 text-primary" aria-hidden="true" />
            {event.location}
          </li>
        </ul>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <a
            href={rsvpHref}
            className={cn(
              buttonVariants({ size: 'lg' }),
              'h-14 px-8 font-heading text-base font-extrabold uppercase tracking-wider shadow-lg shadow-primary/30',
            )}
          >
            Reserve my free seat
            <ArrowRight aria-hidden="true" />
          </a>
          <a
            href="/calendar.ics"
            download
            className="flex items-center gap-2 font-heading text-sm font-bold uppercase tracking-wider underline-offset-8 hover:underline"
          >
            <CalendarPlus className="size-4 text-primary" aria-hidden="true" />
            Add to calendar
          </a>
        </div>
        <p className="text-sm text-navy-foreground/75">
          Free lunch provided. Limited seats. RSVP by{' '}
          <strong className="font-semibold text-navy-foreground">{event.rsvpBy}</strong>.
        </p>
      </div>
    </section>
  )
}
