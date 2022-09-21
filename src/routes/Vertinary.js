import React from 'react'
import Navbar from '../components/Navbar'
import { FaSearch } from "react-icons/fa"
import HeroSect from '../components/HeroSect'

import Background3 from "../assets/vertinaryBG.svg"

const Vertinary = () => {
  return (
    <div>

      <Navbar />
      <HeroSect img={Background3} heading="Vertinary" text="Consult us for the well beign of your farm animal, we specialise on giving your farm animal the best    " btn={<FaSearch size={20} style={{
        color: "#fff",
        marginRight: "0rem",



      }} />} />
    </div>
  )
}

export default Vertinary
