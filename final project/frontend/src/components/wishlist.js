import React from 'react';
import Home from './home';

function WishList() {
    return ( 
        <>
        <div>
            <div>
            <h3 style={{height:'10vh',fontSize:'30px',paddingTop:'10px',backgroundColor:'rgba(164, 164, 221,0.5)'}}>My WishList</h3>
            </div>
            <Home/>
        </div>
        </>
     );
}

export default WishList;