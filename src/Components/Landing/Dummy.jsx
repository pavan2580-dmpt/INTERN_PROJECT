import React,{useState} from 'react'
import { useLocation } from 'react-router-dom'
import './Dummy.css'
function Dummy() {
   
    const location = useLocation()
  const getData = location.state.details
  return (
    <>
   <div className="car-data-location">
   <div className='get-each-car-more-data'>
     <img src={getData.image} alt="car"  style={{width:"500px"}}/>
     <h1 style={{margin:'10px'}}> Name :{getData.name} </h1>
     <h1 style={{margin:'10px'}}>Price : {getData.price}</h1>
     <h1 style={{margin:'10px'}}>Offer : {getData.offer}</h1>
     <h1 style={{margin:'10px'}}>RC : {getData.RC}</h1>
     <h1 style={{margin:'10px'}}>Insurance : {getData.insurance}</h1>
     <h1 style={{margin:'10px'}}>TAX : {getData.tax}</h1>

    </div>
   </div>

    <h1>DESCRIPTION OF CAR</h1>
    <p style={{fontSize:'30px'}}>
    Cars are four-wheeled vehicles designed for personal transportation and are one of the most popular modes of transport around the world. They are typically powered by internal combustion engines, although electric and hybrid cars have gained significant popularity in recent years. Cars come in various sizes, shapes, and styles to suit different needs and preferences.

The exterior of a car is composed of a chassis or body, which provides the structure and houses the passengers and cargo. The body design can range from sleek and aerodynamic to rugged and utilitarian, depending on the intended purpose of the vehicle. It is usually made of steel or aluminum, although modern cars may incorporate lightweight materials such as carbon fiber to enhance fuel efficiency and performance.

Inside the car, there are several essential components. The driver and passengers sit in seats, which are often adjustable for comfort. The dashboard houses various controls, such as the steering wheel, instrument cluster, audio system, climate control, and navigation system. The center console contains additional controls, including the gear shift, multimedia interface, and other convenience features.

Cars are equipped with an engine, which powers the vehicle by converting fuel into mechanical energy. Internal combustion engines burn fuel, typically gasoline or diesel, to generate power. Electric cars, on the other hand, use electric motors powered by rechargeable batteries. Hybrid cars combine both an internal combustion engine and an electric motor for improved fuel efficiency.

The drivetrain of a car is responsible for transmitting power from the engine to the wheels. Most cars have either front-wheel drive or rear-wheel drive, although some high-performance and luxury vehicles feature all-wheel drive. The wheels are equipped with tires, which provide traction and grip on the road surface.

Safety features are an important aspect of modern cars. They include seat belts, airbags, anti-lock braking systems (ABS), electronic stability control (ESC), traction control, and advanced driver assistance systems (ADAS) like lane departure warning, adaptive cruise control, and automatic emergency braking.

Cars offer various features and options to enhance comfort and convenience. These can include power windows and locks, keyless entry, heated seats, infotainment systems with touchscreen displays, Bluetooth connectivity, smartphone integration, and advanced audio systems.

Car manufacturers produce a wide range of vehicles to cater to different needs and preferences. This includes compact cars, sedans, SUVs, crossovers, minivans, pickup trucks, and sports cars, each with its own unique characteristics and purposes.

Overall, cars have revolutionized personal transportation, providing individuals and families with mobility, convenience, and independence. They have become an integral part of modern society and continue to evolve with advancements in technology, safety, and sustainability.
    </p>
    
    </>
  )
}

export default Dummy