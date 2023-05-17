import React from 'react'

function Latest(prop) {
  return (
    <div className='components'>
    <img src={prop.Data1.image} alt='Hatchbac cars' />
    <h2 style={{marginLeft:'20px'}}>
        {prop.Data1.name}
    </h2>
    <h2 style={{margin:'20px'}}>
        {prop.Data1.price}
    </h2>
    <button className='hatch-button'>Check May Offers</button>
    </div>
  )
}

export default Latest