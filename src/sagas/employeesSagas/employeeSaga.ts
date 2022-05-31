import { put, takeEvery } from 'redux-saga/effects';
import {
  getEmployees,
  addEmployee,
  updateEmployees,
} from '../../api/apiServise';
import {
  start,
  end,
  setEmployees,
  setError,
  addNewEmployee,
  updateEmployee,
} from '../../redux/employees/actions';
import { EmployeesActionTypes } from '../../redux/employees/actionTypes';
import {
  FetchEmployees,
  FetchNewEmployee,
  FetchUpdatedEmployee,
} from '../../redux/employees/types';
import * as Effects from 'redux-saga/effects';
const call: any = Effects.call;

function* fetchEmployeesWorker({ payload }: FetchEmployees) {
  yield put(start());
  const [employeesDataError, employeesData] = yield call(getEmployees, payload);
  if (employeesData) {
    const employees = employeesData.employees;
    yield put(setEmployees(employees));
  } else {
    yield put(setError(employeesDataError));
  }
  yield put(end());
}

function* fetchNewEmployeeWorker({ payload }: FetchNewEmployee) {
  yield put(start());
  const [employeeDataError, employeeData] = yield call(addEmployee, payload);
  if (employeeData) {
    const employee = employeeData.employee;
    yield put(addNewEmployee(employee));
  } else {
    yield put(setError(employeeDataError));
  }
  yield put(end());
}
function* fetchUpdatedEmployeeWorker({ id, payload }: FetchUpdatedEmployee) {
  yield put(start());
  const [updatedEmployeeDataError, updatedEmployeeData] = yield call(
    updateEmployees,
    id,
    payload
  );
  if (updatedEmployeeData) {
    const updatedEmployee = updatedEmployeeData.updatedEmployee;
    yield put(updateEmployee(updatedEmployee));
  } else {
    yield put(setError(updatedEmployeeDataError));
  }
  yield put(end());
}

export function* fetchEmployeeWatcher() {
  yield takeEvery(EmployeesActionTypes.FETCH_EMPLOYEES, fetchEmployeesWorker);
  yield takeEvery(
    EmployeesActionTypes.FETCH_NEW_EMPLOYEE,
    fetchNewEmployeeWorker
  );
  yield takeEvery(
    EmployeesActionTypes.FETCH_UPDATED_EMPLOYEE,
    fetchUpdatedEmployeeWorker
  );
}
