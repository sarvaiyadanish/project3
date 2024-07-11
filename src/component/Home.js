import React from "react";
import "./home.css";
import logo1 from "../asate/images/people.png";
import logo2 from "../asate/images/google.png";
import logo3 from "../asate/images/slack.png";
import logo4 from "../asate/images/atlassian.png";
import logo5 from "../asate/images/dropbox.png";
import logo6 from "../asate/images/shopify.png";

function Home() {
  return (
    <>
      <header className="header1">
        <div className="header4 p-5">
          <div className="header5">
            <h1 className="text-danger fs-1">
              {" "}
              One Stop Event <br /> Planner
            </h1>
            <p className="text-secondary mt-3 fs-5 mb-3">
              {" "}
              Yet bed any for travelling assistance indulgence
              <br /> unpleasing. Not thoughts all exercise blessing. <br />
              Indulgence way everything joy alteration boisterous <br /> the
              attachment. Party we years to order allow asked
              <br /> of
            </p>
            <p className="text-secondary mt-3 fs-5 mb-3">
              {" "}
              Every event should be Perfect
            </p>
          </div>
          <div className="input-group ">
            <input
              type="text"
              className=" text-white bg-dark col-12 col-sm-6 col-md-4 col-lg-4  form-control"
              placeholder="Your Email Address"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              type="button"
              className="col-12 col-sm-2 col-md-2 col-lg-1 btn btn-danger"
            >
              Get Started
            </button>
            <p className="col-10 col-sm-2 col-md-5 col-lg-7"></p>
          </div>
          <div className="header8 row mt-5">
            <img
              src={logo1}
              className="col-10 col-sm-6 col-md-4 col-lg-3  img-thumbnail"
              alt="not show"
            />
            <p className="col-10 col-sm-3 col-md-5 col-lg-3 text-light mt-3 ms-5">
              1,600 people requested access a visit in last 24 hours
            </p>
            <p className="col-12 col-sm-5 col-md-2 col-lg-3"></p>
          </div>
        </div>
      </header>

      <div className="header-1 bg-black p-4">
        <img
          src={logo2}
          className="col-10 col-sm-6 col-md-4 col-lg-1  img-thumbnail"
          alt="not show"
        />
        <img
          src={logo3}
          className="col-10 col-sm-6 col-md-4 col-lg-1  img-thumbnail"
          alt="not show"
        />
        <img
          src={logo4}
          className="col-10 col-sm-6 col-md-4 col-lg-1  img-thumbnail"
          alt="not show"
        />
        <img
          src={logo5}
          className="col-10 col-sm-6 col-md-4 col-lg-1  img-thumbnail"
          alt="not show"
        />
        <img
          src={logo6}
          className="col-10 col-sm-6 col-md-4 col-lg-1  img-thumbnail"
          alt="not show"
        />


        {/* part2 */}
        <div className="header-2">
        <div className="row text-light m-1 pt-3 me-0">
          <h3 className="col-11 col-sm-11 col-md-3 col-lg-6 fw-bold"> What is Harmoni Event</h3>
          <p className="col-11 col-sm-11 col-md-9 col-lg-6"> We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
        </div>
        <div className="row m-1 text-danger mt-3 me-0">
          <h3 className="col-11 col-sm-11 col-md-9 col-lg-10 fw-bold"> Your Event Will be beyond your imagination</h3>
          <p className="col-11 col-sm-11 col-md-2 col-lg-2">Explore the Library </p>
        </div>
        <div className="row m-1 mt-3 me-0">
          <div className="col-10 col-sm-10 col-md-3 col-lg-3 m-5 ">
            <h3 className="text-light fw-bold"> <span className="border-top border-danger-subtle"> Chatbots</span></h3>
            <p className="text-secondary">We so opinion friends me message as delight. Whole front do of plate heard oh ought.</p>
          </div>
          <div className="col-10 col-sm-10 col-md-3 col-lg-3 m-5 ">
            <h3 className="text-light fw-bold"><span className="border-top border-danger-subtle"> Knowledgebase</span></h3>
            <p className="text-secondary">At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b</p>
          </div>
          <div className="col-10 col-sm-10 col-md-3 col-lg-3 m-5 ">
            <h3 className="text-light fw-bold"><span className="border-top border-danger-subtle"> Education</span></h3>
            <p className="text-secondary"> At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments </p>
          </div>
        </div>
      </div>
      {/* part3 */}
      <div className="header-3 row me-0 m-5">
        <div className="col-10 col-sm-10 col-md-3 col-lg-3 m-5">
          <h5 className="fs-2 header-4"> Harmony Event Management Firm & Wedding Planners is a group of creative minds who would like to make weddings, birthdays & any kind of events courteous & a better place for our clients to celebrate important moments of their lives...</h5>
          <p className="text-danger">Request Early Access to Get Started</p>
        </div>
        <div className="col-10 col-sm-10 col-md-3 col-lg-3 m-5">
          <h5 className="fs-5 text-light"> <span className="border-top border-danger-subtle"> Photo</span> Photography</h5>
          <h5 className="fs-5 text-light pt-5"> <span className="border-top border-danger-subtle"> Cinem</span> Cinematography or Videography Service</h5>
          <h5 className="fs-5 text-light pt-5"> <span className="border-top border-danger-subtle"> Full </span> Full Venune Decoration Service </h5>
          <h5 className="fs-5 text-light pt-5"> <span className="border-top border-danger-subtle">Home </span>Home Decoration</h5>
        </div>
        <div className="col-10 col-sm-10 col-md-3 col-lg-3 m-5">
          <p className="text-primary ">A Team Of 3 talented Photographers are ready to snap the best moments of your ceremony</p>
          <p className="text-primary mt-5">Creative full HD 1080p Video, a different scape of your ceremony.</p>
          <p className="text-primary mt-5">A Blend of out-of-the-box ideas to decore your precious date</p>
          <p className="text-primary mt-5">just call us and get total event solution under one roof</p>
        </div>
      </div>
      </div>
    </>
  );
}

export default Home;
