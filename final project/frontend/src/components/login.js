import React,{useState} from 'react';
import './css/login.css';
import {useDispatch} from 'react-redux';
import {login,logout} from './features/reducer';
import imgg from './images/outer2.jpg';
import {CgProfile} from 'react-icons/cg';
//import logo from'./images/loginlogo.jpg';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
function Login() {
    const dispatch=useDispatch();
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();
    const navigate=useNavigate();
    const handleSubmit=()=>{
                axios.post("http://localhost:8181/api/v1/auth/authenticate",{
                    "email":email,
                "password":password
            })
            .then(res=>{
                console.log(res.data);
                localStorage.setItem("token",res.data.token);
                localStorage.setItem("email",email);
                navigate("/");
                
            })
            .catch(err => {
                console.log(err);
            })
    }
    return ( 
        <>
        <div className='outer' style={{backgroundImage:`url(${imgg})`}}>
            <div style={{height:'100vh',width:'100%',backgroundColor:"rgba(164, 164, 221,0.5)",position:'relative'}}></div>
        <div className="login" style={{backgroundColor:'rgba(164, 164, 221,0.5)'}}>
        <center>{/* <img src={logo} alt='logo' width={100} /> */}<CgProfile size={100} style={{paddingTop:'20px'}}/>
            <h3>Login</h3>
            </center>
            <div style={{marginTop:'10px'}}>
            <table>
            <tr>
            <th><label for="email" className='field'>Email</label></th>
            <th><input type="text" id="email" name="email" value={email} className='infield' onChange={(event)=>{setEmail(event.target.value)}}/></th><br/><br/>
            </tr>
            <tr>
            <th><label for="password"className='field'>Password</label></th>
            <th><input type="text" id="password" name="password" value={password} className='infield'onChange={(event)=>{setPassword(event.target.value)}}/></th>
            </tr>
            </table>
            </div>
            <center><input type="submit" id="submit" className='submit' onClick={()=>{handleSubmit();dispatch(login({email,password}))}}/></center><br/>
            <Link to="/register" style={{textDecoration:'none',color:'black'}}><p className='redirect'>If you are new?Register</p></Link>
        </div>
        </div>
        </>
     );
}

export default Login;