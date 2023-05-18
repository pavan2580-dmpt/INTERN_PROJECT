import React, { useEffect, useState } from 'react';
import './profile.css';
import axios from 'axios';
import Cookies from 'js-cookie';
import Loader from'../Loader/Loader'

const Profile = ()=> {


  const[fname,setfname] = useState()
  const[lname,setlname] = useState()
  const[dob,setdob] = useState()
  const[username,setusername] = useState()
  const[country,setcountry] = useState()
  const[state,setstate] = useState()
  const[city,setcity] = useState()
  const[ares,setarea] = useState()
  const[pinecode,setpinecode] = useState()
  const[about,setabout] = useState()

    const handleSubmit = async()=>{
      const userId = Cookies.get('userID')
      const posted = await axios.put(`http://localhost:3001/Car/profile/${userId}`,{
        fisrtname:fname, 
        Lastname:lname,
        DOB:dob,
        username:username,
        country:country,
        state:state,
        City:city,
        Area:ares,
        pineCode:pinecode,
        About :about
      }).then(
        (res)=>{
          console.log("done....")
          getUserProfile()
        }
      )
     
    }



const HandleDeleAccount = async()=>{
  const userId = Cookies.get('userID')
  const accountDel = await axios.delete(`http://localhost:3001/Car/users/${userId}`).then(
    (res)=>console.log(res)
  )
}





  const [profile, setProfile] = useState([]);

  const getUserProfile = async () => {
    try {
        const userId = Cookies.get('userID')
      const response = await axios.get(`http://localhost:3001/Car/dashboard/${userId}`)
       setProfile([response.data]);
      console.log(response.data);
    } catch (error) {
      console.log('Error in getting data', error);
    }
  };

  useEffect(() => {
    getUserProfile()
    }, []);


  return (
    <div className="profile-page" >
   
    {
      profile.length === 0 ?
      <Loader/>:(   <div className="get-all-user-data" style={{border:'2px solid',width:'400px',height:'1000px'}}>
      <div className="user-profile-image">
         <img src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg" alt="user"  width={'300px'}/> 
      </div>
      <div className="user-all-data">
      
        {
          profile.map( (item)=>
              <div key={item.id}>
                <h1>
                 Email : {item.email}
                </h1>
                <h1>
                Phone: {item.phone}
                </h1>
                <h1>
                Gender :  {item.gender}
                </h1>
                <h1>
                 Password :  {item.password}
                </h1>
                <h1>
                fisrtname:  {item.fisrtname}
                </h1>
                <h1>
                Lastname:   {item.Lastname}
                </h1>
                <h1>
                DOB:  {item.DOB}
                </h1>
                <h1>
                username: {item.username}
                </h1>
                <h1>
                country:  {item.country}
                </h1>
                <h1>
                state : {item.state}
                </h1>
                <h1>
                City :  {item.City}
                </h1>
                <h1>
                Area :  {item.Area}
                </h1>
                <h1>
                pineCode :  {item.pineCode}
                </h1>
                <h1>
                About :  {item.About}
                </h1>
              </div>
            
          )
        }
      </div>
    </div>)
      
    }


    
      <div className="updateDiv">
        <h1 style={{textAlign:'center',marginTop:'50px'}}>Update Data </h1>
        <input type="text" placeholder='firstName' style={{width:'350px',height:'40px' ,fontSize:'30px',margin:'10px'}} onChange={(e)=>setfname(e.target.value)}/><br/>
        <input type="text" placeholder='lastName' style={{width:'350px',height:'40px' ,fontSize:'30px',margin:'10px'}} onChange={(e)=>setlname(e.target.value)}/><br/>
        <input type="text" placeholder='DoB' style={{width:'350px',height:'40px' ,fontSize:'30px',margin:'10px'}} onChange={(e)=>setdob(e.target.value)}/><br/>
        <input type="text" placeholder='username' style={{width:'350px',height:'40px' ,fontSize:'30px',margin:'10px'}} onChange={(e)=>setusername(e.target.value)}/><br/>
        <input type="text" placeholder='country' style={{width:'350px',height:'40px' ,fontSize:'30px',margin:'10px'}} onChange={(e)=>setcountry(e.target.value)}/><br/>
        <input type="text" placeholder='state' style={{width:'350px',height:'40px' ,fontSize:'30px',margin:'10px'}} onChange={(e)=>setstate(e.target.value)}/><br/>
        <input type="text" placeholder='city' style={{width:'350px',height:'40px' ,fontSize:'30px',margin:'10px'}} onChange={(e)=>setcity(e.target.value)}/><br/>
        <input type="text" placeholder='Area' style={{width:'350px',height:'40px' ,fontSize:'30px',margin:'10px'}} onChange={(e)=>setarea(e.target.value)}/><br/>
        <input type="text" placeholder='pinecode' style={{width:'350px',height:'40px' ,fontSize:'30px',margin:'10px'}} onChange={(e)=>setpinecode(e.target.value)}/><br/>
        <input type="text" placeholder='About' style={{width:'350px',height:'40px' ,fontSize:'30px',margin:'10px'}} onChange={(e)=>setabout(e.target.value)}/><br/>
        <button style={{width:'350px',height:'40px' ,fontSize:'30px',margin:'10px',color:"white",background:'blue',border:'none',borderRadius:'10px',cursor:'pointer'}}
        onClick={handleSubmit}
        
        
        >
          Update
        </button>

<button onClick={HandleDeleAccount}
style={{width:'350px',height:'40px' ,fontSize:'30px',margin:'10px',color:"white",background:'blue',border:'none',borderRadius:'10px',cursor:'pointer'}}
>
  Delete Account
</button>




      </div>
     



    </div>
  );
}

export default Profile;
