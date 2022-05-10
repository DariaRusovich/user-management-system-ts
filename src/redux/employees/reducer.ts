import { EmployeesState } from '../../types/employee';
import { EmployeesActionTypes } from './actionTypes';
import { ActionType } from '../employees/types';

const initialState: EmployeesState = {
  employees: [],
  loading: false,
  error: null,
};

export const EmployeesReducer = (
  state = initialState,
  action: ActionType
): EmployeesState => {
  switch (action.type) {
    case EmployeesActionTypes.FETCH_EMPLOYEES_START: {
      return { ...state, loading: true };
    }
    case EmployeesActionTypes.SET_EMPLOYEES: {
      return { ...state, employees: action.payload };
    }
    case EmployeesActionTypes.FETCH_EMPLOYEES_ERROR: {
      return { ...state, error: action.payload };
    }
    case EmployeesActionTypes.FETCH_EMPLOYEES_END: {
      return { ...state, loading: false };
    }
    default:
      return state;
  }
};
