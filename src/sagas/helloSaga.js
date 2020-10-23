import { put, takeLatest, all } from 'redux-saga/effects';
function* fetchList(value) {
    const {data} = value;
  const json = yield fetch('http://www.omdbapi.com/?t='+data+'&apikey=69dd3b80')
        .then(response => response.json());
  yield put({ type: "GET_LISTS_SUCCESS", response: json });
}
export default function* fetchLists() {
     yield takeLatest('GET_LISTS', fetchList)
}