import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Container from '../components/layout/Container'
import PageHero from '../components/sections/PageHero'
import FormField, { inputClassName } from '../components/forms/FormField'
import SuccessMessage from '../components/forms/SuccessMessage'
import { Button } from '../components/ui'
import { FadeUp } from '../components/animations'
import { admissionSchema } from '../lib/schemas/admission'
import { programOptions } from '../data/programs'
import { images } from '../data/images'

const referralOptions = [
  { value: 'website', label: 'Website' },
  { value: 'google', label: 'Google' },
  { value: 'social', label: 'Social Media' },
  { value: 'friend', label: 'Friend / Family' },
  { value: 'other', label: 'Other' },
]

export default function Admission() {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(admissionSchema),
    defaultValues: {
      parentFirstName: '',
      parentLastName: '',
      email: '',
      phone: '',
      childFirstName: '',
      childLastName: '',
      dateOfBirth: '',
      program: '',
      previousSchool: '',
      specialRequirements: '',
      message: '',
      referralSource: '',
      consent: false,
    },
  })

  const onSubmit = () => {
    setSubmitted(true)
  }

  return (
    <>
      <PageHero
        eyebrow="Admissions"
        title="Begin Their Journey"
        description="Complete the form below to express your interest in enrollment at Montessori Minds LB."
        image={images.classroom}
        imageAlt="Montessori Minds LB admissions"
      />
    <section className="bg-warm-beige py-20 md:py-28">
        <Container size="narrow">
          {submitted ? (
            <SuccessMessage
              title="Application Received"
              description="Thank you for your interest in Montessori Minds LB. We will review your submission and be in touch soon."
              onReset={() => {
                reset()
                setSubmitted(false)
              }}
            />
          ) : (
            <FadeUp>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-10 rounded-3xl bg-warm-cream p-8 md:p-12"
                noValidate
              >
                <fieldset className="flex flex-col gap-6">
                  <legend className="heading-md mb-2">Parent / Guardian Information</legend>
                  <div className="grid gap-6 md:grid-cols-2">
                    <FormField label="First Name" id="parentFirstName" error={errors.parentFirstName?.message} required>
                      <input id="parentFirstName" className={inputClassName(errors.parentFirstName)} {...register('parentFirstName')} aria-invalid={!!errors.parentFirstName} />
                    </FormField>
                    <FormField label="Last Name" id="parentLastName" error={errors.parentLastName?.message} required>
                      <input id="parentLastName" className={inputClassName(errors.parentLastName)} {...register('parentLastName')} aria-invalid={!!errors.parentLastName} />
                    </FormField>
                  </div>
                  <div className="grid gap-6 md:grid-cols-2">
                    <FormField label="Email" id="email" error={errors.email?.message} required>
                      <input id="email" type="email" className={inputClassName(errors.email)} {...register('email')} aria-invalid={!!errors.email} />
                    </FormField>
                    <FormField label="Phone" id="phone" error={errors.phone?.message} required>
                      <input id="phone" type="tel" className={inputClassName(errors.phone)} {...register('phone')} aria-invalid={!!errors.phone} />
                    </FormField>
                  </div>
                </fieldset>

                <fieldset className="flex flex-col gap-6">
                  <legend className="heading-md mb-2">Child Information</legend>
                  <div className="grid gap-6 md:grid-cols-2">
                    <FormField label="Child First Name" id="childFirstName" error={errors.childFirstName?.message} required>
                      <input id="childFirstName" className={inputClassName(errors.childFirstName)} {...register('childFirstName')} aria-invalid={!!errors.childFirstName} />
                    </FormField>
                    <FormField label="Child Last Name" id="childLastName" error={errors.childLastName?.message} required>
                      <input id="childLastName" className={inputClassName(errors.childLastName)} {...register('childLastName')} aria-invalid={!!errors.childLastName} />
                    </FormField>
                  </div>
                  <div className="grid gap-6 md:grid-cols-2">
                    <FormField label="Date of Birth" id="dateOfBirth" error={errors.dateOfBirth?.message} required>
                      <input id="dateOfBirth" type="date" className={inputClassName(errors.dateOfBirth)} {...register('dateOfBirth')} aria-invalid={!!errors.dateOfBirth} />
                    </FormField>
                    <FormField label="Program Interested In" id="program" error={errors.program?.message} required>
                      <select id="program" className={inputClassName(errors.program)} {...register('program')}>
                        <option value="" disabled>Select a program</option>
                        {programOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                      </select>
                    </FormField>
                  </div>
                </fieldset>

                <fieldset className="flex flex-col gap-6">
                  <legend className="heading-md mb-2">Additional Information</legend>
                  <FormField label="Previous School / Preschool" id="previousSchool">
                    <input id="previousSchool" className={inputClassName()} {...register('previousSchool')} />
                  </FormField>
                  <FormField label="Special Requirements" id="specialRequirements">
                    <textarea id="specialRequirements" rows={3} className={inputClassName()} {...register('specialRequirements')} />
                  </FormField>
                  <FormField label="Message" id="message">
                    <textarea id="message" rows={4} className={inputClassName()} {...register('message')} />
                  </FormField>
                  <FormField label="Referral Source" id="referralSource" error={errors.referralSource?.message} required>
                      <select id="referralSource" className={inputClassName(errors.referralSource)} {...register('referralSource')}>
                        <option value="" disabled>How did you hear about us?</option>
                      {referralOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </FormField>
                </fieldset>

                <div className="flex flex-col gap-2">
                  <label htmlFor="consent" className="flex items-start gap-3">
                    <input
                      id="consent"
                      type="checkbox"
                      className="mt-1 h-4 w-4 shrink-0 rounded border-forest-green/20 text-olive focus:ring-olive/30"
                      aria-describedby={errors.consent ? 'consent-error' : undefined}
                      aria-invalid={!!errors.consent}
                      {...register('consent')}
                    />
                    <span className="body-sm">
                      I understand that submitting this form is an expression of interest and does not guarantee enrollment.
                    </span>
                  </label>
                  {errors.consent && (
                    <p id="consent-error" className="text-sm text-red-700" role="alert">
                      {errors.consent.message}
                    </p>
                  )}
                </div>

                <Button type="submit" disabled={isSubmitting}>
                  Submit Application
                </Button>
              </form>
            </FadeUp>
          )}
        </Container>
      </section>
    </>
  )
}
