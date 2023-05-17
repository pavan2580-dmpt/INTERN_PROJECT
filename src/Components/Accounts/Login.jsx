import React, { useState } from 'react'
import { Link } from "react-router-dom";
import  axios  from 'axios';
import './Account.css'
function Login() {

  
  const [upass,Setpass] = useState()
  const [uEmail,SetEmail] = useState()
   
  
  const HandleLogin = async(e)=>{
    e.preventDefault()
 await axios.post('http://localhost:3001/Car/login',
    { 
      email:uEmail,
      password:upass
    }).then(
       (res)=>{
        // UserIdFormLogin =  res.data
       
       
     window.location.href='/'
      }
    ).catch(
      (res)=>{
        document.getElementById("invalid").style.display="block"
        alert(res.code)
        
      }
    )
    
  }

  return (
    <>
    <div className="login-background">
    <div className="login-form">
      <h1 className='log'>
        Login
      </h1>
      <form onSubmit={HandleLogin} > 
      <input type="email" name="email" id="email" placeholder='Enter email'  onChange={e=>SetEmail(e.target.value)} required/>
      <input type="password" name="password" id="pass" placeholder='Password'   onChange={e=>Setpass(e.target.value)} required/><br/>
      <div>
      <p id="invalid">*Invalid user data*</p>
      </div>
      <input type="submit" value="Login" id='login' />
      
      </form>
      <p className='sign-txt'>Don't have account ?<span> <Link to={'/Register'} > signup </Link>   </span> </p>
    </div>
    </div>
    
    
    </>
  )
}

export default Login