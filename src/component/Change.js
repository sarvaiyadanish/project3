import React from 'react'
import "../component/Change.css";
import logo from "../asate/images/images.jpeg";

function Change() {
  return (
    <>
     <main className="contact">
        <div className="contact3 row me-0 ">
          <img
            src={logo}
            className="col-12 col-sm-12 col-md-12 col-lg-6"
            alt="this not show"
          />
          <div className="text-start main2 ps-5 pe-5 pt-3 col-12 col-sm-12 col-md-12 col-lg-6 bg-white text-dark ">
            <i className="mm fa-solid fa-lock"></i>
            <h2 className='text-center'> Change User Detail</h2>
            <label>Name </label>
            <input
              className="main1"
              type="email"
              name="email"
              placeholder="email address"
              id="email"
              required
            />
            <label>Email </label>
            <input
              className="main1"
              type="password"
              name="pass"
              placeholder="password"
              id="pass"
              required
            />
            <label>Gender </label>
            <div className='change'>
            <input className="mai " type='radio' name='mm' id='mm' required/> male
            <input className="mai " type='radio' name='fm' id='fm' required/> Female
            <input className="mai " type='radio' name='or' id='or' required/> other
            </div>
            <label>Phone no</label>
            <div className='change'>
                <input className="mai " type='number' name='or' id='or' required/> 
            </div>
            <div className="d-flex main3 text-start ">
              <input className="main1 " type="checkbox" name="butt" id="butt" />
              <label className="fs-6"> Rememberme</label>
            </div>
            <input
              className="bg-primary main1"
              type="button"
              name="butt"
              value="CHANGE"
              id="butt"
              required
            />
            <div className="signi2 mt-5 text-center text-secondary">
              <p>Copyright @ Your Website 2023</p>
            </div>
          </div>
          
        </div>
        <p className="contact4"> </p>
      </main>
    </>
  )
}

export default Change
