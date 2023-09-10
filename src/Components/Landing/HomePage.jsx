import React, { useEffect, useRef, useState } from 'react';
import Hactchback from './Hactchback';
import { Hactback } from './HatchbackData';
import { CiTwitter } from 'react-icons/ci';
import './Home.css';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import Header from './Header';
import SignUp from './SignUp';
import LatestCars from './latestData.jsx';
import Latest from './Latest.jsx';
import UpComingData from './UpComingData.jsx';
import UpComing from './UpComing';
import HybridCars from './HybridCars';
import Hybrid from './Hybrid';
import axios from 'axios';
import add from "C:/Users/Pavan/OneDrive/Desktop/web_Dev/MEAN_STACK/GIT/INTERN_PROJECT/src/Components/LandingPageAssets/Rectangle103add.jpg"
function HomePage() {

  const [products,setProduct ] = useState([])
  const [userPrice,SetUserPrice] = useState(0)
const GetFilterData = async()=>{
    const getCars = await axios.get('http://localhost:3001/Car/getallcars').then(
       (res)=>{
        setProduct(res.data)
       }
    )
}

useEffect(()=>{
  GetFilterData()
},[])


const GetUserPrice = (e)=>{
      SetUserPrice(e.target.value)
      console.log(e.target.value)
}

const handleCart =async (PRODUCT)=>{
  const cartAdd = await axios.post("http://localhost:3001/Car/postCartitems",{
    image : PRODUCT.image,
    company : PRODUCT.company,
    Model : PRODUCT.Model,
    Price : PRODUCT.Price
  })
  

}



const filteredProducts = products.filter((product) => product.Price <= userPrice);
console.log(filteredProducts);


  const myDivRef = useRef(null);
 

const handleColor = ()=>{
  document.getElementById('btn-1').classList.toggle('colored')
}

const handleColored = ()=>{
  document.getElementById('btn-2').classList.toggle('colored')
}

  const Data1 = LatestCars.map((items) => {
    return <Latest key={items.id} Data1={items} />;
  });

  const Data = Hactback.map((item) => {
    return <Hactchback key={item.id} Data={item} />;
  });

  const Data2 = UpComingData.map((item) => {
    return <UpComing key={item.id} Data={item} />;
  });

  const Data3 = HybridCars.map((itemp) => {
    return <Hybrid key={itemp.id} Data3={itemp} />;
  });

  return (
    <>
      <SignUp />
      <Header />

      <div className="banner">
        <div className="choose-your-car">
          <h1>Find Your right Car</h1>
          <div className="banner-buttons">
            <button className="bhn-1" onClick={handleColor} id='btn-1' > New Car </button>
            <button className="bhn-2" onClick={handleColored} id='btn-2' >Used Car</button>
          </div>
          <div className="banner-radio">
            <input type="radio" name="Car" id="budget"  /> By Budget
            <input type="radio" name="Car" id="brand" /> By Brand
          </div>
          <div className="select">
          <select
        name="selectBudget"
        className="selectBudet"
        onChange={GetUserPrice}
      >
        <option>Select Budget</option>
        <option value={'2000000'}>2000000</option>
        <option value={'1500000'}>1500000</option>
        <option value={'1000000'}>1000000</option>
        <option value={'500000'}>500000</option>
        <option value={'300000'}>300000</option>
      </select>

            <select className="selectvehicletype">
              <option>Select Vehicles Type</option>
              <option>
                HatchBack
              </option>
              <option>Sedan</option>
              <option>Up Coming Cars</option>
              <option>Hybrid Cars</option>
              <option>Trusted Cars</option>
            </select>
          </div>

          <div className="Search">
            <button className="Search-button"
            onClick={() => myDivRef.current.scrollIntoView({ behavior: "smooth" })}
           
            >
              Search
              </button>
          </div>
        </div>
      </div>

{/* ---------------------------------------------------------- */}


<div className="fetch-filter-data-container">


   {
        filteredProducts.map((product) => (
           <div key={product.id} style={{margin:'20px',marginTop:'40px',display:'inline-block'  }}>
                <img src={product.image} alt="car" width={'250px'} height={'200px'} />
                <h1>
                  company :{product.company}
                </h1>
                <h1>
                  Model : {product.Model}
                </h1>
                <h1>
                  Price : {product.Price}
                </h1>
                <button onClick={()=>handleCart(product)} style={{width:'150px',height:'50px',border:'none',color:'white',background:'blue',cursor:'pointer'}}>
                    Buy Now
                </button>
          </div>
  ))}



</div>

{/* ----------------------------------------------- */}

<div className="advertisement">
<img src={add} alt='add'  style={{width:'1200px',height:'150px'}}             />

</div>
{/* -------------------CAR REGISTER------------------------------ */}
  
<div className="car-regigister" id='Hatch Back' >
    <h1>Enter Your car registration</h1>
    <button className='car-register-btn'>
      Get a call From us
    </button>

</div>


<div className="car-models-all">


<div className="car-lists">

<h1 style={{marginBottom:'40px'}}>Model</h1>
<h1>The most searched cars</h1>
<div className="car-name">
  <span>Hachback</span>
  <span>Sedan</span>
  <span>Suv</span>
  <span>Muv</span>
  <span>Luxury</span>
</div>



<div className="container" ref={myDivRef} >
{Data}
</div>
{/* ------------Latest Cars------------------------ */}


<h1 style={{margin:'30px'}}>
  Latest Cars
</h1>

<div className="container" >
  {Data1}
</div>

{/* ----------- View all latest Cars-------------- */}
<div className="view-all-latest-cars">
  <h1 style={{marginTop:'20px',marginLeft:'20px'}}>
  View all latest Cars
  </h1>
</div>

{/* ------------  Upcoming Cars--------------- */}
<h1 style={{marginBottom:'40px',marginTop:'40px'}}>
  Upcoming Cars
</h1>


<div className="container"   >
  {Data2}
</div>

<div className="view-all-latest-cars">
  <h1 style={{marginTop:'20px',marginLeft:'20px'}}>
  View all latest Cars
  </h1>
</div>

{/* -----------------Hybrid Cars------------------ */}


<h1 style={{marginBottom:'40px',marginTop:'40px'}}>
Hybrid Cars
</h1>

<div className="container" >
  {Data3}
</div>


{/* -------------------- trusted Used Cars By Budget ---------------------- */}

<h1 style={{marginBottom:'40px',marginTop:'40px'}}>
Trusted Used Cars by Budget 
</h1>

<div className="container" >
  {Data}
</div>


<div className="view-all-latest-cars">
  <h1 style={{marginTop:'20px',marginLeft:'20px'}}>
  View all latest Cars
  </h1>
</div>

{/* ---------------------------Brands-------------------------- */}


<h1 style={{marginBottom:'40px',marginTop:'40px'}}>
  Let's  select your car brand
</h1>

Tata


toyota

<div className="branded-cars">
  <img src={'src/Components/LandingPageAssets/marutiLOgo.png'} alt='branded-cars'style={{width:'200px',cursor:'pointer'    }} />
  <img src={"src/Components/LandingPageAssets/HondaLOgo.png"} alt='branded-cars'style={{width:'100px',cursor:'pointer'}} />
  <img src={"src/Components/LandingPageAssets/hyundaiLOgo.png"} alt='branded-cars'style={{width:'100px',cursor:'pointer'}} />
   <img src="src/Components/LandingPageAssets/renaultLOgo.png" alt='branded-cars' style={{width:'100px',cursor:'pointer'}}/>
  <img src={"src/Components/LandingPageAssets/TataLogo.png"} alt='branded-cars' style={{width:'100px',cursor:'pointer'}}/>
  <Link to={'/CarBuyer'}>
  <button className='branded-cars-button'>
    View all cars
  </button>
  </Link>
</div>


<div className="think-about-cars-to-buy">

  <img src="src\Components\LandingPageAssets\customerLogo.jpg" alt="person thinking"  style={{height: '200px',width: '250px'}}/>
  <div className="not-sure">
    <img src='src\Components\LandingPageAssets\logo.png' alt='logo' style={{width:'40px'}}/>
    <h2>
      Not Sure, Which car to buy?
    </h2>
    <p>
      Let us help you find the dream car
    </p>
  </div>

<Link to={'/Auction'} id="link">

<button className='show-me-be-car'>Show Me Be Car</button>
</Link>
</div>


<h1 style={{marginBottom:'40px',marginTop:'40px'}}>Cars by location</h1>

<h3 style={{marginBottom:'40px',marginTop:'40px'}}>
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
<h1 style={{textAlign:'center',marginBottom:'40px',marginTop:'40px'}}>What motivates us</h1>

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
    <img src="src\Components\LandingPageAssets\comment3.png" alt="profile" style={{borderRadius:'50%',width:'40px',height:'40px'}}/>
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

export default HomePage