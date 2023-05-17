import React from 'react'
import { useLocation } from 'react-router-dom'

function Dummy() {
    const location = useLocation()
    console.log(location)
  return (
    <div>Dummy</div>
  )
}

export default Dummy