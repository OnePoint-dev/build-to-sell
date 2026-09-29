import { renderEdm } from '@/lib/edm'

export function GET(request: Request) {
  const url = new URL(request.url)
  const html = renderEdm(url.origin)
  const headers: Record<string, string> = { 'Content-Type': 'text/html; charset=utf-8' }
  if (url.searchParams.has('download')) {
    headers['Content-Disposition'] = 'attachment; filename="build-to-sell-edm.html"'
  }
  return new Response(html, { headers })
}
