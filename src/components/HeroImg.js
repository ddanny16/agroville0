import React from 'react'
import { Component } from 'react';
import "./HeroImgStyles.css";





class HeroImg extends Component {
    render() {
        return (
            <div className="hero">
                <div className="mask">
                    <img className='into-img' src={this.props.img} alt="" />
                </div>
                <div className='content'>
                    <h3>{this.props.heading}</h3>
                    <p>{this.props.text}</p>
                    <div>
                            


                        <input type="text"  id="input" placeholder="" onChange={this.props.newVal} />
                        <button>
                            {this.props.btn}
                        </button>


                    </div>
                </div>
            </div>
        );
    }
}

export default HeroImg
