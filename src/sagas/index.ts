import { all } from 'redux-saga/effects';
import { fetchTokensWatcher } from './authSagas/authSaga';
import { fetchDepartmentsWatcher } from './departmentsSagas/departmentsSaga';
import { fetchEmployeeWatcher } from './employeesSagas/employeeSaga';

export function *rootWatcher() {
  yield all([
    fetchTokensWatcher(),
    fetchDepartmentsWatcher(),
    fetchEmployeeWatcher(),
  ]);
}
