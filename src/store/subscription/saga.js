import { call, put, takeEvery, all, fork } from "redux-saga/effects";

// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import toast from "react-hot-toast";

// Ecoomerce Redux States
import {
GET_SUBSCRIPTION_REQUEST,
UPDATE_SUBSCRIPTION,
ADD_SUBSCRIPTION_REQUEST
} from "./actionType";

import {
getSubscriptionActionResponseError,
getSubscriptionActionResponseSuccess,
updateSubscriptionFail,
updateSubscriptionSuccess,
addSubscriptionFail,
addSubscriptionSuccess,
getSubscriptionAction
} from "./action";

//Include Both Helper File with needed methods
import {
 getsubscriptionPICALL,
 addsubscriptionPICALL,
 updatesubscriptionPICALL
} from "../../helpers/fakebackend_helper";

function* getSubscription() {
  try {
    const response = yield call(getsubscriptionPICALL);
    if (response && response?.data?.status === 1) {
      yield put(getSubscriptionActionResponseSuccess(response?.data?.data));
    }else{
      yield put(getSubscriptionActionResponseError(response?.data?.message));
    }
  } catch (error) {
    yield put(getSubscriptionActionResponseError(error));
  }
}


function* addSubscription({ payload: reqbody }) {
  try {
    const response = yield call(addsubscriptionPICALL, reqbody);
    if (response && response?.data?.status === 1) {
      yield put(addSubscriptionSuccess(response));
      yield put(getSubscriptionAction())
      toast.success("Saved Successfully", { autoClose: 3000 });
    }else{
      yield put(addSubscriptionFail(response?.data?.message));
      yield put(getSubscriptionAction())
      toast.error(response?.data?.message, { autoClose: 3000 });
    }
  } catch (error) {
    yield put(addSubscriptionFail(error)); yield put(getSubscriptionAction())
    toast.error("Failed to save record", { autoClose: 3000 });
  }
}

function* updateSubscription({ payload: reqbody }) {
  try {
    const response = yield call(updatesubscriptionPICALL, reqbody);
    if (response && response?.data?.status === 1) {
      yield put(updateSubscriptionSuccess(response?.data?.data));
      yield put(getSubscriptionAction())
      toast.success("Updateded Successfully", { autoClose: 3000 });
    }else{
      yield put(updateSubscriptionFail(response?.data?.message));
      yield put(getSubscriptionAction())
      toast.error(response?.data?.message, { autoClose: 3000 });
    }
  } catch (error) {
    yield put(updateSubscriptionFail(error));
    yield put(getSubscriptionAction())
    toast.error("Failed to update record", { autoClose: 3000 });
  }
}



export function* watchGetSubscription() {
  yield takeEvery(GET_SUBSCRIPTION_REQUEST, getSubscription);
}


export function* watchUpdateSubscription() {
  yield takeEvery(UPDATE_SUBSCRIPTION, updateSubscription);
}

export function* watchAddNewSubscription() {
  yield takeEvery(ADD_SUBSCRIPTION_REQUEST, addSubscription);
}

function* subscriptionSaga() {
  yield all([
    fork(watchGetSubscription),
    fork(watchUpdateSubscription),
    fork(watchAddNewSubscription),
  ]);
}

export default subscriptionSaga;
