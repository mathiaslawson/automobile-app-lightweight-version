import { call, put, takeEvery, all, fork } from "redux-saga/effects";

// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import toast from 'react-toastify';

// Ecoomerce Redux States
import {
GET_ROLES_REQUEST,
UPDATE_ROLES,
ADD_ROLES_REQUEST
} from "./actionType";

import {
getRolesActionResponseError,
getRolesActionResponseSuccess,
updateRolesFail,
updateRolesSuccess,
addRolesFail,
addRolesSuccess,
getRolesAction
} from "./action";

//Include Both Helper File with needed methods
import {
 getrolesPICALL,
 addrolesPICALL,
 updaterolesPICALL
} from "../../helpers/fakebackend_helper";

function* getRoles() {
  try {
    const response = yield call(getrolesPICALL);
    if (response && response?.data?.status === 1) {
      yield put(getRolesActionResponseSuccess(response?.data?.data));
    }else{
      yield put(getRolesActionResponseError(response?.data?.message));
    }
  } catch (error) {
    yield put(getRolesActionResponseError(error));
  }
}


function* addRoles({ payload: reqbody }) {
  try {
    const response = yield call(addrolesPICALL, reqbody);
    if (response && response?.data?.status === 1) {
      yield put(addRolesSuccess(response));
      yield put(getRolesAction())
      toast.success("Saved Successfully", { autoClose: 3000 });
    }else{
      yield put(addRolesFail(response?.data?.message));
      yield put(getRolesAction())
      toast.error(response?.data?.message, { autoClose: 3000 });
    }
  } catch (error) {
    yield put(addRolesFail(error)); yield put(getRolesAction())
    toast.error("Failed to add role", { autoClose: 3000 });
  }
}

function* updateRoles({ payload: reqbody }) {
  try {
    const response = yield call(updaterolesPICALL, reqbody);
    if (response && response?.data?.status === 1) {
      yield put(updateRolesSuccess(response?.data?.data));
      yield put(getRolesAction())
      toast.success("Updateded Successfully", { autoClose: 3000 });
    }else{
      yield put(updateRolesFail(response?.data?.message));
      yield put(getRolesAction())
      toast.error(response?.data?.message, { autoClose: 3000 });
    }
  } catch (error) {
    yield put(updateRolesFail(error));
    yield put(getRolesAction())
    toast.error("Failed to update record", { autoClose: 3000 });
  }
}



export function* watchGetRoles() {
  yield takeEvery(GET_ROLES_REQUEST, getRoles);
}


export function* watchUpdateRoles() {
  yield takeEvery(UPDATE_ROLES, updateRoles);
}

export function* watchAddNewRoles() {
  yield takeEvery(ADD_ROLES_REQUEST, addRoles);
}

function* rolesSaga() {
  yield all([
    fork(watchGetRoles),
    fork(watchUpdateRoles),
    fork(watchAddNewRoles),
  ]);
}

export default rolesSaga;
