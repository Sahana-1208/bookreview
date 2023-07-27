import React,{useState} from 'react';
import './css/register.css';
import backimg from './images/outer2.jpg';
import {useDispatch} from 'react-redux';
import {login,logout} from './features/reducer';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
function Register() {
    const dispatch=useDispatch();
    const[username,setUsername]=useState();
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();
    const[confirmPassword,setConfirmPassword]=useState();
    const navigate=useNavigate();
    const handleSubmit=()=>{
        try{

                axios.post("http://localhost:8181/api/v1/auth/register",{
                    "name":username,
                    "email":email,
                "password":password
            })
            .then(res=>{
                console.log(res.data);
                navigate("/login");
                
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
        <div className='regouter' style={{backgroundImage:`url(${backimg})`}}>
        <div style={{height:'100vh',width:'100%',backgroundColor:"rgba(164, 164, 221,0.5)",position:'relative'}}></div>
        <div className="register">
            <center>
            <h2 style={{marginTop:'10px'}}>Register</h2>
            </center>
            <table style={{marginTop:'20px'}}>
            <tr>
            <th><label for="username" className='regfield'>Username</label></th>
            <th><input type="text" id="username" name="username" className='reginfield' onChange={(event)=>{setUsername(event.target.value)}} /></th>
            </tr>
            <tr>
            <th><label for="email"className='regfield'>Email</label></th>
            <th><input type="text" id="email" name="email" className='reginfield' onChange={(event)=>{setEmail(event.target.value)}}/></th>
            </tr>
            <tr>
            <th><label for="username" className='regfield'>Password</label></th>
            <th><input type="text" id="username" name="username" className='reginfield' onChange={(event)=>{setPassword(event.target.value)}}/></th>
            </tr>
            <tr>
            <th><label for="username" className='regfield'>ConfirmPassword</label></th>
            <th><input type="text" id="username" name="username" className='reginfield' onChange={(event)=>{setConfirmPassword(event.target.value)}}/></th>
            </tr>
            </table><br/>
            <center><input type="submit" id="submit" className='regsubmit' onClick={()=>{handleSubmit();dispatch(login({email,password}))}}/></center><br/>
            <Link to="/login" style={{textDecoration:'none',color:'black'}}><p className='regredirect'>Already have an account?login</p></Link>
        </div>
        </div>
        </>
     );
}

export default Register;