import { call, put } from 'redux-saga/effects';
import { responseGenerator } from '../../types';

export default function createRequestSaga(type: any, request: any) {
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;
    return function* (action: any) {
        try {
            const response: responseGenerator = yield call(request, action.payload);
            yield put({
                type: SUCCESS,
                payload: response ? response.data : null
            });
        } catch (err: any) {
            if (err.response?.data) {
                yield put({
                    type: FAILURE,
                    payload: { ...err.response.data, type }
                });
            } else {
                yield put({
                    type: FAILURE,
                    payload: {
                        message: `Network Error`,
                        status: 500
                    }
                })
            }
        }
    }
}