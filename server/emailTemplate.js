const LOGO_URL =
  'https://www.montessorimindslb.com/images/branding/La%20casa%20verde%20logo2.png'

const BRAND = {
  forest: '#27351f',
  olive: '#68734a',
  cream: '#f7f4ec',
  beige: '#e9e2d3',
  muted: '#6f7167',
  dark: '#24271f',
  white: '#ffffff',
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function formatLabel(key) {
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/_/g, ' ')
    .replace(/^\w/, (c) => c.toUpperCase())
    .trim()
}

function formatValue(value) {
  if (value === true) return 'Yes'
  if (value === false) return 'No'
  if (value == null || value === '') return '—'
  return String(value)
}

/**
 * @param {{ title: string, subtitle: string, fields: Array<{ label: string, value: unknown }>, footerNote?: string }} options
 */
export function buildFormEmailHtml({ title, subtitle, fields, footerNote }) {
  const rows = fields
    .map(
      ({ label, value }, index) => `
      <tr>
        <td style="padding:14px 18px;border-bottom:1px solid #e9e2d3;background:${index % 2 === 0 ? BRAND.white : BRAND.cream};width:38%;vertical-align:top;">
          <span style="font-family:Georgia,'Times New Roman',serif;font-size:13px;letter-spacing:0.04em;text-transform:uppercase;color:${BRAND.olive};">${escapeHtml(label)}</span>
        </td>
        <td style="padding:14px 18px;border-bottom:1px solid #e9e2d3;background:${index % 2 === 0 ? BRAND.white : BRAND.cream};vertical-align:top;">
          <span style="font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.5;color:${BRAND.dark};">${escapeHtml(formatValue(value))}</span>
        </td>
      </tr>`,
    )
    .join('')

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(title)}</title>
</head>
<body style="margin:0;padding:0;background:${BRAND.beige};">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:${BRAND.beige};padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;background:${BRAND.white};border-radius:20px;overflow:hidden;box-shadow:0 8px 30px rgba(39,53,31,0.08);">
          <tr>
            <td style="background:linear-gradient(135deg, ${BRAND.forest} 0%, ${BRAND.olive} 100%);padding:28px 32px;text-align:center;">
              <img src="${LOGO_URL}" alt="La Casa Verde" width="96" height="96" style="display:block;margin:0 auto 14px;border-radius:12px;background:${BRAND.white};object-fit:contain;" />
              <h1 style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:26px;font-weight:600;color:${BRAND.white};letter-spacing:0.02em;">La Casa Verde</h1>
              <p style="margin:6px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:rgba(247,244,236,0.85);">By Montessori Minds</p>
            </td>
          </tr>
          <tr>
            <td style="padding:28px 32px 8px;">
              <p style="margin:0 0 6px;font-family:Arial,Helvetica,sans-serif;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:${BRAND.olive};">${escapeHtml(subtitle)}</p>
              <h2 style="margin:0 0 10px;font-family:Georgia,'Times New Roman',serif;font-size:22px;color:${BRAND.forest};">${escapeHtml(title)}</h2>
              <p style="margin:0 0 20px;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.6;color:${BRAND.muted};">A new form submission was received from the website. Full details are below.</p>
            </td>
          </tr>
          <tr>
            <td style="padding:0 24px 24px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid ${BRAND.beige};border-radius:14px;overflow:hidden;">
                ${rows}
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 32px 28px;">
              <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.6;color:${BRAND.muted};">${escapeHtml(footerNote || 'Please reply to the parent/guardian email address listed above.')}</p>
            </td>
          </tr>
          <tr>
            <td style="background:${BRAND.cream};padding:18px 32px;text-align:center;border-top:1px solid ${BRAND.beige};">
              <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:${BRAND.muted};">
                Choueifat, Lebanon · Saida Old Road, Al Omara District<br />
                <a href="mailto:hello@montessorimindslb.com" style="color:${BRAND.olive};text-decoration:none;">hello@montessorimindslb.com</a>
                · +961 71 007 150
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

const PROGRAM_LABELS = {
  nest: 'The Nest (Infants 0–18 months)',
  sprout: 'The Sprout (Toddlers 18 months–3 years)',
  bloom: 'The Bloom (Preschool 3–6 years)',
}

const REFERRAL_LABELS = {
  website: 'Website',
  google: 'Google',
  social: 'Social Media',
  friend: 'Friend / Family',
  other: 'Other',
}

export function buildAdmissionEmail(data) {
  const fields = [
    { label: 'Parent First Name', value: data.parentFirstName },
    { label: 'Parent Last Name', value: data.parentLastName },
    { label: 'Email', value: data.email },
    { label: 'Phone', value: data.phone },
    { label: 'Child First Name', value: data.childFirstName },
    { label: 'Child Last Name', value: data.childLastName },
    { label: 'Date of Birth', value: data.dateOfBirth },
    { label: 'Program', value: PROGRAM_LABELS[data.program] || data.program },
    { label: 'Previous School', value: data.previousSchool },
    { label: 'Special Requirements', value: data.specialRequirements },
    { label: 'Message', value: data.message },
    { label: 'Referral Source', value: REFERRAL_LABELS[data.referralSource] || data.referralSource },
    { label: 'Consent Confirmed', value: data.consent },
  ]

  const subject = `New Admission Application — ${data.childFirstName || ''} ${data.childLastName || ''}`.trim()

  return {
    subject,
    html: buildFormEmailHtml({
      title: 'New Admission Application',
      subtitle: 'Admissions form',
      fields,
    }),
    replyTo: data.email,
  }
}

export function buildTourEmail(data) {
  const fields = [
    { label: 'Parent / Guardian Name', value: data.parentName },
    { label: 'Email', value: data.email },
    { label: 'Phone', value: data.phone },
    { label: 'Child Name', value: data.childName },
    { label: 'Child Age', value: data.childAge },
    { label: 'Preferred Date', value: data.preferredDate },
    { label: 'Preferred Time', value: data.preferredTime },
    { label: 'Number of Visitors', value: data.numberOfVisitors },
    { label: 'Message', value: data.message },
  ]

  const subject = `New Tour Request — ${data.parentName || 'Website'}`.trim()

  return {
    subject,
    html: buildFormEmailHtml({
      title: 'New Tour Request',
      subtitle: 'Book a tour form',
      fields,
    }),
    replyTo: data.email,
  }
}

export function fieldsFromObject(data, exclude = []) {
  return Object.entries(data)
    .filter(([key]) => !exclude.includes(key))
    .map(([key, value]) => ({ label: formatLabel(key), value }))
}
