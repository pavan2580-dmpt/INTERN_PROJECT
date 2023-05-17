import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Recent.css'

function RecentlyAdd() {
  const [fetchData, setFetchData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/Car/getCars');
      setFetchData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
    
      <div className="recently-cars-added-to-sell">
     
      {fetchData.map((item) => (
          <div key={item.id} className='recent-cards'>
            <img src={item.imagePath} alt="car" width={'280px'} />
            <h1>Model :{  item.Model}</h1>
            <h1>KM : {item.NoKM}</h1>
            <h1>Car Plate : {item.carNO}</h1>
            <h1>Company : {item.company}</h1>
          </div>
        ))}
   
      </div>
    </>
  );
}

export default RecentlyAdd;
