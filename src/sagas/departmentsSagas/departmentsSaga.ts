import { put, takeEvery } from 'redux-saga/effects';
import {
  addDepartment,
  deleteDepartment,
  getDepartment,
  getDepartments,
  updateDepartments,
} from '../../api/apiServise';
import {
  addNewDepartment,
  deletedDepartment,
  end,
  setDepartment,
  setDepartments,
  setError,
  start,
  updateDepartment,
} from '../../redux/departments/actions';
import { DepartmentsActionTypes } from '../../redux/departments/actionTypes';
import {
  FetchDeletedDepartment,
  FetchDepartment,
  FetchNewDepartment,
  FetchUpdatedDepartment,
} from '../../redux/departments/types';
import * as Effects from 'redux-saga/effects';
const call: any = Effects.call;

function *fetchDepartmentsWorker() {
  yield put(start());
  const [departmentsDataError, departmentsData] = yield call(getDepartments);
  if (departmentsData) {
    const departments = departmentsData.departments.departments;
    yield put(setDepartments(departments));
  } else {
    yield put(setError(departmentsDataError));
  }
  yield put(end());
}

function *fetchNewDepartmentWorker({ payload }: FetchNewDepartment) {
  yield put(start());
  const [departmentDataError, departmentData] = yield call(
    addDepartment,
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

function *fetchOneDepartmentWorker({ payload }: FetchDepartment) {
  const [departmentDataError, departmentData] = yield call(
    getDepartment,
    payload
  );
  if (departmentData) {
    const department = departmentData.departmentByID;
    yield put(setDepartment(department));
  } else {
    yield put(setError(departmentDataError));
  }
}

function *fetchUpdatedDepartmentWorker({
  id,
  payload,
}: FetchUpdatedDepartment) {
  yield put(start());
  const [updatedDepartmentDataError, updatedDepartmentData] = yield call(
    updateDepartments,
    id,
    payload
  );
  if (updatedDepartmentData) {
    const updatedDepartment = updatedDepartmentData.updatedDescription;
    yield put(updateDepartment(updatedDepartment));
  } else {
    yield put(setError(updatedDepartmentDataError));
  }
  yield put(end());
}

function *deleteDepartmentWorker({ payload }: FetchDeletedDepartment) {
  yield put(start());
  const [departmentDeletedErrorData, departmentDeletedData] = yield call(
    deleteDepartment,
    payload
  );
  if (departmentDeletedData) {
    const departmentDeleted = departmentDeletedData.departmentToDelete;
    yield put(deletedDepartment(departmentDeleted));
  } else {
    yield put(setError(departmentDeletedErrorData));
  }
  yield put(end());
}

export function *fetchDepartmentsWatcher() {
  yield takeEvery(
    DepartmentsActionTypes.FETCH_DEPARTMENTS,
    fetchDepartmentsWorker
  );
  yield takeEvery(
    DepartmentsActionTypes.FETCH_NEW_DEPARTMENT,
    fetchNewDepartmentWorker
  );
  yield takeEvery(
    DepartmentsActionTypes.FETCH_DEPARTMENT,
    fetchOneDepartmentWorker
  );
  yield takeEvery(
    DepartmentsActionTypes.FETCH_UPDATED_DEPARTMENT,
    fetchUpdatedDepartmentWorker
  );
  yield takeEvery(
    DepartmentsActionTypes.FETCH_DELETED_DEPARTMENT,
    deleteDepartmentWorker
  );
}
