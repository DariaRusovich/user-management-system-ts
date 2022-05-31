import { IDepartment } from '../../types/departments';
import { ActionType } from '../departments/types';
import { DepartmentsActionTypes } from './actionTypes';

export const start = (): ActionType => {
  return { type: DepartmentsActionTypes.FETCH_DEPARTMENTS_START };
};
export const setDepartments = (departments: IDepartment[]): ActionType => {
  return { type: DepartmentsActionTypes.SET_DEPARTMENTS, payload: departments };
};
export const fetchDepartments = (): ActionType => {
  return { type: DepartmentsActionTypes.FETCH_DEPARTMENTS };
};
export const fetchDepartment = (departmentId: string): ActionType => {
  return { type: DepartmentsActionTypes.FETCH_DEPARTMENT, payload: departmentId};
};
export const setDepartment = (department: IDepartment): ActionType => {
  return { type: DepartmentsActionTypes.SET_DEPARTMENT, payload: department};
};
export const createNewDepartment = (department: IDepartment): ActionType => {
  return { type: DepartmentsActionTypes.FETCH_NEW_DEPARTMENT, payload: department}
}
export const addNewDepartment = (department: IDepartment): ActionType => {
  return { type: DepartmentsActionTypes.ADD_DEPARTMENT, payload: department };
};
export const fetchUpdatedDepartment = (id: string ,updatedDepartment: IDepartment): ActionType => {
  return { type: DepartmentsActionTypes.FETCH_UPDATED_DEPARTMENT, id, payload: updatedDepartment}
}
export const updateDepartment = (departments: IDepartment): ActionType => {
  return { type: DepartmentsActionTypes.UPDATE_DEPARTMENT, payload: departments };
};
export const setError = (error: string): ActionType => {
  return {
    type: DepartmentsActionTypes.FETCH_DEPARTMENTS_ERROR,
    payload: error,
  };
};
export const end = (): ActionType => {
  return { type: DepartmentsActionTypes.FETCH_DEPARTMENTS_END };
};

