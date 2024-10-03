import React from 'react'

import art01 from "../assets/art01.jpg";


const ArtCard = ({artName}) => {
  return (
    <div className='art-card'>
        <div className="art-card-img"><img src={art01} alt="art01" width="75" height="50" /></div>
        <div className="card-hr"></div>
        <div className="name">{artName}</div>
    </div>
  )
}

export default ArtCard