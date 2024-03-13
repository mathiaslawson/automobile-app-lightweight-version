import {
  GET_PERMISSIONS_FAIL,
  GET_PERMISSIONS_REQUEST,
  GET_PERMISSIONS_SUCCESS,
  ADD_PERMISSIONS_FAIL,
  ADD_PERMISSIONS_REQUEST,
  ADD_PERMISSIONS_SUCCESS,
  UPDATE_PERMISSIONS,
  UPDATE_PERMISSIONS_FAIL,
  UPDATE_PERMISSIONS_SUCCESS,
  ADD_PERMISSIONS_RESET,
} from "./actionType";

const INIT_STATE = {
  permissions: [],
  loadingpermissions: false,
  permissionserror: null,
  saveloadding: false,
  saveerror: null,
  isPermissionsCreated: false,
  updateloadding: false,
  updateerror: null,
  isPermissionsUpdated: false,
};

const PermissionsReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_PERMISSIONS_REQUEST: {
      return {
        ...state,
        loading: true,
        permissions: [],
      };
    }
    case GET_PERMISSIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        permissions: action.payload,
        updateloadding: false,
        saveloadding: false,
      };
    case GET_PERMISSIONS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        permissions: [],
      };

    case ADD_PERMISSIONS_SUCCESS:
      return {
        ...state,
        isPermissionsCreated: true,
        saveloadding: false,
        updateloadding: false,
        loading: false,
        permissions: action.payload,
      };

    case ADD_PERMISSIONS_FAIL:
      return {
        ...state,
        saveloadding: false,
        isPermissionsCreated: false,
        error: action.payload,
        loading: false,
      };
    case ADD_PERMISSIONS_REQUEST:
      return {
        ...state,
        saveloadding: true,
        loading: true,
        permissions: [],
      };
    case ADD_PERMISSIONS_RESET:
      return {
        ...state,
        isPermissionsCreated: false,
      };
    case UPDATE_PERMISSIONS:
      return {
        ...state,
        updateloadding: true,
        saveloadding: false,
        loading: true,
        permissions: [],
      };
    case UPDATE_PERMISSIONS_SUCCESS:
      // console.log(state.applist.map(app =>
      //   app.id === action.payload.id
      //     ? { ...app, ...action.payload }
      //     : app
      // ));
      return {
        ...state,
        // permissions: state.permissions.map(item =>
        //   item.category_id === action.payload.category_id
        //     ? { ...item, ...action.payload }
        //     : item
        // ),
        permissions: action.payload,
        isPermissionsUpdated: true,
        updateloadding: false,
        loading: false,
      };
    case UPDATE_PERMISSIONS_FAIL:
      return {
        ...state,
        updateerror: action.payload,
        isPermissionsUpdated: false,
        loading: false,
      };
    default:
      return { ...state };
  }
};

export default PermissionsReducer;
