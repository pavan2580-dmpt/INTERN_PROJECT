import React from 'react'
import { useNavigate } from 'react-router-dom'

function Latest(prop) {

  const navigate = useNavigate()

  return (
    <div className='components'>
    <img src={prop.Data1.image} alt='Hatchbac cars' />
    <h2 style={{marginLeft:'20px'}}>
        {prop.Data1.name}
    </h2>
    <h2 style={{margin:'20px'}}>
        {prop.Data1.price}
    </h2>
    <button className='hatch-button'
     onClick={()=>{
      navigate('\CarDetails' ,{state : {
        details : prop.Data1
      }})
    }}
    
    >Check May Offers</button>
    </div>
  )
}

export default Latest