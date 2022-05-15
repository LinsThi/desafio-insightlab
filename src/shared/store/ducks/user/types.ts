import type { Action } from 'typesafe-actions';

export enum UserTypes {
  USER_LOGIN = '@user/USER_LOGIN',
  USER_LOGGOUT = '@user/USER_LOGGOUT',
}

export interface UserState {
  token: string;
  name: string;
  isLogged: boolean;
}

export interface UserLoginProps extends Action {
  type: UserTypes.USER_LOGIN;
  payload: { name: string; token: string };
}

export interface UserLoggoutProps extends Action {
  type: UserTypes.USER_LOGGOUT;
}
