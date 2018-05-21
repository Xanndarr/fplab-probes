import { put, call } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';

import fetchWrapper from 'app/fetch';

import {
  publishFingerprintFail,
  publishFingerprintSuccess,
  PUBLISH_FINGERPRINT_REQUEST,
} from './actions';

export function* publishFingerprintWorker({ fp }) {
  try {
    // TODO: check 200 status - maybe throw error in wrapper for non 200s?
    const response = yield call(fetchWrapper, 'POST', '/submit', fp);
    console.log(response);
    yield put(publishFingerprintSuccess());
  } catch (error) {
    yield put(publishFingerprintFail(error));
  }
}

export function* publishFingerprintWatcher() {
  yield* takeLatest(PUBLISH_FINGERPRINT_REQUEST, publishFingerprintWorker);
}
