import { AuthActionTypes } from './actionTypes';
import { TokensResponseData } from '../../types/auth';

interface FETCH_START {
  type: AuthActionTypes.FETCH_TOKENS_START;
}
interface SET_TOKENS {
  type: AuthActionTypes.SET_TOKENS;
  payload: TokensResponseData;
}
interface SET_COOKIES {
  type: AuthActionTypes.SET_COOKIES;
  payload: TokensResponseData;
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
export type ActionType =
  | FETCH_START
  | SET_TOKENS
  | SET_COOKIES
  | FETCH_TOKENS
  | FETCH_END
  | FETCH_ERROR;
