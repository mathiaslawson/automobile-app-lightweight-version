import {
  GET_SUBSCRIPTION_FAIL,
  GET_SUBSCRIPTION_REQUEST,
  GET_SUBSCRIPTION_SUCCESS,
  ADD_SUBSCRIPTION_FAIL,
  ADD_SUBSCRIPTION_REQUEST,
  ADD_SUBSCRIPTION_SUCCESS,
  UPDATE_SUBSCRIPTION,
  UPDATE_SUBSCRIPTION_FAIL,
  UPDATE_SUBSCRIPTION_SUCCESS,
  ADD_SUBSCRIPTION_RESET,
} from "./actionType";

const INIT_STATE = {
  subscription: [],
  loadingsubscription: false,
  subscriptionerror: null,
  saveloadding: false,
  saveerror: null,
  isSubscriptionCreated: false,
  updateloadding: false,
  updateerror: null,
  isSubscriptionUpdated: false,
};

const SubscriptionReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_SUBSCRIPTION_REQUEST: {
      return {
        ...state,
        loading: true,
        subscription: [],
      };
    }
    case GET_SUBSCRIPTION_SUCCESS:
      return {
        ...state,
        loading: false,
        subscription: action.payload,
        updateloadding: false,
        saveloadding: false,
      };
    case GET_SUBSCRIPTION_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        subscription: [],
      };

    case ADD_SUBSCRIPTION_SUCCESS:
      return {
        ...state,
        isSubscriptionCreated: true,
        saveloadding: false,
        updateloadding: false,
        loading: false,
        subscription: action.payload,
      };

    case ADD_SUBSCRIPTION_FAIL:
      return {
        ...state,
        saveloadding: false,
        isSubscriptionCreated: false,
        error: action.payload,
        loading: false,
      };
    case ADD_SUBSCRIPTION_REQUEST:
      return {
        ...state,
        saveloadding: true,
        loading: true,
        subscription: [],
      };
    case ADD_SUBSCRIPTION_RESET:
      return {
        ...state,
        isSubscriptionCreated: false,
      };
    case UPDATE_SUBSCRIPTION:
      return {
        ...state,
        updateloadding: true,
        saveloadding: false,
        loading: true,
        subscription: [],
      };
    case UPDATE_SUBSCRIPTION_SUCCESS:
      // console.log(state.applist.map(app =>
      //   app.id === action.payload.id
      //     ? { ...app, ...action.payload }
      //     : app
      // ));
      return {
        ...state,
        // subscription: state.subscription.map(item =>
        //   item.category_id === action.payload.category_id
        //     ? { ...item, ...action.payload }
        //     : item
        // ),
        subscription: action.payload,
        isSubscriptionUpdated: true,
        updateloadding: false,
        loading: false,
      };
    case UPDATE_SUBSCRIPTION_FAIL:
      return {
        ...state,
        updateerror: action.payload,
        isSubscriptionUpdated: false,
        loading: false,
      };
    default:
      return { ...state };
  }
};

export default SubscriptionReducer;
