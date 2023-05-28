import { all, call } from 'redux-saga/effects'
import merchantWatcher from './merchant'

export default function* rootSaga() {
  yield all([
    call(merchantWatcher)
  ])
}