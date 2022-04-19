import { Dispatch } from 'redux';
import { signin } from '../../api/apiServise';
import { TokensData, ActionType, Tokens } from '../../types/auth';
import { LoginData } from '../../types/auth';
import { Cookie } from '../../utils/cookie';
import { AuthActionTypes } from './actionTypes';


const start = (): ActionType => {
  return { type: AuthActionTypes.FETCH_START };
};
const setTokens = (tokens: TokensData): ActionType => {
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
            const accessToken = tokensData.loginTokens?.user?.accessToken
            const refreshToken = tokensData.loginTokens?.user?.refreshToken
            localStorage.setItem('token', accessToken!);
            Cookie.set('refreshToken', refreshToken, 30);
            //dispatch(setTokens(tokensData))
        } else {
            //dispatch(setTokens(tokensDataError))
        }
        dispatch(end())
    }
}