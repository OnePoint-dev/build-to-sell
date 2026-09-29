import { event, issue } from '@/lib/newsletter'

export function GET() {
  const body = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Lunch and Learn//Build to Sell//EN',
    'BEGIN:VEVENT',
    'UID:build-to-sell-lunch-and-learn@lunch-and-learn',
    `DTSTAMP:${event.startIcs}`,
    `DTSTART:${event.startIcs}`,
    `DTEND:${event.endIcs}`,
    `SUMMARY:Lunch & Learn: ${issue.title}`,
    `LOCATION:${event.location}`,
    `DESCRIPTION:${issue.dek}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n')

  return new Response(body, {
    headers: {
      'Content-Type': 'text/calendar; charset=utf-8',
      'Content-Disposition': 'attachment; filename="build-to-sell.ics"',
    },
  })
}
