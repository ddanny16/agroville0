import React from 'react'
import { useState } from "react"
import "./MainProd.css"
import list from "./ProjectData"
import Cards from "./Cards";
import Cart from '../routes/Cart';


const Products = () => {

    const [cart, setCart] = useState([]);

    const handleClick = (item) => {
        cart.push(item)
        console.log(cart)

    //    return <Cart cart={cart} /> 
    }

    return (
        <vine>
            <tab>
                {list.map((item) => (
                    <Cards key={item.id} item={item} handleClick={handleClick} />
                ))}
            </tab>

        </vine>
    )
}

export default Products
