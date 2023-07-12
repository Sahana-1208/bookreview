import React from 'react';
import './css/content.css';
import {BsSearchHeartFill} from 'react-icons/bs'; 
import Booktemp from './booktemp';
function Content() {
    return ( 
        <>
        <div className='content'>
            <div className='searchbar'>
            <span ><BsSearchHeartFill style={{margin:0,paddingTop:'12px',paddingLeft:'15px',float:'left',display:'inline-block'}}/></span>
            <input className='searchbook' type='text' placeholder='Search for books.....'/>
            </div>
            <Booktemp/>
        </div>
        </>
     );
}

export default Content;