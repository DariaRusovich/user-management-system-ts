import { DepartmentsActionTypes } from '../departments/actionTypes';
import { IDepartment } from '../../types/departments';

interface FetchStart {
  type: DepartmentsActionTypes.FETCH_DEPARTMENTS_START;
}
interface SetDepartments {
  type: DepartmentsActionTypes.SET_DEPARTMENTS;
  payload: IDepartment[];
}
interface AddDepartment {
  type: DepartmentsActionTypes.ADD_DEPARTMENT;
  payload: IDepartment;
}
interface FetchError {
  type: DepartmentsActionTypes.FETCH_DEPARTMENTS_ERROR;
  payload: string;
}
interface FetchEnd {
  type: DepartmentsActionTypes.FETCH_DEPARTMENTS_END;
}
export type ActionType =
  | FetchStart
  | SetDepartments
  | FetchError
  | FetchEnd
  | AddDepartment;
