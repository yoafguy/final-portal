import React from 'react'
import CreateProfile from './CreateProfile'
import SignUp from './SignUp'
import Login from './Login';
import Signin from './Signin';
import Header from './Header';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (

    <Router>
      <div className="app">
      <Header />
        <Routes>
          
        <Route path="/*" element={<>
          
            <CreateProfile />
          </>} />
          <Route path="/login" element={<>
           
          <Login/>
          
        </>} />
        <Route path="/signin" element={<>
          
          <Signin/>
        </>} />
      
         
         
        </Routes>
        
      </div>
    </Router>
  )
}

export default App