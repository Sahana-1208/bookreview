import React from 'react';
import './css/login.css';
import { Link } from 'react-router-dom';

function AdminLogin() {
    return ( 
        <>
        <div style={{backgroundColor:'rgba(164, 164, 221,0.5)',width:'50%',height:'30vh'}}>
            <h3>Login</h3>
            <div style={{marginTop:'10px'}}>
            <table>
            <tr>
            <th><label for="email" className='field'>Email</label></th>
            <th><input type="text" id="email" name="email"  className='infield' /></th><br/><br/>
            </tr>
            <tr>
            <th><label for="password" className='field'>Password</label></th>
            <th><input type="text" id="password" name="password" /></th>
            </tr>
            </table>
            </div>
            <center><Link to="/admin" style={{textDecoration:'none',color:'black'}}><input type="submit" id="submit" className='submit' />
            </Link></center><br/>
        </div>
        </>
     );
}

export default AdminLogin;