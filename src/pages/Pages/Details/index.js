import React, { useEffect } from 'react'

import Row1 from './Row1';
import Row2 from './Row2';
import Row3 from './Row3';
import Row4 from './Row4';
import Row5 from './Row5';


function Index() {

useEffect(()=>{
  //  window.scrollTo(window.innerWidth, window.innerHeight)
  window.scroll(0, 120)
}, [])


  return (
   <>
   
   <Row1 />
   <Row2 />
   <Row3 />
   <Row4 />
   <Row5 />
   </>
  )
}

export default Index