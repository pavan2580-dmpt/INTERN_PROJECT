import React ,{useState}from 'react'
import { Link } from 'react-router-dom'
import {MdEmail} from 'react-icons/md'
import {BsFillTelephoneFill} from "react-icons/bs"
import {RiLockPasswordFill} from "react-icons/ri"
import "./Account.css"
import axios from 'axios'

function Register() {

  const [ gender,Setgender] = useState()
  const [useremail,Setuseremail] = useState()
  const [userphone,Setuserphone] = useState()
  const [userpassword,Setuserpassword] = useState()
  const [userconformpassword,Setuserconformpassword] = useState()
 



  
  const HandleSubmit= async(e)=>{ 
    e.preventDefault()

    if(userpassword !== userconformpassword ){
      document.getElementById("indalid-pass").style.display="block"
      alert("password and conform passwor are not same!!")
      
    } else{
     
      await axios.post('http://localhost:3001/Car/Register',
      { 
        email:useremail ,
        phone:userphone,
        gender:gender,
        password:userpassword,
        conformpassword:userconformpassword
        
      }).then(
        (res)=>{    
          console.log(res.data)
        window.location.href = "/login";}
        
      ).catch(
        

        (res)=>{
          document.getElementById('invalid-email').style.display="block"          
          alert(res.code)}
      )
      
    }

  }
 


  return (
    <>

     
   <div className="Register">
    
    <div className="content">
    <h1 style={{textAlign:"center"}} >Registration Form</h1>
      <form  method='POST' onSubmit={HandleSubmit} >
      
      <div className='user-regi'>
           <MdEmail className='icons'/>   <input type="email" name="email" placeholder=' sample@gamail.com  '  onChange={(e)=>Setuseremail(e.target.value)}     className='userdata' required />
      </div>
      <p id='invalid-email'>Email is already taken</p>
     <div className='user-regi'>
           <BsFillTelephoneFill className='icons'/>   <input type="tel" name="phone" placeholder='Enter phone number  ' onChange={(e)=>Setuserphone(e.target.value)}   className='userdata' required/><br/>
     </div>
      <div >
      <input type="radio" name="gender"  className="gender" value="Male" required  onClick={(e)=>Setgender(e.target.value)}/>Male
      <input type="radio" name="gender" className="gender" value='Female' onClick={(e)=>Setgender(e.target.value)}/>Female
      <input type="radio" name="gender" className="gender"  value='Others' onClick={(e)=>Setgender(e.target.value)}/>others
      </div>
     <div className='user-regi'>
        <RiLockPasswordFill className='icons'/>    <input type="password" name="password" placeholder='Password ' minLength={"4"} maxLength={"15"} onChange={(e)=>Setuserpassword(e.target.value)}  className='userdata' required/>
     </div>
     <div className='user-regi'>
          <RiLockPasswordFill className='icons'/>    <input type="password" name="conformpassword" placeholder='conformpassword'minLength={"4"} maxLength={"15"} onChange={(e)=>Setuserconformpassword(e.target.value)}  className='userdata' required/>
     </div>
     <div>
      <p id='indalid-pass'>* Both password and conform password must be same *</p>
     </div>
    <p className='condition'><input type="checkbox" name="accept" id="accept"  required/>
      Agree terms and conditions
     </p>
     <p style={{textAlign:"center",fontSize:'20px'}}>Already have an account ? <span><Link to="/Login/"  >Login</Link> </span></p>
        <input type="submit" value="Register" className='reg-btn'  />


      </form>
      <Link to={'/'}>
     <button className="goto-home">Go-To-Home</button>
     </Link>
    </div>
   </div>

    </>
  )
}

export default Register