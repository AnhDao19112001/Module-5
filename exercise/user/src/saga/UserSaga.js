import { call, put, takeLatest } from 'redux-saga/effects';
import {getListPostSuccess} from "../redux/Action";
import {getPostData} from "../postAPI";

function* getListPostSaga(action) {
    try {
        const data = yield call(getPostData);
        yield put(getListPostSuccess(data));
    } catch (error) {

    }
}

function* postsSaga() {
    yield takeLatest('GET_LIST_POST', getListPostSaga);
}

export default postsSaga;