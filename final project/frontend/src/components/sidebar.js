import React, { useState } from 'react';
import './css/sidenav.css';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';

function Sidebar() {
    const [dropdown,setDropdown]=useState(false);
    const user=useSelector(state=>state.user.value);
    const myfunction=()=>{
        setDropdown(!dropdown);
    }
    return ( 
        <>
        <div className='sidenav'>
            <ul className='sidenavul'>
                <li className='sidenavli'>{localStorage.getItem('email')}</li>
                <Link to='/profile'><li className='sidenavli'>Profile</li></Link>
                <Link to='/wishlist'><li className='sidenavli'>Wishlist</li></Link>
                <Link to='/login'><li className='sidenavli' onClick={()=>localStorage.setItem('token',"-")}>Logout</li></Link>
                {/* <li className='sidenavli'>Sort Books</li>
                <li className='sidenavli' onClick={myfunction}>Genre</li>
                <div style={{display:(dropdown)?"block":"none",color:'white',listStyleType:'none'}}>
                    <li className='sidenavli' style={{fontFamily:'cursive',paddingLeft:'10%',borderBottom:'none'}}>Love</li>
                    <li className='sidenavli' style={{fontFamily:'cursive',paddingLeft:'10%',borderBottom:'none'}}>Thriller</li>
                    <li className='sidenavli' style={{fontFamily:'cursive',paddingLeft:'10%',borderBottom:'none'}}>Comedy</li>
                    <li className='sidenavli' style={{fontFamily:'cursive',paddingLeft:'10%',borderBottom:'none'
                }}>Science</li>
                </div> */}
                {/* <Link to='/feedback'><li className='sidenavli'>Feedback</li></Link> */}
            </ul>
        </div>
        </>
     );
}

export default Sidebar;