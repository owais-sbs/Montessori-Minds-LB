import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Container from '../components/layout/Container'
import CreamHeroSection from '../components/sections/CreamHeroSection'
import FormField, { inputClassName } from '../components/forms/FormField'
import SuccessMessage from '../components/forms/SuccessMessage'
import { Button } from '../components/ui'
import { FadeUp } from '../components/animations'
import { bookTourSchema } from '../lib/schemas/bookTour'
import { contactPlaceholders } from '../data/contact'
import { programOptions } from '../data/programs'
import { submitFormEmail } from '../lib/submitFormEmail'

const timeOptions = ['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM']

export default function BookATour() {
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const whatsappHref = `https://wa.me/${contactPlaceholders.phoneRaw.replace(/\D/g, '')}`

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

  const onSubmit = async (data) => {
    setSubmitError('')
    try {
      await submitFormEmail('tour', data)
      setSubmitted(true)
    } catch (error) {
      setSubmitError(error?.message || 'Something went wrong. Please try again.')
    }
  }

  return (
    <>
      <CreamHeroSection
        eyebrow="Book a visit"
        title="Book a visit to Montessori Minds"
        titleAccent="Weekday mornings on Saida Old Road."
        description="Tour La Casa Verde in Choueifat, meet Guides, and see Infant, Toddler or Children’s House classrooms in session."
      />

      <section className="bg-warm-beige py-12 md:py-16">
        <Container size="narrow">
          <FadeUp>
            <h2 className="heading-xl">What happens on a visit</h2>
            <p className="body-md mt-4">
              Visits run during school hours so you can see arrival, a work cycle and outdoor time.
              Campus: Saida Old Road, Al Omara District, Choueifat. Phone{' '}
              <a href={contactPlaceholders.phoneTel} className="underline underline-offset-4 hover:text-accent-rose">
                {contactPlaceholders.phone}
              </a>
              .
            </p>
            <ul className="body-md mt-6 list-disc space-y-2 pl-5 text-muted-text">
              <li>Arrive at the gate; a Guide will greet you</li>
              <li>Walk through the prepared environment for your child’s age group</li>
              <li>Observe (quietly) while children work — we avoid interrupting concentration</li>
              <li>Ask about placement, settling-in and current tuition figures</li>
              <li>Typical windows: 9:00 AM, 10:00 AM, 11:00 AM, 1:00 PM, 2:00 PM or 3:00 PM</li>
            </ul>
          </FadeUp>
        </Container>
      </section>

      <section className="bg-warm-cream py-12 md:py-16">
        <Container size="narrow">
          {submitted ? (
            <SuccessMessage
              title="Visit request received"
              description="Thank you — we will be in touch soon to confirm your visit."
              onReset={() => {
                reset()
                setSubmitted(false)
              }}
            />
          ) : (
            <FadeUp>
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6" noValidate>
                <FormField label="Parent's name" id="parentName" error={errors.parentName?.message} required>
                  <input id="parentName" className={inputClassName(errors.parentName)} {...register('parentName')} />
                </FormField>
                <FormField label="Child's name" id="childName" error={errors.childName?.message} required>
                  <input id="childName" className={inputClassName(errors.childName)} {...register('childName')} />
                </FormField>
                <FormField label="Child's date of birth / age" id="childAge" error={errors.childAge?.message} required>
                  <input id="childAge" className={inputClassName(errors.childAge)} placeholder="e.g. 15 March 2023" {...register('childAge')} />
                </FormField>
                <FormField label="Mobile or WhatsApp" id="phone" error={errors.phone?.message} required>
                  <input id="phone" type="tel" className={inputClassName(errors.phone)} {...register('phone')} />
                </FormField>
                <FormField label="Email" id="email" error={errors.email?.message} required>
                  <input id="email" type="email" className={inputClassName(errors.email)} {...register('email')} />
                </FormField>
                <FormField label="Program of interest" id="program">
                  <select id="program" className={inputClassName()} defaultValue="">
                    <option value="" disabled>
                      Select a program
                    </option>
                    {programOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </FormField>
                <FormField label="Preferred visit date" id="preferredDate" error={errors.preferredDate?.message} required>
                  <input id="preferredDate" type="date" className={inputClassName(errors.preferredDate)} {...register('preferredDate')} />
                </FormField>
                <FormField label="Preferred time" id="preferredTime" error={errors.preferredTime?.message} required>
                  <select id="preferredTime" className={inputClassName(errors.preferredTime)} {...register('preferredTime')}>
                    <option value="" disabled>
                      Select a time
                    </option>
                    {timeOptions.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </FormField>
                <FormField label="Message (optional)" id="message">
                  <textarea id="message" rows={3} className={inputClassName()} {...register('message')} />
                </FormField>

                {submitError && (
                  <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800" role="alert">
                    {submitError}
                  </p>
                )}

                <div className="flex flex-col gap-4 pt-2">
                  <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
                    {isSubmitting ? 'Sending…' : 'Book my visit'}
                  </Button>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 border-b border-deep-forest/30 pb-0.5 font-body text-sm font-medium text-deep-forest underline-offset-4 hover:border-accent-rose hover:text-accent-rose"
                  >
                    Prefer WhatsApp? Chat with us
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </form>
            </FadeUp>
          )}
        </Container>
      </section>

      <section className="section-dark py-12 md:py-16">
        <Container size="narrow">
          <FadeUp className="flex flex-col gap-4 text-left">
            <p className="eyebrow">Find us</p>
            <p className="body-md">{contactPlaceholders.address}</p>
            <a href={`tel:${contactPlaceholders.phoneRaw}`} className="body-md hover:text-accent-rose">
              {contactPlaceholders.phone}
            </a>
            <a href={`mailto:${contactPlaceholders.email}`} className="body-md hover:text-accent-rose break-all">
              {contactPlaceholders.email}
            </a>
            <p className="body-sm">{contactPlaceholders.hours}</p>
            <p className="body-sm opacity-75">Parking details — confirm on your visit confirmation.</p>
          </FadeUp>
        </Container>
      </section>
    </>
  )
}
