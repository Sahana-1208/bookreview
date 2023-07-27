import React, { useEffect, useState } from 'react';
import './css/bookpage.css';
//import booki from './images/img3.jpg';
// import './mui/rating';
// import BasicRating from './mui/rating';
import Reviews from '../review';
import Rating from '@mui/material/Rating';
import axios from 'axios';

import { useLocation } from 'react-router-dom';
import Navbar from './navbar';
function Bookpage() {
    const location = useLocation();
    const [value, setValue] = React.useState(0);
    const[review,setReview]=useState();
    const data=location.state;
    const [ReviewList,setReviewList]=useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:8181/review/`,{headers:{"Authorization":`Bearer ${localStorage.getItem("token")}`}}).then(res=>{setReviewList(res.data)})
        
    },[])
    const handleSubmit=()=>{
            console.log(`Bearer ${localStorage.getItem("token")}`);
                axios.post("http://localhost:8181/rating/",{
                    "value":value
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
    const handleReview=()=>{
            console.log(`Bearer ${localStorage.getItem("token")}`);
                axios.post("http://localhost:8181/review/",{
                    "review":review
            },{headers:{"Authorization":`Bearer ${localStorage.getItem("token")}`}}
            )
            .then(res=>{
                console.log(res.data);
                alert("review added");
                
            })
            .catch(function (error) {
                console.log(error.response.status);
            })
    }
    return ( 
        <>
        
      <Navbar/>
        <div className='bookpage'>
            <div className='bookpageimg'>
                <div className='bookimgplace'>
                    <div className='iimagee'>
                        <img src={data.imageurl}  style={{objectFit:'cover',width:'100%',height:'100%'}}></img>
                        <center><button class="button-24" role="button" style={{marginTop:'20px'}}>Add to wishlist</button></center> 
                     {/* <center><button class="button-24" role="button" style={{marginTop:'20px'}}>Add to tracker</button></center>  */}
                    </div>
                </div>
                <div className='bookinformation'>
                    <h1 style={{margin:'10px'}}>{data.bookName}</h1>
                    <h2 style={{margin:'10px'}}>{data.author}</h2>
                    {/* <div style={{margin:'10px'}} ><BasicRating/></div> */}
                    <p className='description' style={{margin:'10px'}}>{data.description}</p>
                     <div style={{margin:'10px',display:'inline-block'}} ><div style={{float:'left'}}><Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      /></div><button class="button-24" role="button" style={{marginLeft:'10px',display:'inline-block'}}onClick={handleSubmit}>Add rating</button></div>
                     <div className='reviewdiv'>
                        <textarea id='reviewtext' className='review' onChange={(event)=>{setReview(event.target.value)}}></textarea>
                        <button class="button-24" role="button" style={{marginLeft:'10px',display:'inline-block',float:'right',marginRight:'5%'}} onClick={handleReview}>Add raview</button>
                     </div>
                     <div className='reviewlist'>
                        <h3>Reviews</h3>
            {ReviewList.map((review)=><Reviews reviewlist={review}/>)}
                     </div>
                </div>
            </div>
        </div>
        </>
     );
}

export default Bookpage;