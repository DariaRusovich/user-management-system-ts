import { Dispatch } from 'redux';
import { getDepartments, addDepartment } from '../../api/apiServise';
import { IDepartment, ActionType } from '../../types/departments';
import { DepartmentsActionTypes } from './actionTypes';

const start = (): ActionType => {
  return { type: DepartmentsActionTypes.FETCH_START };
};
const setDepartments = (departments: IDepartment[]): ActionType => {
  return { type: DepartmentsActionTypes.SET, payload: departments };
};
const addNewDepartment = (department: IDepartment): ActionType => {
  return { type: DepartmentsActionTypes.ADD, payload: department };
};
const setError = (error: string): ActionType => {
  return { type: DepartmentsActionTypes.FETCH_ERROR, payload: error };
};
const end = (): ActionType => {
  return { type: DepartmentsActionTypes.FETCH_END };
};

export const fetchDepartments = () => {
  return async (dispatch: Dispatch<ActionType>) => {
    dispatch(start());
    const [departmentsDataError, departmentsData] = await getDepartments();
    if (departmentsData) {
      const departments = departmentsData.departments.departments;
      dispatch(setDepartments(departments));
    } else {
      console.log(departmentsDataError);
      dispatch(setError(departmentsDataError.error.response.data.message));
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
      console.log(newDepartment);
    } else {
      console.log(departmentDataError);
      dispatch(setError(departmentDataError.error.response.data.message))
    }
    dispatch(end())
  };
};
