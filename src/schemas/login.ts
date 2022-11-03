import { z } from 'zod';

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email({ message: 'Invalid email' }),
  password: z.string().min(8, 'Password requires a minimum of 8 characters'),
});
