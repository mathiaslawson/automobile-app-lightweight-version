import { call, put, takeEvery, all, fork } from "redux-saga/effects";

// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import toast from "react-hot-toast";

// Ecoomerce Redux States
import {
  GET_ROLE_PERMISSIONS_REQUEST,
  ADD_ROLE_PERMISSIONS_REQUEST,
} from "./actionType";

import {
  addNewRolePermissions,
  addRolePermissionsFail,
  getRolePermissionsAction,
  getRolePermissionsActionResponseError,
  getRolePermissionsActionResponseSuccess,
} from "./action";

//Include Both Helper File with needed methods
import {
  viewRoletoPermissionAPICALL,
  assignRoleToPermissionAPICALL,
  //  updateRolesPermissionsPICALL
} from "../../helpers/fakebackend_helper";

function* getRolesPermissions({payload: data}) {
  try {
    const response = yield call(viewRoletoPermissionAPICALL, data);
    if (response && response?.data?.status === 1) {
      yield put(getRolePermissionsActionResponseSuccess(response?.data?.data));
    } else {
      yield put(getRolePermissionsActionResponseError(response?.data?.message));
    }
  } catch (error) {
    getRolePermissionsActionResponseError;
    yield put(getRolePermissionsActionResponseError(error));
  }
}

function* addRolesPermissions({ payload: reqbody }) {
  try {
    const response = yield call(assignRoleToPermissionAPICALL, reqbody);
    if (response && response?.data?.status === 1) {
      // yield put(addNewRolePermissions(response));
      yield put(getRolePermissionsAction());
      toast.success("Role Assigned to Permission", { autoClose: 3000 });
    } else {
      yield put(addRolePermissionsFail(response?.data?.message));
      yield put(getRolePermissionsAction());
      toast.error(response?.data?.message, { autoClose: 3000 });
    }
  } catch (error) {
    yield put(addRolePermissionsFail(error));
    yield put(getRolePermissionsAction());
    toast.error("Failed to assign role to permission", { autoClose: 3000 });
  }
}

// function* updateRolesPermissions({ payload: reqbody }) {
//   try {
//     const response = yield call(updateRolesPermissionsPICALL, reqbody);
//     if (response && response?.data?.status === 1) {
//       yield put(updateRolesPermissionsSuccess(response?.data?.data));
//       yield put(getRolesPermissionsAction())
//       toast.success("Updateded Successfully", { autoClose: 3000 });
//     }else{
//       yield put(updateRolesPermissionsFail(response?.data?.message));
//       yield put(getRolesPermissionsAction())
//       toast.error(response?.data?.message, { autoClose: 3000 });
//     }
//   } catch (error) {
//     yield put(updateRolesPermissionsFail(error));
//     yield put(getRolesPermissionsAction())
//     toast.error("Failed to update record", { autoClose: 3000 });
//   }
// }

export function* watchGetRolesPermissions() {
  yield takeEvery(GET_ROLE_PERMISSIONS_REQUEST, getRolesPermissions);
}

// export function* watchUpdateRolesPermissions() {
//   yield takeEvery(UPDATE_ROLES_PERMISSIONS, updateRolesPermissions);
// }

export function* watchAddNewRolesPermissions() {
  yield takeEvery(ADD_ROLE_PERMISSIONS_REQUEST, addRolesPermissions);
}

function* rolesPermissionsSaga() {
  yield all([
    fork(watchGetRolesPermissions),
    // fork(watchUpdateRolesPermissions),
    fork(watchAddNewRolesPermissions),
  ]);
}

export default rolesPermissionsSaga;
