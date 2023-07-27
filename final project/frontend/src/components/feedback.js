import React, { useState } from 'react';
import axios from 'axios';
function FeedBack() {
    const[name,setName]=useState();
    const[feedback,setFeedback]=useState();
    const handleSubmit=()=>{
        console.log(`Bearer ${localStorage.getItem("token")}`);
            axios.post("http://localhost:8181/api/v1/users/addUserFeedback",{
                "name":name,
                "email":localStorage.getItem('email'),
                "feedback":feedback
        },{headers:{"Authorization":`Bearer ${localStorage.getItem("token")}`}}
        )
        .then(res=>{
            console.log(res.data);
            alert("rating added");
            
        })
        .catch(function (error) {
            console.log(error.response.status);
        })
}
    return ( 
        <>
        <h1>FeedBack</h1>
        <label>Name</label>
        <input onChange={(event)=>{setName(event.target.value)}}></input><br/><br/>
        <label>Suggestion</label>
        <textarea onChange={(event)=>{setFeedback(event.target.value)}}></textarea><br/><br/>
        <button onClick={handleSubmit}>Submit</button>
        </>
     );
}

export default FeedBack;