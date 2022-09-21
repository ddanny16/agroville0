import React from 'react'
import { Component } from 'react';
import "./HeroImgStyles.css";





class HeroSect extends Component {
    render() {
        return (
            <div className="hero">
                <div className="mask">
                    <img className='into-img' src={this.props.img} alt="" />
                </div>
                <div className='content'>
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                    <div>
                            


                      

                    </div>
                </div>
            </div>
        );
    }
}

export default HeroSect