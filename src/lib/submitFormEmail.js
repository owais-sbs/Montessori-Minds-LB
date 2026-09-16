/**
 * Submit a website form to the email API.
 * @param {'admission' | 'tour'} formType
 * @param {Record<string, unknown>} data
 */
export async function submitFormEmail(formType, data) {
  const response = await fetch('/api/send-form', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ formType, data }),
  })

  let payload = null
  try {
    payload = await response.json()
  } catch {
    payload = null
  }

  if (!response.ok || !payload?.ok) {
    throw new Error(payload?.error || 'Unable to send your message. Please try again.')
  }

  return payload
}
