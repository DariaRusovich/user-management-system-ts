import { put, takeEvery } from 'redux-saga/effects';
import {
  end,
  setCookies,
  setError,
  setTokens,
  start,
} from '../../redux/auth/actions';
import { AuthActionTypes } from '../../redux/auth/actionTypes';
import { FETCH_TOKENS, NAVIGATE } from '../../redux/auth/types';
import { signin, signout } from '../../api/apiServise';
import * as Effects from 'redux-saga/effects';
import { Cookie } from '../../utils/cookie';
const call: any = Effects.call;

function *fetchTokensWorker({ payload }: FETCH_TOKENS) {
  yield put(start());
  const [tokensDataError, tokensData] = yield call(signin, payload);
  if (tokensData) {
    const accessToken = tokensData.user.tokens.accessToken!;
    const refreshToken = tokensData.user.tokens.refreshToken;
    yield put(setTokens(accessToken));
    yield put(setCookies(refreshToken));
    localStorage.setItem('token', accessToken);
    Cookie.set('refreshToken', refreshToken, 30);
  } else {
    yield put(setError(tokensDataError));
  }
  yield put(end());
}

function *logoutWorker() {
  yield put(start());
  const [statusError, status] = yield call(signout);
  if (status) {
    localStorage.removeItem('token');
  } else {
    yield put(setError(statusError));
  }
  yield put(end());
}

function *navigateWorker(action: NAVIGATE) {
  action.navigate('/');
}

export function *fetchTokensWatcher() {
  yield takeEvery(AuthActionTypes.FETCH_TOKENS, fetchTokensWorker);
  yield takeEvery(AuthActionTypes.NAVIGATE, navigateWorker);
  yield takeEvery(AuthActionTypes.LOGOUT, logoutWorker);
}
