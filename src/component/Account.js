import React from 'react';
import logo from "../asate/images/images.jpeg";
import "../component/Account.css";
import { useNavigate} from 'react-router-dom';


function Account() {
    const navigate = useNavigate("")
  return (
   <>
    <section className='acount1'>
        <main className='acountt'>
        <div className='acount d-flex'> 
        <i className="fa-solid pe-2 fa-fire "></i>
            <h5>Account Details</h5>
        </div>
        <hr/>
        <div className='d-flex acount0'> 
        <i className="fa-solid pe-2 fa-house"></i>
            <h5>Home</h5>
            <div className='acount2'> 
            <h5>Change Password</h5>
            </div>
        </div>
        <div className='acount3'> 
            
            <h5 onClick={() => navigate("/Change")}>Change Account Details</h5>
            <img src={logo} alt='not founded'/>
            <div className='acount4 row me-0'>
                <div className='d-flex col-lg-8 col-md-6 col-sm-6 col-5 me-5'> 
                <i className="fa-solid pe-2 fa-user-group"></i>
                <h5>Danish</h5>
                </div>
                <i className="fa-solid facount col-lg-2 col-md-2 col-sm-2 col-2 fa-pen"></i>
            </div>
            <div className='acount4 row me-0'>
                <div className='d-flex col-lg-8 col-md-6 col-sm-6 col-5 me-5'> 
                <i className="fa-solid pe-2 fa-envelope"></i>
                <h5>danishsarvaiya9023@gmail.com</h5>
                </div>
                <i className="fa-solid facount col-lg-2 col-md-2 col-sm-2 col-2 fa-pen"></i>
            </div>
            <div className='acount4 row me-0'>
                <div className='d-flex col-lg-8 col-md-6 col-sm-6 col-5 me-5'> 
                <i className="fa-solid pe-2 fa-arrow-trend-up"></i>
                <h5>a</h5>
                </div>
                <i className="fa-solid facount col-lg-2 col-md-2 col-sm-2 col-2 fa-pen"></i>
            </div>
            <div className='acount4 row me-0'>
                <div className='d-flex col-lg-8 col-md-6 col-sm-6 col-5 me-5'> 
                <i className="fa-solid pe-2 fa-address-card"></i>
                <h5>1234567890</h5>
                </div>
                <i className="fa-solid col-lg-2 col-md-2 col-sm-2 col-2 fa-pen"></i>
            </div>
        </div>
        </main>

    </section>
   </>
  )
}

export default Account
