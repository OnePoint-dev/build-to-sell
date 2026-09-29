'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'
import { selfCheck } from '@/lib/newsletter'
import { cn } from '@/lib/utils'

function verdict(score: number, total: number) {
  if (score === total) return 'Sale ready. Bring your playbook to share.'
  if (score >= total - 2) return 'Close. Come find your one or two gaps.'
  if (score > 0) return 'Solid start. This session is built for you.'
  return 'Check the statements that are true for your team.'
}

export function SellabilityCheck() {
  const [checked, setChecked] = useState<Set<number>>(new Set())
  const score = checked.size

  function toggle(index: number) {
    setChecked((prev) => {
      const next = new Set(prev)
      if (next.has(index)) next.delete(index)
      else next.add(index)
      return next
    })
  }

  return (
    <section
      aria-labelledby="check-title"
      className="flex flex-col gap-6 rounded-lg border-t-4 border-primary bg-navy p-6 text-navy-foreground shadow-xl md:p-8"
    >
      <div className="flex flex-col gap-2">
        <h2 id="check-title" className="font-heading text-2xl font-black uppercase tracking-tight">
          Quick sellability check
        </h2>
        <p className="text-sm leading-relaxed text-navy-foreground/75">
          Two minutes before lunch. Nothing is saved, it&apos;s just for you.
        </p>
      </div>

      <ul className="flex flex-col gap-2">
        {selfCheck.map((statement, index) => {
          const isChecked = checked.has(index)
          return (
            <li key={statement}>
              <label
                className={cn(
                  'flex cursor-pointer items-start gap-3 rounded-md p-3 text-sm leading-relaxed transition-colors',
                  isChecked ? 'bg-navy-foreground/15' : 'hover:bg-navy-foreground/10',
                )}
              >
                <input
                  type="checkbox"
                  className="peer sr-only"
                  checked={isChecked}
                  onChange={() => toggle(index)}
                />
                <span
                  aria-hidden="true"
                  className={cn(
                    'mt-0.5 flex size-5 shrink-0 items-center justify-center rounded border-2 border-navy-foreground/60 peer-focus-visible:ring-2 peer-focus-visible:ring-primary',
                    isChecked && 'border-primary bg-primary text-primary-foreground',
                  )}
                >
                  {isChecked && <Check className="size-3.5" strokeWidth={3} />}
                </span>
                {statement}
              </label>
            </li>
          )
        })}
      </ul>

      <div className="flex items-center justify-between gap-4 border-t border-navy-foreground/20 pt-4" aria-live="polite">
        <p className="text-sm leading-relaxed">{verdict(score, selfCheck.length)}</p>
        <p className="shrink-0 font-heading text-3xl font-black tabular-nums text-primary">
          {score}
          <span className="text-lg text-navy-foreground/60">/{selfCheck.length}</span>
        </p>
      </div>
    </section>
  )
}
