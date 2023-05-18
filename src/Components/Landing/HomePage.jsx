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
<img src='https://s3-alpha-sig.figma.com/img/3786/afa5/f9fb4f05e709d42f6de4d23fbeaea6f5?Expires=1685318400&Signature=NO0q~fALT1iEKj2rk9AEEmpSQpIYL9Dca96PxCYPMkz5UCHANpp4BpepsgHtWHlrtT1WwwT6BRvvVJVyo~4NZBXW-OGYHDnzJ0Smq4ve7hFQ6fPcvEfv~O~nkT~lSYK~AbhFp92VVEQ4F6iqBbLkyXrJUKk9vhFUbwqItFLDtAYZQx2O-v0gUt6llY1yBysVLXmHEH-Lk06vrw57sgQ45BIRsB7NOp1uyvk991Yhi~pJeQ3dR4zykz3Vhmz0DBQxbNBn~t6LEGgHmP9PLfl~ujMPcFQN7DyuGRuo6Gh4~8BAxmltqb8v2LrXxccSyzOyCc0jvy5yHn0JD-gdKIj3dg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt='add'  style={{width:'1200px',height:'150px'}}             />

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


<div className="branded-cars">
  <img src='https://s3-alpha-sig.figma.com/img/3c42/3521/f6839424b42ad70c166b9cb7bbc6c11b?Expires=1685318400&Signature=WOUfLtEMfGDLg6lAptqmg64xYYExC4WhtzMt-w3YNy1lV7~-Pg-e1-k7qpsnLDYCEheMpv16a82oUPOP0ET5IpgMeE97CuZvmsXlN1eFrfwYjROlzVOYvGB4Oo6r3o-Oj4sVpmdgTLp509ZVhVN2eTp~KVATMnV0WA33AISJj4t8wKrVpsw9LSXmP93jw2wwPvza3IJJFHanFOgsZy4lFDRfqgHd5cIDCNUvLiPu6aMimE0O98dcTUTQW-yPzKeX2ohD0RXL4rhj-Q-FP9~Rpji3fIlwMph8hMCl8wHTKQ375qk1fiKEJSV4c2WDB75BosDCGsUMB2B5J2JrhV0XoQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt='branded-cars'style={{width:'200px',cursor:'pointer'    }} />
  <img src='https://s3-alpha-sig.figma.com/img/16ac/cf76/1ec88b0cb7ddb7809ad8a93f0e91eae9?Expires=1685318400&Signature=on6tBqavEMJhbymRH7QB7m5d1LrjihodOLcPfmezDWuTcUFmRro5ifUaafbx-BNNideOcNg8gbyGrHEMpVWqF8-7tUs91gNofw3aqfPnNM5~TAWnWlhpAr~bGygTLSBEOUHJ43eJbS3mIRIwT9cM~UK6xX-64U1yWZ8Z~mD4biPqazQwdO5Lvj7X8Q2UjZ6LvEi5xCTbfj63qlxsXtM38tZOt0gIP5V0uOoPmmtvRjThvmz8u~8FH9bbrlJK8jMD3r2UCMfpMo3ASH-yXC6MtY3LYvFlv4umCCjq0oBdCIKunjnkBWG3TGf~cWb28Z9m7aOZEZ2ForWl9mRCBI5fyg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt='branded-cars'style={{width:'100px',cursor:'pointer'}} />
  <img src='https://s3-alpha-sig.figma.com/img/0e9b/402b/b758a8a3be9d6c0c048aedb053373966?Expires=1685318400&Signature=I3AMmHpLOgSVMiK~EqCXuId9RZPMZ8m~iicSzBU4sHQmA~Sbb1gdv65GZMJ0faGtJ73EW5n2wwOtK0szseAholBuhVfyeIjKdeHXL0LFJpK85MxCSvdl35klrUoh3GBlff2682GKJFsTkSO1x98Yvn69D04dWF4mhMVEH5OUzbLnZGde8RvTitctNWkiAn7kAfDrJ3GhMPuEXdpGEO01JmHLgxNwPuKJk0cxcycfzqHSgQueCMU74CPYcWd9EOacL-FeFoZcWFqYcRy1ozLqt5r8fB-UoO2Yw08lIwHAN0R-Da1UeoTgdcJBbgw53jHjGqMq30GdXu8fl6biQrBtjw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt='branded-cars'style={{width:'100px',cursor:'pointer'}} />
  <img src='https://s3-alpha-sig.figma.com/img/e077/b520/2872751978b28e2fb0add777847da8c7?Expires=1685318400&Signature=c73z-d1hWy0KJo6OauokH1HJOV-X~u~NuFI-OIUF9Nv0tHnLSJMsD9r2niQqytftyltc6dKn~qTRUcY0mgVB-ZfSeRa4c7GmZuqTq2iTyZK9vBrybEvUDfl~d1sLEq7eSWngHLbT5lawaIx9kBjvXIvTE4~y-oabUYR5zSUTzkOY3aLlTCo8jP7jceaRZTBa9~zAXCpEQD~~ZUHI8S04NCn0EG5jLRn4EKWk0-dHUaOJ4O9oAmYqKZm562FVyaPTH6QeNRPiBk1vLpL24y8su64GKN9GQoLc6o9xP3OGIzry93bahEHIlO1jIPoTtZRIwLsYkptcN4~7jjVVrBZd9A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt='branded-cars' style={{width:'100px',cursor:'pointer'}}/>
  <img src='https://s3-alpha-sig.figma.com/img/9bbc/54fd/a3b1e2c4aeb7e8a41e7ada748559220e?Expires=1685318400&Signature=iiZCT52L9UwYel6ixbHYHYbNM87zSo-Jo2ZfUCWk-8BMTDIUo0buzWUIiSYvq0JHlo8O0H2w9h2n2zWCZ59IYUJ2HtIHnXinp1bqQA3FSpk8UC-VW4UcMzMDQhxhJ11IYsS4NX9e71xiGxRfKOS6ShLaiW4uMSpaEGA67boeMtzZJYWPO~qbg4QqcbndzJDFJFpWTeY2o6DvBJU3kye1iPtJ8gpkr2X9sVPmkl-Ze1h6QgozZeOi2Yx3wJunJzNEoOkQP1eewnCortfD1TW5XlBZ7mx~FMLS6cHxk8VtW7FiXK5-RRcgxfL0ISfk4E0cTg3oPQMP4IxL4Br38vmxxg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt='branded-cars' style={{width:'100px',cursor:'pointer'}}/>
  <Link to={'/CarBuyer'}>
  <button className='branded-cars-button'>
    View all cars
  </button>
  </Link>
