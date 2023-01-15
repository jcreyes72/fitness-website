import React from 'react'
import shoes from "../../img/shoes.jpg"
import garagegear from "../../img/garagegear.jpg"
import zeus from "../../img/zeus-gym-builder.jpg"
import "./ShoesGear.css"

const ShoesGear = () => {
  return (
    <div className="shoes-and-gear">
        <div className="title-header">
            <h2 className='title'>HOME FITNESS</h2>
        </div>
        <div className="img-container">
            <div className="home-product">
                <img src={shoes} alt="Shoes for every workout" />
                <h3>Shoes for every workout</h3>
                <a href="/" className="shop-now-link">Shop now</a>
            </div>
            <div className="home-product">
                <img src={garagegear} alt="Garage gym gear" />
                <h3>Garage Gym Gear</h3>
                <a href="/" className="shop-now-link">Shop now</a>
            </div>
            <div className="home-product">
                <img src={zeus} alt="Zeus gym builder" />
                <h3>Zeus Gym Builder</h3>
                <a href="/" className="shop-now-link">Shop now</a>
            </div>
        </div>
    </div>
  )
}

export default ShoesGear