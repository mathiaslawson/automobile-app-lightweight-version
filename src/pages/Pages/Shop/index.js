import React from "react";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Band from "../../../Components/Customer/common/Band";

function index() {
  return (
    <>
      <Row1 />
      <Row2 />
      <div className="container">
        <Band minimal={true} />
      </div>
    </>
  );
}

export default index;
