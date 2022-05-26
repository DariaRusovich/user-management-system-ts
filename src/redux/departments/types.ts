import { DepartmentsActionTypes } from '../departments/actionTypes';
import { IDepartment } from '../../types/departments';

interface FetchStart {
  type: DepartmentsActionTypes.FETCH_DEPARTMENTS_START;
}
interface SetDepartments {
  type: DepartmentsActionTypes.SET_DEPARTMENTS;
  payload: IDepartment[];
}
export interface FetchDepartments {
  type: DepartmentsActionTypes.FETCH_DEPARTMENTS;
  payload?: IDepartment[];
}
export interface FetchNewDepartment {
  type: DepartmentsActionTypes.FETCH_NEW_DEPARTMENT;
  payload: IDepartment;
}
export interface FetchDepartment {
  type: DepartmentsActionTypes.FETCH_DEPARTMENT;
  payload: string;
}
interface SetDepartment {
  type: DepartmentsActionTypes.SET_DEPARTMENT;
  payload: IDepartment;
}
interface AddDepartment {
  type: DepartmentsActionTypes.ADD_DEPARTMENT;
  payload: IDepartment;
}
interface FetchError {
  type: DepartmentsActionTypes.FETCH_DEPARTMENTS_ERROR;
  payload: string;
}
interface FetchEnd {
  type: DepartmentsActionTypes.FETCH_DEPARTMENTS_END;
}
export type ActionType =
  | FetchStart
  | FetchNewDepartment
  | FetchDepartments
  | FetchDepartment
  | SetDepartments
  | SetDepartment
  | FetchError
  | FetchEnd
  | AddDepartment;
