import logo from "./logo.png";

const Logo = ({extra}) => {
  return (
    <>
      <div className="d-flex align-items-center gap-2">
        <div style={{display: extra  === "footer" ? "none": ''}}>
          <img src={logo} alt="logo" className="img-fluid" width="100"></img>
        </div>

        <div>
          <div className="fw-bolder fs-4">Automobile Gh</div>
          <div style={{ fontSize: "0.8rem" }} className="fw-bolder ">Automotive Car Dealer</div>
        </div>
      </div>
    </>
  );
};

export default Logo;
