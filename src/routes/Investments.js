import React from 'react'
import Navbar from '../components/Navbar'
import {FaSearch} from "react-icons/fa"
import HeroSect from '../components/HeroSect'

import Background2 from "../assets/Investmentsbg.png"

const Investments = () => {
  return (
    <div>
      
        <Navbar />
        <HeroSect img={Background2} heading="Investments" text="Rare and own a livestock that gives you egde on financial stability without being a farmer "  btn={<FaSearch size={20} style={{
                                color: "#fff",
                                marginRight: "0rem",
                            
                            

                            }} />} />
    </div>
  )
}

export default Investments
