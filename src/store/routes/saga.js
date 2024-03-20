import { call, put, takeEvery, all, fork } from "redux-saga/effects";

// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import toast from 'react-toastify';

// Ecoomerce Redux States
import {
// GET_ROUTES_REQUEST,
// UPDATE_ROUTES,
ADD_ROUTES_REQUEST
} from "./actionType";

import {
// getRoutesActionResponseError,
// getRoutesActionResponseSuccess,
// updateRoutesFail,
// updateRoutesSuccess,
addRoutesFail,
addRoutesSuccess,
getRoutesAction
} from "./action";

//Include Both Helper File with needed methods
import {
//  getRoutesAPICALL,
 addRoutesAPICALL,
//  updateRoutesAPICALL
} from "../../helpers/fakebackend_helper";

// function* getRoutes() {
//   try {
//     const response = yield call(getRoutesAPICALL);
//     if (response && response?.data?.status === 1) {
//       yield put(getRoutesActionResponseSuccess(response?.data?.data));
//     }else{
//       yield put(getRoutesActionResponseError(response?.data?.message));
//     }
//   } catch (error) {
//     yield put(getRoutesActionResponseError(error));
//   }
// }


function* addRoutes({ payload: reqbody }) {
  try {
    const response = yield call(addRoutesAPICALL, reqbody);
    if (response && response?.data?.status === 1) {
      yield put(addRoutesSuccess(response));
      yield put(getRoutesAction())
      toast.success("Saved Successfully", { autoClose: 3000 });
    }else{
      yield put(addRoutesFail(response?.data?.message));
      yield put(getRoutesAction())
      toast.error(response?.data?.message, { autoClose: 3000 });
    }
  } catch (error) {
    yield put(addRoutesFail(error)); yield put(getRoutesAction())
    toast.error("Failed to create route", { autoClose: 3000 });
  }
}

// function* updateRoutes({ payload: reqbody }) {
//   try {
//     const response = yield call(updateRoutesAPICALL, reqbody);
//     if (response && response?.data?.status === 1) {
//       yield put(updateRoutesSuccess(response?.data?.data));
//       yield put(getRoutesAction())
//       toast.success("Updateded Successfully", { autoClose: 3000 });
//     }else{
//       yield put(updateRoutesFail(response?.data?.message));
//       yield put(getRoutesAction())
//       toast.error(response?.data?.message, { autoClose: 3000 });
//     }
//   } catch (error) {
//     yield put(updateRoutesFail(error));
//     yield put(getRoutesAction())
//     toast.error("Failed to update record", { autoClose: 3000 });
//   }
// }



// export function* watchGetRoutes() {
//   yield takeEvery(GET_ROUTES_REQUEST, getRoutes);
// }


// export function* watchUpdateRoutes() {
//   yield takeEvery(UPDATE_ROUTES, updateRoutes);
// }

export function* watchAddNewRoutes() {
  yield takeEvery(ADD_ROUTES_REQUEST, addRoutes);
}

function* RoutesSaga() {
  yield all([
    // fork(watchGetRoutes),
    // fork(watchUpdateRoutes),
    fork(watchAddNewRoutes),
  ]);
}

export default RoutesSaga;
