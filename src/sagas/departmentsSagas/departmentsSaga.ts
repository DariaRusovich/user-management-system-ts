import { put, takeEvery, call } from 'redux-saga/effects';
import { api } from '../../api/interceptors';
import { DEPARTMENTS } from '../../constants/urls';
import {
  start,
  end,
  setDepartments,
  setError,
  addNewDepartment,
} from '../../redux/departments/actions';
import { DepartmentsActionTypes } from '../../redux/departments/actionTypes';
import { FetchNewDepartment } from '../../redux/departments/types';

function* fetchDepartmentsWorker(limit = 10, page = 1) {
  yield put(start());
  const [departmentsDataError, departmentsData] = yield call(
    api.get,
    `${DEPARTMENTS}/?limit=${limit}&page=${page}`
  );
  if (departmentsData) {
    const departments = departmentsData.departments.departments;
    yield put(setDepartments(departments));
  } else {
    yield put(setError(departmentsDataError));
  }
  yield put(end());
}

function* fetchNewDepartmentWorker({ payload }: FetchNewDepartment) {
  yield put(start());
  const [departmentDataError, departmentData] = yield call(
    api.post,
    `${DEPARTMENTS}/`,
    payload
  );
  if (departmentData) {
    const newDepartment = departmentData.department;
    yield put(addNewDepartment(newDepartment));
  } else {
    yield put(setError(departmentDataError));
  }
  yield put(end());
}

export function* fetchDepartmentsWatcher() {
  yield takeEvery(
    DepartmentsActionTypes.FETCH_DEPARTMENTS,
    fetchDepartmentsWorker
  );
  yield takeEvery(
    DepartmentsActionTypes.FETCH_NEW_DEPARTMENT,
    fetchNewDepartmentWorker
  );
}
