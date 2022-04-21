import { AuthActionTypes } from '../redux/auth/actionTypes';

export interface LoginData {
  username?: string;
  password?: string;
  user?: TokensData;
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
  tokens: any;
}

// export interface LoginData {
//   username?: string;
//   password?: string;
//   tokens?: Tokens;
//   loading?: boolean;
//   error?: null | string;
// }
// export interface TokensData extends LoginData {
//   user?: TokensData | null;
// }
// export interface AuthState {
//   tokens?: Tokens;
//   user?: TokensData | null;
//   loading: boolean;
//   error: null | string;
// }
// export interface Tokens {
//   accessToken: null | string;
//   refreshToken: null | string;
// }

interface FETCH_START {
  type: AuthActionTypes.FETCH_START;
}
interface SET_TOKENS {
  type: AuthActionTypes.SET;
  payload: TokensData;
}
interface FETCH_END {
  type: AuthActionTypes.FETCH_END;
}
interface FETCH_ERROR {
  type: AuthActionTypes.FETCH_ERROR;
  payload: string;
}
export type ActionType = FETCH_START | SET_TOKENS | FETCH_END | FETCH_ERROR;
