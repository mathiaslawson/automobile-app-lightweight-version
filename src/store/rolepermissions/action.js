import {
GET_ROLE_PERMISSIONS_FAIL,
GET_ROLE_PERMISSIONS_REQUEST,
GET_ROLE_PERMISSIONS_SUCCESS,
ADD_ROLE_PERMISSIONS_FAIL,
ADD_ROLE_PERMISSIONS_REQUEST,
ADD_ROLE_PERMISSIONS_SUCCESS,
UPDATE_ROLE_PERMISSIONS,
UPDATE_ROLE_PERMISSIONS_FAIL,
UPDATE_ROLE_PERMISSIONS_SUCCESS
} from "./actionType";

// common success
export const getRolePermissionsActionResponseSuccess = (data) => ({
  type: GET_ROLE_PERMISSIONS_SUCCESS,
  payload: data,
});
// common error
export const getRolePermissionsActionResponseError = (error) => ({
  type: GET_ROLE_PERMISSIONS_FAIL,
  payload: error,
});

export const getRolePermissionsAction = (data) => ({
  
  type: GET_ROLE_PERMISSIONS_REQUEST,
  payload: data,
});



export const updateRolePermissions = customer => ({
  type: UPDATE_ROLE_PERMISSIONS,
  payload: customer,
});

export const updateRolePermissionsSuccess = customer => ({
  type: UPDATE_ROLE_PERMISSIONS_SUCCESS,
  payload: customer,
});

export const updateRolePermissionsFail = error => ({
  type: UPDATE_ROLE_PERMISSIONS_FAIL,
  payload: error,
});

export const addNewRolePermissions = payload => ({
  type: ADD_ROLE_PERMISSIONS_REQUEST,
  payload: payload,
});

export const addRolePermissionsSuccess = customer => ({
  type: ADD_ROLE_PERMISSIONS_SUCCESS,
  payload: customer,
});

export const addRolePermissionsFail = error => ({
  type: ADD_ROLE_PERMISSIONS_FAIL,
  payload: error,
});

// export const deleteRolePermissions = customer => ({
//   type: DELETE_CUSTOMER,
//   payload: customer,
// });

// export const deleteRolePermissionsSuccess = customer => ({
//   type: DELETE_CUSTOMER_SUCCESS,
//   payload: customer,
// });

// export const deleteRolePermissionsFail = error => ({
//   type: DELETE_CUSTOMER_FAIL,
//   payload: error,
// });