import React, { useContext } from 'react'
import StoreContext from '../context/StoreContext'

const Product = () => {

  const {dispatch}= useContext(StoreContext)
      const product = [
        {id :1,name: "Mobile", price: 20000},
        {id:2,name:"Laptop",price:50000},
        {id:3,name: "Headphone",price:10000}
    ]
  return (
    <div>
        <h2>Product List</h2>
          {product.map((p) => (
        <div key={p.id} style={{ margin: "10px 0" }}>
          <strong>{p.name}</strong> - ₹{p.price}
          <button onClick={()=>dispatch({type:"add_cart",product:p})}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  )
}

export default Product