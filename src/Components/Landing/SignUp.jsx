import React, { useState } from 'react'
import "./Home.css"
import {FaUser} from "react-icons/fa"
import { Link } from 'react-router-dom'
import axios from 'axios'


function SignUp() {

  const [getEmail,SetEmail] = useState('Sample@gmail.com')

  const fetch = async()=>{
   const data = await axios.get('http://localhost:3001/Car/dashboard')
   .then(
    ()=>{
      SetEmail(data.email)
    }
   ).catch(
    ()=>{
      SetEmail("Sample@gmail.com")
    }
   )
  }



  return (
    <>
    <div className="signup">
   <Link to={'/register'}  id='link'>  <h1 id='user-logo'><FaUser/> Sign in</h1> </Link> 

    <h1 id='user-email'>
     { getEmail}
    </h1>
    </div>
    
    
    </>
  )
}

export default SignUp