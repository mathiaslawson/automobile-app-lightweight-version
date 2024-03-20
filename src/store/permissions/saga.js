import { call, put, takeEvery, all, fork } from "redux-saga/effects";

// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import toast from 'react-toastify';

// Ecoomerce Redux States
import {
GET_PERMISSIONS_REQUEST,
UPDATE_PERMISSIONS,
ADD_PERMISSIONS_REQUEST
} from "./actionType";

import {
getPermissionsActionResponseError,
getPermissionsActionResponseSuccess,
updatePermissionsFail,
updatePermissionsSuccess,
addPermissionsFail,
addPermissionsSuccess,
getPermissionsAction
} from "./action";

//Include Both Helper File with needed methods
import {
 getpermissionsPICALL,
 addpermissionsPICALL,
 updatepermissionsPICALL
} from "../../helpers/fakebackend_helper";

function* getPermissions() {
  try {
    const response = yield call(getpermissionsPICALL);
    if (response && response?.data?.status === 1) {
      yield put(getPermissionsActionResponseSuccess(response?.data?.data));
    }else{
      yield put(getPermissionsActionResponseError(response?.data?.message));
    }
  } catch (error) {
    yield put(getPermissionsActionResponseError(error));
  }
}


function* addPermissions({ payload: reqbody }) {
  try {
    const response = yield call(addpermissionsPICALL, reqbody);
    if (response && response?.data?.status === 1) {
      yield put(addPermissionsSuccess(response));
      yield put(getPermissionsAction())
      toast.success("Saved Successfully", { autoClose: 3000 });
    }else{
      yield put(addPermissionsFail(response?.data?.message));
      yield put(getPermissionsAction())
      toast.error(response?.data?.message, { autoClose: 3000 });
    }
  } catch (error) {
    yield put(addPermissionsFail(error)); yield put(getPermissionsAction())
    toast.error("Failed to add permission", { autoClose: 3000 });
  }
}

function* updatePermissions({ payload: reqbody }) {
  try {
    const response = yield call(updatepermissionsPICALL, reqbody);
    if (response && response?.data?.status === 1) {
      yield put(updatePermissionsSuccess(response?.data?.data));
      yield put(getPermissionsAction())
      toast.success("Updateded Successfully", { autoClose: 3000 });
    }else{
      yield put(updatePermissionsFail(response?.data?.message));
      yield put(getPermissionsAction())
      toast.error(response?.data?.message, { autoClose: 3000 });
    }
  } catch (error) {
    yield put(updatePermissionsFail(error));
    yield put(getPermissionsAction())
    toast.error("Failed to update record", { autoClose: 3000 });
  }
}



export function* watchGetPermissions() {
  yield takeEvery(GET_PERMISSIONS_REQUEST, getPermissions);
}


export function* watchUpdatePermissions() {
  yield takeEvery(UPDATE_PERMISSIONS, updatePermissions);
}

export function* watchAddNewPermissions() {
  yield takeEvery(ADD_PERMISSIONS_REQUEST, addPermissions);
}

function* permissionsSaga() {
  yield all([
    fork(watchGetPermissions),
    fork(watchUpdatePermissions),
    fork(watchAddNewPermissions),
  ]);
}

export default permissionsSaga;
