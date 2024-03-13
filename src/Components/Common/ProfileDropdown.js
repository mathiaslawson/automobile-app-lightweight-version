import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

//import images
import avatar1 from "../../assets/images/users/avatar-1.jpg";
import { createSelector } from "reselect";

const ProfileDropdown = () => {
  const selectDashboardData = createSelector(
    (state) => state.Profile.user,
    (user) => user
  );

  // Inside your component
  const user = useSelector(selectDashboardData);

  const [userName, setUserName] = useState("Admin");

  useEffect(() => {
    if (sessionStorage.getItem("authUser")) {
      const obj = JSON.parse(sessionStorage.getItem("authUser"));
      setUserName(
        process.env.REACT_APP_DEFAULTAUTH === "fake"
          ? obj.username === undefined
            ? user.first_name
              ? user.first_name
              : obj.data.first_name
            : "Admin" || "Admin"
          : process.env.REACT_APP_DEFAULTAUTH === "firebase"
          ? obj.providerData[0].email
          : "Admin"
      );
    }
  }, [userName, user]);

  //Dropdown Toggle
  const [isProfileDropdown, setIsProfileDropdown] = useState(false);
  const toggleProfileDropdown = () => {
    setIsProfileDropdown(!isProfileDropdown);
  };

  const { userrole } = useSelector((state) => ({
    userrole: state.Login.user,
  }));

  return (
    <React.Fragment>
      <Dropdown
        isOpen={isProfileDropdown}
        toggle={toggleProfileDropdown}
        className="ms-sm-3 header-item topbar-user"
        style={{ backgroundColor: "transparent" }}
      >
        <DropdownToggle tag="button" type="button" className="btn shadow-none">
          <span className="d-flex align-items-center">
            <img
              className="rounded-circle header-profile-user"
              src={"https://us.123rf.com/450wm/fxquadro/fxquadro1906/fxquadro190601845/127174290-portrait-of-smiling-elegant-afro-etnicity-businessman-in-the-car-as-a-passenger-with-mobile-phone.jpg?ver=6"}
              alt="Header Avatar"
            />
            <span className="text-start ms-xl-2 d-grid">
              <span className="d-none d-xl-inline-block ms-1 fw-medium user-name-text">
                {userName}
              </span>
              <span className="d-none d-xl-block ms-1 fs-12 text-muted user-name-sub-text">
                {userrole?.role === "customer"
                  ? "Customer"
                  : userrole?.role === "mech"
                  ? "Mechanic"
                  : userrole?.role === "deal"
                  ? "Car Dealer"
                  : userrole?.role === "sub"
                  ? "Sub Dealer"
                  : "Error Loading Profile"}
              </span>
            </span>
          </span>
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-end">
          <h6 className="dropdown-header">Welcome {userrole?.first_name}!</h6>
          {/* <DropdownItem href={process.env.PUBLIC_URL + "/profile"}>
            <i className="mdi mdi-account-circle text-muted fs-16 align-middle me-1"></i>
            <span className="align-middle">Profile</span>
          </DropdownItem>
          <DropdownItem href={process.env.PUBLIC_URL + "/apps-chat"}>
            <i className="mdi mdi-message-text-outline text-muted fs-16 align-middle me-1"></i>{" "}
            <span className="align-middle">Messages</span>
          </DropdownItem>
          <DropdownItem href={process.env.PUBLIC_URL + "#"}>
            <i className="mdi mdi-calendar-check-outline text-muted fs-16 align-middle me-1"></i>{" "}
            <span className="align-middle">Taskboard</span>
          </DropdownItem>
          <DropdownItem href={process.env.PUBLIC_URL + "/pages-faqs"}>
            <i className="mdi mdi-lifebuoy text-muted fs-16 align-middle me-1"></i>{" "}
            <span className="align-middle">Help</span>
          </DropdownItem>
          <div className="dropdown-divider"></div>
          <DropdownItem href={process.env.PUBLIC_URL + "/pages-profile"}>
            <i className="mdi mdi-wallet text-muted fs-16 align-middle me-1"></i>{" "}
            <span className="align-middle">
              Balance : <b>$5971.67</b>
            </span>
          </DropdownItem>
          <DropdownItem
            href={process.env.PUBLIC_URL + "/pages-profile-settings"}
          >
            <span className="badge bg-success-subtle text-success mt-1 float-end">
              New
            </span>
            <i className="mdi mdi-cog-outline text-muted fs-16 align-middle me-1"></i>{" "}
            <span className="align-middle">Settings</span>
          </DropdownItem>
          <DropdownItem
            href={process.env.PUBLIC_URL + "/auth-lockscreen-basic"}
          >
            <i className="mdi mdi-lock text-muted fs-16 align-middle me-1"></i>{" "}
            <span className="align-middle">Lock screen</span>
          </DropdownItem> */}
          <DropdownItem href={process.env.PUBLIC_URL + "/logout"}>
            <i className="mdi mdi-logout text-muted fs-16 align-middle me-1"></i>{" "}
            <span className="align-middle" data-key="t-logout">
              Logout
            </span>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  );
};

export default ProfileDropdown;
