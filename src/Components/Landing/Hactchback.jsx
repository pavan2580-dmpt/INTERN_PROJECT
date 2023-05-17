import React from 'react'
import  './Home.css'
import { useNavigate } from 'react-router-dom'
function Hactchback(prop) {

  const navigate = useNavigate()
  return (



<div className='components' >
    <img src={prop.Data.image} alt='Hatchbac cars' />
    <h2 style={{marginLeft:'20px'}}>
        {prop.Data.name}
    </h2>
    <h2 style={{margin:'20px'}}>
        {prop.Data.price}
    </h2>
    <button className='hatch-button'
     onClick={()=>{
      navigate('\CarDetails' ,{state : {
        details : prop.Data
      }})
    }}
    
    >Check May Offers</button>
    </div>

  )
}

export default Hactchback