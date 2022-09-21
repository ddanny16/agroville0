import React from "react";


const Cards = ({ item, handleClick }) => {
  const {id,  text2, text1, imgsrc } = item;
  return (
    <div className="cards">
             <cont>
                    <mix> 
                        <div className="tinypic">
                            <img src={imgsrc} alt="pics" />
                        </div>
                        <div className="text_1">
                            <p>
                                {text1}
                            </p>
                        </div>
                        <div className="text_2">
                            <p>
                            {text2}
                            </p>
                        </div>
                        <div className="fris">
                            <buttons onClick={() => handleClick(item)}>Add to cart</buttons>
                            <buttons>Buy now</buttons>
                        </div>
                    </mix>
                </cont>
    </div>
  )
}

export default Cards;