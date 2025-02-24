import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import cartlogo from "./Assets/cart.gif";
import cartforin from "./Assets/cart.png";
import "./Styles/Navbar.css";
import { useAuth } from "../../Middleware/auth";
import { toast } from "react-toastify";
import Cart from "../Cart/Cart";
import { useEffect, useState } from 'react';
import axios from "axios";
import { AutobotBackend } from '../../Middleware/Helper';

export default function Navbar(props) {
  const auth = useAuth();

  const [price, setPrice] = useState();
  const navigate = useNavigate();
  const handleLogout = () => {
    auth.logout();
    navigate('/autobots/home')
    toast.info("Logged out successfully", {
      position: "bottom-right",
      theme: "dark",
    });
  };


  const [cartList, setCartList] = useState([]);
  const [items, setItems] = useState();
  const user = auth.user
  // console.log(user.role)
  useEffect(() => {
    if(!auth.user){
      setCartList([]);
      setPrice(null);
      setItems(null)
    }
    axios.get(`${AutobotBackend}/items/cart`, {
    }).then((response) => {
      setCartList(response.data.reverse().filter((obj, key) => obj.username === auth.user.username));
      let size = 0, key;
      for (key in cartList) {
        if (cartList.hasOwnProperty(key)) {
          size++
        };
      };
      setItems(size)
      if (items !== 0) {
        const totalPrice = cartList.reduce((acc, curr) => { //calculate total
          let cur = curr.price.match(/\d./g).join('') //parse string to integer(cost)
          return acc + Number(cur);
        }, 0)
        setPrice(totalPrice);
      }
    }).catch((error) => {
      console.log(error)
    })
  },
    [cartList, user, items]
  );

  return (
    <div>
      <section></section>
      <nav className="navbar navbar-custom navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/autobots/home">
            <h3><p><span>A</span>utobots⚡</p></h3>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-titles">
              <li className="nav-item">
                <NavLink className="nav-link hover-underline-animation" aria-current="page" to="home">
                  Home
                </NavLink>
              </li>
              {!!auth.user && auth.user.role === "Admin" && (
              <li className="nav-item">
                <NavLink className="nav-link hover-underline-animation" aria-current="page" to="/admin">
                  Admin
                </NavLink>
              </li>
              )}
              <li className="nav-item">
                <NavLink className="nav-link hover-underline-animation" aria-current="page" to="products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link hover-underline-animation" aria-current="page" to="services">
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link hover-underline-animation" aria-current="page" to="spare">
                  Spare
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink className="nav-link hover-underline-animation" aria-current="page" to="orders">
                  Purchases
                </NavLink>
              </li> */}
              <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           History
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="nav-link dropdown-item" to="testridehistory">TestRide</Link></li>
            <li><Link className="nav-link dropdown-item" to="orders">Purchases</Link></li>
          </ul>
        </li>
              <li className="nav-item">
                <NavLink className="nav-link hover-underline-animation" to="aboutus">
                  Team
                </NavLink>
              </li>
            </ul>
            <div className="navcart" >
              <button type="button" className="cartbtn" data-bs-toggle="modal" data-bs-target="#cartModal">
                <img className="carticon-ani" src={cartlogo} alt="" width={47}></img>
                <span className="start-100 translate-middle badge rounded-pill">
                  { (items !== 0 && auth.user ) ? items : null}
                </span>
                <span className="visually-hidden">unread messages</span>
              </button>
              {/*  */}
            </div>

            {!auth.user && (
              <NavLink to="/login">
                <button className="nav-login-btn" type="submit">
                  Login
                </button>
              </NavLink>
            )}
            {!!auth.user && (
              <button className="nav-logout-btn" type="submit" onClick={handleLogout}>
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>
      <Cart cartList={cartList} item={items} logo={cartforin} total={price} />
    </div>
  );
}
