import React from 'react'
import { Link } from "react-router-dom";
import AgrovilleLogo from "../assets/agrovillelogo.svg";



const ProfileHome = () => {
  return (
    <div>
      <Link to="/">
        <img className="Logo" src={AgrovilleLogo} alt="Agroville" />
      </Link>

    </div>
  )
}

export default ProfileHome 
