import Image from 'next/image'
import { Mic } from 'lucide-react'
import { speakers } from '@/lib/newsletter'

export function Speakers() {
  return (
    <section id="speakers" aria-labelledby="speakers-title" className="scroll-mt-20 bg-muted py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2
            id="speakers-title"
            className="font-heading text-4xl font-black uppercase tracking-tight text-primary md:text-5xl"
          >
            Speakers
          </h2>
          <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Hear from a founder who sold, the advisor who helps buyers decide, and the host who keeps it practical.
          </p>
        </div>
        <ul className="grid gap-6 md:grid-cols-3">
          {speakers.map((speaker) => (
            <li key={speaker.name} className="flex flex-col overflow-hidden rounded-lg bg-card shadow-sm">
              <div className="relative aspect-square bg-navy">
                <Image
                  src={speaker.image || '/placeholder.svg'}
                  alt={`Portrait of ${speaker.name}`}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
                <span className="absolute bottom-0 left-0 bg-primary px-4 py-2 font-heading text-xs font-extrabold uppercase tracking-wider text-primary-foreground">
                  {speaker.role}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-3 border-t-4 border-primary p-6">
                <div>
                  <h3 className="font-heading text-xl font-extrabold text-card-foreground">{speaker.name}</h3>
                  <p className="text-sm font-medium text-muted-foreground">{speaker.title}</p>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{speaker.bio}</p>
                <p className="mt-auto flex items-start gap-2 rounded-md bg-navy px-4 py-3 text-sm font-semibold leading-snug text-navy-foreground">
                  <Mic className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  <span>
                    <span className="sr-only">Talk: </span>
                    {speaker.topic}
                  </span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
