import {
GET_USERS_FAIL,
GET_USERS_REQUEST,
GET_USERS_SUCCESS,
ADD_USERS_FAIL,
ADD_USERS_REQUEST,
ADD_USERS_SUCCESS,
UPDATE_USERS,
UPDATE_USERS_FAIL,
UPDATE_USERS_SUCCESS
} from "./actionType";

// common success
export const getUsersActionResponseSuccess = (data) => ({
  type: GET_USERS_SUCCESS,
  payload: data,
});
// common error
export const getUsersActionResponseError = (error) => ({
  type: GET_USERS_FAIL,
  payload: error,
});

export const getUsersAction = () => ({
  
  type: GET_USERS_REQUEST,
});



export const updateUsers = customer => ({
  type: UPDATE_USERS,
  payload: customer,
});

export const updateUsersSuccess = customer => ({
  type: UPDATE_USERS_SUCCESS,
  payload: customer,
});

export const updateUsersFail = error => ({
  type: UPDATE_USERS_FAIL,
  payload: error,
});

export const addNewUsers = payload => ({
  type: ADD_USERS_REQUEST,
  payload: payload,
});

export const addUsersSuccess = customer => ({
  type: ADD_USERS_SUCCESS,
  payload: customer,
});

export const addUsersFail = error => ({
  type: ADD_USERS_FAIL,
  payload: error,
});

// export const deleteUsers = customer => ({
//   type: DELETE_CUSTOMER,
//   payload: customer,
// });

// export const deleteUsersSuccess = customer => ({
//   type: DELETE_CUSTOMER_SUCCESS,
//   payload: customer,
// });

// export const deleteUsersFail = error => ({
//   type: DELETE_CUSTOMER_FAIL,
//   payload: error,
// });