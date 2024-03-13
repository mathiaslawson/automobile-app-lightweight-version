import {
GET_ROLES_FAIL,
GET_ROLES_REQUEST,
GET_ROLES_SUCCESS,
ADD_ROLES_FAIL,
ADD_ROLES_REQUEST,
ADD_ROLES_SUCCESS,
UPDATE_ROLES,
UPDATE_ROLES_FAIL,
UPDATE_ROLES_SUCCESS
} from "./actionType";

// common success
export const getRolesActionResponseSuccess = (data) => ({
  type: GET_ROLES_SUCCESS,
  payload: data,
});
// common error
export const getRolesActionResponseError = (error) => ({
  type: GET_ROLES_FAIL,
  payload: error,
});

export const getRolesAction = () => ({
  
  type: GET_ROLES_REQUEST,
});



export const updateRoles = customer => ({
  type: UPDATE_ROLES,
  payload: customer,
});

export const updateRolesSuccess = customer => ({
  type: UPDATE_ROLES_SUCCESS,
  payload: customer,
});

export const updateRolesFail = error => ({
  type: UPDATE_ROLES_FAIL,
  payload: error,
});

export const addNewRoles = payload => ({
  type: ADD_ROLES_REQUEST,
  payload: payload,
});

export const addRolesSuccess = customer => ({
  type: ADD_ROLES_SUCCESS,
  payload: customer,
});

export const addRolesFail = error => ({
  type: ADD_ROLES_FAIL,
  payload: error,
});

// export const deleteRoles = customer => ({
//   type: DELETE_CUSTOMER,
//   payload: customer,
// });

// export const deleteRolesSuccess = customer => ({
//   type: DELETE_CUSTOMER_SUCCESS,
//   payload: customer,
// });

// export const deleteRolesFail = error => ({
//   type: DELETE_CUSTOMER_FAIL,
//   payload: error,
// });