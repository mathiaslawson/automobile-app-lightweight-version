import React, {useEffect} from "react";
import Row1 from "./Row1";
import Row2 from "./Row2";
import RelatedParts from "../../../Components/Customer/common/Band/Slider/RelatedParts";
import { ToastContainer, toast } from 'react-toastify';
function Index() {

  useEffect(()=>{
    //  window.scrollTo(window.innerWidth, window.innerHeight)
    window.scroll(0, 120)
  }, [])



  return (
    <>
      <Row1 />
      <Row2 />
      <div className="container">
        <RelatedParts />
      </div>
    </>
  );
}

export default Index;
