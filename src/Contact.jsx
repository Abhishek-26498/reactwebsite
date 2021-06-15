import React from 'react'
import contact from './images/contact.svg'
const Contact = () =>{
    

    return(
        <>
        <section id="header" className="d-flex align-items-center">
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-10  mx-auto">
                            <div className="row col-md-12 pt-5">

                            
                            <form className=" col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            
                        
                        <div className="mb-3  mx-5">
      <label for="exampleFormControlInput1" className="form-label">Full Name</label>
      <input 
      type="name" 
      className="form-control" 
      id="exampleFormControlInput1"
      
      placeholder="Enter Your Name"
      />
    </div>
                        <div className="mb-3 mx-5">
      <label for="exampleFormControlInput1" className="form-label">Phone</label>
      <input 
      type="number " 
      className="form-control"
       id="exampleFormControlInput1" 
      
       placeholder="mobile number"/>
    </div>
                        <div className="mb-3 mx-5">
      <label for="exampleFormControlInput1" className="form-label">Email address</label>
      <input 
      type="email"
       className="form-control" 
       id="exampleFormControlInput1" 
       
       placeholder="name@example.com"/>
    </div>
    <div className="mb-3 mx-5">
      <label for="exampleFormControlTextarea1" className="form-label">Message</label>
      <textarea className="form-control" 
      
      id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    <div className="mb-3 mx-auto">
    <button type="submit" class="btn btn-outline-primary ">Submit
    </button>
    </div>
    

                            </form>
                        <div className="col-lg-6 order-1 orderlg-2 header-img mx-auto  y-bottom--5">
                            <img height="300vh" width="300vw" src={contact} className="my-5 contact-img animated" alt="home img" />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

        </>
    )
};
export default Contact;