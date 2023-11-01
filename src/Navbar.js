import React, { useState, useEffect } from "react";
import { CartProvider } from "react-use-cart";
import { Link } from "react-router-dom";
const Navbar = () => {
  let [name, setName] = useState();
  let [show, setShow] = useState(false);
  useEffect(() => {
    setName(JSON.parse(localStorage.getItem("name")));
  }, []);
  return (
    <>
      <ul
        className="nav nav-pills flex flex-col md:flex-row flex-wrap list-none pl-0 mb-4"
        id="pills-tab"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <Link to ="/"
            className="nav-link block font-medium text-xl leading-tight uppercase rounded px-6 py-3 my-2 md:mr-2 focus:outline-none focus:ring-0 active"
            data-bs-toggle="pill"
            data-bs-target="#pills-home"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            Home
          </Link>
        </li>
        <li className="nav-item" role="presentation">
          <Link to ="/register"
            className=" nav-link block font-medium text-xl leading-tight uppercase rounded px-6 py-3 my-2 md:mx-2 focus:outline-none focus:ring-0"
            data-bs-toggle="pill"
            data-bs-target="#pills-profile"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
          >
            Registration
          </Link>
        </li>
        <li className="nav-item" role="presentation">
          <Link to ="/login"
            className=" nav-link block font-medium text-xl leading-tight uppercase rounded px-6 py-3 my-2 md:mx-2 focus:outline-none focus:ring-0"
            data-bs-toggle="pill"
            data-bs-target="#pills-contact"
            role="tab"
            aria-controls="pills-contact"
            aria-selected="false"
          >
            Login
          </Link>
        </li>
        {name && (
          <li className="nav-item" role="presentation">
            <Link to="/dashboard"
              className=" nav-link block font-medium text-xl leading-tight uppercase rounded px-6 py-3 my-2 md:mx-2 focus:outline-none focus:ring-0"
              data-bs-toggle="pill"
              data-bs-target="#pills-contact"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              Dashboard
            </Link>
          </li>
        )}
        {name && (
          <li className="nav-item" role="presentation">
            <Link to ="/cart"
              className=" nav-link block font-medium text-xl leading-tight uppercase rounded px-6 py-3 my-2 md:mx-2 focus:outline-none focus:ring-0"
              data-bs-toggle="pill"
              data-bs-target="#pills-contact"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              View Cart
            </Link>
          </li>
        )}
        <li className="nav-item" role="presentation">
          <Link to ="/"
            className=" nav-link block font-medium text-xl leading-tight uppercase rounded px-6 py-3 my-2 md:mx-2 focus:outline-none focus:ring-0"
            data-bs-toggle="pill"
            data-bs-target="#pills-contact"
            role="tab"
            aria-controls="pills-contact"
            aria-selected="false"
            onClick={() => {
              localStorage.removeItem("name");
              localStorage.removeItem("wallet");
              localStorage.removeItem("menudata");
              localStorage.removeItem('buynow')
            }}
          >
            Logout
          </Link>
        </li>
        {name && (
          <span className=" nav-link block font-small text-xl leading-tight px-6 py-3 my-2 md:mx-2 focus:outline-none focus:ring-0">
            User <i>{name}</i>, has logged In{" "}
          </span>
        )}
      </ul>
    </>
  );
};

export default Navbar;
