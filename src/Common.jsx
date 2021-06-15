import React from 'react'

import { NavLink } from 'react-router-dom';
const Common = (props) => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">

                            
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                <h1> {props.name} <strong className="brand-name">JMD Furniture</strong></h1>
                                <h5 className="my-3">
                                Make your home beautifull.  
                                </h5>
                            <div className="mt-3 getstrted ">
                                <NavLink to={props.visit} className="btn-get-started">{props.btn}</NavLink>
                            </div>

                            </div>
                        <div className="col-lg-6 order-1 orderlg-2 header-img">
                            <img height="300vh" width="500vw" src={props.imgsrc} className="image-fluid animated" alt="home img" />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
};
export default Common;