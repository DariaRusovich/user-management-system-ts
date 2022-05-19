import { ActionType } from '../auth/types';
import { LoginData, TokensResponseData } from '../../types/auth';
import { AuthActionTypes } from './actionTypes';

export const start = (): ActionType => {
  return { type: AuthActionTypes.FETCH_TOKENS_START };
};
export const setTokens = (tokens: TokensResponseData): ActionType => {
  return { type: AuthActionTypes.SET_TOKENS, payload: tokens };
};
export const fetchTokens = (loginData: LoginData) => {
  return { type: AuthActionTypes.FETCH_TOKENS, payload: loginData };
};
export const setError = (error: string): ActionType => {
  return { type: AuthActionTypes.FETCH_TOKENS_ERROR, payload: error };
};
export const end = (): ActionType => {
  return { type: AuthActionTypes.FETCH_TOKENS_END };
};
