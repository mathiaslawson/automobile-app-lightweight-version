import {
  GET_ROLES_FAIL,
  GET_ROLES_REQUEST,
  GET_ROLES_SUCCESS,
  ADD_ROLES_FAIL,
  ADD_ROLES_REQUEST,
  ADD_ROLES_SUCCESS,
  UPDATE_ROLES,
  UPDATE_ROLES_FAIL,
  UPDATE_ROLES_SUCCESS,
  ADD_ROLES_RESET,
} from "./actionType";

const INIT_STATE = {
  roles: [],
  loadingroles: false,
  roleserror: null,
  saveloadding: false,
  saveerror: null,
  isRolesCreated: false,
  updateloadding: false,
  updateerror: null,
  isRolesUpdated: false,
};

const RolesReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ROLES_REQUEST: {
      return {
        ...state,
        loading: true,
        roles: [],
      };
    }
    case GET_ROLES_SUCCESS:
      return {
        ...state,
        loading: false,
        roles: action.payload,
        updateloadding: false,
        saveloadding: false,
      };
    case GET_ROLES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        roles: [],
      };

    case ADD_ROLES_SUCCESS:
      return {
        ...state,
        isRolesCreated: true,
        saveloadding: false,
        updateloadding: false,
        loading: false,
        roles: action.payload,
      };

    case ADD_ROLES_FAIL:
      return {
        ...state,
        saveloadding: false,
        isRolesCreated: false,
        error: action.payload,
        loading: false,
      };
    case ADD_ROLES_REQUEST:
      return {
        ...state,
        saveloadding: true,
        loading: true,
        roles: [],
      };
    case ADD_ROLES_RESET:
      return {
        ...state,
        isRolesCreated: false,
      };
    case UPDATE_ROLES:
      return {
        ...state,
        updateloadding: true,
        saveloadding: false,
        loading: true,
        roles: [],
      };
    case UPDATE_ROLES_SUCCESS:
      // console.log(state.applist.map(app =>
      //   app.id === action.payload.id
      //     ? { ...app, ...action.payload }
      //     : app
      // ));
      return {
        ...state,
        // roles: state.roles.map(item =>
        //   item.category_id === action.payload.category_id
        //     ? { ...item, ...action.payload }
        //     : item
        // ),
        roles: action.payload,
        isRolesUpdated: true,
        updateloadding: false,
        loading: false,
      };
    case UPDATE_ROLES_FAIL:
      return {
        ...state,
        updateerror: action.payload,
        isRolesUpdated: false,
        loading: false,
      };
    default:
      return { ...state };
  }
};

export default RolesReducer;
