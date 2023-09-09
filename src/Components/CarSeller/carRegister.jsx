import React, { useState } from 'react';
import axios from 'axios';
import "./carregister.css"
import {HiArrowSmRight} from "react-icons/hi"

const CarRegister = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');
  const [image, setImage] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('input1', input1);
    formData.append('input2', input2);
    formData.append('input3', input3);
    formData.append('input4', input4);
    formData.append('image', image);
    
   
      await axios.post('http://localhost:3001/Car/carRegister/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      console.log('Form data submitted successfully.');
      alert("Car Registerd Successfully ")
      window.location.href="/"
    
  };
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  
  };
 
  return (
   <div className="car-box">
    <div className="car-text-area">
      <p>
        Register your car <HiArrowSmRight  size={80}/>
      </p>
      <p>
        Sell Online
      </p>
      <p>
        Get Free RC Transfer
      </p>
    </div>
      <div className='car-reg-container'>
            <form onSubmit={handleFormSubmit}>
              <input  type="text" id='car-no'  placeholder="Enter Car Number Plate" value={input1} onChange={(e) => setInput1(e.target.value)}   required/>
              <input type="text"  id='car-model'   placeholder="Car Model" value={input2} onChange={(e) => setInput2(e.target.value)}required  />
              <input type="text" id='company' placeholder=" Car Company "value={input3} onChange={(e) => setInput3(e.target.value)} required/>
              <input type='text' id='dis' placeholder='Distance Travelled' onChange={(e)=>setInput4(e.target.value)} required/>
              <input type="file" id='file' onChange={handleImageChange} required />     
              <button type="submit" id='submit'> Submit</button>
            </form>
          
      
      </div>
      </div>
  );
};

export default CarRegister;
