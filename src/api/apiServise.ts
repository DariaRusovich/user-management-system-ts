import {
  DEPARTMENT_BY_ID_URL,
  DEPARTMENTS_URL,
  LOGIN_URL,
  LOGOUT_URL,
  EMPLOYEES_URL,
} from '../constants/urls';
import {
  IDepartmentData,
  IDepartment,
  IDepartmentsData,
} from '../types/departments';
import { IEmployees } from '../types/employee';
import { ILoginData } from '../types/types';
import { api } from './interceptors';

export function getDepartments(
  limit: number = 10,
  page: number = 1
): Promise<IDepartmentsData[]> {
  return api.get(`${DEPARTMENTS_URL}?limit=${limit}&page=${page}`);
}

export function addDepartment(
  department: IDepartment
): Promise<IDepartmentData[]> {
  return api.post(`${DEPARTMENTS_URL}`, department);
}

export function getDepartment(id: string) {
  return api.get(`${DEPARTMENTS_URL}/${id}`);
}
export function getEmployees(id: string): Promise<IEmployees[]> {
  return api.get(`${EMPLOYEES_URL}/${id}`);
}
export function signin(loginData: ILoginData): Promise<ILoginData[]> {
  return api.post(LOGIN_URL, loginData);
}
