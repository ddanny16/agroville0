import React from 'react'
import "./Compose.css";



 
const Compose = () => {
    return (
        <div>
            <section className="minted">
                <section className="mint">
                Get the latest update on new product directly to your email
                </section>
                <section className="subscribe">
                    <input type="email" placeholder="enter your email address" />
                    <button>Subscribe</button>
                </section>
            </section>
        </div>
    )
}

export default Compose