import React,{useState} from 'react'
import './carbuyer.css'
import Footer from '../Landing/Footer'
import {BsSearch} from 'react-icons/bs'
import {BiMap} from "react-icons/bi"
import {AiOutlineHeart} from "react-icons/ai"
import {CiTwitter} from "react-icons/ci"
import Header from '../Landing/Header'
import SignUp from "../Landing/SignUp"
import ShowMore from './Show-more'


function CarBuyer() {

    const [showComponent, setShowComponent] = useState(false);

    const toggleComponent = () => {
      setShowComponent(!showComponent);
    };

  return (
    <>
    <SignUp/>
    <Header/>

    {/* ---------------------------Banner for buyer------------------------------------------------------------------- */}

                <div className="banner-buyer">
                    <h3 id='dream-car-txt'>Your Dream Car Comes with</h3>
                    <h3 id='dowm-pay-txt'>Zero Down Payment</h3>

                   <div className="serach-fav-brand">
                    <BsSearch style={{marginLeft:'10px'}}/>
                   <input type="text" name="favourite" id="favourite" placeholder='Search For Your Favourite Brand'/>
                   </div>
                    <div className="car-company-logo">
                        <img src="src\Components\LandingPageAssets\marutiLOgo.png" alt="maruthi" style={{width:'100px'}}/>
                        <img src="src\Components\LandingPageAssets\HondaLOgo.png" alt="hyunai" style={{width:'100px'}}/>
                        <img src="src\Components\LandingPageAssets\hyundaiLOgo.png" alt="honda" style={{width:'100px'}}/>
                        <img src="src\Components\LandingPageAssets\renaultLOgo.png" alt="renault"style={{width:'100px'}}/>
                        <img src="src\Components\LandingPageAssets\TataLogo.png" alt="tata" style={{width:'100px'}}/>
                        <img src="src\Components\LandingPageAssets\ToyotaLogo.png" alt="toyota" style={{width:'100px'}}/>
                        <button className='view-all-cars-button'> View all cars</button>
                    </div>

                </div>



{/* ----------------------used cars ------------------------------------------- */}
                   <div className="Seller-body-container">


                        <div className="seller-inner-body">


                        <h1>
                        Used cars by category
                    </h1>
                    <div className="used-cars">
                            <div className="used-car-Card">
                                <h2>Budget</h2>
                                <p>
                                    Under 3 lakhs,3-5 lak
                                </p>
                            </div>


                            <div className="used-car-Card">
                                <h2>Year</h2>
                                <p>
                                   2022-2023
                                </p>
                            </div>


                            <div className="used-car-Card">
                                <h2>Body Type</h2>
                                <p>
                                    Hatchdack,sedan
                                </p>
                            </div>


                            <div className="used-car-Card">
                                <h2>Fuel Type</h2>
                                <p>
                                   Petrol,Diessel
                                </p>
                            </div>

</div>
                        <div className="used-cars">

                            <div className="used-car-Card">
                                <h2>Under</h2>
                                <p>
                                    Under 3 lakhs
                                </p>
                            </div>



                            <div className="used-car-Card">
                                <h2>From</h2>
                                <p>
                                     3 lakhs-5 lakhs
                                </p>
                            </div>



                            <div className="used-car-Card">
                                <h2>from</h2>
                                <p>
                                     5 lakhs-7 lakhs
                                </p>
                            </div>



                            <div className="used-car-Card">
                                <h2>Budget</h2>
                                <p>
                                    Under 3 lakhs,3-5 lak
                                </p>
                            </div>
                    </div>



{/* -------------------------------------------------------------------------------------------------------- */}


<h1>
Why AE MOTORS?
</h1>


<div className="about-AE">

    <div className="AE-cards">
    <img src="src\Components\CarBuyerAssets\why-1.jpg" alt="warrenty"style={{width:'370px'}} id='hover-AE-card' />
    <h2  style={{margin:'10px'}} >12-Month Warranty</h2>
    <p style={{margin:'10px'}} >
    Enjoy Peace OF MIND WITH OUR 12
month Warranty that is
Standard across all cars that we
sell</p>

<p style={{color: 'rgba(24, 119, 242, 1)',fontSize:'20px',marginTop:'20px',marginLeft:'10px',cursor:'pointer'}}>Know more</p>
</div>

<div className="AE-cards">
    <img src="src\Components\CarBuyerAssets\why-2.jpg" alt="warrenty" style={{width:'370px'}} id='hover-AE-card' />
    <h2 style={{margin:'10px'}} >12-Month Warranty</h2>
    <p style={{margin:'10px'}} >
    Enjoy Peace OF MIND WITH OUR 12
month Warranty that is
Standard across all cars that we
sell</p>
<p style={{color: 'rgba(24, 119, 242, 1)',fontSize:'20px',marginTop:'20px',marginLeft:'10px',cursor:'pointer'}}>Know more</p>
</div>



<div className="AE-cards">
    <img src="src\Components\CarBuyerAssets\why-3.jpg" alt="warrenty" style={{width:'370px'}} id='hover-AE-card'/>
    <h2 style={{margin:'10px'}} >12-Month Warranty</h2>
    <p style={{margin:'10px'}} >
    Enjoy Peace OF MIND WITH OUR 12
month Warranty that is
Standard across all cars that we
sell</p>
<p style={{color: 'rgba(24, 119, 242, 1)',fontSize:'20px',marginTop:'20px',marginLeft:'10px',cursor:'pointer'}}>Know more</p>
</div>


</div>


<h1 style={{marginTop:'100px'}}>
    Buy in 3 easy steps
</h1>
                <div className="buy-car-eazy">

                        <div className="easy-car-card" >
                            <img src="src\Components\CarBuyerAssets\buy-1.jpg" alt="car" style={{width:'400px'}} />
                            <h1 style={{margin:'10px'}} >1.Find the perfect car</h1>
                            <p style={{margin:'10px'}}>
                            Seamlessly browse thousands of MRL Certified cars
                            </p>
                        </div>



                        <div className="easy-car-card">
                            <img src="src\Components\CarBuyerAssets\buy-2.jpg" alt="car" style={{width:'400px'}}/>
                            <h1 style={{margin:'10px'}} >Free Test Drive from anywhere </h1>
                            <p style={{margin:'10px'}}>
                            We'll bring the car to you, or you can visit a CARS24 hub for free
                            </p>
                        </div>




                        <div className="easy-car-card">
                            <img src="src\Components\CarBuyerAssets\buy-3.jpg" alt="car" style={{width:'400px'}} />
                            <h1 style={{margin:'10px'}} >Buy it your way</h1>
                            <p style={{margin:'10px'}}>
                            You can pay in full or have it financed, the choice is yours

                            </p>
                        </div>

                </div>



{/* -----------------More Cars--------------------- */}

<div className="more-cars-detalis">

    <div className="car-detalis-cards">
        <img src="src\Components\CarBuyerAssets\VAC-1.jpg" alt="suv"  style={{width:'400px'}}/>
        <div className="car-name">
            <h2>2023 mahindra scorpio</h2>
            <AiOutlineHeart/>
        </div>
        <p style={{margin:'10px',fontWeight:'600'}}>S3 Manual</p>
        <div className="distance-car">
        <p>44,690 KM</p>
        <p>1ST OWNER</p>
        <p>DIESEL</p>
        <p>UP-14</p>
        </div>
    <div className="car-costs">
        <p style={{color:' rgba(34, 141, 203, 0.6)',fontWeight:'600'}}>$17.416/month</p>
        <p style={{fontWeight:'600'}}>$9,15.000</p>
    </div>
    <p style={{textDecoration:'line-through',margin:'10px',fontWeight:'600'}}>$18.345/month</p>
    <p style={{margin:'10px',fontWeight:'600'}}> <BiMap/> Metro,Sector 5,Naidu</p>
    </div>




    <div className="car-detalis-cards">
        <img src="src\Components\CarBuyerAssets\VAC-2.jpg" alt="suv"  style={{width:'400px'}}/>
        <div className="car-name">
            <h2>2023  Maruthi</h2>
            <AiOutlineHeart/>
        </div>
        <p style={{margin:'10px',fontWeight:'600'}}>S3 Manual</p>
        <div className="distance-car">
        <p>44,690 KM</p>
        <p>1ST OWNER</p>
        <p>DIESEL</p>
        <p>UP-14</p>
        </div>
    <div className="car-costs">
        <p style={{color:' rgba(34, 141, 203, 0.6)',fontWeight:'600'}}>$17.416/month</p>
        <p style={{fontWeight:'600'}}>$9,15.000</p>
    </div>
    <p style={{textDecoration:'line-through',margin:'10px',fontWeight:'600'}}>$18.345/month</p>
    <p style={{margin:'10px',fontWeight:'600'}}> <BiMap/> Metro,Sector 5,Naidu</p>
    </div>






    <div className="car-detalis-cards">
        <img src="src\Components\CarBuyerAssets\VAC-3.jpg" alt="suv"  style={{width:'400px'}}/>
        <div className="car-name">
            <h2>2020 Maruthi  </h2>
            <AiOutlineHeart/>
        </div>
        <p style={{margin:'10px',fontWeight:'600'}}>S3 Manual</p>
        <div className="distance-car">
        <p>44,690 KM</p>
        <p>1ST OWNER</p>
        <p>DIESEL</p>
        <p>UP-14</p>
        </div>
    <div className="car-costs">
        <p style={{color:' rgba(34, 141, 203, 0.6)',fontWeight:'600'}}>$17.416/month</p>
        <p style={{fontWeight:'600'}}>$9,15.000</p>
    </div>
    <p style={{textDecoration:'line-through',margin:'10px',fontWeight:'600'}}>$18.345/month</p>
    <p style={{margin:'10px',fontWeight:'600'}}> <BiMap/> Metro,Sector 5,Naidu</p>
    </div>


   {showComponent && <ShowMore/>}
    


</div>



<div className="view-more-seller">
    <button className='more-car-button'  onClick={toggleComponent}>
        View All Cars 
    </button>
</div>



{/* ------------------------------------------------------------------------------------- */}

<h1 style={{margin:'20px'}}>Cars by location</h1>

<h3 style={{margin:'20px'}}>
  Cars & hubsacross India
</h3>

<div className="locations">
<div className="location-images">
  <img src="src\Components\LandingPageAssets\Dhaka.jpg" alt="locations" />
 <h2>Dhaka</h2>
 <h3>2 Car Hubs. 488</h3>
 <h3>Cars</h3>
</div>



<div className="location-images">
  <img src="src\Components\LandingPageAssets\chitagong.jpg" alt="locations" />
 <h2>Chitagong</h2>
 <h3>26Car Hubs. 1126 Cars</h3>

</div>

</div>





{/* ----------------------------------------- */}
<h1 style={{textAlign:'center'}}>What motivates us</h1>

<div className="comments">

<div className="reviews">
  <div className="header">
    <img src="src\Components\LandingPageAssets\comment1.png" alt="profile" style={{borderRadius:'50%',width:'40px',height:'40px'}}/>
    <h2>Nishad jadhav</h2>
    <CiTwitter/>
  </div>
  <p style={{margin:'10px'}}>
  Thanks to the super helpful and professional team at AE MOTORS, I was able to get my dream car delivered on Akshay Tritiya. Had some payment issues but the Undri team resolved them efficiently.
  </p>
</div>


<div className="reviews">
  <div className="header">
    <img src="src\Components\LandingPageAssets\comment2.png" alt="profile" style={{borderRadius:'50%',width:'40px',height:'40px'}}/>
    <h2>Ayan mitra</h2>
    <CiTwitter/>
  </div>
  <p style={{margin:'10px'}}>
  I am impressed with the efficient service provided by AE MOTORS. After logging a claim on their app, I was immediately assigned an engineer, who quickly resolved my car issue.  </p>
</div>


<div className="reviews">
  <div className="header">
    <img src="src\Components\LandingPageAssets\footercar3.png" alt="profile" style={{borderRadius:'50%',width:'40px',height:'40px'}}/>
    <h2>aman dubay</h2>
    <CiTwitter/>
  </div>
  <p style={{margin:'10px'}}>
  I am impressed with the efficient service provided by AE MOTORS. After logging a claim on their app, I was immediately assigned an engineer, who quickly resolved my car issue.  </p>
</div>
</div>



<h1 style={{marginTop:'100px'}}>
  10Lakh+ Happy customers
  </h1>
<div className="happy-customers">
  
  <div className="customer-cards">
    <img src='src\Components\Sellerassets\hp1.png' alt='customer inside car' style={{width:'350px'}}/>
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
    <p style={{marginTop:'20px'}}>19 Mar 2023</p>
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

export default CarBuyer