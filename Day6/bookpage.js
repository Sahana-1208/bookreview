import React from 'react';
import './css/bookpage.css';
import booki from './images/img3.jpg';
import './mui/rating';
import BasicRating from './mui/rating';
import Reviews from '../review';
function Bookpage() {
    return ( 
        <>
        <div className='bookpage'>
            <div className='bookpageimg'>
                <div className='bookimgplace'>
                    <div className='iimagee'>
                        <img src={booki}  style={{objectFit:'cover',width:'100%',height:'100%'}}></img>
                        <center><button class="button-24" role="button" style={{marginTop:'20px'}}>Add to wishlist</button></center>
                    </div>
                </div>
                <div className='bookinformation'>
                    <h1 style={{margin:'10px'}}>Broken wings</h1>
                    <h2 style={{margin:'10px'}}>By John wick</h2>
                    <div style={{margin:'10px'}} ><BasicRating/></div>
                    <p className='description' style={{margin:'10px'}}>Chhatrapati Shivaji is an epoch-maker and his name is known to each and every Indian. 
                    He added a new chapter to the Indian history by stablishing an independent Hindu state at the time when the 
                    entire country was under the Muslim rule. No Hindu has done such praiseworthy work in the history of India. 
                    Though born of poor parentage and deprived of proper education, he established an independent state with his
                     own struggle and strength. Just like a lion is not coronated, he occupied the status with his own power and strength</p>
                     <div style={{margin:'10px',display:'inline-block'}} ><div style={{float:'left'}}><BasicRating/></div><button class="button-24" role="button" style={{marginLeft:'10px',display:'inline-block'}}>Add rating</button></div>
                     <div className='reviewdiv'>
                        <textarea id='reviewtext' className='review'></textarea>
                        <button class="button-24" role="button" style={{marginLeft:'10px',display:'inline-block',float:'right',marginRight:'5%'}}>Add raview</button>
                     </div>
                     <div className='reviewlist'>
                        <h3>Reviews</h3>
                        <Reviews/>
                        <Reviews/>
                        <Reviews/>
                        <Reviews/>
                        <Reviews/>
                     </div>
                </div>
            </div>
        </div>
        </>
     );
}

export default Bookpage;