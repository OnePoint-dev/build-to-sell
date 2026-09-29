import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { issue } from '@/lib/newsletter'
import { rsvpHref } from '@/lib/rsvp'

const links = [
  { href: '#about', label: 'About' },
  { href: '#why-attend', label: 'Why attend' },
  { href: '#speakers', label: 'Speakers' },
  { href: '#program', label: 'Program' },
]

export function Masthead() {
  return (
    <header className="sticky top-0 z-40 bg-navy text-navy-foreground">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <a href="#top" className="font-heading text-sm font-extrabold uppercase tracking-wider">
          {issue.publication}
        </a>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="border-b-2 border-transparent pb-1 font-heading text-sm font-semibold uppercase tracking-wider transition-colors hover:border-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href={rsvpHref}
          className={cn(buttonVariants({ size: 'lg' }), 'h-10 px-4 font-heading text-xs font-bold uppercase tracking-wider')}
        >
          Register
        </a>
      </div>
    </header>
  )
}
