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

            <img src="https://s3-alpha-sig.figma.com/img/3c42/3521/f6839424b42ad70c166b9cb7bbc6c11b?Expires=1685318400&Signature=WOUfLtEMfGDLg6lAptqmg64xYYExC4WhtzMt-w3YNy1lV7~-Pg-e1-k7qpsnLDYCEheMpv16a82oUPOP0ET5IpgMeE97CuZvmsXlN1eFrfwYjROlzVOYvGB4Oo6r3o-Oj4sVpmdgTLp509ZVhVN2eTp~KVATMnV0WA33AISJj4t8wKrVpsw9LSXmP93jw2wwPvza3IJJFHanFOgsZy4lFDRfqgHd5cIDCNUvLiPu6aMimE0O98dcTUTQW-yPzKeX2ohD0RXL4rhj-Q-FP9~Rpji3fIlwMph8hMCl8wHTKQ375qk1fiKEJSV4c2WDB75BosDCGsUMB2B5J2JrhV0XoQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="car-logo" style={{width:'120px',marginLeft:'120px',border:'1px solid grey'}} />
            <img src="https://s3-alpha-sig.figma.com/img/5030/504e/3bfefee82c259bcd124387c4c4d2e4eb?Expires=1685318400&Signature=LLVINsEcUxwiQf4TF1HLP8vl2IV~tprDCqS-iDppEG9HWgHTBcQhFbmx9y7FLPDxssDbBv6CZnWR9CGwU7vBSvDo6KiGsgmbvKMvMX73jVxHIocJse4TDrWuJBGoc320tsWrW5JjVIPx6NYvWZi~VLCjbg2WmG2EVK38xfVPtXnCHDbZPDxUsjgBtsrNdSsQ7U9~PuRlVsYtI7hN4FGCAYA-EkooUlrJ7bDdRNbhZ922RPngAZmjHaJoUbJRLbcQdoZ1VazOeEiZw3hbJhxVCouUmAU505y8nolVQ~HQWyXzT-oqm1ZVxS3q9B6qrkM5g2PhQyHBotgR5OAiPN-nmg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="car-logo" style={{width:'100px',margin:'10px',border:'1px solid grey'}} />
            <img src="https://s3-alpha-sig.figma.com/img/16ac/cf76/1ec88b0cb7ddb7809ad8a93f0e91eae9?Expires=1685318400&Signature=on6tBqavEMJhbymRH7QB7m5d1LrjihodOLcPfmezDWuTcUFmRro5ifUaafbx-BNNideOcNg8gbyGrHEMpVWqF8-7tUs91gNofw3aqfPnNM5~TAWnWlhpAr~bGygTLSBEOUHJ43eJbS3mIRIwT9cM~UK6xX-64U1yWZ8Z~mD4biPqazQwdO5Lvj7X8Q2UjZ6LvEi5xCTbfj63qlxsXtM38tZOt0gIP5V0uOoPmmtvRjThvmz8u~8FH9bbrlJK8jMD3r2UCMfpMo3ASH-yXC6MtY3LYvFlv4umCCjq0oBdCIKunjnkBWG3TGf~cWb28Z9m7aOZEZ2ForWl9mRCBI5fyg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="car-logo" style={{width:'100px',margin:'10px',border:'1px solid grey'}}/>
            <img src="https://s3-alpha-sig.figma.com/img/9bbc/54fd/a3b1e2c4aeb7e8a41e7ada748559220e?Expires=1685318400&Signature=iiZCT52L9UwYel6ixbHYHYbNM87zSo-Jo2ZfUCWk-8BMTDIUo0buzWUIiSYvq0JHlo8O0H2w9h2n2zWCZ59IYUJ2HtIHnXinp1bqQA3FSpk8UC-VW4UcMzMDQhxhJ11IYsS4NX9e71xiGxRfKOS6ShLaiW4uMSpaEGA67boeMtzZJYWPO~qbg4QqcbndzJDFJFpWTeY2o6DvBJU3kye1iPtJ8gpkr2X9sVPmkl-Ze1h6QgozZeOi2Yx3wJunJzNEoOkQP1eewnCortfD1TW5XlBZ7mx~FMLS6cHxk8VtW7FiXK5-RRcgxfL0ISfk4E0cTg3oPQMP4IxL4Br38vmxxg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="car-logo" style={{width:'100px',height:'100px',margin:'10px',border:'1px solid grey'}}/>
            <img src="https://s3-alpha-sig.figma.com/img/0e9b/402b/b758a8a3be9d6c0c048aedb053373966?Expires=1685318400&Signature=I3AMmHpLOgSVMiK~EqCXuId9RZPMZ8m~iicSzBU4sHQmA~Sbb1gdv65GZMJ0faGtJ73EW5n2wwOtK0szseAholBuhVfyeIjKdeHXL0LFJpK85MxCSvdl35klrUoh3GBlff2682GKJFsTkSO1x98Yvn69D04dWF4mhMVEH5OUzbLnZGde8RvTitctNWkiAn7kAfDrJ3GhMPuEXdpGEO01JmHLgxNwPuKJk0cxcycfzqHSgQueCMU74CPYcWd9EOacL-FeFoZcWFqYcRy1ozLqt5r8fB-UoO2Yw08lIwHAN0R-Da1UeoTgdcJBbgw53jHjGqMq30GdXu8fl6biQrBtjw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="car-logo" style={{width:'100px',border:'1px solid grey'}}/>
            <img src="https://s3-alpha-sig.figma.com/img/e077/b520/2872751978b28e2fb0add777847da8c7?Expires=1685318400&Signature=c73z-d1hWy0KJo6OauokH1HJOV-X~u~NuFI-OIUF9Nv0tHnLSJMsD9r2niQqytftyltc6dKn~qTRUcY0mgVB-ZfSeRa4c7GmZuqTq2iTyZK9vBrybEvUDfl~d1sLEq7eSWngHLbT5lawaIx9kBjvXIvTE4~y-oabUYR5zSUTzkOY3aLlTCo8jP7jceaRZTBa9~zAXCpEQD~~ZUHI8S04NCn0EG5jLRn4EKWk0-dHUaOJ4O9oAmYqKZm562FVyaPTH6QeNRPiBk1vLpL24y8su64GKN9GQoLc6o9xP3OGIzry93bahEHIlO1jIPoTtZRIwLsYkptcN4~7jjVVrBZd9A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="car-logo" style={{width:'100px',margin:'10px',border:'1px solid grey'}} />
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
            <img src="https://s3-alpha-sig.figma.com/img/fa16/1b31/91041b06b700af4d57ef28a339b98da3?Expires=1685318400&Signature=lmhmWImbGLixXYoIqlkboJrTXYPz8yGxgo6f6sxa7QAwBWSNX1SuYUq0GdnbSnS~3WqCoTqlg42Ex0HcgqSgfyAWeV--DHv21y7Lou8DBZQt9XgnzGj8t0o~Sh1omdI6yW6xjxhEoN9TAWpueUVLxUGXTINOrV-O2Jiw7pj1vqzo8uI6lywFba-Xn9OKKSfoYqOW3YAJuNz7s~XijQAcn~mt8a5eIh5dxYlN-ld3Hya8dDc7Pk8iJrUK8tsEgUWVNwbEsGWsrpxgL1mqk9bLOKe7a2oSeXMz6Ev8xe2HNFJiYgAcvhp91mmv~Fvp27E8Nmn~08GkBk3EwUPlZCXrNg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="car"  style={{width:'400px'}}   />
            <h2 style={{margin:'20px',marginLeft:'0px'}}>Get price online</h2>
            <p style={{margin:'20px',marginLeft:'0px'}}>
            Answer some questions about your car to help us
             understand its condition
            </p>
          </div>



          <div className="steps-to-sell">
            <img src="https://s3-alpha-sig.figma.com/img/d320/954c/06d30cfbb6e6ade3e151a4293b93295c?Expires=1685318400&Signature=AH~x5kMGjSntGdAiWmZmL6xxkuozgazOp0SlNONgCWTHeyr8kN7myXKATyg51qU9OM9D9fnA-qT0X~fb7ulnl9udjw2dmpTQPA9zBhn~ABZ3TUI0sjNlKatOSrXQg~ueXzBbZJ345RPpZj02zBLlEVCxKyj1tgrVI7IsIiA4ItCTVkcd-o~gfju3w~BfOZ7t0kSaKkvoUu8yvW7Q8k1yS2zJaqr~hpMSsiy28CxAzWHaYqhLqm8zCZ7UQIQWAvGzP2wwZl57QYqzx1KHbOoWb9mDMD3agvs0Z5BkAgD1mBgmRXlL~2oqCgdpNm-tCmi89cOo1ndtkoUsCQgLhGrTEw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="car" style={{width:'400px'}} />
            <h2 style={{margin:'20px',marginLeft:'0px'}}>Instant Payment</h2>
            <p style={{margin:'20px',marginLeft:'0px'}}>
            We'll transfer the amount to your bank account, 
            even before the car is picked up
            </p>
          </div>

          <div className="steps-to-sell">
            <img src="https://s3-alpha-sig.figma.com/img/b94e/51c9/07fc85ad631969a41301d9fd89fc91cc?Expires=1685318400&Signature=SZA34ptqm5a1xzpsCO6hsMupEl2x2aXgbdQUaGtZKGDzUq21UmpTI5L7vE2nI~nmv5dC2ogE0NuRn8dsjaOVzloDAIG55FkyH04Tszu-bnVycLxy53SVzcPsTPnxZLM7ddD1MS-rjUMTIkwsa2cRnm4cGp0xJ67LrzIBlJWS78GyITj9uSnIJVGv6laDm8GsGPMj93Yfdi3aVEJ07G2CeDVdKgBPq~mNH8HnUxiGzAua2OiLHrTmEAyql1MNuCNIoGbd79tNZ~prZVICZHeOqO7XMknGYGQxjl~Mw1eQukJSB8TvMeSSIsSPdef7PMQb4qLk0aO5tBHJUOPSWEH6Gw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="car" style={{width:'400px'}} />
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
    <img src='https://s3-alpha-sig.figma.com/img/df1d/a43c/80f568eeb1b7ffd35a32c265e68392c7?Expires=1685318400&Signature=jZGOUxzjwmWulFOdc4BLVTXordHVw~BUMJwWczXR42EEznqocfsMu7LWIb8nWebmK9zyQTJBxuFV-pT2aDzSoScurUpPpTO6YKLn31lCkuq1hCurK8FJ8iDClCacFLe7pjqPc8yyDaIoqLIgTWI9NClZtGIne9BVO1nNi9nIPmmghJvdU7CmyTk1AyZC~BcRChryKUNCe7EjOdTVkAm0hxV9zP0JmZj~fV33Sp76Q0HDzECFWkbWvfXOIH5~bR13wkj~PmFhZCeW3O9eOsGTGnUEAadfbSqS3atOR9KUW6OrKJK1x3A3UXWWBsL-AYS7PdWBGbdP0fC7UM0kcIDLaA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt='customer inside car' style={{width:'350px'}}/>
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
    <img src='https://s3-alpha-sig.figma.com/img/6d55/922a/6c4237be446be027718742b39c43e40c?Expires=1685318400&Signature=RsbpAr7IITS8a2v3CLhKYk8PjR8vDlL1hEtzGQ-p9yp6PJzH~Jzqjj9wrYlOxOn5elgSh13KqqcYgVXn8uLTj2Z2wpcVVzFjv8vqf3GHNNtFLDYsOSuk-JykwJfgw3X3zIpVCw~Ff8a2e-EahcVkDph11RGcYQcq0YG6ubHkl50ZIEWI-Jd-WXGTSgcYCi6lZ41KV5GcEt8o1cslu4tHsUas5819h1UQ0R~b518mWeL2YIIfwp838Ovj3iXv-c4pYuiBLsOtW6wOYfth6mkNHpY0zg5byw9QW7PtyQSrcLJijpwQP~m9N53yL2ayy5n4Pwy84WRC631UgETyvYCQiw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt='customer inside car' style={{width:'350px'}}/>
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
    <img src='https://s3-alpha-sig.figma.com/img/b69f/ce16/493c488ecea7557369ca4ce6db1aec8d?Expires=1685318400&Signature=pHhDdqlVLAObN~Xb3PjBI0UPAVMn7WcSkzIGsaMJxjF8xJlV-3Egr~r5hxsCDdTqFXs2BKo3KovlVwSPSj--ukSij6jIYs7NJ~FsBxdTWRCsT6Qfd2m9jMi8nwwTg1-K7DPD21aRU9Lg7qO8Um6QRGAUUg92~LnP4T3TrrI4d-zrSRefyhgHr-coXEboLF3GQZnLl7klBk6p9V0P5ecZuHzqSustIhIG2aG08V0arFt0blFMkl4DbM3-GCXYBF-jyOxDvojEYr1YoJbIxE8vOXwgLlsbm9-5rN3rqquY0OIcLoGToo9YeVHAHwnQVdO7tmd1Ac~xX9CGwX8c-C732A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt='customer inside car' style={{width:'350px'}}/>
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