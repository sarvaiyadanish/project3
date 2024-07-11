import React from 'react';
import "../component/Eventpost.css";
import { useNavigate} from 'react-router-dom';
import "../component/Header.css";
import logo from "../asate/images/1.testimonial-bg.jpg";

function Eventpost() {
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
        <li onClick={()=> navigate('/admin/catagary')}><span className='d-flex'><i class="fuser fa-solid fa-shapes"></i><h1 className='user4'>Post Catagory</h1> </span></li>

    </ul>
    <hr/>
    <h3 className='ps-3 user4'>Authentication</h3>
    <p><span  className='d-flex ps-4'><i class="fuser fa-solid fa-right-from-bracket"></i><h1 className='user4'>Log out</h1> </span></p>
    </main>
    <section className='user1 col-lg-10 col-md-10 col-sm-7 col-9 '>
      <div className='row bg-primary user3'>
        <h1 className='fs-2 col-12 col-sm-6 col-md-8 col-lg-9 pt-3'>Admin</h1>
        <div className='row  col-12 col-sm-3 col-md-2 col-lg-3 p-1'>
          <img className=' imguser col-12 col-sm-11 col-md-9 col-lg-5 img-fluid rounded-circle' src={logo} alt='not founde'/>
          <h3  className='fs-5 col-12 col-sm-11 col-md-3 col-lg-1'>Event Managment Admin</h3>
        </div>
      </div>
      <div>
      <main className='text-center'>
        <form className='addevent' action=''>
        <i className="text-center  mt-2 mb-2 fa-solid fa-lock"></i>
          <h5> Post Event</h5>
          <input className='bg-primary ps-3' type="file" id="myfile" name="myfile"/>
          <input type="text" id="titel" name='titel' placeholder='Title'/>
          <input type="date" id="date" name='date' />
          <input type="date" id="date" name='date' />
          <input type="time" id="time" name='time' />
          <input type="time" id="time" name='time' />
          <input type="text" id="Price" name='Price' placeholder='Price'/>
          <select>
            <option value="Select Category" >Select Category</option>
            <option value="Select1 Category" >Select1 Category</option>
            <option value="Select2 Category" >Select2 Category</option>
            <option value="Select3 Category" >Select3 Category</option>
          </select>
          <input type="text" id="Location" name='Location' placeholder='Location'/>
          <textarea id="w3review" name="w3review" rows="4" cols="50"></textarea>
          <input  className="bg-primary text-white fs-5" type="button" id="button" name='button' value="POST"/>
        </form>
      </main>
          
      </div>
    </section> 
   </header>
    

    </>
  )
}

export default Eventpost
