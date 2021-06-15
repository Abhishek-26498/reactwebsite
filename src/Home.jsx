import React from 'react'
import web from "./images/homeimg.jpg";

import Common from './Common.jsx';
const Home = () => {
    return (
        <>
          <Common
          name="Make your home beautiful with"
          imgsrc={web}
          visit="/services"
          btn="Get Started"/>
        </>
    )
};
export default Home;