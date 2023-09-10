import React from 'react'
import './Seller.css'
import Footer from '../Landing/Footer'
import {FaWallet,FaAmazonPay} from 'react-icons/fa'
import {IoMdCheckmarkCircle} from 'react-icons/io'
import Header from '../Landing/Header'
import SignUp from '../Landing/SignUp'
import {Link} from 'react-router-dom'

function Seller() {
  return (
    <>
    <SignUp/>
    <Header/>



{/* -------------------------------------------------------------------------- */}
{/* -------------------------------------------------------------------------------- */}
<div className="banner">
      <div className="choose-your-car">

          <h1  >Find Your right Car</h1>

       <div className="banner-buttons">
       <button className='bhn-1'> New Car </button>
          <button className='bhn-2'>Used Car</button>
       </div>

          <div className="banner-radio">
          <input type="radio" name="Car" id="budget" /> By Budget
          <input type="radio" name="Car" id="brand" /> By Brand
          </div>

         <div className="select">
         <select name="selectBudet" className='selectBudet' >
            <option>Select Budet</option>
          <option>20,00,000</option>
          <option>15,00,000</option>
         <option>10,00,000</option>
         <option>5,00,000</option>
          <option>3,00,000</option>
          </select>

          <select name="selectvehicletype" className='selectvehicletype' >
            <option>Select Vehicles Type </option>
          <option>20,00,000</option>
          <option>15,00,000</option>
         <option>10,00,000</option>
         <option>5,00,000</option>
          <option>3,00,000</option>
    </select>
         </div>


<div className="Search">
<button className='Search-button'>
  Search
</button>
</div>
      </div>





      <div className="car-detalis-seller">
            <h1 style={{textAlign:'center',marginTop:'30px'}}>Enter Your Car number</h1>
            <form>
              <input type="text" name="car_Number" id="Car_no" placeholder='EgDl11A03345'/>
              <input type='submit' value={'GET CAR PRICE'} id='search-car'/>
            </form>
            <h2 style={{textAlign:'center',marginTop:'30px'}}>start with your car brand</h2>

            <img src="src\Components\LandingPageAssets\marutiLOgo.png" alt="car-logo" style={{width:'120px',marginLeft:'120px',border:'1px solid grey'}} />
            <img src="src\Components\LandingPageAssets\HondaLOgo.png" alt="car-logo" style={{width:'100px',margin:'10px',border:'1px solid grey'}} />
            <img src="src\Components\LandingPageAssets\hyundaiLOgo.png" alt="car-logo" style={{width:'100px',margin:'10px',border:'1px solid grey'}}/>
            <img src="src\Components\LandingPageAssets\renaultLOgo.png" alt="car-logo" style={{width:'100px',height:'100px',margin:'10px',border:'1px solid grey'}}/>
            <img src="src\Components\LandingPageAssets\TataLogo.png" alt="car-logo" style={{width:'100px',border:'1px solid grey'}}/>
            <img src="src\Components\LandingPageAssets\ToyotaLogo.png" alt="car-logo" style={{width:'100px',margin:'10px',border:'1px solid grey'}} />
            <button id="view-all-btn">View all cars</button>
      </div>


    </div>

<div className="car-register-data-button">
  <h1>
    Register you car to sell it online
  </h1>
  <Link to={'/Register your Car'}>
  <button className='sell-car-register-btn'>
    Register Car
  </button>
  </Link>
</div>

<div className="Seller-middle-body">
      <div className="Seller-content">
        <h1 style={{marginTop:'40px'}}>Sell in 3 easy steps</h1>
        <div className="seller-steps">

          <div className="steps-to-sell">
            <img src="src\Components\CarSeller\Sell-1.jpg" alt="car"  style={{width:'400px'}}   />
            <h2 style={{margin:'20px',marginLeft:'0px'}}>Get price online</h2>
            <p style={{margin:'20px',marginLeft:'0px'}}>
            Answer some questions about your car to help us
             understand its condition
            </p>
          </div>



          <div className="steps-to-sell">
            <img src="src\Components\CarSeller\Sell-2.png" alt="car" style={{width:'400px'}} />
            <h2 style={{margin:'20px',marginLeft:'0px'}}>Instant Payment</h2>
            <p style={{margin:'20px',marginLeft:'0px'}}>
            We'll transfer the amount to your bank account, 
            even before the car is picked up
            </p>
          </div>

          <div className="steps-to-sell">
            <img src="src\Components\CarSeller\sell-3.jpg" alt="car" style={{width:'400px'}} />
            <h2 style={{margin:'20px',marginLeft:'0px'}}>Free RC Transfer</h2>
            <p style={{margin:'20px',marginLeft:'0px'}}>
            We’ll handle all the paperwork for free,
             from loan clearance to RC transfer
            </p>
          </div>



        </div>
        <h1 style={{marginTop:'20px',marginBottom:'20px'}}>Why AE MOTORS?</h1>
<div className="why-are-we">

  <div className="Mortor-card">
    <h1 style={{marginTop:'20px',marginLeft:'20px'}}><FaWallet style={{color:'blue'}}/>
      Great Price
    </h1>
    <p style={{margin:'20px'}}>
    We have bought 10 lakh+ cars and that helps us 
    offer you a great price instantly
    </p>
  </div>


    
  <div className="Mortor-card">
    <h1 style={{marginTop:'20px',marginLeft:'20px'}}><FaAmazonPay style={{color:'blue'}}/>
     Instant Payment
    </h1>
    <p style={{margin:'20px'}}>
    We'll transfer the amount to your bank account, even before the car is picked up
     Answer some questions about your car to help us
     understand its condition
    </p>
  </div>



  <div className="Mortor-card">
    <h1 style={{marginTop:'20px',marginLeft:'20px'}}><IoMdCheckmarkCircle style={{color:'blue'}}/>
      Free RC Transfer
    </h1>
    <p style={{margin:'20px'}}>
    We’ll handle all the paperwork for free,
     from loan clearance to RC transfer
    </p>
  </div>











</div>

<h1 style={{marginTop:'100px'}}>
  7Lakh+ Happy customers
  </h1>
<div className="happy">
  
  <div className="customer-cards">
    <img src='src\Components\LandingPageAssets\happyCustomer1.png' alt='customer inside car' style={{width:'350px'}}/>
    <p style={{marginTop:'20px'}}>19 Mar 2023</p>
    <h3 style={{marginTop:'20px'}}>Sold From my office</h3>
    <p style={{marginTop:'20px'}}>
    Selliny my marcedis was hassle free thanks
to AE MOTORS. It ia a convenient platfrom 
whwre you can sell you car from the 
comfort of your own home
    </p>
<h3 style={{marginTop:'20px'}}>
  Aman dude
</h3>
<p style={{marginTop:'20px'}}> 
Sold Marcedes, BANGALORE
</p>
  </div>



  <div className="customer-cards">
    <img src='src\Components\Sellerassets\hp2.png' alt='customer inside car' style={{width:'350px'}}/>
    <p style={{marginTop:'20px'}}>12 Mar 2023</p>
    <h3 style={{marginTop:'20px'}}>Sold From my office</h3>
    <p style={{marginTop:'20px'}}>
    Selling my car on AE MOTORS Was a fastastic
Experience. The entire team was Proffessional
and the payment Process was seamless
    </p>
<h3 style={{marginTop:'20px'}}>
  Aman dude
</h3>
<p style={{marginTop:'20px'}}>
Sold Marcedes, BANGALORE
</p>
  </div>


  <div className="customer-cards">
    <img src='src\Components\Sellerassets\hp3.png' alt='customer inside car' style={{width:'350px'}}/>
    <p style={{marginTop:'20px'}}>19 Mar 2023</p>
    <h3>Sold From my office</h3>
    <p style={{marginTop:'20px'}}>
    i never expected the car selling process to 
so effortless. I want to express my gratitude
to AE MOTORS and their entire team for 
their out standing
    </p>
<h3 style={{marginTop:'20px'}}>
  Aman dude
</h3>
<p style={{marginTop:'20px'}}>
Sold Marcedes, BANGALORE
</p>
  </div>
</div>






<Footer/>
       
      </div>

</div>




    </>
  )
}

export default Seller