import React from 'react'

import craft01 from "../assets/craft01.jpg";

const ArtWorkCard = () => {
  return (
    <div className='artwork-card'>
        <div className="artwork-img"><img className='img-res' src={craft01} alt="craft01" /></div>
        <div className="artwork-content"><p>Details...</p> <span>$ 10</span></div>
        <button className="btn">Add to Cart</button>
    </div>
  )
}

export default ArtWorkCard