import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { config as loadDotenv } from 'dotenv'
import nodemailer from 'nodemailer'
import { buildAdmissionEmail, buildTourEmail } from './emailTemplate.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

function loadEnvFiles() {
  const root = path.resolve(__dirname, '..')
  loadDotenv({ path: path.join(root, '.env.local'), override: false })
  loadDotenv({ path: path.join(root, '.env'), override: false })
}

function requiredEnv(name) {
  loadEnvFiles()
  const value = process.env[name]
  if (!value) throw new Error(`Missing environment variable: ${name}`)
  return value
}

export function createMailTransport() {
  loadEnvFiles()
  const port = Number(process.env.SMTP_PORT || 587)
  const secure = String(process.env.SMTP_SECURE || 'false') === 'true'

  return nodemailer.createTransport({
    host: requiredEnv('SMTP_HOST'),
    port,
    secure,
    auth: {
      user: requiredEnv('SMTP_USER'),
      // Gmail app passwords work with or without spaces
      pass: requiredEnv('SMTP_PASS').replace(/\s+/g, ''),
    },
  })
}

export async function sendFormEmail({ formType, data }) {
  loadEnvFiles()

  if (!formType || !data || typeof data !== 'object') {
    throw new Error('Invalid form payload')
  }

  let email
  if (formType === 'admission') {
    email = buildAdmissionEmail(data)
  } else if (formType === 'tour') {
    email = buildTourEmail(data)
  } else {
    throw new Error('Unsupported form type')
  }

  const transporter = createMailTransport()
  const to = process.env.ADMIN_EMAIL || 'admin@montessorimindslb.com'
  const from = process.env.SMTP_FROM || `"La Casa Verde" <${process.env.SMTP_USER}>`

  const info = await transporter.sendMail({
    from,
    to,
    replyTo: email.replyTo || undefined,
    subject: email.subject,
    html: email.html,
  })

  return { messageId: info.messageId, to }
}
