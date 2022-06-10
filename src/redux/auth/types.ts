import { AuthActionTypes } from './actionTypes';
import { TokensResponseData } from '../../types/auth';

interface FETCH_START {
  type: AuthActionTypes.FETCH_TOKENS_START;
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
  | LOGOUT
  | FETCH_TOKENS
  | FETCH_END
  | FETCH_ERROR;
