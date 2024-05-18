import React, { useState } from 'react'
import './Signin.css'
import AmaLogo from './blacklogo1.png'
import { Link,} from'react-router-dom'
import { useNavigate } from 'react-router-dom';
import governor from './5.JPG'



function Signin() {
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
  const login = () => {
    // Navigate to the registration page
    alert("Logged in successful")
  };
        //firebase register
    
  return (
    <div className='login'>
        

        <div className='login__container'>
            <h1>Sign in </h1>
          
            <form onSubmit={(e) => {
                 e.preventDefault();
                 ;
              }}>
                <h5>Phone Number:</h5>
               
                <input type='tel' value={phoneNo} onChange={e => setPhoneNo(e.target.value)} />

                <h5>Password:</h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
          <Link to = '/*'>
                <button type='submit' onClick={() => login()} className='login__registerButton'>Login</button>
          </Link>
               
            </form>
            {/* <p>
             Already have account with us
            </p>
           
            <button 
                 className='login__signInButton' type='submit' onClick={() => signIn()}>Sign in</button> */}
  
        </div>
       
    

    </div>
    
  )
}

export default Signin