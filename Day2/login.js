import React from 'react';
import './css/login.css';
import logo from'./images/loginlogo.jpg';
import { Link } from 'react-router-dom';
function Login() {
    return ( 
        <>
        <div className='outer'>
        <div className="login">
            <center><img src={logo} alt='logo' width={100} />
            <h3>Login</h3>
            </center>
            <label for="username" className='field'>Username:</label>
            <input type="text" id="username" name="username" className='infield' /><br/><br/>
            <label for="password"className='field'>Password:</label>
            <input type="text" id="password" name="password" className='infield'/>
            <center><input type="submit" id="submit" className='submit'/></center>
            <Link to="/register" style={{textDecoration:'none',color:'rgb(85, 65, 127)'}}><p className='redirect'>If you are new?Register</p></Link>
        </div>
        </div>
        </>
     );
}

export default Login;