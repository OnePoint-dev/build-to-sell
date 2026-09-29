'use client'

import { useRef, useState } from 'react'
import { Check, Copy, Download } from 'lucide-react'
import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function EdmPreview({ html, subject, preheader }: { html: string; subject: string; preheader: string }) {
  const frameRef = useRef<HTMLIFrameElement>(null)
  const [height, setHeight] = useState(2400)
  const [copied, setCopied] = useState(false)

  async function copyHtml() {
    await navigator.clipboard.writeText(html)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  function fitFrame() {
    const doc = frameRef.current?.contentDocument
    if (doc) setHeight(doc.documentElement.scrollHeight)
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 rounded-2xl bg-card p-5 ring-1 ring-border md:flex-row md:items-center md:justify-between">
        <dl className="flex flex-col gap-1 text-sm">
          <div className="flex gap-2">
            <dt className="text-muted-foreground">Subject</dt>
            <dd className="font-medium text-card-foreground">{subject}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="text-muted-foreground">Preheader</dt>
            <dd className="text-pretty text-card-foreground">{preheader}</dd>
          </div>
        </dl>
        <div className="flex shrink-0 gap-3">
          <Button variant="outline" size="lg" className="h-11 px-5" onClick={copyHtml}>
            {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
            {copied ? 'Copied' : 'Copy HTML'}
          </Button>
          <a href="/edm/html?download" className={cn(buttonVariants({ size: 'lg' }), 'h-11 px-5')}>
            <Download aria-hidden="true" />
            Download .html
          </a>
        </div>
      </div>
      <iframe
        ref={frameRef}
        title="Build to Sell promotional email preview"
        srcDoc={html}
        onLoad={fitFrame}
        style={{ height }}
        className="w-full rounded-2xl bg-background ring-1 ring-border"
      />
    </div>
  )
}
