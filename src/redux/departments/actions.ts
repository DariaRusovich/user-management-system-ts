import { Dispatch } from 'redux';
import { addDepartment, getDepartments } from '../../api/apiServise';
import { IDepartment } from '../../types/departments';
import { ActionType } from '../departments/types';
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
  return {
    type: DepartmentsActionTypes.FETCH_DEPARTMENTS_ERROR,
    payload: error,
  };
};
const end = (): ActionType => {
  return { type: DepartmentsActionTypes.FETCH_DEPARTMENTS_END };
};

const applyLoading = (fn: (dispatch: Dispatch<ActionType>) => void) => {
  return async (dispatch: Dispatch<ActionType>) => {
    dispatch(start());
    await fn(dispatch);
    dispatch(end());
  };
};

export const fetchDepartments = () => {
  return applyLoading(async (dispatch: Dispatch<ActionType>) => {
    const [departmentsDataError, departmentsData] = await getDepartments();
    if (departmentsData) {
      const departments = departmentsData.departments.departments;
      dispatch(setDepartments(departments));
    } else {
      dispatch(setError(departmentsDataError.response.data.message));
    }
  });
};

export const fetchNewDepartment = (department: IDepartment) => {
  return applyLoading(async (dispatch: Dispatch<ActionType>) => {
    const [departmentDataError, departmentData] = await addDepartment(
      department
    );
    if (departmentData) {
      const newDepartment = departmentData.department;
      dispatch(addNewDepartment(newDepartment));
    } else {
      dispatch(setError(departmentDataError.response.data.message));
    }
  });
};
