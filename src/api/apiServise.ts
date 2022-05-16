import {
  DEPARTMENTS,
  LOGIN_URL,
  LOGOUT_URL,
  EMPLOYEES_URL,
} from '../constants/urls';
import {
  DepartmentData,
  IDepartment,
  DepartmentsData,
} from '../types/departments';
import { Employees } from '../types/employee';
import { LoginData, TokensResponseData } from '../types/auth';
import { api } from './interceptors';

export function getDepartments(
  limit: number = 10,
  page: number = 1
): Promise<DepartmentsData[]> {
  return api.get(`${DEPARTMENTS}/?limit=${limit}&page=${page}`);
}

export function addDepartment(
  department: IDepartment
): Promise<DepartmentData[]> {
  return api.post(`${DEPARTMENTS}/`, department);
}

export function getDepartment(id: string): Promise<IDepartment> {
  return api.get(`${DEPARTMENTS}/${id}`);
}

export function getEmployees(id: string): Promise<Employees[]> {
  return api.get(`${DEPARTMENTS}/${id}${EMPLOYEES_URL}`);
}

export function signin(loginData: LoginData): Promise<TokensResponseData[]> {
  return api.post(LOGIN_URL, loginData);
}
