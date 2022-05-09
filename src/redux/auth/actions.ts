import { Dispatch } from 'redux';
import { signin } from '../../api/apiServise';
import { ActionType } from '../auth/types';
import { TokensResponseData } from "../../types/auth";
import { LoginData } from '../../types/auth';
import { Cookie } from '../../utils/cookie';
import { AuthActionTypes } from './actionTypes';

const start = (): ActionType => {
  return { type: AuthActionTypes.FETCH_TOKENS_START };
};
const setTokens = (tokens: TokensResponseData): ActionType => {
  return { type: AuthActionTypes.SET_TOKENS, payload: tokens };
};
const setError = (error: string): ActionType => {
  return { type: AuthActionTypes.FETCH_TOKENS_ERROR, payload: error };
};
const end = (): ActionType => {
  return { type: AuthActionTypes.FETCH_TOKENS_END };
};

export const fetchTokens = (loginData: LoginData) => {
  return async (dispatch: Dispatch<ActionType>) => {
    dispatch(start());
    const [tokensDataError, tokensData] = await signin(loginData);
    if (!tokensDataError) {
      const accessToken = tokensData.user.tokens?.accessToken;
      const refreshToken = tokensData.user.tokens?.refreshToken;
      localStorage.setItem('token', accessToken!);
      Cookie.set('refreshToken', refreshToken, 30);
      dispatch(setTokens(tokensData))
    } else {
      dispatch(setError(tokensDataError.response?.data.message!))
    }
    dispatch(end());
  };
};
