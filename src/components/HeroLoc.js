import React from 'react'
import Location from "../assets/contactus.svg"
import "./HeroLoc.css";
import TextSpace from '../components/TextSpace';



const HeroLoc = () => {
  return (
    <div className="hero">
      <div>
      <hance>
        Contact Us
      </hance>

        <div classNmae="mask1">
          <img className='into-img1' src={Location} alt="" />

        </div>
      </div>
      <div className="loc">
        <TextSpace />
      </div>
    </div>
  )
}

export default HeroLoc