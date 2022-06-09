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
    case EmployeesActionTypes.ADD_EMPLOYEE: {
      return { ...state, employees: [...state.employees, action.payload] };
    }
    case EmployeesActionTypes.UPDATE_EMPLOYEE: {
      const copiedState = state.employees;
      const updatedEmployees = copiedState.map(employee => {
        return employee._id === action.payload._id ? action.payload : employee;
      });
      return { ...state, employees: updatedEmployees };
    }
    case EmployeesActionTypes.DELETE_EMPLOYEE: {
      const copiedState = state.employees;
      const employees = copiedState.filter(employee => {
        return employee._id !== action.payload._id;
      });
      return { ...state, employees };
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
