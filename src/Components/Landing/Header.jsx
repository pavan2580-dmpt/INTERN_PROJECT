import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom';
import logo from "../LandingPageAssets/logo.png"
function Header() {
  return (
    <>
    <div className="navBar">
    <div className="company-logo">
             <img src={logo} alt='Logo'  style={{width:'128px',height:'68px'}}/>            
    </div>    
        <div className="navigatio-buttons">
          <Link to={"/"} id='link'>
            <label id="Home-btn">Home</label>
          </Link>

          <Link to={"/CarBuyer"} id='link'>
            <label id="buy-btn">Buy</label>
            </Link>
            <Link to={"/Seller"} id='link'>
               <label id="sell-btn">Sell</label>
            </Link>
            <Link to={"/Auction"} id='link'>
               <label id="auction-btn">Auction</label>
            </Link>

            <Link to={"/Profile"} id='link'>
               <label id="profile-btn">Profile</label>
            </Link>
            <Link to={"/Cart"} id='link'>
               <label id="profile-btn">Cart</label>
            </Link>
        </div>
    </div> 
    
    </>
  )
}

export default Header