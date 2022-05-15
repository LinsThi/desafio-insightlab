import { action } from 'typesafe-actions';
import { UserLoginProps, UserLoggoutProps, UserTypes } from './types';

export const userLoginAction = (name: string, token: string): UserLoginProps =>
  action(UserTypes.USER_LOGIN, {
    name,
    token,
  });

export const userLoggoutAction = (): UserLoggoutProps =>
  action(UserTypes.USER_LOGGOUT);
