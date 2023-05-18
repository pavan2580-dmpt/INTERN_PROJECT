import React, { useState } from 'react'
import "./Home.css"
import {FaUser} from "react-icons/fa"
import { Link } from 'react-router-dom'



function SignUp() {


  return (
    <>
    <div className="signup">
   <Link to={'/register'}  id='link'>  <h1 id='user-logo'><FaUser/> Sign in</h1> </Link> 

  
    </div>
    
    
    </>
  )
}

export default SignUp