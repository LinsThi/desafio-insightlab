import * as yup from 'yup';

export const validationSchema = yup.object({
  name: yup.string().required('Nome obrigatório'),
  cpf: yup.string().required('CPF obrigatório').min(14, 'CPF Inválido'),
  birthDay: yup
    .string()
    .required('Data de aniversário necessário')
    .min(8, 'Data Inválida'),
  vacinne: yup.string().required('Vacina obrigatória'),
  dose: yup
    .string()
    .required('Dose necessária')
    .oneOf(['1', '2'], 'Dose errada'),
});
