import { NotebookPen, UtensilsCrossed } from 'lucide-react'
import { lunch } from '@/lib/newsletter'

export function Details() {
  return (
    <section id="details" aria-labelledby="details-title" className="scroll-mt-20 bg-muted py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <h2
          id="details-title"
          className="text-center font-heading text-4xl font-black uppercase tracking-tight text-primary md:text-5xl"
        >
          Good to know
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-4 rounded-lg bg-card p-6 shadow-sm">
            <h3 className="flex items-center gap-2 font-heading text-sm font-extrabold uppercase tracking-wider text-card-foreground">
              <UtensilsCrossed className="size-5 text-primary" aria-hidden="true" />
              {"What's for lunch"}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{lunch.menu}</p>
          </div>
          <div className="flex flex-col gap-4 rounded-lg bg-card p-6 shadow-sm">
            <h3 className="flex items-center gap-2 font-heading text-sm font-extrabold uppercase tracking-wider text-card-foreground">
              <NotebookPen className="size-5 text-primary" aria-hidden="true" />
              What to bring
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{lunch.bring}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
