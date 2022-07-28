import { BrowserRouter as Router, Route, Routes,Link,Navigate } from "react-router-dom";
import {useState } from "react";
import Dashboard from "./Component/Dashboard";
import Registration from "./Component/Registration";
import Login from "./Component/Login"
import React from 'react'
import HomePage from "./HomePage";
import ViewCart from './Component/ViewCart'
import ProtectedRoutes from "./Component/ProtectedRoutes";
import PayU from "./Component/PayU";
import Admin from "./Component/Admin";
const App3 = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/register" element={<Registration />} />
          <Route exact path ="/" element ={<HomePage/>}/>
          <Route element={<ProtectedRoutes/>}>
            <Route exact path = "/cart" element={<ViewCart/>}/>
            <Route exact path ="/dashboard" element ={<Dashboard/>}/>
            <Route exact path="/payu" element={<PayU/>}/>
         </Route> 
         <Route exact path='/admin' element={<Admin/>}/>
        </Routes>
      </Router>
  </>
  )
}

export default App3