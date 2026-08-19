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
        description="Schedule a personal visit to experience the calm, purposeful beauty of Montessori Minds LB."
        image={images.preparedEnvironment}
        imageAlt="Book a tour at Montessori Minds LB"
      />
      <section className="bg-warm-beige py-20 md:py-28">
        <Container>
          {submitted ? (
            <SuccessMessage
              title="Tour Request Received"
              description="Thank you for your interest. We will confirm your visit details shortly."
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
