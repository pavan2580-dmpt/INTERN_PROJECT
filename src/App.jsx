import React from 'react'
import Seller from './Components/CarSeller/seller'
import HomePage from './Components/Landing/HomePage'
import CarBuyer from './Components/CarBuyer/CarBuyer'
import Auction from './Components/Auction/Auction'
import { BrowserRouter,Router,Route, Routes } from 'react-router-dom'
import Login from './Components/Accounts/Login'
import Register from './Components/Accounts/Register'
import CarRegister from './Components/CarSeller/carRegister'
import Dummy from './Components/Landing/Dummy'
import Profile from './Components/DashBoard.jsx/Profile'
import Cart from './Components/Cart/Cart'
function App() {

  


  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/Seller' element={<Seller/>} />
          <Route path='/CarBuyer' element={<CarBuyer/>} />
          <Route path='/Auction' element={<Auction/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/Register' element={<Register/>} />
          <Route path='/Register your Car' element={<CarRegister/>} />
          <Route path='/CarDetails' element={<Dummy/>}/>
          <Route path='/Profile' element={<Profile/>} />
          <Route path='/Cart' element={<Cart/>}  />
        </Routes>
    
    
    </BrowserRouter>
   
    
    </>
  )
}

export default App