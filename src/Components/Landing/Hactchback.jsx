import React from 'react'
import  './Home.css'
function Hactchback(prop) {
  return (

<div className='components'>
    <img src={prop.Data.image} alt='Hatchbac cars' />
    <h2 style={{marginLeft:'20px'}}>
        {prop.Data.name}
    </h2>
    <h2 style={{margin:'20px'}}>
        {prop.Data.price}
    </h2>
    <button className='hatch-button'>Check May Offers</button>
    </div>

  )
}

export default Hactchback