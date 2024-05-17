import React, { useState } from 'react'
import './Login.css'
import AmaLogo from './blacklogo1.png'
import { Link,} from'react-router-dom'
import { useNavigate } from 'react-router-dom';
import governor from './5.JPG'



function Login() {
    const navigate = useNavigate();
    const [phoneNo, setPhoneNo] = useState('')
    const [Nin, setNin] = useState('')
    const [password, setPassword] = useState('')
;

  const signIn = () => {
    // Navigate to the sign-in page
   alert("Login successful")
  };

  const register = () => {
    // Navigate to the registration page
    alert("Register successful")
  };
        //firebase register
    
  return (
    <div className='login'>
        <Link to='/home'>
        <img className='login__logo' src={AmaLogo} alt="AmaLogo" />
        </Link>

        <div className='login__container'>
            <h1>Create Account</h1>
          
            <form onSubmit={(e) => {
                 e.preventDefault();
                 ;
              }}>
                <h5>Phone Number:</h5>
               
                <input type='tel' value={phoneNo} onChange={e => setP honeNo(e.target.value)} />

                <h5>Choose Password:</h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                <Link to='/Signin'>
                <button type='submit' onClick={() => register()} className='login__registerButton'>Create your account</button>
                </Link>
               
            </form>
            {/* <p>
             Already have account with us
            </p>
           
            <button 
                 className='login__signInButton' type='submit' onClick={() => signIn()}>Sign in</button> */}
        <img src={governor} alt="banner" style={{marginTop: '10px', width: '100%'}} />
        </div>
       
    

    </div>
    
  )
}

export default Login