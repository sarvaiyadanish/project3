import React from "react";
import "../component/Signin.css";
import logo from "../asate/images/images.jpeg";
import { useNavigate } from "react-router-dom";

function Signin() {
  const navigate =useNavigate("")
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
            <h2> Login</h2>

            <input
              className="main1"
              type="email"
              name="email"
              placeholder="email address"
              id="email"
              required
            />
            <input
              className="main1"
              type="password"
              name="pass"
              placeholder="password"
              id="pass"
              required
            />
            <div className="d-flex main3 text-start ">
              <input className="main1 " type="checkbox" name="butt" id="butt" />
              <label className="fs-6"> Rememberme</label>
            </div>
            <input
              className="bg-primary main1"
              type="button"
              name="butt"
              value="Login"
              id="butt"
              required
            />
            <div className=" mt-3 d-flex">
              <p>Forgot Password?</p>
              <p className="signi1">Don't have an account? <a onClick={() => navigate("/Signup")}>Sign up</a></p>
            </div>
            <div className="signi2 mt-5 text-secondary">
              <p>Copyright @ Your Website 2023</p>
            </div>
          </div>
          
        </div>
        <p className="contact4"> </p>
      </main>
    </>
  );
}

export default Signin;
