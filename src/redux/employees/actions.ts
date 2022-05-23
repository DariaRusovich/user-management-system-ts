import { EmployeeData } from '../../types/employee';
import { EmployeesActionTypes } from './actionTypes';
import { ActionType } from '../employees/types';

export const start = (): ActionType => {
  return { type: EmployeesActionTypes.FETCH_EMPLOYEES_START };
};
export const setEmployees = (employees: EmployeeData[]): ActionType => {
  return { type: EmployeesActionTypes.SET_EMPLOYEES, payload: employees };
};
export const fetchEmployees = (id: string): ActionType => {
  return { type: EmployeesActionTypes.FETCH_EMPLOYEES, payload: id };
};
export const setError = (error: string): ActionType => {
  return { type: EmployeesActionTypes.FETCH_EMPLOYEES_ERROR, payload: error };
};

export const end = (): ActionType => {
  return { type: EmployeesActionTypes.FETCH_EMPLOYEES_END };
};

