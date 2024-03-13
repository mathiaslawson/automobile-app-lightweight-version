import {
GET_ROUTES_FAIL,
GET_ROUTES_REQUEST,
GET_ROUTES_SUCCESS,
ADD_ROUTES_FAIL,
ADD_ROUTES_REQUEST,
ADD_ROUTES_SUCCESS,
UPDATE_ROUTES,
UPDATE_ROUTES_FAIL,
UPDATE_ROUTES_SUCCESS
} from "./actionType";

// common success
export const getRoutesActionResponseSuccess = (data) => ({
  type: GET_ROUTES_SUCCESS,
  payload: data,
});
// common error
export const getRoutesActionResponseError = (error) => ({
  type: GET_ROUTES_FAIL,
  payload: error,
});

export const getRoutesAction = () => ({
  
  type: GET_ROUTES_REQUEST,
});



export const updateRoutes = customer => ({
  type: UPDATE_ROUTES,
  payload: customer,
});

export const updateRoutesSuccess = customer => ({
  type: UPDATE_ROUTES_SUCCESS,
  payload: customer,
});

export const updateRoutesFail = error => ({
  type: UPDATE_ROUTES_FAIL,
  payload: error,
});

export const addNewRoutes = payload => ({
  type: ADD_ROUTES_REQUEST,
  payload: payload,
});

export const addRoutesSuccess = customer => ({
  type: ADD_ROUTES_SUCCESS,
  payload: customer,
});

export const addRoutesFail = error => ({
  type: ADD_ROUTES_FAIL,
  payload: error,
});

// export const deleteRoutes = customer => ({
//   type: DELETE_CUSTOMER,
//   payload: customer,
// });

// export const deleteRoutesSuccess = customer => ({
//   type: DELETE_CUSTOMER_SUCCESS,
//   payload: customer,
// });

// export const deleteRoutesFail = error => ({
//   type: DELETE_CUSTOMER_FAIL,
//   payload: error,
// });