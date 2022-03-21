import { DepartmentsActionTypes } from '../redux/departments/actionTypes';
import { IErrorResponse } from './types';

export interface IDepartment {
  name: string;
  description: string;
  _id?: string;
  picture?: string;
}
export interface IDepartmentData {
  department: IDepartment;
  error: IErrorResponse
}
export interface IDepartmentsData {
  departments: IDepartments;
  results?: IResults;
  error: IErrorResponse
}
export interface IDepartments {
  departments: IDepartment[];
}
export interface IResults {
  currentPage: number;
  limit: number;
  sortBy: string;
  total: number;
}
export interface IDepatmentsState {
  departments: IDepartment[];
  department?: IDepartment;
  loading: boolean;
  error: null | string;
}
interface IFetchStart {
  type: DepartmentsActionTypes.FETCH_START;
}
interface ISetDepartments {
  type: DepartmentsActionTypes.SET;
  payload: IDepartment[];
}
interface IAddDepartment {
  type: DepartmentsActionTypes.ADD;
  payload: IDepartment;
}
interface IFetchError {
  type: DepartmentsActionTypes.FETCH_ERROR;
  payload: string;
}
interface IFetchEnd {
  type: DepartmentsActionTypes.FETCH_END;
}
export type ActionType =
  | IFetchStart
  | ISetDepartments
  | IFetchError
  | IFetchEnd
  | IAddDepartment
