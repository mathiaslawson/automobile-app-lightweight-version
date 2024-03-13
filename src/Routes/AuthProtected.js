import React, { useEffect } from "react";
import { Navigate, Route } from "react-router-dom";
import { setAuthorization } from "../helpers/api_helper";
import { useDispatch, useSelector } from "react-redux";

import { useProfile } from "../Components/Hooks/UserHooks";

import { logoutUser } from "../store/actions";

const AuthProtected = (props) => {
  const dispatch = useDispatch();
  const { userProfile, loading, token } = useProfile();
  // useEffect(() => {
  //   if (userProfile && !loading && token) {
  //     setAuthorization(token);
  //   } else if (!userProfile && loading && !token) {
  //     dispatch(logoutUser());
  //   }
  // }, [token, userProfile, loading, dispatch]);

  const {user} = useSelector((state)=>({
    user: state.Login.user
  }))
  useEffect(() => {
    if (Object.keys(user).length > 0) {
     //
   
    } else if (Object.keys(user).length === 0) {
      dispatch(logoutUser());
    }
  }, [user, dispatch]);

  /*
    Navigate is un-auth access protected routes via url
    */

  if (Object.keys(user).length === 0) {
    return (
      <Navigate to={{ pathname: "/home", state: { from: props.location } }} />
    );
  }

  return <>{props.children}</>;
};

const AccessRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        return (<> <Component {...props} /> </>);
      }}
    />
  );
};

export { AuthProtected, AccessRoute };