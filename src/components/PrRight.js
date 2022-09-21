import React from 'react'
import "./PrRight.css"
import Cow2 from "../assets/cow-removebg-preview (1) 1.svg"
import Chick from "../assets/hen copy 1.svg"
import Rabbit from "../assets/rabbit-removebg-preview 1.svg"
import Fishy from "../assets/fish-removebg-preview 1.svg"
import Pigl from "../assets/pig-removebg-preview 1.svg"
import Feed from "../assets/feed-removebg-preview 1.svg"



const PrRight = () => {
    return (
        <dot>
            <mini>
                <cont>
                    <mix> 
                        <div className="tinypic">
                            <img src={Cow2} alt="Cow" className="" />
                        </div>
                        <div className="text_1">
                            <p>
                                Mature Muturu Cow- 203kg
                            </p>
                        </div>
                        <div className="text_2">
                            <p>
                                #7,500
                            </p>
                        </div>
                        <div className="fris">
                            <buttons>Add to cart</buttons>
                            <buttons>Buy now</buttons>
                        </div>
                    </mix>
                </cont>
                <cont>
                    <mix>
                        <div className="tinypic">
                            <img src={Chick} alt="Cow" className="" />
                        </div>
                        <div className="text_1">
                            <p>
                                Layer Chicken- 23kg
                            </p>
                        </div>
                        <div className="text_2">
                            <p>
                                #3,500
                            </p>
                        </div>
                        <div className="fris">
                            <buttons>Add to cart</buttons>
                            <buttons>Buy now</buttons>
                        </div>
                    </mix>
                </cont>
                <cont>
                    <mix>
                        <div className="tinypic">
                            <img src={Rabbit} alt="Cow" className="" />
                        </div>
                        <div className="text_1">
                            <p>
                               Giant Papilon Rabbit- 43kg
                            </p>
                        </div>
                        <div className="text_2">
                            <p>
                                #7,500
                            </p>
                        </div>
                        <div className="fris">
                            <buttons>Add to cart</buttons>
                            <buttons>Buy now</buttons>
                        </div>
                    </mix>
                </cont>
                <cont>
                    <mix>
                        <div className="tinypic">
                            <img src={Fishy} alt="Cow" className="" />
                        </div>
                        <div className="text_1">
                            <p>
                                Carp Fish- 1.3kg
                            </p>
                        </div>
                        <div className="text_2">
                            <p>
                                #1,500
                            </p>
                        </div>
                        <div className="fris">
                            <buttons>Add to cart</buttons>
                            <buttons>Buy now</buttons>
                        </div>
                    </mix>
                </cont>
                <cont>
                    <mix>
                        <div className="tinypic">
                            <img src={Pigl} alt="Cow" className="" />
                        </div>
                        <div className="text_1">
                            <p>
                            Yorkshire White Pig- 114kg
                            </p>
                        </div>
                        <div className="text_2">
                            <p>
                                #7,500
                            </p>
                        </div>
                        <div className="fris">
                            <buttons>Add to cart</buttons>
                            <buttons>Buy now</buttons>
                        </div>
                    </mix>
                </cont>
                <cont>
                    <mix>
                        <div className="tinypic">
                            <img src={Feed} alt="Cow" className="" />
                        </div>
                        <div className="text_1">
                            <p>
                            Vital Feed For Layers- 50kg
                            </p>
                        </div>
                        <div className="text_2">
                            <p>
                                #7,500
                            </p>
                        </div>
                        <div className="fris">
                            <buttons>Add to cart</buttons>
                            <buttons>Buy now</buttons>
                        </div>
                    </mix>
                </cont>
            </mini>
        </dot>
    )
}

export default PrRight
