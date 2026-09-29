import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { event, issue } from '@/lib/newsletter'
import { rsvpHref } from '@/lib/rsvp'

const quickLinks = [
  { href: '#about', label: 'About' },
  { href: '#why-attend', label: 'Why attend' },
  { href: '#program', label: 'Program' },
  { href: '/edm', label: 'Promotional eDM' },
]

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <h2 className="font-heading text-base font-extrabold text-primary">Quick links</h2>
          <ul className="flex flex-col gap-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-navy-foreground/85 hover:text-primary">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-heading text-base font-extrabold text-primary">Questions?</h2>
          <p className="text-sm leading-relaxed text-navy-foreground/85">
            Write to{' '}
            <a href={`mailto:${event.rsvpEmail}`} className="font-semibold text-navy-foreground underline underline-offset-4">
              {event.rsvpEmail}
            </a>{' '}
            or reserve your seat now.
          </p>
          <a
            href={rsvpHref}
            className={cn(buttonVariants({ size: 'lg' }), 'h-11 w-fit px-5 font-heading text-xs font-bold uppercase tracking-wider')}
          >
            RSVP now
          </a>
        </div>
      </div>
      <div className="border-t border-navy-foreground/15">
        <p className="mx-auto max-w-6xl px-6 py-5 text-center text-xs text-navy-foreground/60">
          {issue.publication} <span aria-hidden="true">·</span> {issue.title} <span aria-hidden="true">·</span>{' '}
          {event.dateLabel}
        </p>
      </div>
    </footer>
  )
}
