import React, { useState, useEffect } from "react";
import { CartProvider } from "react-use-cart";
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
          <a
            href="/"
            className="nav-link block font-medium text-xl leading-tight uppercase rounded px-6 py-3 my-2 md:mr-2 focus:outline-none focus:ring-0 active"
            data-bs-toggle="pill"
            data-bs-target="#pills-home"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            Home
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            href="/register"
            className=" nav-link block font-medium text-xl leading-tight uppercase rounded px-6 py-3 my-2 md:mx-2 focus:outline-none focus:ring-0"
            data-bs-toggle="pill"
            data-bs-target="#pills-profile"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
          >
            Registration
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            href="/login"
            className=" nav-link block font-medium text-xl leading-tight uppercase rounded px-6 py-3 my-2 md:mx-2 focus:outline-none focus:ring-0"
            data-bs-toggle="pill"
            data-bs-target="#pills-contact"
            role="tab"
            aria-controls="pills-contact"
            aria-selected="false"
          >
            Login
          </a>
        </li>
        {name && (
          <li className="nav-item" role="presentation">
            <a
              href="/dashboard"
              className=" nav-link block font-medium text-xl leading-tight uppercase rounded px-6 py-3 my-2 md:mx-2 focus:outline-none focus:ring-0"
              data-bs-toggle="pill"
              data-bs-target="#pills-contact"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              Dashboard
            </a>
          </li>
        )}
        {name && (
          <li className="nav-item" role="presentation">
            <a
              href="/cart"
              className=" nav-link block font-medium text-xl leading-tight uppercase rounded px-6 py-3 my-2 md:mx-2 focus:outline-none focus:ring-0"
              data-bs-toggle="pill"
              data-bs-target="#pills-contact"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              View Cart
            </a>
          </li>
        )}
        <li className="nav-item" role="presentation">
          <a
            href="/"
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
          </a>
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
