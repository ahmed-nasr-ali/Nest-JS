import { z } from 'zod';

export const createCustomerSchema = z
  .object({
    nationalID: z
      .string()
      .regex(/^\d{15}$/, 'nationalID must be exactly 15 digits')
      .transform(Number)
      .optional(),
    name: z.string(),
    age: z.number(),
  })
  .strict();

export type CustomerDTO = z.infer<typeof createCustomerSchema>;
