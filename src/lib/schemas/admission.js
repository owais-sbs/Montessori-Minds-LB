import { z } from 'zod'

export const admissionSchema = z.object({
  parentFirstName: z.string().min(1, 'First name is required'),
  parentLastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(7, 'Please enter a valid phone number'),
  childFirstName: z.string().min(1, 'Child first name is required'),
  childLastName: z.string().min(1, 'Child last name is required'),
  dateOfBirth: z.string().min(1, 'Date of birth is required'),
  program: z.string().min(1, 'Please select a program'),
  previousSchool: z.string().optional(),
  specialRequirements: z.string().optional(),
  message: z.string().optional(),
  referralSource: z.string().min(1, 'Please select a referral source'),
  consent: z.boolean().refine((val) => val === true, {
    message: 'You must agree before submitting',
  }),
})
