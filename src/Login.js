import React, { useState } from 'react'
import './Login.css'
import AmaLogo from './blacklogo1.png'
import { Link,} from'react-router-dom'
import { useNavigate } from 'react-router-dom';
import governor from './5.JPG'



function Login() {
    const navigate = useNavigate();

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
        <div className='login__container'>
            <h1>Create Account</h1>
          
            <form onSubmit={(e) => {
                 e.preventDefault();
                 ;
              }}>
                <h5>NIN:</h5>
               
                <input type='tel' value={Nin} onChange={e => setNin(e.target.value)} />

                <h5>Choose Password:</h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                <Link to='/Signin'>
                <button type='submit' onClick={() => register()} className='login__registerButton'>Create your account</button>
                </Link>
               
            </form>
        </div>
       
    

    </div>
    
  )
}

export default Login