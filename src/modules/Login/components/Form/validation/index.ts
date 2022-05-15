import * as yup from 'yup';

export const validationSchema = yup.object({
  email: yup
    .string()
    .email('Este e-mail não é valido')
    .required('E-mail necessário'),
  password: yup
    .string()
    .required('Senha necessária')
    .min(6, 'Minimo 6 digitos'),
});
