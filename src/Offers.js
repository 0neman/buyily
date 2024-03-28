import React from 'react';
import './Offers.css';

function Offers({image, name, price, description}) {
  return (
    <div style={{backgroundImage: `url(${image})` }} className='offers'>
      <div className='offers__bottom'>
        <h4>{name}</h4>
      </div>
      <div className='offers__bottom--active'>
        <h4>{price}</h4>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Offers
