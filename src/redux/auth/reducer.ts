import { LoginData, ActionType } from '../../types/auth';
import { AuthActionTypes } from './actionTypes';
import { TokensData } from "../../types/auth";


const InitialState: LoginData = {
  loginTokens: null,
  loading: false,
  error: null,
};

export const AuthReducer = (
  state = InitialState,
  action: ActionType
): LoginData => {
  switch (action.type) {
    case AuthActionTypes.FETCH_START: {
      return { ...state, loading: true };
    }
    case AuthActionTypes.SET: {
      return { ...state, loginTokens: action.payload };
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
