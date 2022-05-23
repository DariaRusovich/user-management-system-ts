import { put, takeEvery, call } from 'redux-saga/effects';
import { api } from '../../api/interceptors';
import { DEPARTMENTS, EMPLOYEES_URL } from '../../constants/urls';
import {
  start,
  end,
  setEmployees,
  setError,
} from '../../redux/employees/actions';
import { EmployeesActionTypes } from '../../redux/employees/actionTypes';
import { FetchEmployees } from '../../redux/employees/types';

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

export function* fetchEmployeeWatcher() {
  yield takeEvery(EmployeesActionTypes.FETCH_EMPLOYEES, fetchEmployeeWorker);
}
