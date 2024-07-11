import React from "react";
import "../component/About.css";
import logo from "../asate/images/about/company-banner.png";

function About() {
  return (
    <>
      <main className="about">
        <div className="about1">
          <h5> ALL YOU NEED TO KNOW </h5>
          <h1>
            <span id="aboutt">ABOUT</span> HARMONI
          </h1>
          <div className="about2">
            <p>Home</p>
            <p>|</p>
            <p>About us</p>
          </div>
        </div>
        <div className="about3 me-0 row">
          <div className="abou4 p-5 ps-5 pe-3 pb-5 col-12 col-md-4 ">
            <p>we are harmoni </p>
            <h1>No.1 Events Management</h1>
            <p>get started!</p>
          </div>
          <div className="abou4 p-5 ps-5 pe-3 pb-5 col-12 col-md-4 ">
            <h2>our mission</h2>
            <p>
              Lorem ipsum dollor site amet the best consectuer adipiscing elites
              sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
              aliquam erat volutpat insignia the consectuer adipiscing elit.
            </p>
            <p>
              Lorem ipsum dollor site amet the best consectuer adipiscing elites
              sed diam nonummy nibh euismod
            </p>
          </div>
          <div className="abou4 p-5 ps-5 pe-3 pb-5 col-12 col-md-4 ">
            <h2>our vission</h2>
            <p>
              Lorem ipsum dollor site amet the best consectuer adipiscing elites
              sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
              aliquam erat volutpat insignia the consectuer adipiscing elit.
            </p>
            <p>
              Lorem ipsum dollor site amet the best consectuer adipiscing elites
              sed diam nonummy nibh euismod
            </p>
          </div>
        </div>
        {/* about 2 part  */}
        <div className="about4 me-0 row">
          <div className="about5 p-5 col-11 col-sm-10 col-md-9 col-lg-5 ">
            <img src={logo} className="image-fulid mt-4 " alt="image" />
          </div>
          <div className="ms-5 col-11 col-sm-10 col-md-9 col-lg-6 ">
            <p>harmoni awaed </p>
            <h1> Our Winning Awards</h1>
            <div className="about7 mt-4">
              <div className="about8 row pt-4">
                <h4 className="ms-2  ps-2 col-5 col-sm-5 col-md-5 col-lg-4">AUG2015 </h4>
                <div className="col-5 col-sm-5 col-md-5 col-lg-7">
                  <h3> 1st Place for unique event 2018</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
                    optio? Debitis ipsum doloribus accusamus ad natus officia
                    expedita delectus voluptatum consequatur sunt ut sequi dolor
                    sapiente fugit doloremque, quidem reprehenderit!
                  </p>
                </div>
              </div>
              <div className="about8 row pt-4">
                <h4 className="ms-2  ps-2 col-5 col-sm-5 col-md-5 col-lg-4">MAY2014 </h4>
                <div className="col-5 col-sm-5 col-md-5 col-lg-7">
                  <h3> 1st Winner best new year event </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
                    optio? Debitis ipsum doloribus accusamus ad natus officia
                    expedita delectus voluptatum consequatur sunt ut sequi dolor
                    sapiente fugit doloremque, quidem reprehenderit!
                  </p>
                </div>
              </div>
              <div className="about8 row pt-4">
                <h4 className="ms-2  ps-2 col-5 col-sm-5 col-md-5 col-lg-4">DEC 2013 </h4>
                <div className="col-5 col-sm-5 col-md-5 col-lg-7">
                  <h3> 1st Place international event awards </h3>
                </div>
              </div>
              <div id="about8">
                <h4> </h4>
              </div>
            </div>
          </div>
        </div>
        {/* about 3part  */}
        <div className="about9 me-0 row">
          <div  className="about10 col-10 col-sm-5 col-md-3 col-lg-3">
            <h3>Study With us</h3>
            <p>
              Visit Our World class Facility for bSouth African Scientist and
              Spectrum
            </p>
          </div>
          <div  className="about10 col-10 col-sm-5 col-md-3 col-lg-3">
            <h3>Study With us</h3>
            <p>
              Visit Our World class Facility for bSouth African Scientist and
              Spectrum
            </p>
          </div>
          <div  className="about10 col-10 col-sm-5 col-md-3 col-lg-3">
            <h3>Study With us</h3>
            <p>
              Visit Our World class Facility for bSouth African Scientist and
              Spectrum
            </p>
          </div>
          <div  className="about10 col-10 col-sm-5 col-md-3 col-lg-3">
            <h3>Study With us</h3>
            <p>
              Visit Our World class Facility for bSouth African Scientist and
              Spectrum
            </p>
          </div>
          <div  className="about10 col-10 col-sm-5 col-md-3 col-lg-3">
            <h3>Study With us</h3>
            <p>
              Visit Our World class Facility for bSouth African Scientist and
              Spectrum
            </p>
          </div>
          <div  className="about10 col-10 col-sm-5 col-md-3 col-lg-3">
            <h3>Study With us</h3>
            <p>
              Visit Our World class Facility for bSouth African Scientist and
              Spectrum
            </p>
          </div>
           <div  className="about10 col-10 col-sm-5 col-md-3 col-lg-3">
            <h3>Study With us</h3>
            <p>
              Visit Our World class Facility for bSouth African Scientist and
              Spectrum
            </p>
          </div>
          <div  className="about10 col-10 col-sm-5 col-md-3 col-lg-3">
            <h3>Study With us</h3>
            <p>
              Visit Our World class Facility for bSouth African Scientist and
              Spectrum
            </p>
          </div>
        </div>
        {/* about 4part  */}
    
      </main>
    </>
  );
}

export default About;
