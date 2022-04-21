import { EmployeesActionTypes } from '../redux/employees/actionTypes';
import { Error } from './types';

export interface EmployeeData {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  department_id: string;
  _id: string;
  picture?: string;
}
export interface Employees {
  employees: EmployeeData[];
  response: Error;
}
export interface EmployeesState {
  employees: EmployeeData[];
  loading: boolean;
  error: null | string;
}
interface FetchStart {
  type: EmployeesActionTypes.FETCH_START;
}
interface SetEmployees {
  type: EmployeesActionTypes.SET_EMPLOYEES;
  payload: EmployeeData[];
}
interface FetchError {
  type: EmployeesActionTypes.FETCH_ERROR;
  payload: string;
}
interface FetchEnd {
  type: EmployeesActionTypes.FETCH_END;
}
export type ActionType = FetchStart | SetEmployees | FetchError | FetchEnd;
