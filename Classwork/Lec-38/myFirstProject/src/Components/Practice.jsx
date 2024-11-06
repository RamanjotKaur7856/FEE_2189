import React from 'react'

const practice = ({book,author,description}) => {
  return (
    <div className='person'>
        <div className='Main_card'>
        <h1>Book:{book}</h1>
          <h2>Author:{author}</h2>
          <h3>Description:{description}</h3>
        </div>
      </div>
  )
}

export default practice