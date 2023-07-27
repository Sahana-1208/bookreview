import React, { useEffect, useState } from 'react';
import './css/content.css';
import Booktemp from './booktemp';
import axios from 'axios';
import Navbar from './navbar';
function Content(props) {
    const [Booklist,setBookList]=useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:8181/book/`).then(res=>{setBookList(res.data)})
        
    },[])
    return ( 
        <>
        <Navbar/>
        <div className='content'>
            {Booklist.map((book)=><Booktemp booklist={book}/>)}
        </div>
        </>
     );
}

export default Content;