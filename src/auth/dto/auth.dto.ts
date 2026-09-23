import { z } from 'zod';

export class AuthPayloadDTO {
  name: string;
  password: string;
}

export const authPayloadSchema: z.ZodType<AuthPayloadDTO> = z
  .object({
    name: z.string().min(1),
    password: z.string().min(1, 'Password is Requied '),
  })
  .strict();
