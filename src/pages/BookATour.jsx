import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Container from '../components/layout/Container'
import PageHero from '../components/sections/PageHero'
import FormField, { inputClassName } from '../components/forms/FormField'
import SuccessMessage from '../components/forms/SuccessMessage'
import { Button } from '../components/ui'
import { FadeUp } from '../components/animations'
import { bookTourSchema } from '../lib/schemas/bookTour'
import { contactPlaceholders } from '../data/contact'
import { images } from '../data/images'

const timeOptions = [
  '9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM',
]

export default function BookATour() {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(bookTourSchema),
    defaultValues: {
      parentName: '',
      email: '',
      phone: '',
      childName: '',
      childAge: '',
      preferredDate: '',
      preferredTime: '',
      numberOfVisitors: '2',
      message: '',
    },
  })

  const onSubmit = () => {
    setSubmitted(true)
  }

  return (
    <>
      <PageHero
        eyebrow="Visit Us"
        title="Book A Tour"
        description="Schedule a personal visit to experience the calm, purposeful beauty of La Casa Verde."
        image={images.preparedEnvironment}
        imageAlt="Book a tour at La Casa Verde preschool"
      />

      {/* Contact Info Bar */}
      <section className="border-b border-forest-green/8" style={{ backgroundColor: '#f7f4ec' }}>
        <Container>
          <div className="grid gap-4 py-8 sm:grid-cols-3">
            <div className="flex items-center gap-4 rounded-xl bg-white/80 px-5 py-4 shadow-sm border border-forest-green/5 transition-all hover:shadow-md hover:border-olive/15">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-olive/10">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5 text-olive" aria-hidden="true">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
              </div>
              <div>
                <p className="eyebrow text-xs mb-1">Address</p>
                <p className="body-sm font-medium">{contactPlaceholders.address}</p>
              </div>
            </div>
            <a href={`tel:${contactPlaceholders.phoneRaw}`} className="flex items-center gap-4 rounded-xl bg-white/80 px-5 py-4 shadow-sm border border-forest-green/5 transition-all hover:shadow-md hover:border-olive/15 hover:bg-olive/[0.03]">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-olive/10">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5 text-olive" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <div>
                <p className="eyebrow text-xs mb-1">Phone</p>
                <p className="body-sm font-medium">{contactPlaceholders.phone}</p>
              </div>
            </a>
            <a href={`mailto:${contactPlaceholders.email}`} className="flex items-center gap-4 rounded-xl bg-white/80 px-5 py-4 shadow-sm border border-forest-green/5 transition-all hover:shadow-md hover:border-olive/15 hover:bg-olive/[0.03]">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-olive/10">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5 text-olive" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <p className="eyebrow text-xs mb-1">Email</p>
                <p className="body-sm font-medium break-all">{contactPlaceholders.email}</p>
              </div>
            </a>
          </div>
        </Container>
      </section>

      <section className="bg-warm-beige py-20 md:py-28">
        <Container>
          {submitted ? (
            <SuccessMessage
              title="Tour Request Received"
              description="Thank you for your interest in La Casa Verde. We will confirm your visit details shortly."
              onReset={() => {
                reset()
                setSubmitted(false)
              }}
            />
          ) : (
            <FadeUp>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-8 rounded-3xl bg-warm-cream p-8 md:p-12"
                noValidate
              >
                <div className="grid gap-6 md:grid-cols-3">
                  <FormField label="Parent / Guardian Name" id="parentName" error={errors.parentName?.message} required>
                    <input id="parentName" className={inputClassName(errors.parentName)} {...register('parentName')} aria-invalid={!!errors.parentName} />
                  </FormField>
                  <FormField label="Email" id="email" error={errors.email?.message} required>
                    <input id="email" type="email" className={inputClassName(errors.email)} {...register('email')} aria-invalid={!!errors.email} />
                  </FormField>
                  <FormField label="Phone" id="phone" error={errors.phone?.message} required>
                    <input id="phone" type="tel" className={inputClassName(errors.phone)} {...register('phone')} aria-invalid={!!errors.phone} />
                  </FormField>
                </div>
                <div className="grid gap-6 md:grid-cols-4">
                  <FormField label="Child Name" id="childName" error={errors.childName?.message} required>
                    <input id="childName" className={inputClassName(errors.childName)} {...register('childName')} aria-invalid={!!errors.childName} />
                  </FormField>
                  <FormField label="Child Age" id="childAge" error={errors.childAge?.message} required>
                    <input id="childAge" className={inputClassName(errors.childAge)} placeholder="e.g. 2 years" {...register('childAge')} aria-invalid={!!errors.childAge} />
                  </FormField>
                  <FormField label="Preferred Date" id="preferredDate" error={errors.preferredDate?.message} required>
                    <input id="preferredDate" type="date" className={inputClassName(errors.preferredDate)} {...register('preferredDate')} aria-invalid={!!errors.preferredDate} />
                  </FormField>
                  <FormField label="Preferred Time" id="preferredTime" error={errors.preferredTime?.message} required>
                    <select id="preferredTime" className={inputClassName(errors.preferredTime)} {...register('preferredTime')}>
                      <option value="" disabled>Select a time</option>
                      {timeOptions.map((time) => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </FormField>
                </div>
                <div className="grid gap-6 md:grid-cols-3">
                  <FormField label="Number of Visitors" id="numberOfVisitors" error={errors.numberOfVisitors?.message} required>
                    <select id="numberOfVisitors" className={inputClassName(errors.numberOfVisitors)} {...register('numberOfVisitors')} aria-invalid={!!errors.numberOfVisitors}>
                      {[1, 2, 3, 4, 5].map((n) => (
                        <option key={n} value={String(n)}>{n}</option>
                      ))}
                    </select>
                  </FormField>
                  <div className="md:col-span-2">
                    <FormField label="Message" id="message">
                      <textarea id="message" rows={3} className={inputClassName()} placeholder="Any questions or special requests?" {...register('message')} />
                    </FormField>
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button type="submit" disabled={isSubmitting}>
                    Request A Tour
                  </Button>
                </div>
              </form>
            </FadeUp>
          )}
        </Container>
      </section>
    </>
  )
}
