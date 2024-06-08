import React, { useState, useEffect } from 'react';
import './CreateProfile.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Banner1 from './5.JPG'
import arrow from './arrow.png'


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function CreateProfile() {
    const navigate = useNavigate();

 
  
    return (
        <div className="createProfile">
            <div className="load">
                <hr />
                <hr />
                <hr />
                <hr />
            </div>

            <div className="ugf-wrapper theme-bg">
                <div className="ugf-content-block">
                 
                    <div className="container-md">
                        <div className="row">
                            <div className="col-lg-7 offset-lg-5 p-sm-0">
                                <div className="ugf-content pt270">
                                    <h2><span>Register Today for Opportunities & Growth!</span></h2>
                                    <p>Connect with fellow youth, access resources, and participate in exciting initiatives designed to uplift and empower the next generation of Kano leaders.</p>
                                    <Link to="/Register">
                                    <form  className="form-flex email-form" id="commentForm">
                                        <button className="btn"><span>Register</span> <img src={arrow} alt="arrow" width="20%" /></button>
                                    </form>
                                   </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="alternet-access">
                        <p>Already have an account? <Link to="/Home"> Log in now!</Link> </p>
                        
                    </div>
                    
                </div>
         
              
             <div className="ugf-sidebar flex-bottom ugf-sidebar-bg">
             {/* <img src={Banner1} alt='banner' className='bannerImage'></img> */}
                   
                </div> 
                <div className="footer">
      <a href="https://techlife.ng">© 2024 All Rights Reserved. Developed By Techlife.</a>
  </div>
          
    
            </div>
            
        </div>
        
    );
}

export default CreateProfile;
