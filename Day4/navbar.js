import React from 'react';
import './css/navbar.css';
import {GiBookshelf} from 'react-icons/gi';
function Navbar() {
    return (
        <>
        <div className="upper">
                <div className='title'><GiBookshelf /> Bookaholic<span style={{fontWeight:"normal"}}>.com</span></div>
        </div>
        </>
      );
}

export default Navbar;