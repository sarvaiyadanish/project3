import React from "react";
import "../component/home.css";
import logo from "../asate/images/2.site-logo.png";
import { useNavigate } from "react-router-dom";


function Headerfile() {
  const navigate = useNavigate("");
  return (
    <>
      <nav className="navbar navbar-expand-md ">
        <div className="container-fluid header2">
          <img src={logo} className="col-12 col-sm-7 col-md-3" alt="this not show" />
          <button
            className=" navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className=" navbar-toggler-icon"></span>
          </button>
          <div className="collapse header3 navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <p className="nav-link" onClick={() => navigate("/")}>
                  Home
                </p>
              </li>
              <li className="nav-item">
                <p className="nav-link" onClick={() => navigate("/about")}>
                  About
                </p>
              </li>
              <li className="nav-item">
                <p className="nav-link" onClick={() => navigate("/Event")}>
                  Event
                </p>
              </li>
              <li className="nav-item">
                <p className="nav-link" onClick={() => navigate("/Gallery")}>
                  Gallery
                </p>
              </li>
              <li className="nav-item">
                <p className="nav-link" onClick={() => navigate("/Contact")}>
                  Contact
                </p>
              </li>
            </ul>
          </div>
          <button className="nav-link" onClick={() => navigate("/signin")}> Sign in</button>
        </div>
      </nav>
    </>
  );
}

export default Headerfile;
