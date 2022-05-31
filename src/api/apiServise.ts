import {
  DEPARTMENTS,
  EMPLOYEES_URL,
  LOGIN_URL,
  LOGOUT_URL,
} from '../constants/urls';
import {
  DepartmentData,
  DepartmentsData,
  IDepartment,
} from '../types/departments';
import { EmployeeData, Employees } from '../types/employee';
import { LoginData, TokensResponseData } from '../types/auth';
import { api } from './interceptors';

export function getDepartments(
  limit = 10,
  page = 1
): Promise<DepartmentsData[]> {
  return api.get(`${DEPARTMENTS}/?limit=${limit}&page=${page}`);
}
export function addDepartment(department: IDepartment): Promise<DepartmentData[]> {
  return api.post(`${DEPARTMENTS}/`, department);
}
export function updateDepartments(id: string, department: IDepartment): Promise<DepartmentData[]> {
  return api.patch(`${DEPARTMENTS}/${id}`, department);
}
export function getDepartment(id: string): Promise<IDepartment> {
  return api.get(`${DEPARTMENTS}/${id}`);
}
export function getEmployees(id: string): Promise<Employees[]> {
  return api.get(`${DEPARTMENTS}/${id}${EMPLOYEES_URL}`);
}
export function addEmployee(employee: EmployeeData): Promise<Employees> {
  return api.post(`${EMPLOYEES_URL}`, employee);
}
export function updateEmployees(id: string ,employee: EmployeeData): Promise<Employees> {
  return api.patch(`${EMPLOYEES_URL}/${id}`, employee);
}
export function signin(loginData: LoginData): Promise<TokensResponseData[]> {
  return api.post(LOGIN_URL, loginData);
}
