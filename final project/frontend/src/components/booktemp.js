import React from 'react';
import './css/booktemp.css';
// import {BiSolidLike} from 'react-icons/bi';
// import {BiSolidDislike} from 'react-icons/bi';
import { Link } from 'react-router-dom';
function Booktemp(props) {
    const bookdetails = props.booklist;
    return ( 
        <>
        <Link to='/bookpage' style={{textDecoration:'none',color:'black'}} state={bookdetails}>{/*<div className='booktemp'>
            /* <div className='bookimg'><img src={props.booklist.img} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
            </div>
            <div className='bookinfo'>
                <h1>{props.booklist.name}</h1>
                <h3 style={{color:'purple',fontWeight:'1px',fontFamily:"serif"}}>{props.booklist.description}</h3>
                <p style={{fontFamily:'cursive'}}>{props.booklist.author}</p>
                <p><span><BiSolidLike/>{props.booklist.like}</span><span style={{marginLeft:'3.5cm'}}><BiSolidDislike/>{props.booklist.dislike}</span></p>
            </div>
        </div> */}
        <div className='booktemp'>
        <div className='bookimg'>
            <img src={props.booklist.imageurl} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
            <p style={{textAlign:'center'}}>{props.booklist.bookName}</p>
            <p style={{textAlign:'center',fontFamily:'cursive'}}>{props.booklist.author}</p>
        </div>
        </div>
        </Link>
        </>
     );
}

export default Booktemp;