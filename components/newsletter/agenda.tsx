import { agenda } from '@/lib/newsletter'

export function Agenda() {
  return (
    <section aria-labelledby="agenda-title" className="flex flex-col gap-6">
      <h2 id="agenda-title" className="font-heading text-4xl font-black uppercase tracking-tight text-primary">
        Program
      </h2>
      <ol className="flex flex-col gap-3">
        {agenda.map((slot) => (
          <li key={slot.time} className="flex items-stretch overflow-hidden rounded-lg bg-muted">
            <time className="flex w-20 shrink-0 items-center justify-center bg-navy font-heading font-extrabold tabular-nums text-primary">
              {slot.time}
            </time>
            <span className="px-5 py-4 leading-relaxed text-foreground">{slot.item}</span>
          </li>
        ))}
      </ol>
    </section>
  )
}