</div>


<div className="think-about-cars-to-buy">

  <img src="https://s3-alpha-sig.figma.com/img/3247/dffd/bd673918b5738e97fe2df1160084164a?Expires=1685318400&Signature=IrR8mAlBdxVL~~QYwD6nEQgeyMXB~EOFW6AJwZsSPGt-4sly0MC7S2-OFh-ddBr4GSpUlIJ26qLWgJb59~sG1IoJa5ya1naFYsdtetRgQvrEH07nCM8f816adcUTb9GaBInDG8aK6LFJKMu2VtfL43-NJN2V1WSw86YrA5POx5M5bqPBicD98Yu7kwQxGJ9foCDwe0fwrzyKvRjjZAvpozQPCKEswtv8Uh2qVHwG6sOFU5ZQ9XfBWrYFXk0gzxnvxwG30aroWBaJTWnKkkk08ywLL1TzD1CHjNXU5PvZmQajI5KlGq9Vv3pIbWXx6hxrvbEDNfNsUbggBa-4Nwscrg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="person thinking"  style={{height: '200px',width: '250px'}}/>
  <div className="not-sure">
    <img src='https://s3-alpha-sig.figma.com/img/c996/d451/525054cd60437e8892ca58223626a590?Expires=1685318400&Signature=c~9ACWlAxomZPADugJyuYTHIe4VLT-HK4fDoPv1DWe5EagzkqDirBuPE-Trk0Y9t9nPN7hy7Qa~BicHzlApIk9lKQYlrkfX5Vl-n-C2y4Ci8jdT6LG0xMpfUcgHBim1fCPTJklhGnyuWgDIEcB~AAJsjvkDW8Oqob6Zorwfr-jA~HxWHLVnsFiSCNKaFn5reUi1ZQJv4dNbV5k9r5Gg8QfC~C~J0qPo5aCkFEVyVPlCZ~kpg3TWwnt527g-e-FFV9iTuSSqNwGfWFZOucoNsyScNtvM09GZcy5A0Q63490ZD7OaY2Y7kaWyzEoUdJiC7X8YiV66MkwpVTWgaQgqOXQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt='logo' style={{width:'40px'}}/>
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
  <img src="https://s3-alpha-sig.figma.com/img/97aa/0c57/3c55f3028b3a4abae179270f59b097dc?Expires=1685318400&Signature=l-Hv~bq1CQXhRMFcYVL0sMbZPkeOwUC7NlXgPsHBh9NdmgL6BFI4wAVXQqw-GQpw1YrjgIgfuAy0MQZJZIkqmeNqABeUV7ozELp2ifvYg2z7Tnw~HLH7o-yiH3Fn3cU8G9f7xQTs-IeeIe~inbxqMMVRsr~nnLbo31Y-JBiTsr8WG3uuWfAkqI8I1WEAYMj4sOIholm8XqlfKrM3JDZzCuTGThi7ncFYlpjrnfW2QV3LqZgJRGNVBYLH3j2yvgC5A6HHHtjVVmnEFzB-wPAe39-jGO4lRqK6yovICgfwbsmx8awOIlhrMWAKi9g2k82uR1xIkextPq5mY8tP5ruZrw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="locations" />
 <h2>Dhaka</h2>
 <h3>2 Car Hubs. 488</h3>
 <h3>Cars</h3>
</div>



