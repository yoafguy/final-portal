import React from 'react'
import LandingPage from './LandingPage'
import Register from './Register';

import Header from './Header';
import Terms from './Terms'
import './App.css'


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (

    <Router>
      <div className="app">
      <Header />
        <Routes>
          
        <Route path="/*" element={<>
          
            <LandingPage />
          </>} />
       
        <Route path="/Register" element={<>
          
          <Register/>
        </>} />
        <Route path="/terms" element={<>
           
           <Terms />
           
         </>} />
      
         
         
        </Routes>
        
      </div>
    </Router>
  )
}

export default App