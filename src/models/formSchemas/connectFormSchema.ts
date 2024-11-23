import { z } from 'zod';

export const connectFormSchema = z.object({
  email: z
    .string()
    .email({ message: 'Please enter a valid email address' })
    .min(5),
  name: z.string().min(2, { message: 'Please enter your name' }),
  message: z
    .string()
    .min(2, { message: 'Please let us know how we can help you' }),
});
