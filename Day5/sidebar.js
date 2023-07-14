import React, { useState } from 'react';
import './css/sidenav.css';
import { Link } from 'react-router-dom';
function Sidebar() {
    const [dropdown,setDropdown]=useState(false);
    const myfunction=()=>{
        setDropdown(!dropdown);
    }
    return ( 
        <>
        <div className='sidenav'>
            <ul className='sidenavul'>
                <Link to='/profile'><li className='sidenavli'>Profile</li></Link>
                <Link to='/wishlist'><li className='sidenavli'>Wishlist</li></Link>
                <li className='sidenavli'>Sort Books</li>
                <li className='sidenavli' onClick={myfunction}>Genre</li>
                <div style={{display:(dropdown)?"block":"none",color:'white',listStyleType:'none'}}>
                    <li className='sidenavli' style={{fontFamily:'cursive',paddingLeft:'10%',borderBottom:'none'}}>Love</li>
                    <li className='sidenavli' style={{fontFamily:'cursive',paddingLeft:'10%',borderBottom:'none'}}>Thriller</li>
                    <li className='sidenavli' style={{fontFamily:'cursive',paddingLeft:'10%',borderBottom:'none'}}>Comedy</li>
                    <li className='sidenavli' style={{fontFamily:'cursive',paddingLeft:'10%',borderBottom:'none'
                }}>Science</li>
                </div>
            </ul>
        </div>
        </>
     );
}

export default Sidebar;