import { Error } from './types';

export interface LoginData {
  username?: string;
  password?: string;
}

export interface Tokens {
  accessToken:  string;
  refreshToken: string;
}
export interface User {
  id: string;
  role: string;
}
export interface UserData {
  tokens: Tokens;
  user: User;
}
export interface TokensResponseData {
  user: UserData;
  response?: Error;
}
export interface RefreshTokensResponseData {
  userData: UserData;
}
export interface TokensData {
  tokens: Tokens;
}
export interface AuthState {
  loading: boolean;
  error: null | string;
  token: TokensResponseData | string;
  cookie: TokensResponseData | string;
}
