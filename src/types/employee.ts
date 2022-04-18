import { EmployeesActionTypes } from '../redux/employees/actionTypes';
import { IError } from './types';

export interface IEmployee {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  department_id: string;
  _id: string;
  picture?: string;
}
export interface IEmployees {
  employees: IEmployee[];
  response: IError;
}
export interface IEmployeesState {
  employees: IEmployee[];
  loading: boolean;
  error: null | string;
}
interface IFetchStart {
  type: EmployeesActionTypes.FETCH_START;
}
interface ISetEmployees {
  type: EmployeesActionTypes.SET_EMPLOYEES;
  payload: IEmployee[];
}
interface IFetchError {
  type: EmployeesActionTypes.FETCH_ERROR;
  payload: string;
}
interface IFetchEnd {
  type: EmployeesActionTypes.FETCH_END;
}
export type ActionType = IFetchStart | ISetEmployees | IFetchError | IFetchEnd;
