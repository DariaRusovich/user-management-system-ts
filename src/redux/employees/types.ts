import { EmployeesActionTypes } from '../employees/actionTypes';
import { EmployeeData } from '../../types/employee';

interface FetchStart {
  type: EmployeesActionTypes.FETCH_EMPLOYEES_START;
}
interface SetEmployees {
  type: EmployeesActionTypes.SET_EMPLOYEES;
  payload: EmployeeData[];
}
export interface FetchEmployees {
  type: EmployeesActionTypes.FETCH_EMPLOYEES;
  payload: string;
}
export interface FetchNewEmployee {
  type: EmployeesActionTypes.FETCH_NEW_EMPLOYEE;
  payload: EmployeeData;
}
export interface FetchUpdatedEmployee {
  type: EmployeesActionTypes.FETCH_UPDATED_EMPLOYEE;
  id: string;
  payload: EmployeeData;
}
export interface AddEmployee {
  type: EmployeesActionTypes.ADD_EMPLOYEE;
  payload: EmployeeData;
}
export interface UpdatedEmployee {
  type: EmployeesActionTypes.UPDATE_EMPLOYEE;
  payload: EmployeeData;
}
export interface DeleteEmployee {
  type: EmployeesActionTypes.DELETE_EMPLOYEE;
  payload: EmployeeData;
}
export interface FetchDeletedEmployee {
  type: EmployeesActionTypes.FETCH_DELETED_EMPLOYEE;
  payload: string;
}
interface FetchError {
  type: EmployeesActionTypes.FETCH_EMPLOYEES_ERROR;
  payload: string;
}
interface FetchEnd {
  type: EmployeesActionTypes.FETCH_EMPLOYEES_END;
}
export type ActionType =
  | FetchStart
  | SetEmployees
  | AddEmployee
  | UpdatedEmployee
  | DeleteEmployee
  | FetchDeletedEmployee
  | FetchNewEmployee
  | FetchUpdatedEmployee
  | FetchEmployees
  | FetchError
  | FetchEnd;
