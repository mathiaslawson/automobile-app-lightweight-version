import React from "react";
import withRouter from "../../Components/Common/withRouter";
import "./style.css";

const ParticlesAuth = ({ children }) => {
  return (
    <React.Fragment>
      <div className="auth-page-wrapper pt-5">
        <div className="auth-one-bg-position auth-one-bg" id="auth-particles">
          <div className="bg-overlay"></div>

          <div className="diagonal-container auth-one-bg-position auth-one-bg" >
            <div className="diagonal-shape"></div>
          </div>
        </div>

        {/* pass the children */}
        {children}

        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-center">
                  <p className="mb-0 text-muted">
                    &copy; {new Date().getFullYear()} Automarket. Crafted with{" "}
                    {/* <i className="mdi mdi-heart text-danger"></i> */}
                     by Automarkets
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

export default withRouter(ParticlesAuth);
