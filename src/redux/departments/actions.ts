import { Dispatch } from 'redux';
import { getDepartments, addDepartment } from '../../api/apiServise';
import { IDepartment } from '../../types/departments';
import { ActionType } from "../departments/types";
import { DepartmentsActionTypes } from './actionTypes';

const start = (): ActionType => {
  return { type: DepartmentsActionTypes.FETCH_DEPARTMENTS_START };
};
const setDepartments = (departments: IDepartment[]): ActionType => {
  return { type: DepartmentsActionTypes.SET_DEPARTMENTS, payload: departments };
};
const addNewDepartment = (department: IDepartment): ActionType => {
  return { type: DepartmentsActionTypes.ADD_DEPARTMENT, payload: department };
};
const setError = (error: string): ActionType => {
  return { type: DepartmentsActionTypes.FETCH_DEPARTMENTS_ERROR, payload: error };
};
const end = (): ActionType => {
  return { type: DepartmentsActionTypes.FETCH_DEPARTMENTS_END };
};

export const fetchDepartments = () => {
  return async (dispatch: Dispatch<ActionType>) => {
    dispatch(start());
    const [departmentsDataError, departmentsData] = await getDepartments();
    if (departmentsData) {
      const departments = departmentsData.departments.departments;
      dispatch(setDepartments(departments));
    } else {
      dispatch(setError(departmentsDataError.response.data.message));
    }
    dispatch(end());
  };
};

export const fetchNewDepartment = (department: IDepartment) => {
  return async (dispatch: Dispatch<ActionType>) => {
    dispatch(start());
    const [departmentDataError, departmentData] = await addDepartment(department)
    if (departmentData) {
      const newDepartment = departmentData.department
      dispatch(addNewDepartment(newDepartment))
    } else {
      dispatch(setError(departmentDataError.response.data.message))
    }
    dispatch(end())
  };
};
