import {
  GET_USERS_FAIL,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  ADD_USERS_FAIL,
  ADD_USERS_REQUEST,
  ADD_USERS_SUCCESS,
  UPDATE_USERS,
  UPDATE_USERS_FAIL,
  UPDATE_USERS_SUCCESS,
  ADD_USERS_RESET,
} from "./actionType";

const INIT_STATE = {
  users: [],
  loadingusers: false,
  userserror: null,
  saveloadding: false,
  saveerror: null,
  isUsersCreated: false,
  updateloadding: false,
  updateerror: null,
  isUsersUpdated: false,
};

const UsersReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_USERS_REQUEST: {
      return {
        ...state,
        loading: true,
        users: [],
      };
    }
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        updateloadding: false,
        saveloadding: false,
      };
    case GET_USERS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        users: [],
      };

    case ADD_USERS_SUCCESS:
      return {
        ...state,
        isUsersCreated: true,
        saveloadding: false,
        updateloadding: false,
        loading: false,
        users: action.payload,
      };

    case ADD_USERS_FAIL:
      return {
        ...state,
        saveloadding: false,
        isUsersCreated: false,
        error: action.payload,
        loading: false,
      };
    case ADD_USERS_REQUEST:
      return {
        ...state,
        saveloadding: true,
        loading: true,
        users: [],
      };
    case ADD_USERS_RESET:
      return {
        ...state,
        isUsersCreated: false,
      };
    case UPDATE_USERS:
      return {
        ...state,
        updateloadding: true,
        saveloadding: false,
        loading: true,
        users: [],
      };
    case UPDATE_USERS_SUCCESS:
      // console.log(state.applist.map(app =>
      //   app.id === action.payload.id
      //     ? { ...app, ...action.payload }
      //     : app
      // ));
      return {
        ...state,
        // users: state.users.map(item =>
        //   item.category_id === action.payload.category_id
        //     ? { ...item, ...action.payload }
        //     : item
        // ),
        users: action.payload,
        isUsersUpdated: true,
        updateloadding: false,
        loading: false,
      };
    case UPDATE_USERS_FAIL:
      return {
        ...state,
        updateerror: action.payload,
        isUsersUpdated: false,
        loading: false,
      };
    default:
      return { ...state };
  }
};

export default UsersReducer;
