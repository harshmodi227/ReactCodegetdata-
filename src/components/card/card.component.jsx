import React from 'react'

import './card.style.css'

function Card({ item }) {
  return (
    <div className='card'>
        <div className='image-container'>
            <img className='image' src={item.image} alt='img' />
        </div>
        <div className='info-container'>
            <p className='name'>{item.name}</p>
            <p className='days'>{item.days}</p>
            <p className='nights'>{item.nights}</p>
            <p className='price'>{item.price}</p>
        </div>
    </div>
  )
}

export default Card