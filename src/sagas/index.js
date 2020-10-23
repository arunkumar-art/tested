import { put, takeLatest, all } from 'redux-saga/effects';

import fetchLists from './helloSaga';

export default function* rootSaga() {
    yield all([
        fetchLists()
    ])
  }
  