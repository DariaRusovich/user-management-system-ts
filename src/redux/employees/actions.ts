import { Dispatch } from 'redux';
import { getEmployees } from '../../api/apiServise';
import { EmployeeData } from '../../types/employee';
import { EmployeesActionTypes } from './actionTypes';
import { ActionType } from '../employees/types';

const start = (): ActionType => {
  return { type: EmployeesActionTypes.FETCH_EMPLOYEES_START };
};
const setEmployees = (employees: EmployeeData[]): ActionType => {
  return { type: EmployeesActionTypes.SET_EMPLOYEES, payload: employees };
};
const setError = (error: string): ActionType => {
  return { type: EmployeesActionTypes.FETCH_EMPLOYEES_ERROR, payload: error };
};

const end = (): ActionType => {
  return { type: EmployeesActionTypes.FETCH_EMPLOYEES_END };
};

const applyLoading = (fn: (dispatch: Dispatch<ActionType>) => void) => {
  return async (dispatch: Dispatch<ActionType>) => {
    dispatch(start());
    await fn(dispatch);
    dispatch(end());
  };
};

export const fetchEmployees = (id: string) => {
  return applyLoading(async (dispatch: Dispatch<ActionType>) => {
    const [employeesDataError, employeesData] = await getEmployees(id);
    if (employeesData) {
      const employees = employeesData.employees;
      dispatch(setEmployees(employees));
    } else {
      dispatch(setError(employeesDataError.response?.data.message));
    }
  });
};
