import React, { useEffect, useState } from 'react';
import "./auction.css";
import { BiMap } from 'react-icons/bi';
import { BsArrowDownCircleFill } from "react-icons/bs";
import Car from "./carsData";
import Cars from './Cars';
import Footer from '../Landing/Footer';
import Header from '../Landing/Header';
import SignUp from "../Landing/SignUp";
import axios from 'axios';
import RecentlyAdd from './RecentlyAdd';

function Auction() {
  const [selectedValue, setSelectedValue] = useState('');
  const [selectedDays, setSelectedDays] = useState('');
  const [price, setPrice] = useState('');

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleSelectDays = (event) => {
    setSelectedDays(event.target.value);
  };

  useEffect(() => {
    if (selectedValue === 'Select Location' || selectedValue === 'Total DAYS') {
      setPrice('Please select location and Days');
    } else if (selectedValue === 'Kolkata') {
      setPrice(1000);
    } else if (selectedValue === 'Andhra Pradesh') {
      setPrice(1500);
    } else if (selectedValue === 'Goa') {
      setPrice(2000);
    } else if (selectedValue === 'Pune') {
      setPrice(3000);
    } else if (selectedValue === 'Delhi') {
      setPrice(4000);
    } else if (selectedValue === 'Kerala') {
      setPrice(5000);
    } else if (selectedValue === 'Telangana') {
      setPrice(6000);
    } else if (selectedValue === 'West Bengal') {
      setPrice(500);
    } else if (selectedValue === 'TamilNadu') {
      setPrice(3000);
    } else if (selectedValue === 'Uttarakhand') {
      setPrice(800);
    } else {
      setPrice(2500);
    }
  }, [selectedValue]);

  const ShowPrice = () => {
    document.getElementById('Click-to-Show-Price').innerHTML = ` Price After Discount for ${selectedDays} day = $` + price*selectedDays;
    document.getElementById('Click-to-Show-Price').classList.toggle('show');
  };

  const HandleClick = () => {
    document.getElementById('type').classList.toggle('show');
  };

  const HandleClick1 = () => {
    document.getElementById('transmission').classList.toggle('show');
  };

  const HandleClick2 = () => {
    document.getElementById('PAYMENT').classList.toggle('show');
  };

  const HandleClick3 = () => {
    document.getElementById('kilometer').classList.toggle('show');
  };

  const carData = Car.map((item) => (
    <Cars
      key={item.id}
      Data={item}
    />
  ));

  return (
    <>
      <SignUp />
      <Header />

      {/* --------------------------Auction Banner------------------------------------------------------------------------- */}

      <div className="auction-banner">
        <h1>Get an offer in </h1>
        <h1>10 minutes</h1>
        <p style={{ marginTop: '20px' }}>You will get full amounted</p>
        <p>pickup</p>
      </div>

      <div className="rental-industry">
        <h1 style={{ textAlign: 'center', marginTop: '60px' }}> -------- CARS -------</h1>
        <h1 style={{ textAlign: 'center', marginTop: '40px' }}>WHAT WE ARE IN <span style={{ color: 'blue' }}> CAR RENTAL INDUSTRY </span></h1>

        <div className="rental-car-search">
          <div className="rental-search">
            <BiMap size={30} />
            <select name='Rental-Car' id='Rental-Car' onChange={handleSelectChange}>
              <option value='Select Location'>Select Location</option>
              <option value="Kolkata">Kolkata</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Goa">Goa</option>
              <option value="Pune">Pune</option>
              <option value="Delhi">Delhi</option>
              <option value="Kerala">Kerala</option>
              <option value="Telangana">Telangana</option>
              <option value="West Bengal">West Bengal</option>
              <option value="TamilNadu">TamilNadu</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Uttarakhand">Uttarakhand</option>
            </select>
          </div>
          <select name="Total-Days" id="No-Days" onChange={handleSelectDays}>
            <option value='Total DAYS'>Total DAYS</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>
          <button className='rent-button' onClick={ShowPrice}>
            SEARCH
          </button>
        </div>
        <div className="show-rate-price">
          <h1 id='Click-to-Show-Price'></h1>
        </div>
      </div>

      <div className="main-auction-container">
        <div className="Filters">
          <h2>Filter-03</h2>

          <h3 id="vehicle" onClick={HandleClick}>VEHICLE-TYPE <BsArrowDownCircleFill /> </h3>
          <div className="vehicle-type" id="type" >
            <input type="checkbox" name="" id="Vehicel" />Economy<br />

            <input type="checkbox" name="" id="Vehicel" />Compact<br />

            <input type="checkbox" name="" id="Vehicel" />Midsize<br />

            <input type="checkbox" name="" id="Vehicel" />Standard<br />

            <input type="checkbox" name="" id="Vehicel" />Full Sized<br />

            <input type="checkbox" name="" id="Vehicel" />Premium<br />

            <input type="checkbox" name="" id="Vehicel" />Luxury<br />

            <input type="checkbox" name="" id="Vehicel" />Marcedes
          </div>

          <h3 id="trans" onClick={HandleClick1}>TRANSMISSION TYPE <BsArrowDownCircleFill /> </h3>
          <div className="vehicle-type" id="transmission" >
            <input type="checkbox" name="" id="Vehicel" />AUTO<br />
          </div>

          <h3 id="PAY" onClick={HandleClick2}>PAYMENT TYPE <BsArrowDownCircleFill /> </h3>
          <div className="vehicle-type" id="PAYMENT" >
            <input type="radio" name="pay" id="Vehicel" />Online<br />
            <input type="radio" name="pay" id="Vehicel" />Cash<br />
          </div>

          <h3 id="kil" onClick={HandleClick3}> Kilometer gauge <BsArrowDownCircleFill /> </h3>
          <div className="vehicle-type" id="kilometer" >
            <input type="checkbox" name="" id="Vehicel" />Digital<br />
          </div>

        </div>

        <div className="Auction-car-details">

          <div className="car-prints">
            {carData}
          </div>

        </div>
        <div className="Recently-added">
          <h1>
            Recently Added Cars
          </h1>
          <RecentlyAdd />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Auction;
