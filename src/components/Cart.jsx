import React, { useContext } from 'react'
import StoreContext from '../context/StoreContext'
const Cart = () => {
  const {state,dispatch}= useContext(StoreContext)

  const total = state.cart.reduce((sum,item)=> sum+item.price*item.qty , 0)
  return (
    <div>
      <h1>Cart</h1>
          

          {state.cart.lengh===0 ? (<p>No items in your cart</p>):
          (
            <>
          {state.cart.map((item) => (
            <div key={item.id}>
              {item.name} - {item.qty} x ₹{item.price} = ₹
              {item.qty * item.price}
              <button onClick={()=>dispatch({type:"decrease_qty",id:item.id})}>-</button>
              <button onClick={()=> dispatch({type : "increase_qty", id: item.id})} >+</button>
              <button onClick={() => dispatch({ type: "remove_cart", id: item.id })}>❌ Remove</button>
            </div>
          ))}
          <h2>Total: ₹{total}</h2>
        </>
      )}
    </div>
  );
}
          


export default Cart