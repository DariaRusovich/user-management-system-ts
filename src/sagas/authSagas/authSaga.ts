import { put, takeEvery, call } from 'redux-saga/effects';
import { api } from '../../api/interceptors';
import { LOGIN_URL } from '../../constants/urls';
import { start, end, setTokens, setCookies, setError } from '../../redux/auth/actions';
import { AuthActionTypes } from '../../redux/auth/actionTypes';
import { Cookie } from '../../utils/cookie';
import { FETCH_TOKENS } from '../../redux/auth/types';

function* fetchTokensWorker({ payload }: FETCH_TOKENS) {
  yield put(start());
  const [tokensDataError, tokensData] = yield call(
    api.post,
    LOGIN_URL,
    payload
  );
  if (tokensData) {
    const accessToken = tokensData.user.tokens?.accessToken;
    const refreshToken = tokensData.user.tokens?.refreshToken;
    localStorage.setItem('token', accessToken);
    Cookie.set('refreshToken', refreshToken, 30);
    yield put(setTokens(accessToken));
    yield put(setCookies(refreshToken))
  } else {
    yield put(setError(tokensDataError));
  }
  yield put(end());
}

export function* fetchTokensWatcher() {
  yield takeEvery(AuthActionTypes.FETCH_TOKENS, fetchTokensWorker);
}
