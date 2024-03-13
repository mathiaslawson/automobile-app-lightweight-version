import React, { useEffect } from 'react';
import withRouter from '../Components/Common/withRouter';

//redux
import { useSelector } from "react-redux";
import { createSelector } from 'reselect';
import NavBar from '../Components/Global/Navbar/NavBar';
import Footer from '../Components/Global/Footer/Footer'

const NonAuthLayout = ({ children }) => {
    const selectDashboardData = createSelector(
        (state) => state.Profile.user,
        (layoutModeType) => layoutModeType
      );
      
    // Inside your component
    const layoutModeType = useSelector(selectDashboardData);


    useEffect(() => {
        if (layoutModeType === "dark") {
            document.body.setAttribute("data-bs-theme", "dark");
        } else {
            document.body.setAttribute("data-bs-theme", "light");
        }
        return () => {
            document.body.removeAttribute("data-bs-theme")
        }
    }, [layoutModeType]);

const pathname = window.location.pathname

    return (
        <div style={{backgroundColor: 'white'}}>
          {
            pathname === '/login' ? "" : <NavBar />
          }
            {children}
            {
            pathname === '/login' ? "" : <Footer />
          }
        </div>
    );
};

export default withRouter(NonAuthLayout);