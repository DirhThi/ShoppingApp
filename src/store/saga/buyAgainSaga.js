import {call, put} from 'redux-saga/effects';
import {makeRequest} from '../../common/utils/httpRequestAPI';
import {
  GET_CART_ITEM_BY_USER_ID_SUCCESS,
  GET_CART_ITEM_BY_USER_ID_FAIL,
  BUY_AGAIN_SUCCESS,
  BUY_AGAIN_FAIL,
} from '../actions/types';
export default function* (action) {
  try {
    const res = yield call(makeRequest, action.payload.config);
    yield put({type: BUY_AGAIN_SUCCESS, payload: res});
  } catch (error) {
    yield put({type: BUY_AGAIN_FAIL, payload: error.message});
  }
}