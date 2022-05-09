import { EmployeesActionTypes } from "../employees/actionTypes";
import { EmployeeData } from "../../types/employee";


interface FetchStart {
    type: EmployeesActionTypes.FETCH_EMPLOYEES_START;
  }
  interface SetEmployees {
    type: EmployeesActionTypes.SET_EMPLOYEES;
    payload: EmployeeData[];
  }
  interface FetchError {
    type: EmployeesActionTypes.FETCH_EMPLOYEES_ERROR;
    payload: string;
  }
  interface FetchEnd {
    type: EmployeesActionTypes.FETCH_EMPLOYEES_END;
  }
  export type ActionType = FetchStart | SetEmployees | FetchError | FetchEnd;