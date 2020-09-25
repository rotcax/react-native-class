import { call, put, takeLatest } from 'redux-saga/effects';
import fetchService from '../../utils/fetchService';
import { LOGIN, LOGIN_ASYNC } from './action-types';

function* loginAsync({ payload }: any) {
    try {
        const response = yield call(fetchService, 'https://jsonplaceholder.typicode.com/todos/1');        

        yield put({
            type: LOGIN_ASYNC,
            payload: { user: response, isAuth: true }
        });

    } catch(error) {
        console.log(error);
    }
}

export function* watchLogin() {
    yield takeLatest(LOGIN, loginAsync);
}
