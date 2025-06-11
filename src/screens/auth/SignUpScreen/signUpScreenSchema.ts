import {stringUtils} from '@utils';
import {z} from 'zod';

export const signUpScreenSchema = z.object({
  name: z
    .string()
    .min(3, 'Nome muito curto')
    .max(30, 'Nome muito longo')
    .transform(stringUtils.capitalizeFirstLetter),
  email: z.string().email('E-mail inválido'),
  password: z.string().min(6, 'Mínimo 6 caracteres'),
});

export type SignUpSchemaType = z.infer<typeof signUpScreenSchema>;
