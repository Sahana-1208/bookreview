import React, { useState } from 'react';
import './css/content.css';
import img1 from './images/login.jpg';
import img2 from './images/img5.jpg';
import img3 from './images/img4.jpg';
import img4 from './images/img3.jpg';
import {BsSearchHeartFill} from 'react-icons/bs'; 
import Booktemp from './booktemp';
function Content() {
    const [Booklist,setBookList]=useState(
        [
            {name: "2 STATES", author: "Chetan Bhagat", description: "The Story of My Marriage is autobiographical with only names changed. The story is about a couple Krish and Ananya, who hail from two states of India, Punjab and Tamil Nadu, respectively, who are deeply in love and want to marry.",
            like:1500,dislike:20,img:img1},
            {name: "2 STATES", author: "Chetan Bhagat", description: "The Story of My Marriage is autobiographical with only names changed. The story is about a couple Krish and Ananya, who hail from two states of India, Punjab and Tamil Nadu, respectively, who are deeply in love and want to marry.",
            like:1500,dislike:20,img:img2},
            {name: "2 STATES", author: "Chetan Bhagat", description: "The Story of My Marriage is autobiographical with only names changed. The story is about a couple Krish and Ananya, who hail from two states of India, Punjab and Tamil Nadu, respectively, who are deeply in love and want to marry.",
            like:1500,dislike:20,img:img3},
            {name: "2 STATES", author: "Chetan Bhagat", description: "The Story of My Marriage is autobiographical with only names changed. The story is about a couple Krish and Ananya, who hail from two states of India, Punjab and Tamil Nadu, respectively, who are deeply in love and want to marry.",
            like:1500,dislike:20,img:img4},
            {name: "2 STATES", author: "Chetan Bhagat", description: "The Story of My Marriage is autobiographical with only names changed. The story is about a couple Krish and Ananya, who hail from two states of India, Punjab and Tamil Nadu, respectively, who are deeply in love and want to marry.",
            like:1500,dislike:20,img:img1},
            {name: "2 STATES", author: "Chetan Bhagat", description: "The Story of My Marriage is autobiographical with only names changed. The story is about a couple Krish and Ananya, who hail from two states of India, Punjab and Tamil Nadu, respectively, who are deeply in love and want to marry.",
            like:1500,dislike:20,img:img2},
            {name: "2 STATES", author: "Chetan Bhagat", description: "The Story of My Marriage is autobiographical with only names changed. The story is about a couple Krish and Ananya, who hail from two states of India, Punjab and Tamil Nadu, respectively, who are deeply in love and want to marry.",
            like:1500,dislike:20,img:img3},
            {name: "2 STATES", author: "Chetan Bhagat", description: "The Story of My Marriage is autobiographical with only names changed. The story is about a couple Krish and Ananya, who hail from two states of India, Punjab and Tamil Nadu, respectively, who are deeply in love and want to marry.",
            like:1500,dislike:20,img:img4},
            {name: "2 STATES", author: "Chetan Bhagat", description: "The Story of My Marriage is autobiographical with only names changed. The story is about a couple Krish and Ananya, who hail from two states of India, Punjab and Tamil Nadu, respectively, who are deeply in love and want to marry.",
            like:1500,dislike:20,img:img1},
            {name: "2 STATES", author: "Chetan Bhagat", description: "The Story of My Marriage is autobiographical with only names changed. The story is about a couple Krish and Ananya, who hail from two states of India, Punjab and Tamil Nadu, respectively, who are deeply in love and want to marry.",
            like:1500,dislike:20,img:img2},
            {name: "2 STATES", author: "Chetan Bhagat", description: "The Story of My Marriage is autobiographical with only names changed. The story is about a couple Krish and Ananya, who hail from two states of India, Punjab and Tamil Nadu, respectively, who are deeply in love and want to marry.",
            like:1500,dislike:20,img:img3},
            {name: "2 STATES", author: "Chetan Bhagat", description: "The Story of My Marriage is autobiographical with only names changed. The story is about a couple Krish and Ananya, who hail from two states of India, Punjab and Tamil Nadu, respectively, who are deeply in love and want to marry.",
            like:1500,dislike:20,img:img4},
            {name: "2 STATES", author: "Chetan Bhagat", description: "The Story of My Marriage is autobiographical with only names changed. The story is about a couple Krish and Ananya, who hail from two states of India, Punjab and Tamil Nadu, respectively, who are deeply in love and want to marry.",
            like:1500,dislike:20,img:img1},
            {name: "2 STATES", author: "Chetan Bhagat", description: "The Story of My Marriage is autobiographical with only names changed. The story is about a couple Krish and Ananya, who hail from two states of India, Punjab and Tamil Nadu, respectively, who are deeply in love and want to marry.",
            like:1500,dislike:20,img:img2},
            {name: "2 STATES", author: "Chetan Bhagat", description: "The Story of My Marriage is autobiographical with only names changed. The story is about a couple Krish and Ananya, who hail from two states of India, Punjab and Tamil Nadu, respectively, who are deeply in love and want to marry.",
            like:1500,dislike:20,img:img3},
            {name: "2 STATES", author: "Chetan Bhagat", description: "The Story of My Marriage is autobiographical with only names changed. The story is about a couple Krish and Ananya, who hail from two states of India, Punjab and Tamil Nadu, respectively, who are deeply in love and want to marry.",
            like:1500,dislike:20,img:img4}
        ]
    );
    return ( 
        <>
        <div className='content'>
            {/* <div className='searchbar'>
            <span ><BsSearchHeartFill style={{margin:0,paddingTop:'12px',paddingLeft:'15px',float:'left',display:'inline-block'}}/></span>
            <input className='searchbook' type='text' placeholder='Search for books.....'/>
            </div>  */}
            {Booklist.map((book)=><Booktemp booklist={book}/>)}
        </div>
        </>
     );
}

export default Content;