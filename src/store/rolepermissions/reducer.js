import {
  GET_ROLE_PERMISSIONS_FAIL,
  GET_ROLE_PERMISSIONS_REQUEST,
  GET_ROLE_PERMISSIONS_SUCCESS,
  ADD_ROLE_PERMISSIONS_FAIL,
  ADD_ROLE_PERMISSIONS_REQUEST,
  ADD_ROLE_PERMISSIONS_SUCCESS,
  UPDATE_ROLE_PERMISSIONS,
  UPDATE_ROLE_PERMISSIONS_FAIL,
  UPDATE_ROLE_PERMISSIONS_SUCCESS,
  ADD_ROLE_PERMISSIONS_RESET,
} from "./actionType";

const INIT_STATE = {
  rolePermissions: [],
  loadingrolePermissions: false,
  rolePermissionserror: null,
  saveloadding: false,
  saveerror: null,
  isRolePermissionsCreated: false,
  updateloadding: false,
  updateerror: null,
  isRolePermissionsUpdated: false,
};

const RolePermissionsReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ROLE_PERMISSIONS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_ROLE_PERMISSIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        rolePermissions: action.payload,
        updateloadding: false,
        saveloadding: false,
      };
    case GET_ROLE_PERMISSIONS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        rolePermissions: [],
      };

    case ADD_ROLE_PERMISSIONS_SUCCESS:
      return {
        ...state,
        isRolesPermissionCreated: true,
        saveloadding: false,
        updateloadding: false,
        loading: false,
        rolePermissions: action.payload,
      };

    case ADD_ROLE_PERMISSIONS_FAIL:
      return {
        ...state,
        saveloadding: false,
        isRolesPermissionCreated: false,
        error: action.payload,
        loading: false,
      };
    case ADD_ROLE_PERMISSIONS_REQUEST:
      return {
        ...state,
        saveloadding: true,
        loading: true,
      };
    case ADD_ROLE_PERMISSIONS_RESET:
      return {
        ...state,
        isRolePermissionsCreated: false,
      };
    case UPDATE_ROLE_PERMISSIONS:
      return {
        ...state,
        updateloadding: true,
        saveloadding: false,
        loading: true,
      };
    case UPDATE_ROLE_PERMISSIONS_SUCCESS:
      // console.log(state.applist.map(app =>
      //   app.id === action.payload.id
      //     ? { ...app, ...action.payload }
      //     : app
      // ));
      return {
        ...state,
        // rolePermissions: state.rolePermissions.map(item =>
        //   item.category_id === action.payload.category_id
        //     ? { ...item, ...action.payload }
        //     : item
        // ),
        rolePermissions: action.payload,
        isRolePermissionsUpdated: true,
        updateloadding: false,
        loading: false,
      };
    case UPDATE_ROLE_PERMISSIONS_FAIL:
      return {
        ...state,
        updateerror: action.payload,
        isRolePermissionsUpdated: false,
        loading: false,
      };
    default:
      return { ...state };
  }
};

export default RolePermissionsReducer;
