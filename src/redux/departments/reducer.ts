import { DepartmentsActionTypes } from './actionTypes';
import { DepatmentsState, ActionType } from '../../types/departments';

const initialState: DepatmentsState = {
  departments: [],
  loading: false,
  error: null,
};

export const DepartmentsReducer = (state = initialState, action: ActionType): DepatmentsState => {
  switch (action.type) {
    case DepartmentsActionTypes.FETCH_START: {
      return { ...state, loading: true };
    }
    case DepartmentsActionTypes.SET_DEPARTMENTS: {
      return { ...state, departments: action.payload };
    }
    case DepartmentsActionTypes.ADD_DEPARTMENT: {
      return { ...state, departments: [...state.departments, action.payload] };
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
