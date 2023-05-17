import React from 'react'
import './carbuyer.css'
import Footer from '../Landing/Footer'
import {BsSearch} from 'react-icons/bs'
import {BiMap} from "react-icons/bi"
import {AiOutlineHeart} from "react-icons/ai"
import {CiTwitter} from "react-icons/ci"
import Header from '../Landing/Header'
import SignUp from "../Landing/SignUp"

function CarBuyer() {
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
                        <img src="https://s3-alpha-sig.figma.com/img/3c42/3521/f6839424b42ad70c166b9cb7bbc6c11b?Expires=1685318400&Signature=WOUfLtEMfGDLg6lAptqmg64xYYExC4WhtzMt-w3YNy1lV7~-Pg-e1-k7qpsnLDYCEheMpv16a82oUPOP0ET5IpgMeE97CuZvmsXlN1eFrfwYjROlzVOYvGB4Oo6r3o-Oj4sVpmdgTLp509ZVhVN2eTp~KVATMnV0WA33AISJj4t8wKrVpsw9LSXmP93jw2wwPvza3IJJFHanFOgsZy4lFDRfqgHd5cIDCNUvLiPu6aMimE0O98dcTUTQW-yPzKeX2ohD0RXL4rhj-Q-FP9~Rpji3fIlwMph8hMCl8wHTKQ375qk1fiKEJSV4c2WDB75BosDCGsUMB2B5J2JrhV0XoQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="maruthi" style={{width:'100px'}}/>
                        <img src="https://s3-alpha-sig.figma.com/img/5030/504e/3bfefee82c259bcd124387c4c4d2e4eb?Expires=1685318400&Signature=LLVINsEcUxwiQf4TF1HLP8vl2IV~tprDCqS-iDppEG9HWgHTBcQhFbmx9y7FLPDxssDbBv6CZnWR9CGwU7vBSvDo6KiGsgmbvKMvMX73jVxHIocJse4TDrWuJBGoc320tsWrW5JjVIPx6NYvWZi~VLCjbg2WmG2EVK38xfVPtXnCHDbZPDxUsjgBtsrNdSsQ7U9~PuRlVsYtI7hN4FGCAYA-EkooUlrJ7bDdRNbhZ922RPngAZmjHaJoUbJRLbcQdoZ1VazOeEiZw3hbJhxVCouUmAU505y8nolVQ~HQWyXzT-oqm1ZVxS3q9B6qrkM5g2PhQyHBotgR5OAiPN-nmg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="hyunai" style={{width:'100px'}}/>
                        <img src="https://s3-alpha-sig.figma.com/img/16ac/cf76/1ec88b0cb7ddb7809ad8a93f0e91eae9?Expires=1685318400&Signature=on6tBqavEMJhbymRH7QB7m5d1LrjihodOLcPfmezDWuTcUFmRro5ifUaafbx-BNNideOcNg8gbyGrHEMpVWqF8-7tUs91gNofw3aqfPnNM5~TAWnWlhpAr~bGygTLSBEOUHJ43eJbS3mIRIwT9cM~UK6xX-64U1yWZ8Z~mD4biPqazQwdO5Lvj7X8Q2UjZ6LvEi5xCTbfj63qlxsXtM38tZOt0gIP5V0uOoPmmtvRjThvmz8u~8FH9bbrlJK8jMD3r2UCMfpMo3ASH-yXC6MtY3LYvFlv4umCCjq0oBdCIKunjnkBWG3TGf~cWb28Z9m7aOZEZ2ForWl9mRCBI5fyg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="honda" style={{width:'100px'}}/>
                        <img src="https://s3-alpha-sig.figma.com/img/9bbc/54fd/a3b1e2c4aeb7e8a41e7ada748559220e?Expires=1685318400&Signature=iiZCT52L9UwYel6ixbHYHYbNM87zSo-Jo2ZfUCWk-8BMTDIUo0buzWUIiSYvq0JHlo8O0H2w9h2n2zWCZ59IYUJ2HtIHnXinp1bqQA3FSpk8UC-VW4UcMzMDQhxhJ11IYsS4NX9e71xiGxRfKOS6ShLaiW4uMSpaEGA67boeMtzZJYWPO~qbg4QqcbndzJDFJFpWTeY2o6DvBJU3kye1iPtJ8gpkr2X9sVPmkl-Ze1h6QgozZeOi2Yx3wJunJzNEoOkQP1eewnCortfD1TW5XlBZ7mx~FMLS6cHxk8VtW7FiXK5-RRcgxfL0ISfk4E0cTg3oPQMP4IxL4Br38vmxxg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="renault"style={{width:'100px'}}/>
                        <img src="https://s3-alpha-sig.figma.com/img/0e9b/402b/b758a8a3be9d6c0c048aedb053373966?Expires=1685318400&Signature=I3AMmHpLOgSVMiK~EqCXuId9RZPMZ8m~iicSzBU4sHQmA~Sbb1gdv65GZMJ0faGtJ73EW5n2wwOtK0szseAholBuhVfyeIjKdeHXL0LFJpK85MxCSvdl35klrUoh3GBlff2682GKJFsTkSO1x98Yvn69D04dWF4mhMVEH5OUzbLnZGde8RvTitctNWkiAn7kAfDrJ3GhMPuEXdpGEO01JmHLgxNwPuKJk0cxcycfzqHSgQueCMU74CPYcWd9EOacL-FeFoZcWFqYcRy1ozLqt5r8fB-UoO2Yw08lIwHAN0R-Da1UeoTgdcJBbgw53jHjGqMq30GdXu8fl6biQrBtjw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="tata" style={{width:'100px'}}/>
                        <img src="https://s3-alpha-sig.figma.com/img/e077/b520/2872751978b28e2fb0add777847da8c7?Expires=1685318400&Signature=c73z-d1hWy0KJo6OauokH1HJOV-X~u~NuFI-OIUF9Nv0tHnLSJMsD9r2niQqytftyltc6dKn~qTRUcY0mgVB-ZfSeRa4c7GmZuqTq2iTyZK9vBrybEvUDfl~d1sLEq7eSWngHLbT5lawaIx9kBjvXIvTE4~y-oabUYR5zSUTzkOY3aLlTCo8jP7jceaRZTBa9~zAXCpEQD~~ZUHI8S04NCn0EG5jLRn4EKWk0-dHUaOJ4O9oAmYqKZm562FVyaPTH6QeNRPiBk1vLpL24y8su64GKN9GQoLc6o9xP3OGIzry93bahEHIlO1jIPoTtZRIwLsYkptcN4~7jjVVrBZd9A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="toyota" style={{width:'100px'}}/>
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
    <img src="https://s3-alpha-sig.figma.com/img/340e/084a/ff07c66fbd0b9167a0c7f37f2bcdf031?Expires=1685318400&Signature=QDqZMXj0taNXuq8ztaRxx68ZuspBUlGgPYXtV22OSPkRVoiFvQg6PdX~g5PkVpwL0hJkSrg-pfNDavTqYh3YuYyAGOPfSPQb7bhngUqQryM9KrY6xyuKiZbOVpMq1j2UhBECH2mzqdP-0aj-tIe1Yujkz1nJc2R9WzMgqOQD9pjhrnRlVMZvMCTXSqAs1yc35EGc4z2ulMsaYpXSrhiVtPy5~Fitm32lSVsPeFbDLA~tP2xS5iHhAPQy5Bs3T3CeTg-4kiyuTHF-OtxqM2wA1BboLwhvex1byHhVkMIOGHYRIEOj4ak6nBEzxIAJtWwrEsjOQA5tPiVpBlE74yoEHQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="warrenty"style={{width:'370px'}} id='hover-AE-card' />
    <h2  style={{margin:'10px'}} >12-Month Warranty</h2>
    <p style={{margin:'10px'}} >
    Enjoy Peace OF MIND WITH OUR 12
month Warranty that is
Standard across all cars that we
sell</p>

<p style={{color: 'rgba(24, 119, 242, 1)',fontSize:'20px',marginTop:'20px',marginLeft:'10px',cursor:'pointer'}}>Know more</p>
</div>

<div className="AE-cards">
    <img src="https://s3-alpha-sig.figma.com/img/f48f/841b/49b3ea891364a4bf2f2ca9c63a62a957?Expires=1685318400&Signature=TnoK-I~A-bb0V~~4zwdQJC8SOZqxx7TIC9FNXQDWlHDjK19ljx~CLloHQP6Y~PmuF45RIc6jd12KlJIQNZ~MFBrlAHfABaPMma5mgqS-o97--wWN~jvM2xh2vSGOUdvCf6nbjlyQd45UnTTN1RHmHc~iF9FlPvMIE9XOsMb2OM0NbRA7Vf9dsRWYret1s-0HkHI9s9zPqMt3DCcRggdAnkB53wWP0f79cQegnr5xivpkiUBuCUbWfGGCo~8JCw0UbKmK3NJBk16lGVyedAovELfmWIG6P2hdmOxvu0esGyinf3h6wScdZljetHkoFRS42PVeJyoiYmOvdstHgVGNCA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="warrenty" style={{width:'370px'}} id='hover-AE-card' />
    <h2 style={{margin:'10px'}} >12-Month Warranty</h2>
    <p style={{margin:'10px'}} >
    Enjoy Peace OF MIND WITH OUR 12
month Warranty that is
Standard across all cars that we
sell</p>
<p style={{color: 'rgba(24, 119, 242, 1)',fontSize:'20px',marginTop:'20px',marginLeft:'10px',cursor:'pointer'}}>Know more</p>
</div>



<div className="AE-cards">
    <img src="https://s3-alpha-sig.figma.com/img/c3c5/82f1/f861a37fa142aca68e24ad65f9eda90c?Expires=1685318400&Signature=dEsyxKhWwfhPMg8dBuee4K0gkX3PRLxU4UYl9wnRnQ4Tot8hpBu4~CdGTaTTcCX7L6e2ljxKf1ifYzUgiL-6CJfp~42y8aWsAMXJWPeo11T5AD7JdoOJs9~PT4JdrpOgZcJFM-K1FD5jX04wVJFv3UyVaEOAKgbvVH5Ty5gqQdbFvQ6oMAvJoxaUjyJJ1uV6C7Jll2BJjfNjMGkCCLPpHKC18azmeUR0S2Ue1ASicqphtNruHSFi~B6ZSHy-ERIjMq5JkMVM2iakZy5x0n0v9surcALI9nf75TRoPzBIA6TQ9podQGDGBWDqyLTBvTITHeEzYq-hGxCm0vX3oJ1uzg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="warrenty" style={{width:'370px'}} id='hover-AE-card'/>
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

                        <div className="easy-car-card">
                            <img src="https://s3-alpha-sig.figma.com/img/fb6b/d570/cde5b6bcb2d3908e5f51db35801788d5?Expires=1685318400&Signature=LtVZX1KjZeSkDnVZXxkWNCxqpcXNeFUeUDCpjyGoQJoPBUAExyjMT4C1-BftIeVcQ2pZrrMituOMIx~35G8d6HUe5o4nzqc73CGZv6esyjgYoC92ggcNr0cV8qMeLnnNaXZGpZ6FqRo1E9rRRsxCklsPqYk~H9UqK2MAHHau5UxU0BS6E7B8RuyVVhsYiChfyYzLP8wr9YEgFc~tVIniKq1YSrdUGRNAQYr17mQ9VqslafFSShdYtBX6KXp4-lKiU6Grp3Y3aa8G8PBLUOlYRGk3lgLk6bAGI5HDyVJY9EfW4aZW0hg9Es7YjI~iBLKjZYx7dA4VOxJiU3L4xtWWXQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="car" style={{width:'400px'}} />
                            <h1 style={{margin:'10px'}} >1.Find the perfect car</h1>
                            <p style={{margin:'10px'}}>
                            Seamlessly browse thousands of MRL Certified cars
                            </p>
                        </div>



                        <div className="easy-car-card">
                            <img src="https://s3-alpha-sig.figma.com/img/c26b/729a/fcfd861e8bceb8da895a1c6b1168076d?Expires=1685318400&Signature=bOfxS2GsJ05JfzJ55f78vH4-Vq90W6punQhi3cjP-D1qMLCyOAYZRN7GWUWJNdnEWpbIJCCXqsSuuK~sCZbEgLkeTdin4VhUkhyjpRJPtSch6SMQBdUBw~6W-BE0669ewC9ooofKJ2judGSE1yL1zTUxIucJf1uGDKKA-rlF-NV6BA9b38b9y4lSukDCTWvnKC710daVSylyRO9veomlXbN8oXVPEo7Kn-y3M7YKOVvl~l~t-RpFRQiG~qpmypyWGRI5-GxFvMvQXM1bUkA8r4L9SElMaI6a8CGJ1S9uzrK52U1E~rX014nlwdMMctaXHSTvcPkt1pnNVzGDSx10hg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="car" style={{width:'400px'}}/>
                            <h1 style={{margin:'10px'}} >Free Test Drive from anywhere </h1>
                            <p style={{margin:'10px'}}>
                            We'll bring the car to you, or you can visit a CARS24 hub for free
                            </p>
                        </div>




                        <div className="easy-car-card">
                            <img src="https://s3-alpha-sig.figma.com/img/e5e6/9cd0/59dcc8e380848809110dfb33fb0a5df1?Expires=1685318400&Signature=FTS0DNFaemNo3PMIelA8ihqi-w-ntqTvYjfjahmfeQZlDwea-gOHqElef-zlAPRh7QqSfhYceCXxWPNt~NKH11oLKS9lBmdaxEKvz~xs2B3fxYb-cRRN6-BY7k~G4LhZGYmUCjkxl2h5emSQ95qIhM7KX9-ZpbRyLtGjlYpQsMS-tTWtV35MnvKgsSYizfXtP29bG0NJnIYFUgcHBCtKirvDR87lEvea5~neC633PSm4rDPqZUTnEVNI1F-75N0zWJ6EqL6KXwJVhEHvA3160l~vGVvWi2K242tvmKsDCeSIybhqecg9Dlge06Qv-NXa8DIFl6DX1XBcOfYij00lpQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="car" style={{width:'400px'}} />
                            <h1 style={{margin:'10px'}} >Buy it your way</h1>
                            <p style={{margin:'10px'}}>
                            You can pay in full or have it financed, the choice is yours

                            </p>
                        </div>

                </div>



{/* -----------------More Cars--------------------- */}

<div className="more-cars-detalis">

    <div className="car-detalis-cards">
        <img src="https://s3-alpha-sig.figma.com/img/c800/c60c/01b0ed24ae624fd6cb21e2d6b017056f?Expires=1685318400&Signature=lmW9m4iugNCsFbPLvDula-mIA~nolmg69s8WPov3c3FvdjOmsWTllj40fkD4aiKMYwAig-rTWSO7Nvi~WSt5-90foPaG5u2KdrDM5fEZvg095sVmkn1y-d-ivQOOT9xgAB47CCVMRfN2r3rzxx-sAOjwnWGVO7dsWHQ2UucfuCeTVMIhTYhGXSZFnHQ80jIaPkMsnJ8DgPl2kcow6p3CmYX6lCLWhvKU-D7yJoInj52ssYcTceOPe1o77e887yy7-XxkGfQ5YinAAN1VxI9E42hMj-LI0jor6Pxp4vD8Bzc5suDI5I2YUIt5fr5yAPsEQEADNYg5Xwt2CkjVWnIvlA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="suv"  style={{width:'400px'}}/>
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
        <img src="https://s3-alpha-sig.figma.com/img/b59d/11b1/0d5ac1b4d72b2ca3ae20d630cd80ac87?Expires=1685318400&Signature=HzyyCgYtl4r2L4OuXT9TkK5nw0yb1886NsUJTP2L65jULwQjPH3XQfVTAaclcsC9~lqd6fzc7xdISqE75UaqwCVVUIh1YQ1s42PAurWsQ6rfXJcMeSl5p4RsRa3fGBNX1qt4um2X0Vpt-ZU~9yKpRgw3yTUMiyKQ5BdU7jC17yfQG3QQ-wX7iy6nxC31UhYwZDfRejqF~5cXufy-mevlrQDMFE68fnnFuBIN89cs7fiHR~naq7-QgVJq85ZQSY222E6oKBy0-LRoWH~adpBTN2ZYottSDXBY8m7iccXazctcoc1FZ5UTRrQNKM9h7rcMlYzEER0xwX2c-19KT8Y6gg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="suv"  style={{width:'400px'}}/>
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
        <img src="https://s3-alpha-sig.figma.com/img/2e00/5c68/320214c7408172035063a2ce0a03a94b?Expires=1685318400&Signature=WxrwQxC5ykC~j9ke2RsCxZVbyNARLYaZdorkHqfgVB9UP4CRMLDYVvjadQFk86d73OBwp5dI2lxBav5OeD2SOLz18KRz4lyJw5TezLKgh~IhBKAXDOC6tstf3PSdVKc24GO67ICvnPMJTzPNAAVEAM~VcZFHIitu-bzdlSmPn4EMHh~M5eDsBvt5c2V3y8~hQE07DUHT6XDiOu8US8OIKUxBNOKl~4ddeHdulNexVUdn1FOHTodCYs7Sgoj7T4N-pMmJfOeGIvmJDesCplZH89GqKjwcAjcNJL5vSdF-XmOIyx3UsaLFK4mBhpNnbMxKv7J8dcMe44S1FNu4XIs9FA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="suv"  style={{width:'400px'}}/>
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

</div>


<div className="view-more-seller">
    <button className='more-car-button'>
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
<h1 style={{textAlign:'center'}}>What motivates us</h1>

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

export default CarBuyer