import { Compass, GraduationCap, Package, Repeat, Users, Wallet, type LucideIcon } from 'lucide-react'
import { principles } from '@/lib/newsletter'

const icons: LucideIcon[] = [GraduationCap, Package, Repeat, Users, Wallet, Compass]

export function Principles() {
  return (
    <section
      id="why-attend"
      aria-labelledby="principles-title"
      className="scroll-mt-20 border-y-4 border-primary bg-navy py-20 text-navy-foreground"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-14 px-6">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2
            id="principles-title"
            className="font-heading text-4xl font-black uppercase tracking-tight text-primary md:text-5xl"
          >
            Why attend?
          </h2>
          <p className="max-w-xl text-pretty leading-relaxed text-navy-foreground/85">
            Six principles that make a business worth buying, and a lot easier to run.
          </p>
        </div>

        <ul className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((principle, index) => {
            const Icon = icons[index]
            return (
              <li
                key={principle.name}
                className="relative flex flex-col items-center gap-3 rounded-lg bg-card px-6 pb-8 pt-12 text-center text-card-foreground shadow-lg"
              >
                <span
                  aria-hidden="true"
                  className="absolute -top-7 left-1/2 flex size-14 -translate-x-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground ring-4 ring-navy"
                >
                  <Icon className="size-6" />
                </span>
                <h3 className="font-heading text-lg font-extrabold">{principle.name}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{principle.body}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
