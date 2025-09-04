import React from 'react'
import "./BredCrums.css"
import arrow_icon from "../../assets/arrow_icon.png"

const BredCrums = ({ product }) => {
  if (!product) return null;  // avoid crash until product is ready

  return (
    <div className="bredcrums">
      Home
      <img src={arrow_icon} alt="" height="10px"/> Shop
      <img src={arrow_icon} alt="" height="10px"/> {product.category}
      <img src={arrow_icon} alt="" height="10px"/> {product.name}
      <img src={arrow_icon} alt="" height="10px"/>
    </div>
  )
}

export default BredCrums