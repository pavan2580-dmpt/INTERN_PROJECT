import React from 'react'
import "./auction.css"
function Cars(prop) {
  return (
    <>
        <div className="CARD">
        <img src={prop.Data.image} alt="image" style={{width:'270px'}}/>
        <h3 style={{margin:'10px'}}>{prop.Data.name}</h3>
        <button className='auction-price'>{prop.Data.price}</button>
        <span>{prop.Data.dis}</span>
        <p style={{margin:'10px'}}>{prop.Data.use}</p>
        </div>
    
    </>
  )
}

export default Cars