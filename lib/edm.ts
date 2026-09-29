import { agenda, event, issue, lunch, principles, speakers } from '@/lib/newsletter'
import { rsvpHref } from '@/lib/rsvp'

const c = {
  navy: '#031a3e',
  amber: '#f19b16',
  white: '#ffffff',
  ink: '#1a2a4a',
  muted: '#4a5877',
  mist: '#eef1f6',
}

const heading = "Montserrat, 'Helvetica Neue', Helvetica, Arial, sans-serif"
const body = "Inter, 'Helvetica Neue', Helvetica, Arial, sans-serif"

function esc(value: string) {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export const edmSubject = `Reserve your seat: ${issue.title} Lunch & Learn, ${event.dateLabel}`
export const edmPreheader = `Free lunch, one hour, six moves that make your business worth buying. Seats are limited, RSVP by ${event.rsvpBy}.`

function ctaButton(href: string, label: string, variant: 'amber' | 'navy' = 'amber') {
  const bg = variant === 'amber' ? c.amber : c.navy
  const fg = variant === 'amber' ? c.navy : c.white
  return `
<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:0 auto;">
  <tr>
    <td align="center" bgcolor="${bg}" style="border-radius:8px;">
      <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" href="${href}" style="height:58px;v-text-anchor:middle;width:320px;" arcsize="14%" fillcolor="${bg}" stroke="f"><center style="color:${fg};font-family:Arial,sans-serif;font-size:16px;font-weight:bold;letter-spacing:1px;">${esc(label.toUpperCase())}</center></v:roundrect><![endif]-->
      <!--[if !mso]><!-->
      <a href="${href}" style="display:inline-block;padding:20px 40px;font-family:${heading};font-size:16px;font-weight:800;line-height:1;color:${fg};text-decoration:none;border-radius:8px;letter-spacing:0.08em;text-transform:uppercase;">${esc(label)} &rarr;</a>
      <!--<![endif]-->
    </td>
  </tr>
</table>`
}

function sectionTitle(text: string, color = c.amber) {
  return `<h2 class="h2" style="margin:0 0 12px 0;font-family:${heading};font-size:34px;font-weight:900;line-height:1.1;letter-spacing:-0.01em;text-transform:uppercase;color:${color};">${esc(text)}</h2>`
}

function principleCard(p: { name: string; body: string }) {
  return `
<td class="stack" valign="top" width="50%" style="padding:0 8px 16px 8px;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${c.white}" style="background:${c.white};border-radius:8px;border-top:4px solid ${c.amber};">
    <tr>
      <td style="padding:22px 22px 24px 22px;">
        <p style="margin:0 0 8px 0;font-family:${heading};font-size:17px;font-weight:800;line-height:1.3;color:${c.ink};">${esc(p.name)}</p>
        <p style="margin:0;font-family:${body};font-size:14px;line-height:1.55;color:${c.muted};">${esc(p.body)}</p>
      </td>
    </tr>
  </table>
</td>`
}

export function renderEdm(origin: string) {
  const calendarHref = `${origin}/calendar.ics`
  const pageHref = `${origin}/`
  const heroImg = `${origin}/images/hero-boardroom.png`
  const lunchImg = `${origin}/images/lunch-table.png`

  const principleRows: string[] = []
  for (let i = 0; i < principles.length; i += 2) {
    principleRows.push(`<tr>${principleCard(principles[i])}${principles[i + 1] ? principleCard(principles[i + 1]) : '<td class="stack" width="50%"></td>'}</tr>`)
  }

  const speakerRows = speakers
    .map(
      (s) => `
<tr>
  <td style="padding:0 0 16px 0;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${c.mist}" style="background:${c.mist};border-radius:8px;border-top:4px solid ${c.amber};">
      <tr>
        <td class="stack" valign="top" width="140" style="padding:20px 0 20px 20px;">
          <img src="${origin}${s.image}" width="120" height="120" alt="Portrait of ${esc(s.name)}" style="display:block;width:120px;height:120px;border-radius:8px;border:0;background:${c.navy};">
        </td>
        <td class="stack" valign="top" style="padding:20px 22px;">
          <p style="margin:0 0 6px 0;font-family:${heading};font-size:11px;font-weight:800;letter-spacing:0.14em;text-transform:uppercase;color:${c.amber};">${esc(s.role)}</p>
          <p style="margin:0 0 2px 0;font-family:${heading};font-size:19px;font-weight:800;line-height:1.25;color:${c.ink};">${esc(s.name)}</p>
          <p style="margin:0 0 10px 0;font-family:${body};font-size:13px;font-weight:600;line-height:1.4;color:${c.muted};">${esc(s.title)}</p>
          <p style="margin:0 0 12px 0;font-family:${body};font-size:14px;line-height:1.55;color:${c.muted};">${esc(s.bio)}</p>
          <p style="margin:0;padding:10px 14px;background:${c.navy};border-radius:6px;font-family:${body};font-size:13px;font-weight:600;line-height:1.4;color:${c.white};"><span style="color:${c.amber};">Talk:</span> ${esc(s.topic)}</p>
        </td>
      </tr>
    </table>
  </td>
</tr>`,
    )
    .join('')

  const agendaRows = agenda
    .map(
      (slot) => `
<tr>
  <td width="72" align="center" bgcolor="${c.navy}" style="background:${c.navy};padding:14px 8px;font-family:${heading};font-size:15px;font-weight:800;color:${c.amber};border-bottom:4px solid ${c.white};">${esc(slot.time)}</td>
  <td bgcolor="${c.mist}" style="background:${c.mist};padding:14px 18px;font-family:${body};font-size:15px;line-height:1.5;color:${c.ink};border-bottom:4px solid ${c.white};">${esc(slot.item)}</td>
</tr>`,
    )
    .join('')

  return `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="x-apple-disable-message-reformatting">
<meta name="color-scheme" content="light">
<meta name="supported-color-schemes" content="light">
<title>${esc(edmSubject)}</title>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800;900&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<style>
  body { margin:0; padding:0; background:${c.mist}; }
  @media (max-width: 620px) {
    .container { width:100% !important; }
    .px { padding-left:24px !important; padding-right:24px !important; }
    .h1 { font-size:48px !important; }
    .h2 { font-size:28px !important; }
    .stack { display:block !important; width:100% !important; }
  }
</style>
</head>
<body style="margin:0;padding:0;background:${c.mist};">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:${c.mist};">${esc(edmPreheader)}&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;</div>

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${c.mist}" style="background:${c.mist};">
<tr><td align="center" style="padding:24px 12px;">

<table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" border="0" bgcolor="${c.white}" style="width:600px;max-width:600px;background:${c.white};">

  <!-- Header bar -->
  <tr>
    <td class="px" bgcolor="${c.navy}" style="background:${c.navy};padding:18px 40px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td style="font-family:${heading};font-size:13px;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;color:${c.white};">${esc(issue.publication)}</td>
          <td align="right" style="font-family:${heading};font-size:12px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:${c.amber};">${esc(issue.issueLabel)}</td>
        </tr>
      </table>
    </td>
  </tr>

  <!-- Hero image -->
  <tr>
    <td bgcolor="${c.navy}" style="background:${c.navy};">
      <img src="${heroImg}" width="600" alt="Business leaders gathered around a boardroom lunch" style="display:block;width:100%;max-width:600px;height:auto;border:0;">
    </td>
  </tr>

  <!-- Hero copy -->
  <tr>
    <td class="px" align="center" bgcolor="${c.navy}" style="background:${c.navy};padding:40px 40px 48px 40px;text-align:center;border-bottom:5px solid ${c.amber};">
      <p style="margin:0 0 14px 0;font-family:${heading};font-size:13px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:${c.amber};">You&rsquo;re invited &middot; Lunch &amp; Learn</p>
      <h1 class="h1" style="margin:0 0 14px 0;font-family:${heading};font-size:64px;font-weight:900;line-height:1;letter-spacing:-0.01em;text-transform:uppercase;color:${c.white};">${esc(issue.title)}</h1>
      <p style="margin:0 0 22px 0;font-family:${heading};font-size:13px;font-weight:600;letter-spacing:0.14em;text-transform:uppercase;color:${c.white};">Process <span style="color:${c.amber};">&middot;</span> Recurring revenue <span style="color:${c.amber};">&middot;</span> Freedom</p>
      <p style="margin:0 auto 28px auto;max-width:460px;font-family:${body};font-size:17px;line-height:1.6;color:#d4dae6;">${esc(issue.dek)}</p>

      <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:0 auto 32px auto;">
        <tr>
          <td style="padding:12px 20px;border:1px solid ${c.amber};border-radius:8px;font-family:${body};font-size:15px;line-height:1.6;color:${c.white};text-align:center;">
            <strong style="font-family:${heading};font-weight:800;">${esc(event.dateLabel)}</strong> &middot; ${esc(event.timeLabel)}<br>
            ${esc(event.location)}
          </td>
        </tr>
      </table>

      ${ctaButton(rsvpHref, 'Reserve my free seat')}

      <p style="margin:18px 0 0 0;font-family:${body};font-size:14px;line-height:1.5;color:#d4dae6;">
        Free lunch. Limited seats. RSVP by <strong style="color:${c.white};">${esc(event.rsvpBy)}</strong>.<br>
        <a href="${calendarHref}" style="color:${c.amber};font-weight:600;">Add to calendar</a>
      </p>
    </td>
  </tr>

  <!-- About -->
  <tr>
    <td class="px" style="padding:48px 40px 16px 40px;">
      ${sectionTitle('About the session')}
      <p style="margin:0 0 12px 0;font-family:${heading};font-size:20px;font-weight:800;line-height:1.3;color:${c.ink};">Could someone buy your business tomorrow?</p>
      <p style="margin:0 0 24px 0;font-family:${body};font-size:15px;line-height:1.6;color:${c.muted};">Buyers pay a premium for businesses that are predictable and don&rsquo;t depend on one person. The same traits make work calmer, growth faster, and your time your own, even if you never plan to sell.</p>
      <img src="${lunchImg}" width="520" alt="Lunch spread on a conference table with notebooks and coffee" style="display:block;width:100%;max-width:520px;height:auto;border-radius:8px;border:0;">
    </td>
  </tr>

  <!-- Why attend -->
  <tr>
    <td style="padding:32px 0 0 0;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${c.navy}" style="background:${c.navy};border-top:5px solid ${c.amber};">
        <tr>
          <td class="px" align="center" style="padding:44px 32px 8px 32px;text-align:center;">
            ${sectionTitle('Why attend?')}
            <p style="margin:0 0 28px 0;font-family:${body};font-size:15px;line-height:1.6;color:#d4dae6;">Six principles that make a business worth buying, and a lot easier to run.</p>
          </td>
        </tr>
        <tr>
          <td style="padding:0 24px 28px 24px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">${principleRows.join('')}</table>
          </td>
        </tr>
      </table>
    </td>
  </tr>

  <!-- Speakers -->
  <tr>
    <td class="px" style="padding:48px 40px 16px 40px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td align="center" style="text-align:center;padding-bottom:28px;">
            ${sectionTitle('Speakers')}
            <p style="margin:0;font-family:${body};font-size:15px;line-height:1.6;color:${c.muted};">A founder who sold, the advisor buyers trust, and a host who keeps it practical.</p>
          </td>
        </tr>
        ${speakerRows}
      </table>
    </td>
  </tr>

  <!-- Program -->
  <tr>
    <td class="px" style="padding:48px 40px 16px 40px;">
      ${sectionTitle('Program')}
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:12px;">${agendaRows}</table>
    </td>
  </tr>

  <!-- Lunch + bring -->
  <tr>
    <td class="px" style="padding:24px 40px 48px 40px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td class="stack" valign="top" width="50%" style="padding:0 12px 16px 0;">
            <p style="margin:0 0 6px 0;font-family:${heading};font-size:12px;font-weight:800;letter-spacing:0.12em;text-transform:uppercase;color:${c.amber};">What to bring</p>
            <p style="margin:0;font-family:${body};font-size:14px;line-height:1.55;color:${c.muted};">${esc(lunch.bring)}</p>
          </td>
          <td class="stack" valign="top" width="50%" style="padding:0 0 16px 12px;">
            <p style="margin:0 0 6px 0;font-family:${heading};font-size:12px;font-weight:800;letter-spacing:0.12em;text-transform:uppercase;color:${c.amber};">On the menu</p>
            <p style="margin:0;font-family:${body};font-size:14px;line-height:1.55;color:${c.muted};">${esc(lunch.menu)}</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>

  <!-- Closing CTA band -->
  <tr>
    <td class="px" align="center" bgcolor="${c.amber}" style="background:${c.amber};padding:52px 40px;text-align:center;">
      <h2 class="h2" style="margin:0 0 14px 0;font-family:${heading};font-size:40px;font-weight:900;line-height:1.05;text-transform:uppercase;color:${c.navy};">Secure your seat today</h2>
      <p style="margin:0 auto 28px auto;max-width:440px;font-family:${body};font-size:16px;font-weight:500;line-height:1.6;color:${c.navy};">Lunch is on us, but seats are limited. RSVP by ${esc(event.rsvpBy)} and walk out with one move that makes your business more valuable this week.</p>
      ${ctaButton(rsvpHref, 'Reserve my free seat', 'navy')}
    </td>
  </tr>

  <!-- Footer -->
  <tr>
    <td class="px" align="center" bgcolor="${c.navy}" style="background:${c.navy};padding:32px 40px;text-align:center;font-family:${body};font-size:12px;line-height:1.7;color:#aab4c8;">
      <span style="font-family:${heading};font-weight:800;letter-spacing:0.1em;text-transform:uppercase;color:${c.white};">${esc(issue.publication)}</span><br>
      Questions? Email <a href="mailto:${event.rsvpEmail}" style="color:${c.amber};">${esc(event.rsvpEmail)}</a> &middot; <a href="${pageHref}" style="color:${c.amber};">View event page</a>
    </td>
  </tr>

</table>
</td></tr>
</table>
</body>
</html>`
}
