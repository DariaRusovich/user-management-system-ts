import { Dispatch } from 'redux';
import { addDepartments, getDepartments } from '../../api/apiServise';
import { IDepartment, ActionType } from '../../types/departments';
import { DepartmentsActionTypes } from './actionTypes';

const start = (): ActionType => {
  return { type: DepartmentsActionTypes.FETCH_START };
};
const setDepartments = (departments: IDepartment[]): ActionType => {
  return { type: DepartmentsActionTypes.SET, payload: departments };
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
      dispatch(setDepartments(departments))
    } else {
        console.log(departmentsDataError);
        dispatch(setError(departmentsDataError.error.response.data.message))  
    }
    dispatch(end())
  };
};
