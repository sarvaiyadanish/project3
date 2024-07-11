
import './App.css';
import About from './component/About';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Headerfile from './component/Headerfile';
import Home from './component/Home';
import Event from './component/Event';
import Gallary from './component/Gallary';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Signin from './component/Signin';
import Event2 from './component/Event2';
import Eventt from './component/Eventt';
import Change from './component/Change';
import Signup from './component/Signup';
import Account from './component/Account';
import Login from './component/Login.js';
import Userlist from './component/Userlist';
import Eventpost from './component/Eventpost';
import Profile from './component/Profile.js';
import Changeprofil from './component/Changeprofil.js';
import Catagory from './component/Catagory.js';



function App() {
  return (
<>  
<BrowserRouter>
<Headerfile/>
<Routes>
  <Route path='/'  element={<Home/>}/> 
  <Route path='/about'  element={<About/>}/> 
  <Route path='/Event'  element={<Event/>}/> 
  <Route path='/Gallery'  element={<Gallary/>}/> 
  <Route path='/Contact'  element={<Contact/>}/> 
  <Route path='/signin'  element={<Signin/>}/> 
  <Route path='/Event/event'  element={<Event2/>}/> 
  <Route path='/Event/event/eventt'  element={<Eventt/>}/> 
  <Route path='/Change'  element={<Change/>}/> 
  <Route path='/Signup' element={<Signup/>} />
  <Route path='/account' element={<Account/>}/>
  <Route path='/admin' element={<Login/>}/>
  <Route path='/admin/alluser' element={<Userlist/>}/>
  <Route path='/admin/addevent' element={<Eventpost/>}/>
  <Route path='/admin/profile' element={<Profile/>}/>
  <Route path='/admin/profile/change' element={<Changeprofil/>}/>
  <Route path='/admin/catagory' element={<Catagory/>}/>
</Routes>
<Footer/>
</BrowserRouter>  

</>
  );
}

export default App;
