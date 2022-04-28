import { DepartmentsActionTypes } from '../redux/departments/actionTypes';
import { Error } from './types';

export interface IDepartment {
  name: string;
  description: string;
  _id?: string;
  picture?: string;
}
export interface DepartmentData {
  department: IDepartment;
  response: Error
}
export interface DepartmentsData {
  departments: Departments;
  results?: Results;
  response: Error
}
export interface Departments {
  departments: IDepartment[];
}
export interface Results {
  currentPage: number;
  limit: number;
  sortBy: string;
  total: number;
}
export interface DepatmentsState {
  departments: IDepartment[];
  department?: IDepartment;
  loading: boolean;
  error: null | string;
}
interface FetchStart {
  type: DepartmentsActionTypes.FETCH_START;
}
interface SetDepartments {
  type: DepartmentsActionTypes.SET_DEPARTMENTS;
  payload: IDepartment[];
}
interface AddDepartment {
  type: DepartmentsActionTypes.ADD_DEPARTMENT;
  payload: IDepartment;
}
interface FetchError {
  type: DepartmentsActionTypes.FETCH_ERROR;
  payload: string;
}
interface FetchEnd {
  type: DepartmentsActionTypes.FETCH_END;
}
export type ActionType =
  | FetchStart
  | SetDepartments
  | FetchError
  | FetchEnd
  | AddDepartment
