import React from 'react'
import './Flipkart.css'
const Flipkart = ({img,description,price}) => {
  return (
    <div className='cards'>
        <img src={img} alt="Product" className="card-image" />
        <h3 className='content'>{description}</h3>
        <p className='content'>{price}</p>
      </div>
  )
}

export default Flipkart