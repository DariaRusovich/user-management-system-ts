import { ActionType } from '../auth/types';
import { LoginData, TokensResponseData } from '../../types/auth';
import { AuthActionTypes } from './actionTypes';

export const start = (): ActionType => {
  return { type: AuthActionTypes.FETCH_TOKENS_START };
};
export const removeToken = () => {
  return { type: AuthActionTypes.LOGOUT };
};
export const setError = (error: string): ActionType => {
  return { type: AuthActionTypes.FETCH_TOKENS_ERROR, payload: error };
};
export const end = (): ActionType => {
  return { type: AuthActionTypes.FETCH_TOKENS_END };
};
