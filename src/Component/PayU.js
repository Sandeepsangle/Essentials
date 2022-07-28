import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import data from '../data.json'
import Lottie from 'react-lottie';
import Menu from "./MenuApi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PayU = () => {
  let Navigate = useNavigate()
  const [state,setState] = useState(false)
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: data,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  let cartdata = JSON.parse(localStorage.getItem("cart"))
  let cartitem = ''
  let walletvalue = JSON.parse(localStorage.getItem('wallet'))
  let buy = JSON.parse(localStorage.getItem("buynow"));
  function handleCancel(){
    localStorage.removeItem('buynow')
    Navigate('/dashboard')
  }
  function viewbalance(){
    toast(`Wallet balance is : ₹${walletvalue} `, {
      position: toast.POSITION.TOP_RIGHT
  });
  }
  let [itemprice]=(buy.map((item)=>{
      return item.price.replace(/,/g,'')
    }))
    console.log(itemprice)
  function reducewallet(item){
    if(itemprice < walletvalue){
      console.log("...",itemprice)
      walletvalue = walletvalue - parseInt(itemprice)
      localStorage.setItem('wallet',JSON.stringify(walletvalue))
      cartitem = cartdata.filter((curElem)=>{ return item.id != curElem.id})
      localStorage.setItem('cart',JSON.stringify(cartitem))
      var details = JSON.parse(localStorage.getItem("orders") || "[]");
      details.push(item)
      localStorage.setItem('orders',JSON.stringify(details))
      setState(!state)
    }
    else{
      setState(!state)
      toast.warning('Low wallet Balance !', {
        position: toast.POSITION.TOP_RIGHT
    });
    }
  }
  function dashboardlink(){
    localStorage.removeItem('buynow')
  }
  function vieworders(){
      console.log(JSON.parse(localStorage.getItem('orders')))
  }
  function reduceQunatity(id,reduceQuantity){
    const menuData = JSON.parse(localStorage.getItem('menudata'))
    const updatedMenuData = menuData.map(item=>{
      if(item.id == id)
      item.availableQuantity = item.availableQuantity - reduceQuantity
      return item
    })
    localStorage.setItem('menudata',JSON.stringify(updatedMenuData))
  }
  return (
    <>
    <div className="float-right d-inline">
    <button type='button' className="mx-8  font-serif bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
       onClick={vieworders}>Orders</button>
      <button type='button' className=" font-serif bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
       onClick={viewbalance}>Wallet</button>
      {state == false &&<button type='button' className="mx-8 font-serif bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
       onClick={handleCancel}>Cancel</button>}
       </div>
      {buy.map((item) => {
        return (
          <>
            {state == false &&
            <>
            <div className="col-span-1 bg-white lg:block hidden">
              <h1 className="py-6 border-b-2 text-xl text-gray-600 px-8">
                Order Summary
              </h1>
              <ul className="py-6 border-b space-y-6 px-8">
                <li className="grid grid-cols-6 gap-2 border-b-1">
                  <div className="col-span-1 self-center">
                    <img
                      src={item.image}
                      alt="Product"
                      className="rounded w-full"
                    />
                  </div>
                  <div className="flex flex-col col-span-3 pt-2">
                    <span className="text-gray-600 text-md font-semi-bold">
                     {item.name}
                    </span>
                    <span className="text-gray-400 text-sm inline-block pt-2">
                      {item.description}
                    </span>
                  </div>
                  <div className="col-span-2 pt-3">
                    <div className="flex items-center space-x-2 text-sm justify-between">
                      <span className="text-gray-400">{item.quantity}</span>
                      <span className="text-pink-400 font-semibold inline-block">
                      ₹{item.price}
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="px-8 border-b">
                <div className="flex justify-between py-4 text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-semibold text-pink-500">₹{item.price}</span>
                </div>
                <div className="flex justify-between py-4 text-gray-600">
                  <span>Shipping</span>
                  <span className="font-semibold text-pink-500">Free</span>
                </div>
              </div>
              <div className="font-semibold text-xl px-8 flex justify-between py-8 text-gray-600">
                <span>Total</span>
                <span>₹{item.price}</span>
              </div>
            </div>
            <button onClick={()=>{reducewallet(item);reduceQunatity(item.id,1);}} className="submit-button px-4 py-3 rounded-full bg-pink-400 text-white focus:ring focus:outline-none w-full text-xl font-semibold transition-colors">
            {state == false ?(`Pay ₹ ${item.price}`) :(<Lottie options={defaultOptions} height={60} width={250}/>)}
          </button>
          </>}
         {state == true && 
         <span>
          <pre>Thank you for shopping</pre>
          For more orders , browse on<a onClick={dashboardlink} href="/dashboard">dashboard</a>
          </span>
          } 
          </>
        );
      })}
      <ToastContainer />
    </>
  );
};

export default PayU;
