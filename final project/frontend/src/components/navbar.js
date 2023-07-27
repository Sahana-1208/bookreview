import React,{useEffect, useState} from 'react';
import './css/navbar.css';
import { Link, useActionData } from 'react-router-dom';
import {GiBookshelf} from 'react-icons/gi';
import {BsListUl} from 'react-icons/bs';
import Sidebar from './sidebar';
function IsLogin({val}){
  if(val===false){
    return(
      <>
      <Link to="/login" style={{textDecoration:'none'}}><li className='navli'>Login</li></Link>
      <Link to="/register" style={{textDecoration:'none'}}><li className='navli'>Register</li></Link>
      </>
    )
  }
  return(
    <>
    <li className='navli' onClick={localStorage.setItem("token",null)}>Logout</li>
    </>
  )
}
function Navbar() {
    const [sidebarshow,setSidebarshow]=useState(false);
    const myfunc=()=>{
        setSidebarshow(!sidebarshow);
    }
    // const [isAuthenticate,setIsAuthenticate]=useState(false);
    // useEffect(()=>{
    //   if(localStorage.getItem("token")==null){
    //     return()=>{
    //       <IsLogin val={isAuthenticate}/>
    //     }
    //   }
    // },[])
    return (
        <>
        {/* <div className="upper"><GiBookshelf />
                <div className='title'> Bookaholic<span style={{fontWeight:"normal"}}>.com</span></div>
        </div>
        </> */}
        <div className='navbar'>
          <div className='ssidebar' onClick={myfunc}><BsListUl size={45} style={{paddingTop:'10px'}}/></div>
          <div  style={{display:(sidebarshow)?"block":"none",color:'white',listStyleType:'none'}}><Sidebar/></div>
              <div class='logo'> Bookaholic.com</div>
              <div className='ssearchbar'>
            <input className='ssearchbook' type='text' placeholder='Search for books.....'/>
            </div>
              <div className='loginlist'>
              <ul className='navul'>
                <Link to="/" style={{textDecoration:'none'}}><li className='navli'>Home</li></Link>
                {/* <IsLogin val={isAuthenticate}/> */}
                {/* <Link to="/login" style={{textDecoration:'none'}}><li className='navli'>Login</li></Link>
      <Link to="/register" style={{textDecoration:'none'}}><li className='navli'>Register</li></Link> */}
              </ul>
              </div>
        </div>
        </>
      );
}

export default Navbar;