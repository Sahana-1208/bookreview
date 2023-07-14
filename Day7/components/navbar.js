import React,{useState} from 'react';
import './css/navbar.css';
import { Link } from 'react-router-dom';
import {GiBookshelf} from 'react-icons/gi';
import {BsListUl} from 'react-icons/bs';
import Sidebar from './sidebar';
function Navbar() {
    const [sidebarshow,setSidebarshow]=useState(false);
    const myfunc=()=>{
        setSidebarshow(!sidebarshow);
    }
    return (
        <>
        {/* <div className="upper">
                <div className='title'> Bookaholic<span style={{fontWeight:"normal"}}>.com</span></div>
        </div>
        </> */}
        <div className='navbar'>
          <div className='ssidebar' onClick={myfunc}><BsListUl size={60} style={{paddingTop:'10px'}}/></div>
          <div  style={{display:(sidebarshow)?"block":"none",color:'white',listStyleType:'none'}}><Sidebar/></div>
              <div class='logo'><GiBookshelf /> Bookaholic.com</div>
              <div className='ssearchbar'>
            <input className='ssearchbook' type='text' placeholder='Search for books.....'/>
            </div>
              <div className='loginlist'>
              <ul className='navul'>
                <Link to="/" style={{textDecoration:'none'}}><li className='navli'>Home</li></Link>
                <Link to="/login" style={{textDecoration:'none'}}><li className='navli'>Login</li></Link>
                <Link to="/register" style={{textDecoration:'none'}}><li className='navli'>Register</li></Link>
              </ul>
              </div>
        </div>
        </>
      );
}

export default Navbar;