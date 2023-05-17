import React from 'react'

function Hybrid(prop) {
  return (
   <>
   
   <div className='components'>
    <img src={prop.Data3.image} alt='Hatchbac cars' />
    <h2 style={{marginLeft:'20px'}}>
        {prop.Data3.name}
    </h2>
    <h2 style={{margin:'20px'}}>
        {prop.Data3.price}
    </h2>
    <button className='hatch-button'>Check May Offers</button>
    </div>
   
   
   </>
  )
}

export default Hybrid