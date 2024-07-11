import React from "react";
import "../component/Signup.css";
import logo from "../asate/images/images.jpeg";
import { useNavigate } from "react-router-dom";

function Signup() {
    const navigate = useNavigate("")
  return (
    <>
      <main className="contact">
        <div className="contact3 row me-0 ">
          <img
            src={logo}
            className="col-12 col-sm-12 col-md-12 col-lg-6"
            alt="this not show"
          />
          <div className="text-center main2 ps-5 pe-5 pt-3 col-12 col-sm-12 col-md-12 col-lg-6 bg-white text-dark ">
            <i className="text-center fa-solid fa-lock"></i>
            <h2> Sign up</h2>
            
            <input
              className="main1"
              type="text"
              name="fname"
              placeholder="First Name"
              id="fname"
              required
            />
             <input
              className="main1"
              type="text"
              name="lname"
              placeholder="Last Name"
              id="lname"
              required
            />
            <input
              className="main1"
              type="email"
              name="email"
              placeholder="Email address"
              id="email"
              required
            />
            <input
              className="main1"
              type="password"
              name="pass"
              placeholder="Password"
              id="pass"
              required
            />
            <div>
                <p className="fs-4 mt-2">Already a members ? <span onClick={() => navigate("/signin")} > Login </span> </p>
            </div>
            <input
              className="bg-primary main1"
              type="button"
              name="butt"
              value="Sign up"
              id="butt"
              required
            />
          </div>
        </div>
        <p className="contact4"> </p>
      </main>
    </>
  );
}

export default Signup;
