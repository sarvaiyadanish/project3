import React from 'react';
import "../component/Event.css";
import logo1 from "../asate/images/event/6.event-grid.jpg";
import logo2 from "../asate/images/event/5.event-grid.jpg";
import logo3 from "../asate/images/event/1.event-grid.jpg";
import logo4 from "../asate/images/event/2.event-grid.jpg";
import logo5 from "../asate/images/event/event-details-1.jpg";
import logo6 from "../asate/images/event/event-details-2.jpg";
import logo7 from "../asate/images/event/event-details-3.jpg";
import logo8 from "../asate/images/event/sparksImage.jpg";
import { useNavigate } from "react-router-dom";

function Event() {
  const navigate = useNavigate("");
    return (
    <>
    <main className='bg-dark'>
        <div className="event"></div>
        <div className="event1 row me-0 mt-2">
            <div className='event2 p-4 col-10 col-sm-10 col-md-6 col-lg-4'>
            <img onClick={() => navigate("/Event/event")} src={logo1} className="img-thumbnail" alt="not show" />
            <p className='bg-white text-center text-primary-emphasis'>Party</p>
            </div>
            <div className='event2 p-4 col-10 col-sm-10 col-md-6 col-lg-4'>
            <img onClick={() => navigate("/Event/event")} src={logo2} className="img-thumbnail" alt="not show" />
            <p className='bg-white text-center text-primary-emphasis'>Navratri</p>
            </div>
            <div className='event2 p-4 col-10 col-sm-10 col-md-6 col-lg-4'>
            <img onClick={() => navigate("/Event/event")} src={logo3} className="img-thumbnail" alt="not show" />
            <p className='bg-white text-center text-primary-emphasis'>Standup comedy</p>
            </div>
            <div className='event2 p-4 col-10 col-sm-10 col-md-6 col-lg-4'>
            <img onClick={() => navigate("/Event/event")} src={logo4} className="img-thumbnail" alt="not show" />
            <p className='bg-white text-center text-primary-emphasis'>Lectures</p>
            </div>
            <div className='event2 p-4 col-10 col-sm-10 col-md-6 col-lg-4'>
            <img onClick={() => navigate("/Event/event")} src={logo1} className="img-thumbnail" alt="not show" />
            <p className='bg-white text-center text-primary-emphasis'>Party</p>
            </div>
            <div className='event2 p-4 col-10 col-sm-10 col-md-6 col-lg-4'>
            <img onClick={() => navigate("/Event/event")} src={logo5} className="img-thumbnail" alt="not show" />
            <p className='bg-white text-center text-primary-emphasis'>Group Party</p>
            </div>
            <div className='event2 p-4 col-10 col-sm-10 col-md-6 col-lg-4'>
            <img onClick={() => navigate("/Event/event")} src={logo6} className="img-thumbnail" alt="not show" />
            <p className='bg-white text-center text-primary-emphasis'>Night party</p>
            </div>
            <div className='event2 p-4 col-10 col-sm-10 col-md-6 col-lg-4'>
            <img onClick={() => navigate("/Event/event")} src={logo7} className="img-thumbnail" alt="not show" />
            <p className='bg-white text-center text-primary-emphasis'>Sampion</p>
            </div>
            <div className='event2 p-4 col-10 col-sm-10 col-md-6 col-lg-4'>
            <img onClick={() => navigate("/Event/event")} src={logo8} className="img-thumbnail" alt="not show" />
            <p className='bg-white text-center text-primary-emphasis'>Spark Party</p>
            </div>

        </div>
    </main>
    </>
  )
}

export default Event
