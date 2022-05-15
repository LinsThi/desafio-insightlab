import * as yup from 'yup';

export const validationSchema = yup.object({
  name: yup.string().required('Nome necessário'),
  number: yup.string().required('Número necessário'),
  email: yup
    .string()
    .email('Este e-mail não é valido')
    .required('E-mail necessário'),
  password: yup
    .string()
    .required('Senha necessária')
    .min(6, 'Minimo 6 digitos'),
});
