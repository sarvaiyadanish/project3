import React from 'react';
import "../component/Event2.css";
import logo from "../asate/images/event/2.hall.png";


function Eventt() {
  return (
    <>
      <div className="eventt3 ">
        <img src={logo} className="eventt1 " alt="..." />
        <div className="eventt4 ">
          <div>
            <div  className="d-flex">          
            <h1>hnjkjcekfcfch</h1>
            <button type="button" className=" eventt5 text-align-end btn btn-danger">Book</button>
            </div>
            <div className="d-flex ">
                <p>abc</p>
                <p>|</p>
                <p>Hindi</p>
                <p>|</p>
                <p>12Yrs+</p>
                <p>|</p>
                <p>1845-1550</p>
            </div>
           
          </div>
          
        </div>
        <hr/>
        <div className=" eventt4 d-flex ">
             <p>2024-02-03-2024-02-16</p>
             <i></i>
             <p>Surat</p>
             <p>|</p>
             <p>$ 200 Onward</p>
          </div>
      </div>
    </>
  )
}

export default Eventt
