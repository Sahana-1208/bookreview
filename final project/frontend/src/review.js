import './components/css/review.css';
import React from 'react';
function Reviews(props) {
    return ( 
        <>
        <div className='reviewouter'>
            <div className='reviewtextarea'>
                <p>{props.reviewlist.review}</p>
            </div>
        </div>
        </>
     );
}

export default Reviews;