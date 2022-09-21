import "./NavbarStyles.css";
import React from 'react'
import { Link } from "react-router-dom";
import AgrovilleLogo from "../assets/agrovillelogo.svg";
import Cart1 from "../assets/clarity_shopping-cart-solid.svg"
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"


const Navbar = ({ setShow }) => {
  // const activeLink=""
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  // const isActive="Home"

  window.addEventListener("scroll", changeColor);
  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <img className="Logo" src={AgrovilleLogo} alt="Agroville"  onClick={() => setShow(true)}/>
      </Link>

      <ul className={click ? "nav-menu active" : "nav-menu"}>

        <li>
          <Link to="/" className="effect1" >Home</Link>
        </li>
        <li  >
          <Link to="/products" className="effect1">Products</Link>
        </li>
        <li>
          <Link to="/investments" className="effect1">Investments</Link>
        </li>
        <li>
          <Link to="/vertinary" className="effect1">Vertinary</Link>
        </li>
        <li>
          <Link to="/contact" className="effect1">Contact Us</Link>
        </li>
        <li>
          <Link to="/profile" className="effect1">Profile</Link>
        </li>
        <li onClick={() => setShow(false)}>
          <Link className=" effect1" to="/cart" ><img className="onepiece" src={Cart1} alt="cart" /> Cart <san>0</san></Link>
        </li>

      </ul>

      <div className="hamburger" onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{ color: "#ffe" }} />) :
          (<FaBars size={20} style={{ color: "#fff" }} />)}


      </div>

    </div>
  )
}

export default Navbar

