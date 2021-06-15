import React from 'react'
import { NavLink } from 'react-router-dom';
export const Card = (props) => {
  return (
    <>


      
              <div className="col-md-4 col-10 mx-auto ">
                <div className="card" >
                  <img width="100%" height="300vh" src={props.imgsrc} className="card-img-top" alt={props.imgsrc}/>
                  <div className="card-body">

                    <h5 className="card-title">{props.title}</h5>
                    
                    <NavLink to="/contact" className="btn btn-primary">Contact Us</NavLink>
                  </div>
               </div>
               </div>
     
    </>
  )
}
export default Card;
