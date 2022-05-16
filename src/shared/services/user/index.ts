import { LOGIN, REGISTER_API } from '~/shared/constants/api';
import api from '../api';

import { ToastNotification } from '~/shared/components/ToastNotification';
import { LoginResponseDataProps } from '~/shared/dtos/Response';

type LoginProps = {
  email: string;
  password: string;
};

type RegisterProps = {
  name: string;
  email: string;
  password: string;
};

export async function loginUser({
  email,
  password,
}: LoginProps): Promise<LoginResponseDataProps> {
  let responseData: LoginResponseDataProps = {} as LoginResponseDataProps;

  await api
    .post(LOGIN, {
      email,
      password,
    })
    .then(response => {
      responseData = response.data;
    })
    .catch(error => {
      ToastNotification({
        type: 'error',
        title: 'Ops, ocorreu um erro:',
        info: error.response.data.message,
      });
    });

  return responseData;
}

export async function registerUser({ name, email, password }: RegisterProps) {
  await api.post(REGISTER_API, {
    name,
    email,
    password,
  });
}
