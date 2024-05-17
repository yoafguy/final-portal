import React, { useState } from 'react'
import './CreateProfile.css'
import AmaLogo from './blacklogo1.png'
import { Link,} from'react-router-dom'
import { useNavigate } from 'react-router-dom';
import governor from './assets/3.svg'
import Login from './Login';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function CreateProfile() {
    const navigate = useNavigate();
    const [phoneNo, setphoneNo] = useState('')
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
    
    <div className='createProfile'>
        

        <div className='createProfile__container'>    
           
        <img src={governor} alt="banner" style={{marginTop: '10px', width: '100%'}} />
        <h3 className='congrats'>Congratulations</h3>
        <p className='congratsP'>The details you provided are correct,however you can create an account with us with your phone number and choose a password below.</p>
    <Link to='/login'>  

        <button 
                 className='login__signInButton' type='submit'>Proceed to create account
        </button> 
     </Link>
       
        {/* <img src={AmaLogo} alt ='logo' /> */}
        </div>
      
    

    </div>

  )
}

export default CreateProfile