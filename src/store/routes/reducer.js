import {
  GET_ROUTES_FAIL,
  GET_ROUTES_REQUEST,
  GET_ROUTES_SUCCESS,
  ADD_ROUTES_FAIL,
  ADD_ROUTES_REQUEST,
  ADD_ROUTES_SUCCESS,
  UPDATE_ROUTES,
  UPDATE_ROUTES_FAIL,
  UPDATE_ROUTES_SUCCESS,
  ADD_ROUTES_RESET,
} from "./actionType";

const INIT_STATE = {
  getRoutesActionResponseSuccess: [],
  loadinggetRoutesActionResponseSuccess: false,
  getRoutesActionResponseSuccesserror: null,
  saveloadding: false,
  saveerror: null,
  isRoutesCreated: false,
  updateloadding: false,
  updateerror: null,
  isRoutesUpdated: false,
};

const RoutesReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ROUTES_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_ROUTES_SUCCESS:
      return {
        ...state,
        loading: false,
        getRoutesActionResponseSuccess: action.payload,
        updateloadding: false,
        saveloadding: false,
      };
    case GET_ROUTES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        getRoutesActionResponseSuccess: [],
      };

    case ADD_ROUTES_SUCCESS:
      return {
        ...state,
        isRoutesCreated: true,
        saveloadding: false,
        updateloadding: false,
        loading: false,
        getRoutesActionResponseSuccess: action.payload,
      };

    case ADD_ROUTES_FAIL:
      return {
        ...state,
        saveloadding: false,
        isRoutesCreated: false,
        error: action.payload,
        loading: false,
      };
    case ADD_ROUTES_REQUEST:
      return {
        ...state,
        saveloadding: true,
        loading: true,
      };
    case ADD_ROUTES_RESET:
      return {
        ...state,
        isRoutesCreated: false,
      };
    case UPDATE_ROUTES:
      return {
        ...state,
        updateloadding: true,
        saveloadding: false,
        loading: true,
      };
    case UPDATE_ROUTES_SUCCESS:
      // console.log(state.applist.map(app =>
      //   app.id === action.payload.id
      //     ? { ...app, ...action.payload }
      //     : app
      // ));
      return {
        ...state,
        // getRoutesActionResponseSuccess: state.getRoutesActionResponseSuccess.map(item =>
        //   item.category_id === action.payload.category_id
        //     ? { ...item, ...action.payload }
        //     : item
        // ),
        getRoutesActionResponseSuccess: action.payload,
        isRoutesUpdated: true,
        updateloadding: false,
        loading: false,
      };
    case UPDATE_ROUTES_FAIL:
      return {
        ...state,
        updateerror: action.payload,
        isRoutesUpdated: false,
        loading: false,
      };
    default:
      return { ...state };
  }
};

export default RoutesReducer;
