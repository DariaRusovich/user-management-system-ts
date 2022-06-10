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
export const fetchNewEmployee = (employee: EmployeeData) => {
  return { type: EmployeesActionTypes.FETCH_NEW_EMPLOYEE, payload: employee };
};
export const fetchUpdatedEmployee = (id: string, updatedEmployee: EmployeeData): ActionType => {
  return { type: EmployeesActionTypes.FETCH_UPDATED_EMPLOYEE, id, payload: updatedEmployee };
};
export const addNewEmployee = (employee: EmployeeData): ActionType => {
  return { type: EmployeesActionTypes.ADD_EMPLOYEE, payload: employee };
};
export const updateEmployee = (employees: EmployeeData): ActionType => {
  return { type: EmployeesActionTypes.UPDATE_EMPLOYEE, payload: employees };
};
export const deletedEmployee = (employees: EmployeeData): ActionType => {
  return { type: EmployeesActionTypes.DELETE_EMPLOYEE, payload: employees }
};
export const fetchDeletedEmployee = (id: string) => {
  return { type: EmployeesActionTypes.FETCH_DELETED_EMPLOYEE, payload: id }
};
export const setError = (error: string): ActionType => {
  return { type: EmployeesActionTypes.FETCH_EMPLOYEES_ERROR, payload: error };
};
export const end = (): ActionType => {
  return { type: EmployeesActionTypes.FETCH_EMPLOYEES_END };
};
