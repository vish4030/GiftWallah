import React from "react";
import { Link } from "react-router-dom";

import './Style.css'; 

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="row">
          <div className="col-2">
            <h2>GiftWallah</h2>
          </div>
          <div className="col-6">
            <ul className="flex ">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/orders">Orders</Link>
              </li>
              <li>
                <Link to="/about">AboutUs</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">ContactUs</Link>
              </li>
            </ul>
          </div>
          <div className="col-4">
            <ul className="flex">
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">SignUp</Link>
              </li>
              <li>
                <Link to="wishlist">WishList</Link>
              </li>
              <li>
                <Link to="cart">Cart</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
