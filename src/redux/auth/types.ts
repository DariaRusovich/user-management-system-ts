import { AuthActionTypes } from './actionTypes';
import { TokensResponseData } from '../../types/auth';

interface FETCH_START {
  type: AuthActionTypes.FETCH_TOKENS_START;
}
interface SET_TOKENS {
  type: AuthActionTypes.SET_TOKENS;
  payload: TokensResponseData | string;
}
interface SET_COOKIES {
  type: AuthActionTypes.SET_COOKIES;
  payload: TokensResponseData;
}
export interface LOGOUT {
  type: AuthActionTypes.LOGOUT;
}
export interface FETCH_TOKENS {
  type: AuthActionTypes.FETCH_TOKENS;
  payload?: TokensResponseData;
}
interface FETCH_END {
  type: AuthActionTypes.FETCH_TOKENS_END;
}
interface FETCH_ERROR {
  type: AuthActionTypes.FETCH_TOKENS_ERROR;
  payload: string;
}
export interface NAVIGATE {
  type: AuthActionTypes.NAVIGATE;
  navigate: (path: string) => void
}
export type ActionType =
  | FETCH_START
  | NAVIGATE
  | SET_TOKENS
  | SET_COOKIES
  | LOGOUT
  | FETCH_TOKENS
  | FETCH_END
  | FETCH_ERROR;
