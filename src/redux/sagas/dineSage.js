import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* rootSaga() {
    yield takeEvery('GET_TACOS', getTacos);
    yield takeEvery('GET_SUSHI_TACOS', getSushiTacos);
    yield takeEvery('GET_SUSHI_MAKI_ROLL', getSushiMakiRoll);
    yield takeEvery('GET_SPECIALTY_ROLL', getSpecialtyRoll);
    yield takeEvery('GET_APPETIZERS', getAppetizers);
}

function* getTacos(){
    try {
        const response = yield axios.get(`/api/food`);
        yield put({ type: 'FOOD_DINE', payload: response.data });
    } catch(error) {
        console.log('error while getting food', error);
    } // end try
} // end getPic saga

function* getSushiTacos(){
    try {
        const response = yield axios.get(`/api/food/sushi/tacos`);
        yield put({ type: 'SUSHI_TACOS', payload: response.data });
    } catch(error) {
        console.log('error while getting food', error);
    } // end try
} // end getPic saga

function* getSushiMakiRoll(){
    try {
        const response = yield axios.get(`/api/food/sushi/maki/roll`);
        yield put({ type: 'SUSHI_MAKI_ROLL', payload: response.data });
    } catch(error) {
        console.log('error while getting food', error);
    } // end try
} // end getPic saga

function* getSpecialtyRoll(){
    try {
        const response = yield axios.get(`/api/food/specialty/roll`);
        yield put({ type: 'SPECIALTY_ROLL', payload: response.data });
    } catch(error) {
        console.log('error while getting food', error);
    } // end try
} // end getPic saga

function* getAppetizers(){
    try {
        const response = yield axios.get(`/api/food/appetizers`);
        yield put({ type: 'APPETIZERS', payload: response.data });
    } catch(error) {
        console.log('error while getting food', error);
    } // end try
} // end getPic saga

export default rootSaga;