import React from 'react';
import "../component/Userlist.css";
import logo from "../asate/images/2120b058cb9946e36306778243eadae5.jpg";
import { useNavigate} from 'react-router-dom';
import logo1 from "../asate/images/1.testimonial-bg.jpg";
import "../component/Header.css";

function Userlist() {
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
      <section className='user1'>
        <div className='bg-black row mt-2 me-0'>
          <p className='text-white  text-center col-lg-1 col-md-1 col-sm-3 col-3'>No</p>
          <p className='text-white  text-center col-lg-1 col-md-1 col-sm-3 col-3'>Profile</p>
          <p className='text-white  text-center col-lg-1 col-md-1 col-sm-3 col-3'>Name</p>
          <p className='text-white  text-center col-lg-3 col-md-3 col-sm-12 col-12'>Email</p>
          <p className='text-white  text-center col-lg-1 col-md-1 col-sm-3 col-3'>Gender</p>
          <p className='text-white  text-center col-lg-3 col-md-3 col-sm-3 col-3'>Phone Number</p>
          <p className='text-white  text-center col-lg-1 col-md-1 col-sm-3 col-3'>Action</p>
        </div>
        {/* 1block */}
        <div className='row mt-2 me-0'>
          <p className='text-black text-center col-lg-1 col-md-1 col-sm-3 col-3'>1</p>
          <img className='text-black text-center rounded-circle col-lg-1 col-md-1 col-sm-3 col-3' src={logo} alt="not founded" />
          <p className='text-black text-center col-lg-1 col-md-1 col-sm-3 col-3'>danish</p>
          <p className='text-black text-center col-lg-3 col-md-3 col-sm-12 col-12'>danish@9023Gmail.com</p>
          <p className='text-black text-center col-lg-1 col-md-1 col-sm-3 col-3'>male</p>
          <p className='text-black text-center col-lg-3 col-md-3 col-sm-3 col-3'>9923123478</p>
          <button type="button" className="text-black text-center col-lg-1 col-md-1 col-sm-3 col-3 btn btn-success"> Unlock</button>
        </div>
        {/* 2block */}
        <div className='row mt-2 me-0'>
          <p className='text-black text-center col-lg-1 col-md-1 col-sm-3 col-3'>2</p>
          <img className='text-black text-center rounded-circle col-lg-1 col-md-1 col-sm-3 col-3' src={logo} alt="not founded" />
          <p className='text-black text-center col-lg-1 col-md-1 col-sm-3 col-3'>mani</p>
          <p className='text-black text-center col-lg-3 col-md-3 col-sm-12 col-12'>mani@9023Gmail.com</p>
          <p className='text-black text-center col-lg-1 col-md-1 col-sm-3 col-3'>male</p>
          <p className='text-black text-center col-lg-3 col-md-3 col-sm-3 col-3'>9923123478</p>
          <button type="button" className="text-black text-center col-lg-1 col-md-1 col-sm-3 col-3 btn btn-success"> Unlock</button>
        </div>
         {/* 3block */}
         <div className='row mt-2 me-0'>
          <p className='text-black text-center col-lg-1 col-md-1 col-sm-3 col-3'>3</p>
          <img className='text-black text-center rounded-circle col-lg-1 col-md-1 col-sm-3 col-3' src={logo} alt="not founded" />
          <p className='text-black text-center col-lg-1 col-md-1 col-sm-3 col-3'>ketul</p>
          <p className='text-black text-center col-lg-3 col-md-3 col-sm-12 col-12'>ketul@9023Gmail.com</p>
          <p className='text-black text-center col-lg-1 col-md-1 col-sm-3 col-3'>male</p>
          <p className='text-black text-center col-lg-3 col-md-3 col-sm-3 col-3'>9923123478</p>
          <button type="button" className="text-black text-center col-lg-1 col-md-1 col-sm-3 col-3 btn btn-success"> Unlock</button>
        </div>
         {/* 4block */}
         <div className='row mt-2 me-0'>
          <p className='text-black text-center col-lg-1 col-md-1 col-sm-3 col-3'>4</p>
          <img className='text-black text-center rounded-circle col-lg-1 col-md-1 col-sm-3 col-3' src={logo} alt="not founded" />
          <p className='text-black text-center col-lg-1 col-md-1 col-sm-3 col-3'>neha</p>
          <p className='text-black text-center col-lg-3 col-md-3 col-sm-12 col-12'>neha@9023Gmail.com</p>
          <p className='text-black text-center col-lg-1 col-md-1 col-sm-3 col-3'>Female</p>
          <p className='text-black text-center col-lg-3 col-md-3 col-sm-3 col-3'>9923123478</p>
          <button type="button" className="text-black text-center col-lg-1 col-md-1 col-sm-3 col-3 btn btn-success"> Unlock</button>
        </div>
         {/* 5block */}
         <div className='row mt-2 me-0'>
          <p className='text-black text-center col-lg-1 col-md-1 col-sm-3 col-3'>5</p>
          <img className='text-black text-center rounded-circle col-lg-1 col-md-1 col-sm-3 col-3' src={logo} alt="not founded" />
          <p className='text-black text-center col-lg-1 col-md-1 col-sm-3 col-3'>Sahil</p>
          <p className='text-black text-center col-lg-3 col-md-3 col-sm-12 col-12'>Sahil@9023Gmail.com</p>
          <p className='text-black text-center col-lg-1 col-md-1 col-sm-3 col-3'>male</p>
          <p className='text-black text-center col-lg-3 col-md-3 col-sm-3 col-3'>9923123478</p>
          <button type="button" className="text-black text-center col-lg-1 col-md-1 col-sm-3 col-3 btn btn-success"> Unlock</button>
        </div>
         {/* 6block */}
         <div className='row mt-2 me-0'>
          <p className='text-black text-center col-lg-1 col-md-1 col-sm-3 col-3'>6</p>
          <img className='text-black text-center rounded-circle col-lg-1 col-md-1 col-sm-3 col-3' src={logo} alt="not founded" />
          <p className='text-black text-center col-lg-1 col-md-1 col-sm-3 col-3'>Ranu</p>
          <p className='text-black text-center col-lg-3 col-md-3 col-sm-12 col-12'>Ranu@9023Gmail.com</p>
          <p className='text-black text-center col-lg-1 col-md-1 col-sm-3 col-3'>male</p>
          <p className='text-black text-center col-lg-3 col-md-3 col-sm-3 col-3'>9923123478</p>
          <button type="button" className="text-black text-center col-lg-1 col-md-1 col-sm-3 col-3 btn btn-success"> Unlock</button>
        </div>
         {/* 7block */}
         <div className='row mt-2 me-0'>
          <p className='text-black text-center col-lg-1 col-md-1 col-sm-3 col-3'>7</p>
          <img className='text-black text-center rounded-circle col-lg-1 col-md-1 col-sm-3 col-3' src={logo} alt="not founded" />
          <p className='text-black text-center col-lg-1 col-md-1 col-sm-3 col-3'>Rudra</p>
          <p className='text-black text-center col-lg-3 col-md-3 col-sm-12 col-12'>Rudra@9023Gmail.com</p>
          <p className='text-black text-center col-lg-1 col-md-1 col-sm-3 col-3'>male</p>
          <p className='text-black text-center col-lg-3 col-md-3 col-sm-3 col-3'>9923123478</p>
          <button type="button" className="text-black text-center col-lg-1 col-md-1 col-sm-3 col-3 btn btn-success"> Unlock</button>
        </div>
         {/* 8block */}
         <div className='row mt-2 me-0'>
          <p className='text-black text-center col-lg-1 col-md-1 col-sm-3 col-3'>8</p>
          <img className='text-black text-center rounded-circle col-lg-1 col-md-1 col-sm-3 col-3' src={logo} alt="not founded" />
          <p className='text-black text-center col-lg-1 col-md-1 col-sm-3 col-3'>janish</p>
          <p className='text-black text-center col-lg-3 col-md-3 col-sm-12 col-12'>janish@9023Gmail.com</p>
          <p className='text-black text-center col-lg-1 col-md-1 col-sm-3 col-3'>male</p>
          <p className='text-black text-center col-lg-3 col-md-3 col-sm-3 col-3'>9923123478</p>
          <button type="button" className="text-black text-center col-lg-1 col-md-1 col-sm-3 col-3 btn btn-success"> Unlock</button>
        </div>
         {/* 9block */}
         <div className='row mt-2 me-0'>
          <p className='text-black text-center col-lg-1 col-md-1 col-sm-3 col-3'>9</p>
          <img className='text-black text-center rounded-circle col-lg-1 col-md-1 col-sm-3 col-3' src={logo} alt="not founded" />
          <p className='text-black text-center col-lg-1 col-md-1 col-sm-3 col-3'>danish</p>
          <p className='text-black text-center col-lg-3 col-md-3 col-sm-12 col-12'>danish@9023Gmail.com</p>
          <p className='text-black text-center col-lg-1 col-md-1 col-sm-3 col-3'>male</p>
          <p className='text-black text-center col-lg-3 col-md-3 col-sm-3 col-3'>9923123478</p>
          <button type="button" className="text-black text-center col-lg-1 col-md-1 col-sm-3 col-3 btn btn-success"> Unlock</button>
        </div>
         {/* 10block */}
         <div className='row mt-2 me-0'>
          <p className='text-black text-center col-lg-1 col-md-1 col-sm-3 col-3'>10</p>
          <img className='text-black text-center rounded-circle col-lg-1 col-md-1 col-sm-3 col-3' src={logo} alt="not founded" />
          <p className='text-black text-center col-lg-1 col-md-1 col-sm-3 col-3'>janak</p>
          <p className='text-black text-center col-lg-3 col-md-3 col-sm-12 col-12'>janak@9023Gmail.com</p>
          <p className='text-black text-center col-lg-1 col-md-1 col-sm-3 col-3'>male</p>
          <p className='text-black text-center col-lg-3 col-md-3 col-sm-3 col-3'>9923123478</p>
          <button type="button" className="text-black text-center col-lg-1 col-md-1 col-sm-3 col-3 btn btn-success"> Unlock</button>
        </div>
         {/* 11block */}
         <div className='row mt-2 me-0'>
          <p className='text-black text-center col-lg-1 col-md-1 col-sm-3 col-3'>11</p>
          <img className='text-black text-center rounded-circle col-lg-1 col-md-1 col-sm-3 col-3' src={logo} alt="not founded" />
          <p className='text-black text-center col-lg-1 col-md-1 col-sm-3 col-3'>sohil</p>
          <p className='text-black text-center col-lg-3 col-md-3 col-sm-12 col-12'>sohil@9023Gmail.com</p>
          <p className='text-black text-center col-lg-1 col-md-1 col-sm-3 col-3'>male</p>
          <p className='text-black text-center col-lg-3 col-md-3 col-sm-3 col-3'>9923123478</p>
          <button type="button" className="text-black text-center col-lg-1 col-md-1 col-sm-3 col-3 btn btn-success"> Unlock</button>
        </div>
        {/* 12block */}
        <div className='row mt-2 me-0'>
          <p className='text-black text-center col-lg-1 col-md-1 col-sm-3 col-3'>12</p>
          <img className='text-black text-center rounded-circle col-lg-1 col-md-1 col-sm-3 col-3' src={logo} alt="not founded" />
          <p className='text-black text-center col-lg-1 col-md-1 col-sm-3 col-3'>vatsal</p>
          <p className='text-black text-center col-lg-3 col-md-3 col-sm-12 col-12'>vatsal@9023Gmail.com</p>
          <p className='text-black text-center col-lg-1 col-md-1 col-sm-3 col-3'>male</p>
          <p className='text-black text-center col-lg-3 col-md-3 col-sm-3 col-3'>9923123478</p>
          <button type="button" className="text-black text-center col-lg-1 col-md-1 col-sm-3 col-3 btn btn-success"> Unlock</button>
        </div>


      </section>
          
      </div>
    </section> 
   </header>
      
      </>
    
  )
}

export default Userlist
