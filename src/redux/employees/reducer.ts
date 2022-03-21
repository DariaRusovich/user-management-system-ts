import { ActionType, IEmployeesState } from "../../types/employee";
import { EmployeesActionTypes } from "./actionTypes";

const initialState: IEmployeesState = {
    employees: [],
    loading: false,
    error: null,
}

export const EmployeesReducer = (state = initialState, action: ActionType):IEmployeesState => {
    switch (action.type) {
        case EmployeesActionTypes.FETCH_START: {
          return { ...state, loading: true };
        }
        case EmployeesActionTypes.SET_EMPLOYEES: {
          return { ...state, employees: action.payload };
        }
        case EmployeesActionTypes.FETCH_ERROR: {
          return { ...state, error: action.payload };
        }
        case EmployeesActionTypes.FETCH_END: {
          return { ...state, loading: false };
        }
        default:
          return state;
      }
}