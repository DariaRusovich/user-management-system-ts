import { Error } from './types';

export interface EmployeeData {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  department_id: string;
  _id: string;
  picture?: string;
}
export interface Employees {
  employees: EmployeeData[];
  response: Error;
}
export interface EmployeesState {
  employees: EmployeeData[];
  loading: boolean;
  error: null | string;
}

