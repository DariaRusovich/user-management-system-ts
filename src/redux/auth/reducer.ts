import { ActionType, AuthState } from '../../types/auth';
import { AuthActionTypes } from './actionTypes';

const InitialState: AuthState = {
  tokens: null,
  loading: false,
  error: null,
};

export const AuthReducer = (
  state = InitialState,
  action: ActionType
): AuthState => {
  switch (action.type) {
    case AuthActionTypes.FETCH_START: {
      return { ...state, loading: true };
    }
    case AuthActionTypes.SET_TOKENS: {
      return { ...state, tokens: action.payload };
    }
    case AuthActionTypes.FETCH_END: {
      return { ...state, loading: false };
    }
    case AuthActionTypes.FETCH_ERROR: {
      return { ...state, error: action.payload };
    }

    default:
      return state;
  }
};
