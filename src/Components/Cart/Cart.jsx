import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './cart.css'
import Loader from'../Loader/Loader'
import { useNavigate } from 'react-router-dom'

function Cart() {

    
const navigation = useNavigate()

const renderTotal = ()=>{

  let sum = 0;
  Carting.map(
    item =>{sum = sum+item.Price}

  )


return sum

}

  const[Carting,SetCarting] =useState([])
    const cartDisplay = async()=>{ 
      const data =await axios.get('http://localhost:3001/Car/getCart').then(
        (res)=>{SetCarting(res.data)
          console.log(res.data)
        }
        
      )
    
    }
    useEffect(
      ()=>{
        cartDisplay()
      },[]
    )




    const HandleDelete =async (ITEM)=>{
      const Delete = ITEM._id;
      const deleting = await axios.delete(`http://localhost:3001/Car/delete/${Delete}`).then(
        (res)=>{
          console.log(res)
          cartDisplay()
        }
      )
        
          console.log("then block")
    
         
        
      

    }

console.log(Carting)
  return (
    <>
    
    <div className="cart-container">
    <button 
            style={{width:'250px',height:'100px',border:'none',background:'blue',color:'white',margin:'100px',cursor:'pointer'}}
            onClick={()=>{navigation('/')}}
            >Go To Home</button>
      {
        Carting.length === 0 ? <Loader/>
        :(<div className="carts-data">

            

          <h1 style={{textAlign:'center',fontSize:'45px',margin:'50px'}}>
            Total Amount : {renderTotal()}
          </h1>
        {
          Carting.map(
            item=><div className="cats" key={item.id} style={{border:'2px solid',margin:'20px'}}>
              <img src={item.image} alt="car" width={'400px'} height={'300px'}/>
              <h1>
                  Company : {item.company}
              </h1>
              <h1>
               Model : {item.Model}
              </h1>
              <h1>
                Price : { item.Price}
              </h1>
            <button
            onClick={()=>HandleDelete(item)}
            style={{width:'150px',height:'50px',border:'none',background:'blue',color:'white',cursor:'pointer'}}
            
            >Remove</button>
            </div>
          )
        }
      </div>)
      }

     

    </div>
    
    </>
    
  )
}

export default Cart