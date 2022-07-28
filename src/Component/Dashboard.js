import React, { useState ,useEffect} from "react";
import Menu from "./MenuApi";
import MenuCard from "./MenuCard";
import { SingleSelect } from "react-select-material-ui";
import { useCart, CartProvider } from "react-use-cart";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
  let Navigate = useNavigate();
  const [menuData, setMenuData] = useState();
  const [loader,setLoader] = useState(false)
  const options = [
    "Clothes",
    "Accessories",
    "Grocery",
    "Home & Kitchen Stuffs",
  ];
  useEffect(()=>{
    setMenuData(JSON.parse(localStorage.getItem('menudata')))
    setLoader(true)
  },[])
  const [value, setValue] = useState();
  // function for selectdropdown option
  function handleChange(val){
    setValue(val);
  };
  //function for onclick addtocart button to store data in localstorage
  function addtocart(curElem) {
    var details = JSON.parse(localStorage.getItem("cart") || "[]");
    details.push(curElem)
    localStorage.setItem("cart", JSON.stringify(details));
  }
  function handlePay(curElem) {
      Navigate("/payu");
      var details = JSON.parse(localStorage.getItem("buynow") || "[]");
      details.push(curElem);
      localStorage.setItem("buynow", JSON.stringify(details));
  }
  const notify = () => toast.success('Added to Cart !', {
    position: toast.POSITION.TOP_RIGHT
});
  return (
    <>
    <ToastContainer />
      <Navbar />
      <div style={{ width: "250px", float: "right" }}>
        <SingleSelect
          value="value"
          placeholder="Select a category"
          options={options}
          onChange={val=>handleChange(val)}
        />
      </div>
      <section className="main-card--container">
        {loader && menuData
          .filter((curElem) => {
            if(value == undefined){
              return curElem
            }
            else{
              return curElem.category == value;
            }
            })
          .map((curElem) => {
            return (
              <>
                <div key={curElem.id} className="card-container">
                  <div className="card">
                    <div className="card-body">
                      <span className="card-number card-circle subtle">
                        {curElem.id}
                      </span>
                      <span className="card-title ">{curElem.name}</span>
                      <h2 className="card-author subtle">{curElem.category}</h2>
                      <span className="card-description subtle">
                        {curElem.description}
                      </span>
                      <div className="card-read">{curElem.availableQuantity}</div>
                    </div>
                    <img
                      src={curElem.image}
                      alt="images"
                      className="card-media"
                      srcset=""
                    />
                    <div className="mt-12">
                    <button type="button"  onClick={() => {addtocart(curElem);notify()}} className="mx-1 btn btn-dark">Add to Cart</button>
                    <button type="button" onClick={() => handlePay(curElem)} class="btn btn-dark">Buy Now</button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </section>
    </>
  );
};

export default Dashboard;
