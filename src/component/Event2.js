import React from "react";
import "../component/Event2.css";
import logo from "../asate/images/event/2.hall.png";
import { useNavigate } from "react-router-dom";
function Event2() {
    const navigate = useNavigate("")
  return (
    <>
      <div className="event3 border border-secondary m-5">
        <img onClick={() => navigate("/Event/event/eventt")} src={logo} className="event1 " alt="..." />
        <div className="event4 ">
          <h5 className="event2 text-light bg-black ">2024-02-03</h5>
          <h2 className="event2">hnjkjcekfcfch</h2>
        <ul className="event0">
          <li className="event2">surat</li>
          <li className="event2">abc</li>
          <li className="event2">$ 200 Onward</li>
        </ul>
        </div>
      </div>
    </>
  );
}

export default Event2;
