import { Dispatch } from 'redux';
import { signin } from '../../api/apiServise';
import { ActionType } from '../auth/types';
import { LoginData, TokensResponseData } from '../../types/auth';
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

const applyLoading = (fn: (dispatch: Dispatch<ActionType>) => void) => {
  return async (dispatch: Dispatch<ActionType>) => {
    dispatch(start());
    await fn(dispatch);
    dispatch(end());
  };
};

export const fetchTokens = (loginData: LoginData) => {
  return applyLoading(async (dispatch: Dispatch<ActionType>) => {
    const [tokensDataError, tokensData] = await signin(loginData);
    if (tokensData) {
      const accessToken = tokensData.user.tokens?.accessToken;
      const refreshToken = tokensData.user.tokens?.refreshToken;
      localStorage.setItem('token', accessToken!);
      Cookie.set('refreshToken', refreshToken, 30);
      dispatch(setTokens(tokensData));
    } else {
      dispatch(setError(tokensDataError.response?.data.message!));
    }
  });
};
