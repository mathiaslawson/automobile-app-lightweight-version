import {
GET_PERMISSIONS_FAIL,
GET_PERMISSIONS_REQUEST,
GET_PERMISSIONS_SUCCESS,
ADD_PERMISSIONS_FAIL,
ADD_PERMISSIONS_REQUEST,
ADD_PERMISSIONS_SUCCESS,
UPDATE_PERMISSIONS,
UPDATE_PERMISSIONS_FAIL,
UPDATE_PERMISSIONS_SUCCESS
} from "./actionType";

// common success
export const getPermissionsActionResponseSuccess = (data) => ({
  type: GET_PERMISSIONS_SUCCESS,
  payload: data,
});
// common error
export const getPermissionsActionResponseError = (error) => ({
  type: GET_PERMISSIONS_FAIL,
  payload: error,
});

export const getPermissionsAction = () => ({
  
  type: GET_PERMISSIONS_REQUEST,
});



export const updatePermissions = customer => ({
  type: UPDATE_PERMISSIONS,
  payload: customer,
});

export const updatePermissionsSuccess = customer => ({
  type: UPDATE_PERMISSIONS_SUCCESS,
  payload: customer,
});

export const updatePermissionsFail = error => ({
  type: UPDATE_PERMISSIONS_FAIL,
  payload: error,
});

export const addNewPermissions = payload => ({
  type: ADD_PERMISSIONS_REQUEST,
  payload: payload,
});

export const addPermissionsSuccess = customer => ({
  type: ADD_PERMISSIONS_SUCCESS,
  payload: customer,
});

export const addPermissionsFail = error => ({
  type: ADD_PERMISSIONS_FAIL,
  payload: error,
});

// export const deletePermissions = customer => ({
//   type: DELETE_CUSTOMER,
//   payload: customer,
// });

// export const deletePermissionsSuccess = customer => ({
//   type: DELETE_CUSTOMER_SUCCESS,
//   payload: customer,
// });

// export const deletePermissionsFail = error => ({
//   type: DELETE_CUSTOMER_FAIL,
//   payload: error,
// });