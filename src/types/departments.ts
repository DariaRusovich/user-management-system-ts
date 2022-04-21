import { DepartmentsActionTypes } from '../redux/departments/actionTypes';
import { Error } from './types';

export interface Department {
  name: string;
  description: string;
  _id?: string;
  picture?: string;
}
export interface DepartmentData {
  department: Department;
  response: Error
}
export interface DepartmentsData {
  departments: Departments;
  results?: Results;
  response: Error
}
export interface Departments {
  departments: Department[];
}
export interface Results {
  currentPage: number;
  limit: number;
  sortBy: string;
  total: number;
}
export interface DepatmentsState {
  departments: Department[];
  department?: Department;
  loading: boolean;
  error: null | string;
}
interface FetchStart {
  type: DepartmentsActionTypes.FETCH_START;
}
interface SetDepartments {
  type: DepartmentsActionTypes.SET;
  payload: Department[];
}
interface AddDepartment {
  type: DepartmentsActionTypes.ADD;
  payload: Department;
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
