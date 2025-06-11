import {z} from 'zod';

export const loginScreenSchema = z.object({
  email: z.string().email('E-mail inválido'),
  password: z.string().min(6, 'Mínimo 6 caracteres.'),
});

export type LoginSchemaType = z.infer<typeof loginScreenSchema>;
