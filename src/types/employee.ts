import { EmployeesActionTypes } from '../redux/employees/actionTypes';
import { Error } from './types';

export interface Employee {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  department_id: string;
  _id: string;
  picture?: string;
}
export interface Employees {
  employees: Employee[];
  response: Error;
}
export interface EmployeesState {
  employees: Employee[];
  loading: boolean;
  error: null | string;
}
interface FetchStart {
  type: EmployeesActionTypes.FETCH_START;
}
interface SetEmployees {
  type: EmployeesActionTypes.SET_EMPLOYEES;
  payload: Employee[];
}
interface FetchError {
  type: EmployeesActionTypes.FETCH_ERROR;
  payload: string;
}
interface FetchEnd {
  type: EmployeesActionTypes.FETCH_END;
}
export type ActionType = FetchStart | SetEmployees | FetchError | FetchEnd;
