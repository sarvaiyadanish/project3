import React from 'react';
import "../component/Catagory.css";
import logo from "../asate/images/2120b058cb9946e36306778243eadae5.jpg";
import { useNavigate} from 'react-router-dom';
import "../component/Header.css";
import logo1 from "../asate/images/1.testimonial-bg.jpg";

function Catagory() {
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
      <main className='text-center'>
      <form className='addevent' action=''>
      <i className="text-center  mt-2 mb-2 fa-solid fa-lock"></i>
        <h5> Post Event</h5>
        <input className='bg-primary mb-3 ps-3' type="file" id="myfile" name="myfile"/>
        <input className='mb-3 ' type="text" id="Location" name='Location' placeholder='Catagory Name'/>
        <input  className="bg-primary mb-3  text-white fs-5" type="button" id="button" name='button' value="POST"/>
      </form>
    </main>
    <section className='user1'>
        <div className='bg-black row mt-2 me-0'>
          <p className='text-white  text-center col-lg-2 col-md-2 col-sm-2 col-2'>No</p>
          <p className='text-white  text-center col-lg-2 col-md-2 col-sm-2 col-2'>Image</p>
          <p className='text-white  text-center col-lg-3 col-md-3 col-sm-2 col-2'>Name</p>
          <p className='text-white  text-center col-lg-5 col-md-5 col-sm-12 col-12'>Action</p>
        </div>
        {/* 1block */}
        <div className='row mt-2 catagory me-0'>
          <p className='text-black text-center col-lg-2 col-md-2 col-sm-2 col-2'>1</p>
          <img className='text-black text-center rounded-circle col-lg-2 col-md-2 col-sm-2 col-2' src={logo} alt="not founded" />
          <p className='text-black text-center col-lg-4 col-md-3 col-sm-3 col-2'>danish</p>
          <p type="button" className="text-black text-center col-lg-4 col-md-5 col-sm-12 col-12 "> <span className='row'>
          <i className="col-lg-4 col-md-4 col-sm-6 col-6 fa-solid fs-1 fa-pen-to-square"></i>
          <i className="col-lg-4 col-md-4 col-sm-6 col-6 fa-solid fs-1 fa-trash"></i>
            </span></p>
        </div>
        <div className='row mt-2 catagory me-0'>
          <p className='text-black text-center col-lg-2 col-md-2 col-sm-2 col-2'>2</p>
          <img className='text-black text-center rounded-circle col-lg-2 col-md-2 col-sm-2 col-2' src={logo} alt="not founded" />
          <p className='text-black text-center col-lg-4 col-md-3 col-sm-3 col-2'>manish</p>
          <p type="button" className="text-black text-center col-lg-4 col-md-5 col-sm-12 col-12 "> <span className='row'>
          <i className="col-lg-4 col-md-4 col-sm-6 col-6 fa-solid fs-1 fa-pen-to-square"></i>
          <i className="col-lg-4 col-md-4 col-sm-6 col-6 fa-solid fs-1 fa-trash"></i>
            </span></p>
        </div>
        <div className='row mt-2 catagory me-0'>
          <p className='text-black text-center col-lg-2 col-md-2 col-sm-2 col-2'>3</p>
          <img className='text-black text-center rounded-circle col-lg-2 col-md-2 col-sm-2 col-2' src={logo} alt="not founded" />
          <p className='text-black text-center col-lg-4 col-md-3 col-sm-3 col-2'>Ketul</p>
          <p type="button" className="text-black text-center col-lg-4 col-md-5 col-sm-12 col-12 "> <span className='row'>
          <i className="col-lg-4 col-md-4 col-sm-6 col-6 fa-solid fs-1 fa-pen-to-square"></i>
          <i className="col-lg-4 col-md-4 col-sm-6 col-6 fa-solid fs-1 fa-trash"></i>
            </span></p>
        </div>
        <div className='row mt-2 catagory me-0'>
          <p className='text-black text-center col-lg-2 col-md-2 col-sm-2 col-2'>4</p>
          <img className='text-black text-center rounded-circle col-lg-2 col-md-2 col-sm-2 col-2' src={logo} alt="not founded" />
          <p className='text-black text-center col-lg-4 col-md-3 col-sm-3 col-2'>Rudra</p>
          <p type="button" className="text-black text-center col-lg-4 col-md-5 col-sm-12 col-12 "> <span className='row'>
          <i className="col-lg-4 col-md-4 col-sm-6 col-6 fa-solid fs-1 fa-pen-to-square"></i>
          <i className="col-lg-4 col-md-4 col-sm-6 col-6 fa-solid fs-1 fa-trash"></i>
            </span></p>
        </div>
        </section>
          
      </div>
    </section> 
   </header>
  

  </>
  )
}

export default Catagory
