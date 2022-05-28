import { put, takeEvery, call } from 'redux-saga/effects';
import { api } from '../../api/interceptors';
import { DEPARTMENTS, EMPLOYEES_URL } from '../../constants/urls';
import {
  start,
  end,
  setEmployees,
  setError,
  addNewEmployee,
  updateEmployee,
} from '../../redux/employees/actions';
import { EmployeesActionTypes } from '../../redux/employees/actionTypes';
import { FetchEmployees, FetchNewEmployee, FetchUpdatedEmployee } from '../../redux/employees/types';

function* fetchEmployeeWorker({ payload }: FetchEmployees) {
  yield put(start());
  const [employeesDataError, employeesData] = yield call(
    api.get,
    `${DEPARTMENTS}/${payload}${EMPLOYEES_URL}`
  );
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
  const [employeeDataError, employeeData] = yield call(
    api.post,
    `${EMPLOYEES_URL}/`,
    payload
  );
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
    api.patch,
    `${EMPLOYEES_URL}/${id}`,
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
  yield takeEvery(EmployeesActionTypes.FETCH_EMPLOYEES, fetchEmployeeWorker);
  yield takeEvery(
    EmployeesActionTypes.FETCH_NEW_EMPLOYEE,
    fetchNewEmployeeWorker
  );
  yield takeEvery(
    EmployeesActionTypes.FETCH_UPDATED_EMPLOYEE,
    fetchUpdatedEmployeeWorker
  );
}
