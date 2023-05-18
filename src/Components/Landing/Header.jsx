import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom';
function Header() {
  return (
    <>
    <div className="navBar">
    <div className="company-logo">
             <img src='https://s3-alpha-sig.figma.com/img/c996/d451/525054cd60437e8892ca58223626a590?Expires=1685318400&Signature=c~9ACWlAxomZPADugJyuYTHIe4VLT-HK4fDoPv1DWe5EagzkqDirBuPE-Trk0Y9t9nPN7hy7Qa~BicHzlApIk9lKQYlrkfX5Vl-n-C2y4Ci8jdT6LG0xMpfUcgHBim1fCPTJklhGnyuWgDIEcB~AAJsjvkDW8Oqob6Zorwfr-jA~HxWHLVnsFiSCNKaFn5reUi1ZQJv4dNbV5k9r5Gg8QfC~C~J0qPo5aCkFEVyVPlCZ~kpg3TWwnt527g-e-FFV9iTuSSqNwGfWFZOucoNsyScNtvM09GZcy5A0Q63490ZD7OaY2Y7kaWyzEoUdJiC7X8YiV66MkwpVTWgaQgqOXQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt='Logo'  style={{width:'128px',height:'68px'}}/>            
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