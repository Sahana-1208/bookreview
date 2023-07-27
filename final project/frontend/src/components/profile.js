import './css/profile.css';
import React from 'react';
function Profile() {
    return ( 
        <>
        <div className='profileouter'>
            <div className='picture'>
                <div className='imgfit'>
                </div>
            </div>
            <div className='profileinfo'>
                <p style={{color:"rgb(116, 116, 236)",fontSize:'30px',fontFamily:'cursive',marginLeft:'10%',paddingTop:'50px'}}>Name<span style={{paddingLeft:'30px',color:'black'}}>Sahana</span></p>
                <p style={{color:"rgb(116, 116, 236)",fontSize:'30px',fontFamily:'cursive',marginLeft:'10%',marginTop:'20px'}}>Age<span style={{paddingLeft:'30px',color:'black'}}>19</span></p>
                <p style={{color:"rgb(116, 116, 236)",fontSize:'30px',fontFamily:'cursive',marginLeft:'10%',marginTop:'20px'}}>Gender<span style={{paddingLeft:'30px',color:'black'}}>female</span></p>
                <p style={{color:"rgb(116, 116, 236)",fontSize:'30px',fontFamily:'cursive',marginLeft:'10%',marginTop:'20px'}}>Favourite books<span style={{paddingLeft:'30px',color:'black'}}>Finding you</span></p>
                <p  style={{color:"rgb(116, 116, 236)",fontSize:'30px',fontFamily:'cursive',marginLeft:'10%',marginTop:'20px'}}>Biography<span style={{paddingLeft:'30px',color:'black',fontSize:'15px'}}>In process to find myself</span></p>
                <button className='button-24' style={{marginLeft:'55px',marginTop:'35px'}}>Edit profile</button>
            </div>
        </div>
        </>
     );
}

export default Profile;