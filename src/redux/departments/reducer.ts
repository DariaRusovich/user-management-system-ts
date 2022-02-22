import { DepartmentsActionTypes } from './actionTypes';
import { IDepatmentsState, ActionType } from '../../types/departments';

const initialState: IDepatmentsState = {
  departments: [],
  loading: false,
  error: null,
};

export const DepartmentsReducer = (state = initialState, action: ActionType): IDepatmentsState => {
  switch (action.type) {
    case DepartmentsActionTypes.FETCH_START: {
      return { ...state, loading: true };
    }
    case DepartmentsActionTypes.SET_DEPARTMENTS: {
      return { ...state, departments: action.payload };
    }
    case DepartmentsActionTypes.FETCH_ERROR: {
      return { ...state, error: action.payload };
    }
    case DepartmentsActionTypes.FETCH_END: {
      return { ...state, loading: false };
    }

    default:
      return state;
  }
};
