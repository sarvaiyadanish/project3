import React from "react";
import logo from "../asate/images/images.jpeg";
import "../component/Contact.css";

function Contact() {
  return (
    <>
      <main className="contact">
        <div className="contact1">
          <h5> CONTACT US NOW </h5>
          <h1>
            <span id="contactt">KEPP</span> IN TOUCH
          </h1>
          <div className="d-flex contact2 text-align-center justify-content-center">
            <p>Home</p>
            <p>|</p>
            <p>CONTACT US</p>
          </div>
        </div>
        <div className="contact3 row me-0 ">
          <img
            src={logo}
            className="col-12 col-sm-12 col-md-12 col-lg-6"
            alt="this not show"
          />
          <div className="text-center main2 ps-5 pe-5 pt-3 col-12 col-sm-12 col-md-12 col-lg-6 bg-white text-dark ">
            <i className="text-center fa-solid fa-lock"></i>
            <h2> Contact us</h2>
            <input
              className="main1"
              type="text"
              name="name"
              placeholder="name"
              id="name"
              required
            />
            <input
              className="main1"
              type="email"
              name="email"
              placeholder="email"
              id="email"
              required
            />
            <input
              className="main1"
              type="text"
              name="country"
              placeholder="country"
              id="country"
              required
            />
            <input
              className="main1"
              type="number"
              name="phone"
              placeholder="phone"
              id="phone"
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
            <input
              className="bg-primary main1"
              type="button"
              name="butt"
              value="send"
              id="butt"
            />
          </div>
        </div>
        <div className="section-title contact4">
          <h2>Your Location </h2>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.6315030070123!2d72.50926837407529!3d23.037298565780848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b4922484c6f%3A0xe077cfffcd90ee87!2sTop%20App%20%26%20Web%20Development%20company%20in%20ahmedabad.Summer%20internship%20in%20Php%2CFlutter%2CPython%2CAngularJS%2CReact%20JS%2CNode%20JS%20%2CUI%2FUx!5e0!3m2!1sen!2sin!4v1716190201119!5m2!1sen!2sin"
            width="100%"
            height="350"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </main>
    </>
  );
}

export default Contact;
