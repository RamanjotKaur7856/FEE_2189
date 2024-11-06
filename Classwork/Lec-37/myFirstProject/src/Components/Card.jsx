import React from 'react'
import "../Components/Card.css"
const Card = () => {
  return (
    <>
    <div className='main_container'>
      <div className='main-div'>
        <div className='image'>

        <img src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1728561356_7417573.jpg?format=webp&w=480&dpr=1.0" alt="" />
        </div>
        <div className='content'>
          <p>Transformers: BumbleBee</p>
          <p>Men High Top Sneakers</p>
          <button>Buy Now</button>
        </div>
      </div>
    </div>
    </>

  )
}

export default Card