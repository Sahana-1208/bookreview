import React from 'react';
import './css/register.css';
import { Link } from 'react-router-dom';
function Register() {
    return ( 
        <>
        <div className='regouter'>
        <div className="register">
            <center>
            <h2>Register</h2>
            </center>
            <table>
            <tr>
            <th><label for="username" className='regfield'>Username</label></th>
            <th><input type="text" id="username" name="username" className='reginfield' /></th>
            </tr>
            <tr>
            <th><label for="email"className='regfield'>Email</label></th>
            <th><input type="text" id="email" name="email" className='reginfield'/></th>
            </tr>
            <tr>
            <th><label for="username" className='regfield'>Password</label></th>
            <th><input type="text" id="username" name="username" className='reginfield' /></th>
            </tr>
            <tr>
            <th><label for="username" className='regfield'>ConfirmPassword</label></th>
            <th><input type="text" id="username" name="username" className='reginfield' /></th>
            </tr>
            </table><br/>
            <center><input type="submit" id="submit" className='regsubmit'/></center>
            <Link to="/" style={{textDecoration:'none',color:'rgb(85, 65, 127)'}}><p className='regredirect'>Already have an account?login</p></Link>
        </div>
        </div>
        </>
     );
}

export default Register;