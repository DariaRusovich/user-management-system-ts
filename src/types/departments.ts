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
  departmentData?: IDepartment;
  departmentId: string;
  loading: boolean;
  error: null | string;
}

