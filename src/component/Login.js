import React from "react";
import "../component/Login.css";

function Login() {
  return (
    <>
      <section className="adminlogin">
        <main className="adminlogin1">
        <div className="text-center main2 ps-5 pe-5 pt-3 col-12 col-sm-12 col-md-11 col-lg-11  text-dark ">
          <i className="text-center text-light fa-solid fa-lock"></i>
          <h2 className=" text-light"> Login</h2>

          <input
            className="main1"
            type="email"
            name="email"
            placeholder="Email "
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
          <div className="d-flex main3 text-start ">
            <input className="main1 " type="checkbox" name="butt" id="butt" />
            <label className="fs-6 text-light"> Rememberme</label>
          </div>
          <input
            className="bg-primary main1"
            type="button"
            name="butt"
            value="Login"
            id="butt"
            required
          />
        </div>
        </main>
      </section>
    </>
  );
}

export default Login;
