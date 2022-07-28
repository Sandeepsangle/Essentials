import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate
} from "react-router-dom";
import Dashboard from "./Dashboard";
import Cart from "./Cart";
import Navbar from "../Navbar";
import Menu from "./MenuApi";
const Login = () => {
  const [namelog, setNamelog] = useState("");
  const [passwordlog, setPasswordlog] = useState("");
  let [mails, setMails] = useState();
  let [passwords, setPasswords] = useState();
  const [menuData, setMenuData] = useState(Menu);
  const [flag, setFlag] = useState(false);
  const [dashboard, setDashboard] = useState(true);
  const Navigate = useNavigate()
  function handlelogin(e) {
     e.preventDefault();
    if (!namelog || !passwordlog) {
      setFlag(true);
      console.log("Empty");
    } else {
      e.preventDefault();
      let mail = JSON.parse(localStorage.getItem("details"));
      let namee = mail.map((item) => {
        if ((item.name === namelog) & (item.password === passwordlog)) {
          setMails(item.name);
           localStorage.setItem("name",JSON.stringify(item.name))
          setPasswords(item.password);
          // console.log("match")
        }else if (passwordlog != passwords || namelog != mails)
        {
          console.log("Username or Password did not match")
        }
        localStorage.setItem('menudata',JSON.stringify(Menu))
        if(JSON.parse(localStorage.getItem('name'))=='admin'){
          Navigate('/admin')
        }else{
        
        Navigate('/dashboard')
        let wallet = 10000
        localStorage.setItem('wallet',JSON.stringify(wallet))
        setFlag(false);
        }
        
      });
    }
  }
  return (
    <>
    <Navbar/>
        <section className="h-screen">
        <div className="px-6 h-full text-gray-800">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="w-full"
                alt="Sample image"
              />
            </div>
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
            <h3 className="mb-5 text-blue-400 text-2xl font-semibold mt-2 pt-1 mb-0">Login Form</h3>
              <form>
                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput1"
                    placeholder="Enter Full Name"
                    value={namelog}
                    onChange={(event) => setNamelog(event.target.value)}
                    required
                  />
                </div>
                {/* Password input */}
                <div className="mb-6">
                  <input
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Password"
                    value={passwordlog}
                    onChange={(event) => setPasswordlog(event.target.value)}
                    required
      
                  />
                </div>
                <div className="flex justify-between items-center mb-6">
                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      id="exampleCheck2"
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      htmlFor="exampleCheck2"
                    >
                      Remember me
                    </label>
                  </div>
                  <a href="#!" className="text-gray-800">
                    Forgot password?
                  </a>
                </div>
                <div className="text-center lg:text-left">
                  <button
                    type="button"
                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    onClick={handlelogin}
                  >
                    Login
                  </button>
                  <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                    Don't have an account?
                    <a
                      href="/"
                      className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                    >
                      Register
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>    
    </>
  );
};
export default Login;
