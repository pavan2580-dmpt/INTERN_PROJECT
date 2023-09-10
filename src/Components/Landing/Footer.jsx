import React from 'react'
import "./Home.css"
import {FaCar,FaUserFriends} from'react-icons/fa'
import {TbReportAnalytics} from'react-icons/tb'
import {BiMap} from 'react-icons/bi'
import {BsTelephoneFill,BsInstagram,BsFacebook} from'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {CiTwitter} from 'react-icons/ci'
import CarsWhite from "../LandingPageAssets/vehicaldataImageCar.png"
import whiteCar from "../LandingPageAssets/whiteGradientCar.png"
import footer1 from"../LandingPageAssets/footerCar1.png"
import footer2 from"../LandingPageAssets/footerCar2.png"
import footer3 from"../LandingPageAssets/footerCar3.png"


function Footer() {
  return (
    <div className='Footer-body'>
        <h1 style={{textAlign:'center',marginTop:'30px'}}>
        DONALD BROOKS, Customer Ferrari 488 GTB 2 OWNER
        
        </h1>
    
    <div className="Line-center">
    <div style={{border:'2px solid black',height:'10px',width:'800px',borderTop:'none',borderLeft:'none',borderRight:'none'}}></div>
    <p style={{marginTop:'20px'}}>
    Donec faclists Velit eust. Phasellus cons quat Aenan Vitaequam vivamus et nunc. ivunc consequem velde</p>

<p style={{marginTop:'20px'}}>melus imperdiet lac ina. Nam retrumcongue dlam vesti bulum acada risuseros auctor egestas morbis sem</p>
<p style={{marginTop:'20px'}}>
Magha vivera quis sollicitudin quis consectues quis nec mugha
    </p>
    </div>

<img src={whiteCar} alt='car' style={{marginTop:'50px'}}/>

<div className="car-detalied-footer">

<div className="footer-card">
<FaCar size={50} style={{border:'2px solid',borderRadius:'50%'}}/>
<h1>5000</h1>
<h1>VEHICLES IN STOCK</h1>
</div>



<div className="footer-card">
<FaUserFriends size={70} style={{border:'2px solid',borderRadius:'50%'}}/>
<h1>3100</h1>
<h1>HAPPY CUSTOMER REVIEWS</h1>
</div>



<div className="footer-card">
<TbReportAnalytics  size={70} style={{border:'2px solid',borderRadius:'50%'}}  />
<h1>54</h1>
<h1>DEALER BRANCHES</h1>
</div>
<div className="footer-card-img">
    <img src={CarsWhite} alt='car' style={{width:'345px'}}/>
</div>



</div>
    








<div className="bottom">
    <div className="bottom-card">
        <h1 style={{color:'rgba(34, 141, 203, 1)',marginBottom:'20px'}}>LATEST AUTOS </h1>
        <div className="SUB-CARD-BOTTOM">
            <img src={footer1} alt="car" style={{width:'150px'}} />
            <h3>Mercedes AMG-GTS</h3>
        </div>

        <div className="SUB-CARD-BOTTOM">
            <img src={footer2} alt="car" style={{width:'150px'}} />
            <h3>Mercedes AMG-GTS</h3>
        </div>

        <div className="SUB-CARD-BOTTOM">
            <img src={footer3} alt="car" style={{width:'150px'}} />
            <h3>Mercedes AMG-GTS</h3>
        </div>

    </div>





    <div className="bottom-card">
        <h1 style={{color:'rgba(34, 141, 203, 1)',marginBottom:'20px'}}>FROM TWITTER</h1>
        <div className="SUB-CARD-BOTTOM">
          <p>
          Duis scelerisque aliquet ante donec libero pede porttitor dacu
          <h3>20 minutes ago</h3>
          </p>
        </div>

        <div className="SUB-CARD-BOTTOM">
        <p>
          Duis scelerisque aliquet ante 
          donec libero pede
           porttitor dacu
           <h3>22 minutes ago</h3>
          </p>
          
        </div>

        <div className="SUB-CARD-BOTTOM">
        <p>
          Duis scelerisque aliquet ante donec libero pede porttitor dacu
          <h3>24 minutes ago</h3>
          </p>
        </div>

    </div>










    <div className="bottom-card">
        <h1 style={{color:'rgba(34, 141, 203, 1)',marginBottom:'20px'}}> CONTACT US</h1>
        <div className="SUB-CARD-BOTTOM">
          <p><BiMap/>
          Manujendra road kolkata 700126
          </p>
        </div>

        <div className="SUB-CARD-BOTTOM">
        <p><BsTelephoneFill/>
        Phone: 1-800- 624-5462
        
          </p>
          
        </div>

        <div className="SUB-CARD-BOTTOM">
        <p>
       <MdEmail/> 
        Email: info@AE MOTORS.com
          </p>
        </div>
        <div className="back-btn-img">
       <button className='map-btn'>
        Open the Map
       </button>
        </div>

    </div>



</div>


<div className="Footer-end-part">

    <img src='src\Components\LandingPageAssets\logo.png' alt='logo' style={{width:'100px',marginLeft:'100px'}}/>
    <div className="social-media">
        <BsFacebook size={40}/>
        <CiTwitter size={40}/>
        <BsInstagram size={40}/>

    </div>
</div>




    </div>
  )
}

export default Footer