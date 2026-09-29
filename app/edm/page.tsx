import type { Metadata } from 'next'
import { headers } from 'next/headers'
import Link from 'next/link'
import { EdmPreview } from '@/components/edm/edm-preview'
import { edmPreheader, edmSubject, renderEdm } from '@/lib/edm'

export const metadata: Metadata = {
  title: 'Promotional eDM | Build to Sell Lunch & Learn',
  description: 'Preview and export the promotional email for the Build to Sell Lunch & Learn.',
}

export default async function EdmPage() {
  const h = await headers()
  const host = h.get('x-forwarded-host') ?? h.get('host') ?? 'localhost:3000'
  const proto = h.get('x-forwarded-proto') ?? (host.startsWith('localhost') ? 'http' : 'https')
  const html = renderEdm(`${proto}://${host}`)

  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-8 px-4 py-12">
      <header className="flex flex-col gap-2">
        <Link href="/" className="text-sm font-medium text-primary underline-offset-4 hover:underline">
          Back to registration page
        </Link>
        <h1 className="text-balance font-heading text-4xl font-black uppercase tracking-tight text-primary">Promotional eDM</h1>
        <p className="text-pretty leading-relaxed text-muted-foreground">
          Email-safe HTML built with tables and inline styles. Copy it or download it, then paste it into your email platform.
        </p>
      </header>
      <EdmPreview html={html} subject={edmSubject} preheader={edmPreheader} />
    </main>
  )
}
