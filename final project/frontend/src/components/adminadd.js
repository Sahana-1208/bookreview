import React, { useState } from 'react';
import './css/adminadd.css';
import axios from 'axios';

function Adminadd() {
    const[bookName,setBookName]=useState();
    const[author,setAuthor]=useState();
    const[description,setDescription]=useState();
    const[releaseDate,setReleaseDate]=useState();
    const[imageurl,setImageurl]=useState();
    const handleSubmit=()=>{
        try{

                axios.post("http://localhost:8181/book/",{
                    "bookName":bookName,
                    "author":author,
                    "releaseDate":releaseDate,
                    "description":description,
                    "imageurl":imageurl
            })
            .then(res=>{
                console.log(res.data);
                alert("bookadded");
                
            })
            .catch(function (error) {
                console.log(error.response.status);
            })
        }
        catch(error){
            console.log("Error"+error.response.status);
        }
    }
    return ( 
        <>
        <div style={{height:'10vh',backgroundColor:'rgb(164, 164, 221)'}}>
            <h1>Admin page</h1>
        </div>
        <div className='adminouter'>
        <form className='adminform'>
        <h3>Add Book</h3>
        <label for="bookName">Book Name:</label><br/>
        <input type="text" id="bookName" name="bookName" onChange={(event)=>{setBookName(event.target.value)}}/><br/>
        <label for="author">Author:</label><br/>
        <input type="text" id="author" name="author" onChange={(event)=>{setAuthor(event.target.value)}}/><br/>
        <label for="description">Description:</label><br/>
        <input type="text" id="description" name="description" onChange={(event)=>{setDescription(event.target.value)}}/><br/>
        <label for="date">Date:</label><br/>
        <input type="text" id="releaseDate" name="date" onChange={(event)=>{setReleaseDate(event.target.value)}}/><br/>
        <label for="imageurl">Image url:</label><br/>
        <input type="text" id="imageurl" name="imageurl" onChange={(event)=>{setImageurl(event.target.value)}}/><br/><br/>
        <input type='button'id="addbook" name="Add Book" value="Add Book" style={{padding:'10px 10px',backgroundColor:"rgb(156, 150, 222)",border:"none"}} onClick={handleSubmit}/>
        </form>
        </div>
        </>
     );
}

export default Adminadd;