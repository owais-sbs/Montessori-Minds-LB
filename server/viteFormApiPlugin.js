import { config as loadEnv } from 'dotenv'
import { sendFormEmail } from '../server/sendMail.js'

loadEnv()

async function readBody(req) {
  const chunks = []
  for await (const chunk of req) chunks.push(chunk)
  const raw = Buffer.concat(chunks).toString('utf8')
  return raw ? JSON.parse(raw) : {}
}

function sendJson(res, status, payload) {
  res.statusCode = status
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(payload))
}

/**
 * Vite plugin that handles POST /api/send-form during local development.
 */
export function formEmailApiPlugin() {
  return {
    name: 'form-email-api',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = req.url?.split('?')[0]
        if (url !== '/api/send-form') return next()

        if (req.method === 'OPTIONS') {
          res.statusCode = 204
          res.end()
          return
        }

        if (req.method !== 'POST') {
          sendJson(res, 405, { ok: false, error: 'Method not allowed' })
          return
        }

        try {
          const body = await readBody(req)
          const result = await sendFormEmail({
            formType: body.formType,
            data: body.data,
          })
          sendJson(res, 200, { ok: true, ...result })
        } catch (error) {
          console.error('[vite api/send-form]', error)
          sendJson(res, 500, {
            ok: false,
            error: error?.message || 'Failed to send email',
          })
        }
      })
    },
  }
}
