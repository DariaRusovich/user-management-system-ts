import { Dispatch } from 'redux';
import { getEmployees } from '../../api/apiServise';
import { ActionType, IEmployee } from '../../types/employee';
import { EmployeesActionTypes } from './actionTypes';

const start = (): ActionType => {
  return { type: EmployeesActionTypes.FETCH_START };
};
const setEmployees = (employees: IEmployee[]): ActionType => {
  return { type: EmployeesActionTypes.SET_EMPLOYEES, payload: employees };
};
const setError = (error: string): ActionType => {
  return { type: EmployeesActionTypes.FETCH_ERROR, payload: error };
};

const end = (): ActionType => {
  return { type: EmployeesActionTypes.FETCH_END };
};

export const fetchEmployees = (id: string) => {
  return async (dispatch: Dispatch<ActionType>) => {
      dispatch(start())
      const [employeesDataError, employeesData] = await getEmployees(id)
      if (employeesData) {
          const employees = employeesData.employees
          dispatch(setEmployees(employees))
          console.log(employees);
          
      } else {
          console.dir(employeesDataError);      
      }
      dispatch(end())
  };
};
