import {
  DEPARTMENTS,
  LOGIN_URL,
  LOGOUT_URL,
  EMPLOYEES_URL,
} from '../constants/urls';
import {
  DepartmentData,
  Department,
  DepartmentsData,
} from '../types/departments';
import { Employees } from '../types/employee';
import { LoginData } from '../types/auth';
import { api } from './interceptors';

export function getDepartments(
  limit: number = 10,
  page: number = 1
): Promise<DepartmentsData[]> {
  return api.get(`${DEPARTMENTS}/?limit=${limit}&page=${page}`);
}

export function addDepartment(
  department: Department
): Promise<DepartmentData[]> {
  return api.post(`${DEPARTMENTS}/`, department);
}

export function getDepartment(id: string): Promise<Department> {
  return api.get(`${DEPARTMENTS}/${id}`);
}

export function getEmployees(id: string): Promise<Employees[]> {
  return api.get(`${DEPARTMENTS}/${id}${EMPLOYEES_URL}`);
}

export function signin(loginData: LoginData): Promise<LoginData[]> {
  return api.post(LOGIN_URL, loginData);
}
