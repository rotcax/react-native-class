import { call } from 'redux-saga/effects';
import axios from 'axios';

function* fetchService(url: string, method: string = 'GET', data: any = null) {
    const objectRequest: any = {
        method,
        url,
        data,
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const response = yield call(axios, objectRequest);
    const responseBody = response.data;

    return responseBody;
}

export default fetchService;
