import { AuthState } from '../../types/auth';
import { AuthActionTypes } from './actionTypes';
import { ActionType } from '../auth/types';

const InitialState: AuthState = {
  token: '',
  cookie: '',
  loading: false,
  error: null,
};

export const AuthReducer = (
  state = InitialState,
  action: ActionType
): AuthState => {
  switch (action.type) {
    case AuthActionTypes.FETCH_TOKENS_START: {
      return { ...state, loading: true };
    }
    case AuthActionTypes.SET_TOKENS: {
      return { ...state, token: action.payload };
    }
    case AuthActionTypes.SET_COOKIES: {
      return { ...state, cookie: action.payload };
    }
    case AuthActionTypes.FETCH_TOKENS_END: {
      return { ...state, loading: false };
    }
    case AuthActionTypes.FETCH_TOKENS_ERROR: {
      return { ...state, error: action.payload };
    }
    default:
      return state;
  }
};
