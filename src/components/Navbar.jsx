import React, { useContext } from 'react'
import StoreContext from '../context/StoreContext'
import { Link } from 'react-router-dom'

const Navbar = () => {
   const{state}  = useContext(StoreContext)
   
  return (
    <div>
        <nav style={{ background: "#333", padding: "10px", color: "white" }}>
      <button>Home</button>
      <Link to={'/cart'}>
        Cart ({state.cart.length})
      </Link>
     
      </nav>
    </div>
  )
}

export default Navbar