import { Dispatch } from 'redux';
import { getEmployees } from '../../api/apiServise';
import { EmployeeData } from '../../types/employee';
import { EmployeesActionTypes } from './actionTypes';
import { ActionType } from "../employees/types";

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

const applyLoading = (fn) => {
  return (dispatch: Dispatch<ActionType>) => {
    dispatch(start());
    fn();
    dispatch(end());
  };
};

export const fetchEmployees = (id: string) => {
  return applyLoading(() => {
    return async (dispatch: Dispatch<ActionType>) => {
      const [employeesDataError, employeesData] = await getEmployees(id);
      if (employeesData) {
        const employees = employeesData.employees;
        dispatch(setEmployees(employees));
      } else {
        dispatch(setError(employeesDataError.response?.data.message));
      }
    };
  });
};

//   applyLoading(() => {
//   const [departmentDataError, departmentData] = await addDepartment(department)
//   if (departmentData) {
//   const newDepartment = departmentData.department
//   dispatch(addNewDepartment(newDepartment))
//   } else {
//   dispatch(setError(departmentDataError.response.data.message))
//   }
//   })
