import {
    DEPARTMENT_BY_ID_URL,
    DEPARTMENTS_URL,
    LOGIN_URL,
    LOGOUT_URL,
    EMPLOYEES_URL,
  } from '../constants/urls';
  import { api } from './interceptors';

  export function getDepartments(limit = 10, page = 1) {
    return api.get(`${DEPARTMENTS_URL}?limit=${limit}&page=${page}`);
  }
  export function getDepartment(id: string) {
    return api.get(`${DEPARTMENTS_URL}/${id}`);
  }