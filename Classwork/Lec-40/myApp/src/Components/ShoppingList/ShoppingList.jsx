import React from 'react'
import Products from '../Products/Products'
const ShoppingList = () => {
    const products=[
        {
            name:"Burger",
            imgURL:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnVyZ2VyfGVufDB8fDB8fHww',
            price:150,
        },
        {
            name:"Pizza",
            imgURL:'https://images.unsplash.com/photo-1555072956-7758afb20e8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGl6emF8ZW58MHx8MHx8fDA%3D',
            price:350,
        },
        {
            name:"Pasta",
            imgURL:'https://plus.unsplash.com/premium_photo-1677000666741-17c3c57139a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGFzdGF8ZW58MHx8MHx8fDA%3D',
            price:500,
        }
    
    ]
  return (
    <section>
        {products.map((product)=>{
            return (
                <Products name={product.name} imgURL={product.imgURL} price={product.price}/>
            )
        })}
    </section>
  )
}

export default ShoppingList