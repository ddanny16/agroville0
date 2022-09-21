import React from 'react'
import "./LogoPic.css"
import Logo1 from "../assets/The_Farm_51-Logo 1.svg"
import Logo2 from "../assets/The_a2_Milk_Company-Logo 1.svg"
import Logo3 from "../assets/Pepperidge_Farm-Logo 1.svg"
import Logo4 from "../assets/farmfoodslogo.svg"
import Logo5 from "../assets/Dairy_Farm_International_Holdings-Logo.wine 1.svg"
import Logo6 from "../assets/aquariusLogo.svg"

const LogoPic = () => {
    return (
        <div>
           
                <logotext>
                   <p>
                   Sponsors
                   </p>
                </logotext>
            
            <logos>
                <img src={Logo4} alt="" />
                <img src={Logo5} alt="" />
                <img src={Logo2} alt="" />
                <img src={Logo6} alt="" />
                <img src={Logo3} alt="" />
                <img src={Logo1} alt="" />
            </logos>
        </div>
    )
}

export default LogoPic
