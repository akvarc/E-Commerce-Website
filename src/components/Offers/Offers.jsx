import React from 'react'
import "./Offers.css"
import exclus from "../../assets/exclu.webp"

const Offers = () => {
  return (
    <div className="offers">
    <div className="offers-left"><h1>Exclusive</h1>
    <h1>Offers for you</h1>
    <p>ONLY ON BEST SELLER PRODUCTS</p>
    <button>Check now </button></div>
    <div className="offers-right">
        <img src={exclus} alt="" />
    </div>
    </div>
  )
}

export default Offers