import { call, put, takeEvery, all, fork } from "redux-saga/effects";

// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import toast from "react-hot-toast";

// Ecoomerce Redux States
import {
GET_USERS_REQUEST,
UPDATE_USERS,
ADD_USERS_REQUEST
} from "./actionType";

import {
getUsersActionResponseError,
getUsersActionResponseSuccess,
updateUsersFail,
updateUsersSuccess,
addUsersFail,
addUsersSuccess,
getUsersAction
} from "./action";

//Include Both Helper File with needed methods
import {
 getusersPICALL,
//  addusersPICALL,
//  updateusersPICALL
} from "../../helpers/fakebackend_helper";

function* getUsers() {
  try {
    const response = yield call(getusersPICALL);
    if (response && response?.data?.status === 1) {
      yield put(getUsersActionResponseSuccess(response?.data?.data));
    }else{
      yield put(getUsersActionResponseError(response?.data?.message));
    }
  } catch (error) {
    yield put(getUsersActionResponseError(error));
  }
}


// function* addUsers({ payload: reqbody }) {
//   try {
//     const response = yield call(addusersPICALL, reqbody);
//     if (response && response?.data?.status === 1) {
//       yield put(addUsersSuccess(response));
//       yield put(getUsersAction())
//       toast.success("Saved Successfully", { autoClose: 3000 });
//     }else{
//       yield put(addUsersFail(response?.data?.message));
//       yield put(getUsersAction())
//       toast.error(response?.data?.message, { autoClose: 3000 });
//     }
//   } catch (error) {
//     yield put(addUsersFail(error)); yield put(getUsersAction())
//     toast.error("Failed to save record", { autoClose: 3000 });
//   }
// }

// function* updateUsers({ payload: reqbody }) {
//   try {
//     const response = yield call(updateusersPICALL, reqbody);
//     if (response && response?.data?.status === 1) {
//       yield put(updateUsersSuccess(response?.data?.data));
//       yield put(getUsersAction())
//       toast.success("Updateded Successfully", { autoClose: 3000 });
//     }else{
//       yield put(updateUsersFail(response?.data?.message));
//       yield put(getUsersAction())
//       toast.error(response?.data?.message, { autoClose: 3000 });
//     }
//   } catch (error) {
//     yield put(updateUsersFail(error));
//     yield put(getUsersAction())
//     toast.error("Failed to update record", { autoClose: 3000 });
//   }
// }



export function* watchGetUsers() {
  yield takeEvery(GET_USERS_REQUEST, getUsers);
}


// export function* watchUpdateUsers() {
//   yield takeEvery(UPDATE_USERS, updateUsers);
// }

// export function* watchAddNewUsers() {
//   yield takeEvery(ADD_USERS_REQUEST, addUsers);
// }

function* usersSaga() {
  yield all([
    fork(watchGetUsers),
    // fork(watchUpdateUsers),
    // fork(watchAddNewUsers),
  ]);
}

export default usersSaga;
