import { z } from 'zod'

export const bookTourSchema = z.object({
  parentName: z.string().min(1, 'Name is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(7, 'Please enter a valid phone number'),
  childName: z.string().min(1, 'Child name is required'),
  childAge: z.string().min(1, 'Child age is required'),
  preferredDate: z.string().min(1, 'Preferred date is required'),
  preferredTime: z.string().min(1, 'Preferred time is required'),
  numberOfVisitors: z.string().min(1, 'Number of visitors is required'),
  message: z.string().optional(),
})
