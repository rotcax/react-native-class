import { all, fork } from 'redux-saga/effects';
import { watchLogin } from './auth/saga';

export default function* () {
    yield all([
        fork(watchLogin)
    ]);
}
