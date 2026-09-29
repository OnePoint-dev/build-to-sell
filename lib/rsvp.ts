import { event } from '@/lib/newsletter'

export const rsvpHref = `mailto:${event.rsvpEmail}?subject=${encodeURIComponent(
  'RSVP: Build to Sell Lunch & Learn',
)}&body=${encodeURIComponent('Count me in. Please reserve my seat for Build to Sell.')}`
