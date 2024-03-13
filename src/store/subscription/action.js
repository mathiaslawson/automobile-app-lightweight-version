import {
GET_SUBSCRIPTION_FAIL,
GET_SUBSCRIPTION_REQUEST,
GET_SUBSCRIPTION_SUCCESS,
ADD_SUBSCRIPTION_FAIL,
ADD_SUBSCRIPTION_REQUEST,
ADD_SUBSCRIPTION_SUCCESS,
UPDATE_SUBSCRIPTION,
UPDATE_SUBSCRIPTION_FAIL,
UPDATE_SUBSCRIPTION_SUCCESS
} from "./actionType";

// common success
export const getSubscriptionActionResponseSuccess = (data) => ({
  type: GET_SUBSCRIPTION_SUCCESS,
  payload: data,
});
// common error
export const getSubscriptionActionResponseError = (error) => ({
  type: GET_SUBSCRIPTION_FAIL,
  payload: error,
});

export const getSubscriptionAction = () => ({
  
  type: GET_SUBSCRIPTION_REQUEST,
});



export const updateSubscription = customer => ({
  type: UPDATE_SUBSCRIPTION,
  payload: customer,
});

export const updateSubscriptionSuccess = customer => ({
  type: UPDATE_SUBSCRIPTION_SUCCESS,
  payload: customer,
});

export const updateSubscriptionFail = error => ({
  type: UPDATE_SUBSCRIPTION_FAIL,
  payload: error,
});

export const addNewSubscription = payload => ({
  type: ADD_SUBSCRIPTION_REQUEST,
  payload: payload,
});

export const addSubscriptionSuccess = customer => ({
  type: ADD_SUBSCRIPTION_SUCCESS,
  payload: customer,
});

export const addSubscriptionFail = error => ({
  type: ADD_SUBSCRIPTION_FAIL,
  payload: error,
});

// export const deleteSubscription = customer => ({
//   type: DELETE_CUSTOMER,
//   payload: customer,
// });

// export const deleteSubscriptionSuccess = customer => ({
//   type: DELETE_CUSTOMER_SUCCESS,
//   payload: customer,
// });

// export const deleteSubscriptionFail = error => ({
//   type: DELETE_CUSTOMER_FAIL,
//   payload: error,
// });