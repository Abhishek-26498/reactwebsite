import React from 'react'
import web from "./images/abhi2.png";

import Common from './Common.jsx';
const About = () => {
    return (
        <>
           <Common
           name="Welcome to about page"
           imgsrc={web}
           visit="/contact"
           btn="Contact Now"
           />
        </>
    )
};
export default About;