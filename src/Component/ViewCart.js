import { height } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useCart ,CartProvider} from 'react-use-cart'
import {useNavigate} from 'react-router-dom'
import Cart from './Cart'
import Navbar from '../Navbar'
import Dashboard from './Dashboard'

const ViewCart = () => {
  let Navigate = useNavigate()
  let cartdata = JSON.parse(localStorage.getItem("cart"))
  let cartitem = ''
  function removeItem(curElem){
    cartitem = cartdata.filter((item)=>{ return item.id != curElem.id})
    localStorage.setItem('cart',JSON.stringify(cartitem))
    window.location.reload(false)
  }
    
  function handlePay(curElem) {
      Navigate("/payu");
      var details = JSON.parse(localStorage.getItem("buynow") || "[]");
      details.push(curElem);
      localStorage.setItem("buynow", JSON.stringify(details));
  }
  if(!cartdata || cartdata.length == 0){
    return(
      <>
      <h3>You're Cart is Empty</h3>
      <span>Navigate to<a href='/dashboard'>Dashboard</a>,to add more items.</span>
      </>
    )
  }
  else if(cartdata){
    return (
    <>
    <Navbar/>
    <section className="main-card--container">
    {cartdata.map((curElem)=>{
       return (
        <>
          <div className="card-container">
            <div className="card">
              <div className="card-body">
                <span className="card-number card-circle subtle">
                  {curElem.id}
                </span>
                <span className="card-title ">{curElem.name}</span>
                <h2 className="card-author subtle">{curElem.category}</h2>
                <span className="card-description subtle">
                  {curElem.description.split("\n")}
                </span>
                <div className="card-read">{curElem.availableQuantity}</div>
              </div>
              <img
                src={curElem.image}
                alt="images"
                className="card-media"
                srcset=""
              />
              <div className=" mt-12">
                <button
                  type="button"
                  onClick={() => handlePay(curElem)}
                  className="mx-1 inline-block px-4 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Buy Now
                </button>
                <button
                  type="button"
                  onClick={()=>removeItem(curElem)}
                  className="inline-block px-4 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Delete
                </button>
              </div>
              {/* <span className="card-tag subtle">Order Now</span> */}
            </div>
          </div>
        </>
      );
    })}
    </section>
    {/* <CartProvider>
        <Cart/>
        <Dashboard/>
    </CartProvider> */}
    </>
  )
}

}

export default ViewCart