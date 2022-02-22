import {
  DEPARTMENT_BY_ID_URL,
  DEPARTMENTS_URL,
  LOGIN_URL,
  LOGOUT_URL,
  EMPLOYEES_URL,
} from '../constants/urls';
import { IDepartmentsData, ILoginData } from '../types/types';
import { api } from './interceptors';

export function getDepartments(limit:number = 10, page:number = 1):Promise<IDepartmentsData[]> {
  return api.get(`${DEPARTMENTS_URL}?limit=${limit}&page=${page}`);
}
export function getDepartment(id: string) {
  return api.get(`${DEPARTMENTS_URL}/${id}`);
}
export function signin(loginData: ILoginData):Promise<ILoginData[]> {
  return api.post(LOGIN_URL, loginData);
}