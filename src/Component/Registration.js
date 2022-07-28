import React, { useState } from "react";
import Login from "./Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../Navbar";
const Registration = () => {
  const [name, setName] = useState([]);
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);
  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !password) {
      setFlag(true);
      alert("please enter username and password");
    } else {
      setFlag(false);
      var details = JSON.parse(localStorage.getItem("details") || "[]");
      var detail = {
        name: name,
        password: password,
      };
      details.push(detail);
      localStorage.setItem("details", JSON.stringify(details));
      setName("");
      setPassword("");
    }
  }
  function handleclick() {
    setLogin(!login);
  }

  return (
        <>
        <Navbar/>
          <section className="h-screen"> 
            <div className="container px-6 py-12 h-full">
              <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                    className="w-full"
                    alt="Phone image"
                  />
                </div>
                <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
                  <form onSubmit={handleSubmit}>
                  <h3 className="mb-5 text-blue-400 text-2xl font-semibold mt-2 pt-1 mb-0">Registration Form</h3>
                    <div className="mb-6">
                      <input
                        type="text"
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Enter Full Name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-6">
                      <input
                        type="password"
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Enter a Password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required
                      />
                    </div>
                    <div className="flex justify-between items-center mb-6">
                      <div className="form-group form-check">
                        <input
                          type="checkbox"
                          className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          id="exampleCheck3"
                          defaultChecked=""
                        />
                        <label
                          className="form-check-label inline-block text-gray-800"
                          htmlFor="exampleCheck2"
                        >
                          Remember me
                        </label>
                      </div>
                      <a
                        href="#!"
                        className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                      >
                        Forgot password?
                      </a>
                    </div>
                    <button
                      type="submit"
                      className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      Register
                    </button>
                    <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                      <p className="text-center font-semibold mx-4 mb-0">OR</p>
                    </div>
                    <a
                    href='/login'> Already Registered {name}, login in?</a>
                  </form>
                </div>
              </div>
            </div>
          </section>
          </>
  );
};

export default Registration;
