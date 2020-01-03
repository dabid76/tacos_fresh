import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* rootSaga() {
    yield takeEvery('GET_PIC', getPic);
    yield takeEvery('GET_PIC_ID', getPicId);
}

function* getPic(action){
    try {
        const response = yield axios.get(`/api/picture`);
        yield put({ type: 'FOOD_PIC', payload: response.data });
    } catch(error) {
        console.log('error while getting data', error);
    } // end try
  } // end getPic saga

  function* getPicId(action){
    try {
        const response = yield axios.get(`/api/picture/${action.payload}`);
        yield put({ type: 'FOOD_PIC', payload: response.data });
    } catch(error) {
        console.log('error while getting data', error);
    } // end try
  } // end getPic saga

export default rootSaga;
