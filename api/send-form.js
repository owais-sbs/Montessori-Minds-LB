import { sendFormEmail } from '../server/sendMail.js'

function setCors(res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
}

function readJsonBody(req) {
  if (req.body && typeof req.body === 'object') return req.body
  return new Promise((resolve, reject) => {
    let raw = ''
    req.on('data', (chunk) => {
      raw += chunk
      if (raw.length > 1_000_000) {
        reject(new Error('Payload too large'))
        req.destroy()
      }
    })
    req.on('end', () => {
      try {
        resolve(raw ? JSON.parse(raw) : {})
      } catch {
        reject(new Error('Invalid JSON body'))
      }
    })
    req.on('error', reject)
  })
}

export default async function handler(req, res) {
  setCors(res)

  if (req.method === 'OPTIONS') {
    res.statusCode = 204
    res.end()
    return
  }

  if (req.method !== 'POST') {
    res.statusCode = 405
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ ok: false, error: 'Method not allowed' }))
    return
  }

  try {
    const body = await readJsonBody(req)
    const { formType, data } = body

    if (!formType || !data) {
      res.statusCode = 400
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ ok: false, error: 'formType and data are required' }))
      return
    }

    const result = await sendFormEmail({ formType, data })

    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ ok: true, ...result }))
  } catch (error) {
    console.error('[send-form]', error)
    res.statusCode = 500
    res.setHeader('Content-Type', 'application/json')
    res.end(
      JSON.stringify({
        ok: false,
        error: error?.message || 'Failed to send email',
      }),
    )
  }
}
