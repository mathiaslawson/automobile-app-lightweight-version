import React from "react";
import Row1 from "./Row1/Row1";
import Browse from "./Browse";
import Brand from "./Brand";
import Collection from "./Collection";
import Recommended from "./Recommended";
// import CommonBrand from './Brand/'

function index() {
  return (
    <>
      <Row1 />
      <Browse />
      <Brand />
      <Collection />
      <Collection />
      <Collection />
      <Recommended />
      <Collection />
      {/* <div className="mx-4 p-4">
        <CommonBrand home={true} />
      </div> */}
    </>
  );
}

export default index;
