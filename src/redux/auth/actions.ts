import { Dispatch } from 'redux';
import { signin } from '../../api/apiServise';
import { ActionType, UserData } from '../../types/auth';
import { LoginData } from '../../types/auth';
import { Cookie } from '../../utils/cookie';
import { AuthActionTypes } from './actionTypes';

const start = (): ActionType => {
  return { type: AuthActionTypes.FETCH_START };
};
const setTokens = (tokens: UserData): ActionType => {
  return { type: AuthActionTypes.SET, payload: tokens };
};
const setError = (error: string): ActionType => {
    return { type: AuthActionTypes.FETCH_ERROR, payload: error}
}
const end = (): ActionType => {
    return {type: AuthActionTypes.FETCH_END}
}

export const fetchTokens = (loginData: LoginData) => {
    return async (dispatch: Dispatch<ActionType>) => {
        dispatch(start())
        const [tokensDataError, tokensData] = await signin(loginData)
        if (!tokensDataError) {
            const accessToken = tokensData.user?.tokens.accessToken
            const refreshToken = tokensData.user?.tokens.accessToken
            localStorage.setItem('token', accessToken!);
            Cookie.set('refreshToken', refreshToken, 30);
            dispatch(setTokens(tokensData))
        } else {
            dispatch(setError(tokensDataError.response!.data.message))
        }
        dispatch(end())
    }
}