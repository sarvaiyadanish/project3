import React from 'react';
import logo from "../asate/images/1.testimonial-bg.jpg";
import "../component/Profile.css"
import { useNavigate} from 'react-router-dom';
import "../component/Header.css";
import logo1 from "../asate/images/1.testimonial-bg.jpg";

function Profile() {
    const navigate = useNavigate('')
  return (
    <>
     <header className='row me-0'>
    <main className='user border-end border-secondary-subtle col-lg-2 col-md-2 col-sm-5 col-3 '>
      <br />
      <hr />
    <ul className='user2'>
        <li onClick={()=> navigate('/admin')}> <span className='d-flex'><i class="fuser fa-solid fa-user-minus"></i><h1 className='user4'>Login</h1> </span></li>
        <li onClick={()=> navigate('/admin/alluser')}><span className='d-flex'><i class="fuser fa-solid fa-user-minus"></i><h1 className='user4'>User list</h1> </span></li>
        <li onClick={()=> navigate('/admin/addevent')}><span className='d-flex'><i class="fuser fa-solid fa-calendar-days"></i><h1 className='user4'>Event post</h1> </span></li>
        <li onClick={()=> navigate('/admin/profile')}><span className='d-flex'><i class="fuser fa-solid fa-bookmark"></i><h1 className='user4'>Book Event </h1> </span></li>
        <li onClick={()=> navigate('/admin/catagory')}><span className='d-flex'><i class="fuser fa-solid fa-shapes"></i><h1 className='user4'>Post Catagory</h1> </span></li>

    </ul>
    <hr/>
    <h3 className='ps-3 user4'>Authentication</h3>
    <p><span  className='d-flex ps-4'><i class="fuser fa-solid fa-right-from-bracket"></i><h1 className='user4'>Log out</h1> </span></p>
    </main>
    <section className='user1 col-lg-10 col-md-10 col-sm-7 col-9 '>
      <div className='row bg-primary user3'>
        <h1 className='fs-2 col-12 col-sm-6 col-md-8 col-lg-9 pt-3'>Admin</h1>
        <div className='row  col-12 col-sm-3 col-md-2 col-lg-3 p-1'>
          <img className=' imguser col-12 col-sm-11 col-md-9 col-lg-5 img-fluid rounded-circle' src={logo1} alt='not founde'/>
          <h3  className='fs-5 col-12 col-sm-11 col-md-3 col-lg-1'>Event Managment Admin</h3>
        </div>
      </div>
      <div>
      <main className='pro bg-secondary-subtle'>
            <div className='profile2'>
                <img src={logo} alt='not founde'/>

            </div>
            <div>
            <button type="button" className="btn ms-4 m-2 btn-dark">Personal Detail</button>
            <button type="button" className="btn ms-4 m-2 btn-dark">Change Password</button>
            </div>
            <div className='profile3'>
                <h4> Personal Detail</h4>
                <div className='row '>
                <div className='columns mt-2 col-lg-6 '>
                    <label className='col-lg-12 '>Full Name</label>
                    <input className='col-lg-6' type="text" name='fname' id='fname'/>
                </div>
                <div className='columns mt-3 col-lg-6  '>
                    <label className='col-lg-12 '>Email Address</label>
                    <input className='col-lg-6 'type="email" name='email' id='email'/>
                </div>
                </div>
                <div className='row pt-3'>
                    <p  className='col-lg-10 col-md-8  col-sm-7 col-12 '></p>
                    <button  type="button" className=" col-lg-2  col-md-3  col-sm-3 col-12 btn btn-primary profilbtn">Update</button>
                </div>
            </div>
        </main> 
          
      </div>
    </section> 
   </header>
      
    </>
  )
}

export default Profile