<div className="location-images">
  <img src="https://s3-alpha-sig.figma.com/img/b970/f689/5eedf4e08d3c5ab2c68d4c7d06964f30?Expires=1685318400&Signature=U2ql9Unx~AMcyTFpBcVarGqA2IRndn-22qxmCn1pF94GPKBCgBs8hqfAUcOzaNvfMwI~tN1eFupGcX9DXbX6GPOnLV5LC9K3QQVzSoRN3-fWBwdck-6JiIF8nYnZaHBTBOe9fG--IoxJOqg9WWvV5jVlAv9k0Az7AwWDc3pLWtzVDtOpa3NWiPN9yuoUTLD6oEYWpqDJBQ1WXRGZraYcWbbP~LVUCNr7NrWj7gRe2Fuq9z08j6K37Ps0QZP-MyKIF1TO~SFyL5ywOOUHy8OQt6-NbGZpLyAKf6ku0TPIgCUP1pFdGXfMKSc727PAvOl23AyDekYOykUqkvOU47lrag__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="locations" />
 <h2>Chitagong</h2>
 <h3>26Car Hubs. 1126 Cars</h3>

</div>

</div>

{/* ----------------------------------------- */}
<h1 style={{textAlign:'center',marginBottom:'40px',marginTop:'40px'}}>What motivates us</h1>

<div className="comments">

<div className="reviews">
  <div className="header">
    <img src="https://s3-alpha-sig.figma.com/img/5380/7dec/66849a6845287267b550786d68950391?Expires=1685318400&Signature=Yg954CWOb77Xb97tIKwUf3PFG2GzzTKakC4VgOmayf027YsOroigvURRaz-bDXjgZ7UTVIU5aSdBFCSNl4TkC~E4IBPuGG0yM9I5bnV-QP4-Tp6h-~k8eUJIx1Dk8l~ganQ9RC3ZyyK260SmFaZHsVN6gAblAzN22er7ggDS68H-N2ImjaYJbWZaGCS1amf4aKkKM2Cah-c03gxHSZ33goQDDhFVGtJczrbWZLonmIJlWGgH3m7xMocdKxU~y1CHByTlLc3x9yGgFi-0M-jJn8lyMubkMSxuooYhlHrZRgK-g-GtCbqGaDJ6UqSmGOo53jUN-EKAhL7NLY9nMwyVVw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="profile" style={{borderRadius:'50%',width:'40px',height:'40px'}}/>
    <h2>Nishad jadhav</h2>
    <CiTwitter/>
  </div>
  <p style={{margin:'10px'}}>
  Thanks to the super helpful and professional team at AE MOTORS, I was able to get my dream car delivered on Akshay Tritiya. Had some payment issues but the Undri team resolved them efficiently.
  </p>
</div>


<div className="reviews">
  <div className="header">
    <img src="https://s3-alpha-sig.figma.com/img/294b/36cd/bdbf93788a5bd914b04469aeb554e910?Expires=1685318400&Signature=keAjUCIHo9kPi88mh5tlu9XM07h2sr8bCZ0IZsO1u9Sp3Tvt~BE9SniFPfbv2oTMF3fzMmXtAqDZo~bJn~i0QA-qpaDt9~IqwX6RNyD42plRI2pP1oMX3dPKivuibgeu5cI-KrBTEEv-bjozkPEIF5FyXXBIczG3WcZW1~rkghAiunrAnRwF~HkspPxCs5dkTOjM~OMmNSUr0Dg2KVzpTXaAuC1UxtfhU6jo4m-qjTCPOQJpdm1gJprODT6IUPfB19l0TgAN3p4n6pZtJCjfodIZZyRMEBHWndtaijjJBVuaGHBWAjVQtf9b664-JD8zS7zv4krpxzhcXkkT~uwT-A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="profile" style={{borderRadius:'50%',width:'40px',height:'40px'}}/>
    <h2>Ayan mitra</h2>
    <CiTwitter/>
  </div>
  <p style={{margin:'10px'}}>
  I am impressed with the efficient service provided by AE MOTORS. After logging a claim on their app, I was immediately assigned an engineer, who quickly resolved my car issue.  </p>
</div>


<div className="reviews">
  <div className="header">
    <img src="https://s3-alpha-sig.figma.com/img/369b/845f/f964a1c356cd935696b2803628242452?Expires=1685318400&Signature=jlUBCZCJok5BRcoVBKhB-rM6e-MYhKS4HSYLKe2kywAFZlKhtxtZELry9ePAx5ILkzdRhxhqTcLin0nq6lxCFx4K34aNNNg4x0CdSfBaY1ZCBegltJyEUsKYB5UP2Sw9GNBVJT~cMRSBN8ncXtTykLAxgbvjYGKAne5X5jPnINjo8M4OZVL4HVk0Uw8~mBZ0ntheeu2inxnxOKKDJKqKQ2vNt07k3MDhGef29Ft5UA61TlVKEmEpHJu6j~eaPpUYe06Ryc0mKRUMbqio5LVpqG3i-80GZDA4qGu9XUSUFhwRF1Qtf0gYQz152hleat1fpJxm4vbDC~e6b0VdBvypJw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="profile" style={{borderRadius:'50%',width:'40px',height:'40px'}}/>
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

export default HomePage