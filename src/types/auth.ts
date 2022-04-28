import { AuthActionTypes } from '../redux/auth/actionTypes';
import { Error } from './types';

export interface LoginData {
  username?: string;
  password?: string;
}
export interface TokensResponseData{
  user: UserData
}
export interface UserData {
  tokens: Tokens;
  user: User;
  response?: Error;
}
export interface User {
  id: string;
  role: string;
}
export interface TokensResponseData {
  user: UserData;
}
export interface TokensData {
  tokens: Tokens;
}
export interface Tokens {
  accessToken: null | string;
  refreshToken: null | string;
}
export interface AuthState {
  loading: boolean;
  error: null | string;
  tokens: TokensResponseData | null;
}
interface FETCH_START {
  type: AuthActionTypes.FETCH_START;
}
interface SET_TOKENS {
  type: AuthActionTypes.SET_TOKENS;
  payload: TokensResponseData;
}
interface FETCH_END {
  type: AuthActionTypes.FETCH_END;
}
interface FETCH_ERROR {
  type: AuthActionTypes.FETCH_ERROR;
  payload: string;
}
export type ActionType = FETCH_START | SET_TOKENS | FETCH_END | FETCH_ERROR;
